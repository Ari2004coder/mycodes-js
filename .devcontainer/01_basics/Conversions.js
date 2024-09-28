//String to Number
let s="33";
let value=Number(s);
s="33ab"
let value1=Number(s);//type coversion is done but its NaN(not a number)
//bolean to Number
let bool1=true;
let bool2=false;
let value2=Number(bool1);
let value3=Number(bool2);
//Number to string
let v=10;
let str=String(v);
//string and Number to boolean
let st="";
let bool3=Boolean(st);
st="abx"
let bool4=Boolean(st);
let num=0;
let bool5=Boolean(num);
num=10;
let bool6=Boolean(num)

console.table([value,value1,value2,str,bool3,bool4,bool5,bool6])

