import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background pt-16 md:pt-24">
      <div className="container relative z-10 flex flex-col items-center justify-center space-y-8 py-16 text-center md:py-24">
        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Introducing VECO</div>
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          The AI-powered platform for <span className="text-primary">sustainable investing</span>
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Personalized investment journeys based on your preferences, time horizon, and risk tolerance, all while
          aligning capital with the UN Sustainable Development Goals.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="/signup">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/learn-more">Learn More</Link>
          </Button>
        </div>
        <div className="relative mt-8 w-full max-w-5xl rounded-lg border bg-background/50 p-2 shadow-xl backdrop-blur">
          <Image
            src="/images/veco-app-interface.png"
            width={1200}
            height={600}
            alt="VECO Mobile App Interface showing portfolio tracking, ESG scores, and sustainable investment metrics"
            className="rounded-md"
            priority
          />
          <div className="absolute -bottom-4 -right-4 rounded-full bg-primary p-4 text-primary-foreground shadow-lg">
            <span className="text-sm font-medium">AI-Powered</span>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0 opacity-30">
        <svg className="h-full w-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </section>
  )
}
