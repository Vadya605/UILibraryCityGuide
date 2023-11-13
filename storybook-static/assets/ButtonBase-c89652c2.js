import{_ as X}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-cc43380f.js";import{_ as re,j as U,b as ye,f as Oe}from"./useThemeProps-7b35c985.js";import{r as o,R as A}from"./index-c013ead5.js";import{c as C,a as Ee,s as ie,g as je,b as Ae}from"./styled-7e378db4.js";import{k as oe}from"./emotion-react.browser.esm-5b0083ff.js";import{_ as Xe,a as Ye}from"./assertThisInitialized-e784747a.js";function We(e,t){typeof e=="function"?e(t):e&&(e.current=t)}const He=typeof window<"u"?o.useLayoutEffect:o.useEffect,Ge=He;function H(e){const t=o.useRef(e);return Ge(()=>{t.current=e}),o.useRef((...r)=>(0,t.current)(...r)).current}function fe(...e){return o.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(r=>{We(r,t)})},e)}let G=!0,te=!1,de;const qe={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Je(e){const{type:t,tagName:r}=e;return!!(r==="INPUT"&&qe[t]&&!e.readOnly||r==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function Qe(e){e.metaKey||e.altKey||e.ctrlKey||(G=!0)}function ee(){G=!1}function Ze(){this.visibilityState==="hidden"&&te&&(G=!0)}function et(e){e.addEventListener("keydown",Qe,!0),e.addEventListener("mousedown",ee,!0),e.addEventListener("pointerdown",ee,!0),e.addEventListener("touchstart",ee,!0),e.addEventListener("visibilitychange",Ze,!0)}function tt(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return G||Je(t)}function nt(){const e=o.useCallback(n=>{n!=null&&et(n.ownerDocument)},[]),t=o.useRef(!1);function r(){return t.current?(te=!0,window.clearTimeout(de),de=window.setTimeout(()=>{te=!1},100),t.current=!1,!0):!1}function u(n){return tt(n)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:u,onBlur:r,ref:e}}const he=A.createContext(null);function se(e,t){var r=function(i){return t&&o.isValidElement(i)?t(i):i},u=Object.create(null);return e&&o.Children.map(e,function(n){return n}).forEach(function(n){u[n.key]=r(n)}),u}function rt(e,t){e=e||{},t=t||{};function r(d){return d in t?t[d]:e[d]}var u=Object.create(null),n=[];for(var i in e)i in t?n.length&&(u[i]=n,n=[]):n.push(i);var s,c={};for(var l in t){if(u[l])for(s=0;s<u[l].length;s++){var p=u[l][s];c[u[l][s]]=r(p)}c[l]=r(l)}for(s=0;s<n.length;s++)c[n[s]]=r(n[s]);return c}function S(e,t,r){return r[t]!=null?r[t]:e.props[t]}function it(e,t){return se(e.children,function(r){return o.cloneElement(r,{onExited:t.bind(null,r),in:!0,appear:S(r,"appear",e),enter:S(r,"enter",e),exit:S(r,"exit",e)})})}function ot(e,t,r){var u=se(e.children),n=rt(t,u);return Object.keys(n).forEach(function(i){var s=n[i];if(o.isValidElement(s)){var c=i in t,l=i in u,p=t[i],d=o.isValidElement(p)&&!p.props.in;l&&(!c||d)?n[i]=o.cloneElement(s,{onExited:r.bind(null,s),in:!0,exit:S(s,"exit",e),enter:S(s,"enter",e)}):!l&&c&&!d?n[i]=o.cloneElement(s,{in:!1}):l&&c&&o.isValidElement(p)&&(n[i]=o.cloneElement(s,{onExited:r.bind(null,s),in:p.props.in,exit:S(s,"exit",e),enter:S(s,"enter",e)}))}}),n}var st=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},at={component:"div",childFactory:function(t){return t}},ae=function(e){Xe(t,e);function t(u,n){var i;i=e.call(this,u,n)||this;var s=i.handleExited.bind(Ye(i));return i.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},i}var r=t.prototype;return r.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},r.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(n,i){var s=i.children,c=i.handleExited,l=i.firstRender;return{children:l?it(n,c):ot(n,s,c),firstRender:!1}},r.handleExited=function(n,i){var s=se(this.props.children);n.key in s||(n.props.onExited&&n.props.onExited(i),this.mounted&&this.setState(function(c){var l=X({},c.children);return delete l[n.key],{children:l}}))},r.render=function(){var n=this.props,i=n.component,s=n.childFactory,c=re(n,["component","childFactory"]),l=this.state.contextValue,p=st(this.state.children).map(s);return delete c.appear,delete c.enter,delete c.exit,i===null?A.createElement(he.Provider,{value:l},p):A.createElement(he.Provider,{value:l},A.createElement(i,c,p))},t}(A.Component);ae.propTypes={};ae.defaultProps=at;const ut=ae;function lt(e){const{className:t,classes:r,pulsate:u=!1,rippleX:n,rippleY:i,rippleSize:s,in:c,onExited:l,timeout:p}=e,[d,g]=o.useState(!1),b=C(t,r.ripple,r.rippleVisible,u&&r.ripplePulsate),x={width:s,height:s,top:-(s/2)+i,left:-(s/2)+n},h=C(r.child,d&&r.childLeaving,u&&r.childPulsate);return!c&&!d&&g(!0),o.useEffect(()=>{if(!c&&l!=null){const R=setTimeout(l,p);return()=>{clearTimeout(R)}}},[l,c,p]),U("span",{className:b,style:x,children:U("span",{className:h})})}const ct=Ee("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),m=ct,pt=["center","classes","className"];let q=e=>e,me,be,ge,Re;const ne=550,ft=80,dt=oe(me||(me=q`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),ht=oe(be||(be=q`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),mt=oe(ge||(ge=q`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),bt=ie("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),gt=ie(lt,{name:"MuiTouchRipple",slot:"Ripple"})(Re||(Re=q`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),m.rippleVisible,dt,ne,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,ht,ne,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,mt,({theme:e})=>e.transitions.easing.easeInOut),Rt=o.forwardRef(function(t,r){const u=ye({props:t,name:"MuiTouchRipple"}),{center:n=!1,classes:i={},className:s}=u,c=re(u,pt),[l,p]=o.useState([]),d=o.useRef(0),g=o.useRef(null);o.useEffect(()=>{g.current&&(g.current(),g.current=null)},[l]);const b=o.useRef(!1),x=o.useRef(0),h=o.useRef(null),R=o.useRef(null);o.useEffect(()=>()=>{x.current&&clearTimeout(x.current)},[]);const _=o.useCallback(f=>{const{pulsate:y,rippleX:E,rippleY:D,rippleSize:I,cb:z}=f;p(T=>[...T,U(gt,{classes:{ripple:C(i.ripple,m.ripple),rippleVisible:C(i.rippleVisible,m.rippleVisible),ripplePulsate:C(i.ripplePulsate,m.ripplePulsate),child:C(i.child,m.child),childLeaving:C(i.childLeaving,m.childLeaving),childPulsate:C(i.childPulsate,m.childPulsate)},timeout:ne,pulsate:y,rippleX:E,rippleY:D,rippleSize:I},d.current)]),d.current+=1,g.current=z},[i]),$=o.useCallback((f={},y={},E=()=>{})=>{const{pulsate:D=!1,center:I=n||y.pulsate,fakeElement:z=!1}=y;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const T=z?null:R.current,B=T?T.getBoundingClientRect():{width:0,height:0,left:0,top:0};let V,P,L;if(I||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)V=Math.round(B.width/2),P=Math.round(B.height/2);else{const{clientX:k,clientY:v}=f.touches&&f.touches.length>0?f.touches[0]:f;V=Math.round(k-B.left),P=Math.round(v-B.top)}if(I)L=Math.sqrt((2*B.width**2+B.height**2)/3),L%2===0&&(L+=1);else{const k=Math.max(Math.abs((T?T.clientWidth:0)-V),V)*2+2,v=Math.max(Math.abs((T?T.clientHeight:0)-P),P)*2+2;L=Math.sqrt(k**2+v**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{_({pulsate:D,rippleX:V,rippleY:P,rippleSize:L,cb:E})},x.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},ft)):_({pulsate:D,rippleX:V,rippleY:P,rippleSize:L,cb:E})},[n,_]),K=o.useCallback(()=>{$({},{pulsate:!0})},[$]),N=o.useCallback((f,y)=>{if(clearTimeout(x.current),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,x.current=setTimeout(()=>{N(f,y)});return}h.current=null,p(E=>E.length>0?E.slice(1):E),g.current=y},[]);return o.useImperativeHandle(r,()=>({pulsate:K,start:$,stop:N}),[K,$,N]),U(bt,X({className:C(m.root,i.root,s),ref:R},c,{children:U(ut,{component:null,exit:!0,children:l})}))}),yt=Rt;function Et(e){return je("MuiButtonBase",e)}const Tt=Ee("MuiButtonBase",["root","disabled","focusVisible"]),Mt=Tt,Ct=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],xt=e=>{const{disabled:t,focusVisible:r,focusVisibleClassName:u,classes:n}=e,s=Ae({root:["root",t&&"disabled",r&&"focusVisible"]},Et,n);return r&&u&&(s.root+=` ${u}`),s},Vt=ie("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Mt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),vt=o.forwardRef(function(t,r){const u=ye({props:t,name:"MuiButtonBase"}),{action:n,centerRipple:i=!1,children:s,className:c,component:l="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:x="a",onBlur:h,onClick:R,onContextMenu:_,onDragLeave:$,onFocus:K,onFocusVisible:N,onKeyDown:f,onKeyUp:y,onMouseDown:E,onMouseLeave:D,onMouseUp:I,onTouchEnd:z,onTouchMove:T,onTouchStart:B,tabIndex:V=0,TouchRippleProps:P,touchRippleRef:L,type:k}=u,v=re(u,Ct),O=o.useRef(null),M=o.useRef(null),Te=fe(M,L),{isFocusVisibleRef:ue,onFocus:Me,onBlur:Ce,ref:xe}=nt(),[F,Y]=o.useState(!1);p&&F&&Y(!1),o.useImperativeHandle(n,()=>({focusVisible:()=>{Y(!0),O.current.focus()}}),[]);const[J,Ve]=o.useState(!1);o.useEffect(()=>{Ve(!0)},[]);const ve=J&&!d&&!p;o.useEffect(()=>{F&&b&&!d&&J&&M.current.pulsate()},[d,b,F,J]);function w(a,ce,ze=g){return H(pe=>(ce&&ce(pe),!ze&&M.current&&M.current[a](pe),!0))}const we=w("start",E),Be=w("stop",_),Pe=w("stop",$),Le=w("stop",I),De=w("stop",a=>{F&&a.preventDefault(),D&&D(a)}),ke=w("start",B),Fe=w("stop",z),Se=w("stop",T),$e=w("stop",a=>{Ce(a),ue.current===!1&&Y(!1),h&&h(a)},!1),Ne=H(a=>{O.current||(O.current=a.currentTarget),Me(a),ue.current===!0&&(Y(!0),N&&N(a)),K&&K(a)}),Q=()=>{const a=O.current;return l&&l!=="button"&&!(a.tagName==="A"&&a.href)},Z=o.useRef(!1),Ie=H(a=>{b&&!Z.current&&F&&M.current&&a.key===" "&&(Z.current=!0,M.current.stop(a,()=>{M.current.start(a)})),a.target===a.currentTarget&&Q()&&a.key===" "&&a.preventDefault(),f&&f(a),a.target===a.currentTarget&&Q()&&a.key==="Enter"&&!p&&(a.preventDefault(),R&&R(a))}),Ue=H(a=>{b&&a.key===" "&&M.current&&F&&!a.defaultPrevented&&(Z.current=!1,M.current.stop(a,()=>{M.current.pulsate(a)})),y&&y(a),R&&a.target===a.currentTarget&&Q()&&a.key===" "&&!a.defaultPrevented&&R(a)});let W=l;W==="button"&&(v.href||v.to)&&(W=x);const j={};W==="button"?(j.type=k===void 0?"button":k,j.disabled=p):(!v.href&&!v.to&&(j.role="button"),p&&(j["aria-disabled"]=p));const _e=fe(r,xe,O),le=X({},u,{centerRipple:i,component:l,disabled:p,disableRipple:d,disableTouchRipple:g,focusRipple:b,tabIndex:V,focusVisible:F}),Ke=xt(le);return Oe(Vt,X({as:W,className:C(Ke.root,c),ownerState:le,onBlur:$e,onClick:R,onContextMenu:Be,onFocus:Ne,onKeyDown:Ie,onKeyUp:Ue,onMouseDown:we,onMouseLeave:De,onMouseUp:Le,onDragLeave:Pe,onTouchEnd:Fe,onTouchMove:Se,onTouchStart:ke,ref:_e,tabIndex:p?-1:V,type:k},j,v,{children:[s,ve?U(yt,X({ref:Te,center:i},P)):null]}))}),St=vt;export{St as B,he as T,fe as a,H as b,We as s,Ge as u};
//# sourceMappingURL=ButtonBase-c89652c2.js.map
