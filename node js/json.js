const txt = '[ "sri", "karthi"]';
const arr = JSON.parse(txt);
console.log(arr);
const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj = JSON.parse(text);
obj.birth = new Date(obj.birth);
console.log(obj.name,obj.birth,obj.city);