import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Globe,
  Smartphone,
  BarChart,
  Users,
  Brain,
  Database,
  Shield,
  Blocks,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LearnMorePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          <div className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">VECO</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-24">
          <div className="container text-center space-y-8">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Learn More</div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Everything You Need to Know About <span className="text-primary">VECO</span>
            </h1>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
              Discover how VECO is revolutionizing sustainable investing with AI-powered technology, personalized
              portfolios, and transparent ESG scoring.
            </p>
          </div>
        </section>

        {/* Platform Overview */}
        <section className="container py-24 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Makes VECO Different</h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground">
              VECO combines cutting-edge AI technology with sustainable investing principles to create a unique platform
              for modern investors.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader>
                <Smartphone className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Gamified Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Interactive, visually engaging interface that makes sustainable investing intuitive and exciting.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>AI-Powered Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Advanced AI algorithms analyze your preferences to create personalized sustainable investment
                  portfolios.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Database className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Multi-Source ESG Data</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Aggregated ESG ratings from multiple agencies provide balanced, reliable sustainability scores.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Blocks className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Blockchain Verification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Blockchain technology ensures transparency and authenticity of ESG credentials and impact data.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-muted py-24">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How VECO Works</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground">
                A simple, step-by-step process to start your sustainable investment journey.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Sign Up & Complete Your Profile</h3>
                      <p className="text-muted-foreground">
                        Create your account and complete a short questionnaire about your investment goals, risk
                        tolerance, and preferred Sustainable Development Goals.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Receive AI-Generated Portfolio</h3>
                      <p className="text-muted-foreground">
                        Our AI analyzes your preferences and creates a personalized sustainable investment portfolio
                        aligned with your chosen SDGs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Customize & Optimize</h3>
                      <p className="text-muted-foreground">
                        Fine-tune your portfolio by adjusting asset weights and see real-time updates to your projected
                        returns and impact metrics.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Track Impact & Performance</h3>
                      <p className="text-muted-foreground">
                        Monitor your portfolio's financial performance alongside its environmental and social impact
                        through our comprehensive dashboard.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="container py-24 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose VECO</h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground">
              VECO offers unique advantages that set it apart from traditional investment platforms.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <BarChart className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Growing Market Demand</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Over $35 trillion is already invested in ESG assets globally, with 67% of Millennials and Gen Z
                  prioritizing sustainable investments.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Psychologically Appealing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sustainable investing is perceived as less intimidating and more meaningful, helping investors feel
                  they're contributing to positive change.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Transparent & Secure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Blockchain verification ensures the authenticity of ESG data, while our transparent approach builds
                  trust with investors.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary text-primary-foreground py-24">
          <div className="container text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Ready to Start Your Sustainable Investment Journey?
            </h2>
            <p className="max-w-[700px] mx-auto text-lg">
              Join thousands of investors who are already making a positive impact while building their wealth with
              VECO.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/signup">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/login">Sign In</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
