import { ProfileHeader } from "@/components/profile/profile-header";
import { AboutSection } from "@/components/profile/about";
import { SkillsSection } from "@/components/profile/skills";
import { ProjectsSection } from "@/components/profile/projects";
import { ExperienceSection } from "@/components/profile/experience";
import { EducationSection } from "@/components/profile/education";
import { PublicationsSection } from "@/components/profile/publications";
import { LanguagesSection } from "@/components/profile/languages";
import { InterestsSection } from "@/components/profile/interests";
import { ContactSection } from "@/components/profile/contact";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { profile } from "@/data/profile";
import { LightRays } from "@/components/ui/light-rays";
import type { Metadata } from "next";
import { env } from "process";
import { getCurrentYear } from "@/lib/date";
import { Button } from "@/components/ui/button";
import { LuGithub } from "react-icons/lu";
import Link from "next/link";
import { BASE_URL } from "@/lib/env";

export const revalidate = false;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  icons: {
    icon: `${profile.person.avatar}`,
  },
  title: `${profile.person.name} - ${profile.person.headline}`,
  description: profile.about?.bio,
  keywords: [
    profile.person.name,
    ...(profile.skills?.map((skill) => skill.text) || []),
  ],
  authors: [{ name: profile.person.name }],
  openGraph: {
    title: `${profile.person.name} - ${profile.person.headline}`,
    description: profile.about?.bio,
    url: env.NEXT_PUBLIC_SITE_URL,
    siteName: profile.person.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${profile.person.name} - ${profile.person.headline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.person.name} - ${profile.person.headline}`,
    description: profile.about?.bio,
    images: ["/opengraph-image"],
  },
};

export default function Page() {
  return (
    <div className="container mx-auto">
      <LightRays />
      <div className="container px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="flex justify-end gap-4">
          <Button variant="outline" asChild>
            <Link
              href="https://github.com/victorymakes/profile"
              target="_blank"
            >
              <LuGithub />
              Use template
            </Link>
          </Button>
          <ThemeToggle />
        </div>

        <ProfileHeader
          person={profile.person}
          contact={profile.contact}
          cta={profile.cta}
        />
        <div className="space-y-12">
          <AboutSection about={profile.about} />
          <SkillsSection skills={profile.skills} />
          <ProjectsSection projects={profile.projects} />
          <ExperienceSection work={profile.work} />
          <EducationSection education={profile.education} />
          <PublicationsSection publications={profile.publications} />
          <LanguagesSection languages={profile.languages} />
          <InterestsSection interests={profile.interests} />
          <ContactSection contact={profile.contact} />
        </div>
      </div>
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4">
          <p>
            © {getCurrentYear()} {profile.person.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
