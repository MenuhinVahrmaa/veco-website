import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function RevenueSection() {
  return (
    <section id="revenue" className="container py-24 space-y-12">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Revenue Model</div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Strategic Conversion Optimization Model
        </h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          SCOM is VECO's strategic break-even framework designed to align platform growth with value delivery.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Why SCOM is Unique</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Check className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Lower transaction costs = more users onboard</p>
                <p className="text-muted-foreground">
                  SCOM enables VECO to offer the lowest transaction fees in the market. enables VECO to offer the lowest
                  transaction fees in the market, making us more attractive than competitors and encouraging higher
                  trading volumes.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Check className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Low subscription cost = low psychological barrier</p>
                <p className="text-muted-foreground">
                  With a low subscription fee of £8.99/month (less than half of Spotify or ChatGPT Plus), users are more
                  likely to try VECO Plus.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Check className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Value-driven conversion</p>
                <p className="text-muted-foreground">
                  The value of VECO+ is structured so users can earn back their subscription cost in just 30 days of
                  informed investing.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="grid gap-6">
          <Card className="overflow-hidden border-primary/20">
            <CardHeader className="bg-primary/5 border-b border-primary/10">
              <CardTitle>VECO Basic</CardTitle>
              <CardDescription>Free</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Portfolio templates</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Read-only AI suggestions</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Limited dashboard</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="bg-primary/5 border-t border-primary/10 px-6">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden border-primary">
            <CardHeader className="bg-primary text-primary-foreground">
              <CardTitle>VECO Plus</CardTitle>
              <CardDescription className="text-primary-foreground/80">£8.99/month</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Full customization</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>HROR simulations</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Advanced insights</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Premium content</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="bg-primary/5 border-t border-primary/10 px-6">
              <Button className="w-full" asChild>
                <Link href="/subscribe">
                  Subscribe Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="mt-12 rounded-lg bg-muted p-8">
        <h3 className="text-2xl font-bold mb-4">Additional Revenue Streams</h3>
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <h4 className="text-lg font-semibold">Transaction & Exchange Fees</h4>
            <p className="text-muted-foreground">
              Our goal is to offer the lowest transaction and exchange costs in the market through our proprietary
              Strategic Conversion Optimization Model.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">ESG Partner Listings</h4>
            <p className="text-muted-foreground">
              Revenue from ESG companies paying to be featured, and B2B services like ESG scoring dashboards and
              analytics tools.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Referrals Reward System</h4>
            <p className="text-muted-foreground">
              Get 1 free month of VECO+ for every 3 referrals, boosting conversion at zero CAC, with impact-based
              rewards.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
