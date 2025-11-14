import { Interests } from "@/schemas/profile";
import { Section } from "@/components/shared/section";
import { Icons } from "@/components/shared/icons";

interface InterestsSectionProps {
  interests?: Interests;
}

export function InterestsSection({ interests }: InterestsSectionProps) {
  if (!interests || interests.length === 0) return null;

  return (
    <Section id="interests" title="Interests">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {interests.map((interest, index) => {
          const Icon = interest.icon ? Icons[interest.icon] : null;
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2 rounded-lg border bg-card p-3 transition-colors hover:bg-accent"
            >
              {Icon && (
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
              )}
              <span className="text-center text-xs font-medium">
                {interest.text}
              </span>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
