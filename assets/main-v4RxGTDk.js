(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const c=document.querySelector(".burger-menu"),o=document.querySelector(".menu"),r=document.querySelector(".menu-backdrop"),n=document.querySelector(".close-menu-button"),e=document.querySelector(".mobile-nav-list"),t=()=>{o.classList.toggle("active"),r.classList.toggle("active"),c.classList.toggle("active")};c.addEventListener("click",t),r.addEventListener("click",t),n.addEventListener("click",t),e.addEventListener("click",t)});
