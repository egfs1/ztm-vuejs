const vm = Vue.createApp({
    data() {
       return  {
            perspective: 500,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            color: '#8d81f3'
       }
    },
    methods: {
        reset() {

            this.perspective = 500;
            this.rotateX = 0;
            this.rotateY = 0;
            this.rotateZ = 0;
            this.color = '#8d81f3';
        },
        async copy() {
            const text = `transform: ${this.box.transform};\nbackground: ${this.box.background};`
            await navigator.clipboard.writeText(text);
            alert('CSS copied to clipboard')
        }
    },
    computed: {
        box() {
            return {
                transform: `perspective(${this.perspective}px) rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`,
                background: this.color
            }
        }
    },
}).mount('#app');