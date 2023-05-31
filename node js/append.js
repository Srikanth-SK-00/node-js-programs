var fs =require('fs');

fs.writeFile('sri.txt','face', function(err)
{
    if(err) throw err;
    console.log('completed');
});