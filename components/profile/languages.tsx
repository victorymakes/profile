import { Languages } from "@/schemas/profile";
import { Section } from "@/components/shared/section";

interface LanguagesSectionProps {
  languages?: Languages;
}

export function LanguagesSection({ languages }: LanguagesSectionProps) {
  if (!languages || languages.length === 0) return null;

  return (
    <Section id="languages" title="Languages">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {languages.map((lang, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2 rounded-lg border bg-card p-4 transition-colors hover:bg-accent"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="text-lg font-semibold uppercase">
                {lang.code}
              </span>
            </div>
            <div className="text-center">
              <p className="font-medium">{lang.label || lang.code}</p>
              {lang.level && (
                <p className="text-xs text-muted-foreground">{lang.level}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
