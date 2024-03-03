import{a as d,i as l,S as u}from"./assets/vendor-5401a4b0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function f(o){let r="https://pixabay.com/api/";const s=await d.get(r,{params:{key:"42490410-91d7fda5db61c0a899b50e1d9",q:o,per_page:15,orientation:"horizontal",safesearch:!0}});if(s.status!==200)throw new Error("Image error!");return(await s.data).hits}function g(o){const r=document.querySelector(".gallery");r.innerHTML=o.map(({webformatURL:s,tags:a,likes:e,views:t,comments:i,downloads:p,largeImageURL:c})=>`<div class="pic-card">
          <a class="gallery-link" href="${c}">
            <img 
              src="${s}"
              data-source="${c}"
              alt="${a}" />
          </a>
          <div class="pic-info">
            <div class="info"><p class="label">Likes</p> <p class="info-label">${e}</p></div>
            <div class="info"><p class="label">Views</p> <p class="info-label">${t}</p></div>
            <div class="info"><p class="label">Comments</p> <p class="info-label">${i}</p></div>
            <div class="info"><p class="label">Downloads</p> <p class="info-label">${p}</p></div>
          </div>
        </div>`).join("")}const n=document.querySelector(".input-picstyle"),m=document.querySelector(".search-btn"),y=document.querySelector(".gallery"),h=document.querySelector(".loadmore-btn");let b;m.addEventListener("click",async()=>{const o=n.value.trim().split(" ").join("+");if(console.log(o),!o){l.error({color:"red",message:"Please fill in the querry, what are you looking for?",position:"center",progressBarColor:"rgb(0, 255, 184)",timeout:2e3});return}y.innerHTML='<span class="loader"></span>';try{const r=await f(o);r.length===0?l.error({color:"yellow",message:"Sorry, there are no images matching your search query. Please try again!",position:"center",progressBarColor:"rgb(0, 255, 184)",timeout:2e3}):(g(r),b=1,h.classList.remove("is-hidden"),new u(".pic-card a",{captionsData:"alt",captionDelay:250}).refresh())}catch(r){console.log("Error caught:",r.message),l.error({color:"red",message:"Error while fetching images",position:"center",progressBarColor:"rgb(0, 255, 184)",timeout:2e3})}finally{n.value="";let r=o.split("+").join(" ");n.placeholder=`Last searched for "${r}"`}});
//# sourceMappingURL=commonHelpers.js.map
