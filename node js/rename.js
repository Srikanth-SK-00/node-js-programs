var fs =require('fs');

fs.rename('sri.txt','srikanth.txt',function(err)
{
    if(err) throw err;
    console.log('renamed');
});
