import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/shared/section";
import { Work } from "@/schemas/profile";
import { formatDate } from "@/lib/date";

interface ExperienceSectionProps {
  work?: Work;
}

export function ExperienceSection({ work }: ExperienceSectionProps) {
  if (!work || work.length === 0) return null;

  return (
    <Section id="experience" title="Work Experience">
      <div className="space-y-8">
        {work.map((job, index) => (
          <div key={index} className="flex gap-4 md:gap-8">
            <div className="flex-1 space-y-3">
              <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{job.role}</h3>
                  <p className="text-muted-foreground">{job.org}</p>
                </div>
                <p className="text-sm text-muted-foreground whitespace-nowrap">
                  {formatDate(job.start)} -{" "}
                  {job.end ? formatDate(job.end) : "Present"}
                </p>
              </div>

              {job.summary && (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {job.summary}
                </p>
              )}

              {job.highlights && job.highlights.length > 0 && (
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {job.highlights.map((highlight, hIndex) => (
                    <li key={hIndex}>{highlight}</li>
                  ))}
                </ul>
              )}

              {job.tech && job.tech.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {job.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
