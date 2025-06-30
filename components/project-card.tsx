import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  repoUrl?: string
  liveUrl?: string
}

export function ProjectCard({ title, description, technologies, repoUrl, liveUrl }: ProjectCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-wrap gap-1">
            {technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            {repoUrl && (
              <Button variant="ghost" size="sm" asChild>
                <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  <span className="sr-only">View repository</span>
                </Link>
              </Button>
            )}
            {liveUrl && (
              <Button variant="ghost" size="sm" asChild>
                <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  <span className="sr-only">View live demo</span>
                </Link>
              </Button>
            )}
          </div>
        </div>
        <CardTitle className="text-lg leading-tight">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}
