// Generated by CoffeeScript 1.4.0
/*
Author: Satoshi Inaba
http://i78s.me
jQueryを使わないオレオレコンテンツスライダー
*/

(function(win) {
  var $window, Slider, initialize;
  $window = win;
  Slider = function(element, options) {
    if (!element) {
      return null;
    }
    this.container = element;
    this.element = this.container.children[2];
    this.slides = this.element.children;
    this.length = this.slides.length;
    this.current = 0;
    this.slideWidth = parseInt(document.defaultView.getComputedStyle(this.slides[0], '').width);
    this.options = options || {};
    this.duration = this.options.duration || 400;
    this.easing = this.options.easing || 'ease';
    this.delay = this.options.delay || 0;
    this.setup();
  };
  Slider.prototype = {
    setup: function() {
      var _this = this;
      this.nextNav = document.getElementById("nextNav");
      this.prevNav = document.getElementById("prevNav");
      this.nextNav.addEventListener("click", function() {
        return _this.slide("next");
      }, false);
      this.prevNav.addEventListener("click", function() {
        return _this.slide("prev");
      }, false);
      this.prevNav.style.opacity = 0;
      this.element.style.left = 0;
      return this.element.style.width = (this.slideWidth * this.length) + "px";
    },
    slide: function(direction) {
      if (direction === 'next') {
        if (this.current < this.length - 1) {
          this.prevNav.style.opacity = 1;
          this.current++;
          if (this.current === this.length - 1) {
            this.nextNav.style.opacity = 0;
            console.log('last');
          }
        }
      } else if (direction === 'prev') {
        if (this.current === 0) {
          return false;
        } else {
          this.nextNav.style.opacity = 1;
          this.current--;
          if (this.current === 0) {
            console.log('start');
            this.prevNav.style.opacity = 0;
          }
        }
      }
      this.element.style.WebkitTransition = "left " + this.easing + " " + this.duration + "ms " + this.delay + "ms";
      this.element.style.MozTransition = "left " + this.easing + " " + this.duration + "ms " + this.delay + "ms";
      return this.element.style.left = -(this.slideWidth * this.current) + "px";
    }
  };
  initialize = function() {
    var $slideWrap, slider;
    $slideWrap = document.getElementById("slideWrap");
    slider = new Slider($slideWrap, {
      duration: 500,
      easing: 'ease-in',
      delay: 0
    });
    return this;
  };
  return $window.onload = function() {
    return initialize();
  };
})(window);
