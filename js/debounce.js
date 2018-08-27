// 你尽管触发事件，但是我一定在事件触发 n 秒后才执行，如果你在一个事件触发的 n 秒内又触发了这个事件，那我就以新的事件的时间为准，n 秒后才执行，总之，就是要等你触发完事件 n 秒内不再触发事件，我才执行，真是任性呐!

var count = 1;
var cotainer = document.getElementById("cotainer");

function getUserAction(e){
    // console.log(e);
     
    cotainer.innerHTML = count++;
}

cotainer.onmousemove = debounce(getUserAction, 1000);

function debounce(func,wait){
    var timeout;
    return function() {
        var context = this;
        console.log(arguments)
        var args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function(){
            func.apply(context, args)
        }, wait)
    }
}
