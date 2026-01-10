import defaultMdxComponents from 'fumadocs-ui/mdx'
import type { MDXComponents } from 'mdx/types'
import * as TabsComponents from 'fumadocs-ui/components/tabs'
import { Files, Folder, File } from 'fumadocs-ui/components/files'

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...TabsComponents,
    ...components,
    Files,
    Folder,
    File,
  }
}
