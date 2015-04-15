/* Author : GYzheng, guanggyz@gmail.com
*  Feature : Dinbendon parser
*  Version : 0.2.0
*/

exports.parse = function parse(username,password,callback)
{
    var request = require('request');
    var cookieJar = request.jar();
    var url1 = 'https://www.dinbendon.net/do';
    var url2 = 'https://www.dinbendon.net/do/?wicket:interface=:1:signInPanel:signInForm::IFormSubmitListener';
    request({url:url1,jar:cookieJar}, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var match = body.match(/(\d*)\+(\d*)/)[0];
            var ans = parseInt(match.split('+')[0]) + parseInt(match.split('+')[1])
            _url2 = url2+'&username='+username+'&password='+password+'&result='+ans+'&signInPanel_signInForm:hf:0=&rememberMeRow:rememberMe=on&submit=login';
            request.post({url:_url2, jar:cookieJar,followAllRedirects:true},function(error,response,body){
            if (!error && response.statusCode == 200){
                var match = body.match(/<span>(.*)<\/span>.*created.*<span>(.*)<\/span>/g);
                var result = [];
                for(var i=0;i<match.length;i++){
                        var tmp = match[i].replace(/<span>/g,'').replace(/<\/span>/g,'').replace('created',',').split(',');
                        var name = tmp[0].trim();
                        var item = tmp[1].trim();
                        result.push({'name':name,'item':item});
                    }//for   
                }//if
                callback(result)
            });
        }
    });
};

exports.print = function print(username,password)
{
    this.parse(username,password,function(result){
        for(var i=0;i<result.length;i++)
        {
            console.log(result[i]['name']+' created '+result[i]['item']);
        }
    });
}
