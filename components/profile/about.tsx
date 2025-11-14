import { Badge } from "@/components/ui/badge";
import { About } from "@/schemas/profile";
import { Section } from "@/components/shared/section";

interface AboutSectionProps {
  about?: About;
}

export function AboutSection({ about }: AboutSectionProps) {
  if (!about) return null;

  return (
    <Section id="about" title="About Me">
      <div className="flex space-y-4 flex-col">
        {about.bio && (
          <p className="text-muted-foreground leading-relaxed">{about.bio}</p>
        )}

        {about.keywords && about.keywords.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {about.keywords.map((keyword, index) => (
              <Badge key={index} variant="secondary">
                {keyword}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
