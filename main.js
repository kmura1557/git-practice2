document.addEventListener("DOMContentLoaded",function(){
    console.log("Hello World");

    let current = new Date();
    let result = document.getElementById('result');
    result.textContent = current.toLocaleString();

    //let list = document.querySelector('#list .external');
    //console.log(list.href);
    let list = document.querySelectorAll('#list .external');
    for(let elem of list){
    console.log(elem.href);
    }

    let s = document.querySelector('#food');
    let opts = s.children;

    for(let opt of opts){
        console.log(opt.value);
    }
    const pics = ["./images/photo1.jpg","./images/photo2.jpg","./images/photo3.jpg"]
    let n = 0;
    let pic = document.querySelector('#cover');
    pic.addEventListener('click',function(){
        this.src = pics[n];
        n++;
        if(n > 2){
        n = 0;
        }
    },false);


    let imgs = document.querySelectorAll('img');
    for(let img of imgs){
        if(!img.hasAttribute('src')){
            img.setAttribute('src','./images/photo2.jpg');
        }
    }


},false);