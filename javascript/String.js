

var str="abhishek";
// console.log(str.length) // length property
// console.log(str.charAt(5)) // charAt() method
// console.log(str.at(0))
// console.log(str[0])

// for(var i=0;i<str.length;i++){
//     console.log(str[i])
// }
// console.log(str.charCodeAt(3))


// get one by one all character 
// check every chaacter is equal to h 
// if character is equal so increse the count value 
// var count=0;
// for(var i=0;i<str.length;i++){
//     if(str[i]=="h"){
//         count++;
//     }
// }

// console.log(count)
// var str="abhishek gurjar";
// var vowel=0;
// var space=0;
// for(var i=0;i<str.length;i++){
//     if(str[i]=="a" || str[i]=="i" || str[i]=="o" || str[i]=="e" || str[i]=="u"){
//         // console.log(str[i])
//         vowel++;
//     }
//     else if(str[i]==" "){
//         // console.log(str[i])
//         space++;
//     }
// }

// console.log(str.length-vowel-space)

// write a program to conver upper case character into lower case char



// var str="ShanTI INFOsoft"

// // get one by one char 
// // and convert into ascii value of each char 
// // then check ascci value range according to upper and lower 
// //  if range is between lower ascii convert the character into upper vise 
// // store result into new str
// var result=""
// for(var i=0;i<str.length;i++){
//     var charcode=str.charCodeAt(i);
//     if(charcode>=65 && charcode<=90){
//         result+=str[i].toLowerCase();
//     }else if(charcode>=97 && charcode<=122){
//         result+=str[i].toUpperCase();
//     }else{
//         result+=str[i]
//     }

// }
// console.log(result)



// str="abhi shek gur jar";

// // Abhishek Gurjar
// var result=""
// var space=false;
// for(var i=0;i<str.length;i++){

//     if(i==0 || space==true){
//         result+=str[i].toUpperCase();
//         space=false;
//     }
//     else if(str[i]==" "){
//         result+=str[i]
//         space=true;
//     }
//     else{
//         result+=str[i]
//     }
// }

// console.log(result)


// str="abhishek"
// result=""
// // kehsihba
// // for(var i=str.length-1;i>=0;i--){
// //     result+=str[i]
// // }
// for(var i=0;i<str.length;i++){
//     result=str[i]+result
// }
// console.log(result)

// var num=458;


// while(num>0){
//     var digit=num%10;
//     console.log(digit)
//        num=parseInt(num/10)
// }







// var i=3;
// while(i<=6){
//     if(i%2==0){
//         console.log(i-2)
//         i++;
//     }
//     else{
//         console.log(i)
//     }
//     i++;
// }

// var i=4;
// do{
//     console.log("hello")
//     i++;
// }while(i<=3)


// for(var i=0;i<9;i++){
//     if(i==5){
//         continue;
//     }
//     console.log(i)
//     console.log("hiii")
// }