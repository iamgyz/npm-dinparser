##This is a Dinbendon parser


###Install:

`npm install dinparser`

###Usage:

* Directly print the result:

```
var din = require('dinparser');

din.print('username','password');
```

* Using callback fumction

```
var din = require('dinparser');

din.parse('username','password',function(result){
    console.log(result);
});

```

