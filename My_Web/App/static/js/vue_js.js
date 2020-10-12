const app = new Vue({
    delimiters: ['[[', ']]'],
    el: "#app",
    data: {
        message: "hello",
        movies: [0, 1, 2, 3, 4, 5],
    },
    created: function () {
        console.log("创建成功")
    }
})
