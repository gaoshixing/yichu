var a=window.location.hostname.split('.');
a.pop();
var b = a.pop();
if(['ivygate','ivy-gate','com','tengmenguoji','suconghou'].indexOf(b)<0){
  window.location.replace("http://www.ivygate.cn");
}
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
    // 大学滚动
    var scrollHeight = $('.clists .scroller .citem').height();
    var h1 = $('.clists .c-top').height();
    var w1 = $('.clists .c-top .scroller');

    var w2 = $('.clists .c-mid .scroller');
    var w3 = $('.clists .c-bottom .scroller');

    // var len1 = w1.height() / h1;
    var len1 = w1.height() / scrollHeight-2;
    var len2 = w2.height() / h1;
    var len3 = w3.height() / h1;
    var index = 0;
    setInterval(function () {
      index++;
      w1.animate({ 'margin-top': -scrollHeight * (index % len1) });
      w2.animate({ 'margin-top': -h1 * (index % len2) });
      w3.animate({ 'margin-top': -h1 * (index % len3) });
    }, 8000);
    // 大学滚动 end


    $('.banner .banner-imgs').simpleBanner(
      {
        autoPlayDuration: 8000,
        dots: 'dots-1',
        eventType: 'mouseenter',
        animation: 'slide'
      });


        var persons= $('.person');
        persons.each(function(i,v){
          $(v).on('mouseenter',function(){
             for (var i = 0; i < persons.length; i++) {
              $(persons[i]).removeClass('active');
            }
           $(this).addClass('active');
          });
        });

    var slides = $('.tvs .slide-wrap');
    var items = slides.find('.slide-t2-item');
    var len = items.length;
    slides.css({
      width: len * 100 + '%'
    });
    items.css({
      width: (100 / len) + '%'
    });
    var ind = len * 1e5;

    var tmp = [];
    for (var i = 0; i < len; i++) {
      if (i == 0) {
        tmp.push('<li class="active"></li>');
      } else {
        tmp.push('<li></li>');
      }
    }
    slides.parent().append('<div class="student-li-dot">' + tmp.join('') + '</div>');

    function next() {
      var current = ++ind % len;
      play(current);
    }

    function prev() {
      var current = --ind % len;
      play(current);
    }

    function play(idx) {
      slides.css({
        'margin-left': -idx + '00%'
      }).data('active', idx);
      $('.student-li-dot').find('li').eq(idx).addClass('active').siblings().removeClass('active');
    }

    $(document).on('click', '.tvs .prev-icon', function () {
      prev();
    }).on('click', '.tvs .next-icon', function () {
      next();
    }).on('click', '.student-li-dot li', function () {
      var ind = $(this).index();
      play(ind);
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

    //活动滚动
    myGod('marquee_ac',1500);
    function myGod(id,w,n){
      var box=document.getElementById(id),can=true,w=w||1500,fq=fq||10,n=n==-1?-1:1;
      box.innerHTML+= box.innerHTML;      
      box.onmouseover=function(){can=false};
      box.onmouseout=function(){can=true};
      var max=parseInt(box.scrollHeight/2);
      new function (){
        var stop=box.scrollTop%18==0&&!can;        
        if(!stop){
          var set=n>0?[max,0]:[0,max];
          box.scrollTop==set[0]?box.scrollTop=set[1]:box.scrollTop+=n;
        };
        setTimeout(arguments.callee,box.scrollTop%18?fq:w);
      };
    };

  }

  function usaInit() {


  }

  function aboutUSInit() {
    $(document).on("click", ".aboutUS-left li", function () {
      //获取点击的下标让点击元素显示 ，兄弟元素隐藏
      $(".tab").eq($(this).index()).show().siblings().hide();
    }).on("click", '.asq-info .addicon', function () {
      //点击加号
      $(this).hide().siblings().show();
      $(this).closest('li').find('.answer').show();
    }).on("click", '.asq-info .reduce', function () {
      //点击减号
      $(this).hide().siblings().show();
      $(this).closest('li').find('.answer').hide();
    }).on("click", '.asq-nav li', function () {
      $(this).addClass("active").siblings().removeClass("active");
    });
  }

  function questionInit() {
    $(document).on("click", '.question-info .addicon', function () {
      //点击加号
      $(this).hide().siblings().show();
      $(this).closest('li').find('.answer').show();
    }).on("click", '.question-info .reduce', function () {
      //点击减号
      $(this).hide().siblings().show();
      $(this).closest('li').find('.answer').hide();
    }).on("click", '.question-nav li', function () {
      $(this).addClass("active").siblings().removeClass("active");
    });
    $(document).on('click', '.question-nav li', function () {
      $('.question-info').eq($(this).index()).show().siblings().hide();
    });
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

  function jyInit() {
    function slideIndex(dom, idx, len) {
      var item = dom.next().find('.item');
      if (idx == 0) {
        item.css('margin-left', 0);
      } else {
        var w = item.width();
        var mar = ((idx + 1) / len) * 100 + '%';
        item.css({
          'margin-left': 'calc(' + mar + ' - ' + w + 'px)'
        });
      }

      if (idx >= 3) {
        var wid = (idx - 2) * 200;
        dom.css({
          'margin-left': -wid
        });
      } else {
        dom.css('margin-left', 0);
      }
    }
    var bodys = $('.tbody-content');
    bodys.each(function (index, item) {
      var ul = $(item).find('ul');
      var li = ul.find('li');
      var wid = li.filter('.active').width();
      console.log(li, wid);
      ul.css({
        width: wid * li.length
      });
    });

    $(document).on('click', '.icon-bg1', function () {
      var con = $(this).closest('.tbody').find('.tbody-content ul');
      var curr = con.find('li.active');
      var prevDom = curr.prev();
      if (prevDom.length) {
        var ind = prevDom.index();
        curr.removeClass('active');
        prevDom.addClass('active');
        slideIndex(con, ind, con.find('li').length);
      }
    }).on('click', '.icon-bg2', function () {
      var con = $(this).closest('.tbody').find('.tbody-content ul');
      var curr = con.find('li.active');
      var nextDom = curr.next();
      if (nextDom.length) {
        var ind = nextDom.index();
        curr.removeClass('active');
        nextDom.addClass('active');
        slideIndex(con, ind, con.find('li').length);
      }
    }).on('mouseenter', '.tbody-content ul li', function () {
      var $this = $(this);
      var con = $this.closest('ul');
      $this.addClass('active').siblings().removeClass('active');
      var ind = $this.index();
      slideIndex(con, ind, con.find('li').length);
    }).on('click', '.tbody-content ul li', function () {
      var $this = $(this);
      var con = $this.closest('ul');
      $this.addClass('active').siblings().removeClass('active');
      var ind = $this.index();
      slideIndex(con, ind, con.find('li').length);
    });
  }

  function serverInit() {
    var iconName = $(".name");
    var popWin = $(".popWindow");
    
    iconName.on('click', function () {
      if ($(this).find('.name-info').text() != '') {
        $(".pop-msg").text($(this).find('.name-info').text());
        popWin.show();
      }
    });
    $('.pop-close').on('click', function () {
      popWin.hide();
    });
  }

  function tvInit() {
    var $wrap = $('.video-box-wrap');
    var items = $wrap.find('.box');
    var len = items.length;
    $wrap.css({
      width: len * 25 + '%'
    });
    var index = len*1e5;

    function next() {
      var current = ++index % len;
      play(current);
    }

    function prev() {
      var current = --index % len;
      play(current);
    }

    function play(idx) {
      $wrap.css({
        'margin-left': -idx * 25 + '%'
      }).data('active', idx);
    }
    function playHalf(idx) {
      if(idx >= len-1){
         $wrap.css({
          'margin-left': '-100%'
        }).data('active', idx);   
         return
      }
      $wrap.css({
        'margin-left': -idx * 13.5 + '%'
      }).data('active', idx);
    }
    var vv = videojs($('.player video')[0]);

    $(document).on('click', '.video-box .prev-icon', function () {
      prev();
    }).on('click', '.video-box .next-icon', function () {
      next();
    }).on('click', '.video-box .box-inner .play-btn', function () {
      var id = $(this).parent().data('id');
      var src = $(this).parent().data('video');
      $('.intro .intro-item[data-id="' + id + '"]').show().siblings().hide();
      vv.src(src);
      vv.load(src);
      vv.play();
    }).on('mouseenter','.video-box-wrap .box',function(){
          // if(($(this).index()+2)%len==0){
          //   playHalf($(this).index()+1)
          // }else{
          //   playHalf($(this).index())
          // }
          // index += $(this).index();
    });
  }

  function expertInit() {
    $(document).on('click', '.item-wrap .item .content .title', function () {
      var title = $(this);
      var item = $(this).closest('.item');
      var name = item.find('.name');
      var content = item.find('.longtext');
      var modal = $('.modal-expert');
      modal.find('.mtitle').html(title.html());
      modal.find('.author').html(name.html());
      modal.find('.mcontent-text').html(content.html());
      modal.removeClass('hide').find('.modal-expert-inner').show();
    }).on('click', '.icon-closemodal', function () {
      $('.modal-expert').addClass('hide').find('.modal-expert-inner').hide();
    });
  }

  function expertteamInit() {
    function slideIndex(dom, idx, len) {
      var item = dom.next().find('.item');
      if (idx == 0) {
        item.css('margin-left', 0);
      } else {
        var w = item.width();
        var mar = ((idx + 1) / len) * 100 + '%';
        item.css({
          'margin-left': 'calc(' + mar + ' - ' + w + 'px)'
        });
      }

//    if (idx >= 3) {
//      var wid = (idx - 2) * 200;
//      dom.css({
//        'margin-left': -wid
//      });
//    } else {
//      dom.css('margin-left', 0);
//    }
    }
    function clickSlideIndex(dom, idx, len) {
      var item = dom.next().find('.item');
      if (idx == 0) {
        item.css('margin-left', 0);
      } else {
        var w = item.width();
        var mar = ((idx + 1) / len) * 100 + '%';
        item.css({
          'margin-left': 'calc(' + mar + ' - ' + w + 'px)'
        });
      }

      if (idx >= 3) {
        var wid = (idx - 2) * 200;
        dom.css({
          'margin-left': -wid
        });
      } else {
        dom.css('margin-left', 0);
      }
    }
    function ulGo(dom,pre){
    	if(dom.children('li').length<=3) return false;
      Nx=parseInt(dom.width())/parseInt(pre.width());
      bgx=(-1)*(Nx-1)*(event.x-parseInt(pre.offset().left)+parseInt(document.body.scrollLeft));
      dom.css("margin-left",bgx+"px");
    }
    var tslideIndex = throttle(50, slideIndex);

    var bodys = $('.tbody-content');
    bodys.each(function (index, item) {
      var ul = $(item).find('ul');
      var li = ul.find('li');
      var wid = li.filter('.active').width();
      console.log(li, wid);
      ul.css({
        width: wid * li.length
      });
    });
    $(document).on('click', '.tbody .prev', function () {
      var con = $(this).closest('.tbody').find('.tbody-content ul');
      var curr = con.find('li.active');
      var prevDom = curr.prev();
      if (prevDom.length) {
        var ind = prevDom.index();
        curr.removeClass('active');
        prevDom.addClass('active');
        clickSlideIndex(con, ind, con.find('li').length);
      }

    }).on('click', '.tbody .next', function () {
      var con = $(this).closest('.tbody').find('.tbody-content ul');
      var curr = con.find('li.active');
      var nextDom = curr.next();
      if (nextDom.length) {
        var ind = nextDom.index();
        curr.removeClass('active');
        nextDom.addClass('active');
        clickSlideIndex(con, ind, con.find('li').length);
      }
    }).on('click', '.modal-experteam .close', function () {
      $('.modal-experteam').addClass('hide');
      $('body').css("overflow","");
    }).on('mouseenter', '.tbody .tbody-content ul li', function () {
      var $this = $(this);
      var con = $this.closest('ul');
      $this.addClass('active').siblings().removeClass('active');
      var ind = $this.index();
      tslideIndex(con, ind, con.find('li').length);
    }).on('mousemove', '.tbody .tbody-content', function () {
      var $this = $(this);
      var con = $this.children('ul');
      ulGo(con,$this);
    }).on('click', '.tbody-content ul li', function () {
      var $this = $(this);
      var con = $this.closest('ul');
      $this.addClass('active').siblings().removeClass('active');
      var ind = $this.index();
      slideIndex(con, ind, con.find('li').length);
      var img = $this.data('img');
      var modal = $('.modal-experteam');
      var rintro = $this.find('.rightintro-content');
      var intro = $this.find('.people-intro-content');
      if (rintro.length && intro.length) {
        modal.find('.pimg img').attr('src', img);
        modal.find('.rightintro').html(rintro.html());
        modal.find('.people-intro').html(intro.html());
        modal.removeClass('hide');
        $('body').css("overflow","hidden");
      }
    });

  }

  function langIndex() {
    placeScroll();
    office_preview();
  }

  function langToefl() {
    var scroller = $('.say-scroller');
    var items = scroller.find('.say-item');
    var len = items.length;
    var index = len * 1e5;
    $(document).on('click', '.sayscroll-wrap .prev', function () {
      index--;
      var curr = index % len;
      console.log(curr);
      scroller.css('margin-left', '-' + curr + '00%');

    }).on('click', '.sayscroll-wrap .next', function () {
      index++;
      var curr = index % len;
      console.log(curr);
      scroller.css('margin-left', '-' + curr + '00%');
    });
    expertteamInit();
  }

  function langSat() {
    var tabsContent = $('.tabs-content');
    var cardList = $('.tab-content-list');

    var stuList = $('.ulist .uitem');
    var len = stuList.length;
    var stuIndex = len * 1e5;
    $(document).on('click', '.tabs-nav .tab-nav-item', function () {
      var index = $(this).index();
      $(this).addClass('active').siblings().removeClass('active');
      tabsContent.find('.tab-content-item').eq(index).removeClass('hide').siblings().addClass('hide');
    }).on('click', '.tenadvan .card-item', function () {
      var index = $(this).index();
      $(this).addClass('active').siblings().removeClass('active');
      cardList.find('.tab-content-item').eq(index).removeClass('hide').siblings().addClass('hide');
    }).on('click', '.rlist .prev', function () {
      stuIndex--;
      var curr = stuIndex % len;
      stuList.eq(curr).addClass('active').siblings().removeClass('active');
      $('.stu-case .one-info-item').eq(curr).removeClass('hide').siblings().addClass('hide');
    }).on('click', '.rlist .next', function () {
      stuIndex++;
      var curr = stuIndex % len;
      stuList.eq(curr).addClass('active').siblings().removeClass('active');
      $('.stu-case .one-info-item').eq(curr).removeClass('hide').siblings().addClass('hide');
    });

    var scroller = $('.stumsg-scroller');
    var items = scroller.find('.stumsg-item');
    var len2 = items.length;
    var index = len * 1e5;
    $(document).on('click', '.sayscroll-wrap .prev', function () {
      index--;
      var curr = index % len2;
      scroller.css('margin-left', '-' + curr + '00%');

    }).on('click', '.sayscroll-wrap .next', function () {
      index++;
      var curr = index % len2;
      scroller.css('margin-left', '-' + curr + '00%');
    });

    expertteamInit();
  }

  function langGre() {
    var slider = $('.gre-case .imgbox').simpleBanner({
      autoPlay: false,
      animation: 'slide'
    });

    $(document).on('click', '.gre-case .icon-prev', function () {
      slider.prev();
    }).on('click', '.gre-case .icon-next', function () {
      slider.next();
    });
    expertteamInit();
  }

  function langAp() {
    var texts = $('#info>div');
    var btns = $('#ap_c>div').each(function (i, v) {

      $(v).on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        texts.eq(i).addClass('show').siblings().removeClass('show');
      });
    });
    expertteamInit();
    placeScroll();
    office_preview ();
    
  }

  function langSsat() {
    expertteamInit();
    placeScroll();
    office_preview();
  }

  function langAct() {
    expertteamInit();
  }
  function serverDetail(){
    var dialogs = $('.dialog');
    $('.check_more').each(function(i,v){
        $(v).on('click',function(){
          $(dialogs[i]).css('display','block').find('.close').on('click',function(){
                  $(this).parent().parent().css('display','none');
          });
        })
      })

       

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

    var maxtop = offset.top - 144;
    var mintop = offset.top - 400;

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
        vrightbar.fixed = window.scrollY > maxtop;
        foocon.fixed = window.scrollY > mintop;
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

  var pages = {
    index: indexInit,
    usa: usaInit,
    success: successInit,
    tv: tvInit,
    expertteam: expertteamInit,
    expert: expertInit,
    activity: activityInit,
    jy: jyInit,
    server1: serverInit,
    server2: serverInit,
    server3: serverInit,
    server4: serverInit,
    question: questionInit,
    langIndex: langIndex,
    langToefl: langToefl,
    langSat: langSat,
    langGre: langGre,
    langAp: langAp,
    langSsat: langSsat,
    langAct: langAct,
    header:header,
    serverDetail:serverDetail
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
