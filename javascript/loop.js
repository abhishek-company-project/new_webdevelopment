
// for(var i=1;i<2;i++){

// }

// for(var i=5;i>=5;i++){
//     console.log(i)
// }

// for(var i=1;i<=15;i+=3){
//     console.log(i)
// }

// for(var i=9;i<15;i++){
//     console.log(i)
// }

// for(var i=7;i>=10;i--){
//     console.log(i)
// }

// for(var i=1;i<5;i--){
//     console.log(i)
// }



for(var i=0;i<7;i++){
    if(i%2==1 || i<5){
        console.log(i)
        if(i>5 || i%2==0){
            console.log(i%2)
        }
        else{
            console.log(i-2)
        }
    }
    else{
        if(i%3==1){
            console.log(i)
        }
        console.log(i+2)
    }
}