import { Blocks, Brain, Database, Shield } from "lucide-react"

export function AiSection() {
  return (
    <section id="technology" className="bg-muted py-24">
      <div className="container space-y-12">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Technology</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How Our AI Works</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            At the core of our platform is an AI-driven investment engine powered by blockchain technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-primary/10 p-2">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">ESG Ratings: A Multi-Source Approach</h3>
                <p className="text-muted-foreground">
                  Our AI aggregates ratings from multiple ESG rating agencies, creating a composite ESG score that
                  reflects a more balanced, reliable view.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-primary/10 p-2">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">User Inputs: Personalization at the Core</h3>
                <p className="text-muted-foreground">
                  Users select their priority Sustainable Development Goals, risk tolerance, and investment time horizon
                  to create a personalized experience.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-primary/10 p-2">
                <Blocks className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">AI Meets Blockchain</h3>
                <p className="text-muted-foreground">
                  Our AI scans the ESG asset universe, leveraging blockchain technology to verify ESG credentials and
                  trace impact data, ensuring authenticity and transparency.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-primary/10 p-2">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Interactive Portfolio Optimization</h3>
                <p className="text-muted-foreground">
                  Users can add or remove ESG assets, with the platform dynamically updating the HROR to reflect the new
                  projected performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
