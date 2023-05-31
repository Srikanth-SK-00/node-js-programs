var fs = require('fs');
fs.open('sri.txt', 'w',function(err, file)
{
    if(err) throw err;
    console.log('opened');
});
