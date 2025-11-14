import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/shared/section";
import { Publications } from "@/schemas/profile";
import { FileText, Mic, BookOpen } from "lucide-react";
import Link from "next/link";
import { formatDate } from "@/lib/date";

const typeIconMap = {
  blog: BookOpen,
  paper: FileText,
  talk: Mic,
};

interface PublicationsSectionProps {
  publications?: Publications;
}

export function PublicationsSection({
  publications,
}: PublicationsSectionProps) {
  if (!publications || publications.length === 0) return null;

  return (
    <Section id="publications" title="Publications">
      <div className="space-y-4">
        {publications.map((pub, index) => {
          const Icon = pub.type ? typeIconMap[pub.type] : FileText;
          const content = (
            <>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="font-semibold leading-tight">{pub.title}</h3>
                <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                  {pub.date && <span>{formatDate(pub.date)}</span>}
                  {pub.venue && (
                    <>
                      <span>•</span>
                      <span>{pub.venue}</span>
                    </>
                  )}
                  {pub.type && (
                    <Badge variant="outline" className="ml-auto text-xs">
                      {pub.type}
                    </Badge>
                  )}
                </div>
              </div>
            </>
          );

          if (pub.url) {
            return (
              <Link
                key={index}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 rounded-lg border p-4 transition-colors hover:bg-accent"
              >
                {content}
              </Link>
            );
          }

          return (
            <div key={index} className="flex gap-4 rounded-lg border p-4">
              {content}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
