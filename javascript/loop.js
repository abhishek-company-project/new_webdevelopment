
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



// for(var i=0;i<7;i++){
//     if(i%2==1 || i<5){
//         console.log(i)
//         if(i>5 || i%2==0){
//             console.log(i%2)
//         }
//         else{
//             console.log(i-2)
//         }
//     }
//     else{
//         if(i%3==1){
//             console.log(i)
//         }
//         console.log(i+2)
//     }
// }

// var name="1458";
// var num=23;

// num+=3;
// console.log(num)
// name+=45
// console.log(name)

// var pattern="";
// for(var i=0;i<5;i++){
//     for(var j=0;j<5;j++){
//        if(i==0 || i==4 || j==0 || j==4){
//         pattern+="* "
//        }
//        else{
//         pattern+="  "
//        }
//     }
//     pattern+="\n"
// }

// console.log(pattern)



// var pattern="";

// for(var i=0;i<4;i++){
//     for(var j=0;j<4;j++){
//        if(i==0 || i==3 || j==0 || j==3){
//          pattern+="* ";
//        }
//        else{
//         pattern+="  "
//        }
//     }
//     pattern+="\n"
// }

// console.log(pattern)

// var pattern="";

// for(var i=0;i<4;i++){
//     for(var j=0;j<4;j++){
//        if((i==0 && j==0) || (i==0 && j==3) || (i==3 && j==0) || (i==3 && j==3) ){
//          pattern+="* ";
//        }
//        else{
//         pattern+="  "
//        }
//     }
//     pattern+="\n"
// }

// console.log(pattern)


// Q2 full pattern
// var pattern="";

// for(var i=0;i<5;i++){
//     for(var j=0;j<=i;j++){
//        pattern+="* "
//     }
//     pattern+="\n"
// }

// console.log(pattern)



// Q2  pattern
// var pattern="";

// for(var i=0;i<5;i++){
//     for(var j=0;j<=i;j++){
//         if(i==0 || i==4 || j==0 || j==i){
//              pattern+="* "
//         }
//         else{
//              pattern+="  "
//         }
      
//     }
//     pattern+="\n"
// }

// console.log(pattern)


// Q3 

//  var pattern="";

// for(var i=0;i<5;i++){
//     for(var j=0;j<5-1-i;j++){
//        pattern+="  "
//     }
//     for(var k=0;k<=i;k++){
//         if(i==0 || i==4 || k==0 || k==i){
//             pattern+="* "
//         }
//         else{
//             pattern+="  "
//         }
//     }
//     pattern+="\n"
// }

// console.log(pattern)