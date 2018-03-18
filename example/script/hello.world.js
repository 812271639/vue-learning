var app = new Vue({
    el:'#app',
    data:{
        message:'hello Vue!'
    }
});
var app2 = new Vue({
    el:'#app-2',
    data:{
        message:'页面加载于'+ new Date().toLocaleString()
    }
});
var app3 = new Vue({
    el:'#app-3',
    data:{
        seen:true
    }
});

var app4 = new Vue({
    el:'#app-4',
    data:{
        todos:{
            test1:'JavaScript',
            test2:'Vue',
            test3:'新知识',
            test4:'es6'
        }
        // todos:[
        //     {test:'学习 JavaScript'},
        //     {test:'学习 Vue'},
        //     {test:'学习 新知识'}, 
        //     {test:'学习 es6'}
        // ]
    }
});

var app5 = new Vue({
    el:"#app-5",
    data:{
        message:'hello vue !'
    },
    methods:{
        reverseMessage:function () {
            this.message = this.message.split('').reverse().join('');
        }
    }
});

var app6= new Vue({
    el:'#app-6',
    data:{
        message:"hello vue !"
    }
});

Vue.component('todo-item',{
    props:['todo'],
    template:'<li>{{ todo.text }}</li>'
});

var app7 = new Vue({
    el:"#app-7",
    data:{
        groceryList:[
            {id:1,text:"白菜"},
            {id:2,text:"南瓜"},
            {id:3,text:"西瓜"}]
    }
})