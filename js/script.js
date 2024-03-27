const { createApp } = Vue

  createApp({
    data() {
      return {
        message: '<h1>Hello World - Hej världen!</h1>',
        text: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, velit soluta voluptate quaerat vitae magni numquam quam quasi minus quisquam dolor delectus, ipsam incidunt aliquam, hic error optio id ullam?</p>',
        image: "kungalv-ny-3.jpeg",
        imgclass: "picture",
        obj: {
            id: "container",
            class: "text"
        }
      }
    },
  }).mount('#app')