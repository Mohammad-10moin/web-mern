const crypto = require('crypto');
for(var i=0;i>=0;i++){
    const hash= (crypto.createHash('sha256').update(i.toString()).digest('hex'));
    if(hash.startsWith('00000')){
        console.log(i);
        console.log(hash);
        break;
    }
}