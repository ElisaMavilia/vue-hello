const { createApp } = Vue

  createApp({
    data() {
      return {
        message: '<h1>Hello World - Hej världen!</h1>',
        image: "kungalv-ny-3.jpeg"
      }
    },
  }).mount('#app')