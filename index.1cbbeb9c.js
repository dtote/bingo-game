import{_ as u}from"./vendor.502a433f.js";const g=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}};g();const[d,m]=document.querySelectorAll(".card"),C=document.querySelector(".start-button"),a=document.querySelector(".picker-button"),f=document.querySelector(".picked-number");let i=u.shuffle(u.range(1,90,1));const N=()=>{k(),b(d),b(m)},b=t=>{u.shuffle(i).slice(0,15).forEach(o=>{const n=document.createElement("div");n.textContent=o,n.classList.add("number"),t.appendChild(n)})},v=()=>{const t=i.pop();f.textContent=t,p(d,t),p(m,t),L()},p=(t,s)=>{t.childNodes.forEach(n=>{n.textContent===s.toString()&&n.classList.add("line-through")})},L=()=>{const t=[...document.querySelectorAll(".card .number")],s=t.slice(0,t.length/2-1),o=t.slice(t.length/2),n=s.every(l=>l.classList.contains("line-through")),e=o.every(l=>l.classList.contains("line-through")),r={"\xA1Empate!":n&&e,"\xA1Gana Player 1!":n&&!e,"\xA1Gana CPU!":!n&&e},c=Object.keys(r);Object.values(r).forEach((l,h)=>{l&&y(c[h])})},y=t=>{t!==""&&(alert(t),a.disabled=!0)},k=()=>{const t=document.querySelectorAll(".number");i=u.shuffle(u.range(1,90,1)),f.textContent="",t.forEach(s=>s.remove()),a.disabled=!a.disabled,y("")};C.addEventListener("click",()=>N());a.addEventListener("click",()=>v());