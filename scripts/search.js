var a=document.querySelectorAll(".search__button"),i=document.querySelector(".main-nav").querySelector(".search__input"),t=document.querySelector(".main-nav").querySelector(".search");a.forEach(s=>{s.addEventListener("click",c=>{let n=s.parentElement,e=s.parentElement.querySelector(".search__input");e.value||(c.preventDefault(),n.classList.contains("search--invisible")?(n.classList.remove("search--invisible"),e.addEventListener("transitionend",()=>{e.focus()})):e.focus())})});i.addEventListener("blur",()=>{t.classList.contains("search--invisible")||t.classList.add("search--invisible")});
