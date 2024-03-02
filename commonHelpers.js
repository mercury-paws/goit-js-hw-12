import{a as p,i as l,S as u}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function f(s){let t="https://pixabay.com/api/";return p.get(t,{params:{key:"42490410-91d7fda5db61c0a899b50e1d9",q:s,orientation:"horizontal",safesearch:!0}}).then(o=>{if(console.log(o.data),o.status!==200)throw new Error("Image error!");return o.data})}function g(s){const t=document.querySelector(".gallery");t.innerHTML=s.map(({webformatURL:o,tags:a,likes:e,views:r,comments:i,downloads:d,largeImageURL:c})=>`<div class="pic-card">
          <a class="gallery-link" href="${c}">
            <img 
              src="${o}"
              data-source="${c}"
              alt="${a}" />
          </a>
          <div class="pic-info">
            <div class="info"><p class="label">Likes</p> <p class="info-label">${e}</p></div>
            <div class="info"><p class="label">Views</p> <p class="info-label">${r}</p></div>
            <div class="info"><p class="label">Comments</p> <p class="info-label">${i}</p></div>
            <div class="info"><p class="label">Downloads</p> <p class="info-label">${d}</p></div>
          </div>
        </div>`).join("")}const n=document.querySelector(".input-picstyle"),m=document.querySelector(".search-btn"),h=document.querySelector(".gallery");m.addEventListener("click",()=>{const s=n.value.trim().split(" ").join("+");if(console.log(s),!s){l.error({color:"red",message:"Please fill in the querry, what are you looking for?",position:"center",progressBarColor:"rgb(0, 255, 184)",timeout:2e3});return}h.innerHTML='<span class="loader"></span>',f(s).then(t=>{const o=t.hits;console.log(o),o.length===0&&l.error({color:"yellow",message:"Sorry, there are no images matching your search query. Please try again!",position:"center",progressBarColor:"rgb(0, 255, 184)",timeout:2e3}),g(o),new u(".pic-card a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(t=>{l.error({color:"red",message:"Error while fetching images",position:"center",progressBarColor:"rgb(0, 255, 184)",timeout:2e3})}).finally(()=>{n.value="";let t=s.split("+").join(" ");n.placeholder=`Last searched for "${t}"`})});
//# sourceMappingURL=commonHelpers.js.map
