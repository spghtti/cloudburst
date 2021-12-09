(()=>{"use strict";const e={unit:"imperial"};function t(e){const t=new Date(1e3*e);return`${t.getHours()}:${`0${t.getMinutes()}`.substr(-2)}`}const n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function o(o){fetch(`https://api.openweathermap.org/data/2.5/weather?q=${o}&APPID=e6ea60ae42c4f7ea5dbffec273b1f3a0&units=${e.unit}`,{mode:"cors"}).then((e=>e.json())).then((r=>{var a,i;void 0!==r.main&&(function(e){const t=document.getElementById("current-location"),n=document.getElementById("current-temperature"),o=document.getElementById("current-high"),r=document.getElementById("current-low"),a=document.getElementById("current-weather-icon");t.innerHTML=`${e.name}, ${e.sys.country}`,n.innerHTML=`${Math.round(e.main.temp)}°`,o.innerHTML=`${Math.round(e.main.temp_max)}°`,r.innerHTML=` ${Math.round(e.main.temp_min)}°`,a.src=`http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`}(r),function(e){var t;document.getElementById("summary").innerHTML=`${t=e.weather[0].description,"string"!=typeof t?"":t.charAt(0).toUpperCase()+t.slice(1)}. The high is ${Math.round(e.main.temp_max)}° and the low is ${Math.round(e.main.temp_min)}°.`}(r),function(e){const n=document.getElementById("feels-like"),o=document.getElementById("rain-chance"),r=document.getElementById("sunrise-time"),a=document.getElementById("sunset-time"),i=document.getElementById("wind"),c=document.getElementById("humidity"),m=document.getElementById("pressure"),u=document.getElementById("visibility");n.innerHTML=`${Math.round(e.main.feels_like)}°`,void 0!==e.rain?o.innerHTML=100*e.rain["1h"]+"%":o.innerHTML="0%",r.innerHTML=t(e.sys.sunrise+e.timezone),a.innerHTML=t(e.sys.sunset+e.timezone),i.innerHTML=`${Math.round(e.wind.speed)} mph`,c.innerHTML=`${e.main.humidity}%`,m.innerHTML=`${e.main.pressure} hPa`,1e4===parseInt(e.visibility,10)?u.innerHTML="6+ mi":u.innerHTML=`${Math.round(.0006213712*e.visibility)} mi`}(r),a=r.coord.lat,i=r.coord.lon,fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${a}&lon=${i}&exclude=minutely,alerts&units=${e.unit}&appid=e6ea60ae42c4f7ea5dbffec273b1f3a0`,{mode:"cors"}).then((e=>e.json())).then((e=>{!function(e){const t=document.getElementsByClassName("hourly-headline");let n=e;for(let e=0;e<12;e++){n+=3600;const o=new Date(1e3*n).getHours();t[e].innerHTML=`${o}:00`}}(e.current.dt+e.timezone_offset),function(e){const t=document.getElementsByClassName("hourly-weather-icon"),n=document.getElementsByClassName("hourly-temperature");for(let o=0;o<12;o++)t[o].src=`http://openweathermap.org/img/wn/${e.hourly[o].weather[0].icon}@2x.png`,n[o].innerHTML=`${Math.round(e.hourly[o].temp)}°`}(e),function(e){const t=document.getElementsByClassName("day");let o=e;for(let e=0;e<7;e++){o+=86400;const r=new Date(1e3*o),a=n[r.getDay()];t[e].innerHTML=a}}(e.current.dt+e.timezone_offset),function(e){const t=document.getElementsByClassName("week-weather-icon"),n=document.getElementsByClassName("day-temperature");for(let o=1;o<8;o++)t[o-1].src=`http://openweathermap.org/img/wn/${e.daily[o].weather[0].icon}@2x.png`,n[o-1].innerHTML=`${Math.round(e.daily[o].temp.max)}°`}(e)})).catch((e=>{console.log(e)})),localStorage.setItem("location",o))})).catch((e=>{console.log(e)}))}const r=localStorage.getItem("location");(function(e){let t;try{t=window.localStorage;const e="__storage_test__";return t.setItem(e,e),t.removeItem(e),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&t&&0!==t.length}})()&&localStorage.getItem("location")?o(r):o("Reykjavík"),document.getElementById("search").addEventListener("submit",(function(e){e.preventDefault()}));const a=document.getElementById("current-unit"),i=document.getElementById("temperature-unit-switch");a.innerHTML=`${e.unit}.`,i.addEventListener("click",(function(){const t=document.getElementById("current-location").innerHTML;"imperial"===e.unit?e.unit="metric":e.unit="imperial",o(t),document.getElementById("current-unit").innerHTML=`${e.unit}.`})),document.getElementById("search-button").addEventListener("click",(async function(){o(document.getElementById("searchbar").value),document.getElementById("searchbar").value=""}))})();