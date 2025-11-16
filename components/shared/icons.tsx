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
  SiPython,
  SiApachespark,
  SiXiaohongshu,
  SiMysql,
  SiRedis,
  SiSpring,
} from "react-icons/si";
import {
  LuAtSign,
  LuBookOpen,
  LuCalendar,
  LuCamera,
  LuCode,
  LuCoffee,
  LuFilm,
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
import { DiJava, DiScrum } from "react-icons/di";
import { captialize } from "@/lib/string";

export type IconComponent = ComponentType<IconBaseProps>;

// All available icons in one place
const iconsBase: Record<string, IconType> = {
  // Contact icons
  Email: LuMail,
  Phone: LuPhone,
  Website: LuGlobe,
  Message: LuMessageSquare,
  Send: LuSend,
  At: LuAtSign,
  Location: LuMapPin,
  Calendar: LuCalendar,
  Link: LuLink,

  // Social icons
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
  RedNote: SiXiaohongshu,

  // Technology icons
  Java: DiJava,
  Python: SiPython,
  Typescript: SiTypescript,
  Spark: SiApachespark,
  React: SiReact,
  Nextjs: SiNextdotjs,
  Nodejs: SiNodedotjs,
  Postgresql: SiPostgresql,
  Graphql: SiGraphql,
  Docker: SiDocker,
  AWS: SiAmazon,
  Tailwindcss: SiTailwindcss,
  Git: SiGit,
  API: TbApi,
  Jest: SiJest,
  MySQL: SiMysql,
  Redis: SiRedis,
  Spring: SiSpring,

  // Others
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
  Tools: LuWrench,
  Design: LuPalette,
  code: LuCode,
  movie: LuFilm,
};

export const Icons: Record<string, IconComponent> = new Proxy(iconsBase, {
  get(target, prop: string) {
    const key = Object.keys(target).find(
      (k) => k.toLowerCase() === prop.toLowerCase()
    );
    if (key) {
      const IconComponent = target[key];
      const wrapper = ({ className, ...rest }: IconBaseProps) => (
        <IconComponent className={className} {...rest} />
      );
      wrapper.diaplayName = `${captialize(key)}Icon`;
      return wrapper;
    }
    // Fallback: render first letter of the prop in uppercase
    return ({ className }: IconBaseProps) => (
      <span className={className}>{prop.charAt(0).toUpperCase()}</span>
    );
  },
});
