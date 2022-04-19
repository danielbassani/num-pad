# num-pad-array
Provides functionality to pad each element of an array with 0s, according to the number with the most digits in the array.

```
Example:
    Input Array: [ 1000, 12345, 3, -17, 54 ]
    Output Array: [ '01000', '12345', '00003', '-00017', '00054' ]

```

```
Installation:
    npm i num-pad-array

```

```
Usage:
    var npa = require('num-pad-array');

    let result = npa.pad([ 1000, 12345, 3, -17, 54 ]); // array can be numeric
    console.log(result); // [ '01000', '12345', '00003', '-00017', '00054' ]

    let result = npa.pad(['5555', '1', '800', '7', '-40506']); // array can be a string representation of numbers
    console.log(result); // [ '05555', '00001', '00800', '00007', '-40506' ]

```



