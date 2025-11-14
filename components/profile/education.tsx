import { Education } from "@/schemas/profile";
import { Section } from "@/components/shared/section";
import { GraduationCap } from "lucide-react";
import { formatDate } from "@/lib/date";

interface EducationSectionProps {
  education?: Education;
}

export function EducationSection({ education }: EducationSectionProps) {
  if (!education || education.length === 0) return null;

  return (
    <Section id="education" title="Education">
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-primary/10">
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground">{edu.school}</p>
                </div>
                {(edu.start || edu.end) && (
                  <p className="text-sm text-muted-foreground whitespace-nowrap">
                    {formatDate(edu.start)} - {formatDate(edu.end)}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
