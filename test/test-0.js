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
data.name = 666;