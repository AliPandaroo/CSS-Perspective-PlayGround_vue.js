// @ts-ignore
const vm = Vue.createApp({
  data() {
    return {
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,

    }
  },
  computed: {
    Box() {
      return {
        transform: `
        perspective(${this.perspective}px)
        rotateX(${this.rotateX}deg)
        rotateY(${this.rotateY}deg)
        rotateZ(${this.rotateZ}deg)
        `,
        
      }
    },
    
  },
  methods: {
    ResetFunc() {
      this.perspective = 100
      this.rotateX = 0
      this.rotateY = 0
      this.rotateZ = 0

    },
    async CopyFunc() {
      let text = `transform: ${this.Box.transform};`
      await navigator.clipboard.writeText(text);

      alert("CSS Coppied to clipboard");
    },

  },
  watcher: {

  },

}).mount('#app')