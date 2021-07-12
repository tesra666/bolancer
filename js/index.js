var vm = new Vue({
  el: '#home-app',
  data() {
    return {
      scrollTop: 0,
      videoIndex: 1,
      showVideo1: false,
      showVideo2: false,
      tabIdx: 1,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll()
    this.initSwiper()
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    backToTop: scrollToTop,
    handleScroll() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    },
    initSwiper() {
      var mySwiper = new Swiper ('.swiper-container', {
        // direction: 'vertical', // 垂直切换选项
        // loop: true, // 循环模式选项
        autoplay: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
        // // 如果需要滚动条
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      })
    },
    swVideo(data) {
      this.videoIndex += data
      if (this.videoIndex<= 1) {
        this.videoIndex = 1
      }
      if (this.videoIndex >= 2) {
        this.videoIndex = 2
      }
    },
    palyVideo1() {
      // this.videoIndex = index
      this.showVideo1 = true
      this.$refs.videoPlayer1.play()
    },
    palyVideo2(index) {
      // this.videoIndex = index
      this.showVideo2 = true
      this.$refs.videoPlayer2.play()
    },
    closeVideo1() {
      this.$refs.videoPlayer1.pause()
      this.showVideo1 = false
    },
    closeVideo2() {
      this.$refs.videoPlayer2.pause()
      this.showVideo2 = false
    }
  },
});
