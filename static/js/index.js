var a=window.location.hostname.split('.');
a.pop();
var b = a.pop();
(function (w, d, u) {
  var throttle = function (delay, action) {
    var last = 0;
    return function () {
      var curr = +new Date();
      if (curr - last > delay) {
        action.apply(this, arguments);
        last = curr;
      }
    };
  };

  function styleObj() {
    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      return{
        left: 0
      }
    }else{
      var w = (document.body.clientWidth - 960) / 2;
      return {
        right: (w - 85 ) + 'px'
      };
    }
  }
  function placeScroll() {
    function slideIndex(dom, idx, len) {
      var item = dom.next().find('.item');
      var sliderW = item.parent().width()-30;
      if (idx == 0) {
        item.css('margin-left', 0);
      } else {
        var w = item.width();
        // var mar = ((idx + 1) / len) * 100 + '%';
        var mar = ((idx) / len);
        mar =  mar*sliderW;
        item.css({ 'margin-left': mar});
        // item.css({ 'margin-left': 'calc(' + mar + ' - ' + (w-30) + 'px)' });
      }

      if (true) {
        var wid = (idx) * 200;
        dom.css({ 'margin-left': -wid });
      } else {
        dom.css('margin-left', 0);
      }
    }

    var bodys = $('.place .tbody-content');
    bodys.each(function (index, item) {
      var ul = $(item).find('ul');
      var li = ul.find('li');
      var wid = li.filter('.active').width() + 10;
      console.log(li, wid);
      ul.css({ width: wid * li.length });
    });
    $('.place').on('click', '.item-content .prev', function () {
      var con = $(this).closest('.item-content').find('.tbody-content ul');    
      var curr = con.find('li.active');
      var prevDom = curr.prev();
      if (prevDom.length) {
        var ind = prevDom.index();
        curr.removeClass('active');
        prevDom.addClass('active');
        slideIndex(con, ind, con.find('li').length);
      }

    }).on('click', '.item-content .next', function () {
      var con = $(this).closest('.item-content').find('.tbody-content ul');
      var curr = con.find('li.active');
      var nextDom = curr.next();
      if (nextDom.length) {
        var ind = nextDom.index();
        console.log(ind);
        curr.removeClass('active');
        nextDom.addClass('active');
        slideIndex(con, ind, con.find('li').length);
      }
    }).on('click', '.tabs-div .tab', function () {
      $(this).addClass('active').siblings().removeClass('active');
      var index = $(this).index();
      $('.tabs-content').find('.item-content').eq(index).removeClass('hide').siblings().addClass('hide');
    });

  }
   //lang office photo preview
  function office_preview () {
    var lang_office_photo_preview_options = {};
   var viewer = new Viewer(document.getElementById('lang_index_preview'), lang_office_photo_preview_options);
  }
  
function indexInit() {
//  // 大学滚动
//  var scrollHeight = $('.clists .scroller .citem').height();
//  var h1 = $('.clists .c-top').height();
//  var w1 = $('.clists .c-top .scroller');
//
//  var w2 = $('.clists .c-mid .scroller');
//  var w3 = $('.clists .c-bottom .scroller');
//
//  // var len1 = w1.height() / h1;
//  var len1 = w1.height() / scrollHeight-2;
//  var len2 = w2.height() / h1;
//  var len3 = w3.height() / h1;
//  var index = 0;
//  setInterval(function () {
//    index++;
//    w1.animate({ 'margin-top': -scrollHeight * (index % len1) });
//    w2.animate({ 'margin-top': -h1 * (index % len2) });
//    w3.animate({ 'margin-top': -h1 * (index % len3) });
//  }, 8000);
//  // 大学滚动 end
//
//
//  $('.banner .banner-imgs').simpleBanner(
//    {
//      autoPlayDuration: 8000,
//      dots: 'dots-1',
//      eventType: 'mouseenter',
//      animation: 'slide'
//    });
//
//
//      var persons= $('.person');
//      persons.each(function(i,v){
//        $(v).on('mouseenter',function(){
//           for (var i = 0; i < persons.length; i++) {
//            $(persons[i]).removeClass('active');
//          }
//         $(this).addClass('active');
//        });
//      });
//
//  var slides = $('.tvs .slide-wrap');
//  var items = slides.find('.slide-t2-item');
//  var len = items.length;
//  slides.css({
//    width: len * 100 + '%'
//  });
//  items.css({
//    width: (100 / len) + '%'
//  });
//  var ind = len * 1e5;
//
//  var tmp = [];
//  for (var i = 0; i < len; i++) {
//    if (i == 0) {
//      tmp.push('<li class="active"></li>');
//    } else {
//      tmp.push('<li></li>');
//    }
//  }
//  slides.parent().append('<div class="student-li-dot">' + tmp.join('') + '</div>');
//
//  function next() {
//    var current = ++ind % len;
//    play(current);
//  }
//
//  function prev() {
//    var current = --ind % len;
//    play(current);
//  }
//
//  function play(idx) {
//    slides.css({
//      'margin-left': -idx + '00%'
//    }).data('active', idx);
//    $('.student-li-dot').find('li').eq(idx).addClass('active').siblings().removeClass('active');
//  }
//
//  $(document).on('click', '.tvs .prev-icon', function () {
//    prev();
//  }).on('click', '.tvs .next-icon', function () {
//    next();
//  }).on('click', '.student-li-dot li', function () {
//    var ind = $(this).index();
//    play(ind);
//  }).on('click', '.rightbar .ang-div', function () {
//    $('html,body').animate({
//      scrollTop: '0px'
//    }, 800);
//  }).on('click', '.modal .close', function () {
//    $(this).closest('.modal').addClass('hide');
//  }).on('click', '.rightbar .text', function () {
//    // $('.modal-callphone').removeClass('hide');
//  }).on('click', '.todocall', function () {
//    console.log('do call');
//  });
 function aa() {
   var i=0;
   var clone=$(".coursel .imgs li").first().clone();
   $(".coursel .imgs").append(clone);
   var size = $(".coursel .imgs li").size()+1;
   /*自动轮播*/
   var t=setInterval(function(){
    move();
   },1000);
   
   //对coursel定时器的操作
   $(".coursel").hover(function(){
    clearInterval(t);
   },function(){
    t=setInterval(move,1000);
   })
   
   function move(){
    i++;
    if(i==size/2){
     $(".coursel .imgs").css({left:0});
     i=1;
    }
    if(i==-1){
     $(".coursel .imgs").css({left:-(size-1)*273});
     i=size-2;
    }
    $(".coursel .imgs").stop().animate({left:-i*273},500);
   }
 }
 aa()
}


  function successInit() {

    $('.show').imagesLoaded().done(function (instance) { //所有图片加载成功
      $(".show li").wookmark({
        autoResize: true, // 当浏览器大小改变时是否自动调整
        container: $('.show'), // 父容器
        offset: 10, // 每个元素之间的距离
        itemWidth: 289 // 每个元素的宽度，瀑布流高度是不限制的，所以只要宽度固定就可以了
      });
    });
    var listBar = $(".list-bar ul");
    var list = $(".list");
    listBar.on("click", "li", function () {
      var index = $(this).index();
      $(list).eq(index).show().siblings().hide();
      $(this).addClass("active");
      $(this).siblings().removeClass("active");
    });
    $(document).on('click','.offer',function(){
    	var img=$(this).data('src');
    	$('.pop-offer img').attr('src',img)
    	$('.pop-box').removeClass("pop-hidden");
    	$('body').css('overflow','hidden')
    }).on('click','.close',function(){
    	$('.pop-offer img').attr('src','')
    	$('.pop-box').addClass("pop-hidden");
    	$('body').css('overflow','')
    })
  }

  function activityInit() {
    $('.newsbox').wookmark({
      autoResize: true, // 当浏览器大小改变时是否自动调整
      container: $('.newslist'), // 父容器
      offset: 15, // 每个元素之间的距离
      itemWidth: 288 // 每个元素的宽度，瀑布流高度是不限制的，所以只要宽度固定就可以了
    });
    //新闻活动切换
    $(document).on("click", ".newslist-nav li", function () {
      var indexNum = $(this).index();
      $(this).addClass("activityed");
      $(this).siblings().removeClass("activityed");

      $(".newslist-info").eq(indexNum).show().siblings().hide();
    });
  }
  function header(){
    var rightbar = $('.rightbar');
    var offset = rightbar.offset();
      // 导航fixed 
     var navHeader = new Vue({
      el: 'header.header',
      data: function () {
        return {
          fixed: false
        };
      }
    });
    var vrightbar = new Vue({
      el: '.rightbar',
      data: function () {
        return {
          fixed: false,
          rand: 1,
          top : $('.banner-imgs').height()+140,
        };
      },
      computed: {
        style: function () {
          if (this.fixed && this.rand) {
            return styleObj();
          }
          return {};
        }
      }
    });

    var foocon = new Vue({
      el: '.foocontact',
      data: function () {
        return {
          fixed: false,
          showdetail: false
        };
      },
      methods: {
        show: function () {
          this.showdetail = true;
        },
        close: function () {
          this.showdetail = false;
        }
      },
      computed: {
        detail: function () {
          return [{
            'showdetail': this.showdetail,
            'fixed': this.fixed
          }];
        }
      }
    });

    var change = function () {
      if($('.main[data-page]').data('page') =='index'){
        $('#rightbar_container .rightbar').css({'top':vrightbar.top});
        if(window.scrollY<500){
             foocon.fixed =false;
        }
        if(window.scrollY>800){
          vrightbar.fixed =true;
        $('#rightbar_container .rightbar').css({'top':100});
        foocon.fixed = true;
        }else{
          if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            return;
           }
          vrightbar.fixed =false;
          $('#rightbar_container .rightbar').css({'top':vrightbar.top});
        }
        if($(document).scrollTop() + 340 >= $(document).height() - $(window).height()){
          foocon.fixed = false;          
        } 
        
      }else{
        // vrightbar.fixed = window.scrollY > maxtop;
        // foocon.fixed = window.scrollY > mintop;
        if ($(document).scrollTop() + 140 >= $(document).height() - $(window).height()) {
          foocon.fixed = false;
        }
      }
    };
    $(document).on('scroll', change);
    $(window).on('resize', function () {
      vrightbar.top = $('.banner-imgs').height()+140; 
      vrightbar.rand = Math.random();
    });
    change();

  }
  function teacherTrain() {
    console.log(02,8)
      var i=0;
      var clone=$(".coursel .imgs li").first().clone();
      $(".coursel .imgs").append(clone);
      var size = $(".coursel .imgs li").size()+1;
      /*自动轮播*/
      var t=setInterval(function(){
       move();
      },1000);
      
      //对coursel定时器的操作
      $(".coursel").hover(function(){
       clearInterval(t);
      },function(){
       t=setInterval(move,1000);
      })
      
      function move(){
       i++;
       if(i==size/2){
        $(".coursel .imgs").css({left:0});
        i=1;
       }
       if(i==-1){
        $(".coursel .imgs").css({left:-(size-1)*273});
        i=size-2;
       }
       $(".coursel .imgs").stop().animate({left:-i*273},500);
      }
  }

  function aboutGsx() {
    $('.content .left a').on('click',function() {
      $(this).addClass('active').siblings().removeClass("active")
      var text = $(this).context.innerHTML
      if (text != '关于联盟') {
        $('.content .right').removeClass("active1")
        $('.content .right1').addClass("active1")
        
      } else {
        $('.content .right1').removeClass("active1")
        $('.content .right').addClass("active1")
      }
    })
  }

  var pages = {
    index: indexInit,
    success: successInit,
    header:header,
    teacherTrain:teacherTrain,
    aboutGsx:aboutGsx,
  };

  $(function () {
    $(document).ready(function () {
      var curr = $('.main[data-page]');
      var page = curr.data('page');
      var entry = pages[page];
      if (typeof entry == 'function') {
        entry();
      }
    });

    //导航条
    var timer = 0;
    $(document).on("mouseenter", ".nav .navitem", function () {
      clearTimeout(timer);
      $(this).find("ol").show();
      $(this).closest('.navitem').siblings().find('ol').hide();
      // hide others
    }).on("mouseleave", ".nav .navitem", function () {
      var $ol = $(this).find('ol');
      clearTimeout(timer);
      timer = setTimeout(function () {
        $ol.hide();
      }, 800);
    }).on('mouseenter', '.navitem ol', function () {
      clearTimeout(timer);
    }).on('mouseleave', '.navitem ol', function () {
      clearTimeout(timer);
      $ol = $(this);
      // timer = setTimeout(function () {
        $ol.hide();
      // }, 0);
    }).on('click', '.rightbar .ang-div', function () {
      $('html,body').animate({
        scrollTop: '0px'
      }, 800);
    }).on('click', '.modal .close', function () {
      $(this).closest('.modal').addClass('hide');
    }).on('click', '.rightbar .text', function () {
      // $('.modal-callphone').removeClass('hide');
    }).on('click', '.todocall', function () {
      console.log('do call');
    });

    header();


    // $(document).on('scroll',function()
    // {
    //     navHeader.fixed = window.scrollY>40;
    // });
    
    //移动端rightbar浮在右侧
      if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
       $('.rightbar').addClass('fixed');
       $('.rightbar').css('right',0)
      }


  });

})(window, document);