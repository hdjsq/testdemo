new Vue({
    el: "#app",
    data: {
        msg: "你好",
        arr: [1, 2, 3]
    },
    methods: {
        beforeCreate: function () {
            console.group('beforeCreate ?????===============?');
            console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
            console.log("%c%s", "color:red", "data   : " + this.$data); //undefined 
            console.log("%c%s", "color:red", "message: " + this.message)
        },
        created: function () {
            console.group('created ??????===============?');
            console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
            console.log("%c%s", "color:red", "data   : " + this.$data); //????? 
            console.log("%c%s", "color:red", "message: " + this.message); //?????
        },
        beforeMount: function () {
            console.group('beforeMount ?????===============?');
            console.log("%c%s", "color:red", "el     : " + (this.$el)); //?????
            console.log(this.$el);
            console.log("%c%s", "color:red", "data   : " + this.$data); //?????  
            console.log("%c%s", "color:red", "message: " + this.message); //?????  
        },
        mounted: function () {
            console.group('mounted ??????===============?');
            console.log("%c%s", "color:red", "el     : " + this.$el); //?????
            console.log(this.$el);
            console.log("%c%s", "color:red", "data   : " + this.$data); //?????
            console.log("%c%s", "color:red", "message: " + this.message); //????? 
        },
        beforeUpdate: function () {
            console.group('beforeUpdate ?????===============?');
            console.log("%c%s", "color:red", "el     : " + this.$el);
            console.log(this.$el);
            console.log("%c%s", "color:red", "data   : " + this.$data);
            console.log("%c%s", "color:red", "message: " + this.message);
        },
        updated: function () {
            console.group('updated ??????===============?');
            console.log("%c%s", "color:red", "el     : " + this.$el);
            console.log(this.$el);
            console.log("%c%s", "color:red", "data   : " + this.$data);
            console.log("%c%s", "color:red", "message: " + this.message);
        },
        beforeDestroy: function () {
            console.group('beforeDestroy ?????===============?');
            console.log("%c%s", "color:red", "el     : " + this.$el);
            console.log(this.$el);
            console.log("%c%s", "color:red", "data   : " + this.$data);
            console.log("%c%s", "color:red", "message: " + this.message);
        },
        destroyed: function () {
            console.group('destroyed ??????===============?');
            console.log("%c%s", "color:red", "el     : " + this.$el);
            console.log(this.$el);
            console.log("%c%s", "color:red", "data   : " + this.$data);
            console.log("%c%s", "color:red", "message: " + this.message)
        }
    }
})