(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(40)},25:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(17),c=a.n(s),i=a(7),m=(a(25),a(5));function o(e){return r.a.createElement("div",{className:"row form_city_weather"},r.a.createElement("div",{className:"input_city"},r.a.createElement("div",{className:"input_city_wrapper"},r.a.createElement("input",{className:"input input_text",onChange:e.onWeatherInputChange,type:"text",placeholder:"city"}))),r.a.createElement("div",{className:"input_submit_city"},r.a.createElement(m.b,{className:"input input_submit",to:{pathname:"/weather?".concat(e.city)}},r.a.createElement("input",{value:"weather",type:"submit"}))))}a(31);function l(e){return r.a.createElement("div",{className:"row jstf-sp-btw align-items-center city_history_item"},r.a.createElement("p",{className:"city_title"},e.city),r.a.createElement("div",{className:"btn_history"},">"),r.a.createElement(m.b,{className:"city_history_link",to:{pathname:"/weather?".concat(e.city)}}))}a(32);function u(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(),m=Object(i.a)(c,2),u=m[0],d=m[1];return Object(n.useEffect)(function(){return function(){for(var e=[],t=0;t<localStorage.length;t++){var a=localStorage.getItem(localStorage.key(t));e.unshift(a)}d(e)}()},[]),r.a.createElement("div",{className:"wrapper"},r.a.createElement("section",{className:"header"},r.a.createElement("div",{className:"title"},"CityWeather \xb0")),r.a.createElement(o,{onWeatherInputChange:function(e){s(e.target.value)},city:a}),u&&u.map(function(e,t){return r.a.createElement(l,{key:t,city:e})}))}var d=a(10),p=a.n(d),h=a(14);a(34),a(35);function w(e){var t=e.weatherForecastDay,a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(1e3*t[0].date).getUTCDay()],n=[],s=0,c=0,i=0,m=0;t.map(function(e){var t=new Date(1e3*e.date).getUTCHours(),a=e.temp,r=e.pressure,o=e.humidity;return t>=9&&t<=18?(i+=a,s++,r,o,n.push(e.mainWeather)):(m+=a,c++),m});var o=void 0!==n[0]?function(e){var t=e.slice();return t.sort(function(e,a){return t.filter(function(t){return t===e}).length-t.filter(function(e){return e===a}).length}).pop()}(n).toLowerCase():"";return r.a.createElement("div",{className:"weather_forecast_week_item ".concat(o)},r.a.createElement("div",{className:"row align-items-center jstf-sp-btw forecast_info"},r.a.createElement("div",{className:"weather_forecast_week_day"},a),r.a.createElement("div",{className:"weather_icon_mini"}),r.a.createElement("div",{className:"row weather_forecast_week_temp"},r.a.createElement("div",{className:"weather_forecast_week_temp_day"},0!==s&&Math.floor(i/s),0!==s&&r.a.createElement("span",null,"\xb0")),r.a.createElement("div",{className:"weather_forecast_week_temp_night"},0!==c&&Math.floor(m/c),0!==c&&r.a.createElement("span",null,"\xb0")))))}function f(e){var t,a=e.weatherForecast.weatherForecastList,n=[],s=0;return a.map(function(e){var a=new Date(1e3*e.date).getUTCDay();return void 0===t?(n.push([]),n[s].push(e)):a!==t?(s++,n.push([]),n[s].push(e)):n[s].push(e),t=a,n}),r.a.createElement("div",{className:"weather_forecast"},r.a.createElement("div",{className:"row jstf-sp-arnd forecast weather_forecast_week"},n.slice(1).map(function(e,t){return r.a.createElement(w,{weatherForecastDay:e,key:t})})),r.a.createElement("p",{onClick:e.onClickBtnForecast,className:"btn_forecast_close"},"close"))}a(36);function y(e){var t=("0"+new Date(1e3*e.weatherForecastDayTime).getUTCHours()).slice(-2)+":00",a=e.weatherForecastDayWeather.toLowerCase(),n=Math.floor(e.weatherForecastDayTemp);return r.a.createElement("div",{className:"weather_forecast_day_item ".concat(a)},r.a.createElement("p",{className:"weather_forecast_day_time"},t),r.a.createElement("div",{className:"weather_icon_mini"}),r.a.createElement("p",{className:"weather_forecast_day_temp"},n," \xb0"))}a(37);function E(e){var t,a,n=e.mainWeather.toLowerCase(),s=Math.floor(e.temp),c=("0"+e.sunriseHour).slice(-2)+":"+("0"+e.sunriseMins).slice(-2),i=("0"+e.sunsetHour).slice(-2)+":"+("0"+e.sunsetMins).slice(-2);switch(n){case"rain":t="It's raining ";break;case"sunny":t="It's sunny";break;case"clouds":t="It's cloudy";break;case"clear":t="It's clear";break;case"drizzle":t="It's drizzle";break;case"thunderstorm":t="It's thunderstorm";break;case"snow":t="It's snowing";break;case"fog":case"mist":case"smoke":case"haze":t="It's foggy";break;case"dust":case"sand":t="It's thunderstorm";break;case"ash":case"squall":case"tornado":t="DON'T GO OUTSIDE";break;default:t="It's something"}var o=e.weatherForecastDay,l=e.weatherForecast.timezone;return a=e.descriptionWeather,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"top_section"},r.a.createElement("div",{className:"row jstf-sp-btw"},r.a.createElement("div",{className:"date"},r.a.createElement("p",{className:"date_title"},"today"),r.a.createElement("p",{className:"current_date"},e.currentDay)),r.a.createElement("div",{className:"city"},r.a.createElement("p",{className:"city_title"},"city"),r.a.createElement("p",{className:"current_city"},e.city))),r.a.createElement("div",{className:"row jstf-sp-btw temperature_weather_icon"},r.a.createElement("div",{className:"temperature"},r.a.createElement("p",{className:"current_temperature"},s,"\xb0")),r.a.createElement("div",{className:"weather_icon"}))),r.a.createElement("div",{className:"main_section"},r.a.createElement("div",{className:"row jstf-sp-btw"},r.a.createElement("div",{className:"weather_text"},r.a.createElement("p",{className:"current_weather_text"},"".concat(t," in  ").concat(e.city," "))),r.a.createElement("div",{className:"weather_text_description"},r.a.createElement("p",null,a))),r.a.createElement("div",{className:"row forecast weather_forecast_day"},o.map(function(e,t){return r.a.createElement(y,{weatherForecastDayTime:e.date+l,weatherForecastDayWeather:e.mainWeather,weatherForecastDayTemp:e.temp,key:t})}))),r.a.createElement("div",{className:"bottom_section"},r.a.createElement("div",{className:"other_info"},r.a.createElement("div",{className:"row jstf-sp-btw weather_info"},r.a.createElement("div",{className:"humidity"},r.a.createElement("p",{className:"title_small humidity_title"},"humidity"),r.a.createElement("p",{className:"current_humidity"},e.humidity,"%")),r.a.createElement("div",{className:"wind"},r.a.createElement("p",{className:"title_small wind_title"},"wind"),r.a.createElement("p",{className:"current_wind"},e.windSpeed," ",r.a.createElement("span",{className:"units"},"m/s"))),r.a.createElement("div",{className:"visibility"},r.a.createElement("p",{className:"title_small visibility_title"}," visibility"),r.a.createElement("p",{className:"current_visibility"},Math.floor(e.visibility/1e3)," ",r.a.createElement("span",{className:"units"},"km")," "))),r.a.createElement("div",{className:"row jstf-sp-arnd sunset_sunrise"},r.a.createElement("div",{className:"sunrise"},r.a.createElement("p",{className:"sunrise_title"},"sunrise"),r.a.createElement("p",{className:"current_sunrise"},c)),r.a.createElement("div",{className:"sunset"},r.a.createElement("p",{className:"sunset_title"},"sunset"),r.a.createElement("p",{className:"current_sunset"},i)))),r.a.createElement("nav",{className:"row jstf-sp-btw bottom_nav"},r.a.createElement(m.b,{className:"home_link",to:{pathname:"/weather/"}},"home"),r.a.createElement("p",{onClick:e.onClickBtnForecast},"open forecast for ",e.city))))}a(38);var _="e2bc6a595e6ee4928ed91c3778b2b446";function v(e){var t,a=e.match.params.city,s=Object(n.useState)({}),c=Object(i.a)(s,2),m=c[0],o=c[1],l=Object(n.useState)({}),u=Object(i.a)(l,2),d=u[0],w=u[1],y=Object(n.useState)("nothing"),v=Object(i.a)(y,2),N=v[0],b=v[1],g=Object(n.useState)(!1),k=Object(i.a)(g,2),j=k[0],D=k[1],C=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(1e3*(m.date+m.timezone)).getUTCDay()],F=new Date(1e3*(m.date+m.timezone)).getUTCHours(),O=new Date(1e3*(m.sunrise+m.timezone)).getUTCHours(),W=new Date(1e3*(m.sunset+m.timezone)).getUTCHours(),T=new Date(1e3*(m.sunrise+m.timezone)).getUTCMinutes(),S=new Date(1e3*(m.sunset+m.timezone)).getUTCMinutes(),z=function(e){var t=e,a=e;t&&a&&localStorage.setItem(t,a)},I=function(e){var t={};return 200===e.cod&&(t={cod:e.cod,id:e.id,city:e.name,temp:e.main.temp,pressure:e.main.pressure,humidity:e.main.humidity,windSpeed:e.wind.speed,visibility:e.visibility,sunrise:e.sys.sunrise,sunset:e.sys.sunset,date:e.dt,timezone:e.timezone,mainWeather:e.weather[0].main,descriptionWeather:e.weather[0].description}),t},x=function(e){var t={},a=[];return"200"===e.cod&&(e.list.map(function(e){return a.push({temp:e.main.temp,pressure:e.main.pressure,humidity:e.main.humidity,date:e.dt,mainWeather:e.weather[0].main,descriptionWeather:e.weather[0].description})}),t={weatherForecastList:a,timezone:e.city.timezone}),t},M=function(){var e=Object(h.a)(p.a.mark(function e(t){var a,n,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat(_,"&lang=eng&units=metric"));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,200===(r=I(n)).cod&&z(r.city),e.abrupt("return",o(r));case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(h.a)(p.a.mark(function e(t){var a,n,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.openweathermap.org/data/2.5/forecast?q=".concat(t,"&appid=").concat(_,"&lang=eng&units=metric"));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,r=x(n),e.abrupt("return",w(r));case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();function H(e){for(var t in e)if(e.hasOwnProperty(t))return!0;return!1}var L=function(e,a,n){e>=a||e<=n?(!function(e,a,n){t=a>n?e-a<0?(24-a+e)/(24-a+n)*100:(e-a)/(24-a+n)*100:(e-a)/(n-a)*100}(e,a,n),t>=0&&t<20?b("evening"):t>=20&&t<66?b("night"):t>66&&t<=100&&b("late_night")):(!function(e,a,n){t=a<n?e-n<0?(24-n+e)/(24-(n+a))*100:(e-n)/(24-(n+a))*100:(e-n)/(a-n)*100}(e,a,n),t>=0&&t<20?b("morning"):t>=20&&t<80?b("day"):t>80&&t<=100&&b("evening"))};return Object(n.useEffect)(function(){M(a),U(a)},[a]),Object(n.useEffect)(function(){L(F,W,O)},[m]),r.a.createElement("div",{className:"weather  ".concat(N)},r.a.createElement("div",{className:"weather_wrap ".concat(m.mainWeather&&m.mainWeather.toLowerCase())},r.a.createElement("div",{className:"row jstf-sp-btw weather_item"},H(m)&&H(d)&&r.a.createElement(E,{city:m.city,temp:m.temp,key:m.cityName,humidity:m.humidity,windSpeed:m.windSpeed,visibility:m.visibility,currentHour:F,currentDay:C,sunsetHour:W,sunsetMins:S,sunriseHour:O,sunriseMins:T,mainWeather:m.mainWeather,descriptionWeather:m.descriptionWeather,weatherForecast:d,onClickBtnForecast:function(){return D(!0)},weatherForecastDay:d.weatherForecastList.slice(0,8)})),j&&H(d)&&r.a.createElement(f,{weatherForecast:d,onClickBtnForecast:function(){return D(!1)}})))}var N=a(6);a(39);c.a.render(r.a.createElement(function(){return r.a.createElement(m.a,null,r.a.createElement("div",{className:"mainPage"},r.a.createElement(N.c,null,r.a.createElement(N.a,{exact:!0,path:"/weather",component:u}),r.a.createElement(N.a,{path:"/weather?:city",component:v}))))},null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.a11b0f75.chunk.js.map