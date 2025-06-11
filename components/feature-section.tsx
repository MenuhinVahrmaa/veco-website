import { Users, Zap, BarChart, Smartphone } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function FeatureSection() {
  return (
    <section id="features" className="container py-24 space-y-12">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Why VECO Will Work</div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Designed for the Modern Investor
        </h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          VECO isn't just another investment platform. It's a movement for the future of ethical investing.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="space-y-1">
            <Smartphone className="h-6 w-6 text-primary" />
            <CardTitle className="text-xl">Gamified Layout</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Visually interactive with a gamified layout to make investment journeys intuitive and exciting.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="space-y-1">
            <BarChart className="h-6 w-6 text-primary" />
            <CardTitle className="text-xl">Growing Demand</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Over $35 trillion already invested in ESG assets globally, with 67% of Millennials and Gen Z prioritizing
              ESG.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="space-y-1">
            <Users className="h-6 w-6 text-primary" />
            <CardTitle className="text-xl">Psychologically Appealing</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Sustainable investing is perceived as less intimidating and more meaningful than traditional options.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="space-y-1">
            <Zap className="h-6 w-6 text-primary" />
            <CardTitle className="text-xl">Unique Advantages</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              AI-generated portfolios based on SDGs with a gamified visual layout and multi-source ESG aggregation.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 space-y-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">How the Platform Works</h3>
          <p className="max-w-[700px] text-muted-foreground">
            A seamless investor journey from sign-up to portfolio management.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                1
              </div>
              <div>
                <h4 className="text-xl font-semibold">Sign Up & Onboarding</h4>
                <p className="text-muted-foreground">
                  Complete a short quiz on risk tolerance, investment horizon, and select preferred SDGs.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                2
              </div>
              <div>
                <h4 className="text-xl font-semibold">AI-Powered Portfolio Suggestion</h4>
                <p className="text-muted-foreground">Receive a portfolio tailored to your profile and preferences.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                3
              </div>
              <div>
                <h4 className="text-xl font-semibold">Interactive Portfolio Interface</h4>
                <p className="text-muted-foreground">
                  See SDG allocation, adjust weights, and observe HROR changes in real-time.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                4
              </div>
              <div>
                <h4 className="text-xl font-semibold">Community & Learning Hub</h4>
                <p className="text-muted-foreground">
                  Access news feed, investor chat, and educational content to support learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
