import{j as r,f as i}from"./useThemeProps-7b35c985.js";import{s as t}from"./styled-7e378db4.js";import{T as s}from"./Typography-4fac213a.js";const o=""+new URL("18_-ec275ec0.svg",import.meta.url).href,c=""+new URL("architecture1-ca7e6846.svg",import.meta.url).href,l=""+new URL("bank-f9012865.svg",import.meta.url).href,p=""+new URL("bed-6bea990a.svg",import.meta.url).href,m=""+new URL("bicycle-ccea0e32.svg",import.meta.url).href,d=""+new URL("car-rear-190eaf8c.svg",import.meta.url).href,u=""+new URL("coffee-d128fc91.svg",import.meta.url).href,g=""+new URL("culture-896cf247.svg",import.meta.url).href,f=""+new URL("ferris-wheel-ee212a74.svg",import.meta.url).href,h=""+new URL("food-2e2a17d1.svg",import.meta.url).href,y=""+new URL("gas station-7a4ad142.svg",import.meta.url).href,w=""+new URL("history-a64ca1a8.svg",import.meta.url).href,b=""+new URL("industry-cb523396.svg",import.meta.url).href,v=""+new URL("nature-886c893b.svg",import.meta.url).href,R=""+new URL("other-10d99677.svg",import.meta.url).href,_=""+new URL("religion1-b37aa13a.svg",import.meta.url).href,L=""+new URL("shopping-basket-590b2fba.svg",import.meta.url).href,U=""+new URL("sports-soccer-fd7a921a.svg",import.meta.url).href,P=[{id:1,name:"Природа",icon:v,types:["natural_feature"]},{id:2,name:"Культура",icon:g,types:["museum"]},{id:3,name:"История",icon:w,types:["point_of_interest"]},{id:4,name:"Религия",icon:_,types:["place_of_worship"]},{id:5,name:"Архитектура",icon:c,types:["architectural_feature"]},{id:6,name:"Индустриальные объекты",icon:b,types:["industrial_feature"]},{id:7,name:"Разное",icon:R,types:[""]},{id:8,name:"Развлечения",icon:f,types:["amusement_park"]},{id:9,name:"Спорт",icon:U,types:["stadium","gym","health"]},{id:10,name:"Для взрослых",icon:o,types:[""]},{id:11,name:"Авто",icon:d,types:["car_dealer"]},{id:12,name:"Заправки",icon:y,types:["gas_station"]},{id:13,name:"Велосипеды",icon:m,types:["bicycle_store"]},{id:14,name:"Магазины",icon:L,types:["store"]},{id:15,name:"Еда",icon:h,types:["restaurant"]},{id:16,name:"Кофе / чай",icon:u,types:["cafe"]},{id:17,name:"Банки",icon:l,types:["bank"]},{id:18,name:"Место для сна",icon:p,types:["lodging"]}],k=t("div")(({theme:e})=>({padding:e.spacing(1,1.7,.3,1.7),border:`${e.spacing(.3)} solid ${e.palette.borderPrimary.main}`,borderRadius:e.spacing(1)})),S=t("div")(({theme:e})=>({display:"flex",flexDirection:"column",rowGap:e.spacing(2),height:e.spacing(45.6),paddingRight:e.spacing(3.5),overflowY:"scroll","&::-webkit-scrollbar":{width:e.spacing(.5)},"&::-webkit-scrollbar-track":{backgroundColor:"transparent"},"&::-webkit-scrollbar-thumb":{borderRadius:e.spacing(.4),backgroundColor:e.palette.scroll.main}})),x=t("div")(({isSelected:e,theme:a})=>({display:"flex",alignItems:"center",columnGap:a.spacing(2),opacity:e?1:"0.5",whiteSpace:"normal","& img":{width:a.spacing(3)},"&:hover":{cursor:"pointer"}}));function n({selectedPlaces:e}){return r(k,{children:r(S,{children:P.map(a=>i(x,{isSelected:e.includes(a.name),children:[r("img",{src:a.icon,alt:"Place icon"}),r(s,{variant:"h4",children:a.name})]},a.name))})})}try{n.displayName="PlacesPanel",n.__docgenInfo={description:"",displayName:"PlacesPanel",props:{selectedPlaces:{defaultValue:null,description:"",name:"selectedPlaces",required:!0,type:{name:"string[]"}}}}}catch{}export{n as P,P as a};
//# sourceMappingURL=index-66230837.js.map
