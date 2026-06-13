import{a as d,S as u,i as n}from"./assets/vendor-CIF6YjI2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();const f="56297630-c0ac0d886aa933eba55d4d8e7",m="https://pixabay.com/api/";async function p(s){const o={key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await d.get(m,{params:o})).data}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),g=new u(".gallery a",{captionsData:"alt",captionDelay:250});function y(s){const o=s.map(e=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img
            class="gallery-image"
            src="${e.webformatURL}"
            alt="${e.tags}"
          />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b> ${e.likes}</p>
          <p class="info-item"><b>Views</b> ${e.views}</p>
          <p class="info-item"><b>Comments</b> ${e.comments}</p>
          <p class="info-item"><b>Downloads</b> ${e.downloads}</p>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",o),g.refresh()}function h(){l.innerHTML=""}function b(){c.classList.remove("hidden")}function L(){c.classList.add("hidden")}const w=document.querySelector(".form");w.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){n.warning({title:"Warning",message:"Please enter a word for searching images."});return}h(),b(),p(o).then(e=>{if(e.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please, try again!"});return}y(e.hits)}).catch(e=>{n.error({title:"Error",message:"Something went wrong. Please try again."}),console.error(e)}).finally(()=>{L(),s.target.reset()})});
//# sourceMappingURL=index.js.map
