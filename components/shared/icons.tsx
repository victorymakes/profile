import {
  SiX,
  SiYoutube,
  SiTwitch,
  SiDiscord,
  SiTelegram,
  SiWhatsapp,
  SiSlack,
  SiReddit,
  SiMastodon,
  SiBluesky,
  SiThreads,
  SiTiktok,
  SiMedium,
  SiDevdotto,
  SiHashnode,
  SiStackoverflow,
  SiCodepen,
  SiDribbble,
  SiBehance,
  SiFigma,
  SiNotion,
  SiSpotify,
  SiApple,
  SiGoogle,
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiGithub,
  SiAmazon,
  SiDocker,
  SiGit,
  SiGraphql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiJest,
  SiZap,
} from "react-icons/si";
import {
  LuAtSign,
  LuBookOpen,
  LuCalendar,
  LuCamera,
  LuCoffee,
  LuGlobe,
  LuKeyboard,
  LuLink,
  LuMail,
  LuMapPin,
  LuMessageSquare,
  LuMic,
  LuMountain,
  LuPalette,
  LuPenTool,
  LuPhone,
  LuSend,
  LuUsers,
  LuWorkflow,
  LuWrench,
} from "react-icons/lu";
import { IconBaseProps, IconType } from "react-icons";
import { ComponentType } from "react";
import { TbApi } from "react-icons/tb";
import { VscAzureDevops } from "react-icons/vsc";
import { DiScrum } from "react-icons/di";

export type IconComponent = ComponentType<IconBaseProps>;

// All available icons in one place
const iconsBase: Record<string, IconType> = {
  // Contact icons from Lucide (via react-icons/lu)
  Email: LuMail,
  Phone: LuPhone,
  Website: LuGlobe,
  Message: LuMessageSquare,
  Send: LuSend,
  At: LuAtSign,
  Location: LuMapPin,
  Calendar: LuCalendar,
  Link: LuLink,

  // Social platforms from Simple Icons (via react-icons/si)
  GitHub: SiGithub,
  LinkedIn: SiLinkedin,
  Twitter: SiX,
  X: SiX,
  Facebook: SiFacebook,
  Instagram: SiInstagram,
  YouTube: SiYoutube,
  Twitch: SiTwitch,
  Discord: SiDiscord,
  Telegram: SiTelegram,
  WhatsApp: SiWhatsapp,
  Slack: SiSlack,
  Reddit: SiReddit,
  Mastodon: SiMastodon,
  Bluesky: SiBluesky,
  Threads: SiThreads,
  TikTok: SiTiktok,
  Medium: SiMedium,
  DevTo: SiDevdotto,
  Hashnode: SiHashnode,
  StackOverflow: SiStackoverflow,
  CodePen: SiCodepen,
  Dribbble: SiDribbble,
  Behance: SiBehance,
  Figma: SiFigma,
  Notion: SiNotion,
  Spotify: SiSpotify,
  Apple: SiApple,
  Google: SiGoogle,

  // Others
  Typescript: SiTypescript,
  React: SiReact,
  Nextjs: SiNextdotjs,
  Nodejs: SiNodedotjs,
  Postgresql: SiPostgresql,
  Graphql: SiGraphql,
  Docker: SiDocker,
  aws: SiAmazon,
  Tailwindcss: SiTailwindcss,
  Git: SiGit,
  API: TbApi,
  Jest: SiJest,
  Scrum: DiScrum,
  Workflow: LuWorkflow,
  Speed: SiZap,
  Mic: LuMic,
  Write: LuPenTool,
  Teach: LuUsers,
  Mountain: LuMountain,
  Camera: LuCamera,
  Coffee: LuCoffee,
  Keyboard: LuKeyboard,
  Book: LuBookOpen,
  tools: LuWrench,
  design: LuPalette,
};

export const Icons = new Proxy(iconsBase, {
  get(target, prop: string) {
    const key = Object.keys(target).find(
      (k) => k.toLowerCase() === prop.toLowerCase()
    );
    if (key) {
      const IconComponent = target[key];
      return ({ className, ...rest }: IconBaseProps) => (
        <IconComponent className={className} {...rest} />
      );
    }
    // Fallback: render first letter of the prop in uppercase
    return ({ className }: IconBaseProps) => (
      <span className={className}>{prop.charAt(0).toUpperCase()}</span>
    );
  },
}) as Record<string, IconComponent>;
