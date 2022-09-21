/** 头部气泡 **/
(function() {
    var canvas, ctx, width, height, bubbles, animateHeader = true;
    initHeader();
    function initHeader() {
        canvas = document.getElementById('header_canvas');
        window_resize();
        ctx = canvas.getContext('2d');
        //建立泡泡
        bubbles = [];
        var num = width * 0.15;//气泡数量
        for (var i = 0; i < num; i++) {
            var c = new Bubble();
            bubbles.push(c);
        }
        animate();
    }
    function animate() {
        if (animateHeader) {
            ctx.clearRect(0, 0, width, height);
            for (var i in bubbles) {
                bubbles[i].draw();
            }
        }
        requestAnimationFrame(animate);
    }
    function window_resize() {
        // canvas铺满窗口
        width = window.innerWidth;
        height = window.innerHeight;

        // 如果需要铺满内容可以换下面这个
        // var panel = document.getElementById('header_canvas');
        // width=panel.offsetWidth;
        // height=panel.offsetHeight;

        canvas.width = width;
        canvas.height = height;
    }
    window.onresize = function(){
        window_resize();
    }
    function Bubble() {
        var _this = this;
        (function() {
            _this.pos = {};
            init();
        })();
        function init() {
            _this.pos.x = Math.random() * width;
            _this.pos.y = height + Math.random() * 100;
            _this.alpha = 0.2 + Math.random() * 0.5;//气泡透明度
            _this.alpha_change = 0.0002 + Math.random() * 0.0005;//气泡透明度变化速度
            _this.scale = 0.2 + Math.random() * 0.1;//气泡大小
            _this.scale_change = Math.random() * 0.0003;//气泡大小变化速度
            _this.speed = 0.1 + Math.random() * 0.9;//气泡上升速度
        }
        //气泡
        this.draw = function() {
            if (_this.alpha <= 0) {
                init();
            }
            _this.pos.y -= _this.speed;
            _this.alpha -= _this.alpha_change;
            _this.scale += _this.scale_change;
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.scale * 10, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(255,255,255,' + _this.alpha + ')';
            ctx.fill();
        };
    }
})()

// 控制台输出
var styleTitle1 = `
font-size: 20px;
font-weight: 600;
color: rgb(244,167,89);
`
var styleTitle2 = `
font-size:12px;
color: rgb(244,167,89);
`
var styleContent = `
color: rgb(30,152,255);
`
var title1 = '志远の礼物'
var title2 = `版权所有`
var content = `
个人主页:  www.zyliwu.com
项目地址:  https://github.com/zyliwu/zyliwu.github.io
`
console.log(`%c${title1} %c${title2}
%c${content}`, styleTitle1, styleTitle2, styleContent)