import { Check, X } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function CompetitorSection() {
  const competitors = [
    {
      name: "Clim8 Invest",
      founded: "2019",
      focus: "Climate Focused Portfolio",
      valuation: "~$25 Million",
      disadvantages: ["Lacks AI personalisation", "No Gamified Interface"],
    },
    {
      name: "Tickr",
      founded: "2018",
      focus: "Thematic Impact Investing",
      valuation: "~$15 Million",
      disadvantages: ["No ESG rating aggregation", "No HROR simulation"],
    },
    {
      name: "Robinhood",
      founded: "2013",
      focus: "Commission free trading",
      valuation: "~$9 Billion",
      disadvantages: ["Not ESG Focused", "Lacks personalised SDG portfolios"],
    },
    {
      name: "eToro",
      founded: "2007",
      focus: "Social trading and crypto",
      valuation: "~$3.5 Billion",
      disadvantages: ["General purpose", "Lacks ESG gamification"],
    },
  ]

  return (
    <section id="competitors" className="container py-24 space-y-12">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Competitor Landscape</div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How VECO Stands Out</h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          While there are several sustainable fintech startups, VECO offers unique advantages that set it apart.
        </p>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[180px]">Platform</TableHead>
              <TableHead>Founded</TableHead>
              <TableHead>Key Focus</TableHead>
              <TableHead>Current Valuation</TableHead>
              <TableHead className="text-right">VECO's Advantage</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {competitors.map((competitor) => (
              <TableRow key={competitor.name}>
                <TableCell className="font-medium">{competitor.name}</TableCell>
                <TableCell>{competitor.founded}</TableCell>
                <TableCell>{competitor.focus}</TableCell>
                <TableCell>{competitor.valuation}</TableCell>
                <TableCell className="text-right">
                  <ul className="space-y-1 text-sm">
                    {competitor.disadvantages.map((disadvantage, index) => (
                      <li key={index} className="flex items-center justify-end gap-2">
                        <span>{disadvantage}</span>
                        <X className="h-4 w-4 text-destructive" />
                      </li>
                    ))}
                  </ul>
                </TableCell>
              </TableRow>
            ))}
            <TableRow className="bg-primary/5">
              <TableCell className="font-bold">VECO</TableCell>
              <TableCell>2025</TableCell>
              <TableCell>AI-Powered SDG Investing</TableCell>
              <TableCell>Growing</TableCell>
              <TableCell className="text-right">
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center justify-end gap-2">
                    <span>AI + SDG Portfolio Generation</span>
                    <Check className="h-4 w-4 text-primary" />
                  </li>
                  <li className="flex items-center justify-end gap-2">
                    <span>Gamified Visual Layout</span>
                    <Check className="h-4 w-4 text-primary" />
                  </li>
                  <li className="flex items-center justify-end gap-2">
                    <span>Multi-source ESG Aggregation</span>
                    <Check className="h-4 w-4 text-primary" />
                  </li>
                </ul>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  )
}
