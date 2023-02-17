var scroall = document.getElementById("scroller");
var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

console.log(height);

window.addEventListener("scroll",function(){
    const scrollTop = document.documentElement.scrollTop;
    scroall.style.width = `${(scrollTop / height) * 100}%`
    
})

var moon = document.getElementById("moon");
var night = document.getElementById("night")
moon.onclick = ()=>{
night.style.display = "flex"
moon.style.display = "none"
document.documentElement.style.setProperty("--color-dark", "#ffffffd9")
document.documentElement.style.setProperty("--color-light", "#hhh")
document.documentElement.style.setProperty("--color-white", "#111")
document.documentElement.style.setProperty("--color-primary", "rgb(85, 69, 151)")
document.documentElement.style.setProperty("--color-black", "#DDD")
document.documentElement.style.setProperty("--color-secodary","hsl(252,100%,90%)")
}

night.onclick = ()=>{
    moon.style.display = "flex"
    night.style.display = "none"
    document.documentElement.style.setProperty("--color-dark", "hsl(252,30%,17%)")
    document.documentElement.style.setProperty("--color-light", "hsl(252,30%,95%)")
    document.documentElement.style.setProperty("--color-white", "hsl(252,30%,100%)")
    document.documentElement.style.setProperty("--color-primary", "hsl(252,75%,60%)")
    document.documentElement.style.setProperty("--color-black", "hsl(252,30%,10%)")
    document.documentElement.style.setProperty("--color-secodary","#111")
}


