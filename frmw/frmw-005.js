new Vue({
    el: app,
     data: {
          colors:{
            r: 125,
            g: 125,
            b: 125,
          }
        },
     methods: {
     changeColor: function() {
       document.querySelector('body').style.cssText = `background: rgb(${this.colors.r},${this.colors.g},${this.colors.b})`;
     }}})
;}