const chetan ={
    name: 'chetan',
    sayName:function(){
        console.log(this.name);
    },
};

const ram={
    name:'ram',
    sayName:function(){
        console.log(this.name);
    },
}

ram.sayName();
ram.sayName.call(chetan);
ram.sayName.call();
