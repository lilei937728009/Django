const app = new Vue({
    delimiters: ['[[', ']]'],
    el: "#app",
    data: {
        message: "hello",
        movies: [0, 1, 2, 3, 4, 5],
        input_text:false,
        t_color: false,
        font_size: 1,
    },
    methods: {
        btnclick: function(){
            this.input_text = !this.input_text
            this.t_color = !this.t_color
        },
        btn_add() {

            this.font_size += 1
        },
        btn_sub(){
            this.font_size -= 1
        }
    },
    created: function () {
        console.log("创建成功")
    }
})

