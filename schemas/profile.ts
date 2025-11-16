import { z } from "zod";

const textIconSchema = z.object({
  text: z.string(),
  icon: z.string().optional(),
});

const socialSchema = z.object({
  icon: z.string().optional(),
  network: z.string(),
  username: z.string(),
  type: z.enum(["social", "primary"]),
  url: z.url().optional(),
});

const workSchema = z.object({
  id: z.string().optional(),
  role: z.string(),
  org: z.string(),
  start: z.string(),
  end: z.string().nullable().optional(),
  summary: z.string().optional(),
  highlights: z.array(z.string()).optional(),
  tech: z.array(z.string()).optional(),
  url: z.url().optional(),
});

const projectSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  url: z.url().optional(),
  role: z.string().optional(),
  status: z.enum(["active", "archived"]).optional(),
  start: z.string().optional(),
  end: z.string().nullable().optional(),
  tech: z.array(z.string()).optional(),
  image: z.url().optional(),
});

const educationSchema = z.object({
  school: z.string(),
  degree: z.string().optional(),
  start: z.string().optional(),
  end: z.string().optional(),
  url: z.url().optional(),
});

const publicationSchema = z.object({
  title: z.string(),
  type: z.enum(["blog", "paper", "talk"]).optional(),
  date: z.string().optional(),
  venue: z.string().optional(),
  url: z.url().optional(),
});

const languageSchema = z.object({
  code: z.string(),
  label: z.string().optional(),
  level: z.string().optional(),
});

const personSchema = z.object({
  name: z.string(),
  headline: z.string().optional(),
  pronouns: z.string().optional(),
  avatar: z.url().optional(),
  location: z.string().optional(),
  status: z.string().optional(),
});

export const profileSchema = z.object({
  version: z.string(),
  id: z.string(),
  lastUpdated: z.string(),
  person: personSchema,
  contact: z.array(socialSchema).optional(),
  about: z
    .object({
      bio: z.string().optional(),
      keywords: z.array(z.string()).optional(),
    })
    .optional(),
  skills: z.array(textIconSchema).optional(),
  projects: z.array(projectSchema).optional(),
  work: z.array(workSchema).optional(),
  education: z.array(educationSchema).optional(),
  publications: z.array(publicationSchema).optional(),
  languages: z.array(languageSchema).optional(),
  interests: z.array(textIconSchema).optional(),
  cta: z
    .array(
      z.object({
        label: z.string(),
        url: z.url(),
        style: z.enum(["primary", "secondary"]).optional(),
      })
    )
    .optional(),
});

// Full profile type
export type Profile = z.infer<typeof profileSchema>;

// Individual component types
export type Person = z.infer<typeof profileSchema.shape.person>;
export type Contact = z.infer<typeof profileSchema.shape.contact>;
export type About = z.infer<typeof profileSchema.shape.about>;
export type Skills = z.infer<typeof profileSchema.shape.skills>;
export type Projects = z.infer<typeof profileSchema.shape.projects>;
export type Work = z.infer<typeof profileSchema.shape.work>;
export type Education = z.infer<typeof profileSchema.shape.education>;
export type Publications = z.infer<typeof profileSchema.shape.publications>;
export type Languages = z.infer<typeof profileSchema.shape.languages>;
export type Interests = z.infer<typeof profileSchema.shape.interests>;
export type CTA = z.infer<typeof profileSchema.shape.cta>;
