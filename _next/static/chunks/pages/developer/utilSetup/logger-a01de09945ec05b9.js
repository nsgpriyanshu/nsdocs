(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[863],{3108:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/developer/utilSetup/logger",function(){return t(1586)}])},1586:function(e,n,t){"use strict";t.r(n),t.d(n,{__toc:function(){return c}});var o=t(5893),r=t(2673),s=t(1334),i=t(2069);t(9488);var a=t(2643),l=t(2154);let c=[{depth:3,value:"Project Structure",id:"project-structure"},{depth:3,value:"Creating logger.ts",id:"creating-loggerts"}];function d(e){let n=Object.assign({h1:"h1",p:"p",code:"code",h3:"h3",pre:"pre",span:"span"},(0,a.a)(),e.components);return l.zH||p("FileTree",!1),l.zH.File||p("FileTree.File",!0),l.zH.Folder||p("FileTree.Folder",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{children:"Logger Function"}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.code,{children:"logger"})," function is used to record various types of messages and events that occur during the execution of an application. This can include error messages, informational messages, warnings, and debugging information. The primary advantage of using a ",(0,o.jsx)(n.code,{children:"logger"})," function is to provide an easy way to track and monitor the application's behavior and performance. It helps in debugging, analyzing issues, and maintaining the application more effectively."]}),"\n",(0,o.jsxs)(l.Rg,{children:[(0,o.jsx)(n.h3,{id:"project-structure",children:"Project Structure"}),(0,o.jsxs)(n.p,{children:["First, create a folder named ",(0,o.jsx)(n.code,{children:"utils"}),", and inside this folder, create a file named ",(0,o.jsx)(n.code,{children:"logger.ts"}),"."]}),(0,o.jsx)(l.zH,{children:(0,o.jsx)(l.zH.Folder,{name:"src",defaultOpen:!0,children:(0,o.jsx)(l.zH.Folder,{name:"utils",defaultOpen:!0,children:(0,o.jsx)(l.zH.File,{name:"logger.ts"})})})}),(0,o.jsxs)(n.h3,{id:"creating-loggerts",children:["Creating ",(0,o.jsx)(n.code,{children:"logger.ts"})]}),(0,o.jsxs)(n.p,{children:["Now, here is the logic for ",(0,o.jsx)(n.code,{children:"logger.ts"}),":"]}),(0,o.jsxs)(l.UW,{type:"warning",children:["Highly suggested to use ",(0,o.jsx)(n.code,{children:"nstypocolors"})," only!"]}),(0,o.jsx)(n.pre,{"data-language":"ts","data-theme":"default",filename:"src/utils/logger.ts",hasCopyCode:!0,children:(0,o.jsxs)(n.code,{"data-line-numbers":"","data-language":"ts","data-theme":"default","data-line-numbers-max-digits":"1",children:[(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" { logPastelGreen"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" logPastelLavender"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" logPastelRed"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" logPastelYellow } "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'nstypocolors'"})]}),"\n",(0,o.jsx)(n.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"logger"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"log"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" (message"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"logPastelGreen"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`[LOG] "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"${"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"message"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"}"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"sLog"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" (message"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"logPastelLavender"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`[SUCCESS] "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"${"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"message"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"}"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"warn"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" (message"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"logPastelYellow"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`[WARN] "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"${"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"message"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"}"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"error"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" (message"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"logPastelRed"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`[ERROR] "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"${"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"message"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"}"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),(0,o.jsx)(l.UW,{type:"info",children:(0,o.jsx)(n.p,{children:"You can add more logging functions like this to enhance your application's functionality."})}),(0,o.jsx)(n.p,{children:"That's it! Now go ahead."})]})]})}function p(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}let h={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.a)(),e.components);return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"src/pages/developer/utilSetup/logger.mdx",route:"/developer/utilSetup/logger",timestamp:1718442877e3,pageMap:[{kind:"Meta",data:{index:"Introduction",developer:"Developer"}},{kind:"Folder",name:"developer",route:"/developer",children:[{kind:"Meta",data:{gettingStarted:"Getting Started",settings:"Settings",codeFormatters:"Code Formatting",ignoringFiles:"Ignoring Files","config&const":"Config. & Const. Setup",interfaceSetup:"Interfaces",eventSetup:"Events",utilSetup:"Utils",handlerSetup:"Handlers",commandSetup:"Commands",advance:"Advance"}},{kind:"Folder",name:"advance",route:"/developer/advance",children:[{kind:"Meta",data:{introduction:"Introduction",scripts:"Required Scripts",index:"Core"}},{kind:"MdxPage",name:"index",route:"/developer/advance"},{kind:"MdxPage",name:"introduction",route:"/developer/advance/introduction"},{kind:"MdxPage",name:"scripts",route:"/developer/advance/scripts"}]},{kind:"MdxPage",name:"codeFormatters",route:"/developer/codeFormatters"},{kind:"Folder",name:"commandSetup",route:"/developer/commandSetup",children:[{kind:"Meta",data:{index:"Getting Started",messageCommands:"Message Commands",slashCommands:"Slash Commands"}},{kind:"MdxPage",name:"index",route:"/developer/commandSetup"},{kind:"MdxPage",name:"messageCommands",route:"/developer/commandSetup/messageCommands"},{kind:"MdxPage",name:"slashCommands",route:"/developer/commandSetup/slashCommands"}]},{kind:"Folder",name:"config&const",route:"/developer/config&const",children:[{kind:"Meta",data:{index:"Getting Started",configSetup:"Setting up Configurations",constSetup:"Setting up Constants"}},{kind:"MdxPage",name:"configSetup",route:"/developer/config&const/configSetup"},{kind:"MdxPage",name:"constSetup",route:"/developer/config&const/constSetup"},{kind:"MdxPage",name:"index",route:"/developer/config&const"}]},{kind:"Folder",name:"eventSetup",route:"/developer/eventSetup",children:[{kind:"Meta",data:{index:"Introduction",ready:"Ready Event",messageCreate:"Message Create Event",interactionCreate:"Interaction Create Event",centralize:"Centralize Handler"}},{kind:"MdxPage",name:"centralize",route:"/developer/eventSetup/centralize"},{kind:"MdxPage",name:"index",route:"/developer/eventSetup"},{kind:"MdxPage",name:"interactionCreate",route:"/developer/eventSetup/interactionCreate"},{kind:"MdxPage",name:"messageCreate",route:"/developer/eventSetup/messageCreate"},{kind:"MdxPage",name:"ready",route:"/developer/eventSetup/ready"}]},{kind:"MdxPage",name:"gettingStarted",route:"/developer/gettingStarted"},{kind:"Folder",name:"handlerSetup",route:"/developer/handlerSetup",children:[{kind:"Meta",data:{index:"Introduction",cmd:"Command Handler",error:"Error Handler"}},{kind:"MdxPage",name:"cmd",route:"/developer/handlerSetup/cmd"},{kind:"MdxPage",name:"error",route:"/developer/handlerSetup/error"},{kind:"MdxPage",name:"index",route:"/developer/handlerSetup"}]},{kind:"MdxPage",name:"ignoringFiles",route:"/developer/ignoringFiles"},{kind:"Folder",name:"interfaceSetup",route:"/developer/interfaceSetup",children:[{kind:"Meta",data:{index:"Getting Started",extendedClient:"Extended Client",command:"Command"}},{kind:"MdxPage",name:"command",route:"/developer/interfaceSetup/command"},{kind:"MdxPage",name:"extendedClient",route:"/developer/interfaceSetup/extendedClient"},{kind:"MdxPage",name:"index",route:"/developer/interfaceSetup"}]},{kind:"MdxPage",name:"settings",route:"/developer/settings"},{kind:"Folder",name:"utilSetup",route:"/developer/utilSetup",children:[{kind:"Meta",data:{index:"Getting Started",logger:"Logger Function",deployCommand:"Deployment Function"}},{kind:"MdxPage",name:"deployCommand",route:"/developer/utilSetup/deployCommand"},{kind:"MdxPage",name:"index",route:"/developer/utilSetup"},{kind:"MdxPage",name:"logger",route:"/developer/utilSetup/logger"}]}]},{kind:"MdxPage",name:"index",route:"/"}],flexsearch:{codeblocks:!0},title:"Logger Function",headings:c},pageNextRoute:"/developer/utilSetup/logger",nextraLayout:s.ZP,themeConfig:i.Z};n.default=(0,r.j)(h)},2069:function(e,n,t){"use strict";var o=t(5893);t(7294);var r=t(1163),s=t(1334);let i={useNextSeoProps(){let{frontMatter:e}=(0,s.ZR)();return{titleTemplate:"%s – nsDocs",defaultTitle:"nsDocs",description:e.description||"A comprehensive, production-level guide for developing and managing a Discord app effectively.",twitter:{handle:"@nsgpriyanshu",site:"@nsgpriyanshu",cardType:"summary_large_image"},openGraph:{type:"website",url:"https://nsgpriyanshu.github.io/nsdocs",site_name:"nsDocs",title:e.title||"nsDocs",description:e.description||"A comprehensive, production-level guide for developing and managing a Discord app effectively."}}},logo:(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,o.jsx)("img",{src:"./logo.png",alt:"nsCore",style:{height:"2rem",marginRight:"0.5rem"}}),(0,o.jsx)("span",{style:{fontWeight:700},children:"nsDocs"})]}),project:{link:"https://github.com/nsgpriyanshu/nsdocs"},chat:{link:"https://discord.gg/G44dR8Zjwx"},docsRepositoryBase:"https://github.com/nsgpriyanshu/nsdocs",footer:{text:"Developed by ŊʂƓ ᴾᴿᴵᵞᴬᴺˢᴴᵁ"},sidebar:{toggleButton:!0},head:()=>{let{asPath:e,defaultLocale:n,locale:t}=(0,r.useRouter)(),{frontMatter:i}=(0,s.ZR)(),a="https://nsgpriyanshu.github.io/nsdocs"+(n===t?e:"/".concat(t).concat(e));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("meta",{property:"og:url",content:a}),(0,o.jsx)("meta",{property:"og:title",content:i.title||"nsDocs"}),(0,o.jsx)("meta",{property:"og:description",content:i.description||"A production level discord app guide"}),(0,o.jsx)("meta",{property:"og:image",content:"/og-image.png"}),(0,o.jsx)("meta",{property:"og:site_name",content:"nsDocs"}),(0,o.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.jsx)("meta",{name:"twitter:site",content:"@nsgpriyanshu"}),(0,o.jsx)("meta",{name:"twitter:creator",content:"@nsgpriyanshu"}),(0,o.jsx)("meta",{name:"twitter:title",content:i.title||"nsDocs"}),(0,o.jsx)("meta",{name:"twitter:description",content:i.description||"A production level discord app guide"}),(0,o.jsx)("meta",{name:"twitter:image",content:"/twitter-image.png"}),(0,o.jsx)("meta",{name:"keywords",content:"Discord, app, guide, production-level, nsDocs"}),(0,o.jsx)("meta",{name:"author",content:"ŊʂƓ ᴾᴿᴵᵞᴬᴺˢᴴᵁ"}),(0,o.jsx)("meta",{property:"robots",content:"index, follow"}),(0,o.jsx)("link",{rel:"canonical",href:"https://nsgpriyanshu.github.io/nsdocs"}),(0,o.jsx)("link",{rel:"icon",href:"./favicon.ico",type:"image/x-icon"})]})}};n.Z=i},5789:function(){}},function(e){e.O(0,[235,888,774,179],function(){return e(e.s=3108)}),_N_E=e.O()}]);