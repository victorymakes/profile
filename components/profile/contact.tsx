import { Button } from "@/components/ui/button";
import { Section } from "@/components/shared/section";
import { Contact } from "@/schemas/profile";
import { Icons } from "@/components/shared/icons";

interface ContactSectionProps {
  contact?: Contact;
}

export function ContactSection({ contact }: ContactSectionProps) {
  if (!contact || contact.length === 0) return null;

  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-3 sm:grid-cols-2">
        {contact
          .filter((item) => item.type === "primary")
          .map((item, index) => {
            const Icon = Icons[item.network];
            return (
              <Button
                key={index}
                variant="outline"
                className="h-auto justify-start gap-3 p-4"
                asChild
              >
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <Icon className="h-8! w-8! shrink-0 text-primary" />
                  <div className="flex flex-col items-start gap-0.5 overflow-hidden">
                    <span className="text-xs font-medium text-muted-foreground">
                      {item.network}
                    </span>
                    <span className="truncate text-sm font-semibold">
                      {item.username || item.url}
                    </span>
                  </div>
                </a>
              </Button>
            );
          })}
      </div>
    </Section>
  );
}
