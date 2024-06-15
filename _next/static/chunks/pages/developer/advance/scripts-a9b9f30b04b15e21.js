(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[506],{1908:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/developer/advance/scripts",function(){return s(158)}])},158:function(e,n,s){"use strict";s.r(n),s.d(n,{__toc:function(){return d}});var r=s(5893),t=s(2673),i=s(1334),o=s(2069);s(9488);var a=s(2643),l=s(2154);let d=[{depth:2,value:"Creating scripts",id:"creating-scripts"}];function c(e){let n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",span:"span"},(0,a.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{children:"Scripts"}),"\n",(0,r.jsxs)(n.p,{children:["Before moving to the ",(0,r.jsx)(n.code,{children:"index.ts"})," file, ensure that you have configured your scripts properly in the ",(0,r.jsx)(n.code,{children:"package.json"})," file."]}),"\n",(0,r.jsxs)(n.h2,{id:"creating-scripts",children:["Creating ",(0,r.jsx)(n.code,{children:"scripts"})]}),"\n",(0,r.jsxs)(n.p,{children:["Now, in the ",(0,r.jsx)(n.code,{children:"package.json"})," file, add these scripts:"]}),"\n",(0,r.jsx)(n.pre,{"data-language":"ts","data-theme":"default",filename:"/package.json",hasCopyCode:!0,children:(0,r.jsxs)(n.code,{"data-line-numbers":"","data-language":"ts","data-theme":"default","data-line-numbers-max-digits":"2",children:[(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"scripts"'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:": {"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"test"'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"npx jest"'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"clean"'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"rimraf dist types"'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"build"'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"npx tsc"'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"format:check"'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"npx prettier . --check"'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"format:write"'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"npx prettier . --write"'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"deploy"'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"node dist/utils/deployCommands.js"'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"start"'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"node dist/index.js"'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"execute"'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"npm run clean && npm run build && npm run format:write && npm run start"'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"cleanStart"'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"npm run clean && npm run build && npm run start"'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"noCleanStart"'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"npm run build && npm run start"'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"lint"'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"\"eslint 'src/**/*.{ts,tsx}'\""}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"lint:fix"'}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"\"eslint 'src/**/*.{ts,tsx}' --fix\""})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]})]})}),"\n",(0,r.jsx)(l.UW,{type:"info",children:"You can add more scripts as needed."}),"\n",(0,r.jsx)(n.p,{children:"Alright, let's move to the last part."})]})}let p={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.a)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"src/pages/developer/advance/scripts.mdx",route:"/developer/advance/scripts",timestamp:1718442877e3,pageMap:[{kind:"Meta",data:{index:"Introduction",developer:"Developer"}},{kind:"Folder",name:"developer",route:"/developer",children:[{kind:"Meta",data:{gettingStarted:"Getting Started",settings:"Settings",codeFormatters:"Code Formatting",ignoringFiles:"Ignoring Files","config&const":"Config. & Const. Setup",interfaceSetup:"Interfaces",eventSetup:"Events",utilSetup:"Utils",handlerSetup:"Handlers",commandSetup:"Commands",advance:"Advance"}},{kind:"Folder",name:"advance",route:"/developer/advance",children:[{kind:"Meta",data:{introduction:"Introduction",scripts:"Required Scripts",index:"Core"}},{kind:"MdxPage",name:"index",route:"/developer/advance"},{kind:"MdxPage",name:"introduction",route:"/developer/advance/introduction"},{kind:"MdxPage",name:"scripts",route:"/developer/advance/scripts"}]},{kind:"MdxPage",name:"codeFormatters",route:"/developer/codeFormatters"},{kind:"Folder",name:"commandSetup",route:"/developer/commandSetup",children:[{kind:"Meta",data:{index:"Getting Started",messageCommands:"Message Commands",slashCommands:"Slash Commands"}},{kind:"MdxPage",name:"index",route:"/developer/commandSetup"},{kind:"MdxPage",name:"messageCommands",route:"/developer/commandSetup/messageCommands"},{kind:"MdxPage",name:"slashCommands",route:"/developer/commandSetup/slashCommands"}]},{kind:"Folder",name:"config&const",route:"/developer/config&const",children:[{kind:"Meta",data:{index:"Getting Started",configSetup:"Setting up Configurations",constSetup:"Setting up Constants"}},{kind:"MdxPage",name:"configSetup",route:"/developer/config&const/configSetup"},{kind:"MdxPage",name:"constSetup",route:"/developer/config&const/constSetup"},{kind:"MdxPage",name:"index",route:"/developer/config&const"}]},{kind:"Folder",name:"eventSetup",route:"/developer/eventSetup",children:[{kind:"Meta",data:{index:"Introduction",ready:"Ready Event",messageCreate:"Message Create Event",interactionCreate:"Interaction Create Event",centralize:"Centralize Handler"}},{kind:"MdxPage",name:"centralize",route:"/developer/eventSetup/centralize"},{kind:"MdxPage",name:"index",route:"/developer/eventSetup"},{kind:"MdxPage",name:"interactionCreate",route:"/developer/eventSetup/interactionCreate"},{kind:"MdxPage",name:"messageCreate",route:"/developer/eventSetup/messageCreate"},{kind:"MdxPage",name:"ready",route:"/developer/eventSetup/ready"}]},{kind:"MdxPage",name:"gettingStarted",route:"/developer/gettingStarted"},{kind:"Folder",name:"handlerSetup",route:"/developer/handlerSetup",children:[{kind:"Meta",data:{index:"Introduction",cmd:"Command Handler",error:"Error Handler"}},{kind:"MdxPage",name:"cmd",route:"/developer/handlerSetup/cmd"},{kind:"MdxPage",name:"error",route:"/developer/handlerSetup/error"},{kind:"MdxPage",name:"index",route:"/developer/handlerSetup"}]},{kind:"MdxPage",name:"ignoringFiles",route:"/developer/ignoringFiles"},{kind:"Folder",name:"interfaceSetup",route:"/developer/interfaceSetup",children:[{kind:"Meta",data:{index:"Getting Started",extendedClient:"Extended Client",command:"Command"}},{kind:"MdxPage",name:"command",route:"/developer/interfaceSetup/command"},{kind:"MdxPage",name:"extendedClient",route:"/developer/interfaceSetup/extendedClient"},{kind:"MdxPage",name:"index",route:"/developer/interfaceSetup"}]},{kind:"MdxPage",name:"settings",route:"/developer/settings"},{kind:"Folder",name:"utilSetup",route:"/developer/utilSetup",children:[{kind:"Meta",data:{index:"Getting Started",logger:"Logger Function",deployCommand:"Deployment Function"}},{kind:"MdxPage",name:"deployCommand",route:"/developer/utilSetup/deployCommand"},{kind:"MdxPage",name:"index",route:"/developer/utilSetup"},{kind:"MdxPage",name:"logger",route:"/developer/utilSetup/logger"}]}]},{kind:"MdxPage",name:"index",route:"/"}],flexsearch:{codeblocks:!0},title:"Scripts",headings:d},pageNextRoute:"/developer/advance/scripts",nextraLayout:i.ZP,themeConfig:o.Z};n.default=(0,t.j)(p)},2069:function(e,n,s){"use strict";var r=s(5893);s(7294);let t={useNextSeoProps:()=>({titleTemplate:"%s – nsDocs"}),logo:(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,r.jsx)("img",{src:"/nscorebot.png",alt:"nsCore",style:{height:"2rem",marginRight:"0.5rem"}}),(0,r.jsx)("span",{style:{fontWeight:700},children:"nsDocs"})]}),project:{link:"https://github.com/nsgpriyanshu/nsdocs"},chat:{link:"https://discord.gg/G44dR8Zjwx"},docsRepositoryBase:"https://github.com/nsgpriyanshu/nsdocs",footer:{text:"Developed by ŊʂƓ ᴾᴿᴵᵞᴬᴺˢᴴᵁ "}};n.Z=t},5789:function(){}},function(e){e.O(0,[235,888,774,179],function(){return e(e.s=1908)}),_N_E=e.O()}]);