var obj = JSON.parse($response.body);

obj.data = obj.data.slice(1)

$done({ body: JSON.stringify(obj) }); 
