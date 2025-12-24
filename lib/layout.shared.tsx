import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'
import Image from 'next/image'

export const logo = (
  <>
    {/* Light theme logo */}
    <Image
      alt="ns Docs"
      src="/logo-light.png"
      height={25}
      width={25}
      className="block dark:hidden"
      aria-label="ns Docs"
      priority
    />

    {/* Dark theme logo */}
    <Image
      alt="ns Docs"
      src="/logo-dark.png"
      height={25}
      width={25}
      className="hidden dark:block"
      aria-label="ns Docs"
      priority
    />
  </>
)

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          {logo}
          <span className="font-medium">ns Docs</span>
        </div>
      ),
    },
  }
}
