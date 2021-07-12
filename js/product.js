
var vm = new Vue({
  el: '#pro-app',
  data() {
    return {
      scrollTop: 0,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll()
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    backToTop() {
      scrollToTop();
    },
    handleScroll() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    },
  },
});
