document.addEventListener("DOMContentLoaded",function(){const o=document.querySelector(".hour-hand"),r=document.querySelector(".minute-hand"),s=document.querySelector(".second-hand");setInterval(()=>{var{seconds:e,minutes:t,hours:n}={hours:(e=new Date).getHours(),minutes:e.getMinutes(),seconds:e.getSeconds()};s.style.transform=`translate(0, -50%) rotate(${6*e}deg)`,r.style.transform=`translate(0, -50%) rotate(${6*t}deg)`,o.style.transform=`translate(0, -50%) rotate(${30*n}deg)`},1e3)});