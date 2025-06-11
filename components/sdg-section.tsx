import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function SdgSection() {
  const sdgs = [
    { id: 1, name: "No Poverty", color: "#E5243B" },
    { id: 2, name: "Zero Hunger", color: "#DDA63A" },
    { id: 3, name: "Good Health and Well-being", color: "#4C9F38" },
    { id: 4, name: "Quality Education", color: "#C5192D" },
    { id: 5, name: "Gender Equality", color: "#FF3A21" },
    { id: 6, name: "Clean Water and Sanitation", color: "#26BDE2" },
    { id: 7, name: "Affordable and Clean Energy", color: "#FCC30B" },
    { id: 8, name: "Decent Work and Economic Growth", color: "#A21942" },
    { id: 9, name: "Industry, Innovation and Infrastructure", color: "#FD6925" },
    { id: 10, name: "Reduced Inequality", color: "#DD1367" },
    { id: 11, name: "Sustainable Cities and Communities", color: "#FD9D24" },
    { id: 12, name: "Responsible Consumption and Production", color: "#BF8B2E" },
    { id: 13, name: "Climate Action", color: "#3F7E44" },
    { id: 14, name: "Life Below Water", color: "#0A97D9" },
    { id: 15, name: "Life on Land", color: "#56C02B" },
    { id: 16, name: "Peace, Justice and Strong Institutions", color: "#00689D" },
    { id: 17, name: "Partnerships for the Goals", color: "#19486A" },
  ]

  return (
    <section className="bg-muted py-24">
      <div className="container space-y-12">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            UN Sustainable Development Goals
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Invest in What Matters to You</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            VECO aligns your investments with the 17 United Nations Sustainable Development Goals.
          </p>
        </div>

        <Tabs defaultValue="featured" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="featured">Featured SDGs</TabsTrigger>
            <TabsTrigger value="all">All 17 SDGs</TabsTrigger>
          </TabsList>
          <TabsContent value="featured" className="mt-8">
            <div className="grid gap-6 md:grid-cols-3">
              {sdgs
                .filter((sdg) => [6, 7, 13].includes(sdg.id))
                .map((sdg) => (
                  <Card key={sdg.id} className="overflow-hidden">
                    <div className="h-2" style={{ backgroundColor: sdg.color }}></div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div
                          className="flex h-12 w-12 items-center justify-center rounded-full text-white font-bold"
                          style={{ backgroundColor: sdg.color }}
                        >
                          {sdg.id}
                        </div>
                        <div>
                          <h3 className="font-semibold">{sdg.name}</h3>
                          <p className="text-sm text-muted-foreground">SDG {sdg.id}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
          <TabsContent value="all" className="mt-8">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {sdgs.map((sdg) => (
                <Card key={sdg.id} className="overflow-hidden">
                  <div className="h-2" style={{ backgroundColor: sdg.color }}></div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-full text-white text-sm font-bold"
                        style={{ backgroundColor: sdg.color }}
                      >
                        {sdg.id}
                      </div>
                      <h3 className="text-sm font-semibold">{sdg.name}</h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
