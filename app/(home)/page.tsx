import Link from 'next/link'
import Image from 'next/image'
import { Package, Github, Book, Sparkles } from 'lucide-react'

export default function HomePage() {
  return (
    <main className="px-6 py-12 lg:px-20 lg:py-24">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left: Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <span
            className="
    inline-flex items-center mb-4
    px-3 py-1 rounded-full
    text-sm font-medium
    text-blue-600 dark:text-blue-400
    bg-blue-500/10 dark:bg-blue-400/10
    ring-1 ring-blue-500/20 dark:ring-blue-400/20
    backdrop-blur
  "
          >
            v2.0.0
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-6">ns Docs</h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-12">
            A centralized documentation hub for all the open-source projects built and maintained by{' '}
            <span className="font-medium">nsgpriyanshu</span>.
          </p>

          {/* Projects */}
          <div className="flex flex-col gap-8 items-center lg:items-start mb-12">
            {/* nsCore */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <Book className="size-6" />
                <span className="text-base text-muted-foreground">Documentation for</span>
                <Link
                  href="/docs/nscore"
                  className="relative font-medium text-[#ff382e]
                    after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                    after:w-full after:bg-[#ff382e] after:scale-x-0
                    after:origin-left after:transition-transform
                    hover:after:scale-x-100"
                >
                  nsCore
                </Link>
              </div>

              {/* Repo link */}
              <div className="flex items-center gap-2 pl-9 text-sm text-muted-foreground">
                <Github className="size-4" />
                <Link
                  href="https://github.com/nsgpriyanshu/nscore"
                  target="_blank"
                  className="hover:text-foreground transition"
                >
                  GitHub Repository
                </Link>
              </div>
            </div>

            {/* nsTypoColors */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <Package className="size-6" />
                <span className="text-base text-muted-foreground">Documentation for</span>
                <Link
                  href="/docs/nstypocolors"
                  className="relative font-medium text-[#ff00ba]
                    after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                    after:w-full after:bg-[#ff00ba] after:scale-x-0
                    after:origin-left after:transition-transform
                    hover:after:scale-x-100"
                >
                  nsTypoColors
                </Link>
              </div>

              {/* Repo link */}
              <div className="flex items-center gap-2 pl-9 text-sm text-muted-foreground">
                <Github className="size-4" />
                <Link
                  href="https://github.com/nsgpriyanshu/nstypocolors"
                  target="_blank"
                  className="hover:text-foreground transition"
                >
                  GitHub Repository
                </Link>
              </div>
            </div>
            <Link
              href="https://github.com/nsgpriyanshu"
              target="_blank"
              className="
    inline-flex items-center gap-2
    px-3 py-1.5 rounded-full
    text-sm font-medium
    text-yellow-700 dark:text-yellow-400
    bg-yellow-400/10 dark:bg-yellow-300/10
    ring-1 ring-yellow-400/20 dark:ring-yellow-300/20
    backdrop-blur
    hover:bg-yellow-400/15 dark:hover:bg-yellow-300/15
    transition-colors
  "
            >
              <Sparkles className="size-4" />
              Star on GitHub
            </Link>
          </div>
        </div>

        {/* Right: Image with Gradient Glow */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-xl lg:max-w-4xl">
            {/* Gradient Glow */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-40">
              <div
                className="
    h-full w-full rounded-full
    bg-gradient-to-tr
    from-[#ff382e]/40 via-[#ff00ba]/40 to-[#6a5cff]/40
    dark:from-[#ff382e]/60 dark:via-[#ff00ba]/60 dark:to-[#6a5cff]/60
    dark:blur-[120px]
  "
              />
            </div>

            {/* Light Image */}
            <Image
              src="/hero-light.png"
              alt="nsDocs preview"
              width={1600}
              height={1200}
              className="rounded-xl block dark:hidden"
              priority
            />

            {/* Dark Image */}
            <Image
              src="/hero-dark.png"
              alt="nsDocs preview"
              width={1600}
              height={1200}
              className="rounded-xl hidden dark:block"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  )
}
