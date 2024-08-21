const chetan={
    name: 'chetan',
    sayname:function(){
        console.log(this.name);
    },
};

let say=chetan.sayname;
console.log(say());// undefine
// abouve two line will give the undefine value of the say function

say=chetan.sayname.bind(chetan);

chetan.sayname();// chetan 

say();//c hetan