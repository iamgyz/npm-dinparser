##This is a Dinbendon parser


###Install:

`npm install dinparser`

###Usage:

1. Directly print the result:

```
var din = require('dinparser');

din.print('username','password');
```

2. Using callback fumction

```
var din = require('dinparser');

din.parse('username','password',function(result){
    console.log(result);
});

```

