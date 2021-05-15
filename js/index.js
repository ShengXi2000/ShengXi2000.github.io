$(function () {

    var UA = window.navigator.userAgent,
    isAndorid = /android/i.test(UA),
    isIphone = /iphone/i.test(UA),
    //isIphone = /(?:iPhone)/.test(UA),
    isPad = /ipad/i.test(UA),
    isDolphin = typeof dolphin !== 'undefined';
    device = isAndorid ? 'android' : isIphone ? 'iphone' : isPad ? 'ipad':'unknow';
    console.log(device);

    // let flag = true;
    // 为轮播图添加一个data编号
    $('.headerBanner').children().each(function (index, value) {
        $(value).attr(`data-bannerBg`, index);
    })

    // 将元素设置为空再设置为显示可以重启动画
    $('.arrowRight').click(function () {
        $('.bg1_table').css('display', 'none');
        $('.bg2_table').css('display', 'grid');
        $('.headerBanner').css('transition', 'transform .5s');
        $('.headerBanner').css('transform', `translateX(-100vw)`)
        $('.headerBanner').on('transitionend', function () {
            $('.point section:first').css('backgroundColor', '#bdc3c7')
            $('.point section:last').css('backgroundColor', 'white')
        })
    })
    $('.arrowLeft').click(function () {
        $('.bg2_table').css('display', 'none');
        $('.bg1_table').css('display', 'grid');
        $('.headerBanner').css('transition', 'transform .5s');
        $('.headerBanner').css('transform', `translateX(0)`)
        $('.headerBanner').on('transitionend', function () {
            $('.point section:first').css('backgroundColor', 'white')
            $('.point section:last').css('backgroundColor', '#bdc3c7')
        })
    })

    // 解决当浏览器宽高变化时意外的触发transition过渡的问题
    window.onresize = function () {
        $('.headerBanner').css('transition', '');
    }

    // 判断滚动条超过浏览器高度100%时触发显示浮动导航栏nav
    $(window).scroll(function (event) {
        let height = $(window).height();
        let scllTop = $(window).scrollTop();
        let nav = $('.he_nav');
        // console.log(height,scllTop);
        if (scllTop >= height) {
            nav.css({
                position: 'fixed',
                backgroundColor: 'white',
                boxShadow: '0 5px 10px rgba(42, 42, 42, .3)',
                animation: 'fixed .5s',
            }),
                nav.find('.nav').css('color', 'black')
                $('.bars i').css('color','black')
        } else {
            nav.css({
                position: '',
                backgroundColor: '',
                boxShadow: '',
                animation: ''
            })
            nav.find('.nav').css('color', 'white')
            $('.bars i').css('color','white')
        }

        if (scllTop >= height * 0.7) {
            $('.features>div').eq(0).css({
                animation: 'show .4s 0s both'
            })
            $('.features>div').eq(1).css({
                animation: 'show .4s .4s both'
            })
            $('.features>div').eq(2).css({
                animation: 'show .4s .8s both'
            })
            $('.features>div').eq(3).css({
                animation: 'show .4s 1.2s both'
            })
            $('.features>div').eq(4).css({
                animation: 'show .4s 1.6s both'
            })
            $('.features>div').eq(5).css({
                animation: 'show .4s 2s both'
            })
        }

        if (scllTop >= height * 1.8) {
            $('.service_blocks>div').eq(0).css({
                animation: 'show .4s 0s both'
            })
            $('.service_blocks>div').eq(1).css({
                animation: 'show .4s .4s both'
            })
            $('.service_blocks>div').eq(2).css({
                animation: 'show .4s .8s both'
            })
            $('.service_blocks>div').eq(3).css({
                animation: 'show .4s 1.2s both'
            })
            $('.service_blocks>div').eq(4).css({
                animation: 'show .4s 1.6s both'
            })
            $('.service_blocks>div').eq(5).css({
                animation: 'show .4s 2s both'
            })

            // 显示悬浮按钮
            $('aside').css({
                transform:"scale(1)",
                // opacity:".8"
            })
        }else{
            $('aside').css({
                transform:"scale(0)",
                // opacity:"0.2"
            })
        }

        

    })




    // 刷新浏览器能够在原地更新动画效果
    function oneAnimation() {
        let height = $(window).height();
        let scllTop = $(window).scrollTop();
        let nav = $('.he_nav');
        if (scllTop >= height * 0.7) {
            $('.features>div').eq(0).css({
                animation: 'show .4s 0s both'
            })
            $('.features>div').eq(1).css({
                animation: 'show .4s .4s both'
            })
            $('.features>div').eq(2).css({
                animation: 'show .4s .8s both'
            })
            $('.features>div').eq(3).css({
                animation: 'show .4s 1.2s both'
            })
            $('.features>div').eq(4).css({
                animation: 'show .4s 1.6s both'
            })
            $('.features>div').eq(5).css({
                animation: 'show .4s 2s both'
            })
        }
        if (scllTop >= height * 1.8) {
            $('.service_blocks>div').eq(0).css({
                animation: 'show .4s 0s both'
            })
            $('.service_blocks>div').eq(1).css({
                animation: 'show .4s .4s both'
            })
            $('.service_blocks>div').eq(2).css({
                animation: 'show .4s .8s both'
            })
            $('.service_blocks>div').eq(3).css({
                animation: 'show .4s 1.2s both'
            })
            $('.service_blocks>div').eq(4).css({
                animation: 'show .4s 1.6s both'
            })
            $('.service_blocks>div').eq(5).css({
                animation: 'show .4s 2s both'
            })
        }
        if (scllTop >= height) {
            nav.css({
                position: 'fixed',
                backgroundColor: 'white',
                boxShadow: '0 5px 10px rgba(42, 42, 42, .3)',
                animation: 'fixed .5s',
            })
            nav.find('.nav').css('color', 'black')
        }


    }
    oneAnimation();




    //切到关于我们
    // 初始化scroll插件
    let scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000
    });


    // 初始化isotope插件
    const isotope = new Isotope(".set_img", {
        layoutMode: "fitRows",
        itemSelector: ".img"
    });

    // 筛选实例
    const filterBtns = $('.set_label');
    filterBtns.on('click', e => {
        let { target } = e;
        const filterOption = target.getAttribute('data-filter');
        if (filterOption) {
            $('.active').removeClass('active');
            $(target).addClass('active')
            isotope.arrange({ filter: filterOption })
        }
    })

    // 初始化数据持续增长效果
    const data = $('#data')[0];
    ScrollReveal().reveal('.data_box',{
        beforeReveal:()=>{
            anime({
                targets:'._data mark',
                innerHTML:el=>{
                    return [0,el.innerHTML]
                },
                duration:2000,
                round:1,
                easing:'easeInExpo'
            });
            data.style.backgroundPosition = `center calc(50% - ${data.getBoundingClientRect().bottom/5}px)`;
        }
    })

    // 监测浏览器滚动条事件，执行视觉效果
    $(window).on('scroll',()=>{
        const bottom = data.getBoundingClientRect().bottom;
        const top = data.getBoundingClientRect().top;
        if(bottom>=0 && top<=window.innerHeight){
            data.style.backgroundPosition = `center calc(50% - ${bottom/5}px)`;
        }
    })

})