// Destructuring
var array = [11,22,33,55];
var [x,y]=array; // 11,22
console.log("x=",x);
console.log("y=",y);

var [a,b,c] = array;
console.log("a=",a);
console.log("b=",b);
console.log("c=",c);



// oject
const preson = {
    name: "Quach Thinh",
    age: 20,
    city: "Hà noi"
}
console.log("tên",preson.name);
console.log("Tuổi",preson.age);
console.log("Thành phố:",preson.city);


//
const {name,age,city} = preson;
console.log("tên:",name);
//console.log("Tuổi:",age);
console.log("Thành phố:",city);