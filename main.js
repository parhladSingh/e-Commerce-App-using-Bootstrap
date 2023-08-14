window.addEventListener('scroll',function(){
    let header = document.getElementById('header');
    if(this.window.scrollY >= 230){
        header.classList.add('sticky');
    }
    else{
        header.classList.remove('sticky');
    }
});

function first(){
    document.getElementById('main').style.background="url('/Images/homeImg2.png')";
    document.getElementById('btn1').style.top="420px";
    document.getElementById('btn1').style.left="55px";
}
function second(){
    document.getElementById('main').style.background="url('/Images/homeImg3.png')";
    document.getElementById('btn1').style.top="440px";
    document.getElementById('btn1').style.left="55px";
}
function third(){
    document.getElementById('main').style.background="url('/Images/homeImg1.png')";
    document.getElementById('btn1').style.top="410px";
    document.getElementById('btn1').style.left="185px";
}

setInterval(first,3000);
setInterval(second,6000);
setInterval(third,9000);

var btn1 = document.getElementById('btn1');
btn1.addEventListener('click',function(){
    window.location.href="/signup.html";
})

var btn2 = document.getElementById('btn2')
btn2.addEventListener('click',function(){
    window.location.href="/404.html";
})