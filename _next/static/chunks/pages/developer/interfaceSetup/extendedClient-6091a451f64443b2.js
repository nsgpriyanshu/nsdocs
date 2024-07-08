(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[642],{1835:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/developer/interfaceSetup/extendedClient",function(){return t(7135)}])},7135:function(e,n,t){"use strict";t.r(n),t.d(n,{__toc:function(){return l}});var o=t(5893),r=t(2673),i=t(1334),s=t(2069);t(9488);var a=t(2643),d=t(2154);let l=[{depth:3,value:"Project Structure",id:"project-structure"},{depth:3,value:"Create ExtendedClient.ts",id:"create-extendedclientts"}];function c(e){let n=Object.assign({h1:"h1",p:"p",code:"code",h3:"h3",pre:"pre",span:"span"},(0,a.a)(),e.components);return d.zH||p("FileTree",!1),d.zH.File||p("FileTree.File",!0),d.zH.Folder||p("FileTree.Folder",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{children:"Extended Client"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"Extended Client"})," refers to an enhanced version of the standard Discord client provided by the ",(0,o.jsx)(n.code,{children:"discord.js"})," library. By extending the base client, we can add custom properties and methods that are specific to our bot's needs. This could include additional configurations, utility functions, or other custom features that the standard client does not provide."]}),"\n",(0,o.jsxs)(d.Rg,{children:[(0,o.jsx)(n.h3,{id:"project-structure",children:"Project Structure"}),(0,o.jsxs)(n.p,{children:["First, create a folder named ",(0,o.jsx)(n.code,{children:"interfaces"})," inside the ",(0,o.jsx)(n.code,{children:"src"})," directory. Inside this ",(0,o.jsx)(n.code,{children:"interfaces"})," folder, create a file named ",(0,o.jsx)(n.code,{children:"ExtendedClient.ts"}),". This files will hold the constants for your project."]}),(0,o.jsx)(d.zH,{children:(0,o.jsx)(d.zH.Folder,{name:"nsCore",defaultOpen:!0,children:(0,o.jsx)(d.zH.Folder,{name:"src",defaultOpen:!0,children:(0,o.jsx)(d.zH.Folder,{name:"interfaces",children:(0,o.jsx)(d.zH.File,{name:"ExtendedClient.ts"})})})})}),(0,o.jsxs)(n.h3,{id:"create-extendedclientts",children:["Create ",(0,o.jsx)(n.code,{children:"ExtendedClient.ts"})]}),(0,o.jsx)(d.UW,{type:"info",children:"You can extend your client as you want!"}),(0,o.jsx)(n.pre,{"data-language":"ts","data-theme":"default",filename:"src/interfaces/ExtendedClient.ts",hasCopyCode:!0,children:(0,o.jsxs)(n.code,{"data-line-numbers":"","data-language":"ts","data-theme":"default","data-line-numbers-max-digits":"1",children:[(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" { Client"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" Collection } "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'discord.js'"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" { Command } "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./Command'"})]}),"\n",(0,o.jsx)(n.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"interface"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"ExtendedClient"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"extends"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"Client"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  events"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"Collection"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"args"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"any"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"[]) "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"void"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  messageCommands"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"Collection"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"Command"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  slashCommands"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"Collection"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"Command"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})})]}),"\n",(0,o.jsx)(n.p,{children:"Alright, now let's move ahead!"})]})}function p(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}let h={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.a)(),e.components);return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"src/pages/developer/interfaceSetup/extendedClient.mdx",route:"/developer/interfaceSetup/extendedClient",timestamp:1718442877e3,pageMap:[{kind:"Meta",data:{index:"Introduction",developer:"Developer"}},{kind:"Folder",name:"developer",route:"/developer",children:[{kind:"Meta",data:{gettingStarted:"Getting Started",settings:"Settings",codeFormatters:"Code Formatting",ignoringFiles:"Ignoring Files","config&const":"Config. & Const. Setup",interfaceSetup:"Interfaces",eventSetup:"Events",utilSetup:"Utils",handlerSetup:"Handlers",commandSetup:"Commands",advance:"Advance"}},{kind:"Folder",name:"advance",route:"/developer/advance",children:[{kind:"Meta",data:{introduction:"Introduction",scripts:"Required Scripts",index:"Core"}},{kind:"MdxPage",name:"index",route:"/developer/advance"},{kind:"MdxPage",name:"introduction",route:"/developer/advance/introduction"},{kind:"MdxPage",name:"scripts",route:"/developer/advance/scripts"}]},{kind:"MdxPage",name:"codeFormatters",route:"/developer/codeFormatters"},{kind:"Folder",name:"commandSetup",route:"/developer/commandSetup",children:[{kind:"Meta",data:{index:"Getting Started",messageCommands:"Message Commands",slashCommands:"Slash Commands"}},{kind:"MdxPage",name:"index",route:"/developer/commandSetup"},{kind:"MdxPage",name:"messageCommands",route:"/developer/commandSetup/messageCommands"},{kind:"MdxPage",name:"slashCommands",route:"/developer/commandSetup/slashCommands"}]},{kind:"Folder",name:"config&const",route:"/developer/config&const",children:[{kind:"Meta",data:{index:"Getting Started",configSetup:"Setting up Configurations",constSetup:"Setting up Constants"}},{kind:"MdxPage",name:"configSetup",route:"/developer/config&const/configSetup"},{kind:"MdxPage",name:"constSetup",route:"/developer/config&const/constSetup"},{kind:"MdxPage",name:"index",route:"/developer/config&const"}]},{kind:"Folder",name:"eventSetup",route:"/developer/eventSetup",children:[{kind:"Meta",data:{index:"Introduction",ready:"Ready Event",messageCreate:"Message Create Event",interactionCreate:"Interaction Create Event",centralize:"Centralize Handler"}},{kind:"MdxPage",name:"centralize",route:"/developer/eventSetup/centralize"},{kind:"MdxPage",name:"index",route:"/developer/eventSetup"},{kind:"MdxPage",name:"interactionCreate",route:"/developer/eventSetup/interactionCreate"},{kind:"MdxPage",name:"messageCreate",route:"/developer/eventSetup/messageCreate"},{kind:"MdxPage",name:"ready",route:"/developer/eventSetup/ready"}]},{kind:"MdxPage",name:"gettingStarted",route:"/developer/gettingStarted"},{kind:"Folder",name:"handlerSetup",route:"/developer/handlerSetup",children:[{kind:"Meta",data:{index:"Introduction",cmd:"Command Handler",error:"Error Handler"}},{kind:"MdxPage",name:"cmd",route:"/developer/handlerSetup/cmd"},{kind:"MdxPage",name:"error",route:"/developer/handlerSetup/error"},{kind:"MdxPage",name:"index",route:"/developer/handlerSetup"}]},{kind:"MdxPage",name:"ignoringFiles",route:"/developer/ignoringFiles"},{kind:"Folder",name:"interfaceSetup",route:"/developer/interfaceSetup",children:[{kind:"Meta",data:{index:"Getting Started",extendedClient:"Extended Client",command:"Command"}},{kind:"MdxPage",name:"command",route:"/developer/interfaceSetup/command"},{kind:"MdxPage",name:"extendedClient",route:"/developer/interfaceSetup/extendedClient"},{kind:"MdxPage",name:"index",route:"/developer/interfaceSetup"}]},{kind:"MdxPage",name:"settings",route:"/developer/settings"},{kind:"Folder",name:"utilSetup",route:"/developer/utilSetup",children:[{kind:"Meta",data:{index:"Getting Started",logger:"Logger Function",deployCommand:"Deployment Function"}},{kind:"MdxPage",name:"deployCommand",route:"/developer/utilSetup/deployCommand"},{kind:"MdxPage",name:"index",route:"/developer/utilSetup"},{kind:"MdxPage",name:"logger",route:"/developer/utilSetup/logger"}]}]},{kind:"MdxPage",name:"index",route:"/"}],flexsearch:{codeblocks:!0},title:"Extended Client",headings:l},pageNextRoute:"/developer/interfaceSetup/extendedClient",nextraLayout:i.ZP,themeConfig:s.Z};n.default=(0,r.j)(h)},2069:function(e,n,t){"use strict";var o=t(5893);t(7294);var r=t(1163),i=t(1334);let s={useNextSeoProps(){let{frontMatter:e}=(0,i.ZR)();return{titleTemplate:"%s – nsDocs",defaultTitle:"nsDocs",description:e.description||"A comprehensive, production-level guide for developing and managing a Discord app effectively.",twitter:{handle:"@nsgpriyanshu",site:"@nsgpriyanshu",cardType:"summary_large_image"},openGraph:{type:"website",url:"https://nsgpriyanshu.github.io/nsdocs",site_name:"nsDocs",title:e.title||"nsDocs",description:e.description||"A comprehensive, production-level guide for developing and managing a Discord app effectively."}}},logo:(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,o.jsx)("img",{src:"./logo.png",alt:"nsCore",style:{height:"2rem",marginRight:"0.5rem"}}),(0,o.jsx)("span",{style:{fontWeight:700},children:"nsDocs"})]}),project:{link:"https://github.com/nsgpriyanshu/nsdocs"},chat:{link:"https://discord.gg/G44dR8Zjwx"},docsRepositoryBase:"https://github.com/nsgpriyanshu/nsdocs",footer:{text:"Developed by ŊʂƓ ᴾᴿᴵᵞᴬᴺˢᴴᵁ"},sidebar:{toggleButton:!0},head:()=>{let{asPath:e,defaultLocale:n,locale:t}=(0,r.useRouter)(),{frontMatter:s}=(0,i.ZR)(),a="https://nsgpriyanshu.github.io/nsdocs"+(n===t?e:"/".concat(t).concat(e));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("meta",{property:"og:url",content:a}),(0,o.jsx)("meta",{property:"og:title",content:s.title||"nsDocs"}),(0,o.jsx)("meta",{property:"og:description",content:s.description||"A production level discord app guide"}),(0,o.jsx)("meta",{property:"og:image",content:"https://nsgpriyanshu.github.io/nsdocs/preview.png"}),(0,o.jsx)("meta",{property:"og:site_name",content:"nsDocs"}),(0,o.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.jsx)("meta",{name:"twitter:site",content:"@nsgpriyanshu"}),(0,o.jsx)("meta",{name:"twitter:creator",content:"@nsgpriyanshu"}),(0,o.jsx)("meta",{name:"twitter:title",content:s.title||"nsDocs"}),(0,o.jsx)("meta",{name:"twitter:description",content:s.description||"A production level discord app guide"}),(0,o.jsx)("meta",{name:"twitter:image",content:"https://nsgpriyanshu.github.io/nsdocs/preview.png"}),(0,o.jsx)("meta",{name:"keywords",content:"Discord, app, guide, production-level, nsDocs"}),(0,o.jsx)("meta",{name:"author",content:"ŊʂƓ ᴾᴿᴵᵞᴬᴺˢᴴᵁ"}),(0,o.jsx)("meta",{property:"robots",content:"index, follow"}),(0,o.jsx)("link",{rel:"canonical",href:"https://nsgpriyanshu.github.io/nsdocs"}),(0,o.jsx)("link",{rel:"icon",href:"https://nsgpriyanshu.github.io/nsdocs/favicon.ico",type:"image/x-icon"})]})}};n.Z=s},5789:function(){}},function(e){e.O(0,[235,888,774,179],function(){return e(e.s=1835)}),_N_E=e.O()}]);