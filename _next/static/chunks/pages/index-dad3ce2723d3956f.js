(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{75557:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6616)}])},19710:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var a=t(85893),r=t(67294),o=t(33756),i=t(82400),s=t(7735),l=t(14205),c=t(32587);async function d(e){e.createDefaultCamera(!0,!0);var n=e.cameras.pop();n.name="arcCam",n.alpha=3,n.beta=1,n.useFramingBehavior=!0;let t=n.getBehaviorByName("Framing");t.framingTime=0,t.elevationReturnTime=-1;let a=e.getWorldExtends();t.zoomOnBoundingInfo(a.min,a.max),n.pinchPrecision=200/n.radius,n.lowerRadiusLimit=50,n.upperRadiusLimit=1*n.radius,n.radius=800,n.wheelDeltaPercentage=.01,n.pinchDeltaPercentage=.01,n.attachControl(!0,!0),n.panningSensibility=6.5;let r=new c.e("hemi",0,e);e.lights.push(r);let o=e.createDefaultEnvironment();return e.environmentTexture=new i.BtG("/textures/studio.env",e),o.setMainColor(i.Wot.Gray()),e.cameras[0]=n,n}async function u(e){let n=new XMLHttpRequest;var t=new Headers({"Access-Control-Allow-Origin":"*","Content-Type":"binary",mode:"cors"});n.open("GET",e,t),n.send(),n.onload=function(){if(200!==n.status){console.log("Error:"+n.status);return}}}async function h(e,n){let t=e.getNodeByName("__root__");(await i.n0n.LoadAssetContainerAsync(n).then(e=>{let n=e.meshes[0];return n.rotationQuaternion=null,n.rotate(i.RDh.X,Math.PI/2,i.TaI.LOCAL),e.materials.forEach((e,n)=>{e.clearCoat.isEnabled=!0,e.clearCoat.intensity=1,e.clearCoat.roughness=.5}),e})).addAllToScene(),e.render(!0,!0),null!=t&&(t.dispose(),e.render(!0,!0))}async function f(e,n,t){let a=!0,r=0,o=!1;await h(n,t[r]);let c=await d(n);n.render(!0,!0),e.hideLoadingUI(),await t.map(e=>u(e)),n.render(!0,!0),e.runRenderLoop(function(){c.update(),a&&(a=!a,n.executeWhenReady(()=>a=!0),n.render(!0,!0))}),c.onViewMatrixChangedObservable.add(()=>{a=!0});let f=s.in.CreateFullscreenUI("UI"),m=new s.eL("stackPanel");m.isVertical=!1,m.height="100px",m.fontSize="14px",m.horizontalAlignment=s.oT.HORIZONTAL_ALIGNMENT_CENTER;let p=new s.eL("stackOutside");p.verticalAlignment=s.oT.VERTICAL_ALIGNMENT_TOP,p.addControl(m),f.addControl(p);let x=s.zx.CreateSimpleButton("Play","Play");x.width="50px",x.height="25px",x.color="white",x.background="gray",x.onPointerDownObservable.add(()=>{(o=!o)?(x.textBlock.text="Pause",v.handle=setInterval(()=>{r=++r%t.length,v.value=r},83)):(x.textBlock.text="Play",clearInterval(v.handle),n.render(!0,!0))}),m.addControl(x);let v=new s.iR("FrameSlider");return v.value=r,v.minimum=0,v.maximum=t.length-1,v.step=1,v.isThumbCircle=!0,v.isThumbClamped=!0,v.height="20px",v.width="200px",v.onValueChangedObservable.add(e=>{var a;a=t[e],i.n0n.LoadAssetContainer(a,"",n,function(e){let t=e.meshes[0];return t.rotationQuaternion=null,t.rotate(i.RDh.X,Math.PI/2,i.TaI.LOCAL),e.materials.forEach((e,n)=>{e.clearCoat.isEnabled=!0,e.clearCoat.intensity=1,e.clearCoat.roughness=.5}),e.addAllToScene(),n.rootNodes[0].dispose(),n.render(!0,!0),e}),n.render(!0,!0),r=e}),v.onPointerDownObservable.add(()=>{o&&(x.textBlock.text="Play",clearInterval(v.handle))}),m.addControl(v),v.value=r,n.onKeyboardObservable.add(e=>{if(e.type===l.OG.KEYDOWN)switch(e.event.key){case"z":o&&(clearInterval(v.handle),x.textBlock.text="Play",o=!o),--r<0&&(r=t.length-1),v.value=r;break;case"x":o&&(clearInterval(v.handle),x.textBlock.text="Play",o=!o),r=++r%t.length,v.value=r}}),c}t(88475);class m extends r.Component{onSceneMount(e){let{scene:n}=e,t=n.getEngine(),a=function(e){let{scenesRoot:n,startNum:t,numFiles:a,filePrefix:r}=e;return Array.from(Array(a),(e,n)=>n+t).map(e=>n+r+e+".glb")}(this);t.displayLoadingUI(),new i.YfP("RequiredCam",new i.Pa4(0,1,0),n),f(t,n,a)}render(){return(0,a.jsx)(o.D4V,{antialias:!0,adaptToDeviceRatio:!0,canvasId:this.props.canvasId,children:(0,a.jsx)(o.xsS,{onSceneMount:this.onSceneMount,scenesRoot:this.props.scenesRoot,startNum:this.props.startNum,numFiles:this.props.numFiles,filePrefix:this.props.filePrefix})})}}m.defaultProps={scenesRoot:"https://cdn.glitch.me/",startNum:1,numFiles:100,filePrefix:"7ce5375e-6fda-4d57-96e1-a13cdcbc8894%2Fbcell_"}},19144:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var a=t(85893),r=t(9008),o=t.n(r);function i(e){return(0,a.jsxs)(o(),{children:[(0,a.jsx)("title",{children:e.title}),(0,a.jsx)("meta",{charSet:"utf-8"}),(0,a.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]})}var s=t(25675),l=t.n(s),c=t(82873),d=t.n(c);function u(){return(0,a.jsxs)("footer",{className:d().footer,children:["Made with\xa0",(0,a.jsx)(l(),{priority:!0,src:"/netliheart.svg",alt:"Netlify Logo",className:d().logo,width:20,height:20}),"\xa0by",(0,a.jsx)("strong",{children:"\xa0MinesBioImaging"})]})}var h=t(41664),f=t.n(h),m=t(86275),p=t.n(m);function x(){return(0,a.jsx)("div",{className:p().navbar,children:(0,a.jsxs)("div",{className:p().dropdown,children:[(0,a.jsx)("button",{className:p().dropbtn,children:"Mouse Red Cells"}),(0,a.jsxs)("div",{className:p().dropdown_content,children:[(0,a.jsx)(f(),{href:"/",passHref:!0,children:"BCell Surface IgG"}),(0,a.jsx)(f(),{href:"/cd47ko",passHref:!0,children:"CD47KO mRBC"})]})]})})}function v(e){let{children:n,title:t="The all new BabylonJS-Viewer!"}=e;return(0,a.jsxs)("div",{children:[(0,a.jsx)(i,{title:t}),(0,a.jsx)(x,{}),(0,a.jsx)("main",{children:n}),(0,a.jsx)(u,{})]})}},6616:function(e,n,t){"use strict";t.r(n),t.d(n,{LocalViewer:function(){return i},default:function(){return i}});var a=t(85893),r=t(19144),o=t(19710);function i(){return(0,a.jsxs)(r.Z,{title:"Babylon-Viewer",children:[(0,a.jsx)("strong",{children:"Surface Distance and IgG Intensity"}),(0,a.jsx)(o.Z,{canvasId:"renderCanvas",scenesRoot:"https://cdn.glitch.global/",filePrefix:"6be17edd-dcbb-423e-9d69-f82f3a6e02df/EatWil_",startNum:19,numFiles:30})]})}},82873:function(e){e.exports={footer:"Footer_footer__Tl1eP"}},86275:function(e){e.exports={navbar:"navbar_navbar__jP4A8",dropdown:"navbar_dropdown__8E7Uj",dropbtn:"navbar_dropbtn__sVKvK",dropdown_content:"navbar_dropdown_content__xqz5e"}}},function(e){e.O(0,[928,770,942,568,315,436,774,888,179],function(){return e(e.s=75557)}),_N_E=e.O()}]);