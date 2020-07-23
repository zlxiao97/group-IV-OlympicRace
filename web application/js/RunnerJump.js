/*
 * @Author: Wisszeix 
 * @Date: 2020-07-23 13:45:15 
 * @Last Modified by: Wisszeix
 * @Last Modified time: 2020-07-23 17:50:39
 */

//空格事件监听
document.onkeydown = function (event) {
    var e = event || window.event;
    //keyCode 38 = Up
    if (e && e.keyCode == 38) {
        console.log("up");
    }
    //keyCode 40 = down
    if (e && e.keyCode == 40) {
        console.log("down")
    }
    //keyCode 32 = sapce
    if (e && e.keyCode == 32) {
        var runner = document.getElementById("runner");
        console.log(runner.style.marginBottom);
        //只有在runner下移矢量时才运行函数
        if (runner.style.marginBottom == "0px" || runner.style.marginBottom == "") {
            var count = 0;
            var height = 0;

            var jump = setInterval(() => {
                var runner = document.getElementById("runner");
                if (count == 0) {
                    height++;
                    runner.style.marginBottom = height + "px";
                    if (runner.style.marginBottom == "40px") {
                        count = 1;
                    }
                }
                if (count == 1) {
                    height--;
                    runner.style.marginBottom = height + "px";
                    if (runner.style.marginBottom == "0px") {
                        count = 2;
                    }
                }
                if (count == 2) {
                    clearInterval(jump);
                }
            }, 10)
        }
    }
}