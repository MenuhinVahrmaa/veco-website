import Link from "next/link"
import { ArrowRight, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HeroSection } from "@/components/hero-section"
import { FeatureSection } from "@/components/feature-section"
import { CompetitorSection } from "@/components/competitor-section"
import { RevenueSection } from "@/components/revenue-section"
import { AiSection } from "@/components/ai-section"
import { GrowthSection } from "@/components/growth-section"
import { SdgSection } from "@/components/sdg-section"
import { FoundersSection } from "@/components/founders-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">VECO</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#founders" className="text-sm font-medium hover:text-primary">
              Team
            </Link>
            <Link href="#competitors" className="text-sm font-medium hover:text-primary">
              Competitors
            </Link>
            <Link href="#revenue" className="text-sm font-medium hover:text-primary">
              Revenue Model
            </Link>
            <Link href="#technology" className="text-sm font-medium hover:text-primary">
              Technology
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />

        <section id="about" className="container py-24 space-y-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Mission</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Redefining Sustainable Finance
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              At VECO, our primary mission is to mobilise and reduce the barriers of entry into sustainable investing
              for retail investors, particularly younger generations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-xl">Transparent</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Clear insights into where your money goes and the impact it creates.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-xl">Purpose-driven</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Align your investments with the 17 United Nations Sustainable Development Goals.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-xl">Accessible</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Designed for everyone, regardless of investment experience or capital.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-muted py-24">
          <div className="container space-y-12">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Vision</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                The Future of Ethical Investing
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                To become the most technologically advanced and modern-oriented fintech company of the future, guiding
                investment with innovation, integrity, and impact.
              </p>
            </div>
          </div>
        </section>

        <FeatureSection />
        <FoundersSection />
        <SdgSection />
        <CompetitorSection />
        <RevenueSection />
        <AiSection />
        <GrowthSection />

        <section className="bg-primary text-primary-foreground py-24">
          <div className="container flex flex-col items-center text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Join the Sustainable Investment Revolution
            </h2>
            <p className="max-w-[700px] md:text-xl">
              VECO by X is not just about sustainable investing. It's about shaping a future where technology and impact
              go hand in hand.
            </p>
            <Button size="lg" variant="secondary" className="mt-4" asChild>
              <Link href="/signup">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <footer className="border-t bg-background">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                <span className="text-lg font-bold">VECO</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Redefining how retail investors engage with sustainable finance.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    SDGs
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} X Company. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
