import { Skills } from "@/schemas/profile";
import { Section } from "@/components/shared/section";
import { Icons } from "@/components/shared/icons";

interface SkillsSectionProps {
  skills?: Skills;
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  if (!skills || skills.length === 0) return null;

  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {skills.map((skill, index) => {
          const Icon = skill.icon ? Icons[skill.icon] : null;
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-3 rounded-lg border bg-card p-4 transition-colors hover:bg-accent"
            >
              {Icon && (
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
              )}
              <span className="text-center text-sm font-medium">
                {skill.text}
              </span>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
