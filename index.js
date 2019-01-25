var data = {
    name:'lhl',
    asas:[6,7]
}

Object.keys(data).forEach(function(key){
    Object.defineProperty(data,key,{
        enumerable:true,
        configurable:true,
        get:function(a){
            console.log(a);
        },
        set:function(a){
            console.log(a);
        }
    })
});
// data.asas //控制台会打印出 “get”
// data.name = 'hxx' //控制台会打印出 "监听到数据发生了变化"
// data.asas.push(7)
data.name = 666;
console.log(data.name)
