var app = new Vue({
    el:"#app",
    data:{
      message:"learing vue ",
      msg: "vue is awesome",
      seen:true ,
      name:"vuejs",
      todos:[
        {
          text:'Learn JS'
        },
        {
          text:'Learn vue'
        }
      ]
    },
    methods:{
      reverseMessage:function(){
        //console.log(this)
        this.message = this.message.split('').reverse().join('')
      }
    }
});
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

new Vue({
  el: '#custom-directive',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})