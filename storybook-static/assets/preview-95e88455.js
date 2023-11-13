import{_ as P,G as k,P as M,D as W,T as B}from"./chunk-5PKFUQBM-244277bb.js";import{r as d,R as l}from"./index-c013ead5.js";import{j as u,k as z,g as O,_ as w,T as h,b as H,f as D,l as y}from"./useThemeProps-7b35c985.js";import{_ as s}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-cc43380f.js";import{G as L}from"./GlobalStyles-e8e2b2e4.js";import"./_commonjsHelpers-725317a4.js";import"./emotion-react.browser.esm-5b0083ff.js";const R=d.createContext(null),T=R;function b(){return d.useContext(T)}const j=typeof Symbol=="function"&&Symbol.for,A=j?Symbol.for("mui.nested"):"__THEME_NESTED__";function $(e,t){return typeof t=="function"?t(e):s({},e,t)}function N(e){const{children:t,theme:n}=e,o=b(),r=d.useMemo(()=>{const a=o===null?n:$(o,n);return a!=null&&(a[A]=o!==null),a},[n,o]);return u(T.Provider,{value:r,children:t})}const g={};function E(e,t,n,o=!1){return d.useMemo(()=>{const r=e&&t[e]||t;if(typeof n=="function"){const a=n(r),i=e?s({},t,{[e]:a}):a;return o?()=>i:i}return e?s({},t,{[e]:n}):s({},t,n)},[e,t,n,o])}function G(e){const{children:t,theme:n,themeId:o}=e,r=z(g),a=b()||g,i=E(o,r,n),m=E(o,a,n,!0);return u(N,{theme:m,children:u(O.Provider,{value:i,children:t})})}const I=["theme"];function K(e){let{theme:t}=e,n=w(e,I);const o=t[h];return u(G,s({},n,{themeId:o?h:void 0,theme:o||t}))}const Y=(e,t)=>s({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode}),U=e=>s({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),V=(e,t=!1)=>{var n;const o={};t&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([i,m])=>{var c;o[e.getColorSchemeSelector(i).replace(/\s*&/,"")]={colorScheme:(c=m.palette)==null?void 0:c.mode}});let r=s({html:Y(e,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:s({margin:0},U(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},o);const a=(n=e.components)==null||(n=n.MuiCssBaseline)==null?void 0:n.styleOverrides;return a&&(r=[r,a]),r};function J(e){const t=H({props:e,name:"MuiCssBaseline"}),{children:n,enableColorScheme:o=!1}=t;return D(d.Fragment,{children:[u(L,{styles:r=>V(r,o)}),n]})}const{useParameter:X,addons:Z,useEffect:ue,useMemo:q}=__STORYBOOK_MODULE_PREVIEW_API__;var Q={};P(Q,{initializeThemeState:()=>v,pluckThemeFromContext:()=>S,useThemeParameters:()=>x});function S({globals:e}){return e[k]||""}function x(){return X(M,W)}function v(e,t){Z.getChannel().emit(B.REGISTER_THEMES,{defaultTheme:t,themes:e})}var ee=([e,t])=>t,te=({Provider:e,GlobalStyles:t,defaultTheme:n,themes:o={}})=>{let r=Object.keys(o),a=n||r[0];return v(r,a),(i,m)=>{let{themeOverride:c}=x(),p=S(m),_=q(()=>{let C=c||p||a,f=Object.entries(o);return f.length===1?ee(f[0]):o[C]},[o,p,c]);return e?l.createElement(e,{theme:_},t&&l.createElement(t,null),i()):l.createElement(l.Fragment,null,t&&l.createElement(t,null),i())}};const F={typography:{fontFamily:["Mont","sans-serif"].join(","),h1:{fontSize:"calc(16px + (24 - 16) * ((100vw - 375px) / (1920 - 375)))",fontWeight:600},h2:{fontSize:"calc(16px + (20 - 16) * ((100vw - 375px) / (1920 - 375)))",fontWeight:600},h3:{fontSize:16,fontWeight:600},h4:{fontSize:14,fontWeight:500},body1:{fontSize:"calc(14px + (16 - 14) * ((100vw - 375px) / (1920 - 375)))",fontWeight:400},body2:{fontSize:14,fontWeight:400},button:{textTransform:void 0,fontSize:"calc(12px + (14 - 12) * ((100vw - 375px) / (1920 - 375)))",fontWeight:600},caption:{fontSize:"calc(12px + (16 - 12) * ((100vw - 375px) / (1920 - 375)))",opacity:.5,fontWeight:400}},spacing:10},ne=y({palette:{mode:"dark",primary:{main:"#20315D"},secondary:{main:"#5D2020"},background:{paper:"#151918"},borderPrimary:{main:"#383838"},borderSecondary:{main:"#F5F5F5"},textButtonPrimary:{main:"#FFFFFF"},textButtonSecondary:{main:"#808080"},favoriteIconPrimary:{main:"#C75E5E"},scroll:{main:"#00000080"},loader:{main:"#4496B9"},progress:{main:"#E8EDF1"},suggestionHover:{main:"rgba(0, 0, 0, .1)"},circleFill:{main:"#5E7BC7"},mapLabel:{main:"#878787"},mapLandscape:{main:"#f9f5ed"},mapHighway:{main:"#f5f5f5"},mapHighwayStroke:{main:"#c9c9c9"},mapWater:{main:"#aee0f4"},errorMessage:{main:"#FF0000"},buttonExit:{main:"#2C2C2C"}},...F}),oe=y({palette:{mode:"light",primary:{main:"#5E7BC7"},secondary:{main:"#C75E5E"},background:{},borderPrimary:{main:"#C4C4C4"},borderSecondary:{main:"#F5F5F5"},textButtonPrimary:{main:"#FFFFFF"},textButtonSecondary:{main:"#808080"},favoriteIconPrimary:{main:"#C75E5E"},scroll:{main:"#00000080"},loader:{main:"#4496B9"},progress:{main:"#E8EDF1"},suggestionHover:{main:"rgba(0, 0, 0, .1)"},circleFill:{main:"#5E7BC7"},mapLabel:{main:"#878787"},mapLandscape:{main:"#f9f5ed"},mapHighway:{main:"#f5f5f5"},mapHighwayStroke:{main:"#c9c9c9"},mapWater:{main:"#aee0f4"},errorMessage:{main:"#FF0000"},buttonExit:{main:"#808080"}},...F}),de={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}}},pe=[te({themes:{light:oe,dark:ne},defaultTheme:"light",Provider:K,GlobalStyles:J})];export{pe as decorators,de as default};
//# sourceMappingURL=preview-95e88455.js.map
