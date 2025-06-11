import Image from "next/image"
import { Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FoundersSection() {
  const founders = [
    {
      name: "Mahadev Vahrmaa",
      title: "Founder & CEO",
      image: "/images/mahadev-vahrmaa.jpeg",
      bio: "Mahadev leads VECO's vision and strategic direction, combining a strong foundation in sustainable finance with operational leadership. Graduate of Henley Business School (Malaysia), now pursuing a Master's in Climate Change, Sustainable Business, and Green Finance at the ICMA Centre.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Bilal Akbar",
      title: "Co-Founder & CFO",
      image: "/images/bilal-akbar.jpeg",
      bio: "Recent MSc Finance graduate from the UK with a bachelor's degree from Norway. Former investment consultant with experience in financial reporting and risk reporting. Currently working at Nordea in Norway.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Vaios Deroukakis",
      title: "Co-Founder & COO",
      image: "/images/vaios-deroukakis.jpeg",
      bio: "Vaios leads day-to-day operations and strategic execution. He brings experience from Deloitte, ICON plc, and high-growth ventures, combining financial insight with operational focus. A graduate of Henley Business School, now advancing his expertise with an MSc Finance at the ICMA Centre.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
  ]

  return (
    <section id="founders" className="container py-24 space-y-12">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Team</div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet the Founders</h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          The visionaries behind VECO, combining expertise in finance, technology, and sustainability.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
        {founders.map((founder) => (
          <div key={founder.name} className="group relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="w-full h-[400px] overflow-hidden rounded-md bg-muted flex items-center justify-center">
              <Image
                src={founder.image || "/placeholder.svg"}
                alt={founder.name}
                width={400}
                height={100}
                className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{founder.name}</h3>
              <p className="text-sm text-primary">{founder.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{founder.bio}</p>
              <div className="mt-4 flex gap-2">
                <Button variant="ghost" size="icon" asChild className="h-8 w-8 rounded-full">
                  <a href={founder.social.linkedin} aria-label={`${founder.name}'s LinkedIn`}>
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="h-8 w-8 rounded-full">
                  <a href={founder.social.twitter} aria-label={`${founder.name}'s Twitter`}>
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="h-8 w-8 rounded-full">
                  <a href={founder.social.github} aria-label={`${founder.name}'s GitHub`}>
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
