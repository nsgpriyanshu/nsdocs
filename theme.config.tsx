import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s – nsDocs',
    }
  },
  logo: (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src="/nscorebot.png" alt="nsCore" style={{ height: '2rem', marginRight: '0.5rem' }} />
      <span style={{ fontWeight: 700 }}>nsDocs</span>
    </div>
  ),
  project: {
    link: 'https://github.com/nsgpriyanshu/nsdocs',
  },
  chat: {
    link: 'https://discord.gg/G44dR8Zjwx',
  },
  docsRepositoryBase: 'https://github.com/nsgpriyanshu/nsdocs',
  footer: {
    text: 'Developed by ŊʂƓ ᴾᴿᴵᵞᴬᴺˢᴴᵁ ',
  },
}

export default config
