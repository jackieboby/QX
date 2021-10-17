var obj = JSON.parse($response.body);
    obj = {};


$done({body: JSON.stringify(obj)});

另一种方式

var modifiedHeaders = $request.headers;

modifiedHeaders['Host'] = 'AD';

$done({headers : modifiedHeaders});

*/
var modifiedHeaders = $request.headers;

modifiedHeaders['Host'] = 'AD';

$done({headers : modifiedHeaders});
