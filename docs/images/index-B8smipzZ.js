(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();var ah=Object.defineProperty,oh=(s,e,t)=>e in s?ah(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,di=(s,e,t)=>(oh(s,typeof e!="symbol"?e+"":e,t),t);(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
* @license
* Copyright 2010-2021 Three.js Authors
* SPDX-License-Identifier: MIT
*/const Nl="134",lh=0,Qa=1,ch=2,Ol=1,hh=2,qr=3,mr=0,Ke=1,Ni=2,Ul=1,pi=0,Jr=1,aa=2,$a=3,eo=4,uh=5,lr=100,dh=101,ph=102,to=103,io=104,fh=200,mh=201,gh=202,vh=203,Fl=204,zl=205,xh=206,yh=207,_h=208,Mh=209,wh=210,bh=0,Sh=1,Th=2,oa=3,Eh=4,Ah=5,Lh=6,Rh=7,as=0,Ch=1,Ph=2,Di=0,Ih=1,Dh=2,Nh=3,Oh=4,Uh=5,Bl=300,pn=301,fn=302,la=303,ca=304,os=306,ba=307,gr=1e3,_t=1001,Qn=1002,Ze=1003,ha=1004,ua=1005,nt=1006,Hl=1007,wr=1008,xi=1009,Fh=1010,zh=1011,$n=1012,Bh=1013,Kn=1014,Jt=1015,dr=1016,Hh=1017,kh=1018,Gh=1019,Zr=1020,Vh=1021,Kt=1022,st=1023,Wh=1024,jh=1025,Xh=st,pr=1026,rn=1027,qh=1028,Yh=1029,Jh=1030,Zh=1031,Kh=1032,Qh=1033,ro=33776,no=33777,so=33778,ao=33779,oo=35840,lo=35841,co=35842,ho=35843,$h=36196,uo=37492,po=37496,eu=37808,tu=37809,iu=37810,ru=37811,nu=37812,su=37813,au=37814,ou=37815,lu=37816,cu=37817,hu=37818,uu=37819,du=37820,pu=37821,fu=36492,mu=37840,gu=37841,vu=37842,xu=37843,yu=37844,_u=37845,Mu=37846,wu=37847,bu=37848,Su=37849,Tu=37850,Eu=37851,Au=37852,Lu=37853,Ru=2200,Cu=2201,Pu=2202,nn=2300,vr=2301,ys=2302,cr=2400,hr=2401,es=2402,Sa=2500,kl=2501,Iu=0,Du=1,Gl=2,ft=3e3,vt=3001,Ta=3007,Ea=3002,Nu=3003,Vl=3004,Wl=3005,jl=3006,Ou=3200,Uu=3201,Fi=0,Fu=1,_s=7680,zu=519,sn=35044,ts=35048,fo="300 es";class zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let r=0,n=i.length;r<n;r++)i[r].call(this,e);e.target=null}}}let yn=1234567;const Kr=Math.PI/180,an=180/Math.PI,at=[];for(let s=0;s<256;s++)at[s]=(s<16?"0":"")+s.toString(16);const Bu=typeof crypto<"u"&&"randomUUID"in crypto;function Et(){if(Bu)return crypto.randomUUID().toUpperCase();const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(at[s&255]+at[s>>8&255]+at[s>>16&255]+at[s>>24&255]+"-"+at[e&255]+at[e>>8&255]+"-"+at[e>>16&15|64]+at[e>>24&255]+"-"+at[t&63|128]+at[t>>8&255]+"-"+at[t>>16&255]+at[t>>24&255]+at[i&255]+at[i>>8&255]+at[i>>16&255]+at[i>>24&255]).toUpperCase()}function yt(s,e,t){return Math.max(e,Math.min(t,s))}function Aa(s,e){return(s%e+e)%e}function Hu(s,e,t,i,r){return i+(s-e)*(r-i)/(t-e)}function ku(s,e,t){return s!==e?(t-s)/(e-s):0}function Qr(s,e,t){return(1-t)*s+t*e}function Gu(s,e,t,i){return Qr(s,e,1-Math.exp(-t*i))}function Vu(s,e=1){return e-Math.abs(Aa(s,e*2)-e)}function Wu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function ju(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Xu(s,e){return s+Math.floor(Math.random()*(e-s+1))}function qu(s,e){return s+Math.random()*(e-s)}function Yu(s){return s*(.5-Math.random())}function Ju(s){return s!==void 0&&(yn=s%2147483647),yn=yn*16807%2147483647,(yn-1)/2147483646}function Zu(s){return s*Kr}function Ku(s){return s*an}function da(s){return(s&s-1)===0&&s!==0}function Xl(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ql(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Qu(s,e,t,i,r){const n=Math.cos,a=Math.sin,o=n(t/2),l=a(t/2),c=n((e+i)/2),h=a((e+i)/2),u=n((e-i)/2),d=a((e-i)/2),p=n((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*p,o*c);break;case"YXY":s.set(l*p,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}var $u=Object.freeze({__proto__:null,DEG2RAD:Kr,RAD2DEG:an,generateUUID:Et,clamp:yt,euclideanModulo:Aa,mapLinear:Hu,inverseLerp:ku,lerp:Qr,damp:Gu,pingpong:Vu,smoothstep:Wu,smootherstep:ju,randInt:Xu,randFloat:qu,randFloatSpread:Yu,seededRandom:Ju,degToRad:Zu,radToDeg:Ku,isPowerOfTwo:da,ceilPowerOfTwo:Xl,floorPowerOfTwo:ql,setQuaternionFromProperEuler:Qu});class J{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),n=this.x-e.x,a=this.y-e.y;return this.x=n*i-a*r+e.x,this.y=n*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}J.prototype.isVector2=!0;class ot{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,n,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=n,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,n=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],v=r[0],x=r[3],m=r[6],f=r[1],w=r[4],y=r[7],b=r[2],L=r[5],_=r[8];return n[0]=a*v+o*f+l*b,n[3]=a*x+o*w+l*L,n[6]=a*m+o*y+l*_,n[1]=c*v+h*f+u*b,n[4]=c*x+h*w+u*L,n[7]=c*m+h*y+u*_,n[2]=d*v+p*f+g*b,n[5]=d*x+p*w+g*L,n[8]=d*m+p*y+g*_,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*n*h+i*o*l+r*n*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*n,p=c*n-a*l,g=t*u+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(r*c-h*i)*v,e[2]=(o*i-r*a)*v,e[3]=d*v,e[4]=(h*t-r*l)*v,e[5]=(r*n-o*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*n)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,n,a,o){const l=Math.cos(n),c=Math.sin(n);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,n=r[0],a=r[3],o=r[6],l=r[1],c=r[4],h=r[7];return r[0]=t*n+i*l,r[3]=t*a+i*c,r[6]=t*o+i*h,r[1]=-i*n+t*l,r[4]=-i*a+t*c,r[7]=-i*o+t*h,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}ot.prototype.isMatrix3=!0;function Yl(s){if(s.length===0)return-1/0;let e=s[0];for(let t=1,i=s.length;t<i;++t)s[t]>e&&(e=s[t]);return e}function ls(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function mo(s,e=0){let t=3735928559^e,i=1103547991^e;for(let r=0,n;r<s.length;r++)n=s.charCodeAt(r),t=Math.imul(t^n,2654435761),i=Math.imul(i^n,1597334677);return t=Math.imul(t^t>>>16,2246822507)^Math.imul(i^i>>>13,3266489909),i=Math.imul(i^i>>>16,2246822507)^Math.imul(t^t>>>13,3266489909),4294967296*(2097151&i)+(t>>>0)}let Vi;class br{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vi===void 0&&(Vi=ls("canvas")),Vi.width=e.width,Vi.height=e.height;const i=Vi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Vi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let ed=0;class et extends zi{constructor(e=et.DEFAULT_IMAGE,t=et.DEFAULT_MAPPING,i=_t,r=_t,n=nt,a=wr,o=st,l=xi,c=1,h=ft){super(),Object.defineProperty(this,"id",{value:ed++}),this.uuid=Et(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=n,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const r=this.image;if(r.uuid===void 0&&(r.uuid=Et()),!t&&e.images[r.uuid]===void 0){let n;if(Array.isArray(r)){n=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?n.push(Ms(r[a].image)):n.push(Ms(r[a]))}else n=Ms(r);e.images[r.uuid]={uuid:r.uuid,url:n}}i.image=r.uuid}return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gr:e.x=e.x-Math.floor(e.x);break;case _t:e.x=e.x<0?0:1;break;case Qn:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gr:e.y=e.y-Math.floor(e.y);break;case _t:e.y=e.y<0?0:1;break;case Qn:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}et.DEFAULT_IMAGE=void 0;et.DEFAULT_MAPPING=Bl;et.prototype.isTexture=!0;function Ms(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?br.getDataURL(s):s.data?{data:Array.prototype.slice.call(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class ze{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,n=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*n,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*n,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*n,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*n,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,n;const a=e.elements,o=a[0],l=a[4],c=a[8],h=a[1],u=a[5],d=a[9],p=a[2],g=a[6],v=a[10];if(Math.abs(l-h)<.01&&Math.abs(c-p)<.01&&Math.abs(d-g)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+p)<.1&&Math.abs(d+g)<.1&&Math.abs(o+u+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const m=(o+1)/2,f=(u+1)/2,w=(v+1)/2,y=(l+h)/4,b=(c+p)/4,L=(d+g)/4;return m>f&&m>w?m<.01?(i=0,r=.707106781,n=.707106781):(i=Math.sqrt(m),r=y/i,n=b/i):f>w?f<.01?(i=.707106781,r=0,n=.707106781):(r=Math.sqrt(f),i=y/r,n=L/r):w<.01?(i=.707106781,r=.707106781,n=0):(n=Math.sqrt(w),i=b/n,r=L/n),this.set(i,r,n,t),this}let x=Math.sqrt((g-d)*(g-d)+(c-p)*(c-p)+(h-l)*(h-l));return Math.abs(x)<.001&&(x=1),this.x=(g-d)/x,this.y=(c-p)/x,this.z=(h-l)/x,this.w=Math.acos((o+u+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}ze.prototype.isVector4=!0;class pt extends zi{constructor(e,t,i={}){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new ze(0,0,e,t),this.scissorTest=!1,this.viewport=new ze(0,0,e,t),this.texture=new et(void 0,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:nt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image={...this.texture.image},this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}pt.prototype.isWebGLRenderTarget=!0;class td extends pt{constructor(e,t,i){super(e,t);const r=this.texture;this.texture=[];for(let n=0;n<i;n++)this.texture[n]=r.clone()}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,n=this.texture.length;r<n;r++)this.texture[r].image.width=e,this.texture[r].image.height=t,this.texture[r].image.depth=i;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,i=e.texture.length;t<i;t++)this.texture[t]=e.texture[t].clone();return this}}td.prototype.isWebGLMultipleRenderTargets=!0;class Jl extends pt{constructor(e,t,i){super(e,t,i),this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}}Jl.prototype.isWebGLMultisampleRenderTarget=!0;class gt{constructor(e=0,t=0,i=0,r=1){this._x=e,this._y=t,this._z=i,this._w=r}static slerp(e,t,i,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,r)}static slerpFlat(e,t,i,r,n,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3];const d=n[a+0],p=n[a+1],g=n[a+2],v=n[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==d||c!==p||h!==g){let x=1-o;const m=l*d+c*p+h*g+u*v,f=m>=0?1:-1,w=1-m*m;if(w>Number.EPSILON){const b=Math.sqrt(w),L=Math.atan2(b,m*f);x=Math.sin(x*L)/b,o=Math.sin(o*L)/b}const y=o*f;if(l=l*x+d*y,c=c*x+p*y,h=h*x+g*y,u=u*x+v*y,x===1-o){const b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,n,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=n[a],d=n[a+1],p=n[a+2],g=n[a+3];return e[t]=o*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-o*p,e[t+2]=c*g+h*p+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,n=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),u=o(n/2),d=l(i/2),p=l(r/2),g=l(n/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],n=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(n-c)*p,this._z=(a-r)*p}else if(i>o&&i>u){const p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(n+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-i-u);this._w=(n-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-i-o);this._w=(a-r)/p,this._x=(n+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,n=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+r*c-n*l,this._y=r*h+a*l+n*o-i*c,this._z=n*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-n*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,n=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+n*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=n,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*n+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=n*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),n=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(n),i*Math.cos(n),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}gt.prototype.isQuaternion=!0;class A{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(go.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(go.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6]*r,this.y=n[1]*t+n[4]*i+n[7]*r,this.z=n[2]*t+n[5]*i+n[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,n=e.elements,a=1/(n[3]*t+n[7]*i+n[11]*r+n[15]);return this.x=(n[0]*t+n[4]*i+n[8]*r+n[12])*a,this.y=(n[1]*t+n[5]*i+n[9]*r+n[13])*a,this.z=(n[2]*t+n[6]*i+n[10]*r+n[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,n=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*i,h=l*i+o*t-n*r,u=l*r+n*i-a*t,d=-n*t-a*i-o*r;return this.x=c*l+d*-n+h*-o-u*-a,this.y=h*l+d*-a+u*-n-c*-o,this.z=u*l+d*-o+c*-a-h*-n,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*r,this.y=n[1]*t+n[5]*i+n[9]*r,this.z=n[2]*t+n[6]*i+n[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,n=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-n*o,this.y=n*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ws.copy(this).projectOnVector(e),this.sub(ws)}reflect(e){return this.sub(ws.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}A.prototype.isVector3=!0;const ws=new A,go=new gt;class Lt{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,n=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],u=e[l+1],d=e[l+2];h<t&&(t=h),u<i&&(i=u),d<r&&(r=d),h>n&&(n=h),u>a&&(a=u),d>o&&(o=d)}return this.min.set(t,i,r),this.max.set(n,a,o),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,n=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),u=e.getY(l),d=e.getZ(l);h<t&&(t=h),u<i&&(i=u),d<r&&(r=d),h>n&&(n=h),u>a&&(a=u),d>o&&(o=d)}return this.min.set(t,i,r),this.max.set(n,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Or.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),bs.copy(t.boundingBox),bs.applyMatrix4(e.matrixWorld),this.union(bs));const i=e.children;for(let r=0,n=i.length;r<n;r++)this.expandByObject(i[r]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Or),Or.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ur),_n.subVectors(this.max,Ur),Wi.subVectors(e.a,Ur),ji.subVectors(e.b,Ur),Xi.subVectors(e.c,Ur),ii.subVectors(ji,Wi),ri.subVectors(Xi,ji),Ai.subVectors(Wi,Xi);let t=[0,-ii.z,ii.y,0,-ri.z,ri.y,0,-Ai.z,Ai.y,ii.z,0,-ii.x,ri.z,0,-ri.x,Ai.z,0,-Ai.x,-ii.y,ii.x,0,-ri.y,ri.x,0,-Ai.y,Ai.x,0];return!Ss(t,Wi,ji,Xi,_n)||(t=[1,0,0,0,1,0,0,0,1],!Ss(t,Wi,ji,Xi,_n))?!1:(Mn.crossVectors(ii,ri),t=[Mn.x,Mn.y,Mn.z],Ss(t,Wi,ji,Xi,_n))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Or.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Or).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}Lt.prototype.isBox3=!0;const kt=[new A,new A,new A,new A,new A,new A,new A,new A],Or=new A,bs=new Lt,Wi=new A,ji=new A,Xi=new A,ii=new A,ri=new A,Ai=new A,Ur=new A,_n=new A,Mn=new A,Li=new A;function Ss(s,e,t,i,r){for(let n=0,a=s.length-3;n<=a;n+=3){Li.fromArray(s,n);const o=r.x*Math.abs(Li.x)+r.y*Math.abs(Li.y)+r.z*Math.abs(Li.z),l=e.dot(Li),c=t.dot(Li),h=i.dot(Li);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const id=new Lt,vo=new A,Ts=new A,Es=new A;class Bi{constructor(e=new A,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):id.setFromPoints(e).getCenter(i);let r=0;for(let n=0,a=e.length;n<a;n++)r=Math.max(r,i.distanceToSquared(e[n]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Es.subVectors(e,this.center);const t=Es.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(Es.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return Ts.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(vo.copy(e.center).add(Ts)),this.expandByPoint(vo.copy(e.center).sub(Ts)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gt=new A,As=new A,wn=new A,ni=new A,Ls=new A,bn=new A,Rs=new A;class Sr{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gt.copy(this.direction).multiplyScalar(t).add(this.origin),Gt.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){As.copy(e).add(t).multiplyScalar(.5),wn.copy(t).sub(e).normalize(),ni.copy(this.origin).sub(As);const n=e.distanceTo(t)*.5,a=-this.direction.dot(wn),o=ni.dot(this.direction),l=-ni.dot(wn),c=ni.lengthSq(),h=Math.abs(1-a*a);let u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=n*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=n,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-n,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*n+o)),d=u>0?-n:Math.min(Math.max(-n,-l),n),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-n,-l),n),p=d*(d+2*l)+c):(u=Math.max(0,-(a*n+o)),d=u>0?n:Math.min(Math.max(-n,-l),n),p=-u*u+d*(d+2*l)+c);else d=a>0?-n:n,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(u).add(this.origin),r&&r.copy(wn).multiplyScalar(d).add(As),p}intersectSphere(e,t){Gt.subVectors(e.center,this.origin);const i=Gt.dot(this.direction),r=Gt.dot(Gt)-i*i,n=e.radius*e.radius;if(r>n)return null;const a=Math.sqrt(n-r),o=i-a,l=i+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,n,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(n=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(n=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||n>r||((n>i||i!==i)&&(i=n),(a<r||r!==r)&&(r=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Gt)!==null}intersectTriangle(e,t,i,r,n){Ls.subVectors(t,e),bn.subVectors(i,e),Rs.crossVectors(Ls,bn);let a=this.direction.dot(Rs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ni.subVectors(this.origin,e);const l=o*this.direction.dot(bn.crossVectors(ni,bn));if(l<0)return null;const c=o*this.direction.dot(Ls.cross(ni));if(c<0||l+c>a)return null;const h=-o*ni.dot(Rs);return h<0?null:this.at(h/a,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class me{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,n,a,o,l,c,h,u,d,p,g,v,x){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=n,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=p,m[7]=g,m[11]=v,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/qi.setFromMatrixColumn(e,0).length(),n=1/qi.setFromMatrixColumn(e,1).length(),a=1/qi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*n,t[5]=i[5]*n,t[6]=i[6]*n,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,i=e.x,r=e.y,n=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(n),u=Math.sin(n);if(e.order==="XYZ"){const d=a*h,p=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,g=c*h,v=c*u;t[0]=d+v*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,g=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,p=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-v*u}else if(e.order==="XZY"){const d=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rd,e,nd)}lookAt(e,t,i){const r=this.elements;return Mt.subVectors(e,t),Mt.lengthSq()===0&&(Mt.z=1),Mt.normalize(),si.crossVectors(i,Mt),si.lengthSq()===0&&(Math.abs(i.z)===1?Mt.x+=1e-4:Mt.z+=1e-4,Mt.normalize(),si.crossVectors(i,Mt)),si.normalize(),Sn.crossVectors(Mt,si),r[0]=si.x,r[4]=Sn.x,r[8]=Mt.x,r[1]=si.y,r[5]=Sn.y,r[9]=Mt.y,r[2]=si.z,r[6]=Sn.z,r[10]=Mt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,n=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],v=i[6],x=i[10],m=i[14],f=i[3],w=i[7],y=i[11],b=i[15],L=r[0],_=r[4],O=r[8],V=r[12],N=r[1],R=r[5],ee=r[9],F=r[13],E=r[2],D=r[6],I=r[10],C=r[14],H=r[3],K=r[7],ie=r[11],Z=r[15];return n[0]=a*L+o*N+l*E+c*H,n[4]=a*_+o*R+l*D+c*K,n[8]=a*O+o*ee+l*I+c*ie,n[12]=a*V+o*F+l*C+c*Z,n[1]=h*L+u*N+d*E+p*H,n[5]=h*_+u*R+d*D+p*K,n[9]=h*O+u*ee+d*I+p*ie,n[13]=h*V+u*F+d*C+p*Z,n[2]=g*L+v*N+x*E+m*H,n[6]=g*_+v*R+x*D+m*K,n[10]=g*O+v*ee+x*I+m*ie,n[14]=g*V+v*F+x*C+m*Z,n[3]=f*L+w*N+y*E+b*H,n[7]=f*_+w*R+y*D+b*K,n[11]=f*O+w*ee+y*I+b*ie,n[15]=f*V+w*F+y*C+b*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],n=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],v=e[7],x=e[11],m=e[15];return g*(+n*l*u-r*c*u-n*o*d+i*c*d+r*o*p-i*l*p)+v*(+t*l*p-t*c*d+n*a*d-r*a*p+r*c*h-n*l*h)+x*(+t*c*u-t*o*p-n*a*u+i*a*p+n*o*h-i*c*h)+m*(-r*o*h-t*l*u+t*o*d+r*a*u-i*a*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],v=e[13],x=e[14],m=e[15],f=u*x*c-v*d*c+v*l*p-o*x*p-u*l*m+o*d*m,w=g*d*c-h*x*c-g*l*p+a*x*p+h*l*m-a*d*m,y=h*v*c-g*u*c+g*o*p-a*v*p-h*o*m+a*u*m,b=g*u*l-h*v*l-g*o*d+a*v*d+h*o*x-a*u*x,L=t*f+i*w+r*y+n*b;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const _=1/L;return e[0]=f*_,e[1]=(v*d*n-u*x*n-v*r*p+i*x*p+u*r*m-i*d*m)*_,e[2]=(o*x*n-v*l*n+v*r*c-i*x*c-o*r*m+i*l*m)*_,e[3]=(u*l*n-o*d*n-u*r*c+i*d*c+o*r*p-i*l*p)*_,e[4]=w*_,e[5]=(h*x*n-g*d*n+g*r*p-t*x*p-h*r*m+t*d*m)*_,e[6]=(g*l*n-a*x*n-g*r*c+t*x*c+a*r*m-t*l*m)*_,e[7]=(a*d*n-h*l*n+h*r*c-t*d*c-a*r*p+t*l*p)*_,e[8]=y*_,e[9]=(g*u*n-h*v*n-g*i*p+t*v*p+h*i*m-t*u*m)*_,e[10]=(a*v*n-g*o*n+g*i*c-t*v*c-a*i*m+t*o*m)*_,e[11]=(h*o*n-a*u*n-h*i*c+t*u*c+a*i*p-t*o*p)*_,e[12]=b*_,e[13]=(h*v*r-g*u*r+g*i*d-t*v*d-h*i*x+t*u*x)*_,e[14]=(g*o*r-a*v*r-g*i*l+t*v*l+a*i*x-t*o*x)*_,e[15]=(a*u*r-h*o*r+h*i*l-t*u*l-a*i*d+t*o*d)*_,this}scale(e){const t=this.elements,i=e.x,r=e.y,n=e.z;return t[0]*=i,t[4]*=r,t[8]*=n,t[1]*=i,t[5]*=r,t[9]*=n,t[2]*=i,t[6]*=r,t[10]*=n,t[3]*=i,t[7]*=r,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),n=1-i,a=e.x,o=e.y,l=e.z,c=n*a,h=n*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,n*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,n,a){return this.set(1,i,n,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,n=t._x,a=t._y,o=t._z,l=t._w,c=n+n,h=a+a,u=o+o,d=n*c,p=n*h,g=n*u,v=a*h,x=a*u,m=o*u,f=l*c,w=l*h,y=l*u,b=i.x,L=i.y,_=i.z;return r[0]=(1-(v+m))*b,r[1]=(p+y)*b,r[2]=(g-w)*b,r[3]=0,r[4]=(p-y)*L,r[5]=(1-(d+m))*L,r[6]=(x+f)*L,r[7]=0,r[8]=(g+w)*_,r[9]=(x-f)*_,r[10]=(1-(d+v))*_,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let n=qi.set(r[0],r[1],r[2]).length();const a=qi.set(r[4],r[5],r[6]).length(),o=qi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(n=-n),e.x=r[12],e.y=r[13],e.z=r[14],Pt.copy(this);const l=1/n,c=1/a,h=1/o;return Pt.elements[0]*=l,Pt.elements[1]*=l,Pt.elements[2]*=l,Pt.elements[4]*=c,Pt.elements[5]*=c,Pt.elements[6]*=c,Pt.elements[8]*=h,Pt.elements[9]*=h,Pt.elements[10]*=h,t.setFromRotationMatrix(Pt),i.x=n,i.y=a,i.z=o,this}makePerspective(e,t,i,r,n,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*n/(t-e),c=2*n/(i-r),h=(t+e)/(t-e),u=(i+r)/(i-r),d=-(a+n)/(a-n),p=-2*a*n/(a-n);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,r,n,a){const o=this.elements,l=1/(t-e),c=1/(i-r),h=1/(a-n),u=(t+e)*l,d=(i+r)*c,p=(a+n)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}me.prototype.isMatrix4=!0;const qi=new A,Pt=new me,rd=new A(0,0,0),nd=new A(1,1,1),si=new A,Sn=new A,Mt=new A,xo=new me,yo=new gt;class Tr{constructor(e=0,t=0,i=0,r=Tr.DefaultOrder){this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,n=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,n)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,n),this._z=0);break;case"ZXY":this._x=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,n)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return xo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xo,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yo.setFromEuler(this),this.setFromQuaternion(yo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new A(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Tr.prototype.isEuler=!0;Tr.DefaultOrder="XYZ";Tr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class sd{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}}let ad=0;const _o=new A,Yi=new gt,Vt=new me,Tn=new A,Fr=new A,od=new A,ld=new gt,Mo=new A(1,0,0),wo=new A(0,1,0),bo=new A(0,0,1),cd={type:"added"},So={type:"removed"};class Oe extends zi{constructor(){super(),Object.defineProperty(this,"id",{value:ad++}),this.uuid=Et(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Oe.DefaultUp.clone();const e=new A,t=new Tr,i=new gt,r=new A(1,1,1);function n(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(n),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new me},normalMatrix:{value:new ot}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=Oe.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new sd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.premultiply(Yi),this}rotateX(e){return this.rotateOnAxis(Mo,e)}rotateY(e){return this.rotateOnAxis(wo,e)}rotateZ(e){return this.rotateOnAxis(bo,e)}translateOnAxis(e,t){return _o.copy(e).applyQuaternion(this.quaternion),this.position.add(_o.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mo,e)}translateY(e){return this.translateOnAxis(wo,e)}translateZ(e){return this.translateOnAxis(bo,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Vt.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Tn.copy(e):Tn.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vt.lookAt(Fr,Tn,this.up):Vt.lookAt(Tn,Fr,this.up),this.quaternion.setFromRotationMatrix(Vt),r&&(Vt.extractRotation(r.matrixWorld),Yi.setFromRotationMatrix(Vt),this.quaternion.premultiply(Yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(cd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(So)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(So)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Vt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const n=this.children[i].getObjectByProperty(e,t);if(n!==void 0)return n}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,e,od),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,ld,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let n=0,a=r.length;n<a;n++)r[n].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=n(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];n(e.shapes,u)}else n(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(n(e.materials,this.material[l]));r.material=o}else r.material=n(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(n(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Oe.DefaultUp=new A(0,1,0);Oe.DefaultMatrixAutoUpdate=!0;Oe.prototype.isObject3D=!0;const It=new A,Wt=new A,Cs=new A,jt=new A,Ji=new A,Zi=new A,To=new A,Ps=new A,Is=new A,Ds=new A;class Qe{constructor(e=new A,t=new A,i=new A){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),It.subVectors(e,t),r.cross(It);const n=r.lengthSq();return n>0?r.multiplyScalar(1/Math.sqrt(n)):r.set(0,0,0)}static getBarycoord(e,t,i,r,n){It.subVectors(r,t),Wt.subVectors(i,t),Cs.subVectors(e,t);const a=It.dot(It),o=It.dot(Wt),l=It.dot(Cs),c=Wt.dot(Wt),h=Wt.dot(Cs),u=a*c-o*o;if(u===0)return n.set(-2,-1,-1);const d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return n.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,jt),jt.x>=0&&jt.y>=0&&jt.x+jt.y<=1}static getUV(e,t,i,r,n,a,o,l){return this.getBarycoord(e,t,i,r,jt),l.set(0,0),l.addScaledVector(n,jt.x),l.addScaledVector(a,jt.y),l.addScaledVector(o,jt.z),l}static isFrontFacing(e,t,i,r){return It.subVectors(i,t),Wt.subVectors(e,t),It.cross(Wt).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return It.subVectors(this.c,this.b),Wt.subVectors(this.a,this.b),It.cross(Wt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qe.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qe.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,n){return Qe.getUV(e,this.a,this.b,this.c,t,i,r,n)}containsPoint(e){return Qe.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qe.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,n=this.c;let a,o;Ji.subVectors(r,i),Zi.subVectors(n,i),Ps.subVectors(e,i);const l=Ji.dot(Ps),c=Zi.dot(Ps);if(l<=0&&c<=0)return t.copy(i);Is.subVectors(e,r);const h=Ji.dot(Is),u=Zi.dot(Is);if(h>=0&&u<=h)return t.copy(r);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Ji,a);Ds.subVectors(e,n);const p=Ji.dot(Ds),g=Zi.dot(Ds);if(g>=0&&p<=g)return t.copy(n);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Zi,o);const x=h*g-p*u;if(x<=0&&u-h>=0&&p-g>=0)return To.subVectors(n,r),o=(u-h)/(u-h+(p-g)),t.copy(r).addScaledVector(To,o);const m=1/(x+v+d);return a=v*m,o=d*m,t.copy(i).addScaledVector(Ji,a).addScaledVector(Zi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let hd=0;class $e extends zi{constructor(){super(),Object.defineProperty(this,"id",{value:hd++}),this.uuid=Et(),this.name="",this.type="Material",this.fog=!0,this.blending=Jr,this.side=mr,this.vertexColors=!1,this.opacity=1,this.format=st,this.transparent=!1,this.blendSrc=Fl,this.blendDst=zl,this.blendEquation=lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=oa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===Ul;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Jr&&(i.blending=this.blending),this.side!==mr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.format!==st&&(i.format=this.format),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(n){const a=[];for(const o in n){const l=n[o];delete l.metadata,a.push(l)}return a}if(t){const n=r(e.textures),a=r(e.images);n.length>0&&(i.textures=n),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.format=e.format,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let n=0;n!==r;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}$e.prototype.isMaterial=!0;const Zl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dt={h:0,s:0,l:0},En={h:0,s:0,l:0};function Ns(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function Os(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Us(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}class ne{constructor(e,t,i){return t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,i){return this.r=e,this.g=t,this.b=i,this}setHSL(e,t,i){if(e=Aa(e,1),t=yt(t,0,1),i=yt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,n=2*i-r;this.r=Ns(n,r,e+1/3),this.g=Ns(n,r,e),this.b=Ns(n,r,e-1/3)}return this}setStyle(e){function t(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const n=i[1],a=i[2];switch(n){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,t(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,t(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const o=parseFloat(r[1])/360,l=parseInt(r[2],10)/100,c=parseInt(r[3],10)/100;return t(r[4]),this.setHSL(o,l,c)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],n=r.length;if(n===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,this;if(n===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=Zl[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){const i=t>0?1/t:1;return this.r=Math.pow(e.r,i),this.g=Math.pow(e.g,i),this.b=Math.pow(e.b,i),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}copyLinearToSRGB(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){const t=this.r,i=this.g,r=this.b,n=Math.max(t,i,r),a=Math.min(t,i,r);let o,l;const c=(a+n)/2;if(a===n)o=0,l=0;else{const h=n-a;switch(l=c<=.5?h/(n+a):h/(2-n-a),n){case t:o=(i-r)/h+(i<r?6:0);break;case i:o=(r-t)/h+2;break;case r:o=(t-i)/h+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,i){return this.getHSL(Dt),Dt.h+=e,Dt.s+=t,Dt.l+=i,this.setHSL(Dt.h,Dt.s,Dt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Dt),e.getHSL(En);const i=Qr(Dt.h,En.h,t),r=Qr(Dt.s,En.s,t),n=Qr(Dt.l,En.l,t);return this.setHSL(i,r,n),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}ne.NAMES=Zl;ne.prototype.isColor=!0;ne.prototype.r=1;ne.prototype.g=1;ne.prototype.b=1;class rt extends $e{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=as,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}rt.prototype.isMeshBasicMaterial=!0;const Be=new A,An=new J;class qe{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=sn,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,n=this.itemSize;r<n;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let r=0,n=e.length;r<n;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),a=new ne),t[i++]=a.r,t[i++]=a.g,t[i++]=a.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let r=0,n=e.length;r<n;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),a=new J),t[i++]=a.x,t[i++]=a.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let r=0,n=e.length;r<n;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),a=new A),t[i++]=a.x,t[i++]=a.y,t[i++]=a.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let r=0,n=e.length;r<n;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),a=new ze),t[i++]=a.x,t[i++]=a.y,t[i++]=a.z,t[i++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.applyMatrix3(e),this.setXY(t,An.x,An.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Be.fromBufferAttribute(this,t),Be.applyMatrix3(e),this.setXYZ(t,Be.x,Be.y,Be.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Be.x=this.getX(t),Be.y=this.getY(t),Be.z=this.getZ(t),Be.applyMatrix4(e),this.setXYZ(t,Be.x,Be.y,Be.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Be.x=this.getX(t),Be.y=this.getY(t),Be.z=this.getZ(t),Be.applyNormalMatrix(e),this.setXYZ(t,Be.x,Be.y,Be.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Be.x=this.getX(t),Be.y=this.getY(t),Be.z=this.getZ(t),Be.transformDirection(e),this.setXYZ(t,Be.x,Be.y,Be.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sn&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}qe.prototype.isBufferAttribute=!0;class Kl extends qe{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ql extends qe{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ud extends qe{constructor(e,t,i){super(new Uint16Array(e),t,i)}}ud.prototype.isFloat16BufferAttribute=!0;class We extends qe{constructor(e,t,i){super(new Float32Array(e),t,i)}}let dd=0;const St=new me,Fs=new Oe,Ki=new A,wt=new Lt,zr=new Lt,it=new A;class Ue extends zi{constructor(){super(),Object.defineProperty(this,"id",{value:dd++}),this.uuid=Et(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yl(e)>65535?Ql:Kl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const n=new ot().getNormalMatrix(e);i.applyNormalMatrix(n),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return St.makeRotationFromQuaternion(e),this.applyMatrix4(St),this}rotateX(e){return St.makeRotationX(e),this.applyMatrix4(St),this}rotateY(e){return St.makeRotationY(e),this.applyMatrix4(St),this}rotateZ(e){return St.makeRotationZ(e),this.applyMatrix4(St),this}translate(e,t,i){return St.makeTranslation(e,t,i),this.applyMatrix4(St),this}scale(e,t,i){return St.makeScale(e,t,i),this.applyMatrix4(St),this}lookAt(e){return Fs.lookAt(e),Fs.updateMatrix(),this.applyMatrix4(Fs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const n=e[i];t.push(n.x,n.y,n.z||0)}return this.setAttribute("position",new We(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const n=t[i];wt.setFromBufferAttribute(n),this.morphTargetsRelative?(it.addVectors(this.boundingBox.min,wt.min),this.boundingBox.expandByPoint(it),it.addVectors(this.boundingBox.max,wt.max),this.boundingBox.expandByPoint(it)):(this.boundingBox.expandByPoint(wt.min),this.boundingBox.expandByPoint(wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new A,1/0);return}if(e){const i=this.boundingSphere.center;if(wt.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const o=t[n];zr.setFromBufferAttribute(o),this.morphTargetsRelative?(it.addVectors(wt.min,zr.min),wt.expandByPoint(it),it.addVectors(wt.max,zr.max),wt.expandByPoint(it)):(wt.expandByPoint(zr.min),wt.expandByPoint(zr.max))}wt.getCenter(i);let r=0;for(let n=0,a=e.count;n<a;n++)it.fromBufferAttribute(e,n),r=Math.max(r,i.distanceToSquared(it));if(t)for(let n=0,a=t.length;n<a;n++){const o=t[n],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)it.fromBufferAttribute(o,c),l&&(Ki.fromBufferAttribute(e,c),it.add(Ki)),r=Math.max(r,i.distanceToSquared(it))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,n=t.normal.array,a=t.uv.array,o=r.length/3;t.tangent===void 0&&this.setAttribute("tangent",new qe(new Float32Array(4*o),4));const l=t.tangent.array,c=[],h=[];for(let N=0;N<o;N++)c[N]=new A,h[N]=new A;const u=new A,d=new A,p=new A,g=new J,v=new J,x=new J,m=new A,f=new A;function w(N,R,ee){u.fromArray(r,N*3),d.fromArray(r,R*3),p.fromArray(r,ee*3),g.fromArray(a,N*2),v.fromArray(a,R*2),x.fromArray(a,ee*2),d.sub(u),p.sub(u),v.sub(g),x.sub(g);const F=1/(v.x*x.y-x.x*v.y);isFinite(F)&&(m.copy(d).multiplyScalar(x.y).addScaledVector(p,-v.y).multiplyScalar(F),f.copy(p).multiplyScalar(v.x).addScaledVector(d,-x.x).multiplyScalar(F),c[N].add(m),c[R].add(m),c[ee].add(m),h[N].add(f),h[R].add(f),h[ee].add(f))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let N=0,R=y.length;N<R;++N){const ee=y[N],F=ee.start,E=ee.count;for(let D=F,I=F+E;D<I;D+=3)w(i[D+0],i[D+1],i[D+2])}const b=new A,L=new A,_=new A,O=new A;function V(N){_.fromArray(n,N*3),O.copy(_);const R=c[N];b.copy(R),b.sub(_.multiplyScalar(_.dot(R))).normalize(),L.crossVectors(O,R);const ee=L.dot(h[N])<0?-1:1;l[N*4]=b.x,l[N*4+1]=b.y,l[N*4+2]=b.z,l[N*4+3]=ee}for(let N=0,R=y.length;N<R;++N){const ee=y[N],F=ee.start,E=ee.count;for(let D=F,I=F+E;D<I;D+=3)V(i[D+0]),V(i[D+1]),V(i[D+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qe(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new A,n=new A,a=new A,o=new A,l=new A,c=new A,h=new A,u=new A;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),x=e.getX(d+2);r.fromBufferAttribute(t,g),n.fromBufferAttribute(t,v),a.fromBufferAttribute(t,x),h.subVectors(a,n),u.subVectors(r,n),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,x),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),n.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,n),u.subVectors(r,n),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const n=i[r].array,a=e.attributes[r],o=a.array,l=a.itemSize*t,c=Math.min(o.length,n.length-l);for(let h=0,u=l;h<c;h++,u++)n[u]=o[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)it.fromBufferAttribute(e,t),it.normalize(),e.setXYZ(t,it.x,it.y,it.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,x=l.length;v<x;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let m=0;m<h;m++)d[g++]=c[p++]}return new qe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ue,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const n=this.morphAttributes;for(const o in n){const l=[],c=n[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let n=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,n=!0)}n&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const n=e.morphAttributes;for(const c in n){const h=[],u=n[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}Ue.prototype.isBufferGeometry=!0;const Eo=new me,Qi=new Sr,zs=new Bi,ai=new A,oi=new A,li=new A,Bs=new A,Hs=new A,ks=new A,Ln=new A,Rn=new A,Cn=new A,Pn=new J,In=new J,Dn=new J,Gs=new A,Nn=new A;class ke extends Oe{constructor(e=new Ue,t=new rt){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=r.length;n<a;n++){const o=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const i=this.geometry,r=this.material,n=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),zs.copy(i.boundingSphere),zs.applyMatrix4(n),e.ray.intersectsSphere(zs)===!1)||(Eo.copy(n).invert(),Qi.copy(e.ray).applyMatrix4(Eo),i.boundingBox!==null&&Qi.intersectsBox(i.boundingBox)===!1))return;let a;if(i.isBufferGeometry){const o=i.index,l=i.attributes.position,c=i.morphAttributes.position,h=i.morphTargetsRelative,u=i.attributes.uv,d=i.attributes.uv2,p=i.groups,g=i.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,x=p.length;v<x;v++){const m=p[v],f=r[m.materialIndex],w=Math.max(m.start,g.start),y=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let b=w,L=y;b<L;b+=3){const _=o.getX(b),O=o.getX(b+1),V=o.getX(b+2);a=On(this,f,e,Qi,l,c,h,u,d,_,O,V),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const v=Math.max(0,g.start),x=Math.min(o.count,g.start+g.count);for(let m=v,f=x;m<f;m+=3){const w=o.getX(m),y=o.getX(m+1),b=o.getX(m+2);a=On(this,r,e,Qi,l,c,h,u,d,w,y,b),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,x=p.length;v<x;v++){const m=p[v],f=r[m.materialIndex],w=Math.max(m.start,g.start),y=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let b=w,L=y;b<L;b+=3){const _=b,O=b+1,V=b+2;a=On(this,f,e,Qi,l,c,h,u,d,_,O,V),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const v=Math.max(0,g.start),x=Math.min(l.count,g.start+g.count);for(let m=v,f=x;m<f;m+=3){const w=m,y=m+1,b=m+2;a=On(this,r,e,Qi,l,c,h,u,d,w,y,b),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}else i.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}ke.prototype.isMesh=!0;function pd(s,e,t,i,r,n,a,o){let l;if(e.side===Ke?l=i.intersectTriangle(a,n,r,!0,o):l=i.intersectTriangle(r,n,a,e.side!==Ni,o),l===null)return null;Nn.copy(o),Nn.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Nn);return c<t.near||c>t.far?null:{distance:c,point:Nn.clone(),object:s}}function On(s,e,t,i,r,n,a,o,l,c,h,u){ai.fromBufferAttribute(r,c),oi.fromBufferAttribute(r,h),li.fromBufferAttribute(r,u);const d=s.morphTargetInfluences;if(n&&d){Ln.set(0,0,0),Rn.set(0,0,0),Cn.set(0,0,0);for(let g=0,v=n.length;g<v;g++){const x=d[g],m=n[g];x!==0&&(Bs.fromBufferAttribute(m,c),Hs.fromBufferAttribute(m,h),ks.fromBufferAttribute(m,u),a?(Ln.addScaledVector(Bs,x),Rn.addScaledVector(Hs,x),Cn.addScaledVector(ks,x)):(Ln.addScaledVector(Bs.sub(ai),x),Rn.addScaledVector(Hs.sub(oi),x),Cn.addScaledVector(ks.sub(li),x)))}ai.add(Ln),oi.add(Rn),li.add(Cn)}s.isSkinnedMesh&&(s.boneTransform(c,ai),s.boneTransform(h,oi),s.boneTransform(u,li));const p=pd(s,e,t,i,ai,oi,li,Gs);if(p){o&&(Pn.fromBufferAttribute(o,c),In.fromBufferAttribute(o,h),Dn.fromBufferAttribute(o,u),p.uv=Qe.getUV(Gs,ai,oi,li,Pn,In,Dn,new J)),l&&(Pn.fromBufferAttribute(l,c),In.fromBufferAttribute(l,h),Dn.fromBufferAttribute(l,u),p.uv2=Qe.getUV(Gs,ai,oi,li,Pn,In,Dn,new J));const g={a:c,b:h,c:u,normal:new A,materialIndex:0};Qe.getNormal(ai,oi,li,g.normal),p.face=g}return p}class Er extends Ue{constructor(e=1,t=1,i=1,r=1,n=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:n,depthSegments:a};const o=this;r=Math.floor(r),n=Math.floor(n),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,a,n,0),g("z","y","x",1,-1,i,t,-e,a,n,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,n,4),g("x","y","z",-1,-1,e,t,-i,r,n,5),this.setIndex(l),this.setAttribute("position",new We(c,3)),this.setAttribute("normal",new We(h,3)),this.setAttribute("uv",new We(u,2));function g(v,x,m,f,w,y,b,L,_,O,V){const N=y/_,R=b/O,ee=y/2,F=b/2,E=L/2,D=_+1,I=O+1;let C=0,H=0;const K=new A;for(let ie=0;ie<I;ie++){const Z=ie*R-F;for(let oe=0;oe<D;oe++){const j=oe*N-ee;K[v]=j*f,K[x]=Z*w,K[m]=E,c.push(K.x,K.y,K.z),K[v]=0,K[x]=0,K[m]=L>0?1:-1,h.push(K.x,K.y,K.z),u.push(oe/_),u.push(1-ie/O),C+=1}}for(let ie=0;ie<O;ie++)for(let Z=0;Z<_;Z++){const oe=d+Z+D*ie,j=d+Z+D*(ie+1),Q=d+(Z+1)+D*(ie+1),he=d+(Z+1)+D*ie;l.push(oe,j,he),l.push(j,Q,he),H+=6}o.addGroup(p,H,V),p+=H,d+=C}}static fromJSON(e){return new Er(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xr(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const r=s[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function ht(s){const e={};for(let t=0;t<s.length;t++){const i=xr(s[t]);for(const r in i)e[r]=i[r]}return e}const is={clone:xr,merge:ht};var fd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,md=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dt extends $e{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=fd,this.fragmentShader=md,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xr(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const n=this.uniforms[r].value;n&&n.isTexture?t.uniforms[r]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[r]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[r]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[r]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[r]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[r]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[r]={type:"m4",value:n.toArray()}:t.uniforms[r]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}dt.prototype.isShaderMaterial=!0;class La extends Oe{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}La.prototype.isCamera=!0;class ut extends La{constructor(e=50,t=1,i=.1,r=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=an*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Kr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return an*2*Math.atan(Math.tan(Kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,n,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Kr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,n=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;n+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(n+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}ut.prototype.isPerspectiveCamera=!0;const $i=90,er=1;class Ra extends Oe{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new ut($i,er,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new A(1,0,0)),this.add(r);const n=new ut($i,er,e,t);n.layers=this.layers,n.up.set(0,-1,0),n.lookAt(new A(-1,0,0)),this.add(n);const a=new ut($i,er,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new A(0,1,0)),this.add(a);const o=new ut($i,er,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new A(0,-1,0)),this.add(o);const l=new ut($i,er,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new A(0,0,1)),this.add(l);const c=new ut($i,er,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new A(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,n,a,o,l,c]=this.children,h=e.xr.enabled,u=e.getRenderTarget();e.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,n),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=h}}class cs extends et{constructor(e,t,i,r,n,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:pn,super(e,t,i,r,n,a,o,l,c,h),this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}cs.prototype.isCubeTexture=!0;class $l extends pt{constructor(e,t,i){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=i),super(e,e,t),t=t||{},this.texture=new cs(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:nt,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=st,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Er(5,5,5),n=new dt({name:"CubemapFromEquirect",uniforms:xr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ke,blending:pi});n.uniforms.tEquirect.value=t;const a=new ke(r,n),o=t.minFilter;return t.minFilter===wr&&(t.minFilter=nt),new Ra(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const n=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(n)}}$l.prototype.isWebGLCubeRenderTarget=!0;const Vs=new A,gd=new A,vd=new ot;class Yt{constructor(e=new A(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Vs.subVectors(i,t).cross(gd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Vs),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/r;return n<0||n>1?null:t.copy(i).multiplyScalar(n).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||vd.getNormalMatrix(e),r=this.coplanarPoint(Vs).applyMatrix4(e),n=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}Yt.prototype.isPlane=!0;const tr=new Bi,Un=new A;class hs{constructor(e=new Yt,t=new Yt,i=new Yt,r=new Yt,n=new Yt,a=new Yt){this.planes=[e,t,i,r,n,a]}set(e,t,i,r,n,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(n),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],n=i[1],a=i[2],o=i[3],l=i[4],c=i[5],h=i[6],u=i[7],d=i[8],p=i[9],g=i[10],v=i[11],x=i[12],m=i[13],f=i[14],w=i[15];return t[0].setComponents(o-r,u-l,v-d,w-x).normalize(),t[1].setComponents(o+r,u+l,v+d,w+x).normalize(),t[2].setComponents(o+n,u+c,v+p,w+m).normalize(),t[3].setComponents(o-n,u-c,v-p,w-m).normalize(),t[4].setComponents(o-a,u-h,v-g,w-f).normalize(),t[5].setComponents(o+a,u+h,v+g,w+f).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),tr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(tr)}intersectsSprite(e){return tr.center.set(0,0,0),tr.radius=.7071067811865476,tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Un.x=r.normal.x>0?e.max.x:e.min.x,Un.y=r.normal.y>0?e.max.y:e.min.y,Un.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Un)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ec(){let s=null,e=!1,t=null,i=null;function r(n,a){t(n,a),i=s.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(r),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){s=n}}}function xd(s,e){const t=e.isWebGL2,i=new WeakMap;function r(c,h){const u=c.array,d=c.usage,p=s.createBuffer();s.bindBuffer(h,p),s.bufferData(h,u,d),c.onUploadCallback();let g=5126;return u instanceof Float32Array?g=5126:u instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):u instanceof Uint16Array?c.isFloat16BufferAttribute?t?g=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):g=5123:u instanceof Int16Array?g=5122:u instanceof Uint32Array?g=5125:u instanceof Int32Array?g=5124:u instanceof Int8Array?g=5120:(u instanceof Uint8Array||u instanceof Uint8ClampedArray)&&(g=5121),{buffer:p,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function n(c,h,u){const d=h.array,p=h.updateRange;s.bindBuffer(u,c),p.count===-1?s.bufferSubData(u,0,d):(t?s.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):s.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(s.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u===void 0?i.set(c,r(c,h)):u.version<c.version&&(n(u.buffer,c,h),u.version=c.version)}return{get:a,remove:o,update:l}}class Zt extends Ue{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const n=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=t/l,p=[],g=[],v=[],x=[];for(let m=0;m<h;m++){const f=m*d-a;for(let w=0;w<c;w++){const y=w*u-n;g.push(y,-f,0),v.push(0,0,1),x.push(w/o),x.push(1-m/l)}}for(let m=0;m<l;m++)for(let f=0;f<o;f++){const w=f+c*m,y=f+c*(m+1),b=f+1+c*(m+1),L=f+1+c*m;p.push(w,y,L),p.push(y,b,L)}this.setIndex(p),this.setAttribute("position",new We(g,3)),this.setAttribute("normal",new We(v,3)),this.setAttribute("uv",new We(x,2))}static fromJSON(e){return new Zt(e.width,e.height,e.widthSegments,e.heightSegments)}}var yd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,_d=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Md=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,wd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Sd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Td="vec3 transformed = vec3( position );",Ed=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ad=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Ld=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Fd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,zd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Bd=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Hd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Gd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wd="gl_FragColor = linearToOutputTexel( gl_FragColor );",jd=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,Xd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		envColor = envMapTexelToLinear( envColor );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Kd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$d=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ep=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,ip=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,rp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,np=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,sp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ap=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,op=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,cp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,up=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= specularColorMapTexelToLinear( texture2D( specularColorMap, vUv ) ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= sheenColorMapTexelToLinear( texture2D( sheenColorMap, vUv ) ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,dp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pp=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,gp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,yp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,_p=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,Mp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ep=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] > 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ap=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Lp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Rp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Cp=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Np=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Op=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Up=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Fp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,zp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Hp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xp=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,qp=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yp=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Jp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,Qp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$p=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ef=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sf=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,af=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( float roughness, float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( vec2 fragCoord, float roughness, float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 diffuseColor, vec3 specularColor, float specularF90,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,
		vec3 attenuationColor, float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,of=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,lf=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,cf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,hf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,uf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,df=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,pf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ff=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mf=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vf=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,xf=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,_f=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Mf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Sf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ef=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Af=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lf=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rf=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Pf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,If=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Df=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,Nf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Of=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ff=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - clearcoat * Fcc ) + clearcoatSpecular * clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gf=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Wf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ae={alphamap_fragment:yd,alphamap_pars_fragment:_d,alphatest_fragment:Md,alphatest_pars_fragment:wd,aomap_fragment:bd,aomap_pars_fragment:Sd,begin_vertex:Td,beginnormal_vertex:Ed,bsdfs:Ad,bumpmap_pars_fragment:Ld,clipping_planes_fragment:Rd,clipping_planes_pars_fragment:Cd,clipping_planes_pars_vertex:Pd,clipping_planes_vertex:Id,color_fragment:Dd,color_pars_fragment:Nd,color_pars_vertex:Od,color_vertex:Ud,common:Fd,cube_uv_reflection_fragment:zd,defaultnormal_vertex:Bd,displacementmap_pars_vertex:Hd,displacementmap_vertex:kd,emissivemap_fragment:Gd,emissivemap_pars_fragment:Vd,encodings_fragment:Wd,encodings_pars_fragment:jd,envmap_fragment:Xd,envmap_common_pars_fragment:qd,envmap_pars_fragment:Yd,envmap_pars_vertex:Jd,envmap_physical_pars_fragment:ap,envmap_vertex:Zd,fog_vertex:Kd,fog_pars_vertex:Qd,fog_fragment:$d,fog_pars_fragment:ep,gradientmap_pars_fragment:tp,lightmap_fragment:ip,lightmap_pars_fragment:rp,lights_lambert_vertex:np,lights_pars_begin:sp,lights_toon_fragment:op,lights_toon_pars_fragment:lp,lights_phong_fragment:cp,lights_phong_pars_fragment:hp,lights_physical_fragment:up,lights_physical_pars_fragment:dp,lights_fragment_begin:pp,lights_fragment_maps:fp,lights_fragment_end:mp,logdepthbuf_fragment:gp,logdepthbuf_pars_fragment:vp,logdepthbuf_pars_vertex:xp,logdepthbuf_vertex:yp,map_fragment:_p,map_pars_fragment:Mp,map_particle_fragment:wp,map_particle_pars_fragment:bp,metalnessmap_fragment:Sp,metalnessmap_pars_fragment:Tp,morphnormal_vertex:Ep,morphtarget_pars_vertex:Ap,morphtarget_vertex:Lp,normal_fragment_begin:Rp,normal_fragment_maps:Cp,normal_pars_fragment:Pp,normal_pars_vertex:Ip,normal_vertex:Dp,normalmap_pars_fragment:Np,clearcoat_normal_fragment_begin:Op,clearcoat_normal_fragment_maps:Up,clearcoat_pars_fragment:Fp,output_fragment:zp,packing:Bp,premultiplied_alpha_fragment:Hp,project_vertex:kp,dithering_fragment:Gp,dithering_pars_fragment:Vp,roughnessmap_fragment:Wp,roughnessmap_pars_fragment:jp,shadowmap_pars_fragment:Xp,shadowmap_pars_vertex:qp,shadowmap_vertex:Yp,shadowmask_pars_fragment:Jp,skinbase_vertex:Zp,skinning_pars_vertex:Kp,skinning_vertex:Qp,skinnormal_vertex:$p,specularmap_fragment:ef,specularmap_pars_fragment:tf,tonemapping_fragment:rf,tonemapping_pars_fragment:nf,transmission_fragment:sf,transmission_pars_fragment:af,uv_pars_fragment:of,uv_pars_vertex:lf,uv_vertex:cf,uv2_pars_fragment:hf,uv2_pars_vertex:uf,uv2_vertex:df,worldpos_vertex:pf,background_vert:ff,background_frag:mf,cube_vert:gf,cube_frag:vf,depth_vert:xf,depth_frag:yf,distanceRGBA_vert:_f,distanceRGBA_frag:Mf,equirect_vert:wf,equirect_frag:bf,linedashed_vert:Sf,linedashed_frag:Tf,meshbasic_vert:Ef,meshbasic_frag:Af,meshlambert_vert:Lf,meshlambert_frag:Rf,meshmatcap_vert:Cf,meshmatcap_frag:Pf,meshnormal_vert:If,meshnormal_frag:Df,meshphong_vert:Nf,meshphong_frag:Of,meshphysical_vert:Uf,meshphysical_frag:Ff,meshtoon_vert:zf,meshtoon_frag:Bf,points_vert:Hf,points_frag:kf,shadow_vert:Gf,shadow_frag:Vf,sprite_vert:Wf,sprite_frag:jf},se={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new ot},uv2Transform:{value:new ot},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ot}}},Ot={basic:{uniforms:ht([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ae.meshbasic_vert,fragmentShader:Ae.meshbasic_frag},lambert:{uniforms:ht([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.fog,se.lights,{emissive:{value:new ne(0)}}]),vertexShader:Ae.meshlambert_vert,fragmentShader:Ae.meshlambert_frag},phong:{uniforms:ht([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30}}]),vertexShader:Ae.meshphong_vert,fragmentShader:Ae.meshphong_frag},standard:{uniforms:ht([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag},toon:{uniforms:ht([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new ne(0)}}]),vertexShader:Ae.meshtoon_vert,fragmentShader:Ae.meshtoon_frag},matcap:{uniforms:ht([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ae.meshmatcap_vert,fragmentShader:Ae.meshmatcap_frag},points:{uniforms:ht([se.points,se.fog]),vertexShader:Ae.points_vert,fragmentShader:Ae.points_frag},dashed:{uniforms:ht([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ae.linedashed_vert,fragmentShader:Ae.linedashed_frag},depth:{uniforms:ht([se.common,se.displacementmap]),vertexShader:Ae.depth_vert,fragmentShader:Ae.depth_frag},normal:{uniforms:ht([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ae.meshnormal_vert,fragmentShader:Ae.meshnormal_frag},sprite:{uniforms:ht([se.sprite,se.fog]),vertexShader:Ae.sprite_vert,fragmentShader:Ae.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null}},vertexShader:Ae.background_vert,fragmentShader:Ae.background_frag},cube:{uniforms:ht([se.envmap,{opacity:{value:1}}]),vertexShader:Ae.cube_vert,fragmentShader:Ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ae.equirect_vert,fragmentShader:Ae.equirect_frag},distanceRGBA:{uniforms:ht([se.common,se.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ae.distanceRGBA_vert,fragmentShader:Ae.distanceRGBA_frag},shadow:{uniforms:ht([se.lights,se.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:Ae.shadow_vert,fragmentShader:Ae.shadow_frag}};Ot.physical={uniforms:ht([Ot.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new J(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenRoughness:{value:0},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularIntensity:{value:0},specularIntensityMap:{value:null},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag};function Xf(s,e,t,i,r){const n=new ne(0);let a=0,o,l,c=null,h=0,u=null;function d(g,v){let x=!1,m=v.isScene===!0?v.background:null;m&&m.isTexture&&(m=e.get(m));const f=s.xr,w=f.getSession&&f.getSession();w&&w.environmentBlendMode==="additive"&&(m=null),m===null?p(n,a):m&&m.isColor&&(p(m,1),x=!0),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),m&&(m.isCubeTexture||m.mapping===os)?(l===void 0&&(l=new ke(new Er(1,1,1),new dt({name:"BackgroundCubeMaterial",uniforms:xr(Ot.cube.uniforms),vertexShader:Ot.cube.vertexShader,fragmentShader:Ot.cube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,b,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=m,l.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,(c!==m||h!==m.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,c=m,h=m.version,u=s.toneMapping),g.unshift(l,l.geometry,l.material,0,0,null)):m&&m.isTexture&&(o===void 0&&(o=new ke(new Zt(2,2),new dt({name:"BackgroundMaterial",uniforms:xr(Ot.background.uniforms),vertexShader:Ot.background.vertexShader,fragmentShader:Ot.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=m,m.matrixAutoUpdate===!0&&m.updateMatrix(),o.material.uniforms.uvTransform.value.copy(m.matrix),(c!==m||h!==m.version||u!==s.toneMapping)&&(o.material.needsUpdate=!0,c=m,h=m.version,u=s.toneMapping),g.unshift(o,o.geometry,o.material,0,0,null))}function p(g,v){t.buffers.color.setClear(g.r,g.g,g.b,v,r)}return{getClearColor:function(){return n},setClearColor:function(g,v=1){n.set(g),a=v,p(n,a)},getClearAlpha:function(){return a},setClearAlpha:function(g){a=g,p(n,a)},render:d}}function qf(s,e,t,i){const r=s.getParameter(34921),n=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||n!==null,o={},l=v(null);let c=l;function h(F,E,D,I,C){let H=!1;if(a){const K=g(I,D,E);c!==K&&(c=K,d(c.object)),H=x(I,C),H&&m(I,C)}else{const K=E.wireframe===!0;(c.geometry!==I.id||c.program!==D.id||c.wireframe!==K)&&(c.geometry=I.id,c.program=D.id,c.wireframe=K,H=!0)}F.isInstancedMesh===!0&&(H=!0),C!==null&&t.update(C,34963),H&&(_(F,E,D,I),C!==null&&s.bindBuffer(34963,t.get(C).buffer))}function u(){return i.isWebGL2?s.createVertexArray():n.createVertexArrayOES()}function d(F){return i.isWebGL2?s.bindVertexArray(F):n.bindVertexArrayOES(F)}function p(F){return i.isWebGL2?s.deleteVertexArray(F):n.deleteVertexArrayOES(F)}function g(F,E,D){const I=D.wireframe===!0;let C=o[F.id];C===void 0&&(C={},o[F.id]=C);let H=C[E.id];H===void 0&&(H={},C[E.id]=H);let K=H[I];return K===void 0&&(K=v(u()),H[I]=K),K}function v(F){const E=[],D=[],I=[];for(let C=0;C<r;C++)E[C]=0,D[C]=0,I[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:D,attributeDivisors:I,object:F,attributes:{},index:null}}function x(F,E){const D=c.attributes,I=F.attributes;let C=0;for(const H in I){const K=D[H],ie=I[H];if(K===void 0||K.attribute!==ie||K.data!==ie.data)return!0;C++}return c.attributesNum!==C||c.index!==E}function m(F,E){const D={},I=F.attributes;let C=0;for(const H in I){const K=I[H],ie={};ie.attribute=K,K.data&&(ie.data=K.data),D[H]=ie,C++}c.attributes=D,c.attributesNum=C,c.index=E}function f(){const F=c.newAttributes;for(let E=0,D=F.length;E<D;E++)F[E]=0}function w(F){y(F,0)}function y(F,E){const D=c.newAttributes,I=c.enabledAttributes,C=c.attributeDivisors;D[F]=1,I[F]===0&&(s.enableVertexAttribArray(F),I[F]=1),C[F]!==E&&((i.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,E),C[F]=E)}function b(){const F=c.newAttributes,E=c.enabledAttributes;for(let D=0,I=E.length;D<I;D++)E[D]!==F[D]&&(s.disableVertexAttribArray(D),E[D]=0)}function L(F,E,D,I,C,H){i.isWebGL2===!0&&(D===5124||D===5125)?s.vertexAttribIPointer(F,E,D,C,H):s.vertexAttribPointer(F,E,D,I,C,H)}function _(F,E,D,I){if(i.isWebGL2===!1&&(F.isInstancedMesh||I.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;f();const C=I.attributes,H=D.getAttributes(),K=E.defaultAttributeValues;for(const ie in H){const Z=H[ie];if(Z.location>=0){let oe=C[ie];if(oe===void 0&&(ie==="instanceMatrix"&&F.instanceMatrix&&(oe=F.instanceMatrix),ie==="instanceColor"&&F.instanceColor&&(oe=F.instanceColor)),oe!==void 0){const j=oe.normalized,Q=oe.itemSize,he=t.get(oe);if(he===void 0)continue;const B=he.buffer,Me=he.type,Se=he.bytesPerElement;if(oe.isInterleavedBufferAttribute){const ae=oe.data,fe=ae.stride,Y=oe.offset;if(ae&&ae.isInstancedInterleavedBuffer){for(let W=0;W<Z.locationSize;W++)y(Z.location+W,ae.meshPerAttribute);F.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let W=0;W<Z.locationSize;W++)w(Z.location+W);s.bindBuffer(34962,B);for(let W=0;W<Z.locationSize;W++)L(Z.location+W,Q/Z.locationSize,Me,j,fe*Se,(Y+Q/Z.locationSize*W)*Se)}else{if(oe.isInstancedBufferAttribute){for(let ae=0;ae<Z.locationSize;ae++)y(Z.location+ae,oe.meshPerAttribute);F.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ae=0;ae<Z.locationSize;ae++)w(Z.location+ae);s.bindBuffer(34962,B);for(let ae=0;ae<Z.locationSize;ae++)L(Z.location+ae,Q/Z.locationSize,Me,j,Q*Se,Q/Z.locationSize*ae*Se)}}else if(K!==void 0){const j=K[ie];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(Z.location,j);break;case 3:s.vertexAttrib3fv(Z.location,j);break;case 4:s.vertexAttrib4fv(Z.location,j);break;default:s.vertexAttrib1fv(Z.location,j)}}}}b()}function O(){R();for(const F in o){const E=o[F];for(const D in E){const I=E[D];for(const C in I)p(I[C].object),delete I[C];delete E[D]}delete o[F]}}function V(F){if(o[F.id]===void 0)return;const E=o[F.id];for(const D in E){const I=E[D];for(const C in I)p(I[C].object),delete I[C];delete E[D]}delete o[F.id]}function N(F){for(const E in o){const D=o[E];if(D[F.id]===void 0)continue;const I=D[F.id];for(const C in I)p(I[C].object),delete I[C];delete D[F.id]}}function R(){ee(),c!==l&&(c=l,d(c.object))}function ee(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:R,resetDefaultState:ee,dispose:O,releaseStatesOfGeometry:V,releaseStatesOfProgram:N,initAttributes:f,enableAttribute:w,disableUnusedAttributes:b}}function Yf(s,e,t,i){const r=i.isWebGL2;let n;function a(c){n=c}function o(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function l(c,h,u){if(u===0)return;let d,p;if(r)d=s,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](n,c,h,u),t.update(h,n,u)}this.setMode=a,this.render=o,this.renderInstances=l}function Jf(s,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function n(_){if(_==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=n(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(34930),d=s.getParameter(35660),p=s.getParameter(3379),g=s.getParameter(34076),v=s.getParameter(34921),x=s.getParameter(36347),m=s.getParameter(36348),f=s.getParameter(36349),w=d>0,y=a||e.has("OES_texture_float"),b=w&&y,L=a?s.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:n,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:x,maxVaryings:m,maxFragmentUniforms:f,vertexTextures:w,floatFragmentTextures:y,floatVertexTextures:b,maxSamples:L}}function Zf(s){const e=this;let t=null,i=0,r=!1,n=!1;const a=new Yt,o=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,p){const g=u.length!==0||d||i!==0||r;return r=d,t=h(u,p,0),i=u.length,g},this.beginShadows=function(){n=!0,h(null)},this.endShadows=function(){n=!1,c()},this.setState=function(u,d,p){const g=u.clippingPlanes,v=u.clipIntersection,x=u.clipShadows,m=s.get(u);if(!r||g===null||g.length===0||n&&!x)n?h(null):c();else{const f=n?0:i,w=f*4;let y=m.clippingState||null;l.value=y,y=h(g,d,w,p);for(let b=0;b!==w;++b)y[b]=t[b];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=f}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,g){const v=u!==null?u.length:0;let x=null;if(v!==0){if(x=l.value,g!==!0||x===null){const m=p+v*4,f=d.matrixWorldInverse;o.getNormalMatrix(f),(x===null||x.length<m)&&(x=new Float32Array(m));for(let w=0,y=p;w!==v;++w,y+=4)a.copy(u[w]).applyMatrix4(f,o),a.normal.toArray(x,y),x[y+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,x}}function Kf(s){let e=new WeakMap;function t(a,o){return o===la?a.mapping=pn:o===ca&&(a.mapping=fn),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===la||o===ca)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=s.getRenderTarget(),h=new $l(l.height/2);return h.fromEquirectangularTexture(s,a),e.set(a,h),s.setRenderTarget(c),a.addEventListener("dispose",r),t(h.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function n(){e=new WeakMap}return{get:i,dispose:n}}class Mi extends La{constructor(e=-1,t=1,i=1,r=-1,n=.1,a=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=n,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,n,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let n=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=c*this.view.offsetX,a=n+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(n,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}Mi.prototype.isOrthographicCamera=!0;class us extends dt{constructor(e){super(e),this.type="RawShaderMaterial"}}us.prototype.isRawShaderMaterial=!0;const fr=4,fi=8,Nt=Math.pow(2,fi),tc=[.125,.215,.35,.446,.526,.582],ic=fi-fr+1+tc.length,ir=20,yi={[ft]:0,[vt]:1,[Ea]:2,[Vl]:3,[Wl]:4,[jl]:5,[Ta]:6},Ws=new Mi,{_lodPlanes:Br,_sizeLods:Ao,_sigmas:Fn}=em(),Lo=new ne;let js=null;const Pi=(1+Math.sqrt(5))/2,rr=1/Pi,Ro=[new A(1,1,1),new A(-1,1,1),new A(1,1,-1),new A(-1,1,-1),new A(0,Pi,rr),new A(0,Pi,-rr),new A(rr,0,Pi),new A(-rr,0,Pi),new A(Pi,rr,0),new A(-Pi,rr,0)];class Qf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=tm(ir),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){js=this._renderer.getRenderTarget();const n=this._allocateTargets();return this._sceneToCubeUV(e,i,r,n),t>0&&this._blur(n,0,0,t),this._applyPMREM(n),this._cleanup(n),n}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=Io(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=Po(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<Br.length;e++)Br[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(js),e.scissorTest=!1,zn(e,0,0,e.width,e.height)}_fromTexture(e){js=this._renderer.getRenderTarget();const t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){const t={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:xi,format:Xh,encoding:$f(e)?e.encoding:Ea,depthBuffer:!1},i=Co(t);return i.depthBuffer=!e,this._pingPongRenderTarget=Co(t),i}_compileMaterial(e){const t=new ke(Br[0],e);this._renderer.compile(t,Ws)}_sceneToCubeUV(e,t,i,r){const n=new ut(90,1,t,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.outputEncoding,u=l.toneMapping;l.getClearColor(Lo),l.toneMapping=Di,l.outputEncoding=ft,l.autoClear=!1;const d=new rt({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1}),p=new ke(new Er,d);let g=!1;const v=e.background;v?v.isColor&&(d.color.copy(v),e.background=null,g=!0):(d.color.copy(Lo),g=!0);for(let x=0;x<6;x++){const m=x%3;m==0?(n.up.set(0,a[x],0),n.lookAt(o[x],0,0)):m==1?(n.up.set(0,0,a[x]),n.lookAt(0,o[x],0)):(n.up.set(0,a[x],0),n.lookAt(0,0,o[x])),zn(r,m*Nt,x>2?Nt:0,Nt,Nt),l.setRenderTarget(r),g&&l.render(p,n),l.render(e,n)}p.geometry.dispose(),p.material.dispose(),l.toneMapping=u,l.outputEncoding=h,l.autoClear=c,e.background=v}_setEncoding(e,t){this._renderer.capabilities.isWebGL2===!0&&t.format===st&&t.type===xi&&t.encoding===vt?e.value=yi[ft]:e.value=yi[t.encoding]}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===pn||e.mapping===fn;r?this._cubemapShader==null&&(this._cubemapShader=Io()):this._equirectShader==null&&(this._equirectShader=Po());const n=r?this._cubemapShader:this._equirectShader,a=new ke(Br[0],n),o=n.uniforms;o.envMap.value=e,r||o.texelSize.value.set(1/e.image.width,1/e.image.height),this._setEncoding(o.inputEncoding,e),this._setEncoding(o.outputEncoding,t.texture),zn(t,0,0,3*Nt,2*Nt),i.setRenderTarget(t),i.render(a,Ws)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<ic;r++){const n=Math.sqrt(Fn[r]*Fn[r]-Fn[r-1]*Fn[r-1]),a=Ro[(r-1)%Ro.length];this._blur(e,r-1,r,n,a)}t.autoClear=i}_blur(e,t,i,r,n){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",n),this._halfBlur(a,e,i,i,r,"longitudinal",n)}_halfBlur(e,t,i,r,n,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ke(Br[r],c),d=c.uniforms,p=Ao[i]-1,g=isFinite(n)?Math.PI/(2*p):2*Math.PI/(2*ir-1),v=n/g,x=isFinite(n)?1+Math.floor(h*v):ir;x>ir&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ir}`);const m=[];let f=0;for(let L=0;L<ir;++L){const _=L/v,O=Math.exp(-_*_/2);m.push(O),L==0?f+=O:L<x&&(f+=2*O)}for(let L=0;L<m.length;L++)m[L]=m[L]/f;d.envMap.value=e.texture,d.samples.value=x,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o),d.dTheta.value=g,d.mipInt.value=fi-i,this._setEncoding(d.inputEncoding,e.texture),this._setEncoding(d.outputEncoding,e.texture);const w=Ao[r],y=3*Math.max(0,Nt-2*w),b=(r===0?0:2*Nt)+2*w*(r>fi-fr?r-fi+fr:0);zn(t,y,b,3*w,2*w),l.setRenderTarget(t),l.render(u,Ws)}}function $f(s){return s===void 0||s.type!==xi?!1:s.encoding===ft||s.encoding===vt||s.encoding===Ta}function em(){const s=[],e=[],t=[];let i=fi;for(let r=0;r<ic;r++){const n=Math.pow(2,i);e.push(n);let a=1/n;r>fi-fr?a=tc[r-fi+fr-1]:r==0&&(a=0),t.push(a);const o=1/(n-1),l=-o/2,c=1+o/2,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,p=3,g=2,v=1,x=new Float32Array(p*d*u),m=new Float32Array(g*d*u),f=new Float32Array(v*d*u);for(let y=0;y<u;y++){const b=y%3*2/3-1,L=y>2?0:-1,_=[b,L,0,b+2/3,L,0,b+2/3,L+1,0,b,L,0,b+2/3,L+1,0,b,L+1,0];x.set(_,p*d*y),m.set(h,g*d*y);const O=[y,y,y,y,y,y];f.set(O,v*d*y)}const w=new Ue;w.setAttribute("position",new qe(x,p)),w.setAttribute("uv",new qe(m,g)),w.setAttribute("faceIndex",new qe(f,v)),s.push(w),i>fr&&i--}return{_lodPlanes:s,_sizeLods:e,_sigmas:t}}function Co(s){const e=new pt(3*Nt,3*Nt,s);return e.texture.mapping=os,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function zn(s,e,t,i,r){s.viewport.set(e,t,i,r),s.scissor.set(e,t,i,r)}function tm(s){const e=new Float32Array(s),t=new A(0,1,0);return new us({name:"SphericalGaussianBlur",defines:{n:s},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t},inputEncoding:{value:yi[ft]},outputEncoding:{value:yi[ft]}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			${Pa()}

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Po(){const s=new J(1,1);return new us({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:s},inputEncoding:{value:yi[ft]},outputEncoding:{value:yi[ft]}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${Pa()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Io(){return new us({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:yi[ft]},outputEncoding:{value:yi[ft]}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${Pa()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Ca(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Pa(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}function im(s){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const l=o.mapping,c=l===la||l===ca,h=l===pn||l===fn;if(c||h){if(e.has(o))return e.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&r(u)){const d=s.getRenderTarget();t===null&&(t=new Qf(s));const p=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,p),s.setRenderTarget(d),o.addEventListener("dispose",n),p.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function n(o){const l=o.target;l.removeEventListener("dispose",n);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function rm(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=s.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function nm(s,e,t,i){const r={},n=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete r[d.id];const p=n.get(d);p&&(e.remove(p),n.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],34962);const p=u.morphAttributes;for(const g in p){const v=p[g];for(let x=0,m=v.length;x<m;x++)e.update(v[x],34962)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let v=0;if(p!==null){const f=p.array;v=p.version;for(let w=0,y=f.length;w<y;w+=3){const b=f[w+0],L=f[w+1],_=f[w+2];d.push(b,L,L,_,_,b)}}else{const f=g.array;v=g.version;for(let w=0,y=f.length/3-1;w<y;w+=3){const b=w+0,L=w+1,_=w+2;d.push(b,L,L,_,_,b)}}const x=new(Yl(d)>65535?Ql:Kl)(d,1);x.version=v;const m=n.get(u);m&&e.remove(m),n.set(u,x)}function h(u){const d=n.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return n.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function sm(s,e,t,i){const r=i.isWebGL2;let n;function a(d){n=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function h(d,p){s.drawElements(n,p,o,d*l),t.update(p,n,1)}function u(d,p,g){if(g===0)return;let v,x;if(r)v=s,x="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[x](n,p,o,d*l,g),t.update(p,n,g)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u}function am(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(n,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(n/3);break;case 1:t.lines+=o*(n/2);break;case 3:t.lines+=o*(n-1);break;case 2:t.lines+=o*n;break;case 0:t.points+=o*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}class Ia extends et{constructor(e=null,t=1,i=1,r=1){super(null),this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=_t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Ia.prototype.isDataTexture2DArray=!0;function om(s,e){return s[0]-e[0]}function lm(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Do(s,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),s.divideScalar(t)}function cm(s,e,t){const i={},r=new Float32Array(8),n=new WeakMap,a=new A,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u,d){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position.length;let v=n.get(h);if(v===void 0||v.count!==g){v!==void 0&&v.texture.dispose();const f=h.morphAttributes.normal!==void 0,w=h.morphAttributes.position,y=h.morphAttributes.normal||[],b=h.attributes.position.count,L=f===!0?2:1;let _=b*L,O=1;_>e.maxTextureSize&&(O=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const V=new Float32Array(_*O*4*g),N=new Ia(V,_,O,g);N.format=st,N.type=Jt;const R=L*4;for(let ee=0;ee<g;ee++){const F=w[ee],E=y[ee],D=_*O*4*ee;for(let I=0;I<F.count;I++){a.fromBufferAttribute(F,I),F.normalized===!0&&Do(a,F);const C=I*R;V[D+C+0]=a.x,V[D+C+1]=a.y,V[D+C+2]=a.z,V[D+C+3]=0,f===!0&&(a.fromBufferAttribute(E,I),E.normalized===!0&&Do(a,E),V[D+C+4]=a.x,V[D+C+5]=a.y,V[D+C+6]=a.z,V[D+C+7]=0)}}v={count:g,texture:N,size:new J(_,O)},n.set(h,v)}let x=0;for(let f=0;f<p.length;f++)x+=p[f];const m=h.morphTargetsRelative?1:1-x;d.getUniforms().setValue(s,"morphTargetBaseInfluence",m),d.getUniforms().setValue(s,"morphTargetInfluences",p),d.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}else{const g=p===void 0?0:p.length;let v=i[h.id];if(v===void 0||v.length!==g){v=[];for(let y=0;y<g;y++)v[y]=[y,0];i[h.id]=v}for(let y=0;y<g;y++){const b=v[y];b[0]=y,b[1]=p[y]}v.sort(lm);for(let y=0;y<8;y++)y<g&&v[y][1]?(o[y][0]=v[y][0],o[y][1]=v[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(om);const x=h.morphAttributes.position,m=h.morphAttributes.normal;let f=0;for(let y=0;y<8;y++){const b=o[y],L=b[0],_=b[1];L!==Number.MAX_SAFE_INTEGER&&_?(x&&h.getAttribute("morphTarget"+y)!==x[L]&&h.setAttribute("morphTarget"+y,x[L]),m&&h.getAttribute("morphNormal"+y)!==m[L]&&h.setAttribute("morphNormal"+y,m[L]),r[y]=_,f+=_):(x&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),m&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),r[y]=0)}const w=h.morphTargetsRelative?1:1-f;d.getUniforms().setValue(s,"morphTargetBaseInfluence",w),d.getUniforms().setValue(s,"morphTargetInfluences",r)}}return{update:l}}function hm(s,e,t,i){let r=new WeakMap;function n(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);return r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),u}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:n,dispose:a}}class rc extends et{constructor(e=null,t=1,i=1,r=1){super(null),this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=_t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}rc.prototype.isDataTexture3D=!0;const nc=new et,um=new Ia,dm=new rc,sc=new cs,No=[],Oo=[],Uo=new Float32Array(16),Fo=new Float32Array(9),zo=new Float32Array(4);function Ar(s,e,t){const i=s[0];if(i<=0||i>0)return s;const r=e*t;let n=No[r];if(n===void 0&&(n=new Float32Array(r),No[r]=n),e!==0){i.toArray(n,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(n,o)}return n}function xt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function mt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function ac(s,e){let t=Oo[e];t===void 0&&(t=new Int32Array(e),Oo[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function pm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function fm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;s.uniform2fv(this.addr,e),mt(t,e)}}function mm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;s.uniform3fv(this.addr,e),mt(t,e)}}function gm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;s.uniform4fv(this.addr,e),mt(t,e)}}function vm(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(xt(t,i))return;zo.set(i),s.uniformMatrix2fv(this.addr,!1,zo),mt(t,i)}}function xm(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(xt(t,i))return;Fo.set(i),s.uniformMatrix3fv(this.addr,!1,Fo),mt(t,i)}}function ym(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(xt(t,i))return;Uo.set(i),s.uniformMatrix4fv(this.addr,!1,Uo),mt(t,i)}}function _m(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Mm(s,e){const t=this.cache;xt(t,e)||(s.uniform2iv(this.addr,e),mt(t,e))}function wm(s,e){const t=this.cache;xt(t,e)||(s.uniform3iv(this.addr,e),mt(t,e))}function bm(s,e){const t=this.cache;xt(t,e)||(s.uniform4iv(this.addr,e),mt(t,e))}function Sm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Tm(s,e){const t=this.cache;xt(t,e)||(s.uniform2uiv(this.addr,e),mt(t,e))}function Em(s,e){const t=this.cache;xt(t,e)||(s.uniform3uiv(this.addr,e),mt(t,e))}function Am(s,e){const t=this.cache;xt(t,e)||(s.uniform4uiv(this.addr,e),mt(t,e))}function Lm(s,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),t.safeSetTexture2D(e||nc,r)}function Rm(s,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||dm,r)}function Cm(s,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),t.safeSetTextureCube(e||sc,r)}function Pm(s,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||um,r)}function Im(s){switch(s){case 5126:return pm;case 35664:return fm;case 35665:return mm;case 35666:return gm;case 35674:return vm;case 35675:return xm;case 35676:return ym;case 5124:case 35670:return _m;case 35667:case 35671:return Mm;case 35668:case 35672:return wm;case 35669:case 35673:return bm;case 5125:return Sm;case 36294:return Tm;case 36295:return Em;case 36296:return Am;case 35678:case 36198:case 36298:case 36306:case 35682:return Lm;case 35679:case 36299:case 36307:return Rm;case 35680:case 36300:case 36308:case 36293:return Cm;case 36289:case 36303:case 36311:case 36292:return Pm}}function Dm(s,e){s.uniform1fv(this.addr,e)}function Nm(s,e){const t=Ar(e,this.size,2);s.uniform2fv(this.addr,t)}function Om(s,e){const t=Ar(e,this.size,3);s.uniform3fv(this.addr,t)}function Um(s,e){const t=Ar(e,this.size,4);s.uniform4fv(this.addr,t)}function Fm(s,e){const t=Ar(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function zm(s,e){const t=Ar(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Bm(s,e){const t=Ar(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Hm(s,e){s.uniform1iv(this.addr,e)}function km(s,e){s.uniform2iv(this.addr,e)}function Gm(s,e){s.uniform3iv(this.addr,e)}function Vm(s,e){s.uniform4iv(this.addr,e)}function Wm(s,e){s.uniform1uiv(this.addr,e)}function jm(s,e){s.uniform2uiv(this.addr,e)}function Xm(s,e){s.uniform3uiv(this.addr,e)}function qm(s,e){s.uniform4uiv(this.addr,e)}function Ym(s,e,t){const i=e.length,r=ac(t,i);s.uniform1iv(this.addr,r);for(let n=0;n!==i;++n)t.safeSetTexture2D(e[n]||nc,r[n])}function Jm(s,e,t){const i=e.length,r=ac(t,i);s.uniform1iv(this.addr,r);for(let n=0;n!==i;++n)t.safeSetTextureCube(e[n]||sc,r[n])}function Zm(s){switch(s){case 5126:return Dm;case 35664:return Nm;case 35665:return Om;case 35666:return Um;case 35674:return Fm;case 35675:return zm;case 35676:return Bm;case 5124:case 35670:return Hm;case 35667:case 35671:return km;case 35668:case 35672:return Gm;case 35669:case 35673:return Vm;case 5125:return Wm;case 36294:return jm;case 36295:return Xm;case 36296:return qm;case 35678:case 36198:case 36298:case 36306:case 35682:return Ym;case 35680:case 36300:case 36308:case 36293:return Jm}}function Km(s,e,t){this.id=s,this.addr=t,this.cache=[],this.setValue=Im(e.type)}function oc(s,e,t){this.id=s,this.addr=t,this.cache=[],this.size=e.size,this.setValue=Zm(e.type)}oc.prototype.updateCache=function(s){const e=this.cache;s instanceof Float32Array&&e.length!==s.length&&(this.cache=new Float32Array(s.length)),mt(e,s)};function lc(s){this.id=s,this.seq=[],this.map={}}lc.prototype.setValue=function(s,e,t){const i=this.seq;for(let r=0,n=i.length;r!==n;++r){const a=i[r];a.setValue(s,e[a.id],t)}};const Xs=/(\w+)(\])?(\[|\.)?/g;function Bo(s,e){s.seq.push(e),s.map[e.id]=e}function Qm(s,e,t){const i=s.name,r=i.length;for(Xs.lastIndex=0;;){const n=Xs.exec(i),a=Xs.lastIndex;let o=n[1];const l=n[2]==="]",c=n[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Bo(t,c===void 0?new Km(o,s,e):new oc(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new lc(o),Bo(t,h)),t=h}}}function mi(s,e){this.seq=[],this.map={};const t=s.getProgramParameter(e,35718);for(let i=0;i<t;++i){const r=s.getActiveUniform(e,i),n=s.getUniformLocation(e,r.name);Qm(r,n,this)}}mi.prototype.setValue=function(s,e,t,i){const r=this.map[e];r!==void 0&&r.setValue(s,t,i)};mi.prototype.setOptional=function(s,e,t){const i=e[t];i!==void 0&&this.setValue(s,t,i)};mi.upload=function(s,e,t,i){for(let r=0,n=e.length;r!==n;++r){const a=e[r],o=t[a.id];o.needsUpdate!==!1&&a.setValue(s,o.value,i)}};mi.seqWithValue=function(s,e){const t=[];for(let i=0,r=s.length;i!==r;++i){const n=s[i];n.id in e&&t.push(n)}return t};function Ho(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}let $m=0;function eg(s){const e=s.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function cc(s){switch(s){case ft:return["Linear","( value )"];case vt:return["sRGB","( value )"];case Ea:return["RGBE","( value )"];case Vl:return["RGBM","( value, 7.0 )"];case Wl:return["RGBM","( value, 16.0 )"];case jl:return["RGBD","( value, 256.0 )"];case Ta:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case Nu:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function ko(s,e,t){const i=s.getShaderParameter(e,35713),r=s.getShaderInfoLog(e).trim();return i&&r===""?"":t.toUpperCase()+`

`+r+`

`+eg(s.getShaderSource(e))}function Ri(s,e){const t=cc(e);return"vec4 "+s+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function tg(s,e){const t=cc(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function ig(s,e){let t;switch(e){case Ih:t="Linear";break;case Dh:t="Reinhard";break;case Nh:t="OptimizedCineon";break;case Oh:t="ACESFilmic";break;case Uh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function rg(s){return[s.extensionDerivatives||s.envMapCubeUV||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Yr).join(`
`)}function ng(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function sg(s,e){const t={},i=s.getProgramParameter(e,35721);for(let r=0;r<i;r++){const n=s.getActiveAttrib(e,r),a=n.name;let o=1;n.type===35674&&(o=2),n.type===35675&&(o=3),n.type===35676&&(o=4),t[a]={type:n.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Yr(s){return s!==""}function Go(s,e){return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vo(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ag=/^[ \t]*#include +<([\w\d./]+)>/gm;function pa(s){return s.replace(ag,og)}function og(s,e){const t=Ae[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return pa(t)}const lg=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,cg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wo(s){return s.replace(cg,hc).replace(lg,hg)}function hg(s,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),hc(s,e,t,i)}function hc(s,e,t,i){let r="";for(let n=parseInt(e);n<parseInt(t);n++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return r}function jo(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ug(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ol?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===hh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===qr&&(e="SHADOWMAP_TYPE_VSM"),e}function dg(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case pn:case fn:e="ENVMAP_TYPE_CUBE";break;case os:case ba:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pg(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case fn:case ba:e="ENVMAP_MODE_REFRACTION";break}return e}function fg(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case as:e="ENVMAP_BLENDING_MULTIPLY";break;case Ch:e="ENVMAP_BLENDING_MIX";break;case Ph:e="ENVMAP_BLENDING_ADD";break}return e}function mg(s,e,t,i){const r=s.getContext(),n=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=ug(t),c=dg(t),h=pg(t),u=fg(t),d=s.gammaFactor>0?s.gammaFactor:1,p=t.isWebGL2?"":rg(t),g=ng(n),v=r.createProgram();let x,m,f=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=[g].filter(Yr).join(`
`),x.length>0&&(x+=`
`),m=[p,g].filter(Yr).join(`
`),m.length>0&&(m+=`
`)):(x=[jo(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),m=[p,jo(t),"#define SHADER_NAME "+t.shaderName,g,"#define GAMMA_FACTOR "+d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Di?"#define TONE_MAPPING":"",t.toneMapping!==Di?Ae.tonemapping_pars_fragment:"",t.toneMapping!==Di?ig("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.format===Kt?"#define OPAQUE":"",Ae.encodings_pars_fragment,t.map?Ri("mapTexelToLinear",t.mapEncoding):"",t.matcap?Ri("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?Ri("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?Ri("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.specularColorMap?Ri("specularColorMapTexelToLinear",t.specularColorMapEncoding):"",t.sheenColorMap?Ri("sheenColorMapTexelToLinear",t.sheenColorMapEncoding):"",t.lightMap?Ri("lightMapTexelToLinear",t.lightMapEncoding):"",tg("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yr).join(`
`)),a=pa(a),a=Go(a,t),a=Vo(a,t),o=pa(o),o=Go(o,t),o=Vo(o,t),a=Wo(a),o=Wo(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===fo?"":"out highp vec4 pc_fragColor;",t.glslVersion===fo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const w=f+x+a,y=f+m+o,b=Ho(r,35633,w),L=Ho(r,35632,y);if(r.attachShader(v,b),r.attachShader(v,L),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),s.debug.checkShaderErrors){const V=r.getProgramInfoLog(v).trim(),N=r.getShaderInfoLog(b).trim(),R=r.getShaderInfoLog(L).trim();let ee=!0,F=!0;if(r.getProgramParameter(v,35714)===!1){ee=!1;const E=ko(r,b,"vertex"),D=ko(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,35715)+`

Program Info Log: `+V+`
`+E+`
`+D)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(N===""||R==="")&&(F=!1);F&&(this.diagnostics={runnable:ee,programLog:V,vertexShader:{log:N,prefix:x},fragmentShader:{log:R,prefix:m}})}r.deleteShader(b),r.deleteShader(L);let _;this.getUniforms=function(){return _===void 0&&(_=new mi(r,v)),_};let O;return this.getAttributes=function(){return O===void 0&&(O=sg(r,v)),O},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=$m++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=L,this}function gg(s,e,t,i,r,n,a){const o=[],l=r.isWebGL2,c=r.logarithmicDepthBuffer,h=r.floatVertexTextures,u=r.maxVertexUniforms,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},v=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoat","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap",,"roughnessMap","metalnessMap","gradientMap","alphaMap","alphaTest","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","morphTargetsCount","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","format","specularIntensityMap","specularColorMap","specularColorMapEncoding","transmission","transmissionMap","thicknessMap","sheen","sheenColorMap","sheenColorMapEncoding","sheenRoughnessMap"];function x(_){const O=_.skeleton.bones;if(h)return 1024;{const V=Math.floor((u-20)/4),N=Math.min(V,O.length);return N<O.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+O.length+" bones. This GPU supports "+N+"."),0):N}}function m(_){let O;return _&&_.isTexture?O=_.encoding:_&&_.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),O=_.texture.encoding):O=ft,l&&_&&_.isTexture&&_.format===st&&_.type===xi&&_.encoding===vt&&(O=ft),O}function f(_,O,V,N,R){const ee=N.fog,F=_.isMeshStandardMaterial?N.environment:null,E=(_.isMeshStandardMaterial?t:e).get(_.envMap||F),D=g[_.type],I=R.isSkinnedMesh?x(R):0;_.precision!==null&&(p=r.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));let C,H;if(D){const oe=Ot[D];C=oe.vertexShader,H=oe.fragmentShader}else C=_.vertexShader,H=_.fragmentShader;const K=s.getRenderTarget(),ie=_.alphaTest>0,Z=_.clearcoat>0;return{isWebGL2:l,shaderID:D,shaderName:_.type,vertexShader:C,fragmentShader:H,defines:_.defines,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,instancing:R.isInstancedMesh===!0,instancingColor:R.isInstancedMesh===!0&&R.instanceColor!==null,supportsVertexTextures:d,outputEncoding:K!==null?m(K.texture):s.outputEncoding,map:!!_.map,mapEncoding:m(_.map),matcap:!!_.matcap,matcapEncoding:m(_.matcap),envMap:!!E,envMapMode:E&&E.mapping,envMapEncoding:m(E),envMapCubeUV:!!E&&(E.mapping===os||E.mapping===ba),lightMap:!!_.lightMap,lightMapEncoding:m(_.lightMap),aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,emissiveMapEncoding:m(_.emissiveMap),bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===Fu,tangentSpaceNormalMap:_.normalMapType===Fi,clearcoat:Z,clearcoatMap:Z&&!!_.clearcoatMap,clearcoatRoughnessMap:Z&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:Z&&!!_.clearcoatNormalMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,specularColorMapEncoding:m(_.specularColorMap),alphaMap:!!_.alphaMap,alphaTest:ie,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenColorMapEncoding:m(_.sheenColorMap),sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!R.geometry&&!!R.geometry.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!R.geometry&&!!R.geometry.attributes.color&&R.geometry.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||_.sheenRoughnessMap,uvsVertexOnly:!(_.map||_.bumpMap||_.normalMap||_.specularMap||_.alphaMap||_.emissiveMap||_.roughnessMap||_.metalnessMap||_.clearcoatNormalMap||_.transmission>0||_.transmissionMap||_.thicknessMap||_.specularIntensityMap||_.specularColorMap||!!_.sheen>0||_.sheenColorMap||_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!ee,useFog:_.fog,fogExp2:ee&&ee.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:c,skinning:R.isSkinnedMesh===!0&&I>0,maxBones:I,useVertexTexture:h,morphTargets:!!R.geometry&&!!R.geometry.morphAttributes.position,morphNormals:!!R.geometry&&!!R.geometry.morphAttributes.normal,morphTargetsCount:R.geometry&&R.geometry.morphAttributes.position?R.geometry.morphAttributes.position.length:0,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,format:_.format,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:_.toneMapped?s.toneMapping:Di,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ni,flipSided:_.side===Ke,depthPacking:_.depthPacking!==void 0?_.depthPacking:!1,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:l||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||i.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function w(_){const O=[];if(_.shaderID?O.push(_.shaderID):(O.push(mo(_.fragmentShader)),O.push(mo(_.vertexShader))),_.defines!==void 0)for(const V in _.defines)O.push(V),O.push(_.defines[V]);if(_.isRawShaderMaterial===!1){for(let V=0;V<v.length;V++)O.push(_[v[V]]);O.push(s.outputEncoding),O.push(s.gammaFactor)}return O.push(_.customProgramCacheKey),O.join()}function y(_){const O=g[_.type];let V;if(O){const N=Ot[O];V=is.clone(N.uniforms)}else V=_.uniforms;return V}function b(_,O){let V;for(let N=0,R=o.length;N<R;N++){const ee=o[N];if(ee.cacheKey===O){V=ee,++V.usedTimes;break}}return V===void 0&&(V=new mg(s,O,_,n),o.push(V)),V}function L(_){if(--_.usedTimes===0){const O=o.indexOf(_);o[O]=o[o.length-1],o.pop(),_.destroy()}}return{getParameters:f,getProgramCacheKey:w,getUniforms:y,acquireProgram:b,releaseProgram:L,programs:o}}function vg(){let s=new WeakMap;function e(n){let a=s.get(n);return a===void 0&&(a={},s.set(n,a)),a}function t(n){s.delete(n)}function i(n,a,o){s.get(n)[a]=o}function r(){s=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function xg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.program!==e.program?s.program.id-e.program.id:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Xo(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function qo(s){const e=[];let t=0;const i=[],r=[],n=[],a={id:-1};function o(){t=0,i.length=0,r.length=0,n.length=0}function l(p,g,v,x,m,f){let w=e[t];const y=s.get(v);return w===void 0?(w={id:p.id,object:p,geometry:g,material:v,program:y.program||a,groupOrder:x,renderOrder:p.renderOrder,z:m,group:f},e[t]=w):(w.id=p.id,w.object=p,w.geometry=g,w.material=v,w.program=y.program||a,w.groupOrder=x,w.renderOrder=p.renderOrder,w.z=m,w.group=f),t++,w}function c(p,g,v,x,m,f){const w=l(p,g,v,x,m,f);v.transmission>0?r.push(w):v.transparent===!0?n.push(w):i.push(w)}function h(p,g,v,x,m,f){const w=l(p,g,v,x,m,f);v.transmission>0?r.unshift(w):v.transparent===!0?n.unshift(w):i.unshift(w)}function u(p,g){i.length>1&&i.sort(p||xg),r.length>1&&r.sort(g||Xo),n.length>1&&n.sort(g||Xo)}function d(){for(let p=t,g=e.length;p<g;p++){const v=e[p];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.program=null,v.group=null}}return{opaque:i,transmissive:r,transparent:n,init:o,push:c,unshift:h,finish:d,sort:u}}function yg(s){let e=new WeakMap;function t(r,n){let a;return e.has(r)===!1?(a=new qo(s),e.set(r,[a])):n>=e.get(r).length?(a=new qo(s),e.get(r).push(a)):a=e.get(r)[n],a}function i(){e=new WeakMap}return{get:t,dispose:i}}function _g(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new ne};break;case"SpotLight":t={position:new A,direction:new A,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":t={color:new ne,position:new A,halfWidth:new A,halfHeight:new A};break}return s[e.id]=t,t}}}function Mg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let wg=0;function bg(s,e){return(e.castShadow?1:0)-(s.castShadow?1:0)}function Sg(s,e){const t=new _g,i=Mg(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)r.probe.push(new A);const n=new A,a=new me,o=new me;function l(h,u){let d=0,p=0,g=0;for(let V=0;V<9;V++)r.probe[V].set(0,0,0);let v=0,x=0,m=0,f=0,w=0,y=0,b=0,L=0;h.sort(bg);const _=u!==!0?Math.PI:1;for(let V=0,N=h.length;V<N;V++){const R=h[V],ee=R.color,F=R.intensity,E=R.distance,D=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=ee.r*F*_,p+=ee.g*F*_,g+=ee.b*F*_;else if(R.isLightProbe)for(let I=0;I<9;I++)r.probe[I].addScaledVector(R.sh.coefficients[I],F);else if(R.isDirectionalLight){const I=t.get(R);if(I.color.copy(R.color).multiplyScalar(R.intensity*_),R.castShadow){const C=R.shadow,H=i.get(R);H.shadowBias=C.bias,H.shadowNormalBias=C.normalBias,H.shadowRadius=C.radius,H.shadowMapSize=C.mapSize,r.directionalShadow[v]=H,r.directionalShadowMap[v]=D,r.directionalShadowMatrix[v]=R.shadow.matrix,y++}r.directional[v]=I,v++}else if(R.isSpotLight){const I=t.get(R);if(I.position.setFromMatrixPosition(R.matrixWorld),I.color.copy(ee).multiplyScalar(F*_),I.distance=E,I.coneCos=Math.cos(R.angle),I.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),I.decay=R.decay,R.castShadow){const C=R.shadow,H=i.get(R);H.shadowBias=C.bias,H.shadowNormalBias=C.normalBias,H.shadowRadius=C.radius,H.shadowMapSize=C.mapSize,r.spotShadow[m]=H,r.spotShadowMap[m]=D,r.spotShadowMatrix[m]=R.shadow.matrix,L++}r.spot[m]=I,m++}else if(R.isRectAreaLight){const I=t.get(R);I.color.copy(ee).multiplyScalar(F),I.halfWidth.set(R.width*.5,0,0),I.halfHeight.set(0,R.height*.5,0),r.rectArea[f]=I,f++}else if(R.isPointLight){const I=t.get(R);if(I.color.copy(R.color).multiplyScalar(R.intensity*_),I.distance=R.distance,I.decay=R.decay,R.castShadow){const C=R.shadow,H=i.get(R);H.shadowBias=C.bias,H.shadowNormalBias=C.normalBias,H.shadowRadius=C.radius,H.shadowMapSize=C.mapSize,H.shadowCameraNear=C.camera.near,H.shadowCameraFar=C.camera.far,r.pointShadow[x]=H,r.pointShadowMap[x]=D,r.pointShadowMatrix[x]=R.shadow.matrix,b++}r.point[x]=I,x++}else if(R.isHemisphereLight){const I=t.get(R);I.skyColor.copy(R.color).multiplyScalar(F*_),I.groundColor.copy(R.groundColor).multiplyScalar(F*_),r.hemi[w]=I,w++}}f>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=g;const O=r.hash;(O.directionalLength!==v||O.pointLength!==x||O.spotLength!==m||O.rectAreaLength!==f||O.hemiLength!==w||O.numDirectionalShadows!==y||O.numPointShadows!==b||O.numSpotShadows!==L)&&(r.directional.length=v,r.spot.length=m,r.rectArea.length=f,r.point.length=x,r.hemi.length=w,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=b,r.spotShadowMatrix.length=L,O.directionalLength=v,O.pointLength=x,O.spotLength=m,O.rectAreaLength=f,O.hemiLength=w,O.numDirectionalShadows=y,O.numPointShadows=b,O.numSpotShadows=L,r.version=wg++)}function c(h,u){let d=0,p=0,g=0,v=0,x=0;const m=u.matrixWorldInverse;for(let f=0,w=h.length;f<w;f++){const y=h[f];if(y.isDirectionalLight){const b=r.directional[d];b.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(m),d++}else if(y.isSpotLight){const b=r.spot[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(m),g++}else if(y.isRectAreaLight){const b=r.rectArea[v];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),o.identity(),a.copy(y.matrixWorld),a.premultiply(m),o.extractRotation(a),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){const b=r.point[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),p++}else if(y.isHemisphereLight){const b=r.hemi[x];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),b.direction.normalize(),x++}}}return{setup:l,setupView:c,state:r}}function Yo(s,e){const t=new Sg(s,e),i=[],r=[];function n(){i.length=0,r.length=0}function a(h){i.push(h)}function o(h){r.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:n,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Tg(s,e){let t=new WeakMap;function i(n,a=0){let o;return t.has(n)===!1?(o=new Yo(s,e),t.set(n,[o])):a>=t.get(n).length?(o=new Yo(s,e),t.get(n).push(o)):o=t.get(n)[a],o}function r(){t=new WeakMap}return{get:i,dispose:r}}class uc extends $e{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=Ou,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}uc.prototype.isMeshDepthMaterial=!0;class dc extends $e{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new A,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}dc.prototype.isMeshDistanceMaterial=!0;const Eg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ag=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pc(s,e,t){let i=new hs;const r=new J,n=new J,a=new ze,o=new uc({depthPacking:Uu}),l=new dc,c={},h=t.maxTextureSize,u={0:Ke,1:mr,2:Ni},d=new dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:Eg,fragmentShader:Ag}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ue;g.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ke(g,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ol,this.render=function(y,b,L){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||y.length===0)return;const _=s.getRenderTarget(),O=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),N=s.state;N.setBlending(pi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);for(let R=0,ee=y.length;R<ee;R++){const F=y[R],E=F.shadow;if(E===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(E.autoUpdate===!1&&E.needsUpdate===!1)continue;r.copy(E.mapSize);const D=E.getFrameExtents();if(r.multiply(D),n.copy(E.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(n.x=Math.floor(h/D.x),r.x=n.x*D.x,E.mapSize.x=n.x),r.y>h&&(n.y=Math.floor(h/D.y),r.y=n.y*D.y,E.mapSize.y=n.y)),E.map===null&&!E.isPointLightShadow&&this.type===qr){const C={minFilter:nt,magFilter:nt,format:st};E.map=new pt(r.x,r.y,C),E.map.texture.name=F.name+".shadowMap",E.mapPass=new pt(r.x,r.y,C),E.camera.updateProjectionMatrix()}if(E.map===null){const C={minFilter:Ze,magFilter:Ze,format:st};E.map=new pt(r.x,r.y,C),E.map.texture.name=F.name+".shadowMap",E.camera.updateProjectionMatrix()}s.setRenderTarget(E.map),s.clear();const I=E.getViewportCount();for(let C=0;C<I;C++){const H=E.getViewport(C);a.set(n.x*H.x,n.y*H.y,n.x*H.z,n.y*H.w),N.viewport(a),E.updateMatrices(F,C),i=E.getFrustum(),w(b,L,E.camera,F,this.type)}!E.isPointLightShadow&&this.type===qr&&m(E,L),E.needsUpdate=!1}x.needsUpdate=!1,s.setRenderTarget(_,O,V)};function m(y,b){const L=e.update(v);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,s.setRenderTarget(y.mapPass),s.clear(),s.renderBufferDirect(b,null,L,d,v,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,s.setRenderTarget(y.map),s.clear(),s.renderBufferDirect(b,null,L,p,v,null)}function f(y,b,L,_,O,V,N){let R=null;const ee=_.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(ee!==void 0?R=ee:R=_.isPointLight===!0?l:o,s.localClippingEnabled&&L.clipShadows===!0&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0){const F=R.uuid,E=L.uuid;let D=c[F];D===void 0&&(D={},c[F]=D);let I=D[E];I===void 0&&(I=R.clone(),D[E]=I),R=I}return R.visible=L.visible,R.wireframe=L.wireframe,N===qr?R.side=L.shadowSide!==null?L.shadowSide:L.side:R.side=L.shadowSide!==null?L.shadowSide:u[L.side],R.alphaMap=L.alphaMap,R.alphaTest=L.alphaTest,R.clipShadows=L.clipShadows,R.clippingPlanes=L.clippingPlanes,R.clipIntersection=L.clipIntersection,R.displacementMap=L.displacementMap,R.displacementScale=L.displacementScale,R.displacementBias=L.displacementBias,R.wireframeLinewidth=L.wireframeLinewidth,R.linewidth=L.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(_.matrixWorld),R.nearDistance=O,R.farDistance=V),R}function w(y,b,L,_,O){if(y.visible===!1)return;if(y.layers.test(b.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&O===qr)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,y.matrixWorld);const N=e.update(y),R=y.material;if(Array.isArray(R)){const ee=N.groups;for(let F=0,E=ee.length;F<E;F++){const D=ee[F],I=R[D.materialIndex];if(I&&I.visible){const C=f(y,N,I,_,L.near,L.far,O);s.renderBufferDirect(L,null,N,C,y,D)}}}else if(R.visible){const ee=f(y,N,R,_,L.near,L.far,O);s.renderBufferDirect(L,null,N,ee,y,null)}}const V=y.children;for(let N=0,R=V.length;N<R;N++)w(V[N],b,L,_,O)}}function Lg(s,e,t){const i=t.isWebGL2;function r(){let P=!1;const le=new ze;let q=null;const ge=new ze(0,0,0,0);return{setMask:function(pe){q!==pe&&!P&&(s.colorMask(pe,pe,pe,pe),q=pe)},setLocked:function(pe){P=pe},setClear:function(pe,Ie,lt,ct,ei){ei===!0&&(pe*=ct,Ie*=ct,lt*=ct),le.set(pe,Ie,lt,ct),ge.equals(le)===!1&&(s.clearColor(pe,Ie,lt,ct),ge.copy(le))},reset:function(){P=!1,q=null,ge.set(-1,0,0,0)}}}function n(){let P=!1,le=null,q=null,ge=null;return{setTest:function(pe){pe?Q(2929):he(2929)},setMask:function(pe){le!==pe&&!P&&(s.depthMask(pe),le=pe)},setFunc:function(pe){if(q!==pe){if(pe)switch(pe){case bh:s.depthFunc(512);break;case Sh:s.depthFunc(519);break;case Th:s.depthFunc(513);break;case oa:s.depthFunc(515);break;case Eh:s.depthFunc(514);break;case Ah:s.depthFunc(518);break;case Lh:s.depthFunc(516);break;case Rh:s.depthFunc(517);break;default:s.depthFunc(515)}else s.depthFunc(515);q=pe}},setLocked:function(pe){P=pe},setClear:function(pe){ge!==pe&&(s.clearDepth(pe),ge=pe)},reset:function(){P=!1,le=null,q=null,ge=null}}}function a(){let P=!1,le=null,q=null,ge=null,pe=null,Ie=null,lt=null,ct=null,ei=null;return{setTest:function(Ye){P||(Ye?Q(2960):he(2960))},setMask:function(Ye){le!==Ye&&!P&&(s.stencilMask(Ye),le=Ye)},setFunc:function(Ye,Ht,Rt){(q!==Ye||ge!==Ht||pe!==Rt)&&(s.stencilFunc(Ye,Ht,Rt),q=Ye,ge=Ht,pe=Rt)},setOp:function(Ye,Ht,Rt){(Ie!==Ye||lt!==Ht||ct!==Rt)&&(s.stencilOp(Ye,Ht,Rt),Ie=Ye,lt=Ht,ct=Rt)},setLocked:function(Ye){P=Ye},setClear:function(Ye){ei!==Ye&&(s.clearStencil(Ye),ei=Ye)},reset:function(){P=!1,le=null,q=null,ge=null,pe=null,Ie=null,lt=null,ct=null,ei=null}}}const o=new r,l=new n,c=new a;let h={},u=null,d={},p=null,g=!1,v=null,x=null,m=null,f=null,w=null,y=null,b=null,L=!1,_=null,O=null,V=null,N=null,R=null;const ee=s.getParameter(35661);let F=!1,E=0;const D=s.getParameter(7938);D.indexOf("WebGL")!==-1?(E=parseFloat(/^WebGL (\d)/.exec(D)[1]),F=E>=1):D.indexOf("OpenGL ES")!==-1&&(E=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),F=E>=2);let I=null,C={};const H=s.getParameter(3088),K=s.getParameter(2978),ie=new ze().fromArray(H),Z=new ze().fromArray(K);function oe(P,le,q){const ge=new Uint8Array(4),pe=s.createTexture();s.bindTexture(P,pe),s.texParameteri(P,10241,9728),s.texParameteri(P,10240,9728);for(let Ie=0;Ie<q;Ie++)s.texImage2D(le+Ie,0,6408,1,1,0,6408,5121,ge);return pe}const j={};j[3553]=oe(3553,3553,1),j[34067]=oe(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Q(2929),l.setFunc(oa),$(!1),de(Qa),Q(2884),Y(pi);function Q(P){h[P]!==!0&&(s.enable(P),h[P]=!0)}function he(P){h[P]!==!1&&(s.disable(P),h[P]=!1)}function B(P){P!==u&&(s.bindFramebuffer(36160,P),u=P)}function Me(P,le){return le===null&&u!==null&&(le=u),d[P]!==le?(s.bindFramebuffer(P,le),d[P]=le,i&&(P===36009&&(d[36160]=le),P===36160&&(d[36009]=le)),!0):!1}function Se(P){return p!==P?(s.useProgram(P),p=P,!0):!1}const ae={[lr]:32774,[dh]:32778,[ph]:32779};if(i)ae[to]=32775,ae[io]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(ae[to]=P.MIN_EXT,ae[io]=P.MAX_EXT)}const fe={[fh]:0,[mh]:1,[gh]:768,[Fl]:770,[wh]:776,[_h]:774,[xh]:772,[vh]:769,[zl]:771,[Mh]:775,[yh]:773};function Y(P,le,q,ge,pe,Ie,lt,ct){if(P===pi){g===!0&&(he(3042),g=!1);return}if(g===!1&&(Q(3042),g=!0),P!==uh){if(P!==v||ct!==L){if((x!==lr||w!==lr)&&(s.blendEquation(32774),x=lr,w=lr),ct)switch(P){case Jr:s.blendFuncSeparate(1,771,1,771);break;case aa:s.blendFunc(1,1);break;case $a:s.blendFuncSeparate(0,0,769,771);break;case eo:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Jr:s.blendFuncSeparate(770,771,1,771);break;case aa:s.blendFunc(770,1);break;case $a:s.blendFunc(0,769);break;case eo:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}m=null,f=null,y=null,b=null,v=P,L=ct}return}pe=pe||le,Ie=Ie||q,lt=lt||ge,(le!==x||pe!==w)&&(s.blendEquationSeparate(ae[le],ae[pe]),x=le,w=pe),(q!==m||ge!==f||Ie!==y||lt!==b)&&(s.blendFuncSeparate(fe[q],fe[ge],fe[Ie],fe[lt]),m=q,f=ge,y=Ie,b=lt),v=P,L=null}function W(P,le){P.side===Ni?he(2884):Q(2884);let q=P.side===Ke;le&&(q=!q),$(q),P.blending===Jr&&P.transparent===!1?Y(pi):Y(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const ge=P.stencilWrite;c.setTest(ge),ge&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Te(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Q(32926):he(32926)}function $(P){_!==P&&(P?s.frontFace(2304):s.frontFace(2305),_=P)}function de(P){P!==lh?(Q(2884),P!==O&&(P===Qa?s.cullFace(1029):P===ch?s.cullFace(1028):s.cullFace(1032))):he(2884),O=P}function ce(P){P!==V&&(F&&s.lineWidth(P),V=P)}function Te(P,le,q){P?(Q(32823),(N!==le||R!==q)&&(s.polygonOffset(le,q),N=le,R=q)):he(32823)}function T(P){P?Q(3089):he(3089)}function M(P){P===void 0&&(P=33984+ee-1),I!==P&&(s.activeTexture(P),I=P)}function G(P,le){I===null&&M();let q=C[I];q===void 0&&(q={type:void 0,texture:void 0},C[I]=q),(q.type!==P||q.texture!==le)&&(s.bindTexture(P,le||j[P]),q.type=P,q.texture=le)}function te(){const P=C[I];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function re(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(P){ie.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),ie.copy(P))}function be(P){Z.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),Z.copy(P))}function xe(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),i===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},I=null,C={},u=null,d={},p=null,g=!1,v=null,x=null,m=null,f=null,w=null,y=null,b=null,L=!1,_=null,O=null,V=null,N=null,R=null,ie.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Q,disable:he,bindFramebuffer:Me,bindXRFramebuffer:B,useProgram:Se,setBlending:Y,setMaterial:W,setFlipSided:$,setCullFace:de,setLineWidth:ce,setPolygonOffset:Te,setScissorTest:T,activeTexture:M,bindTexture:G,unbindTexture:te,compressedTexImage2D:re,texImage2D:ue,texImage3D:ye,scissor:we,viewport:be,reset:xe}}function Rg(s,e,t,i,r,n,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,h=r.maxTextureSize,u=r.maxSamples,d=new WeakMap;let p,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,M){return g?new OffscreenCanvas(T,M):ls("canvas")}function x(T,M,G,te){let re=1;if((T.width>te||T.height>te)&&(re=te/Math.max(T.width,T.height)),re<1||M===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const ue=M?ql:Math.floor,ye=ue(re*T.width),we=ue(re*T.height);p===void 0&&(p=v(ye,we));const be=G?v(ye,we):p;return be.width=ye,be.height=we,be.getContext("2d").drawImage(T,0,0,ye,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+ye+"x"+we+")."),be}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function m(T){return da(T.width)&&da(T.height)}function f(T){return o?!1:T.wrapS!==_t||T.wrapT!==_t||T.minFilter!==Ze&&T.minFilter!==nt}function w(T,M){return T.generateMipmaps&&M&&T.minFilter!==Ze&&T.minFilter!==nt}function y(T,M,G,te,re=1){s.generateMipmap(T);const ue=i.get(M);ue.__maxMipLevel=Math.log2(Math.max(G,te,re))}function b(T,M,G,te){if(o===!1)return M;if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let re=M;return M===6403&&(G===5126&&(re=33326),G===5131&&(re=33325),G===5121&&(re=33321)),M===6407&&(G===5126&&(re=34837),G===5131&&(re=34843),G===5121&&(re=32849)),M===6408&&(G===5126&&(re=34836),G===5131&&(re=34842),G===5121&&(re=te===vt?35907:32856)),(re===33325||re===33326||re===34842||re===34836)&&e.get("EXT_color_buffer_float"),re}function L(T){return T===Ze||T===ha||T===ua?9728:9729}function _(T){const M=T.target;M.removeEventListener("dispose",_),V(M),M.isVideoTexture&&d.delete(M),a.memory.textures--}function O(T){const M=T.target;M.removeEventListener("dispose",O),N(M)}function V(T){const M=i.get(T);M.__webglInit!==void 0&&(s.deleteTexture(M.__webglTexture),i.remove(T))}function N(T){const M=T.texture,G=i.get(T),te=i.get(M);if(T){if(te.__webglTexture!==void 0&&(s.deleteTexture(te.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)s.deleteFramebuffer(G.__webglFramebuffer[re]),G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer[re]);else s.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&s.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer&&s.deleteRenderbuffer(G.__webglColorRenderbuffer),G.__webglDepthRenderbuffer&&s.deleteRenderbuffer(G.__webglDepthRenderbuffer);if(T.isWebGLMultipleRenderTargets)for(let re=0,ue=M.length;re<ue;re++){const ye=i.get(M[re]);ye.__webglTexture&&(s.deleteTexture(ye.__webglTexture),a.memory.textures--),i.remove(M[re])}i.remove(M),i.remove(T)}}let R=0;function ee(){R=0}function F(){const T=R;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),R+=1,T}function E(T,M){const G=i.get(T);if(T.isVideoTexture&&W(T),T.version>0&&G.__version!==T.version){const te=T.image;if(te===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(G,T,M);return}}t.activeTexture(33984+M),t.bindTexture(3553,G.__webglTexture)}function D(T,M){const G=i.get(T);if(T.version>0&&G.__version!==T.version){oe(G,T,M);return}t.activeTexture(33984+M),t.bindTexture(35866,G.__webglTexture)}function I(T,M){const G=i.get(T);if(T.version>0&&G.__version!==T.version){oe(G,T,M);return}t.activeTexture(33984+M),t.bindTexture(32879,G.__webglTexture)}function C(T,M){const G=i.get(T);if(T.version>0&&G.__version!==T.version){j(G,T,M);return}t.activeTexture(33984+M),t.bindTexture(34067,G.__webglTexture)}const H={[gr]:10497,[_t]:33071,[Qn]:33648},K={[Ze]:9728,[ha]:9984,[ua]:9986,[nt]:9729,[Hl]:9985,[wr]:9987};function ie(T,M,G){if(G?(s.texParameteri(T,10242,H[M.wrapS]),s.texParameteri(T,10243,H[M.wrapT]),(T===32879||T===35866)&&s.texParameteri(T,32882,H[M.wrapR]),s.texParameteri(T,10240,K[M.magFilter]),s.texParameteri(T,10241,K[M.minFilter])):(s.texParameteri(T,10242,33071),s.texParameteri(T,10243,33071),(T===32879||T===35866)&&s.texParameteri(T,32882,33071),(M.wrapS!==_t||M.wrapT!==_t)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(T,10240,L(M.magFilter)),s.texParameteri(T,10241,L(M.minFilter)),M.minFilter!==Ze&&M.minFilter!==nt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(M.type===Jt&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===dr&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(s.texParameterf(T,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function Z(T,M){T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",_),T.__webglTexture=s.createTexture(),a.memory.textures++)}function oe(T,M,G){let te=3553;M.isDataTexture2DArray&&(te=35866),M.isDataTexture3D&&(te=32879),Z(T,M),t.activeTexture(33984+G),t.bindTexture(te,T.__webglTexture),s.pixelStorei(37440,M.flipY),s.pixelStorei(37441,M.premultiplyAlpha),s.pixelStorei(3317,M.unpackAlignment),s.pixelStorei(37443,0);const re=f(M)&&m(M.image)===!1,ue=x(M.image,re,!1,h),ye=m(ue)||o,we=n.convert(M.format);let be=n.convert(M.type),xe=b(M.internalFormat,we,be,M.encoding);ie(te,M,ye);let P;const le=M.mipmaps;if(M.isDepthTexture)xe=6402,o?M.type===Jt?xe=36012:M.type===Kn?xe=33190:M.type===Zr?xe=35056:xe=33189:M.type===Jt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===pr&&xe===6402&&M.type!==$n&&M.type!==Kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=$n,be=n.convert(M.type)),M.format===rn&&xe===6402&&(xe=34041,M.type!==Zr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Zr,be=n.convert(M.type))),t.texImage2D(3553,0,xe,ue.width,ue.height,0,we,be,null);else if(M.isDataTexture)if(le.length>0&&ye){for(let q=0,ge=le.length;q<ge;q++)P=le[q],t.texImage2D(3553,q,xe,P.width,P.height,0,we,be,P.data);M.generateMipmaps=!1,T.__maxMipLevel=le.length-1}else t.texImage2D(3553,0,xe,ue.width,ue.height,0,we,be,ue.data),T.__maxMipLevel=0;else if(M.isCompressedTexture){for(let q=0,ge=le.length;q<ge;q++)P=le[q],M.format!==st&&M.format!==Kt?we!==null?t.compressedTexImage2D(3553,q,xe,P.width,P.height,0,P.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,q,xe,P.width,P.height,0,we,be,P.data);T.__maxMipLevel=le.length-1}else if(M.isDataTexture2DArray)t.texImage3D(35866,0,xe,ue.width,ue.height,ue.depth,0,we,be,ue.data),T.__maxMipLevel=0;else if(M.isDataTexture3D)t.texImage3D(32879,0,xe,ue.width,ue.height,ue.depth,0,we,be,ue.data),T.__maxMipLevel=0;else if(le.length>0&&ye){for(let q=0,ge=le.length;q<ge;q++)P=le[q],t.texImage2D(3553,q,xe,we,be,P);M.generateMipmaps=!1,T.__maxMipLevel=le.length-1}else t.texImage2D(3553,0,xe,we,be,ue),T.__maxMipLevel=0;w(M,ye)&&y(te,M,ue.width,ue.height),T.__version=M.version,M.onUpdate&&M.onUpdate(M)}function j(T,M,G){if(M.image.length!==6)return;Z(T,M),t.activeTexture(33984+G),t.bindTexture(34067,T.__webglTexture),s.pixelStorei(37440,M.flipY),s.pixelStorei(37441,M.premultiplyAlpha),s.pixelStorei(3317,M.unpackAlignment),s.pixelStorei(37443,0);const te=M&&(M.isCompressedTexture||M.image[0].isCompressedTexture),re=M.image[0]&&M.image[0].isDataTexture,ue=[];for(let q=0;q<6;q++)!te&&!re?ue[q]=x(M.image[q],!1,!0,c):ue[q]=re?M.image[q].image:M.image[q];const ye=ue[0],we=m(ye)||o,be=n.convert(M.format),xe=n.convert(M.type),P=b(M.internalFormat,be,xe,M.encoding);ie(34067,M,we);let le;if(te){for(let q=0;q<6;q++){le=ue[q].mipmaps;for(let ge=0;ge<le.length;ge++){const pe=le[ge];M.format!==st&&M.format!==Kt?be!==null?t.compressedTexImage2D(34069+q,ge,P,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+q,ge,P,pe.width,pe.height,0,be,xe,pe.data)}}T.__maxMipLevel=le.length-1}else{le=M.mipmaps;for(let q=0;q<6;q++)if(re){t.texImage2D(34069+q,0,P,ue[q].width,ue[q].height,0,be,xe,ue[q].data);for(let ge=0;ge<le.length;ge++){const pe=le[ge].image[q].image;t.texImage2D(34069+q,ge+1,P,pe.width,pe.height,0,be,xe,pe.data)}}else{t.texImage2D(34069+q,0,P,be,xe,ue[q]);for(let ge=0;ge<le.length;ge++){const pe=le[ge];t.texImage2D(34069+q,ge+1,P,be,xe,pe.image[q])}}T.__maxMipLevel=le.length}w(M,we)&&y(34067,M,ye.width,ye.height),T.__version=M.version,M.onUpdate&&M.onUpdate(M)}function Q(T,M,G,te,re){const ue=n.convert(G.format),ye=n.convert(G.type),we=b(G.internalFormat,ue,ye,G.encoding);re===32879||re===35866?t.texImage3D(re,0,we,M.width,M.height,M.depth,0,ue,ye,null):t.texImage2D(re,0,we,M.width,M.height,0,ue,ye,null),t.bindFramebuffer(36160,T),s.framebufferTexture2D(36160,te,re,i.get(G).__webglTexture,0),t.bindFramebuffer(36160,null)}function he(T,M,G){if(s.bindRenderbuffer(36161,T),M.depthBuffer&&!M.stencilBuffer){let te=33189;if(G){const re=M.depthTexture;re&&re.isDepthTexture&&(re.type===Jt?te=36012:re.type===Kn&&(te=33190));const ue=Y(M);s.renderbufferStorageMultisample(36161,ue,te,M.width,M.height)}else s.renderbufferStorage(36161,te,M.width,M.height);s.framebufferRenderbuffer(36160,36096,36161,T)}else if(M.depthBuffer&&M.stencilBuffer){if(G){const te=Y(M);s.renderbufferStorageMultisample(36161,te,35056,M.width,M.height)}else s.renderbufferStorage(36161,34041,M.width,M.height);s.framebufferRenderbuffer(36160,33306,36161,T)}else{const te=M.isWebGLMultipleRenderTargets===!0?M.texture[0]:M.texture,re=n.convert(te.format),ue=n.convert(te.type),ye=b(te.internalFormat,re,ue,te.encoding);if(G){const we=Y(M);s.renderbufferStorageMultisample(36161,we,ye,M.width,M.height)}else s.renderbufferStorage(36161,ye,M.width,M.height)}s.bindRenderbuffer(36161,null)}function B(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),E(M.depthTexture,0);const G=i.get(M.depthTexture).__webglTexture;if(M.depthTexture.format===pr)s.framebufferTexture2D(36160,36096,3553,G,0);else if(M.depthTexture.format===rn)s.framebufferTexture2D(36160,33306,3553,G,0);else throw new Error("Unknown depthTexture format")}function Me(T){const M=i.get(T),G=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture){if(G)throw new Error("target.depthTexture not supported in Cube render targets");B(M.__webglFramebuffer,T)}else if(G){M.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,M.__webglFramebuffer[te]),M.__webglDepthbuffer[te]=s.createRenderbuffer(),he(M.__webglDepthbuffer[te],T,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=s.createRenderbuffer(),he(M.__webglDepthbuffer,T,!1);t.bindFramebuffer(36160,null)}function Se(T){const M=T.texture,G=i.get(T),te=i.get(M);T.addEventListener("dispose",O),T.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture=s.createTexture(),te.__version=M.version,a.memory.textures++);const re=T.isWebGLCubeRenderTarget===!0,ue=T.isWebGLMultipleRenderTargets===!0,ye=T.isWebGLMultisampleRenderTarget===!0,we=M.isDataTexture3D||M.isDataTexture2DArray,be=m(T)||o;if(o&&M.format===Kt&&(M.type===Jt||M.type===dr)&&(M.format=st,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),re){G.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)G.__webglFramebuffer[xe]=s.createFramebuffer()}else if(G.__webglFramebuffer=s.createFramebuffer(),ue)if(r.drawBuffers){const xe=T.texture;for(let P=0,le=xe.length;P<le;P++){const q=i.get(xe[P]);q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(ye)if(o){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=s.createRenderbuffer(),s.bindRenderbuffer(36161,G.__webglColorRenderbuffer);const xe=n.convert(M.format),P=n.convert(M.type),le=b(M.internalFormat,xe,P,M.encoding),q=Y(T);s.renderbufferStorageMultisample(36161,q,le,T.width,T.height),t.bindFramebuffer(36160,G.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064,36161,G.__webglColorRenderbuffer),s.bindRenderbuffer(36161,null),T.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),he(G.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(re){t.bindTexture(34067,te.__webglTexture),ie(34067,M,be);for(let xe=0;xe<6;xe++)Q(G.__webglFramebuffer[xe],T,M,36064,34069+xe);w(M,be)&&y(34067,M,T.width,T.height),t.unbindTexture()}else if(ue){const xe=T.texture;for(let P=0,le=xe.length;P<le;P++){const q=xe[P],ge=i.get(q);t.bindTexture(3553,ge.__webglTexture),ie(3553,q,be),Q(G.__webglFramebuffer,T,q,36064+P,3553),w(q,be)&&y(3553,q,T.width,T.height)}t.unbindTexture()}else{let xe=3553;we&&(o?xe=M.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(xe,te.__webglTexture),ie(xe,M,be),Q(G.__webglFramebuffer,T,M,36064,xe),w(M,be)&&y(xe,M,T.width,T.height,T.depth),t.unbindTexture()}T.depthBuffer&&Me(T)}function ae(T){const M=m(T)||o,G=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let te=0,re=G.length;te<re;te++){const ue=G[te];if(w(ue,M)){const ye=T.isWebGLCubeRenderTarget?34067:3553,we=i.get(ue).__webglTexture;t.bindTexture(ye,we),y(ye,ue,T.width,T.height),t.unbindTexture()}}}function fe(T){if(T.isWebGLMultisampleRenderTarget)if(o){const M=T.width,G=T.height;let te=16384;T.depthBuffer&&(te|=256),T.stencilBuffer&&(te|=1024);const re=i.get(T);t.bindFramebuffer(36008,re.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,re.__webglFramebuffer),s.blitFramebuffer(0,0,M,G,0,0,M,G,te,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,re.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Y(T){return o&&T.isWebGLMultisampleRenderTarget?Math.min(u,T.samples):0}function W(T){const M=a.render.frame;d.get(T)!==M&&(d.set(T,M),T.update())}let $=!1,de=!1;function ce(T,M){T&&T.isWebGLRenderTarget&&($===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),$=!0),T=T.texture),E(T,M)}function Te(T,M){T&&T.isWebGLCubeRenderTarget&&(de===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),de=!0),T=T.texture),C(T,M)}this.allocateTextureUnit=F,this.resetTextureUnits=ee,this.setTexture2D=E,this.setTexture2DArray=D,this.setTexture3D=I,this.setTextureCube=C,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=fe,this.safeSetTexture2D=ce,this.safeSetTextureCube=Te}function Cg(s,e,t){const i=t.isWebGL2;function r(n){let a;if(n===xi)return 5121;if(n===Hh)return 32819;if(n===kh)return 32820;if(n===Gh)return 33635;if(n===Fh)return 5120;if(n===zh)return 5122;if(n===$n)return 5123;if(n===Bh)return 5124;if(n===Kn)return 5125;if(n===Jt)return 5126;if(n===dr)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(n===Vh)return 6406;if(n===Kt)return 6407;if(n===st)return 6408;if(n===Wh)return 6409;if(n===jh)return 6410;if(n===pr)return 6402;if(n===rn)return 34041;if(n===qh)return 6403;if(n===Yh)return 36244;if(n===Jh)return 33319;if(n===Zh)return 33320;if(n===Kh)return 36248;if(n===Qh)return 36249;if(n===ro||n===no||n===so||n===ao)if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===ro)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===no)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===so)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ao)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oo||n===lo||n===co||n===ho)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===oo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===co)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ho)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$h)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if((n===uo||n===po)&&(a=e.get("WEBGL_compressed_texture_etc"),a!==null)){if(n===uo)return a.COMPRESSED_RGB8_ETC2;if(n===po)return a.COMPRESSED_RGBA8_ETC2_EAC}if(n===eu||n===tu||n===iu||n===ru||n===nu||n===su||n===au||n===ou||n===lu||n===cu||n===hu||n===uu||n===du||n===pu||n===mu||n===gu||n===vu||n===xu||n===yu||n===_u||n===Mu||n===wu||n===bu||n===Su||n===Tu||n===Eu||n===Au||n===Lu)return a=e.get("WEBGL_compressed_texture_astc"),a!==null?n:null;if(n===fu)return a=e.get("EXT_texture_compression_bptc"),a!==null?n:null;if(n===Zr)return i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}class fc extends ut{constructor(e=[]){super(),this.cameras=e}}fc.prototype.isArrayCamera=!0;class Ut extends Oe{constructor(){super(),this.type="Group"}}Ut.prototype.isGroup=!0;const Pg={type:"move"};class qs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,n=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(o!==null&&(r=t.getPose(e.targetRaySpace,i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pg))),c&&e.hand){a=!0;for(const v of e.hand.values()){const x=t.getJointPose(v,i);if(c.joints[v.jointName]===void 0){const f=new Ut;f.matrixAutoUpdate=!1,f.visible=!1,c.joints[v.jointName]=f,c.add(f)}const m=c.joints[v.jointName];x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=x.radius),m.visible=x!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,i),n!==null&&(l.matrix.fromArray(n.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),n.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(n.linearVelocity)):l.hasLinearVelocity=!1,n.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(n.angularVelocity)):l.hasAngularVelocity=!1));return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=n!==null),c!==null&&(c.visible=a!==null),this}}class Ig extends zi{constructor(e,t){super();const i=this,r=e.state;let n=null,a=1,o=null,l="local-floor",c=null,h=null,u=null,d=null,p=null,g=!1,v=null,x=null,m=null,f=null,w=null,y=null;const b=[],L=new Map,_=new ut;_.layers.enable(1),_.viewport=new ze;const O=new ut;O.layers.enable(2),O.viewport=new ze;const V=[_,O],N=new fc;N.layers.enable(1),N.layers.enable(2);let R=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Q=b[j];return Q===void 0&&(Q=new qs,b[j]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(j){let Q=b[j];return Q===void 0&&(Q=new qs,b[j]=Q),Q.getGripSpace()},this.getHand=function(j){let Q=b[j];return Q===void 0&&(Q=new qs,b[j]=Q),Q.getHandSpace()};function F(j){const Q=L.get(j.inputSource);Q&&Q.dispatchEvent({type:j.type,data:j.inputSource})}function E(){L.forEach(function(j,Q){j.disconnect(Q)}),L.clear(),R=null,ee=null,r.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),u&&t.deleteFramebuffer(u),v&&t.deleteFramebuffer(v),x&&t.deleteRenderbuffer(x),m&&t.deleteRenderbuffer(m),u=null,v=null,x=null,m=null,p=null,d=null,h=null,n=null,oe.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){l=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return f},this.getSession=function(){return n},this.setSession=async function(j){if(n=j,n!==null){n.addEventListener("select",F),n.addEventListener("selectstart",F),n.addEventListener("selectend",F),n.addEventListener("squeeze",F),n.addEventListener("squeezestart",F),n.addEventListener("squeezeend",F),n.addEventListener("end",E),n.addEventListener("inputsourceschange",D);const Q=t.getContextAttributes();if(Q.xrCompatible!==!0&&await t.makeXRCompatible(),n.renderState.layers===void 0){const he={antialias:Q.antialias,alpha:Q.alpha,depth:Q.depth,stencil:Q.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(n,t,he),n.updateRenderState({baseLayer:p})}else if(t instanceof WebGLRenderingContext){const he={antialias:!0,alpha:Q.alpha,depth:Q.depth,stencil:Q.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(n,t,he),n.updateRenderState({layers:[p]})}else{g=Q.antialias;let he=null;Q.depth&&(y=256,Q.stencil&&(y|=1024),w=Q.stencil?33306:36096,he=Q.stencil?35056:33190);const B={colorFormat:Q.alpha?32856:32849,depthFormat:he,scaleFactor:a};h=new XRWebGLBinding(n,t),d=h.createProjectionLayer(B),u=t.createFramebuffer(),n.updateRenderState({layers:[d]}),g&&(v=t.createFramebuffer(),x=t.createRenderbuffer(),t.bindRenderbuffer(36161,x),t.renderbufferStorageMultisample(36161,4,32856,d.textureWidth,d.textureHeight),r.bindFramebuffer(36160,v),t.framebufferRenderbuffer(36160,36064,36161,x),t.bindRenderbuffer(36161,null),he!==null&&(m=t.createRenderbuffer(),t.bindRenderbuffer(36161,m),t.renderbufferStorageMultisample(36161,4,he,d.textureWidth,d.textureHeight),t.framebufferRenderbuffer(36160,w,36161,m),t.bindRenderbuffer(36161,null)),r.bindFramebuffer(36160,null))}o=await n.requestReferenceSpace(l),oe.setContext(n),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function D(j){const Q=n.inputSources;for(let he=0;he<b.length;he++)L.set(Q[he],b[he]);for(let he=0;he<j.removed.length;he++){const B=j.removed[he],Me=L.get(B);Me&&(Me.dispatchEvent({type:"disconnected",data:B}),L.delete(B))}for(let he=0;he<j.added.length;he++){const B=j.added[he],Me=L.get(B);Me&&Me.dispatchEvent({type:"connected",data:B})}}const I=new A,C=new A;function H(j,Q,he){I.setFromMatrixPosition(Q.matrixWorld),C.setFromMatrixPosition(he.matrixWorld);const B=I.distanceTo(C),Me=Q.projectionMatrix.elements,Se=he.projectionMatrix.elements,ae=Me[14]/(Me[10]-1),fe=Me[14]/(Me[10]+1),Y=(Me[9]+1)/Me[5],W=(Me[9]-1)/Me[5],$=(Me[8]-1)/Me[0],de=(Se[8]+1)/Se[0],ce=ae*$,Te=ae*de,T=B/(-$+de),M=T*-$;Q.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(M),j.translateZ(T),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const G=ae+T,te=fe+T,re=ce-M,ue=Te+(B-M),ye=Y*fe/te*G,we=W*fe/te*G;j.projectionMatrix.makePerspective(re,ue,ye,we,G,te)}function K(j,Q){Q===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Q.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(n===null)return;N.near=O.near=_.near=j.near,N.far=O.far=_.far=j.far,(R!==N.near||ee!==N.far)&&(n.updateRenderState({depthNear:N.near,depthFar:N.far}),R=N.near,ee=N.far);const Q=j.parent,he=N.cameras;K(N,Q);for(let Me=0;Me<he.length;Me++)K(he[Me],Q);N.matrixWorld.decompose(N.position,N.quaternion,N.scale),j.position.copy(N.position),j.quaternion.copy(N.quaternion),j.scale.copy(N.scale),j.matrix.copy(N.matrix),j.matrixWorld.copy(N.matrixWorld);const B=j.children;for(let Me=0,Se=B.length;Me<Se;Me++)B[Me].updateMatrixWorld(!0);he.length===2?H(N,_,O):N.projectionMatrix.copy(_.projectionMatrix)},this.getCamera=function(){return N},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(p!==null)return p.fixedFoveation},this.setFoveation=function(j){d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)};let ie=null;function Z(j,Q){if(c=Q.getViewerPose(o),f=Q,c!==null){const B=c.views;p!==null&&r.bindXRFramebuffer(p.framebuffer);let Me=!1;B.length!==N.cameras.length&&(N.cameras.length=0,Me=!0);for(let Se=0;Se<B.length;Se++){const ae=B[Se];let fe=null;if(p!==null)fe=p.getViewport(ae);else{const W=h.getViewSubImage(d,ae);r.bindXRFramebuffer(u),W.depthStencilTexture!==void 0&&t.framebufferTexture2D(36160,w,3553,W.depthStencilTexture,0),t.framebufferTexture2D(36160,36064,3553,W.colorTexture,0),fe=W.viewport}const Y=V[Se];Y.matrix.fromArray(ae.transform.matrix),Y.projectionMatrix.fromArray(ae.projectionMatrix),Y.viewport.set(fe.x,fe.y,fe.width,fe.height),Se===0&&N.matrix.copy(Y.matrix),Me===!0&&N.cameras.push(Y)}g&&(r.bindXRFramebuffer(v),y!==null&&t.clear(y))}const he=n.inputSources;for(let B=0;B<b.length;B++){const Me=b[B],Se=he[B];Me.update(Se,Q,o)}if(ie&&ie(j,Q),g){const B=d.textureWidth,Me=d.textureHeight;r.bindFramebuffer(36008,v),r.bindFramebuffer(36009,u),t.invalidateFramebuffer(36008,[w]),t.invalidateFramebuffer(36009,[w]),t.blitFramebuffer(0,0,B,Me,0,0,B,Me,16384,9728),t.invalidateFramebuffer(36008,[36064]),r.bindFramebuffer(36008,null),r.bindFramebuffer(36009,null),r.bindFramebuffer(36160,v)}f=null}const oe=new ec;oe.setAnimationLoop(Z),this.setAnimationLoop=function(j){ie=j},this.dispose=function(){}}}function Dg(s){function e(m,f){m.fogColor.value.copy(f.color),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function t(m,f,w,y,b){f.isMeshBasicMaterial?i(m,f):f.isMeshLambertMaterial?(i(m,f),l(m,f)):f.isMeshToonMaterial?(i(m,f),h(m,f)):f.isMeshPhongMaterial?(i(m,f),c(m,f)):f.isMeshStandardMaterial?(i(m,f),f.isMeshPhysicalMaterial?d(m,f,b):u(m,f)):f.isMeshMatcapMaterial?(i(m,f),p(m,f)):f.isMeshDepthMaterial?(i(m,f),g(m,f)):f.isMeshDistanceMaterial?(i(m,f),v(m,f)):f.isMeshNormalMaterial?(i(m,f),x(m,f)):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&n(m,f)):f.isPointsMaterial?a(m,f,w,y):f.isSpriteMaterial?o(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.specularMap&&(m.specularMap.value=f.specularMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const w=s.get(f).envMap;if(w){m.envMap.value=w,m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio;const L=s.get(w).__maxMipLevel;L!==void 0&&(m.maxMipLevel.value=L)}f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity);let y;f.map?y=f.map:f.specularMap?y=f.specularMap:f.displacementMap?y=f.displacementMap:f.normalMap?y=f.normalMap:f.bumpMap?y=f.bumpMap:f.roughnessMap?y=f.roughnessMap:f.metalnessMap?y=f.metalnessMap:f.alphaMap?y=f.alphaMap:f.emissiveMap?y=f.emissiveMap:f.clearcoatMap?y=f.clearcoatMap:f.clearcoatNormalMap?y=f.clearcoatNormalMap:f.clearcoatRoughnessMap?y=f.clearcoatRoughnessMap:f.specularIntensityMap?y=f.specularIntensityMap:f.specularColorMap?y=f.specularColorMap:f.transmissionMap?y=f.transmissionMap:f.thicknessMap?y=f.thicknessMap:f.sheenColorMap?y=f.sheenColorMap:f.sheenRoughnessMap&&(y=f.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uvTransform.value.copy(y.matrix));let b;f.aoMap?b=f.aoMap:f.lightMap&&(b=f.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uv2Transform.value.copy(b.matrix))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity}function n(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function a(m,f,w,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=y*.5,f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let b;f.map?b=f.map:f.alphaMap&&(b=f.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uvTransform.value.copy(b.matrix))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let w;f.map?w=f.map:f.alphaMap&&(w=f.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uvTransform.value.copy(w.matrix))}function l(m,f){f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap),f.bumpMap&&(m.bumpMap.value=f.bumpMap,m.bumpScale.value=f.bumpScale,f.side===Ke&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,m.normalScale.value.copy(f.normalScale),f.side===Ke&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap),f.bumpMap&&(m.bumpMap.value=f.bumpMap,m.bumpScale.value=f.bumpScale,f.side===Ke&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,m.normalScale.value.copy(f.normalScale),f.side===Ke&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias)}function u(m,f){m.roughness.value=f.roughness,m.metalness.value=f.metalness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap),f.bumpMap&&(m.bumpMap.value=f.bumpMap,m.bumpScale.value=f.bumpScale,f.side===Ke&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,m.normalScale.value.copy(f.normalScale),f.side===Ke&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),s.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,w){u(m,f),m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),m.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Ke&&m.clearcoatNormalScale.value.negate())),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap)}function p(m,f){f.matcap&&(m.matcap.value=f.matcap),f.bumpMap&&(m.bumpMap.value=f.bumpMap,m.bumpScale.value=f.bumpScale,f.side===Ke&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,m.normalScale.value.copy(f.normalScale),f.side===Ke&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias)}function g(m,f){f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias)}function v(m,f){f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),m.referencePosition.value.copy(f.referencePosition),m.nearDistance.value=f.nearDistance,m.farDistance.value=f.farDistance}function x(m,f){f.bumpMap&&(m.bumpMap.value=f.bumpMap,m.bumpScale.value=f.bumpScale,f.side===Ke&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,m.normalScale.value.copy(f.normalScale),f.side===Ke&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function Ng(){const s=ls("canvas");return s.style.display="block",s}function Fe(s={}){const e=s.canvas!==void 0?s.canvas:Ng(),t=s.context!==void 0?s.context:null,i=s.alpha!==void 0?s.alpha:!1,r=s.depth!==void 0?s.depth:!0,n=s.stencil!==void 0?s.stencil:!0,a=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,l=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,c=s.powerPreference!==void 0?s.powerPreference:"default",h=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u=null,d=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=ft,this.physicallyCorrectLights=!1,this.toneMapping=Di,this.toneMappingExposure=1;const v=this;let x=!1,m=0,f=0,w=null,y=-1,b=null;const L=new ze,_=new ze;let O=null,V=e.width,N=e.height,R=1,ee=null,F=null;const E=new ze(0,0,V,N),D=new ze(0,0,V,N);let I=!1;const C=[],H=new hs;let K=!1,ie=!1,Z=null;const oe=new me,j=new A,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function he(){return w===null?R:1}let B=t;function Me(S,U){for(let k=0;k<S.length;k++){const z=S[k],X=e.getContext(z,U);if(X!==null)return X}return null}try{const S={alpha:i,depth:r,stencil:n,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if(e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",ct,!1),B===null){const U=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&U.shift(),B=Me(U,S),B===null)throw Me(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Se,ae,fe,Y,W,$,de,ce,Te,T,M,G,te,re,ue,ye,we,be,xe,P,le,q,ge;function pe(){Se=new rm(B),ae=new Jf(B,Se,s),Se.init(ae),q=new Cg(B,Se,ae),fe=new Lg(B,Se,ae),C[0]=1029,Y=new am,W=new vg,$=new Rg(B,Se,fe,W,ae,q,Y),de=new Kf(v),ce=new im(v),Te=new xd(B,ae),ge=new qf(B,Se,Te,ae),T=new nm(B,Te,Y,ge),M=new hm(B,T,Te,Y),xe=new cm(B,ae,$),ye=new Zf(W),G=new gg(v,de,ce,Se,ae,ge,ye),te=new Dg(W),re=new yg(W),ue=new Tg(Se,ae),be=new Xf(v,de,fe,M,o),we=new pc(v,M,ae),P=new Yf(B,Se,Y,ae),le=new sm(B,Se,Y,ae),Y.programs=G.programs,v.capabilities=ae,v.extensions=Se,v.properties=W,v.renderLists=re,v.shadowMap=we,v.state=fe,v.info=Y}pe();const Ie=new Ig(v,B);this.xr=Ie,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const S=Se.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Se.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return R},this.setPixelRatio=function(S){S!==void 0&&(R=S,this.setSize(V,N,!1))},this.getSize=function(S){return S.set(V,N)},this.setSize=function(S,U,k){if(Ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=S,N=U,e.width=Math.floor(S*R),e.height=Math.floor(U*R),k!==!1&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(V*R,N*R).floor()},this.setDrawingBufferSize=function(S,U,k){V=S,N=U,R=k,e.width=Math.floor(S*k),e.height=Math.floor(U*k),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(L)},this.getViewport=function(S){return S.copy(E)},this.setViewport=function(S,U,k,z){S.isVector4?E.set(S.x,S.y,S.z,S.w):E.set(S,U,k,z),fe.viewport(L.copy(E).multiplyScalar(R).floor())},this.getScissor=function(S){return S.copy(D)},this.setScissor=function(S,U,k,z){S.isVector4?D.set(S.x,S.y,S.z,S.w):D.set(S,U,k,z),fe.scissor(_.copy(D).multiplyScalar(R).floor())},this.getScissorTest=function(){return I},this.setScissorTest=function(S){fe.setScissorTest(I=S)},this.setOpaqueSort=function(S){ee=S},this.setTransparentSort=function(S){F=S},this.getClearColor=function(S){return S.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor.apply(be,arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha.apply(be,arguments)},this.clear=function(S,U,k){let z=0;(S===void 0||S)&&(z|=16384),(U===void 0||U)&&(z|=256),(k===void 0||k)&&(z|=1024),B.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",ct,!1),re.dispose(),ue.dispose(),W.dispose(),de.dispose(),ce.dispose(),M.dispose(),ge.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",qa),Ie.removeEventListener("sessionend",Ya),Z&&(Z.dispose(),Z=null),wi.stop()};function lt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const S=Y.autoReset,U=we.enabled,k=we.autoUpdate,z=we.needsUpdate,X=we.type;pe(),Y.autoReset=S,we.enabled=U,we.autoUpdate=k,we.needsUpdate=z,we.type=X}function ei(S){const U=S.target;U.removeEventListener("dispose",ei),Ye(U)}function Ye(S){Ht(S),W.remove(S)}function Ht(S){const U=W.get(S).programs;U!==void 0&&U.forEach(function(k){G.releaseProgram(k)})}this.renderBufferDirect=function(S,U,k,z,X,_e){U===null&&(U=Q);const ve=X.isMesh&&X.matrixWorld.determinant()<0,Ee=rh(S,U,k,z,X);fe.setMaterial(z,ve);let Re=k.index;const Ge=k.attributes.position;if(Re===null){if(Ge===void 0||Ge.count===0)return}else if(Re.count===0)return;let Ce=1;z.wireframe===!0&&(Re=T.getWireframeAttribute(k),Ce=2),ge.setup(X,z,Ee,k,Re);let Pe,tt=P;Re!==null&&(Pe=Te.get(Re),tt=le,tt.setIndex(Pe));const bi=Re!==null?Re.count:Ge.count,De=k.drawRange.start*Ce,Dr=k.drawRange.count*Ce,bt=_e!==null?_e.start*Ce:0,Si=_e!==null?_e.count*Ce:1/0,Ti=Math.max(De,bt),Ei=Math.min(bi,De+Dr,bt+Si)-1,ti=Math.max(0,Ei-Ti+1);if(ti!==0){if(X.isMesh)z.wireframe===!0?(fe.setLineWidth(z.wireframeLinewidth*he()),tt.setMode(1)):tt.setMode(4);else if(X.isLine){let Xe=z.linewidth;Xe===void 0&&(Xe=1),fe.setLineWidth(Xe*he()),X.isLineSegments?tt.setMode(1):X.isLineLoop?tt.setMode(2):tt.setMode(3)}else X.isPoints?tt.setMode(0):X.isSprite&&tt.setMode(4);if(X.isInstancedMesh)tt.renderInstances(Ti,ti,X.count);else if(k.isInstancedBufferGeometry){const Xe=Math.min(k.instanceCount,k._maxInstanceCount);tt.renderInstances(Ti,ti,Xe)}else tt.render(Ti,ti)}},this.compile=function(S,U){d=ue.get(S),d.init(),g.push(d),S.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),d.setupLights(v.physicallyCorrectLights),S.traverse(function(k){const z=k.material;if(z)if(Array.isArray(z))for(let X=0;X<z.length;X++){const _e=z[X];xs(_e,S,k)}else xs(z,S,k)}),g.pop(),d=null};let Rt=null;function eh(S){Rt&&Rt(S)}function qa(){wi.stop()}function Ya(){wi.start()}const wi=new ec;wi.setAnimationLoop(eh),typeof window<"u"&&wi.setContext(window),this.setAnimationLoop=function(S){Rt=S,Ie.setAnimationLoop(S),S===null?wi.stop():wi.start()},Ie.addEventListener("sessionstart",qa),Ie.addEventListener("sessionend",Ya),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;S.autoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(U),U=Ie.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,U,w),d=ue.get(S,g.length),d.init(),g.push(d),oe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),H.setFromProjectionMatrix(oe),ie=this.localClippingEnabled,K=ye.init(this.clippingPlanes,ie,U),u=re.get(S,p.length),u.init(),p.push(u),Ja(S,U,0,v.sortObjects),u.finish(),v.sortObjects===!0&&u.sort(ee,F),K===!0&&ye.beginShadows();const k=d.state.shadowsArray;if(we.render(k,S,U),K===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),be.render(u,S),d.setupLights(v.physicallyCorrectLights),U.isArrayCamera){const z=U.cameras;for(let X=0,_e=z.length;X<_e;X++){const ve=z[X];Za(u,S,ve,ve.viewport)}}else Za(u,S,U);w!==null&&($.updateMultisampleRenderTarget(w),$.updateRenderTargetMipmap(w)),S.isScene===!0&&S.onAfterRender(v,S,U),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1),ge.resetDefaultState(),y=-1,b=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,p.pop(),p.length>0?u=p[p.length-1]:u=null};function Ja(S,U,k,z){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||H.intersectsSprite(S)){z&&j.setFromMatrixPosition(S.matrixWorld).applyMatrix4(oe);const _e=M.update(S),ve=S.material;ve.visible&&u.push(S,_e,ve,k,j.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==Y.render.frame&&(S.skeleton.update(),S.skeleton.frame=Y.render.frame),!S.frustumCulled||H.intersectsObject(S))){z&&j.setFromMatrixPosition(S.matrixWorld).applyMatrix4(oe);const _e=M.update(S),ve=S.material;if(Array.isArray(ve)){const Ee=_e.groups;for(let Re=0,Ge=Ee.length;Re<Ge;Re++){const Ce=Ee[Re],Pe=ve[Ce.materialIndex];Pe&&Pe.visible&&u.push(S,_e,Pe,k,j.z,Ce)}}else ve.visible&&u.push(S,_e,ve,k,j.z,null)}}const X=S.children;for(let _e=0,ve=X.length;_e<ve;_e++)Ja(X[_e],U,k,z)}function Za(S,U,k,z){const X=S.opaque,_e=S.transmissive,ve=S.transparent;d.setupLightsView(k),_e.length>0&&th(X,U,k),z&&fe.viewport(L.copy(z)),X.length>0&&xn(X,U,k),_e.length>0&&xn(_e,U,k),ve.length>0&&xn(ve,U,k)}function th(S,U,k){if(Z===null){const _e=a===!0&&ae.isWebGL2===!0?Jl:pt;Z=new _e(1024,1024,{generateMipmaps:!0,type:q.convert(dr)!==null?dr:xi,minFilter:wr,magFilter:Ze,wrapS:_t,wrapT:_t})}const z=v.getRenderTarget();v.setRenderTarget(Z),v.clear();const X=v.toneMapping;v.toneMapping=Di,xn(S,U,k),v.toneMapping=X,$.updateMultisampleRenderTarget(Z),$.updateRenderTargetMipmap(Z),v.setRenderTarget(z)}function xn(S,U,k){const z=U.isScene===!0?U.overrideMaterial:null;for(let X=0,_e=S.length;X<_e;X++){const ve=S[X],Ee=ve.object,Re=ve.geometry,Ge=z===null?ve.material:z,Ce=ve.group;Ee.layers.test(k.layers)&&ih(Ee,U,k,Re,Ge,Ce)}}function ih(S,U,k,z,X,_e){S.onBeforeRender(v,U,k,z,X,_e),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),X.onBeforeRender(v,U,k,z,S,_e),X.transparent===!0&&X.side===Ni?(X.side=Ke,X.needsUpdate=!0,v.renderBufferDirect(k,U,z,X,S,_e),X.side=mr,X.needsUpdate=!0,v.renderBufferDirect(k,U,z,X,S,_e),X.side=Ni):v.renderBufferDirect(k,U,z,X,S,_e),S.onAfterRender(v,U,k,z,X,_e)}function xs(S,U,k){U.isScene!==!0&&(U=Q);const z=W.get(S),X=d.state.lights,_e=d.state.shadowsArray,ve=X.state.version,Ee=G.getParameters(S,X.state,_e,U,k),Re=G.getProgramCacheKey(Ee);let Ge=z.programs;z.environment=S.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(S.isMeshStandardMaterial?ce:de).get(S.envMap||z.environment),Ge===void 0&&(S.addEventListener("dispose",ei),Ge=new Map,z.programs=Ge);let Ce=Ge.get(Re);if(Ce!==void 0){if(z.currentProgram===Ce&&z.lightsStateVersion===ve)return Ka(S,Ee),Ce}else Ee.uniforms=G.getUniforms(S),S.onBuild(k,Ee,v),S.onBeforeCompile(Ee,v),Ce=G.acquireProgram(Ee,Re),Ge.set(Re,Ce),z.uniforms=Ee.uniforms;const Pe=z.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Pe.clippingPlanes=ye.uniform),Ka(S,Ee),z.needsLights=sh(S),z.lightsStateVersion=ve,z.needsLights&&(Pe.ambientLightColor.value=X.state.ambient,Pe.lightProbe.value=X.state.probe,Pe.directionalLights.value=X.state.directional,Pe.directionalLightShadows.value=X.state.directionalShadow,Pe.spotLights.value=X.state.spot,Pe.spotLightShadows.value=X.state.spotShadow,Pe.rectAreaLights.value=X.state.rectArea,Pe.ltc_1.value=X.state.rectAreaLTC1,Pe.ltc_2.value=X.state.rectAreaLTC2,Pe.pointLights.value=X.state.point,Pe.pointLightShadows.value=X.state.pointShadow,Pe.hemisphereLights.value=X.state.hemi,Pe.directionalShadowMap.value=X.state.directionalShadowMap,Pe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Pe.spotShadowMap.value=X.state.spotShadowMap,Pe.spotShadowMatrix.value=X.state.spotShadowMatrix,Pe.pointShadowMap.value=X.state.pointShadowMap,Pe.pointShadowMatrix.value=X.state.pointShadowMatrix);const tt=Ce.getUniforms(),bi=mi.seqWithValue(tt.seq,Pe);return z.currentProgram=Ce,z.uniformsList=bi,Ce}function Ka(S,U){const k=W.get(S);k.outputEncoding=U.outputEncoding,k.instancing=U.instancing,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents}function rh(S,U,k,z,X){U.isScene!==!0&&(U=Q),$.resetTextureUnits();const _e=U.fog,ve=z.isMeshStandardMaterial?U.environment:null,Ee=w===null?v.outputEncoding:w.texture.encoding,Re=(z.isMeshStandardMaterial?ce:de).get(z.envMap||ve),Ge=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ce=!!z.normalMap&&!!k.attributes.tangent,Pe=!!k.morphAttributes.position,tt=!!k.morphAttributes.normal,bi=k.morphAttributes.position?k.morphAttributes.position.length:0,De=W.get(z),Dr=d.state.lights;if(K===!0&&(ie===!0||S!==b)){const Ct=S===b&&z.id===y;ye.setState(z,S,Ct)}let bt=!1;z.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Dr.state.version||De.outputEncoding!==Ee||X.isInstancedMesh&&De.instancing===!1||!X.isInstancedMesh&&De.instancing===!0||X.isSkinnedMesh&&De.skinning===!1||!X.isSkinnedMesh&&De.skinning===!0||De.envMap!==Re||z.fog&&De.fog!==_e||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ye.numPlanes||De.numIntersection!==ye.numIntersection)||De.vertexAlphas!==Ge||De.vertexTangents!==Ce||De.morphTargets!==Pe||De.morphNormals!==tt||ae.isWebGL2===!0&&De.morphTargetsCount!==bi)&&(bt=!0):(bt=!0,De.__version=z.version);let Si=De.currentProgram;bt===!0&&(Si=xs(z,U,X));let Ti=!1,Ei=!1,ti=!1;const Xe=Si.getUniforms(),Nr=De.uniforms;if(fe.useProgram(Si.program)&&(Ti=!0,Ei=!0,ti=!0),z.id!==y&&(y=z.id,Ei=!0),Ti||b!==S){if(Xe.setValue(B,"projectionMatrix",S.projectionMatrix),ae.logarithmicDepthBuffer&&Xe.setValue(B,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),b!==S&&(b=S,Ei=!0,ti=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const Ct=Xe.map.cameraPosition;Ct!==void 0&&Ct.setValue(B,j.setFromMatrixPosition(S.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Xe.setValue(B,"isOrthographic",S.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||X.isSkinnedMesh)&&Xe.setValue(B,"viewMatrix",S.matrixWorldInverse)}if(X.isSkinnedMesh){Xe.setOptional(B,X,"bindMatrix"),Xe.setOptional(B,X,"bindMatrixInverse");const Ct=X.skeleton;Ct&&(ae.floatVertexTextures?(Ct.boneTexture===null&&Ct.computeBoneTexture(),Xe.setValue(B,"boneTexture",Ct.boneTexture,$),Xe.setValue(B,"boneTextureSize",Ct.boneTextureSize)):Xe.setOptional(B,Ct,"boneMatrices"))}return k&&(k.morphAttributes.position!==void 0||k.morphAttributes.normal!==void 0)&&xe.update(X,k,z,Si),(Ei||De.receiveShadow!==X.receiveShadow)&&(De.receiveShadow=X.receiveShadow,Xe.setValue(B,"receiveShadow",X.receiveShadow)),Ei&&(Xe.setValue(B,"toneMappingExposure",v.toneMappingExposure),De.needsLights&&nh(Nr,ti),_e&&z.fog&&te.refreshFogUniforms(Nr,_e),te.refreshMaterialUniforms(Nr,z,R,N,Z),mi.upload(B,De.uniformsList,Nr,$)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(mi.upload(B,De.uniformsList,Nr,$),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Xe.setValue(B,"center",X.center),Xe.setValue(B,"modelViewMatrix",X.modelViewMatrix),Xe.setValue(B,"normalMatrix",X.normalMatrix),Xe.setValue(B,"modelMatrix",X.matrixWorld),Si}function nh(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function sh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return f},this.getRenderTarget=function(){return w},this.setRenderTarget=function(S,U=0,k=0){w=S,m=U,f=k,S&&W.get(S).__webglFramebuffer===void 0&&$.setupRenderTarget(S);let z=null,X=!1,_e=!1;if(S){const ve=S.texture;(ve.isDataTexture3D||ve.isDataTexture2DArray)&&(_e=!0);const Ee=W.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(z=Ee[U],X=!0):S.isWebGLMultisampleRenderTarget?z=W.get(S).__webglMultisampledFramebuffer:z=Ee,L.copy(S.viewport),_.copy(S.scissor),O=S.scissorTest}else L.copy(E).multiplyScalar(R).floor(),_.copy(D).multiplyScalar(R).floor(),O=I;if(fe.bindFramebuffer(36160,z)&&ae.drawBuffers){let ve=!1;if(S)if(S.isWebGLMultipleRenderTargets){const Ee=S.texture;if(C.length!==Ee.length||C[0]!==36064){for(let Re=0,Ge=Ee.length;Re<Ge;Re++)C[Re]=36064+Re;C.length=Ee.length,ve=!0}}else(C.length!==1||C[0]!==36064)&&(C[0]=36064,C.length=1,ve=!0);else(C.length!==1||C[0]!==1029)&&(C[0]=1029,C.length=1,ve=!0);ve&&(ae.isWebGL2?B.drawBuffers(C):Se.get("WEBGL_draw_buffers").drawBuffersWEBGL(C))}if(fe.viewport(L),fe.scissor(_),fe.setScissorTest(O),X){const ve=W.get(S.texture);B.framebufferTexture2D(36160,36064,34069+U,ve.__webglTexture,k)}else if(_e){const ve=W.get(S.texture),Ee=U||0;B.framebufferTextureLayer(36160,36064,ve.__webglTexture,k||0,Ee)}y=-1},this.readRenderTargetPixels=function(S,U,k,z,X,_e,ve){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=W.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ve!==void 0&&(Ee=Ee[ve]),Ee){fe.bindFramebuffer(36160,Ee);try{const Re=S.texture,Ge=Re.format,Ce=Re.type;if(Ge!==st&&q.convert(Ge)!==B.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pe=Ce===dr&&(Se.has("EXT_color_buffer_half_float")||ae.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Ce!==xi&&q.convert(Ce)!==B.getParameter(35738)&&!(Ce===Jt&&(ae.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B.checkFramebufferStatus(36160)===36053?U>=0&&U<=S.width-z&&k>=0&&k<=S.height-X&&B.readPixels(U,k,z,X,q.convert(Ge),q.convert(Ce),_e):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const Re=w!==null?W.get(w).__webglFramebuffer:null;fe.bindFramebuffer(36160,Re)}}},this.copyFramebufferToTexture=function(S,U,k=0){const z=Math.pow(2,-k),X=Math.floor(U.image.width*z),_e=Math.floor(U.image.height*z);let ve=q.convert(U.format);ae.isWebGL2&&(ve===6407&&(ve=32849),ve===6408&&(ve=32856)),$.setTexture2D(U,0),B.copyTexImage2D(3553,k,ve,S.x,S.y,X,_e,0),fe.unbindTexture()},this.copyTextureToTexture=function(S,U,k,z=0){const X=U.image.width,_e=U.image.height,ve=q.convert(k.format),Ee=q.convert(k.type);$.setTexture2D(k,0),B.pixelStorei(37440,k.flipY),B.pixelStorei(37441,k.premultiplyAlpha),B.pixelStorei(3317,k.unpackAlignment),U.isDataTexture?B.texSubImage2D(3553,z,S.x,S.y,X,_e,ve,Ee,U.image.data):U.isCompressedTexture?B.compressedTexSubImage2D(3553,z,S.x,S.y,U.mipmaps[0].width,U.mipmaps[0].height,ve,U.mipmaps[0].data):B.texSubImage2D(3553,z,S.x,S.y,ve,Ee,U.image),z===0&&k.generateMipmaps&&B.generateMipmap(3553),fe.unbindTexture()},this.copyTextureToTexture3D=function(S,U,k,z,X=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=S.max.x-S.min.x+1,ve=S.max.y-S.min.y+1,Ee=S.max.z-S.min.z+1,Re=q.convert(z.format),Ge=q.convert(z.type);let Ce;if(z.isDataTexture3D)$.setTexture3D(z,0),Ce=32879;else if(z.isDataTexture2DArray)$.setTexture2DArray(z,0),Ce=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(37440,z.flipY),B.pixelStorei(37441,z.premultiplyAlpha),B.pixelStorei(3317,z.unpackAlignment);const Pe=B.getParameter(3314),tt=B.getParameter(32878),bi=B.getParameter(3316),De=B.getParameter(3315),Dr=B.getParameter(32877),bt=k.isCompressedTexture?k.mipmaps[0]:k.image;B.pixelStorei(3314,bt.width),B.pixelStorei(32878,bt.height),B.pixelStorei(3316,S.min.x),B.pixelStorei(3315,S.min.y),B.pixelStorei(32877,S.min.z),k.isDataTexture||k.isDataTexture3D?B.texSubImage3D(Ce,X,U.x,U.y,U.z,_e,ve,Ee,Re,Ge,bt.data):k.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Ce,X,U.x,U.y,U.z,_e,ve,Ee,Re,bt.data)):B.texSubImage3D(Ce,X,U.x,U.y,U.z,_e,ve,Ee,Re,Ge,bt),B.pixelStorei(3314,Pe),B.pixelStorei(32878,tt),B.pixelStorei(3316,bi),B.pixelStorei(3315,De),B.pixelStorei(32877,Dr),X===0&&z.generateMipmaps&&B.generateMipmap(Ce),fe.unbindTexture()},this.initTexture=function(S){$.setTexture2D(S,0),fe.unbindTexture()},this.resetState=function(){m=0,f=0,w=null,fe.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Fe.prototype.isWebGLRenderer=!0;class Og extends Fe{}Og.prototype.isWebGL1Renderer=!0;class mn extends Oe{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}mn.prototype.isScene=!0;class Lr{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sn,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Et()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,n=this.stride;r<n;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Et()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Et()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}Lr.prototype.isInterleavedBuffer=!0;const Je=new A;class yr{constructor(e,t,i,r=!1){this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Je.x=this.getX(t),Je.y=this.getY(t),Je.z=this.getZ(t),Je.applyMatrix4(e),this.setXYZ(t,Je.x,Je.y,Je.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Je.x=this.getX(t),Je.y=this.getY(t),Je.z=this.getZ(t),Je.applyNormalMatrix(e),this.setXYZ(t,Je.x,Je.y,Je.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Je.x=this.getX(t),Je.y=this.getY(t),Je.z=this.getZ(t),Je.transformDirection(e),this.setXYZ(t,Je.x,Je.y,Je.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=n,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[r+n])}return new qe(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new yr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[r+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}yr.prototype.isInterleavedBufferAttribute=!0;class mc extends $e{constructor(e){super(),this.type="SpriteMaterial",this.color=new ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}mc.prototype.isSpriteMaterial=!0;let nr;const Hr=new A,sr=new A,ar=new A,or=new J,kr=new J,gc=new me,Bn=new A,Gr=new A,Hn=new A,Jo=new J,Ys=new J,Zo=new J;class Ug extends Oe{constructor(e){if(super(),this.type="Sprite",nr===void 0){nr=new Ue;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Lr(t,5);nr.setIndex([0,1,2,0,2,3]),nr.setAttribute("position",new yr(i,3,0,!1)),nr.setAttribute("uv",new yr(i,2,3,!1))}this.geometry=nr,this.material=e!==void 0?e:new mc,this.center=new J(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),sr.setFromMatrixScale(this.matrixWorld),gc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ar.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&sr.multiplyScalar(-ar.z);const i=this.material.rotation;let r,n;i!==0&&(n=Math.cos(i),r=Math.sin(i));const a=this.center;kn(Bn.set(-.5,-.5,0),ar,a,sr,r,n),kn(Gr.set(.5,-.5,0),ar,a,sr,r,n),kn(Hn.set(.5,.5,0),ar,a,sr,r,n),Jo.set(0,0),Ys.set(1,0),Zo.set(1,1);let o=e.ray.intersectTriangle(Bn,Gr,Hn,!1,Hr);if(o===null&&(kn(Gr.set(-.5,.5,0),ar,a,sr,r,n),Ys.set(0,1),o=e.ray.intersectTriangle(Bn,Hn,Gr,!1,Hr),o===null))return;const l=e.ray.origin.distanceTo(Hr);l<e.near||l>e.far||t.push({distance:l,point:Hr.clone(),uv:Qe.getUV(Hr,Bn,Gr,Hn,Jo,Ys,Zo,new J),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}Ug.prototype.isSprite=!0;function kn(s,e,t,i,r,n){or.subVectors(s,t).addScalar(.5).multiply(i),r!==void 0?(kr.x=n*or.x-r*or.y,kr.y=r*or.x+n*or.y):kr.copy(or),s.copy(e),s.x+=kr.x,s.y+=kr.y,s.applyMatrix4(gc)}const Ko=new A,Qo=new ze,$o=new ze,Fg=new A,el=new me;class Da extends ke{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new me,this.bindMatrixInverse=new me}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ze,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.x=t.getX(i),e.y=t.getY(i),e.z=t.getZ(i),e.w=t.getW(i);const n=1/e.manhattanLength();n!==1/0?e.multiplyScalar(n):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const i=this.skeleton,r=this.geometry;Qo.fromBufferAttribute(r.attributes.skinIndex,e),$o.fromBufferAttribute(r.attributes.skinWeight,e),Ko.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let n=0;n<4;n++){const a=$o.getComponent(n);if(a!==0){const o=Qo.getComponent(n);el.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Fg.copy(Ko).applyMatrix4(el),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}Da.prototype.isSkinnedMesh=!0;class Na extends Oe{constructor(){super(),this.type="Bone"}}Na.prototype.isBone=!0;class vc extends et{constructor(e=null,t=1,i=1,r,n,a,o,l,c=Ze,h=Ze,u,d){super(null,a,o,l,c,h,r,n,u,d),this.image={data:e,width:t,height:i},this.magFilter=c,this.minFilter=h,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}vc.prototype.isDataTexture=!0;const tl=new me,zg=new me;class Oa{constructor(e=[],t=[]){this.uuid=Et(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new me)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new me;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let n=0,a=e.length;n<a;n++){const o=e[n]?e[n].matrixWorld:zg;tl.multiplyMatrices(o,t[n]),tl.toArray(i,n*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Oa(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Xl(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new vc(t,e,e,st,Jt);return this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const n=e.bones[i];let a=t[n];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",n),a=new Na),this.bones.push(a),this.boneInverses.push(new me().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,n=t.length;r<n;r++){const a=t[r];e.bones.push(a.uuid);const o=i[r];e.boneInverses.push(o.toArray())}return e}}class fa extends qe{constructor(e,t,i,r=1){typeof i=="number"&&(r=i,i=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,i),this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}fa.prototype.isInstancedBufferAttribute=!0;const il=new me,rl=new me,Gn=[],Vr=new ke;class Bg extends ke{constructor(e,t,i){super(e,t),this.instanceMatrix=new fa(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Vr.geometry=this.geometry,Vr.material=this.material,Vr.material!==void 0)for(let n=0;n<r;n++){this.getMatrixAt(n,il),rl.multiplyMatrices(i,il),Vr.matrixWorld=rl,Vr.raycast(e,Gn);for(let a=0,o=Gn.length;a<o;a++){const l=Gn[a];l.instanceId=n,l.object=this,t.push(l)}Gn.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new fa(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}Bg.prototype.isInstancedMesh=!0;class Hi extends $e{constructor(e){super(),this.type="LineBasicMaterial",this.color=new ne(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}}Hi.prototype.isLineBasicMaterial=!0;const nl=new A,sl=new A,al=new me,Js=new Sr,Vn=new Bi;class ds extends Oe{constructor(e=new Ue,t=new Hi){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,n=t.count;r<n;r++)nl.fromBufferAttribute(t,r-1),sl.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=nl.distanceTo(sl);e.setAttribute("lineDistance",new We(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,n=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vn.copy(i.boundingSphere),Vn.applyMatrix4(r),Vn.radius+=n,e.ray.intersectsSphere(Vn)===!1)return;al.copy(r).invert(),Js.copy(e.ray).applyMatrix4(al);const o=n/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new A,h=new A,u=new A,d=new A,p=this.isLineSegments?2:1;if(i.isBufferGeometry){const g=i.index,v=i.attributes.position;if(g!==null){const x=Math.max(0,a.start),m=Math.min(g.count,a.start+a.count);for(let f=x,w=m-1;f<w;f+=p){const y=g.getX(f),b=g.getX(f+1);if(c.fromBufferAttribute(v,y),h.fromBufferAttribute(v,b),Js.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(d);L<e.near||L>e.far||t.push({distance:L,point:u.clone().applyMatrix4(this.matrixWorld),index:f,face:null,faceIndex:null,object:this})}}else{const x=Math.max(0,a.start),m=Math.min(v.count,a.start+a.count);for(let f=x,w=m-1;f<w;f+=p){if(c.fromBufferAttribute(v,f),h.fromBufferAttribute(v,f+1),Js.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(d);y<e.near||y>e.far||t.push({distance:y,point:u.clone().applyMatrix4(this.matrixWorld),index:f,face:null,faceIndex:null,object:this})}}}else i.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=r.length;n<a;n++){const o=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}ds.prototype.isLine=!0;const ol=new A,ll=new A;class gn extends ds{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,n=t.count;r<n;r+=2)ol.fromBufferAttribute(t,r),ll.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ol.distanceTo(ll);e.setAttribute("lineDistance",new We(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}gn.prototype.isLineSegments=!0;class xc extends ds{constructor(e,t){super(e,t),this.type="LineLoop"}}xc.prototype.isLineLoop=!0;class Ua extends $e{constructor(e){super(),this.type="PointsMaterial",this.color=new ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}Ua.prototype.isPointsMaterial=!0;const cl=new me,ma=new Sr,Wn=new Bi,jn=new A;class yc extends Oe{constructor(e=new Ue,t=new Ua){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,n=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wn.copy(i.boundingSphere),Wn.applyMatrix4(r),Wn.radius+=n,e.ray.intersectsSphere(Wn)===!1)return;cl.copy(r).invert(),ma.copy(e.ray).applyMatrix4(cl);const o=n/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o;if(i.isBufferGeometry){const c=i.index,h=i.attributes.position;if(c!==null){const u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let p=u,g=d;p<g;p++){const v=c.getX(p);jn.fromBufferAttribute(h,v),hl(jn,v,l,r,e,t,this)}}else{const u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let p=u,g=d;p<g;p++)jn.fromBufferAttribute(h,p),hl(jn,p,l,r,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=r.length;n<a;n++){const o=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}yc.prototype.isPoints=!0;function hl(s,e,t,i,r,n,a){const o=ma.distanceSqToPoint(s);if(o<t){const l=new A;ma.closestPointToPoint(s,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;n.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Hg extends et{constructor(e,t,i,r,n,a,o,l,c){super(e,t,i,r,n,a,o,l,c),this.format=o!==void 0?o:Kt,this.minFilter=a!==void 0?a:nt,this.magFilter=n!==void 0?n:nt,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;!("requestVideoFrameCallback"in e)&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}Hg.prototype.isVideoTexture=!0;class kg extends et{constructor(e,t,i,r,n,a,o,l,c,h,u,d){super(null,a,o,l,c,h,r,n,u,d),this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}kg.prototype.isCompressedTexture=!0;class Gg extends et{constructor(e,t,i,r,n,a,o,l,c){super(e,t,i,r,n,a,o,l,c),this.needsUpdate=!0}}Gg.prototype.isCanvasTexture=!0;class Vg extends et{constructor(e,t,i,r,n,a,o,l,c,h){if(h=h!==void 0?h:pr,h!==pr&&h!==rn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===pr&&(i=$n),i===void 0&&h===rn&&(i=Zr),super(null,r,n,a,o,l,h,i,c),this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ze,this.minFilter=l!==void 0?l:Ze,this.flipY=!1,this.generateMipmaps=!1}}Vg.prototype.isDepthTexture=!0;class At{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),n=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),n+=i.distanceTo(r),t.push(n),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const n=i.length;let a;t?a=t:a=e*i[n-1];let o=0,l=n-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(n-1);const h=i[r],u=i[r+1]-h,d=(a-h)/u;return(r+d)/(n-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const n=this.getPoint(i),a=this.getPoint(r),o=t||(n.isVector2?new J:new A);return o.copy(a).sub(n).normalize(),o}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new A,r=[],n=[],a=[],o=new A,l=new me;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new A)}n[0]=new A,a[0]=new A;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),n[0].crossVectors(r[0],o),a[0].crossVectors(r[0],n[0]);for(let p=1;p<=e;p++){if(n[p]=n[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(yt(r[p-1].dot(r[p]),-1,1));n[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(r[p],n[p])}if(t===!0){let p=Math.acos(yt(n[0].dot(n[e]),-1,1));p/=e,r[0].dot(o.crossVectors(n[0],n[e]))>0&&(p=-p);for(let g=1;g<=e;g++)n[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),a[g].crossVectors(r[g],n[g])}return{tangents:r,normals:n,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ps extends At{constructor(e=0,t=0,i=1,r=1,n=0,a=Math.PI*2,o=!1,l=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=n,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const i=t||new J,r=Math.PI*2;let n=this.aEndAngle-this.aStartAngle;const a=Math.abs(n)<Number.EPSILON;for(;n<0;)n+=r;for(;n>r;)n-=r;n<Number.EPSILON&&(a?n=0:n=r),this.aClockwise===!0&&!a&&(n===r?n=-r:n=n-r);const o=this.aStartAngle+e*n;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}ps.prototype.isEllipseCurve=!0;class _c extends ps{constructor(e,t,i,r,n,a){super(e,t,i,i,r,n,a),this.type="ArcCurve"}}_c.prototype.isArcCurve=!0;function Fa(){let s=0,e=0,t=0,i=0;function r(n,a,o,l){s=n,e=o,t=-3*n+3*a-2*o-l,i=2*n-2*a+o+l}return{initCatmullRom:function(n,a,o,l,c){r(a,o,c*(o-n),c*(l-a))},initNonuniformCatmullRom:function(n,a,o,l,c,h,u){let d=(a-n)/c-(o-n)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,r(a,o,d,p)},calc:function(n){const a=n*n,o=a*n;return s+e*n+t*a+i*o}}}const Xn=new A,Zs=new Fa,Ks=new Fa,Qs=new Fa;class Mc extends At{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new A){const i=t,r=this.points,n=r.length,a=(n-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/n)+1)*n:l===0&&o===n-1&&(o=n-2,l=1);let c,h;this.closed||o>0?c=r[(o-1)%n]:(Xn.subVectors(r[0],r[1]).add(r[0]),c=Xn);const u=r[o%n],d=r[(o+1)%n];if(this.closed||o+2<n?h=r[(o+2)%n]:(Xn.subVectors(r[n-1],r[n-2]).add(r[n-1]),h=Xn),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(h),p);v<1e-4&&(v=1),g<1e-4&&(g=v),x<1e-4&&(x=v),Zs.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,x),Ks.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,x),Qs.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,x)}else this.curveType==="catmullrom"&&(Zs.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ks.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Qs.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Zs.calc(l),Ks.calc(l),Qs.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new A().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}Mc.prototype.isCatmullRomCurve3=!0;function ul(s,e,t,i,r){const n=(i-e)*.5,a=(r-t)*.5,o=s*s,l=s*o;return(2*t-2*i+n+a)*l+(-3*t+3*i-2*n-a)*o+n*s+t}function Wg(s,e){const t=1-s;return t*t*e}function jg(s,e){return 2*(1-s)*s*e}function Xg(s,e){return s*s*e}function $r(s,e,t,i){return Wg(s,e)+jg(s,t)+Xg(s,i)}function qg(s,e){const t=1-s;return t*t*t*e}function Yg(s,e){const t=1-s;return 3*t*t*s*e}function Jg(s,e){return 3*(1-s)*s*s*e}function Zg(s,e){return s*s*s*e}function en(s,e,t,i,r){return qg(s,e)+Yg(s,t)+Jg(s,i)+Zg(s,r)}class za extends At{constructor(e=new J,t=new J,i=new J,r=new J){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new J){const i=t,r=this.v0,n=this.v1,a=this.v2,o=this.v3;return i.set(en(e,r.x,n.x,a.x,o.x),en(e,r.y,n.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}za.prototype.isCubicBezierCurve=!0;class wc extends At{constructor(e=new A,t=new A,i=new A,r=new A){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new A){const i=t,r=this.v0,n=this.v1,a=this.v2,o=this.v3;return i.set(en(e,r.x,n.x,a.x,o.x),en(e,r.y,n.y,a.y,o.y),en(e,r.z,n.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}wc.prototype.isCubicBezierCurve3=!0;class fs extends At{constructor(e=new J,t=new J){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new J){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const i=t||new J;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}fs.prototype.isLineCurve=!0;class Kg extends At{constructor(e=new A,t=new A){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new A){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ba extends At{constructor(e=new J,t=new J,i=new J){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new J){const i=t,r=this.v0,n=this.v1,a=this.v2;return i.set($r(e,r.x,n.x,a.x),$r(e,r.y,n.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Ba.prototype.isQuadraticBezierCurve=!0;class bc extends At{constructor(e=new A,t=new A,i=new A){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new A){const i=t,r=this.v0,n=this.v1,a=this.v2;return i.set($r(e,r.x,n.x,a.x),$r(e,r.y,n.y,a.y),$r(e,r.z,n.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}bc.prototype.isQuadraticBezierCurve3=!0;class Ha extends At{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new J){const i=t,r=this.points,n=(r.length-1)*e,a=Math.floor(n),o=n-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return i.set(ul(o,l.x,c.x,h.x,u.x),ul(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new J().fromArray(r))}return this}}Ha.prototype.isSplineCurve=!0;var Sc=Object.freeze({__proto__:null,ArcCurve:_c,CatmullRomCurve3:Mc,CubicBezierCurve:za,CubicBezierCurve3:wc,EllipseCurve:ps,LineCurve:fs,LineCurve3:Kg,QuadraticBezierCurve:Ba,QuadraticBezierCurve3:bc,SplineCurve:Ha});class Qg extends At{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new fs(t,e))}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let n=0;for(;n<r.length;){if(r[n]>=i){const a=r[n]-i,o=this.curves[n],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}n++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,n=this.curves;r<n.length;r++){const a=n[r],o=a&&a.isEllipseCurve?e*2:a&&(a.isLineCurve||a.isLineCurve3)?1:a&&a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Sc[r.type]().fromJSON(r))}return this}}class rs extends Qg{constructor(e){super(),this.type="Path",this.currentPoint=new J,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new fs(this.currentPoint.clone(),new J(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const n=new Ba(this.currentPoint.clone(),new J(e,t),new J(i,r));return this.curves.push(n),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,n,a){const o=new za(this.currentPoint.clone(),new J(e,t),new J(i,r),new J(n,a));return this.curves.push(o),this.currentPoint.set(n,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Ha(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,n,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,n,a),this}absarc(e,t,i,r,n,a){return this.absellipse(e,t,i,i,r,n,a),this}ellipse(e,t,i,r,n,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,r,n,a,o,l),this}absellipse(e,t,i,r,n,a,o,l){const c=new ps(e,t,i,r,n,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class gi extends rs{constructor(e){super(e),this.uuid=Et(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new rs().fromJSON(r))}return this}}const $g={triangulate:function(s,e,t=2){const i=e&&e.length,r=i?e[0]*t:s.length;let n=Tc(s,0,r,t,!0);const a=[];if(!n||n.next===n.prev)return a;let o,l,c,h,u,d,p;if(i&&(n=nv(s,e,n,t)),s.length>80*t){o=c=s[0],l=h=s[1];for(let g=t;g<r;g+=t)u=s[g],d=s[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?1/p:0}return on(n,a,t,o,l,p),a}};function Tc(s,e,t,i,r){let n,a;if(r===mv(s,e,t,i)>0)for(n=e;n<t;n+=i)a=dl(n,s[n],s[n+1],a);else for(n=t-i;n>=e;n-=i)a=dl(n,s[n],s[n+1],a);return a&&ms(a,a.next)&&(cn(a),a=a.next),a}function _i(s,e){if(!s)return s;e||(e=s);let t=s,i;do if(i=!1,!t.steiner&&(ms(t,t.next)||je(t.prev,t,t.next)===0)){if(cn(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function on(s,e,t,i,r,n,a){if(!s)return;!a&&n&&cv(s,i,r,n);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,n?tv(s,i,r,n):ev(s)){e.push(l.i/t),e.push(s.i/t),e.push(c.i/t),cn(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=iv(_i(s),e,t),on(s,e,t,i,r,n,2)):a===2&&rv(s,e,t,i,r,n):on(_i(s),e,t,i,r,n,1);break}}}function ev(s){const e=s.prev,t=s,i=s.next;if(je(e,t,i)>=0)return!1;let r=s.next.next;for(;r!==s.prev;){if(ur(e.x,e.y,t.x,t.y,i.x,i.y,r.x,r.y)&&je(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function tv(s,e,t,i){const r=s.prev,n=s,a=s.next;if(je(r,n,a)>=0)return!1;const o=r.x<n.x?r.x<a.x?r.x:a.x:n.x<a.x?n.x:a.x,l=r.y<n.y?r.y<a.y?r.y:a.y:n.y<a.y?n.y:a.y,c=r.x>n.x?r.x>a.x?r.x:a.x:n.x>a.x?n.x:a.x,h=r.y>n.y?r.y>a.y?r.y:a.y:n.y>a.y?n.y:a.y,u=ga(o,l,e,t,i),d=ga(c,h,e,t,i);let p=s.prevZ,g=s.nextZ;for(;p&&p.z>=u&&g&&g.z<=d;){if(p!==s.prev&&p!==s.next&&ur(r.x,r.y,n.x,n.y,a.x,a.y,p.x,p.y)&&je(p.prev,p,p.next)>=0||(p=p.prevZ,g!==s.prev&&g!==s.next&&ur(r.x,r.y,n.x,n.y,a.x,a.y,g.x,g.y)&&je(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;p&&p.z>=u;){if(p!==s.prev&&p!==s.next&&ur(r.x,r.y,n.x,n.y,a.x,a.y,p.x,p.y)&&je(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;g&&g.z<=d;){if(g!==s.prev&&g!==s.next&&ur(r.x,r.y,n.x,n.y,a.x,a.y,g.x,g.y)&&je(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function iv(s,e,t){let i=s;do{const r=i.prev,n=i.next.next;!ms(r,n)&&Ec(r,i,i.next,n)&&ln(r,n)&&ln(n,r)&&(e.push(r.i/t),e.push(i.i/t),e.push(n.i/t),cn(i),cn(i.next),i=s=n),i=i.next}while(i!==s);return _i(i)}function rv(s,e,t,i,r,n){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&dv(a,o)){let l=Ac(a,o);a=_i(a,a.next),l=_i(l,l.next),on(a,e,t,i,r,n),on(l,e,t,i,r,n);return}o=o.next}a=a.next}while(a!==s)}function nv(s,e,t,i){const r=[];let n,a,o,l,c;for(n=0,a=e.length;n<a;n++)o=e[n]*i,l=n<a-1?e[n+1]*i:s.length,c=Tc(s,o,l,i,!1),c===c.next&&(c.steiner=!0),r.push(uv(c));for(r.sort(sv),n=0;n<r.length;n++)av(r[n],t),t=_i(t,t.next);return t}function sv(s,e){return s.x-e.x}function av(s,e){if(e=ov(s,e),e){const t=Ac(e,s);_i(e,e.next),_i(t,t.next)}}function ov(s,e){let t=e;const i=s.x,r=s.y;let n=-1/0,a;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>n){if(n=d,d===i){if(r===t.y)return t;if(r===t.next.y)return t.next}a=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!a)return null;if(i===n)return a;const o=a,l=a.x,c=a.y;let h=1/0,u;t=a;do i>=t.x&&t.x>=l&&i!==t.x&&ur(r<c?i:n,r,l,c,r<c?n:i,r,t.x,t.y)&&(u=Math.abs(r-t.y)/(i-t.x),ln(t,s)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&lv(a,t)))&&(a=t,h=u)),t=t.next;while(t!==o);return a}function lv(s,e){return je(s.prev,s,e.prev)<0&&je(e.next,s,s.next)<0}function cv(s,e,t,i){let r=s;do r.z===null&&(r.z=ga(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==s);r.prevZ.nextZ=null,r.prevZ=null,hv(r)}function hv(s){let e,t,i,r,n,a,o,l,c=1;do{for(t=s,s=null,n=null,a=0;t;){for(a++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,o--):(r=i,i=i.nextZ,l--),n?n.nextZ=r:s=r,r.prevZ=n,n=r;t=i}n.nextZ=null,c*=2}while(a>1);return s}function ga(s,e,t,i,r){return s=32767*(s-t)*r,e=32767*(e-i)*r,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function uv(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function ur(s,e,t,i,r,n,a,o){return(r-a)*(e-o)-(s-a)*(n-o)>=0&&(s-a)*(i-o)-(t-a)*(e-o)>=0&&(t-a)*(n-o)-(r-a)*(i-o)>=0}function dv(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!pv(s,e)&&(ln(s,e)&&ln(e,s)&&fv(s,e)&&(je(s.prev,s,e.prev)||je(s,e.prev,e))||ms(s,e)&&je(s.prev,s,s.next)>0&&je(e.prev,e,e.next)>0)}function je(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function ms(s,e){return s.x===e.x&&s.y===e.y}function Ec(s,e,t,i){const r=Yn(je(s,e,t)),n=Yn(je(s,e,i)),a=Yn(je(t,i,s)),o=Yn(je(t,i,e));return!!(r!==n&&a!==o||r===0&&qn(s,t,e)||n===0&&qn(s,i,e)||a===0&&qn(t,s,i)||o===0&&qn(t,e,i))}function qn(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Yn(s){return s>0?1:s<0?-1:0}function pv(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Ec(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function ln(s,e){return je(s.prev,s,s.next)<0?je(s,e,s.next)>=0&&je(s,s.prev,e)>=0:je(s,e,s.prev)<0||je(s,s.next,e)<0}function fv(s,e){let t=s,i=!1;const r=(s.x+e.x)/2,n=(s.y+e.y)/2;do t.y>n!=t.next.y>n&&t.next.y!==t.y&&r<(t.next.x-t.x)*(n-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==s);return i}function Ac(s,e){const t=new va(s.i,s.x,s.y),i=new va(e.i,e.x,e.y),r=s.next,n=e.prev;return s.next=e,e.prev=s,t.next=r,r.prev=t,i.next=t,t.prev=i,n.next=i,i.prev=n,i}function dl(s,e,t,i){const r=new va(s,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function cn(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function va(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function mv(s,e,t,i){let r=0;for(let n=e,a=t-i;n<t;n+=i)r+=(s[a]-s[n])*(s[n+1]+s[a+1]),a=n;return r}class Qt{static area(e){const t=e.length;let i=0;for(let r=t-1,n=0;n<t;r=n++)i+=e[r].x*e[n].y-e[n].x*e[r].y;return i*.5}static isClockWise(e){return Qt.area(e)<0}static triangulateShape(e,t){const i=[],r=[],n=[];pl(e),fl(i,e);let a=e.length;t.forEach(pl);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,fl(i,t[l]);const o=$g.triangulate(i,r);for(let l=0;l<o.length;l+=3)n.push(o.slice(l,l+3));return n}}function pl(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function fl(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class ki extends Ue{constructor(e=new gi([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],n=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new We(r,3)),this.setAttribute("uv",new We(n,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1;let u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,f=t.UVGenerator!==void 0?t.UVGenerator:gv;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=t.amount);let w,y=!1,b,L,_,O;m&&(w=m.getSpacedPoints(h),y=!0,d=!1,b=m.computeFrenetFrames(h,!1),L=new A,_=new A,O=new A),d||(x=0,p=0,g=0,v=0);const V=o.extractPoints(c);let N=V.shape;const R=V.holes;if(!Qt.isClockWise(N)){N=N.reverse();for(let Y=0,W=R.length;Y<W;Y++){const $=R[Y];Qt.isClockWise($)&&(R[Y]=$.reverse())}}const ee=Qt.triangulateShape(N,R),F=N;for(let Y=0,W=R.length;Y<W;Y++){const $=R[Y];N=N.concat($)}function E(Y,W,$){return W||console.error("THREE.ExtrudeGeometry: vec does not exist"),W.clone().multiplyScalar($).add(Y)}const D=N.length,I=ee.length;function C(Y,W,$){let de,ce,Te;const T=Y.x-W.x,M=Y.y-W.y,G=$.x-Y.x,te=$.y-Y.y,re=T*T+M*M,ue=T*te-M*G;if(Math.abs(ue)>Number.EPSILON){const ye=Math.sqrt(re),we=Math.sqrt(G*G+te*te),be=W.x-M/ye,xe=W.y+T/ye,P=$.x-te/we,le=$.y+G/we,q=((P-be)*te-(le-xe)*G)/(T*te-M*G);de=be+T*q-Y.x,ce=xe+M*q-Y.y;const ge=de*de+ce*ce;if(ge<=2)return new J(de,ce);Te=Math.sqrt(ge/2)}else{let ye=!1;T>Number.EPSILON?G>Number.EPSILON&&(ye=!0):T<-Number.EPSILON?G<-Number.EPSILON&&(ye=!0):Math.sign(M)===Math.sign(te)&&(ye=!0),ye?(de=-M,ce=T,Te=Math.sqrt(re)):(de=T,ce=M,Te=Math.sqrt(re/2))}return new J(de/Te,ce/Te)}const H=[];for(let Y=0,W=F.length,$=W-1,de=Y+1;Y<W;Y++,$++,de++)$===W&&($=0),de===W&&(de=0),H[Y]=C(F[Y],F[$],F[de]);const K=[];let ie,Z=H.concat();for(let Y=0,W=R.length;Y<W;Y++){const $=R[Y];ie=[];for(let de=0,ce=$.length,Te=ce-1,T=de+1;de<ce;de++,Te++,T++)Te===ce&&(Te=0),T===ce&&(T=0),ie[de]=C($[de],$[Te],$[T]);K.push(ie),Z=Z.concat(ie)}for(let Y=0;Y<x;Y++){const W=Y/x,$=p*Math.cos(W*Math.PI/2),de=g*Math.sin(W*Math.PI/2)+v;for(let ce=0,Te=F.length;ce<Te;ce++){const T=E(F[ce],H[ce],de);B(T.x,T.y,-$)}for(let ce=0,Te=R.length;ce<Te;ce++){const T=R[ce];ie=K[ce];for(let M=0,G=T.length;M<G;M++){const te=E(T[M],ie[M],de);B(te.x,te.y,-$)}}}const oe=g+v;for(let Y=0;Y<D;Y++){const W=d?E(N[Y],Z[Y],oe):N[Y];y?(_.copy(b.normals[0]).multiplyScalar(W.x),L.copy(b.binormals[0]).multiplyScalar(W.y),O.copy(w[0]).add(_).add(L),B(O.x,O.y,O.z)):B(W.x,W.y,0)}for(let Y=1;Y<=h;Y++)for(let W=0;W<D;W++){const $=d?E(N[W],Z[W],oe):N[W];y?(_.copy(b.normals[Y]).multiplyScalar($.x),L.copy(b.binormals[Y]).multiplyScalar($.y),O.copy(w[Y]).add(_).add(L),B(O.x,O.y,O.z)):B($.x,$.y,u/h*Y)}for(let Y=x-1;Y>=0;Y--){const W=Y/x,$=p*Math.cos(W*Math.PI/2),de=g*Math.sin(W*Math.PI/2)+v;for(let ce=0,Te=F.length;ce<Te;ce++){const T=E(F[ce],H[ce],de);B(T.x,T.y,u+$)}for(let ce=0,Te=R.length;ce<Te;ce++){const T=R[ce];ie=K[ce];for(let M=0,G=T.length;M<G;M++){const te=E(T[M],ie[M],de);y?B(te.x,te.y+w[h-1].y,w[h-1].x+$):B(te.x,te.y,u+$)}}}j(),Q();function j(){const Y=r.length/3;if(d){let W=0,$=D*W;for(let de=0;de<I;de++){const ce=ee[de];Me(ce[2]+$,ce[1]+$,ce[0]+$)}W=h+x*2,$=D*W;for(let de=0;de<I;de++){const ce=ee[de];Me(ce[0]+$,ce[1]+$,ce[2]+$)}}else{for(let W=0;W<I;W++){const $=ee[W];Me($[2],$[1],$[0])}for(let W=0;W<I;W++){const $=ee[W];Me($[0]+D*h,$[1]+D*h,$[2]+D*h)}}i.addGroup(Y,r.length/3-Y,0)}function Q(){const Y=r.length/3;let W=0;he(F,W),W+=F.length;for(let $=0,de=R.length;$<de;$++){const ce=R[$];he(ce,W),W+=ce.length}i.addGroup(Y,r.length/3-Y,1)}function he(Y,W){let $=Y.length;for(;--$>=0;){const de=$;let ce=$-1;ce<0&&(ce=Y.length-1);for(let Te=0,T=h+x*2;Te<T;Te++){const M=D*Te,G=D*(Te+1),te=W+de+M,re=W+ce+M,ue=W+ce+G,ye=W+de+G;Se(te,re,ue,ye)}}}function B(Y,W,$){l.push(Y),l.push(W),l.push($)}function Me(Y,W,$){ae(Y),ae(W),ae($);const de=r.length/3,ce=f.generateTopUV(i,r,de-3,de-2,de-1);fe(ce[0]),fe(ce[1]),fe(ce[2])}function Se(Y,W,$,de){ae(Y),ae(W),ae(de),ae(W),ae($),ae(de);const ce=r.length/3,Te=f.generateSideWallUV(i,r,ce-6,ce-3,ce-2,ce-1);fe(Te[0]),fe(Te[1]),fe(Te[3]),fe(Te[1]),fe(Te[2]),fe(Te[3])}function ae(Y){r.push(l[Y*3+0]),r.push(l[Y*3+1]),r.push(l[Y*3+2])}function fe(Y){n.push(Y.x),n.push(Y.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return vv(t,i,e)}static fromJSON(e,t){const i=[];for(let n=0,a=e.shapes.length;n<a;n++){const o=t[e.shapes[n]];i.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Sc[r.type]().fromJSON(r)),new ki(i,e.options)}}const gv={generateTopUV:function(s,e,t,i,r){const n=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[r*3],h=e[r*3+1];return[new J(n,a),new J(o,l),new J(c,h)]},generateSideWallUV:function(s,e,t,i,r,n){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[r*3],p=e[r*3+1],g=e[r*3+2],v=e[n*3],x=e[n*3+1],m=e[n*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new J(a,1-l),new J(c,1-u),new J(d,1-g),new J(v,1-m)]:[new J(o,1-l),new J(h,1-u),new J(p,1-g),new J(x,1-m)]}};function vv(s,e,t){if(t.shapes=[],Array.isArray(s))for(let i=0,r=s.length;i<r;i++){const n=s[i];t.shapes.push(n.uuid)}else t.shapes.push(s.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ka extends Ue{constructor(e=new gi([new J(0,.5),new J(-.5,-.5),new J(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],n=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new We(r,3)),this.setAttribute("normal",new We(n,3)),this.setAttribute("uv",new We(a,2));function c(h){const u=r.length/3,d=h.extractPoints(t);let p=d.shape;const g=d.holes;Qt.isClockWise(p)===!1&&(p=p.reverse());for(let x=0,m=g.length;x<m;x++){const f=g[x];Qt.isClockWise(f)===!0&&(g[x]=f.reverse())}const v=Qt.triangulateShape(p,g);for(let x=0,m=g.length;x<m;x++){const f=g[x];p=p.concat(f)}for(let x=0,m=p.length;x<m;x++){const f=p[x];r.push(f.x,f.y,0),n.push(0,0,1),a.push(f.x,f.y)}for(let x=0,m=v.length;x<m;x++){const f=v[x],w=f[0]+u,y=f[1]+u,b=f[2]+u;i.push(w,y,b),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return xv(t,e)}static fromJSON(e,t){const i=[];for(let r=0,n=e.shapes.length;r<n;r++){const a=t[e.shapes[r]];i.push(a)}return new ka(i,e.curveSegments)}}function xv(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,i=s.length;t<i;t++){const r=s[t];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e}class yv extends $e{constructor(e){super(),this.type="ShadowMaterial",this.color=new ne(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}yv.prototype.isShadowMaterial=!0;class Rr extends $e{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}Rr.prototype.isMeshStandardMaterial=!0;class Gi extends Rr{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new J(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=.01,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ne(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}Gi.prototype.isMeshPhysicalMaterial=!0;class _v extends $e{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new ne(16777215),this.specular=new ne(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=as,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}_v.prototype.isMeshPhongMaterial=!0;class Mv extends $e{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ne(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Mv.prototype.isMeshToonMaterial=!0;class wv extends $e{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}wv.prototype.isMeshNormalMaterial=!0;class bv extends $e{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=as,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}bv.prototype.isMeshLambertMaterial=!0;class Sv extends $e{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ne(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}}Sv.prototype.isMeshMatcapMaterial=!0;class Tv extends Hi{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}Tv.prototype.isLineDashedMaterial=!0;const Ve={arraySlice:function(s,e,t){return Ve.isTypedArray(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)},convertArray:function(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)},isTypedArray:function(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)},getKeyframeOrder:function(s){function e(r,n){return s[r]-s[n]}const t=s.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i},sortedArray:function(s,e,t){const i=s.length,r=new s.constructor(i);for(let n=0,a=0;a!==i;++n){const o=t[n]*e;for(let l=0;l!==e;++l)r[a++]=s[o+l]}return r},flattenJSON:function(s,e,t,i){let r=1,n=s[0];for(;n!==void 0&&n[i]===void 0;)n=s[r++];if(n===void 0)return;let a=n[i];if(a!==void 0)if(Array.isArray(a))do a=n[i],a!==void 0&&(e.push(n.time),t.push.apply(t,a)),n=s[r++];while(n!==void 0);else if(a.toArray!==void 0)do a=n[i],a!==void 0&&(e.push(n.time),a.toArray(t,t.length)),n=s[r++];while(n!==void 0);else do a=n[i],a!==void 0&&(e.push(n.time),t.push(a)),n=s[r++];while(n!==void 0)},subclip:function(s,e,t,i,r=30){const n=s.clone();n.name=e;const a=[];for(let l=0;l<n.tracks.length;++l){const c=n.tracks[l],h=c.getValueSize(),u=[],d=[];for(let p=0;p<c.times.length;++p){const g=c.times[p]*r;if(!(g<t||g>=i)){u.push(c.times[p]);for(let v=0;v<h;++v)d.push(c.values[p*h+v])}}u.length!==0&&(c.times=Ve.convertArray(u,c.times.constructor),c.values=Ve.convertArray(d,c.values.constructor),a.push(c))}n.tracks=a;let o=1/0;for(let l=0;l<n.tracks.length;++l)o>n.tracks[l].times[0]&&(o=n.tracks[l].times[0]);for(let l=0;l<n.tracks.length;++l)n.tracks[l].shift(-1*o);return n.resetDuration(),n},makeClipAdditive:function(s,e=0,t=s,i=30){i<=0&&(i=30);const r=t.tracks.length,n=e/i;for(let a=0;a<r;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=s.tracks.find(function(m){return m.name===o.name&&m.ValueTypeName===l});if(c===void 0)continue;let h=0;const u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0;const p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=p/3);const g=o.times.length-1;let v;if(n<=o.times[0]){const m=h,f=u-h;v=Ve.arraySlice(o.values,m,f)}else if(n>=o.times[g]){const m=g*u+h,f=m+u-h;v=Ve.arraySlice(o.values,m,f)}else{const m=o.createInterpolant(),f=h,w=u-h;m.evaluate(n),v=Ve.arraySlice(m.resultBuffer,f,w)}l==="quaternion"&&new gt().fromArray(v).normalize().conjugate().toArray(v);const x=c.times.length;for(let m=0;m<x;++m){const f=m*p+d;if(l==="quaternion")gt.multiplyQuaternionsFlat(c.values,f,v,0,c.values,f);else{const w=p-d*2;for(let y=0;y<w;++y)c.values[f+y]-=v[y]}}}return s.blendMode=kl,s}};class $t{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],n=t[i-1];e:{t:{let a;i:{r:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<n)break r;return i=t.length,this._cachedIndex=i,this.afterEnd_(i-1,e,n)}if(i===o)break;if(n=r,r=t[++i],e<r)break t}a=t.length;break i}if(!(e>=n)){const o=t[1];e<o&&(i=2,n=o);for(let l=i-2;;){if(n===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,r);if(i===l)break;if(r=n,n=t[--i-1],e>=n)break t}a=i,i=0;break i}break e}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],n=t[i-1],n===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,r);if(r===void 0)return i=t.length,this._cachedIndex=i,this.afterEnd_(i-1,n,e)}this._cachedIndex=i,this.intervalChanged_(i,n,r)}return this.interpolate_(i,n,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,n=e*r;for(let a=0;a!==r;++a)t[a]=i[n+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}$t.prototype.beforeStart_=$t.prototype.copySampleValue_;$t.prototype.afterEnd_=$t.prototype.copySampleValue_;class Ev extends $t{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cr,endingEnd:cr}}intervalChanged_(e,t,i){const r=this.parameterPositions;let n=e-2,a=e+1,o=r[n],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case hr:n=e,o=2*t-i;break;case es:n=r.length-2,o=t+r[n]-r[n+1];break;default:n=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case hr:a=e,l=2*i-t;break;case es:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=n*h,this._offsetNext=a*h}interpolate_(e,t,i,r){const n=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-t)/(r-t),v=g*g,x=v*g,m=-d*x+2*d*v-d*g,f=(1+d)*x+(-1.5-2*d)*v+(-.5+d)*g+1,w=(-1-p)*x+(1.5+p)*v+.5*g,y=p*x-p*v;for(let b=0;b!==o;++b)n[b]=m*a[h+b]+f*a[c+b]+w*a[l+b]+y*a[u+b];return n}}class Lc extends $t{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const n=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(r-t),u=1-h;for(let d=0;d!==o;++d)n[d]=a[c+d]*u+a[l+d]*h;return n}}class Av extends $t{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class zt{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ve.convertArray(t,this.TimeBufferType),this.values=Ve.convertArray(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ve.convertArray(e.times,Array),values:Ve.convertArray(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Av(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Lc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ev(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case nn:t=this.InterpolantFactoryMethodDiscrete;break;case vr:t=this.InterpolantFactoryMethodLinear;break;case ys:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return nn;case this.InterpolantFactoryMethodLinear:return vr;case this.InterpolantFactoryMethodSmooth:return ys}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let n=0,a=r-1;for(;n!==r&&i[n]<e;)++n;for(;a!==-1&&i[a]>t;)--a;if(++a,n!==0||a!==r){n>=a&&(a=Math.max(a,1),n=a-1);const o=this.getValueSize();this.times=Ve.arraySlice(i,n,a),this.values=Ve.arraySlice(this.values,n*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,n=i.length;n===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==n;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&Ve.isTypedArray(r))for(let o=0,l=r.length;o!==l;++o){const c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=Ve.arraySlice(this.times),t=Ve.arraySlice(this.values),i=this.getValueSize(),r=this.getInterpolation()===ys,n=e.length-1;let a=1;for(let o=1;o<n;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(r)l=!0;else{const u=o*i,d=u-i,p=u+i;for(let g=0;g!==i;++g){const v=t[u+g];if(v!==t[d+g]||v!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*i,d=a*i;for(let p=0;p!==i;++p)t[d+p]=t[u+p]}++a}}if(n>0){e[a]=e[n];for(let o=n*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=Ve.arraySlice(e,0,a),this.values=Ve.arraySlice(t,0,a*i)):(this.times=e,this.values=t),this}clone(){const e=Ve.arraySlice(this.times,0),t=Ve.arraySlice(this.values,0),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}zt.prototype.TimeBufferType=Float32Array;zt.prototype.ValueBufferType=Float32Array;zt.prototype.DefaultInterpolation=vr;class Cr extends zt{}Cr.prototype.ValueTypeName="bool";Cr.prototype.ValueBufferType=Array;Cr.prototype.DefaultInterpolation=nn;Cr.prototype.InterpolantFactoryMethodLinear=void 0;Cr.prototype.InterpolantFactoryMethodSmooth=void 0;class Rc extends zt{}Rc.prototype.ValueTypeName="color";class hn extends zt{}hn.prototype.ValueTypeName="number";class Lv extends $t{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const n=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t);let c=e*o;for(let h=c+o;c!==h;c+=4)gt.slerpFlat(n,0,a,c-o,a,c,l);return n}}class Oi extends zt{InterpolantFactoryMethodLinear(e){return new Lv(this.times,this.values,this.getValueSize(),e)}}Oi.prototype.ValueTypeName="quaternion";Oi.prototype.DefaultInterpolation=vr;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;class Pr extends zt{}Pr.prototype.ValueTypeName="string";Pr.prototype.ValueBufferType=Array;Pr.prototype.DefaultInterpolation=nn;Pr.prototype.InterpolantFactoryMethodLinear=void 0;Pr.prototype.InterpolantFactoryMethodSmooth=void 0;class un extends zt{}un.prototype.ValueTypeName="vector";class xa{constructor(e,t=-1,i,r=Sa){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Et(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(Cv(i[a]).scale(r));const n=new this(e.name,e.duration,t,e.blendMode);return n.uuid=e.uuid,n}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let n=0,a=i.length;n!==a;++n)t.push(zt.toJSON(i[n]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const n=t.length,a=[];for(let o=0;o<n;o++){let l=[],c=[];l.push((o+n-1)%n,o,(o+1)%n),c.push(0,1,0);const h=Ve.getKeyframeOrder(l);l=Ve.sortedArray(l,1,h),c=Ve.sortedArray(c,1,h),!r&&l[0]===0&&(l.push(n),c.push(c[0])),a.push(new hn(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},n=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(n);if(h&&h.length>1){const u=h[1];let d=r[u];d||(r[u]=d=[]),d.push(c)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,u,d,p,g){if(d.length!==0){const v=[],x=[];Ve.flattenJSON(d,v,x,p),v.length!==0&&g.push(new h(u,v,x))}},r=[],n=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const u=c[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const d={};let p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let g=0;g<u[p].morphTargets.length;g++)d[u[p].morphTargets[g]]=-1;for(const g in d){const v=[],x=[];for(let m=0;m!==u[p].morphTargets.length;++m){const f=u[p];v.push(f.time),x.push(f.morphTarget===g?1:0)}r.push(new hn(".morphTargetInfluence["+g+"]",v,x))}l=d.length*(a||1)}else{const d=".bones["+t[h].name+"]";i(un,d+".position",u,"pos",r),i(Oi,d+".quaternion",u,"rot",r),i(un,d+".scale",u,"scl",r)}}return r.length===0?null:new this(n,l,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const n=this.tracks[i];t=Math.max(t,n.times[n.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Rv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return hn;case"vector":case"vector2":case"vector3":case"vector4":return un;case"color":return Rc;case"quaternion":return Oi;case"bool":case"boolean":return Cr;case"string":return Pr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Cv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Rv(s.type);if(s.times===void 0){const t=[],i=[];Ve.flattenJSON(s.keys,t,i,"value"),s.times=t,s.values=i}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const _r={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Cc{constructor(e,t,i){const r=this;let n=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,n===!1&&r.onStart!==void 0&&r.onStart(h,a,o),n=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(n=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const Pv=new Cc;class Bt{constructor(e){this.manager=e!==void 0?e:Pv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,n){i.load(e,r,t,n)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Xt={};class gs extends Bt{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=_r.get(e);if(n!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(n),this.manager.itemEnd(e)},0),n;if(Xt[e]!==void 0){Xt[e].push({onLoad:t,onProgress:i,onError:r});return}Xt[e]=[],Xt[e].push({onLoad:t,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"});fetch(a).then(o=>{if(o.status===200||o.status===0){o.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received.");const l=Xt[e],c=o.body.getReader(),h=o.headers.get("Content-Length"),u=h?parseInt(h):0,d=u!==0;let p=0;return new ReadableStream({start(g){v();function v(){c.read().then(({done:x,value:m})=>{if(x)g.close();else{p+=m.byteLength;const f=new ProgressEvent("progress",{lengthComputable:d,loaded:p,total:u});for(let w=0,y=l.length;w<y;w++){const b=l[w];b.onProgress&&b.onProgress(f)}g.enqueue(m),v()}})}}})}else throw Error(`fetch for "${o.url}" responded with ${o.status}: ${o.statusText}`)}).then(o=>{const l=new Response(o);switch(this.responseType){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(c=>new DOMParser().parseFromString(c,this.mimeType));case"json":return l.json();default:return l.text()}}).then(o=>{_r.add(e,o);const l=Xt[e];delete Xt[e];for(let c=0,h=l.length;c<h;c++){const u=l[c];u.onLoad&&u.onLoad(o)}this.manager.itemEnd(e)}).catch(o=>{const l=Xt[e];delete Xt[e];for(let c=0,h=l.length;c<h;c++){const u=l[c];u.onError&&u.onError(o)}this.manager.itemError(e),this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Pc extends Bt{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=this,a=_r.get(e);if(a!==void 0)return n.manager.itemStart(e),setTimeout(function(){t&&t(a),n.manager.itemEnd(e)},0),a;const o=ls("img");function l(){h(),_r.add(e,this),t&&t(this),n.manager.itemEnd(e)}function c(u){h(),r&&r(u),n.manager.itemError(e),n.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),n.manager.itemStart(e),o.src=e,o}}class Ic extends Bt{constructor(e){super(e)}load(e,t,i,r){const n=new cs,a=new Pc(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(h){n.images[c]=h,o++,o===6&&(n.needsUpdate=!0,t&&t(n))},void 0,r)}for(let c=0;c<e.length;++c)l(c);return n}}class vs extends Bt{constructor(e){super(e)}load(e,t,i,r){const n=new et,a=new Pc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){n.image=o,n.needsUpdate=!0,t!==void 0&&t(n)},i,r),n}}class Ft extends Oe{constructor(e,t=1){super(),this.type="Light",this.color=new ne(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}Ft.prototype.isLight=!0;class Iv extends Ft{constructor(e,t,i){super(e,i),this.type="HemisphereLight",this.position.copy(Oe.DefaultUp),this.updateMatrix(),this.groundColor=new ne(t)}copy(e){return Ft.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}Iv.prototype.isHemisphereLight=!0;const ml=new me,gl=new A,vl=new A;class Ga{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hs,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;gl.setFromMatrixPosition(e.matrixWorld),t.position.copy(gl),vl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vl),t.updateMatrixWorld(),ml.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ml),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Dc extends Ga{constructor(){super(new ut(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,i=an*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,n=e.distance||t.far;(i!==t.fov||r!==t.aspect||n!==t.far)&&(t.fov=i,t.aspect=r,t.far=n,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}Dc.prototype.isSpotLightShadow=!0;class Nc extends Ft{constructor(e,t,i=0,r=Math.PI/3,n=0,a=1){super(e,t),this.type="SpotLight",this.position.copy(Oe.DefaultUp),this.updateMatrix(),this.target=new Oe,this.distance=i,this.angle=r,this.penumbra=n,this.decay=a,this.shadow=new Dc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Nc.prototype.isSpotLight=!0;const xl=new me,Wr=new A,$s=new A;class Oc extends Ga{constructor(){super(new ut(90,1,.5,500)),this._frameExtents=new J(4,2),this._viewportCount=6,this._viewports=[new ze(2,1,1,1),new ze(0,1,1,1),new ze(3,1,1,1),new ze(1,1,1,1),new ze(3,0,1,1),new ze(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,n=e.distance||i.far;n!==i.far&&(i.far=n,i.updateProjectionMatrix()),Wr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Wr),$s.copy(i.position),$s.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt($s),i.updateMatrixWorld(),r.makeTranslation(-Wr.x,-Wr.y,-Wr.z),xl.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xl)}}Oc.prototype.isPointLightShadow=!0;class Uc extends Ft{constructor(e,t,i=0,r=1){super(e,t),this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Oc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}Uc.prototype.isPointLight=!0;class Fc extends Ga{constructor(){super(new Mi(-5,5,5,-5,.5,500))}}Fc.prototype.isDirectionalLightShadow=!0;class zc extends Ft{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(Oe.DefaultUp),this.updateMatrix(),this.target=new Oe,this.shadow=new Fc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}zc.prototype.isDirectionalLight=!0;class Bc extends Ft{constructor(e,t){super(e,t),this.type="AmbientLight"}}Bc.prototype.isAmbientLight=!0;class Dv extends Ft{constructor(e,t,i=10,r=10){super(e,t),this.type="RectAreaLight",this.width=i,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}Dv.prototype.isRectAreaLight=!0;class Hc{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new A)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const i=e.x,r=e.y,n=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*r),t.addScaledVector(a[2],.488603*n),t.addScaledVector(a[3],.488603*i),t.addScaledVector(a[4],1.092548*(i*r)),t.addScaledVector(a[5],1.092548*(r*n)),t.addScaledVector(a[6],.315392*(3*n*n-1)),t.addScaledVector(a[7],1.092548*(i*n)),t.addScaledVector(a[8],.546274*(i*i-r*r)),t}getIrradianceAt(e,t){const i=e.x,r=e.y,n=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*r),t.addScaledVector(a[2],2*.511664*n),t.addScaledVector(a[3],2*.511664*i),t.addScaledVector(a[4],2*.429043*i*r),t.addScaledVector(a[5],2*.429043*r*n),t.addScaledVector(a[6],.743125*n*n-.247708),t.addScaledVector(a[7],2*.429043*i*n),t.addScaledVector(a[8],.429043*(i*i-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){const i=e.x,r=e.y,n=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*n,t[3]=.488603*i,t[4]=1.092548*i*r,t[5]=1.092548*r*n,t[6]=.315392*(3*n*n-1),t[7]=1.092548*i*n,t[8]=.546274*(i*i-r*r)}}Hc.prototype.isSphericalHarmonics3=!0;class Va extends Ft{constructor(e=new Hc,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}Va.prototype.isLightProbe=!0;class vi{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Nv extends Ue{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}Nv.prototype.isInstancedBufferGeometry=!0;class kc extends Bt{constructor(e){super(e),typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=this,a=_r.get(e);if(a!==void 0)return n.manager.itemStart(e),setTimeout(function(){t&&t(a),n.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(n.options,{colorSpaceConversion:"none"}))}).then(function(l){_r.add(e,l),t&&t(l),n.manager.itemEnd(e)}).catch(function(l){r&&r(l),n.manager.itemError(e),n.manager.itemEnd(e)}),n.manager.itemStart(e)}}kc.prototype.isImageBitmapLoader=!0;let Jn;const Ov={getContext:function(){return Jn===void 0&&(Jn=new(window.AudioContext||window.webkitAudioContext)),Jn},setContext:function(s){Jn=s}};class Uv extends Bt{constructor(e){super(e)}load(e,t,i,r){const n=this,a=new gs(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{const l=o.slice(0);Ov.getContext().decodeAudioData(l,function(c){t(c)})}catch(l){r?r(l):console.error(l),n.manager.itemError(e)}},i,r)}}class Fv extends Va{constructor(e,t,i=1){super(void 0,i);const r=new ne().set(e),n=new ne().set(t),a=new A(r.r,r.g,r.b),o=new A(n.r,n.g,n.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(a).add(o).multiplyScalar(l),this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c)}}Fv.prototype.isHemisphereLightProbe=!0;class zv extends Va{constructor(e,t=1){super(void 0,t);const i=new ne().set(e);this.sh.coefficients[0].set(i.r,i.g,i.b).multiplyScalar(2*Math.sqrt(Math.PI))}}zv.prototype.isAmbientLightProbe=!0;class Gc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=yl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=yl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function yl(){return(typeof performance>"u"?Date:performance).now()}class Bv extends Oe{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class Hv{constructor(e,t,i){this.binding=e,this.valueSize=i;let r,n,a;switch(t){case"quaternion":r=this._slerp,n=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":r=this._select,n=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:r=this._lerp,n=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=n,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,r=this.valueSize,n=e*r+r;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==r;++o)i[n+o]=i[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(i,n,0,o,r)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,r=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,r=e*t+t,n=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,n<1){const l=t*this._origIndex;this._mixBufferRegion(i,r,l,1-n,t)}a>0&&this._mixBufferRegionAdditive(i,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,r=i*this._origIndex;e.getValue(t,r);for(let n=i,a=r;n!==a;++n)t[n]=t[r+n%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,r,n){if(r>=.5)for(let a=0;a!==n;++a)e[t+a]=e[i+a]}_slerp(e,t,i,r){gt.slerpFlat(e,t,e,t,e,i,r)}_slerpAdditive(e,t,i,r,n){const a=this._workIndex*n;gt.multiplyQuaternionsFlat(e,a,e,t,e,i),gt.slerpFlat(e,t,e,t,e,a,r)}_lerp(e,t,i,r,n){const a=1-r;for(let o=0;o!==n;++o){const l=t+o;e[l]=e[l]*a+e[i+o]*r}}_lerpAdditive(e,t,i,r,n){for(let a=0;a!==n;++a){const o=t+a;e[o]=e[o]+e[i+a]*r}}}const Wa="\\[\\]\\.:\\/",kv=new RegExp("["+Wa+"]","g"),ja="[^"+Wa+"]",Gv="[^"+Wa.replace("\\.","")+"]",Vv=/((?:WC+[\/:])*)/.source.replace("WC",ja),Wv=/(WCOD+)?/.source.replace("WCOD",Gv),jv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ja),Xv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ja),qv=new RegExp("^"+Vv+Wv+jv+Xv+"$"),Yv=["material","materials","bones"];class Jv{constructor(e,t,i){const r=i||Ne.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,n=i.length;r!==n;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Ne{constructor(e,t,i){this.path=t,this.parsedPath=i||Ne.parseTrackName(t),this.node=Ne.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Ne.Composite(e,t,i):new Ne(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(kv,"")}static parseTrackName(e){const t=qv.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const n=i.nodeName.substring(r+1);Yv.indexOf(n)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=n)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(n){for(let a=0;a<n.length;a++){const o=n[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let n=t.propertyIndex;if(e||(e=Ne.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[r];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[n]!==void 0&&(n=e.morphTargetDictionary[n])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=n}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ne.Composite=Jv;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Zv{constructor(e,t,i=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=r;const n=t.tracks,a=n.length,o=new Array(a),l={endingStart:cr,endingEnd:cr};for(let c=0;c!==a;++c){const h=n[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Cu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const r=this._clip.duration,n=e._clip.duration,a=n/r,o=r/n;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const r=this._mixer,n=r.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=n,l[1]=n+i,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,r){if(!this.enabled){this._updateWeight(e);return}const n=this._startTime;if(n!==null){const l=(e-n)*i;if(l<0||i===0)return;this._startTime=null,t=i*l}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case kl:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case Sa:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(r,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let r=this.time+e,n=this._loopCount;const a=i===Pu;if(e===0)return n===-1?r:a&&(n&1)===1?t-r:r;if(i===Ru){n===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(n===-1&&(e>=0?(n=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),r>=t||r<0){const o=Math.floor(r/t);r-=t*o,n+=Math.abs(o);const l=this.repetitions-n;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=n,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=r;if(a&&(n&1)===1)return t-r}return r}_setEndings(e,t,i){const r=this._interpolantSettings;i?(r.endingStart=hr,r.endingEnd=hr):(e?r.endingStart=this.zeroSlopeAtStart?hr:cr:r.endingStart=es,t?r.endingEnd=this.zeroSlopeAtEnd?hr:cr:r.endingEnd=es)}_scheduleFading(e,t,i){const r=this._mixer,n=r.time;let a=this._weightInterpolant;a===null&&(a=r._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=n,l[0]=t,o[1]=n+e,l[1]=i,this}}class Kv extends zi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,r=e._clip.tracks,n=r.length,a=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==n;++u){const d=r[u],p=d.name;let g=h[p];if(g!==void 0)a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,p));continue}const v=t&&t._propertyBindings[u].binding.parsedPath;g=new Hv(Ne.create(i,p,v),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,p),a[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,r=e._clip.uuid,n=this._actionsByClip[r];this._bindAction(e,n&&n.knownActions[0]),this._addInactiveAction(e,r,i)}const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const n=t[i];n.useCount++===0&&(this._lendBinding(n),n.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const n=t[i];--n.useCount===0&&(n.restoreOriginalState(),this._takeBackBinding(n))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const r=this._actions,n=this._actionsByClip;let a=n[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,n[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=r.length,r.push(e),a.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],r=e._cacheIndex;i._cacheIndex=r,t[r]=i,t.pop(),e._cacheIndex=null;const n=e._clip.uuid,a=this._actionsByClip,o=a[n],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[n],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const n=t[i];--n.referenceCount===0&&this._removeInactiveBinding(n)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,r=this._nActiveActions++,n=t[r];e._cacheIndex=r,t[r]=e,n._cacheIndex=i,t[i]=n}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,r=--this._nActiveActions,n=t[r];e._cacheIndex=r,t[r]=e,n._cacheIndex=i,t[i]=n}_addInactiveBinding(e,t,i){const r=this._bindingsByRootAndName,n=this._bindings;let a=r[t];a===void 0&&(a={},r[t]=a),a[i]=e,e._cacheIndex=n.length,n.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,r=i.rootNode.uuid,n=i.path,a=this._bindingsByRootAndName,o=a[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[n],Object.keys(o).length===0&&delete a[r]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,r=this._nActiveBindings++,n=t[r];e._cacheIndex=r,t[r]=e,n._cacheIndex=i,t[i]=n}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,r=--this._nActiveBindings,n=t[r];e._cacheIndex=r,t[r]=e,n._cacheIndex=i,t[i]=n}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new Lc(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,r=--this._nActiveControlInterpolants,n=t[r];e.__cacheIndex=r,t[r]=e,n.__cacheIndex=i,t[i]=n}clipAction(e,t,i){const r=t||this._root,n=r.uuid;let a=typeof e=="string"?xa.findByName(r,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(i===void 0&&(a!==null?i=a.blendMode:i=Sa),l!==void 0){const u=l.actionByRoot[n];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new Zv(this,a,t,i);return this._bindAction(h,c),this._addInactiveAction(h,o,n),h}existingAction(e,t){const i=t||this._root,r=i.uuid,n=typeof e=="string"?xa.findByName(i,e):e,a=n?n.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,r=this.time+=e,n=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(r,e,n,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,r=this._actionsByClip,n=r[i];if(n!==void 0){const a=n.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const a in i){const o=i[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const r=this._bindingsByRootAndName,n=r[t];if(n!==void 0)for(const a in n){const o=n[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}Kv.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class Qv extends Lr{constructor(e,t,i=1){super(e,t),this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}Qv.prototype.isInstancedInterleavedBuffer=!0;const ci=new A,Zn=new me,ea=new me;class $v extends gn{constructor(e){const t=Vc(e),i=new Ue,r=[],n=[],a=new ne(0,0,1),o=new ne(0,1,0);for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),n.push(a.r,a.g,a.b),n.push(o.r,o.g,o.b))}i.setAttribute("position",new We(r,3)),i.setAttribute("color",new We(n,3));const l=new Hi({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,l),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,i=this.geometry,r=i.getAttribute("position");ea.copy(this.root.matrixWorld).invert();for(let n=0,a=0;n<t.length;n++){const o=t[n];o.parent&&o.parent.isBone&&(Zn.multiplyMatrices(ea,o.matrixWorld),ci.setFromMatrixPosition(Zn),r.setXYZ(a,ci.x,ci.y,ci.z),Zn.multiplyMatrices(ea,o.parent.matrixWorld),ci.setFromMatrixPosition(Zn),r.setXYZ(a+1,ci.x,ci.y,ci.z),a+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function Vc(s){const e=[];s&&s.isBone&&e.push(s);for(let t=0;t<s.children.length;t++)e.push.apply(e,Vc(s.children[t]));return e}class e0 extends gn{constructor(e=10,t=10,i=4473924,r=8947848){i=new ne(i),r=new ne(r);const n=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,p=0,g=-o;d<=t;d++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const v=d===n?i:r;v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3}const h=new Ue;h.setAttribute("position",new We(l,3)),h.setAttribute("color",new We(c,3));const u=new Hi({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}}class t0 extends gn{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Ue;r.setAttribute("position",new We(t,3)),r.setAttribute("color",new We(i,3));const n=new Hi({vertexColors:!0,toneMapped:!1});super(r,n),this.type="AxesHelper"}setColors(e,t,i){const r=new ne,n=this.geometry.attributes.color.array;return r.set(e),r.toArray(n,0),r.toArray(n,3),r.set(t),r.toArray(n,6),r.toArray(n,9),r.set(i),r.toArray(n,12),r.toArray(n,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class i0{constructor(){this.type="ShapePath",this.color=new ne,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new rs,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,n,a){return this.currentPath.bezierCurveTo(e,t,i,r,n,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e,t){function i(f){const w=[];for(let y=0,b=f.length;y<b;y++){const L=f[y],_=new gi;_.curves=L.curves,w.push(_)}return w}function r(f,w){const y=w.length;let b=!1;for(let L=y-1,_=0;_<y;L=_++){let O=w[L],V=w[_],N=V.x-O.x,R=V.y-O.y;if(Math.abs(R)>Number.EPSILON){if(R<0&&(O=w[_],N=-N,V=w[L],R=-R),f.y<O.y||f.y>V.y)continue;if(f.y===O.y){if(f.x===O.x)return!0}else{const ee=R*(f.x-O.x)-N*(f.y-O.y);if(ee===0)return!0;if(ee<0)continue;b=!b}}else{if(f.y!==O.y)continue;if(V.x<=f.x&&f.x<=O.x||O.x<=f.x&&f.x<=V.x)return!0}}return b}const n=Qt.isClockWise,a=this.subPaths;if(a.length===0)return[];if(t===!0)return i(a);let o,l,c;const h=[];if(a.length===1)return l=a[0],c=new gi,c.curves=l.curves,h.push(c),h;let u=!n(a[0].getPoints());u=e?!u:u;const d=[],p=[];let g=[],v=0,x;p[v]=void 0,g[v]=[];for(let f=0,w=a.length;f<w;f++)l=a[f],x=l.getPoints(),o=n(x),o=e?!o:o,o?(!u&&p[v]&&v++,p[v]={s:new gi,p:x},p[v].s.curves=l.curves,u&&v++,g[v]=[]):g[v].push({h:l,p:x[0]});if(!p[0])return i(a);if(p.length>1){let f=!1;const w=[];for(let y=0,b=p.length;y<b;y++)d[y]=[];for(let y=0,b=p.length;y<b;y++){const L=g[y];for(let _=0;_<L.length;_++){const O=L[_];let V=!0;for(let N=0;N<p.length;N++)r(O.p,p[N].p)&&(y!==N&&w.push({froms:y,tos:N,hole:_}),V?(V=!1,d[N].push(O)):f=!0);V&&d[y].push(O)}}w.length>0&&(f||(g=d))}let m;for(let f=0,w=p.length;f<w;f++){c=p[f].s,h.push(c),m=g[f];for(let y=0,b=m.length;y<b;y++)c.holes.push(m[y].h)}return h}}const r0=new Float32Array(1);new Int32Array(r0.buffer);At.create=function(s,e){return console.log("THREE.Curve.create() has been deprecated"),s.prototype=Object.create(At.prototype),s.prototype.constructor=s,s.prototype.getPoint=e,s};rs.prototype.fromPoints=function(s){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(s)};e0.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};$v.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Bt.prototype.extractUrlBase=function(s){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),vi.extractUrlBase(s)};Bt.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Lt.prototype.center=function(s){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(s)};Lt.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Lt.prototype.isIntersectionBox=function(s){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};Lt.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)};Lt.prototype.size=function(s){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(s)};Bi.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};hs.prototype.setFromMatrix=function(s){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(s)};ot.prototype.flattenToArrayOffset=function(s,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,e)};ot.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)};ot.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};ot.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)};ot.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};ot.prototype.getInverse=function(s){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()};me.prototype.extractPosition=function(s){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(s)};me.prototype.flattenToArrayOffset=function(s,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,e)};me.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new A().setFromMatrixColumn(this,3)};me.prototype.setRotationFromQuaternion=function(s){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(s)};me.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};me.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};me.prototype.multiplyVector4=function(s){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};me.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};me.prototype.rotateAxis=function(s){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),s.transformDirection(this)};me.prototype.crossVector=function(s){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};me.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};me.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};me.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};me.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};me.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};me.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};me.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};me.prototype.makeFrustum=function(s,e,t,i,r,n){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(s,e,i,t,r,n)};me.prototype.getInverse=function(s){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()};Yt.prototype.isIntersectionLine=function(s){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(s)};gt.prototype.multiplyVector3=function(s){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),s.applyQuaternion(this)};gt.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};Sr.prototype.isIntersectionBox=function(s){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};Sr.prototype.isIntersectionPlane=function(s){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(s)};Sr.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)};Qe.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};Qe.prototype.barycoordFromPoint=function(s,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(s,e)};Qe.prototype.midpoint=function(s){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(s)};Qe.prototypenormal=function(s){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(s)};Qe.prototype.plane=function(s){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(s)};Qe.barycoordFromPoint=function(s,e,t,i,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),Qe.getBarycoord(s,e,t,i,r)};Qe.normal=function(s,e,t,i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),Qe.getNormal(s,e,t,i)};gi.prototype.extractAllPoints=function(s){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(s)};gi.prototype.extrude=function(s){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new ki(this,s)};gi.prototype.makeGeometry=function(s){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new ka(this,s)};J.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)};J.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)};J.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};A.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};A.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};A.prototype.getPositionFromMatrix=function(s){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(s)};A.prototype.getScaleFromMatrix=function(s){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(s)};A.prototype.getColumnFromMatrix=function(s,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,s)};A.prototype.applyProjection=function(s){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(s)};A.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)};A.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)};A.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};ze.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)};ze.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Oe.prototype.getChildByName=function(s){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(s)};Oe.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};Oe.prototype.translate=function(s,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,s)};Oe.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};Oe.prototype.applyMatrix=function(s){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)};Object.defineProperties(Oe.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(s){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=s}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});ke.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(ke.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Iu},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Da.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};ut.prototype.setLens=function(s,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(s)};Object.defineProperties(Ft.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(s){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=s}},shadowCameraLeft:{set:function(s){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=s}},shadowCameraRight:{set:function(s){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=s}},shadowCameraTop:{set:function(s){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=s}},shadowCameraBottom:{set:function(s){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=s}},shadowCameraNear:{set:function(s){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=s}},shadowCameraFar:{set:function(s){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=s}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(s){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=s}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(s){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=s}},shadowMapHeight:{set:function(s){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=s}}});Object.defineProperties(qe.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===ts},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(ts)}}});qe.prototype.setDynamic=function(s){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?ts:sn),this};qe.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},qe.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Ue.prototype.addIndex=function(s){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(s)};Ue.prototype.addAttribute=function(s,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(s,new qe(arguments[1],arguments[2]))):s==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(s,e)};Ue.prototype.addDrawCall=function(s,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(s,e)};Ue.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};Ue.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};Ue.prototype.removeAttribute=function(s){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(s)};Ue.prototype.applyMatrix=function(s){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)};Object.defineProperties(Ue.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Lr.prototype.setDynamic=function(s){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?ts:sn),this};Lr.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};ki.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};ki.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};ki.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};mn.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties($e.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new ne}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(s){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=s===Ul}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(s){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=s}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(dt.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(s){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=s}}});Fe.prototype.clearTarget=function(s,e,t,i){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(s),this.clear(e,t,i)};Fe.prototype.animate=function(s){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(s)};Fe.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Fe.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Fe.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Fe.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Fe.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Fe.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Fe.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Fe.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Fe.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Fe.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Fe.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Fe.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Fe.prototype.enableScissorTest=function(s){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(s)};Fe.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Fe.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Fe.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Fe.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Fe.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Fe.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Fe.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Fe.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Fe.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Fe.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Fe.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=s}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=s}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(s){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=s===!0?vt:ft}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(pc.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(pt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=s}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=s}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=s}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=s}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(s){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=s}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(s){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=s}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(s){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=s}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(s){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=s}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(s){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=s}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(s){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=s}}});Bv.prototype.load=function(s){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new Uv().load(s,function(t){e.setBuffer(t)}),this};Ra.prototype.updateCubeMap=function(s,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(s,e)};Ra.prototype.clear=function(s,e,t,i){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(s,e,t,i)};br.crossOrigin=void 0;br.loadTexture=function(s,e,t,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const r=new vs;r.setCrossOrigin(this.crossOrigin);const n=r.load(s,t,void 0,i);return e&&(n.mapping=e),n};br.loadTextureCube=function(s,e,t,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const r=new Ic;r.setCrossOrigin(this.crossOrigin);const n=r.load(s,t,void 0,i);return e&&(n.mapping=e),n};br.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};br.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nl);let _l=Date.now();const n0=()=>{const s=Date.now(),e=s-_l;return _l=s,e/1e3};var ns={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;

		}`};class vn{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const s0=new Mi(-1,1,1,-1,0,1),Xa=new Ue;Xa.setAttribute("position",new We([-1,3,0,-1,-1,0,3,-1,0],3));Xa.setAttribute("uv",new We([0,2,0,0,2,0],2));class Wc{constructor(e){this._mesh=new ke(Xa,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,s0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ml extends vn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof dt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=is.clone(e.uniforms),this.material=new dt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Wc(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class wl extends vn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),n=e.state;n.buffers.color.setMask(!1),n.buffers.depth.setMask(!1),n.buffers.color.setLocked(!0),n.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),n.buffers.stencil.setTest(!0),n.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),n.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),n.buffers.stencil.setClear(o),n.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),n.buffers.color.setLocked(!1),n.buffers.depth.setLocked(!1),n.buffers.stencil.setLocked(!1),n.buffers.stencil.setFunc(r.EQUAL,1,4294967295),n.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),n.buffers.stencil.setLocked(!0)}}class a0 extends vn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class o0{constructor(e,t){if(this.renderer=e,t===void 0){const i={minFilter:nt,magFilter:nt,format:st},r=e.getSize(new J);this._pixelRatio=e.getPixelRatio(),this._width=r.width,this._height=r.height,t=new pt(this._width*this._pixelRatio,this._height*this._pixelRatio,i),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],ns===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),Ml===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new Ml(ns),this.clock=new Gc}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,n=this.passes.length;r<n;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}wl!==void 0&&(a instanceof wl?i=!0:a instanceof a0&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new J);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let n=0;n<this.passes.length;n++)this.passes[n].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new Mi(-1,1,1,-1,0,1);const jc=new Ue;jc.setAttribute("position",new We([-1,3,0,-1,-1,0,3,-1,0],3));jc.setAttribute("uv",new We([0,2,0,0,2,0],2));class l0 extends vn{constructor(e,t,i,r,n){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=n!==void 0?n:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ne}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let n,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),n=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,n),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),e.autoClear=r}}const bl={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ne(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Mr extends vn{constructor(e,t,i,r){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new J(e.x,e.y):new J(256,256),this.clearColor=new ne(0,0,0);const n={minFilter:nt,magFilter:nt,format:st};this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new pt(a,o,n),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const p=new pt(a,o,n);p.texture.name="UnrealBloomPass.h"+d,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);const g=new pt(a,o,n);g.texture.name="UnrealBloomPass.v"+d,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),a=Math.round(a/2),o=Math.round(o/2)}bl===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");const l=bl;this.highPassUniforms=is.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new dt({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];a=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[d])),this.separableBlurMaterials[d].uniforms.texSize.value=new J(a,o),a=Math.round(a/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,ns===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");const u=ns;this.copyUniforms=is.clone(u.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new dt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:aa,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ne,this.oldClearAlpha=1,this.basic=new rt,this.fsQuad=new Wc(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let n=0;n<this.nMips;n++)this.renderTargetsHorizontal[n].setSize(i,r),this.renderTargetsVertical[n].setSize(i,r),this.separableBlurMaterials[n].uniforms.texSize.value=new J(i,r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,n){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),n&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Mr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Mr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,n&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){return new dt({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new J(.5,.5)},direction:{value:new J(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new dt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},dirtTexture:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform sampler2D dirtTexture;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Mr.BlurDirectionX=new J(1,0);Mr.BlurDirectionY=new J(0,1);const ss=`
varying vec2 vUv;
void main()
{
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Sl=`#define PI 3.1415926538

#define LINE_SIZE 288.0
#define LINE_STRENGTH 0.05
#define LINE_OFFSET 2.0

#define NOISE_STRENGTH 0.2

uniform sampler2D uDiffuse;
uniform float uTime;
uniform float uProgress;
varying vec2 vUv;

float rand(vec2 co){
    return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}


float squareWave(float x){
    return (
         (4.0/PI * sin(PI*LINE_SIZE*x))
        +(4.0/PI * 1.0/3.0 * sin(3.0*PI*LINE_SIZE*x))
        +(4.0/PI * 1.0/5.0 * sin(5.0*PI*LINE_SIZE*x))
        - LINE_OFFSET
        )*LINE_STRENGTH ;
}

vec4 progress(){
     if (vUv.y < uProgress && vUv.y > uProgress - 0.2) {
        return vec4(0.1,0.1,0.1,1.0) * (uProgress - vUv.y) ;
    }
        else {return vec4(0,0,0,0);}
}

void main()
        {
            vec4 color = texture2D(uDiffuse, vUv);
            float r = rand(vUv*uTime);

            vec4 p = progress();
            gl_FragColor = color  +  (vec4(r,r,r,0) * (p.a + NOISE_STRENGTH)) + squareWave(vUv.y);            
        }`,c0=`#define LAG 0.8
#define LAG_INVERSE 0.2

uniform sampler2D uDiffuse;
uniform sampler2D uLagTex;
varying vec2 vUv;

void main()
{
    vec4 Diffuse = texture2D(uDiffuse, vUv);
    vec4 LagTex = texture2D(uLagTex, vUv);

    gl_FragColor = (Diffuse * LAG_INVERSE) + (LagTex * LAG);            
}`;class ya{constructor(e,t,i){di(this,"sceneRTT"),di(this,"cameraRTT"),di(this,"outputTexture"),di(this,"shader");const r=t/i;this.sceneRTT=new mn,this.cameraRTT=new Mi(-.5*r,.5*r,.5,-.5,1,3),this.cameraRTT.position.set(0,0,1),this.sceneRTT.add(this.cameraRTT),this.cameraRTT.position.set(0,0,1),this.outputTexture=new pt(t,i,{format:Kt}),this.shader=new dt(e);const n=new ke(new Zt(1*r,1,1,1),this.shader);this.sceneRTT.add(n),this.sceneRTT.add(new t0(0))}render(e,t){e.setRenderTarget(this.outputTexture),e.clear(),e.render(this.sceneRTT,this.cameraRTT)}}class h0{constructor(e,t,i){di(this,"outputCopy"),di(this,"shaderToScreen1"),di(this,"outputTexture"),di(this,"lagMat"),this.lagMat=new dt,this.shaderToScreen1=new ya({uniforms:{uDiffuse:{value:e.texture},uLagTex:{value:null},uNeedUpdate:{value:!1}},vertexShader:ss,fragmentShader:c0},t,i),this.outputTexture=this.shaderToScreen1.outputTexture,this.outputCopy=new ya({uniforms:{uDiffuse:{value:this.outputTexture.texture}},vertexShader:ss,fragmentShader:"uniform sampler2D uDiffuse; varying vec2 vUv; void main() {gl_FragColor = texture2D(uDiffuse, vUv);}"},t,i),this.shaderToScreen1.shader.uniforms.uLagTex.value=this.outputCopy.outputTexture.texture}render(e,t){this.shaderToScreen1.render(e),this.outputCopy.render(e)}}function u0(s,e,t){const i=new Mi(-.1,1.496,.1,-1.1,1,3);t.add(i),i.position.set(0,0,1);const r=new pt(576*1.33,576,{format:Kt}),n=new o0(e,r);n.renderToScreen=!1;const a=new l0(t,i);n.addPass(a);const o=new dt({uniforms:{uDiffuse:{value:null},uTime:{value:1},uProgress:{value:1.2}},vertexShader:ss,fragmentShader:Sl}),l=new Mr(new J(128,128),1.1,.4,0);n.addPass(l);const c=new h0(n.readBuffer,576*1.33,576);o.uniforms.uDiffuse.value=c.outputTexture.texture;let h=1.2;const u=(v,x)=>{o.uniforms.uTime.value=x,o.uniforms.uProgress.value=h,p.shader.uniforms.uTime.value=x,p.shader.uniforms.uProgress.value=h,p.render(e),h-=v*.2,h<0&&(h=1.2),c.render(e),n.render()},d=s.environmentMapTexture;d.encoding=vt;const p=new ya({uniforms:{uDiffuse:{value:c.outputTexture.texture},uTime:{value:1},uProgress:{value:1.2}},vertexShader:ss,fragmentShader:Sl},576*1.33,576);p.outputTexture.texture.encoding=vt;const g=new Rr;return g.metalness=0,g.roughness=.125,g.envMap=d,g.envMapIntensity=.7,g.map=p.outputTexture.texture,{tick:u,material:g}}class ta extends ki{constructor(e,t={}){const i=t.font;if(!(i&&i.isFont))return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new Ue;const r=i.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t),this.type="TextGeometry"}}function d0(s,e=!1){const t=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),r=new Set(Object.keys(s[0].morphAttributes)),n={},a={},o=s[0].morphTargetsRelative,l=new Ue;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;n[p]===void 0&&(n[p]=[]),n[p].push(u.attributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in u.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p])}if(l.userData.mergedUserData=l.userData.mergedUserData||[],l.userData.mergedUserData.push(u.userData),e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0;const u=[];for(let d=0;d<s.length;++d){const p=s[d].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(const h in n){const u=Tl(n[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const p=[];for(let v=0;v<a[h].length;++v)p.push(a[h][v][d]);const g=Tl(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Tl(s){let e,t,i,r=0;for(let o=0;o<s.length;++o){const l=s[o];if(l.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=l.array.constructor),e!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=l.itemSize),t!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=l.normalized),i!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;r+=l.array.length}const n=new e(r);let a=0;for(let o=0;o<s.length;++o)n.set(s[o].array,a),a+=s[o].array.length;return new qe(n,t,i)}const ia="#f99021",Ci=function(){let s=.05,e=s,t=s,i=e*2,r=t*.4;return{font:void 0,size:s,height:e,width:t,leading:i,tracking:r}}(),He=function(){return{font:void 0,size:.04,height:.04,width:.032,leading:.08,tracking:.00704}}(),ra=function(){return{font:void 0,size:.03,height:.03,width:.024,leading:.075,tracking:.00528}}(),na=function(){const s=.022000000000000002,e=.0275*2.5,t=s*.22;return{font:void 0,size:.0275,height:.0275,width:s,leading:e,tracking:t}}(),p0=function(){const s=.020000000000000004,e=.025*1.6;return{font:void 0,size:.025,height:.025,width:s,leading:e,tracking:s}}();function f0(s,e){Ci.font=s.publicPixelFont,He.font=s.chillFont,ra.font=s.chillFont,na.font=s.chillFont;const t=new Ut;e.add(t);const i=new rt({color:ia}),r=new ke(new ta("",{font:Ci.font,size:Ci.size,height:1e-4,curveSegments:12,bevelEnabled:!1}),i);t.add(r);const n=new ke(new ta("",{font:Ci.font,size:Ci.size,height:1e-4,curveSegments:12,bevelEnabled:!1}),new rt({color:0}));t.add(n);const a=new ke(new Zt(0,0),new rt({color:ia}));t.add(a);const o=new ke(new Zt(He.size,He.size*1.6),i);o.position.z=-.1,t.add(o);let l;function c(E){l&&(l.material.color=new ne(E?"black":ia))}let h=1;function u(E){const D={x:p.x,y:-p.y};c(!1),l=void 0;const I=He.width+He.tracking,C=Math.floor(screenWidth/I);E!==void 0&&(D.x=p.x+I*((E+f)%C),D.y=-(p.y+He.leading*Math.floor((E+f)/C)),E<d.length&&(D.y=d[E].position.y,c(!1),l=d[E]));let H=D.x+He.size/2,K=D.y-He.size/1.9;H>screenWidth&&(K-=He.leading,H=He.size/2),o.position.x=H,o.position.y=K,h=0}let d=[];const p={x:0,y:0};function g(E){E.wrap=E.wrap!==void 0?E.wrap:!1,E.isWord=E.isWord!==void 0?E.isWord:!1,E.updateCharNextLoc=E.updateCharNextLoc!==void 0?E.updateCharNextLoc:!0;const D=(E.font.width+E.font.tracking)*E.str.length,I=E.isWord?(E.font.width+E.font.tracking)*(E.str.length-1):E.font.width*E.str.length;let C=p.x,H=p.y;E.wrap&&I+C>screenWidth&&(H+=E.font.leading,C=0);const K={colorText:void 0,blackText:void 0,bg:void 0},ie=new ta(E.str,{font:E.font.font,size:E.font.size,height:1e-4,curveSegments:12,bevelEnabled:!1});if(E.updateCharNextLoc?ie.translate(C,-E.font.height-H,-.001):ie.translate(0,-E.font.height,-.001),E.highlight){const Z=new Zt(D+E.font.tracking*2,E.font.height+E.font.leading/2,1,1);Z.translate(D/2-E.font.tracking/2+C,-E.font.height/2-H,-.01),K.blackText=ie,K.bg=Z}else K.colorText=ie;return E.updateCharNextLoc&&(p.x=D+C,p.y=H),K}function v(E,D){const I=E.geometry;D.push(I),E.geometry=d0(D),I.dispose()}function x(E){p.x=0,p.y+=E.leading}function m(E){const D=p.y,I=[];let C;for(let Z=0;Z<E.length;Z++)if(E[Z]!=="\r")if(C===void 0&&E[Z]==="#"){let oe="h1";Z+1<E.length&&E[Z+1]==="#"&&(oe="h2",Z++,Z+1<E.length&&E[Z+1]==="#"&&(oe="h3",Z++)),Z+1<E.length&&E[Z+1]===" "&&Z++,C={type:oe,emphasis:!1,value:""}}else E[Z]===`
`?(C!==void 0&&(I.push(C),C=void 0),I.push({type:"br",emphasis:!1,value:""})):C===void 0&&E[Z]==="!"?C={type:"img",emphasis:!1,value:""}:C===void 0?C={type:"p",emphasis:!1,value:E[Z]}:E[Z]==="*"?C===void 0?C={type:"p",emphasis:!0,value:""}:(I.push(C),C={type:C.type,emphasis:!C.emphasis,value:""}):C.value+=E[Z];C!==void 0&&I.push(C);const H=[],K=[],ie=[];for(let Z=0;Z<I.length;Z++){const oe=I[Z],j=[];switch(oe.type){case"h1":j.push(g({str:oe.value,font:Ci,highlight:oe.emphasis}));break;case"h2":j.push(g({str:oe.value,font:He,highlight:oe.emphasis}));break;case"h3":j.push(g({str:oe.value,font:ra,highlight:oe.emphasis}));break;case"img":ee(oe.value);break;case"p":const Q=oe.value.split(" ");for(let B of Q)j.push(g({str:B+" ",font:na,highlight:oe.emphasis,wrap:!0,isWord:!0}));break;case"br":let he=p0;if(Z>0)switch(I[Z-1].type){case"h1":he=Ci;break;case"h2":he=He;break;case"h3":he=ra;break;case"p":he=na;break}x(he);break}for(const Q of j)Q.colorText&&H.push(Q.colorText),Q.blackText&&K.push(Q.blackText),Q.bg&&ie.push(Q.bg)}return v(r,H),v(n,K),v(a,ie),p.y-D}let f=0;function w(E){const D=He.width+He.tracking,I=Math.floor(screenWidth/D);let C=0;const H=E.split(`
`);for(let K=0;K<H.length;K++){const ie=[];for(const oe of H[K]){const j=g({str:oe,font:He,updateCharNextLoc:!1}).colorText;j&&ie.push(j)}f=0,b=0,L(ie,(oe,j,Q)=>{oe.translate(j,Q,0)},!1),v(r,ie);const Z=Math.floor(ie.length/I);for(let oe=0;oe<Z;oe++)C+=1,x(He);K<H.length-1?(x(He),C+=1):(f=H[K].length+1,u(0))}return C}function y(E){for(const D of E)t.remove(D),D.geometry.dispose(),D.material.dispose()}let b=0;function L(E,D,I){const C=He.width+He.tracking,H=Math.floor(screenWidth/C);for(let K=0;K<E.length;K++){const ie=p.x+C*((K+f)%H),Z=-(p.y+He.leading*Math.floor((K+f)/H));D(E[K],ie,Z)}if(I){const K=Math.floor((E.length+f)/H);N(K-b,"lines"),b=K}}function _(E,D){if(E.type==="add"){if(E.loc==="end"){o.visible=!0;for(const I of E.str){const C=new ke(g({str:I,font:He,updateCharNextLoc:!1}).colorText,i.clone());d.push(C),L(d,(H,K,ie)=>{H=H,H.position.set(K,ie,0),t.add(H)},!0)}}else if(typeof E.loc=="number"){const I=[];for(const C of E.str)I.push(new ke(g({str:C,font:He,updateCharNextLoc:!1}).colorText,i.clone()));d=[...d.slice(0,E.loc),...I,...d.slice(E.loc,d.length)],L(d,(C,H,K)=>{C=C,C.position.set(H,K,0),t.add(C)},!0)}}else if(E.type==="del"){if(E.loc==="end"){const I=d.slice(-E.str.length);d=d.slice(0,-E.str.length),L(d,(C,H,K)=>{C=C,C.position.set(H,K,0)},!0),y(I)}else if(typeof E.loc=="number"){const I=d.slice(E.loc,E.loc+E.str.length);y(I),d=[...d.slice(0,E.loc),...d.slice(E.loc+E.str.length,d.length)],L(d,(C,H,K)=>{C=C,C.position.set(H,K,0)},!0)}}u(D)}function O(){const E=[];for(const H of d)H.geometry.translate(H.position.x,H.position.y,0),E.push(H.geometry),H.material.dispose();v(r,E);const D=He.width+He.tracking,I=Math.floor(screenWidth/D),C=Math.floor((d.length+f)/I);p.y+=He.leading*C}let V=t.position.y;function N(E,D,I={updateMaxScroll:!0,moveView:!0}){let C=E;D==="lines"&&(C*=He.leading),I.moveView&&(t.position.y+=C),I.updateMaxScroll&&(V+=C),t.position.y<0&&(t.position.y=0),t.position.y>V&&(t.position.y=V)}function R(){t.position.y!==V&&(t.position.y=V)}function ee(E){const D=E.match(/\(.+\)/);if(!D||D.length===0)return;const[I,C]=D[0].slice(1,-1).split("?"),H=new URLSearchParams(C),K=parseFloat(H.get("aspect")??"");if(Number.isNaN(K))throw new Error(`Error for image at: '${I}'. Image must have aspect ratio like this: '/path/to/image?aspect=1.5'`);const ie=parseFloat(H.get("width")??""),Z=Number.isNaN(ie)?1:ie,oe=Z/K,j=new ke(new Zt(Z,oe,1,1),new rt({color:0}));j.position.set(1.4/2,-oe*.5-p.y,-.02),H.get("noflow")||(p.y+=oe),t.add(j),new vs().load(I,Q=>{Q.magFilter=Ze,j.material=new rt({map:Q})})}function F(E,D){h>1&&Math.floor(D*2)%2==0?(o.visible=!1,c(!1)):(o.visible=!0,c(!0)),h+=E}return{tick:F,userInput:_,placeMarkdown:m,placeText:w,scroll:N,scrollToEnd:R,freezeInput:O}}const Xc=`!(/images/ed-title.png?aspect=2&noflow=true&width=1.7)


##   Hi there, 

#  *I'm Jonas*

##   • Computer Science Student
##   • University of Copenhagen





### Welcome to the linux terminal
### →→ Scroll or type "help" to get started
`,m0=`



# Hi there

My name is Jonas Mersal, a computer science student at the University of Copenhagen. I wrote my first lines of code in primary school and never stopped; by high school I was leading ambitious class projects and finishing the course with top marks. Today I’m especially drawn to machine learning, AI, and software development, turning ideas into everything from compact neural-network prototypes to full-stack web apps.

In addition to my love of technology, I follow politics, dive into competitive gaming, and push my limits in the gym.

Type "cd ~/projects" then "ls" to see details of some of the projects I have developed over the years.`,g0=`



# Contact
## Reach out on*LinkedIn*

https://www.linkedin.com/in/jonasmersal/
`,v0=`



## *Page Buddy*
## 2023-24

### • React, TypeScript, Gleam (Erlang),
### • Sql, AI, Web Dev
Pagesss Buddy is a word processor, with everything you would expect from WYSIWYG editor along with a novel drag and drop user interface and a powerful style/theme engine. Additionally it provides: rich accessibility tools, including, an embedded neural network (Wasm / WebGPU) for auto complete, developed to help people with dyslexia (like me) with their writing; and the ability for users to publish their documents to the web.

Page Buddy is about 35K lines of code, it even has some users (~100 WAUs)!`,x0=`



## *Folio (This Website)*
## 2022

### • TypeScript, WebGL,
### • Shader Language, Web Dev
This was a project I built for fun over one of my uni breaks, built in TypeScript and THREE.js, it contains a number of nifty features such as: a 3D retro computer that you can interact with, a very simple UNIX shell implementation, a files system implementation, markdown interpreter and renderer, and a text layout engine.`,y0=`



## *Writing Buddy*
## 2021

### • React, TypeScript, UI/UX, Branding,
### • AI, Deep Learning, Web Dev
!(/images/writing-buddy.png?aspect=1.4457)
An early version of Page Buddy.

I have dyslexia and as such, have always found writing and particularly spelling difficult and tedious. While there are a number of tools on the market designed to aid people with learning difficulties, based on my experience, all fall short in one way or another. To fix this I developed Writing Buddy, a “what you see is what you get” text editor designed to help people write better, faster and with more confidence.`,_0=`



## *My Own Programming Language*
## 2021

### • Lexing & Tokenization, Syntactic Analysis,
### • Parsing, Compiler & Interpreter Design

For a while now I have been fascinated by computer languages and when over the semester break, I had a bit of time on my hands, I decided to—as an academic exercise—design my own language. My language consists of two components; the recursive descent parser which first lexers and tokenizes the input before generating an abstract syntax tree (AST); and the interpreter which traverses the AST and produces the appropriate output.

My language currently includes features such as closures, lambda expressions, first class and pure functions, making it well-suited to functional programming. In addition to this I plan to add support for multithreading and a stronger type system plus optimizations for tail-call recursion. I am also experimenting with implementing a stack based virtual machine—bytecode interpreter—to run my language.`,M0=`



## *Glowbal*
## 2020

### • Agile, Design,
### • Accessibility, UI/UX, Web Dev

As part of the university subject IT Project, I was required to produce an ePortfolio web app as part of a small group. We called our app Glowbal and built it with TypeScript, React, Express and employed an agile development process. I was a front end lead and wrote most of the UI components. I was also responsible for accessibility testing and ensuring users of all abilities could access our app.`,w0=`



## *Cyber Heist*
## 2020

### • Shader Dev, Design,
### • User Testing, Game Dev
!(/images/cyber-heist.png?aspect=1.8181)
For the subject Graphics and Interaction, I worked in a team to produce a time based endless runner game called CyberHeist. The game was built in Unity/C# and made use of a number of Azure APIs to add online play functionality. I was responsible for most of the online investigation and a large amount of the game logic, shader programming and user testing. CyberHeist received a final mark of over 95% and the trailer can be found below.`,b0=`



## *Pavilion*
## 2019

### • VR, 3D Rendering,
### • Parametric Design, Architecture
!(/images/pavilion.png?aspect=1.7777)
At university, in addition to my computer science subjects, I completed a number of architecture and design electives. In one of my favourite architecture subjects we had to design a pavilion using parametric tools and present it in VR with Unreal Engine. I programmatically modeled a magnetic field and extracted the field lines to inform the structure of my pavilion. I enjoyed this assignment so much I decided to extend myself and produce a number of 3D ray traced renders some of which are below. My design received first class honors and was exhibited in the Melbourne School of Design annual exhibition (MSDx).`,S0=`



## *Brick Breaker*
## 2019

### • Software Engineering,
### • Object Oriented Design, GRASP & GoF Patterns
!(/images/brick-breaker.png?aspect=1.3913)
The below screenshot is of a university assignment, where we had to follow a spec and use object oriented design principles and patterns to produce a brick-breaker type game in Java. I finished with time to spare so decided to implement a real time lighting and particle engine from scratch. The engine was capable of handling different lights at different intensities, intersecting shadows and a large number of shadow casting game objects.`,T0=`



## *Jackalope*
## 2017

### • Industrial Design,
### • Visual Communication, Branding
!(/images/jackalope.png?aspect=1.7977)
In my final year of high school I took a subject called Visual Communication Design (VCD). As part of VCD we were given the assignment to develop and fulfill a brief for a fictional client. I gave myself the brief to design a series of smart home appliances for the made up company Jackalope and produce accompanying visual identity and advertising material. Below is a poster of a smart speakers I designed with the Jackalope logo in the corner. See more of this project on Behance.`,E0=`



## *Project L*
## 2015

### • Game Dev,
### • Design, 3D
!(/images/project-l.png?aspect=1.7777)
Over the years I have made many games, with the screenshot below representing one of them from around 2015. Probably one of the more technically challenging games I have created, it was an open world sandbox written in Unity, where you could interact, move, rotate and scale the objects in the world to build anything you wanted.`,A0=`



## *Great Balls of Fire*
## 2013-14

### • Mobile Dev, Design,
### • Illustration, Branding
!(/images/great-balls-of-fire.png?aspect=1.77777)
Great Balls of Fire was a game I made when I was 13 years old and is one of the creations I am most proud of. It was an endless scroller where you played as the titular Ball of Fire, attempting to stay in the sky by jumping on air ships. It was published on the App Store and Play Store and remained there for a number of years (before I got tired of paying Apple's developer fee) and even netted a few thousand downloads.`,L0=`



## *The Golden Pack*
## 2012-13

### • Design,
### • Illustration
!(/images/the-golden-pack.png?aspect=1.3333)
When I was 12 years old, I played a lot of Minecraft however, I was never very happy with the low resolution look of the game. I decided to remedy this by creating a texture pack, which is a file containing alternative looks or textures for the objects in the game. When I put my work online, after some refinement I received my first 1000 downloads. Spotting a business opportunity, I added ads to the download link. My texture pack was downloaded over 50,000 times, earning me over a few hundred dollars.`,R0=`



## *EdSites*
## 2010

### • Design,
### • Web Dev
!(/images/edsites.png?aspect=1.4457)
Below is one of my earliest creations dating back to 2010. As a budding 10 year old web designer I needed a website to showcase my work and attract “clients”, so I made one! I called it EdSites and registered the domain name edsites.biz with my father’s credit card and got to work. All the HTML, CSS and even the JavaScript was written completely by hand by me. The website was such a success that it resulted in some clients albeit they were all my family members.`,C0=`



## Welcome to ED-Linux 1.0 LTS



#  Hi there,
#  *I'm Edward*
#  -Creative Developer
##     — Computer Science graduate of
##        the University of Melbourne
##
###   *Scroll* or type "help" to get started
`,P0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAACgBAMAAADA9fxWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURQAAAPmQISJaa9QAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAfLSURBVHja5VsLdiM5CIQbwP0vu6aqkLqTmX2xY+S3b5WZbLczG7oEguLT9p9bbp9ZEY8/j2//k+VuUX8fwB9fn9r0PCYpCmQUZN+ffGTFKTHA6lCwO28+pecDq+xZ3iOwxwEL/9iJfoieFRD6Mm/UBRma/tSaPM4LrknLzjtAtqPrIm4Usc6vX6UCLHbic6FqaruvKv7TD89D9unfLkRxF1WerMiIz2j5c5YT+l5g/Y7ZadMzHOyDtI5xiVd/eg4fgfy5GHCRHLynt3ayTWdsfr9C/vIbPR8/SM9JR+3yW7Bql99+/DeTmBv1/MqHpMyMB94c5B9+u3zgTenX4bL8y7+ZXMKaWIOb3IcXygWf9somCDdk1XZgPQyaYAl6TObFbp1LUOGwmDnGGSULr3DPydyZIdSbCyo/8O3Kh9dScU7adRst3VZbtIWAVlhKO5EzVm6eX9cIC1inGOAAuXVM4OU1jyj54SqXWQ96r/bFgJmOkOQLba1ElJpeJWFpdpv3hMuUVyJ/rkCc4liCGVOCvy/qeAViCJ5YbcBx/2TfHkMMzNfbKeIlrmU7PY7m0VB0qX0GcVyeQFeXyzEdG0t6zP8Zh7MDE1LjmAyNt6XsTWsS8eIevrxV+WhF47q0cysLK7U/itiWUhMsRNkLYR9DDDbPS6RQ4zquwyvlBmFmc5DZtWowyJxwXSHR5zKooF7rsnAXTtwRfkymbii7rMQc0RgfMyb71GYDMWUVvKhMERoHoY9ZFyIPXeBEtcw24xySWqWslDqNF0HukWRdc4gLaBYDoN8QSlfCOIkYYosBFMezIFIRz5jUcRUgkojdmk3vvHFIKva4XAV0HIhNJo6d44iLSJc4a6RxyaKGpIJohLJjOWstpTE2tmp7seMRlifyRSzUe4p5wU3jb6oKFExmbEwyqj2yse/J01zpp7S6mFddJDvIkcMqrpVhihOMyNC2zQpeQMGprc06u9pmo6sKMUsE83FinyxoqniZ2mw1X2qjY1YwhNe3Tty4vzmdSVjX8ciqZd+JnGIcMMSb2Bc1m9HQ5xaJNa05u+JDEzsweqOOtagWOiTzO73DUSQYFxg2YoedXELqeQhxrqIta4snMqdau6spUjvvLzdkBcJyn5VV5OG2Jx5g2lFjeXck6L4iug5yzKhDwzY53XjqtfhHZFd9oPTTvXwf51u9Fq9mZFqezA6v6STisrr0c1t5HLEfQ4xixCVn0jpm1O5fmjEHRHa/TfmxorMdXHnJGOcFu7RM52XrPNu5leknj7GmfNCAYaftNGII87STOu6pHg4ew3nb0QW6c0zHbKyKYi0d2/l1MDiZXpHQhDXqenZ+HbNq73dCTFMD7keS428SjiEODgosr03EOS/36yeHwlOQSvegdSzE05K/v4qRZ2Jy+ILcYxIhyKMhKvLrOLt3xjpaFXAIapLZNQFUqx3VvTnMGV+OMoprkd1dHJrIYEcCJR/fzWT2HNMn9ew8QXtkzFeH0adKA5xQYxuVVBpDAm67J4FvM69LLA3rPKFvDm4fLJW/H/MecoEg5U2oXbtRyYL8Xsnrd7neo9PAUXbhp76yB3LfJlmn1TtDLNil4YjuUsTyIrB5e+fKnu/pgTmWqZG+ocUYy7LfFSXbiPFHR5kdc3Up2GvM7cDestu396r4HEyNaxqDroNjEd5y7S2SOdnDbJjNYrTL1zx58D6jNawH+K1kjT9qfKxvnK6DVgQFVzM9bQFH6vwrwTLmJMpMRie2n4KHaSk4136/iRowRSHiMJYPGzzmJOAnL+YF47NfSOZwT2tPiGrihZ6a31Yj17uQ3Q/w8m4nQdFT8XdUGxdDAtAoia2r1UYFq/bVD/AKXECj0rxnEIIeg44Ddu57e+Pb6PMrm41WmoNW1qgnCHVw9IXbgVnuNM5H4DbTLpP19tpm84gSBYocC0kr23mjurWcG63/shPPQsYYQBXQklV46ntNuToDBxvIeqDmIhvzK5DlgWm11m2X28Q+8wd1JbJr17LvVw+zs24XzpjTDbUeXuONW788IG1r7/vDlv0UYg0wAc6CEjew6uLGNRpfjGGb2TNi6/DwZSoRSB3jZHBI19sJCMOa3Mualowe7bqsn++1aEWqa8jWobYPyKPVTZ63TX75y9g86AnIgWY4FYqjgVfJDNU8HVtoPa8FXLlnz51VPL3X12kWscl2x4tO0n45+7I6bySgrX5/4UAtxKa4D5fcXVNSynByrAjfrAcfOQ6/P/3Gm9JBz4saqVad02j/JJDLafnlFG3e+dRJhnNOVVjoNntGTwKk3CIiyUF2bAdC5s3R/FwwwcTN+4hWcoxcCD32SFUbvzAqjj9t1rXorZT+Jx0Yo220t9SO4llp3zjIqxulyaOfChZrvjkrthGFxkk+mm0JIZ6k82TG8HzOrDUyzZtk/kCdknHBO9HOqXINCoBQw9c5wlbEs0pmcbLhySX4hXmkZugbscxBBQn9L37hmz8TLJcVnIyHbQdPLkIPfpz7Lb52mL44xyWWxFMZc5c0NFcbrTPXfLWk3YcFlsvSDlyik/9QyYw7oJOFQ1QxfPshAITvcmKNXJQL8djJyPC68I+tS8Dkp0ITxeBRwVxxHdiORdSqvFfetzufMesmGO2eQDCT1UTM3vYOhlxzumhHse2+9n8RbPYP7rbKGosf1QoAAAAASUVORK5CYII=",tn={name:"/",children:[{name:"bin",children:[]},{name:"dev",children:[]},{name:"lib64",children:[]},{name:"media",children:[]}]};function qc(s){for(const e in s){const t=e.split("/").slice(2);let i=tn;t.forEach((r,n,a)=>{if(n===a.length-1)i.children.push({name:r,data:s[e]});else{let o=i.children.find(l=>l.name===r);o||(o={name:r,children:[]},i.children.push(o)),i=o}})}}qc(Object.assign({"../file-system/home/user/about/about.md":m0,"../file-system/home/user/contact/contact.md":g0,"../file-system/home/user/projects/00-math-toolkit.md":v0,"../file-system/home/user/projects/01-folio.md":x0,"../file-system/home/user/projects/02-writing-buddy.md":y0,"../file-system/home/user/projects/03-my-own-programming-language.md":_0,"../file-system/home/user/projects/04-glowbal.md":M0,"../file-system/home/user/projects/05-cyber-heist.md":w0,"../file-system/home/user/projects/06-pavilion.md":b0,"../file-system/home/user/projects/07-brick-breaker.md":S0,"../file-system/home/user/projects/08-jackalope.md":T0,"../file-system/home/user/projects/09-project-l.md":E0,"../file-system/home/user/projects/10-great-balls-of-fire.md":A0,"../file-system/home/user/projects/11-the-golden-pack.md":L0,"../file-system/home/user/projects/12-edsites.md":R0,"../file-system/home/user/title/title-legacy.md":C0,"../file-system/home/user/title/title.md":Xc}));qc(Object.assign({"../file-system/home/user/about/":P0}));console.log(tn);function Ir(){function s(a){const o=a.split("/");return o.length>0&&o.at(-1)===""&&o.pop(),o}function e(a,o){for(const l of o)switch(l){case"":a=[tn];break;case"..":a.length>1&&a.pop();break;case"~":a=i();break;case".":break;default:const c=a.at(-1);if(!c||!("children"in c))return;const h=c.children.find(u=>u.name===l);if(!h)return;a.push(h);break}return a}function t(a){return a[a.length-1].children}function i(){const a=tn.children.find(l=>l.name==="home"),o=a.children.find(l=>l.name==="user");return[tn,a,o]}function r(a,o){return e([...a],s(o))}function n(a,o,l){const c=s(o),h=c.pop();if(h===void 0)return"bad_args";const u=e([...a],c),d=u==null?void 0:u.at(-1);return!d||!("children"in d)?"bad_path":d.children.find(p=>p.name===h)?"file_exists":(d.children.push(l==="folder"?{name:h,children:[]}:{name:h,data:""}),"ok")}return{getChildren:t,goHome:i,goto:r,make:n}}function I0(s,e){const t=Ir(),i={name:"cd",short:"change directory",long:""};return{docs:i,app:(r,n)=>{var a;if(n.find(l=>l==="-h"||l==="-help")){s(`
${i.name} – ${i.short}`);return}if(r.length===0||r[0]===""){e.p=t.goHome();return}const o=t.goto(e.p,r[0]);if(console.log(o),!o){s(`
No such file or directory`);return}if(!("children"in o.at(-1))){s(`
${(a=o.at(-1))==null?void 0:a.name}:not a directory`);return}e.p=o}}}function D0(s,e){const t={name:"echo",short:"display a line of text",long:""};return{docs:t,app:(i,r)=>{if(r.find(a=>a==="-h"||a==="-help")){s(`
${t.name} – ${t.short}`);return}const n=i.join(" ");s(`
${n}`)}}}function N0(s,e){const t={name:"hello",short:"friendly greeting program",long:""};return{docs:t,app:(i,r)=>{if(r.find(n=>n==="-h"||n==="-help")){s(`
${t.name} – ${t.short}`);return}s(`
Hello, world!`)}}}function O0(s,e){const t=Ir(),i={name:"ls",short:"list directory contents",long:""};return{docs:i,app:(r,n)=>{if(n.find(l=>l==="-h"||l==="-help")){s(`
${i.name} – ${i.short}`);return}let a=`
`;const o=t.getChildren(e.p);for(const l of o)a+=`${l.name}
`;s(a)}}}function U0(s,e){const t=Ir(),i={name:"mkdir",short:"make directory",long:""};return{docs:i,app:(r,n)=>{if(n.find(o=>o==="-h"||o==="-help")){s(`
${i.name} – ${i.short}`);return}if(r.length===0){s(`
Missing directory name`);return}const a=t.make(e.p,r[0],"folder");a==="bad_args"?s(`
Missing directory name`):a==="bad_path"?s(`
No such file or directory`):a==="file_exists"&&s(`
File or directory already exists`)}}}function F0(s,e){const t={name:"pwd",short:"print name of current directory",long:""};return{docs:t,app:(i,r)=>{if(r.find(a=>a==="-h"||a==="-help")){s(`
${t.name} – ${t.short}`);return}let n="";for(let a=0;a<e.p.length;a++)n+=e.p[a].name,a!==0&&a<e.p.length-1&&(n+="/");s(`
${n}`)}}}function z0(s,e){const t=Ir(),i={name:"show",short:"render markdown (.md) files",long:""};return{docs:i,app:(r,n)=>{var a;if(n.find(l=>l==="-h"||l==="-help")){s(`
${i.name} – ${i.short}`);return}if(n.find(l=>l==="-a"||l==="-all")){let l="";const c=t.goHome().at(-1);if(!c)return;const h=u=>{u&&u.forEach(d=>{if(d.name!=="title"){if(d.name==="projects"&&(l+=`



# Projects`),d.name.match(".md")){l+=d.data;return}h(d.children)}})};h(c.children),s(l,!0);return}if(r.length===0){s(`
Missing filename`);return}const o=(a=t.goto(e.p,r[0]))==null?void 0:a.at(-1);if(!o){s(`
No such file or directory`);return}if(!("data"in o)){s(`
${o.name}:not a file`);return}s(o.data,!0)}}}function B0(s,e){const t=Ir(),i={name:"touch",short:"create file",long:""};return{docs:i,app:(r,n)=>{if(n.find(o=>o==="-h"||o==="-help")){s(`
${i.name} – ${i.short}`);return}if(r.length===0){s(`
Missing file name`);return}const a=t.make(e.p,r[0],"file");a==="bad_args"?s(`
Missing file name`):a==="bad_path"&&s(`
No such file or directory`)}}}const H0=`



# Help
### EDSH is just like BASH except much more limited.

## • Type*ls* to list directory contents

## • Type*cd* to change directory

## • Type*show* to render .md files

## • Use ↑ and ↓ keys to scroll

### Tip: try typing "show -all"


## All commands
### EDSH, version 0.2.1 

`;function k0(s,e){const t=(r,n)=>{let a=H0;Object.entries(i).forEach(o=>{const[l,c]=o;a+=`### ${c.docs.name} - ${c.docs.short}
`}),console.log(a),s(a,!0)},i={ls:O0(s,e),cd:I0(s,e),show:z0(s,e),echo:D0(s),pwd:F0(s,e),mkdir:U0(s,e),touch:B0(s,e),hello:N0(s)};return r=>{const n=i[r];return n?n.app:r==="help"?t:null}}function G0(s){let e={p:Ir().goHome()};const t=k0(s,e);function i(o){const l=[],c=[];return o.forEach(h=>{if(h!==""){if(h.charAt(0)==="-"){c.push(h);return}l.push(h)}}),[l,c]}function r(o){s(`
${o}:command not found`)}function n(){let o="";for(let l=0;l<e.p.length;l++)o+=e.p[l].name,l!==0&&l<e.p.length-1&&(o+="/");o=o.replace(/^\/home\/user/,"~"),o!=="~"&&(o+=" "),s(`
user:${o}$`)}function a(o){o=o.replaceAll(/\s+/g," ");const l=o.split(" "),c=l[0],h=l.slice(1);if(console.log("cmd",c,h),o){const u=t(c);if(u){const[d,p]=i(h);u(d,p)}else r(c)}n()}return{input:a}}function V0(s){const e=document.querySelector("canvas.webgl"),t=document.getElementById("textarea");t.value="",t.readOnly=!0,t.blur(),s.placeMarkdown(Xc),s.placeText("user:~$");const i=G0((l,c=!1)=>{if(c){const h=s.placeMarkdown(l);s.scroll(h,"px",{updateMaxScroll:!0,moveView:!1}),s.scroll(12,"lines",{updateMaxScroll:!1,moveView:!0})}else{const h=s.placeText(l);s.scroll(h,"lines")}});let r="";function n(){const l=o(r,t.value);r=t.value,l&&s.userInput(l,t.selectionStart),s.scrollToEnd()}t.addEventListener("input",n,!1),e.addEventListener("pointerup",l=>{l.pointerType==="mouse"?(t.readOnly=!1,t.focus(),t.setSelectionRange(a,a)):(t.readOnly=!0,t.blur())}),window.addEventListener("keypress",l=>{var c;if((t.readOnly===!0||((c=document.activeElement)==null?void 0:c.id)!=="textarea")&&(t.readOnly=!1,t.focus(),l.key.length===1&&(t.value=t.value.slice(0,a)+l.key+t.value.slice(a),a+=1,n()),t.setSelectionRange(a,a)),l.key==="Enter"){s.freezeInput(),i.input(t.value),t.value="";const h=o(r,t.value);r=t.value,h&&s.userInput(h,t.selectionStart)}}),window.addEventListener("keydown",l=>{switch(l.key){case"ArrowUp":l.preventDefault(),s.scroll(-1,"lines",{moveView:!0,updateMaxScroll:!1});break;case"ArrowDown":l.preventDefault(),s.scroll(1,"lines",{moveView:!0,updateMaxScroll:!1});break}});let a=0;document.addEventListener("selectionchange",()=>{t.selectionStart!==t.selectionEnd&&t.setSelectionRange(a,a),a=t.selectionStart,s.userInput({type:"none",loc:"none",str:""},t.selectionStart)});function o(l,c){const h=l.length-c.length;let u={type:"none",loc:"none",str:""},d=0,p=0;if(h!==0){if(h>0)for(u.type="del";d<l.length||p<c.length;){if(d>=l.length){console.error("add and del");return}l.charAt(d)!==c.charAt(p)?(u.loc==="none"&&(u.loc=p===c.length?"end":p),u.str+=l.charAt(d),d++):(d++,p++)}else if(h<0)for(u.type="add";d<l.length||p<c.length;){if(p>=c.length){console.error("add and del");return}l.charAt(d)!==c.charAt(p)?(u.loc==="none"&&(u.loc=d===l.length?"end":d),u.str+=c.charAt(p),p++):(d++,p++)}}return u}}function W0(s,e){const t=new mn;new ke(new Zt(1,1,1,1),new rt({color:"red"})).position.set(.5,-.5,-.01);const i=f0(s,t),r=u0(s,e,t);return V0(i),{tick:(n,a)=>{r.tick(n,a),i.tick(n,a)},screenRenderEngine:r,screenTextEngine:i}}var j0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function X0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Yc={exports:{}};(function(s,e){(function(t,i){s.exports=i()})(j0,function(){var t=function(){function i(p){return a.appendChild(p.dom),p}function r(p){for(var g=0;g<a.children.length;g++)a.children[g].style.display=g===p?"block":"none";n=p}var n=0,a=document.createElement("div");a.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",a.addEventListener("click",function(p){p.preventDefault(),r(++n%a.children.length)},!1);var o=(performance||Date).now(),l=o,c=0,h=i(new t.Panel("FPS","#0ff","#002")),u=i(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=i(new t.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:a,addPanel:i,showPanel:r,begin:function(){o=(performance||Date).now()},end:function(){c++;var p=(performance||Date).now();if(u.update(p-o,200),p>l+1e3&&(h.update(1e3*c/(p-l),100),l=p,c=0,d)){var g=performance.memory;d.update(g.usedJSHeapSize/1048576,g.jsHeapSizeLimit/1048576)}return p},update:function(){o=this.end()},domElement:a,setMode:r}};return t.Panel=function(i,r,n){var a=1/0,o=0,l=Math.round,c=l(window.devicePixelRatio||1),h=80*c,u=48*c,d=3*c,p=2*c,g=3*c,v=15*c,x=74*c,m=30*c,f=document.createElement("canvas");f.width=h,f.height=u,f.style.cssText="width:80px;height:48px";var w=f.getContext("2d");return w.font="bold "+9*c+"px Helvetica,Arial,sans-serif",w.textBaseline="top",w.fillStyle=n,w.fillRect(0,0,h,u),w.fillStyle=r,w.fillText(i,d,p),w.fillRect(g,v,x,m),w.fillStyle=n,w.globalAlpha=.9,w.fillRect(g,v,x,m),{dom:f,update:function(y,b){a=Math.min(a,y),o=Math.max(o,y),w.fillStyle=n,w.globalAlpha=1,w.fillRect(0,0,h,v),w.fillStyle=r,w.fillText(l(y)+" "+i+" ("+l(a)+"-"+l(o)+")",d,p),w.drawImage(f,g+c,v,x-c,m,g,v,x-c,m),w.fillRect(g+x-c,v,c,m),w.fillStyle=n,w.globalAlpha=.9,w.fillRect(g+x-c,v,c,l((1-y/b)*m))}}},t})})(Yc);var q0=Yc.exports;const Y0=X0(q0);class J0 extends Bt{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new $0(t)}),this.register(function(t){return new sx(t)}),this.register(function(t){return new ax(t)}),this.register(function(t){return new ex(t)}),this.register(function(t){return new tx(t)}),this.register(function(t){return new ix(t)}),this.register(function(t){return new rx(t)}),this.register(function(t){return new nx(t)}),this.register(function(t){return new K0(t)}),this.register(function(t){return new ox(t)})}load(e,t,i,r){const n=this;let a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=vi.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){r?r(c):console.error(c),n.manager.itemError(e),n.manager.itemEnd(e)},l=new gs(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{n.parse(c,a,function(h){t(h),n.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let n;const a={},o={};if(typeof e=="string")n=e;else if(vi.decodeText(new Uint8Array(e,0,4))===Jc){try{a[Le.KHR_BINARY_GLTF]=new lx(e)}catch(h){r&&r(h);return}n=a[Le.KHR_BINARY_GLTF].content}else n=vi.decodeText(new Uint8Array(e));const l=JSON.parse(n);if(l.asset===void 0||l.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new _x(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);o[u.name]=u,a[u.name]=!0}if(l.extensionsUsed)for(let h=0;h<l.extensionsUsed.length;++h){const u=l.extensionsUsed[h],d=l.extensionsRequired||[];switch(u){case Le.KHR_MATERIALS_UNLIT:a[u]=new Q0;break;case Le.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:a[u]=new ux;break;case Le.KHR_DRACO_MESH_COMPRESSION:a[u]=new cx(l,this.dracoLoader);break;case Le.KHR_TEXTURE_TRANSFORM:a[u]=new hx;break;case Le.KHR_MESH_QUANTIZATION:a[u]=new dx;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,r)}}function Z0(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Le={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class K0{constructor(e){this.parser=e,this.name=Le.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const n=t[i];n.extensions&&n.extensions[this.name]&&n.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,n.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const n=t.json,a=((n.extensions&&n.extensions[this.name]||{}).lights||[])[e];let o;const l=new ne(16777215);a.color!==void 0&&l.fromArray(a.color);const c=a.range!==void 0?a.range:0;switch(a.type){case"directional":o=new zc(l),o.target.position.set(0,0,-1),o.add(o.target);break;case"point":o=new Uc(l),o.distance=c;break;case"spot":o=new Nc(l),o.distance=c,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle!==void 0?a.spot.innerConeAngle:0,a.spot.outerConeAngle=a.spot.outerConeAngle!==void 0?a.spot.outerConeAngle:Math.PI/4,o.angle=a.spot.outerConeAngle,o.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+a.type)}return o.position.set(0,0,0),o.decay=2,a.intensity!==void 0&&(o.intensity=a.intensity),o.name=t.createUniqueName(a.name||"light_"+e),r=Promise.resolve(o),t.cache.add(i,r),r}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],n=(r.extensions&&r.extensions[this.name]||{}).light;return n===void 0?null:this._loadLight(n).then(function(a){return i._getNodeRef(t.cache,n,a)})}}class Q0{constructor(){this.name=Le.KHR_MATERIALS_UNLIT}getMaterialType(){return rt}extendParams(e,t,i){const r=[];e.color=new ne(1,1,1),e.opacity=1;const n=t.pbrMetallicRoughness;if(n){if(Array.isArray(n.baseColorFactor)){const a=n.baseColorFactor;e.color.fromArray(a),e.opacity=a[3]}n.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",n.baseColorTexture))}return Promise.all(r)}}class $0{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Gi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const n=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&n.push(i.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&n.push(i.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(n.push(i.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new J(o,o)}return Promise.all(n)}}class ex{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_SHEEN}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Gi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const n=[];t.sheenColor=new ne(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=r.extensions[this.name];return a.sheenColorFactor!==void 0&&t.sheenColor.fromArray(a.sheenColorFactor),a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&n.push(i.assignTexture(t,"sheenColorMap",a.sheenColorTexture)),a.sheenRoughnessTexture!==void 0&&n.push(i.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(n)}}class tx{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Gi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const n=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&n.push(i.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(n)}}class ix{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_VOLUME}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Gi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const n=[],a=r.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&n.push(i.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new ne(o[0],o[1],o[2]),Promise.all(n)}}class rx{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_IOR}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Gi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class nx{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_SPECULAR}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Gi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const n=[],a=r.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&n.push(i.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new ne(o[0],o[1],o[2]),a.specularColorTexture!==void 0&&n.push(i.assignTexture(t,"specularColorMap",a.specularColorTexture).then(function(l){l.encoding=vt})),Promise.all(n)}}class sx{constructor(e){this.parser=e,this.name=Le.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const n=r.extensions[this.name],a=i.images[n.source],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a,o)}}class ax{constructor(e){this.parser=e,this.name=Le.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,n=r.textures[e];if(!n.extensions||!n.extensions[t])return null;const a=n.extensions[t],o=r.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ox{constructor(e){this.name=Le.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],n=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Promise.all([n,a.ready]).then(function(o){const l=r.byteOffset||0,c=r.byteLength||0,h=r.count,u=r.byteStride,d=new ArrayBuffer(h*u),p=new Uint8Array(o[0],l,c);return a.decodeGltfBuffer(new Uint8Array(d),h,u,p,r.mode,r.filter),d})}else return null}}const Jc="glTF",jr=12,El={JSON:1313821514,BIN:5130562};class lx{constructor(e){this.name=Le.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,jr);if(this.header={magic:vi.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Jc)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-jr,r=new DataView(e,jr);let n=0;for(;n<i;){const a=r.getUint32(n,!0);n+=4;const o=r.getUint32(n,!0);if(n+=4,o===El.JSON){const l=new Uint8Array(e,jr+n,a);this.content=vi.decodeText(l)}else if(o===El.BIN){const l=jr+n;this.body=e.slice(l,l+a)}n+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class cx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Le.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,n=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=Ma[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=Ma[h]||h.toLowerCase();if(a[h]!==void 0){const d=i.accessors[e.attributes[h]],p=dn[d.componentType];c[u]=p,l[u]=d.normalized===!0}}return t.getDependency("bufferView",n).then(function(h){return new Promise(function(u){r.decodeDracoFile(h,function(d){for(const p in d.attributes){const g=d.attributes[p],v=l[p];v!==void 0&&(g.normalized=v)}u(d)},o,c)})})}}class hx{constructor(){this.name=Le.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class _a extends Rr{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),i=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),r=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	texelSpecular = sRGBToLinear( texelSpecular );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),n=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),a=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),o={specular:{value:new ne().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=o,this.onBeforeCompile=function(l){for(const c in o)l.uniforms[c]=o[c];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",i).replace("#include <roughnessmap_fragment>",r).replace("#include <metalnessmap_fragment>",n).replace("#include <lights_physical_fragment>",a)},Object.defineProperties(this,{specular:{get:function(){return o.specular.value},set:function(l){o.specular.value=l}},specularMap:{get:function(){return o.specularMap.value},set:function(l){o.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return o.glossiness.value},set:function(l){o.glossiness.value=l}},glossinessMap:{get:function(){return o.glossinessMap.value},set:function(l){o.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class ux{constructor(){this.name=Le.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity","refractionRatio"]}getMaterialType(){return _a}extendParams(e,t,i){const r=t.extensions[this.name];e.color=new ne(1,1,1),e.opacity=1;const n=[];if(Array.isArray(r.diffuseFactor)){const a=r.diffuseFactor;e.color.fromArray(a),e.opacity=a[3]}if(r.diffuseTexture!==void 0&&n.push(i.assignTexture(e,"map",r.diffuseTexture)),e.emissive=new ne(0,0,0),e.glossiness=r.glossinessFactor!==void 0?r.glossinessFactor:1,e.specular=new ne(1,1,1),Array.isArray(r.specularFactor)&&e.specular.fromArray(r.specularFactor),r.specularGlossinessTexture!==void 0){const a=r.specularGlossinessTexture;n.push(i.assignTexture(e,"glossinessMap",a)),n.push(i.assignTexture(e,"specularMap",a))}return Promise.all(n)}createMaterial(e){const t=new _a(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=1,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=Fi,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t.refractionRatio=.98,t}}class dx{constructor(){this.name=Le.KHR_MESH_QUANTIZATION}}class Ui extends $t{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,n=e*r*3+r;for(let a=0;a!==r;a++)t[a]=i[n+a];return t}}Ui.prototype.beforeStart_=Ui.prototype.copySampleValue_;Ui.prototype.afterEnd_=Ui.prototype.copySampleValue_;Ui.prototype.interpolate_=function(s,e,t,i){const r=this.resultBuffer,n=this.sampleValues,a=this.valueSize,o=a*2,l=a*3,c=i-e,h=(t-e)/c,u=h*h,d=u*h,p=s*l,g=p-l,v=-2*d+3*u,x=d-u,m=1-v,f=x-u+h;for(let w=0;w!==a;w++){const y=n[g+w+a],b=n[g+w+o]*c,L=n[p+w+a],_=n[p+w]*c;r[w]=m*y+f*b+v*L+x*_}return r};const px=new gt;class fx extends Ui{interpolate_(e,t,i,r){const n=super.interpolate_(e,t,i,r);return px.fromArray(n).normalize().toArray(n),n}}const qt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},dn={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Al={9728:Ze,9729:nt,9984:ha,9985:Hl,9986:ua,9987:wr},Ll={33071:_t,33648:Qn,10497:gr},Rl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ma={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},hi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},mx={CUBICSPLINE:void 0,LINEAR:vr,STEP:nn},sa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function gx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Rr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:mr})),s.DefaultMaterial}function Xr(s,e,t){for(const i in t.extensions)s[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ii(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function vx(s,e,t){let i=!1,r=!1;for(let o=0,l=e.length;o<l;o++){const c=e[o];if(c.POSITION!==void 0&&(i=!0),c.NORMAL!==void 0&&(r=!0),i&&r)break}if(!i&&!r)return Promise.resolve(s);const n=[],a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];if(i){const h=c.POSITION!==void 0?t.getDependency("accessor",c.POSITION):s.attributes.position;n.push(h)}if(r){const h=c.NORMAL!==void 0?t.getDependency("accessor",c.NORMAL):s.attributes.normal;a.push(h)}}return Promise.all([Promise.all(n),Promise.all(a)]).then(function(o){const l=o[0],c=o[1];return i&&(s.morphAttributes.position=l),r&&(s.morphAttributes.normal=c),s.morphTargetsRelative=!0,s})}function xx(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)s.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function yx(s){const e=s.extensions&&s.extensions[Le.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Cl(e.attributes):t=s.indices+":"+Cl(s.attributes)+":"+s.mode,t}function Cl(s){let e="";const t=Object.keys(s).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+s[t[i]]+";";return e}function wa(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}class _x{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Z0,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.textureCache={},this.nodeNamesUsed={},typeof createImageBitmap<"u"&&/Firefox/.test(navigator.userAgent)===!1?this.textureLoader=new kc(this.options.manager):this.textureLoader=new vs(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new gs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,n=this.extensions;this.cache.removeAll(),this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:i,userData:{}};Xr(n,o,r),Ii(o,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,n=t.length;r<n;r++){const a=t[r].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let r=0,n=e.length;r<n;r++){const a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),n=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())n(h,o.children[c])};return n(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const n=e(t[r]);n&&i.push(n)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this.loadNode(t);break;case"mesh":r=this._invokeOne(function(n){return n.loadMesh&&n.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(n){return n.loadBufferView&&n.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(n){return n.loadMaterial&&n.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(n){return n.loadTexture&&n.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this.loadAnimation(t);break;case"camera":r=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(n,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Le.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(n,a){i.load(vi.resolveURL(t.uri,r.path),n,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,n=t.byteOffset||0;return i.slice(n,n+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0)return Promise.resolve(null);const n=[];return r.bufferView!==void 0?n.push(this.getDependency("bufferView",r.bufferView)):n.push(null),r.sparse!==void 0&&(n.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),n.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(n).then(function(a){const o=a[0],l=Rl[r.type],c=dn[r.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let v,x;if(p&&p!==u){const m=Math.floor(d/p),f="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+m+":"+r.count;let w=t.cache.get(f);w||(v=new c(o,m*p,r.count*p/h),w=new Lr(v,p/h),t.cache.add(f,w)),x=new yr(w,l,d%p/h,g)}else o===null?v=new c(r.count*l):v=new c(o,d,r.count*l),x=new qe(v,l,g);if(r.sparse!==void 0){const m=Rl.SCALAR,f=dn[r.sparse.indices.componentType],w=r.sparse.indices.byteOffset||0,y=r.sparse.values.byteOffset||0,b=new f(a[1],w,r.sparse.count*m),L=new c(a[2],y,r.sparse.count*l);o!==null&&(x=new qe(x.array.slice(),x.itemSize,x.normalized));for(let _=0,O=b.length;_<O;_++){const V=b[_];if(x.setX(V,L[_*l]),l>=2&&x.setY(V,L[_*l+1]),l>=3&&x.setZ(V,L[_*l+2]),l>=4&&x.setW(V,L[_*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return x})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e],n=t.images[r.source];let a=this.textureLoader;if(n.uri){const o=i.manager.getHandler(n.uri);o!==null&&(a=o)}return this.loadTextureImage(e,n,a)}loadTextureImage(e,t,i){const r=this,n=this.json,a=this.options,o=n.textures[e],l=(t.uri||t.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=self.URL||self.webkitURL;let h=t.uri||"",u=!1;if(t.bufferView!==void 0)h=r.getDependency("bufferView",t.bufferView).then(function(p){u=!0;const g=new Blob([p],{type:t.mimeType});return h=c.createObjectURL(g),h});else if(t.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(h).then(function(p){return new Promise(function(g,v){let x=g;i.isImageBitmapLoader===!0&&(x=function(m){const f=new et(m);f.needsUpdate=!0,g(f)}),i.load(vi.resolveURL(p,a.path),x,void 0,v)})}).then(function(p){u===!0&&c.revokeObjectURL(h),p.flipY=!1,o.name&&(p.name=o.name);const g=(n.samplers||{})[o.sampler]||{};return p.magFilter=Al[g.magFilter]||nt,p.minFilter=Al[g.minFilter]||wr,p.wrapS=Ll[g.wrapS]||gr,p.wrapT=Ll[g.wrapT]||gr,r.associations.set(p,{textures:e}),p}).catch(function(){return console.error("THREE.GLTFLoader: Couldn't load texture",h),null});return this.textureCache[l]=d,d}assignTexture(e,t,i){const r=this;return this.getDependency("texture",i.index).then(function(n){if(i.texCoord!==void 0&&i.texCoord!=0&&!(t==="aoMap"&&i.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+i.texCoord+" for texture "+t+" not yet supported."),r.extensions[Le.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Le.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const o=r.associations.get(n);n=r.extensions[Le.KHR_TEXTURE_TRANSFORM].extendTexture(n,a),r.associations.set(n,o)}}return e[t]=n,n})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,n=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Ua,$e.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Hi,$e.prototype.copy.call(l,i),l.color.copy(i.color),this.cache.add(o,l)),i=l}if(r||n||a){let o="ClonedMaterial:"+i.uuid+":";i.isGLTFSpecularGlossinessMaterial&&(o+="specular-glossiness:"),r&&(o+="derivative-tangents:"),n&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),n&&(l.vertexColors=!0),a&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}i.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=i}getMaterialType(){return Rr}loadMaterial(e){const t=this,i=this.json,r=this.extensions,n=i.materials[e];let a;const o={},l=n.extensions||{},c=[];if(l[Le.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const u=r[Le.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];a=u.getMaterialType(),c.push(u.extendParams(o,n,t))}else if(l[Le.KHR_MATERIALS_UNLIT]){const u=r[Le.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,n,t))}else{const u=n.pbrMetallicRoughness||{};if(o.color=new ne(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.fromArray(d),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}n.doubleSided===!0&&(o.side=Ni);const h=n.alphaMode||sa.OPAQUE;if(h===sa.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.format=Kt,o.transparent=!1,h===sa.MASK&&(o.alphaTest=n.alphaCutoff!==void 0?n.alphaCutoff:.5)),n.normalTexture!==void 0&&a!==rt&&(c.push(t.assignTexture(o,"normalMap",n.normalTexture)),o.normalScale=new J(1,1),n.normalTexture.scale!==void 0)){const u=n.normalTexture.scale;o.normalScale.set(u,u)}return n.occlusionTexture!==void 0&&a!==rt&&(c.push(t.assignTexture(o,"aoMap",n.occlusionTexture)),n.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=n.occlusionTexture.strength)),n.emissiveFactor!==void 0&&a!==rt&&(o.emissive=new ne().fromArray(n.emissiveFactor)),n.emissiveTexture!==void 0&&a!==rt&&c.push(t.assignTexture(o,"emissiveMap",n.emissiveTexture)),Promise.all(c).then(function(){let u;return a===_a?u=r[Le.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(o):u=new a(o),n.name&&(u.name=n.name),u.map&&(u.map.encoding=vt),u.emissiveMap&&(u.emissiveMap.encoding=vt),Ii(u,n),t.associations.set(u,{materials:e}),n.extensions&&Xr(r,u,n),u})}createUniqueName(e){const t=Ne.sanitizeNodeName(e||"");let i=t;for(let r=1;this.nodeNamesUsed[i];++r)i=t+"_"+r;return this.nodeNamesUsed[i]=!0,i}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function n(o){return i[Le.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Pl(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=yx(c),u=r[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[Le.KHR_DRACO_MESH_COMPRESSION]?d=n(c):d=Pl(new Ue,c,t),r[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,r=this.extensions,n=i.meshes[e],a=n.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?gx(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,g=h.length;p<g;p++){const v=h[p],x=a[p];let m;const f=c[p];if(x.mode===qt.TRIANGLES||x.mode===qt.TRIANGLE_STRIP||x.mode===qt.TRIANGLE_FAN||x.mode===void 0)m=n.isSkinnedMesh===!0?new Da(v,f):new ke(v,f),m.isSkinnedMesh===!0&&!m.geometry.attributes.skinWeight.normalized&&m.normalizeSkinWeights(),x.mode===qt.TRIANGLE_STRIP?m.geometry=Il(m.geometry,Du):x.mode===qt.TRIANGLE_FAN&&(m.geometry=Il(m.geometry,Gl));else if(x.mode===qt.LINES)m=new gn(v,f);else if(x.mode===qt.LINE_STRIP)m=new ds(v,f);else if(x.mode===qt.LINE_LOOP)m=new xc(v,f);else if(x.mode===qt.POINTS)m=new yc(v,f);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(m.geometry.morphAttributes).length>0&&xx(m,n),m.name=t.createUniqueName(n.name||"mesh_"+e),Ii(m,n),x.extensions&&Xr(r,m,x),t.assignFinalMaterial(m),u.push(m)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return u[0];const d=new Ut;t.associations.set(d,{meshes:e});for(let p=0,g=u.length;p<g;p++)d.add(u[p]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new ut($u.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Mi(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ii(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(i):this.getDependency("accessor",t.inverseBindMatrices).then(function(r){return i.inverseBindMatrices=r,i})}loadAnimation(e){const t=this.json.animations[e],i=[],r=[],n=[],a=[],o=[];for(let l=0,c=t.channels.length;l<c;l++){const h=t.channels[l],u=t.samplers[h.sampler],d=h.target,p=d.node!==void 0?d.node:d.id,g=t.parameters!==void 0?t.parameters[u.input]:u.input,v=t.parameters!==void 0?t.parameters[u.output]:u.output;i.push(this.getDependency("node",p)),r.push(this.getDependency("accessor",g)),n.push(this.getDependency("accessor",v)),a.push(u),o.push(d)}return Promise.all([Promise.all(i),Promise.all(r),Promise.all(n),Promise.all(a),Promise.all(o)]).then(function(l){const c=l[0],h=l[1],u=l[2],d=l[3],p=l[4],g=[];for(let x=0,m=c.length;x<m;x++){const f=c[x],w=h[x],y=u[x],b=d[x],L=p[x];if(f===void 0)continue;f.updateMatrix(),f.matrixAutoUpdate=!0;let _;switch(hi[L.path]){case hi.weights:_=hn;break;case hi.rotation:_=Oi;break;case hi.position:case hi.scale:default:_=un;break}const O=f.name?f.name:f.uuid,V=b.interpolation!==void 0?mx[b.interpolation]:vr,N=[];hi[L.path]===hi.weights?f.traverse(function(ee){ee.isMesh===!0&&ee.morphTargetInfluences&&N.push(ee.name?ee.name:ee.uuid)}):N.push(O);let R=y.array;if(y.normalized){const ee=wa(R.constructor),F=new Float32Array(R.length);for(let E=0,D=R.length;E<D;E++)F[E]=R[E]*ee;R=F}for(let ee=0,F=N.length;ee<F;ee++){const E=new _(N[ee]+"."+hi[L.path],w.array,R,V);b.interpolation==="CUBICSPLINE"&&(E.createInterpolant=function(D){const I=this instanceof Oi?fx:Ui;return new I(this.times,this.values,this.getValueSize()/3,D)},E.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),g.push(E)}}const v=t.name?t.name:"animation_"+e;return new xa(v,void 0,g)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(n){const a=i._getNodeRef(i.meshCache,r.mesh,n);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=r.weights.length;l<c;l++)o.morphTargetInfluences[l]=r.weights[l]}),a})}loadNode(e){const t=this.json,i=this.extensions,r=this,n=t.nodes[e],a=n.name?r.createUniqueName(n.name):"";return function(){const o=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),n.camera!==void 0&&o.push(r.getDependency("camera",n.camera).then(function(c){return r._getNodeRef(r.cameraCache,n.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),Promise.all(o)}().then(function(o){let l;if(n.isBone===!0?l=new Na:o.length>1?l=new Ut:o.length===1?l=o[0]:l=new Oe,l!==o[0])for(let c=0,h=o.length;c<h;c++)l.add(o[c]);if(n.name&&(l.userData.name=n.name,l.name=a),Ii(l,n),n.extensions&&Xr(i,l,n),n.matrix!==void 0){const c=new me;c.fromArray(n.matrix),l.applyMatrix4(c)}else n.translation!==void 0&&l.position.fromArray(n.translation),n.rotation!==void 0&&l.quaternion.fromArray(n.rotation),n.scale!==void 0&&l.scale.fromArray(n.scale);return r.associations.has(l)||r.associations.set(l,{}),r.associations.get(l).nodes=e,l})}loadScene(e){const t=this.json,i=this.extensions,r=this.json.scenes[e],n=this,a=new Ut;r.name&&(a.name=n.createUniqueName(r.name)),Ii(a,r),r.extensions&&Xr(i,a,r);const o=r.nodes||[],l=[];for(let c=0,h=o.length;c<h;c++)l.push(Zc(o[c],a,t,n));return Promise.all(l).then(function(){const c=h=>{const u=new Map;for(const[d,p]of n.associations)(d instanceof $e||d instanceof et)&&u.set(d,p);return h.traverse(d=>{const p=n.associations.get(d);p!=null&&u.set(d,p)}),u};return n.associations=c(a),a})}}function Zc(s,e,t,i){const r=t.nodes[s];return i.getDependency("node",s).then(function(n){if(r.skin===void 0)return n;let a;return i.getDependency("skin",r.skin).then(function(o){a=o;const l=[];for(let c=0,h=a.joints.length;c<h;c++)l.push(i.getDependency("node",a.joints[c]));return Promise.all(l)}).then(function(o){return n.traverse(function(l){if(!l.isMesh)return;const c=[],h=[];for(let u=0,d=o.length;u<d;u++){const p=o[u];if(p){c.push(p);const g=new me;a.inverseBindMatrices!==void 0&&g.fromArray(a.inverseBindMatrices.array,u*16),h.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',a.joints[u])}l.bind(new Oa(c,h),l.matrixWorld)}),n})}).then(function(n){e.add(n);const a=[];if(r.children){const o=r.children;for(let l=0,c=o.length;l<c;l++){const h=o[l];a.push(Zc(h,n,t,i))}}return Promise.all(a)})}function Mx(s,e,t){const i=e.attributes,r=new Lt;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(r.set(new A(l[0],l[1],l[2]),new A(c[0],c[1],c[2])),o.normalized){const h=wa(dn[o.componentType]);r.min.multiplyScalar(h),r.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const n=e.targets;if(n!==void 0){const o=new A,l=new A;for(let c=0,h=n.length;c<h;c++){const u=n[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const v=wa(dn[d.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}s.boundingBox=r;const a=new Bi;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,s.boundingSphere=a}function Pl(s,e,t){const i=e.attributes,r=[];function n(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in i){const o=Ma[a]||a.toLowerCase();o in s.attributes||r.push(n(i[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});r.push(a)}return Ii(s,e),Mx(s,e,t),Promise.all(r).then(function(){return e.targets!==void 0?vx(s,e.targets,t):s})}function Il(s,e){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const i=t.count-2,r=[];if(e===Gl)for(let a=1;a<=i;a++)r.push(t.getX(0)),r.push(t.getX(a)),r.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(r.push(t.getX(a)),r.push(t.getX(a+1)),r.push(t.getX(a+2))):(r.push(t.getX(a+2)),r.push(t.getX(a+1)),r.push(t.getX(a)));r.length/3!==i&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const n=s.clone();return n.setIndex(r),n}class wx extends Bt{constructor(e){super(e)}load(e,t,i,r){const n=this,a=new gs(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(n.withCredentials),a.load(e,function(o){let l;try{l=JSON.parse(o)}catch{console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),l=JSON.parse(o.substring(65,o.length-2))}const c=n.parse(l);t&&t(c)},i,r)}parse(e){return new Kc(e)}}class Kc{constructor(e){this.type="Font",this.data=e}generateShapes(e,t=100){const i=[],r=bx(e,t,this.data);for(let n=0,a=r.length;n<a;n++)Array.prototype.push.apply(i,r[n].toShapes());return i}}function bx(s,e,t){const i=Array.from(s),r=e/t.resolution,n=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,a=[];let o=0,l=0;for(let c=0;c<i.length;c++){const h=i[c];if(h===`
`)o=0,l-=n;else{const u=Sx(h,r,o,l,t);o+=u.offsetX,a.push(u.path)}}return a}function Sx(s,e,t,i,r){const n=r.glyphs[s]||r.glyphs["?"];if(!n){console.error('THREE.Font: character "'+s+'" does not exists in font family '+r.familyName+".");return}const a=new i0;let o,l,c,h,u,d,p,g;if(n.o){const v=n._cachedOutline||(n._cachedOutline=n.o.split(" "));for(let x=0,m=v.length;x<m;)switch(v[x++]){case"m":o=v[x++]*e+t,l=v[x++]*e+i,a.moveTo(o,l);break;case"l":o=v[x++]*e+t,l=v[x++]*e+i,a.lineTo(o,l);break;case"q":c=v[x++]*e+t,h=v[x++]*e+i,u=v[x++]*e+t,d=v[x++]*e+i,a.quadraticCurveTo(u,d,c,h);break;case"b":c=v[x++]*e+t,h=v[x++]*e+i,u=v[x++]*e+t,d=v[x++]*e+i,p=v[x++]*e+t,g=v[x++]*e+i,a.bezierCurveTo(u,d,p,g,c,h);break}}return{offsetX:n.ha*e,path:a}}Kc.prototype.isFont=!0;function Tx(s){const e={},t=document.querySelector("#loading"),i=document.querySelector("#loading-items"),r=document.querySelector("#loading-bar-progress"),n=new Cc;n.onStart=function(l,c,h){console.log("Started loading file: "+l+`.
Loaded `+c+" of "+h+" files.")},n.onLoad=function(){i&&(i.textContent="Nearly There...",console.log("Loading complete!"),window.setTimeout(()=>{t.style.opacity="0",s(e)},200),window.setTimeout(()=>{t.style.display="none"},500))},n.onProgress=function(l,c,h){!i||!r||(r.style.transform=`scaleX(${c/h})`,i.textContent=`${c} of ${h} File Loaded: ${l}`,console.log("Loading file: "+l+`.
Loaded `+c+" of "+h+" files."))};const a=new wx(n);a.load("/fonts/public-pixel.json",l=>{e.publicPixelFont=l}),a.load("/fonts/chill.json",l=>{e.chillFont=l});const o=new vs(n);o.load("/textures/bake-quality-5.jpg",l=>{l.flipY=!1,l.encoding=vt,e.bakeTexture=l}),o.load("/textures/bake_floor-quality-3.jpg",l=>{l.flipY=!1,l.encoding=vt,e.bakeFloorTexture=l}),new Ic(n).load(["/textures/environmentMap/px.jpg","/textures/environmentMap/nx.jpg","/textures/environmentMap/py.jpg","/textures/environmentMap/ny.jpg","/textures/environmentMap/pz.jpg","/textures/environmentMap/nz.jpg"],l=>{e.environmentMapTexture=l}),new J0(n).load("/models/Commodore710_33.5.glb",l=>{e.screenMesh=l.scene.children.find(c=>c.name==="Screen"),e.computerMesh=l.scene.children.find(c=>c.name==="Computer"),e.crtMesh=l.scene.children.find(c=>c.name==="CRT"),e.keyboardMesh=l.scene.children.find(c=>c.name==="Keyboard"),e.shadowPlaneMesh=l.scene.children.find(c=>c.name==="ShadowPlane")})}function Tt(s,e,t){const i=(s-e[0])/(e[1]-e[0])*(t[1]-t[0])+t[0];if(t[0]<t[1]){if(i<t[0])return t[0];if(i>t[1])return t[1]}else{if(i>t[0])return t[0];if(i<t[1])return t[1]}return i}let Qc=document.documentElement.clientHeight,ui=window.scrollY/document.documentElement.clientHeight;window.addEventListener("scroll",s=>{ui=window.scrollY/Qc},{passive:!0});function Ex(){Tx(s=>{const e=new Y0,t=window.location.hash;if(t&&t.toLowerCase()==="#debug"){e.showPanel(0),document.body.appendChild(e.dom);const b=document.getElementById("textarea");b.style.zIndex="3",b.style.opacity="1"}const i=document.querySelector("canvas.webgl");i||console.error("no canvas");const r={width:document.documentElement.clientWidth,height:window.innerHeight,portraitOffset:Tt(window.innerHeight/document.documentElement.clientWidth,[.75,1.75],[0,2])},n=new mn,a=new Bc(16777215,.55);n.add(a),n.background=new ne(16176305);const o=new ut(50,r.width/r.height,.1,100);o.position.set(0,0,-2.5),o.rotation.set(-Math.PI,0,Math.PI),n.add(o);const l={computerHeight:1.5,computerAngle:Math.PI*.2,computerHorizontal:.5,minAzimuthAngleOffest:-Math.PI*.3,maxAzimuthAngleOffest:Math.PI*.3,minPolarAngleOffest:-Math.PI*.3,maxPolarAngleOffest:0};let c=null;function h(b){b.pointerType!=="mouse"&&(c=null,u.x=0,u.y=0)}const u={x:0,y:0};i.addEventListener("pointermove",b=>{h(b),c&&(u.x+=(b.clientX-c.x)/(window.innerWidth*.5),u.x=Tt(u.x,[-1,1],[-1,1]),u.y+=(b.clientY-c.y)/(window.innerHeight*.5),u.y=Tt(u.y,[-1,1],[-1,1]),c={x:b.clientX,y:b.clientY})},{passive:!0}),i.addEventListener("pointerdown",b=>{h(b),c={x:b.clientX,y:b.clientY}},{passive:!0}),document.addEventListener("pointerup",b=>{h(b),c=null},{passive:!0});const d=new Fe({canvas:i});d.setSize(r.width,r.height),d.setPixelRatio(2),d.outputEncoding=vt;function p(b,L){o.aspect=b/L,o.updateProjectionMatrix(),d.setSize(b,L)}window.addEventListener("resize",()=>{Qc=document.documentElement.clientHeight,r.width=document.documentElement.clientWidth,r.height=window.innerHeight,p(r.width,r.height),r.portraitOffset=Tt(r.height/r.width,[.8,1.8],[0,2.5])},{passive:!0});const g=W0(s,d),v=new Er(1,1,1),x=new ke(v,new rt({color:"blue"}));x.scale.x=1.33;const m=new rt({map:s.bakeTexture}),f=new Ut;s.screenMesh.material=g.screenRenderEngine.material,f.add(s.screenMesh),s.computerMesh.material=m,f.add(s.computerMesh),s.crtMesh.material=m,f.add(s.crtMesh),s.keyboardMesh.material=m,f.add(s.keyboardMesh),s.shadowPlaneMesh.material=new rt({map:s.bakeFloorTexture}),f.add(s.shadowPlaneMesh),f.position.x=l.computerHorizontal,f.position.y=l.computerHeight,f.rotation.y=l.computerAngle,n.add(f);const w=new Gc,y=()=>{e.begin();const b=n0(),L=w.getElapsedTime(),_=Tt(ui,[0,1],[0,1]);o.position.z=Tt(ui,[0,1],[-2.5-r.portraitOffset,-10-r.portraitOffset]),f.position.x=l.computerHorizontal*_,f.position.y=Tt(ui,[0,1],[0,l.computerHeight]),f.rotation.y=l.computerAngle*_,o.position.x=u.x*Tt(ui,[0,1],[.2,5])*.1+o.position.x*.9,o.position.y=u.y*Tt(ui,[0,1],[.2,1.5])*.1+o.position.y*.9,o.lookAt(new A(0,0,0)),i.style.opacity=`${Tt(ui,[1.25,1.75],[1,0])}`,r.portraitOffset>.5?f.rotation.z=Tt(ui,[0,1],[-Math.PI/2,0]):f.rotation.z=0,s.crtMesh.morphTargetInfluences&&(s.crtMesh.morphTargetInfluences[0]=Tt(_,[0,.1],[.5,0])),g.tick(b,L),d.setRenderTarget(null),d.render(n,o),e.end(),window.requestAnimationFrame(y)};window.requestAnimationFrame(y)})}Ex();const Dl=document.documentElement;function $c(){window.scrollY>10?Dl.dataset.scroll="true":Dl.dataset.scroll="false"}$c();window.addEventListener("scroll",$c,{passive:!0});
