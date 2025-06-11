import { BarChart3, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function GrowthSection() {
  return (
    <section className="container py-24 space-y-12">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Growth Expectations</div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Roadmap to Success</h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          VECO is built with a clear vision for both short-term and long-term growth.
        </p>
      </div>

      <Tabs defaultValue="short" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
          <TabsTrigger value="short">Short-Term (0-18 months)</TabsTrigger>
          <TabsTrigger value="long">Long-Term (2-5 years)</TabsTrigger>
        </TabsList>
        <TabsContent value="short" className="mt-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-xl">User Growth</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold">10,000 - 30,000</span>
                </div>
                <p className="text-muted-foreground mt-2">Active users by end of Year 1</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-xl">Conversion Rate</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold">8-12%</span>
                </div>
                <p className="text-muted-foreground mt-2">Users converted to VECO+ subscribers</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-xl">Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Partner with multiple ESG rating agencies across cities in the UK and Europe to create a median ESG
                  score framework.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-xl">Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Continuously enhance AI technology and interface design for better personalization and user
                  experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="long" className="mt-8">
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Futuristic VECO Platform</CardTitle>
                <CardDescription>Launch an advanced version with cutting-edge features</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                    <span>AI-generated dynamic portfolios using real-time market and sentiment analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                    <span>Blockchain-backed ESG verification and smart contracts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                    <span>Institutional tools for ESG funds, pension managers, and NGOs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Business Expansion</CardTitle>
                <CardDescription>Grow beyond retail investors to institutional clients</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                    <span>Monetize VECO as a B2B platform for institutions needing ESG analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                    <span>Expand into new markets and integrate tokenized ESG assets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                    <span>Enable micro-investing and global access to sustainable investments</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
