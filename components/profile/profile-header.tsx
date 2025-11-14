import { Button } from "@/components/ui/button";
import { Person, Contact, CTA } from "@/schemas/profile";
import { ElectricBorderAvatar } from "@/components/shared/avatar";
import Link from "next/link";
import { Icons } from "@/components/shared/icons";

interface ProfileHeaderProps {
  person: Person;
  contact?: Contact;
  cta?: CTA;
}

export function ProfileHeader({ person, contact, cta }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 py-12 text-center">
      <ElectricBorderAvatar
        src={person.avatar || person.name}
        alt={person.name}
      />

      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">{person.name}</h1>
        {person.headline && (
          <p className="text-lg text-muted-foreground max-w-2xl font-medium">
            {person.headline}
          </p>
        )}
        {person.location && (
          <p className="text-lg text-muted-foreground">{person.location}</p>
        )}
      </div>

      {contact && contact.length > 0 && (
        <div className="flex items-center gap-2">
          {contact
            .filter((item) => item.type === "social")
            .map((social) => {
              const Icon = Icons[social.network];
              return (
                <Button
                  key={social.network}
                  variant="ghost"
                  size="icon-lg"
                  asChild
                >
                  <Link
                    href={social.url}
                    target="_blank"
                    aria-label={social.network}
                  >
                    <Icon className="!h-6 !w-6" />
                  </Link>
                </Button>
              );
            })}
        </div>
      )}

      {person.availability && (
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
          {person.availability.freelance && (
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              <span>Available for freelance work</span>
            </div>
          )}
          {person.availability.hiring && (
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              <span>Available for hiring</span>
            </div>
          )}
          {person.availability.speaking && (
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              <span>Available for speaking engagements</span>
            </div>
          )}
        </div>
      )}

      {cta && cta.length > 0 && (
        <div className="flex items-center gap-3">
          {cta.map((action, index) => (
            <Button
              key={index}
              variant={action.style === "primary" ? "default" : "outline"}
              asChild
            >
              <Link
                href={action.url}
                target={action.url.startsWith("http") ? "_blank" : undefined}
              >
                {action.label}
              </Link>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
