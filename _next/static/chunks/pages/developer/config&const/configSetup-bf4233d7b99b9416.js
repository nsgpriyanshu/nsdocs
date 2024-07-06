(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[703],{7086:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/developer/config&const/configSetup",function(){return s(2935)}])},2935:function(e,n,s){"use strict";s.r(n),s.d(n,{__toc:function(){return c}});var o=s(5893),t=s(2673),r=s(1334),i=s(2069);s(9488);var l=s(2643),a=s(2154);let c=[{depth:3,value:"Project Structure",id:"project-structure"},{depth:3,value:"Adding .env Configurations",id:"adding-env-configurations"},{depth:3,value:"Adding Metadata",id:"adding-metadata"}];function d(e){let n=Object.assign({h1:"h1",p:"p",h3:"h3",code:"code",pre:"pre",span:"span"},(0,l.a)(),e.components);return a.zH||h("FileTree",!1),a.zH.File||h("FileTree.File",!0),a.zH.Folder||h("FileTree.Folder",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{children:"Setting up Configurations"}),"\n",(0,o.jsx)(n.p,{children:"In this section we will configure our necessary configurations. so lets begin."}),"\n",(0,o.jsxs)(a.Rg,{children:[(0,o.jsx)(n.h3,{id:"project-structure",children:"Project Structure"}),(0,o.jsxs)(n.p,{children:["First, create a folder named ",(0,o.jsx)(n.code,{children:"configs"})," inside the ",(0,o.jsx)(n.code,{children:"src"})," directory. Inside this ",(0,o.jsx)(n.code,{children:"configs"})," folder, create a file named ",(0,o.jsx)(n.code,{children:"botConfig.ts"})," and ",(0,o.jsx)(n.code,{children:"metadata.ts"}),". This files will hold the configuration settings for your project."]}),(0,o.jsx)(a.zH,{children:(0,o.jsx)(a.zH.Folder,{name:"nsCore",defaultOpen:!0,children:(0,o.jsx)(a.zH.Folder,{name:"src",defaultOpen:!0,children:(0,o.jsxs)(a.zH.Folder,{name:"configs",children:[(0,o.jsx)(a.zH.File,{name:"botConfig.ts"}),(0,o.jsx)(a.zH.File,{name:"metadata.ts"})]})})})}),(0,o.jsxs)(n.h3,{id:"adding-env-configurations",children:["Adding ",(0,o.jsx)(n.code,{children:".env"})," Configurations"]}),(0,o.jsxs)(n.p,{children:["Now, remember that we have created an ",(0,o.jsx)(n.code,{children:".env"})," file. We cannot implement this ",(0,o.jsx)(n.code,{children:".env"})," file directly into our project. Instead, we will use a configuration system to integrate these environment variables via our config file."]}),(0,o.jsx)(a.UW,{type:"info",children:(0,o.jsxs)(n.p,{children:["You can directly import your ",(0,o.jsx)(n.code,{children:".env"})," variables into your project, but it is a better approach to\nuse a configuration file. This provides a more reliable way to manage configurations and allows\nyou to define types, which is a main advantage of TypeScript."]})}),(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.code,{children:"botConfig.ts"})," file, we will add our configurations:"]}),(0,o.jsx)(n.pre,{"data-language":"ts","data-theme":"default",filename:"src/configs/botConfig.ts",hasCopyCode:!0,children:(0,o.jsxs)(n.code,{"data-line-numbers":"","data-language":"ts","data-theme":"default","data-line-numbers-max-digits":"2",children:[(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" dotenv "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'dotenv'"})]}),"\n",(0,o.jsx)(n.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"dotenv"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:".config"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,o.jsx)(n.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"interface"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"BotConfig"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  BOT_TOKEN"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"string"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  BOT_ID"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"string"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  SERVER_ID"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"string"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  DEVELOPER_IDS"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"[]"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  ERROR_CHANNEL"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"string"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  GATE_CHANNEL"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"string"})]}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,o.jsx)(n.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"config"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"BotConfig"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  BOT_TOKEN"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"process"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"env"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"AUTH_TOKEN"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"as"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  BOT_ID"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"process"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"env"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"CLIENT_ID"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"as"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  SERVER_ID"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"process"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"env"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"SERVER_ID"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"as"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  DEVELOPER_IDS"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"process"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"env"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"DEVELOPER_IDS"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"||"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"''"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:".split"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"','"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  ERROR_CHANNEL"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"process"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"env"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"ERROR_CHANNEL_ID"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"as"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  GATE_CHANNEL"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"process"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"env"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"JOIN_GATE_CHANNEL_ID"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"as"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,o.jsx)(n.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" config"})]})]})}),(0,o.jsxs)(n.p,{children:["This setup will load the environment variables from the ",(0,o.jsx)(n.code,{children:".env"})," file and make them available throughout your project."]}),(0,o.jsx)(n.h3,{id:"adding-metadata",children:"Adding Metadata"}),(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.code,{children:"metadata.ts"})," file, we will add our prefix and name:"]}),(0,o.jsxs)(a.UW,{children:["Add your app ",(0,o.jsx)(n.code,{children:"name"})," and app ",(0,o.jsx)(n.code,{children:"prefix"}),"."]}),(0,o.jsx)(n.pre,{"data-language":"ts","data-theme":"default",filename:"src/configs/metadata.ts",hasCopyCode:!0,children:(0,o.jsxs)(n.code,{"data-line-numbers":"","data-language":"ts","data-theme":"default","data-line-numbers-max-digits":"1",children:[(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"BOT"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(n.span,{className:"line highlighted",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  PREFIX"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ns.'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(n.span,{className:"line highlighted",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  NAME"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'nsCore'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),(0,o.jsx)(a.UW,{type:"info",children:(0,o.jsx)(n.p,{children:"This file will help us to store our metadatas, which will be required in future also, you can more\nmetadatas as of your need."})})]}),"\n",(0,o.jsx)(n.p,{children:"Done, successfully we have setted our configurations, lets move ahead."})]})}function h(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}let p={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,l.a)(),e.components);return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"src/pages/developer/config&const/configSetup.mdx",route:"/developer/config&const/configSetup",timestamp:1718442877e3,pageMap:[{kind:"Meta",data:{index:"Introduction",developer:"Developer"}},{kind:"Folder",name:"developer",route:"/developer",children:[{kind:"Meta",data:{gettingStarted:"Getting Started",settings:"Settings",codeFormatters:"Code Formatting",ignoringFiles:"Ignoring Files","config&const":"Config. & Const. Setup",interfaceSetup:"Interfaces",eventSetup:"Events",utilSetup:"Utils",handlerSetup:"Handlers",commandSetup:"Commands",advance:"Advance"}},{kind:"Folder",name:"advance",route:"/developer/advance",children:[{kind:"Meta",data:{introduction:"Introduction",scripts:"Required Scripts",index:"Core"}},{kind:"MdxPage",name:"index",route:"/developer/advance"},{kind:"MdxPage",name:"introduction",route:"/developer/advance/introduction"},{kind:"MdxPage",name:"scripts",route:"/developer/advance/scripts"}]},{kind:"MdxPage",name:"codeFormatters",route:"/developer/codeFormatters"},{kind:"Folder",name:"commandSetup",route:"/developer/commandSetup",children:[{kind:"Meta",data:{index:"Getting Started",messageCommands:"Message Commands",slashCommands:"Slash Commands"}},{kind:"MdxPage",name:"index",route:"/developer/commandSetup"},{kind:"MdxPage",name:"messageCommands",route:"/developer/commandSetup/messageCommands"},{kind:"MdxPage",name:"slashCommands",route:"/developer/commandSetup/slashCommands"}]},{kind:"Folder",name:"config&const",route:"/developer/config&const",children:[{kind:"Meta",data:{index:"Getting Started",configSetup:"Setting up Configurations",constSetup:"Setting up Constants"}},{kind:"MdxPage",name:"configSetup",route:"/developer/config&const/configSetup"},{kind:"MdxPage",name:"constSetup",route:"/developer/config&const/constSetup"},{kind:"MdxPage",name:"index",route:"/developer/config&const"}]},{kind:"Folder",name:"eventSetup",route:"/developer/eventSetup",children:[{kind:"Meta",data:{index:"Introduction",ready:"Ready Event",messageCreate:"Message Create Event",interactionCreate:"Interaction Create Event",centralize:"Centralize Handler"}},{kind:"MdxPage",name:"centralize",route:"/developer/eventSetup/centralize"},{kind:"MdxPage",name:"index",route:"/developer/eventSetup"},{kind:"MdxPage",name:"interactionCreate",route:"/developer/eventSetup/interactionCreate"},{kind:"MdxPage",name:"messageCreate",route:"/developer/eventSetup/messageCreate"},{kind:"MdxPage",name:"ready",route:"/developer/eventSetup/ready"}]},{kind:"MdxPage",name:"gettingStarted",route:"/developer/gettingStarted"},{kind:"Folder",name:"handlerSetup",route:"/developer/handlerSetup",children:[{kind:"Meta",data:{index:"Introduction",cmd:"Command Handler",error:"Error Handler"}},{kind:"MdxPage",name:"cmd",route:"/developer/handlerSetup/cmd"},{kind:"MdxPage",name:"error",route:"/developer/handlerSetup/error"},{kind:"MdxPage",name:"index",route:"/developer/handlerSetup"}]},{kind:"MdxPage",name:"ignoringFiles",route:"/developer/ignoringFiles"},{kind:"Folder",name:"interfaceSetup",route:"/developer/interfaceSetup",children:[{kind:"Meta",data:{index:"Getting Started",extendedClient:"Extended Client",command:"Command"}},{kind:"MdxPage",name:"command",route:"/developer/interfaceSetup/command"},{kind:"MdxPage",name:"extendedClient",route:"/developer/interfaceSetup/extendedClient"},{kind:"MdxPage",name:"index",route:"/developer/interfaceSetup"}]},{kind:"MdxPage",name:"settings",route:"/developer/settings"},{kind:"Folder",name:"utilSetup",route:"/developer/utilSetup",children:[{kind:"Meta",data:{index:"Getting Started",logger:"Logger Function",deployCommand:"Deployment Function"}},{kind:"MdxPage",name:"deployCommand",route:"/developer/utilSetup/deployCommand"},{kind:"MdxPage",name:"index",route:"/developer/utilSetup"},{kind:"MdxPage",name:"logger",route:"/developer/utilSetup/logger"}]}]},{kind:"MdxPage",name:"index",route:"/"}],flexsearch:{codeblocks:!0},title:"Setting up Configurations",headings:c},pageNextRoute:"/developer/config&const/configSetup",nextraLayout:r.ZP,themeConfig:i.Z};n.default=(0,t.j)(p)},2069:function(e,n,s){"use strict";var o=s(5893);s(7294);var t=s(1163),r=s(1334);let i={useNextSeoProps(){let{frontMatter:e}=(0,r.ZR)();return{titleTemplate:"%s – nsDocs",defaultTitle:"nsDocs",description:e.description||"A comprehensive, production-level guide for developing and managing a Discord app effectively.",twitter:{handle:"@nsgpriyanshu",site:"@nsgpriyanshu",cardType:"summary_large_image"},openGraph:{type:"website",url:"https://nsgpriyanshu.github.io/nsdocs",site_name:"nsDocs",title:e.title||"nsDocs",description:e.description||"A comprehensive, production-level guide for developing and managing a Discord app effectively."}}},logo:(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,o.jsx)("img",{src:"./logo.png",alt:"nsCore",style:{height:"2rem",marginRight:"0.5rem"}}),(0,o.jsx)("span",{style:{fontWeight:700},children:"nsDocs"})]}),project:{link:"https://github.com/nsgpriyanshu/nsdocs"},chat:{link:"https://discord.gg/G44dR8Zjwx"},docsRepositoryBase:"https://github.com/nsgpriyanshu/nsdocs",footer:{text:"Developed by ŊʂƓ ᴾᴿᴵᵞᴬᴺˢᴴᵁ"},sidebar:{toggleButton:!0},head:()=>{let{asPath:e,defaultLocale:n,locale:s}=(0,t.useRouter)(),{frontMatter:i}=(0,r.ZR)(),l="https://nsgpriyanshu.github.io/nsdocs"+(n===s?e:"/".concat(s).concat(e));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("meta",{property:"og:url",content:l}),(0,o.jsx)("meta",{property:"og:title",content:i.title||"nsDocs"}),(0,o.jsx)("meta",{property:"og:description",content:i.description||"A production level discord app guide"}),(0,o.jsx)("meta",{property:"og:image",content:"./preview.png"}),(0,o.jsx)("meta",{property:"og:site_name",content:"nsDocs"}),(0,o.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.jsx)("meta",{name:"twitter:site",content:"@nsgpriyanshu"}),(0,o.jsx)("meta",{name:"twitter:creator",content:"@nsgpriyanshu"}),(0,o.jsx)("meta",{name:"twitter:title",content:i.title||"nsDocs"}),(0,o.jsx)("meta",{name:"twitter:description",content:i.description||"A production level discord app guide"}),(0,o.jsx)("meta",{name:"twitter:image",content:"./preview.png"}),(0,o.jsx)("meta",{name:"keywords",content:"Discord, app, guide, production-level, nsDocs"}),(0,o.jsx)("meta",{name:"author",content:"ŊʂƓ ᴾᴿᴵᵞᴬᴺˢᴴᵁ"}),(0,o.jsx)("meta",{property:"robots",content:"index, follow"}),(0,o.jsx)("link",{rel:"canonical",href:"https://nsgpriyanshu.github.io/nsdocs"}),(0,o.jsx)("link",{rel:"icon",href:"./favicon.ico",type:"image/x-icon"})]})}};n.Z=i},5789:function(){}},function(e){e.O(0,[235,888,774,179],function(){return e(e.s=7086)}),_N_E=e.O()}]);