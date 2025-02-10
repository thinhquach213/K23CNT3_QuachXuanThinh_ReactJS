var x=100 //global
function varDemo(){
    console.log('X Bên trong hàm là:',x);
}
// 
console.log("x bên ngoài hàm là :",x);

// thực thi hàm
varDemo();


//local
function fn_demo(){
    var y=222; //local
    console.log("y bên trong hàm",y);
    
}
fn_demo();
console.log("y bên ngoài hàm",y); // ==error ReferenceError: y is not defined

// ví dụ chatGPT /Deepseek