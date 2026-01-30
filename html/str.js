// find the repeated charter
let str ="shubham "


for( let i=0;i<str.length;i++){
    let ch =str[i];
    let count =0;
    for(let j=0;j<str.length;j++){
        if( str[j]=== ch){
            count++;
        }
    }

    if(count>1 && str.indexOf(ch)===i&& ch!='' ){
        console.log(ch)
    }
}