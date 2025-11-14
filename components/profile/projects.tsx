import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Section } from "@/components/shared/section";
import { Projects } from "@/schemas/profile";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface ProjectsSectionProps {
  projects?: Projects;
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="group flex flex-col overflow-hidden transition-all hover:shadow-lg"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                  <h3 className="text-3xl font-bold text-primary/20">
                    {project.name}
                  </h3>
                </div>
              )}
            </div>
            <CardHeader>
              <h3 className="text-xl font-semibold">{project.name}</h3>
            </CardHeader>
            <CardContent className="flex-1 space-y-3">
              {project.description && (
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              )}
              {project.tech && project.tech.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
            {project.url && (
              <CardFooter className="mt-auto">
                <Button className="w-full" asChild>
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Visit Website
                  </Link>
                </Button>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
