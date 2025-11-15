# Personal Profile Website

A modern, responsive personal profile website template built with Next.js 16 and deployed on Cloudflare Pages. This template helps you quickly create a professional portfolio showcasing your skills, projects, experience, education, publications, languages, and interests with a luxurious, award-winning design.

> **🎯 This is a GitHub template!** Click the "Use this template" button above to create your own profile website.

## ✨ Features

- 🎨 **Award-Winning Design**: Ultra-clean layout with luxurious effects and animations
- 📱 **Fully Responsive**: Optimized for all devices from mobile to desktop
- 🌓 **Dark Mode**: Built-in theme toggle with next-themes
- ⚡ **Performance Optimized**: Server-side rendering with Next.js 16 and edge deployment on Cloudflare
- 🎭 **Interactive Animations**: Engaging UI components from Magic UI and React Bits
- 🔍 **SEO Optimized**: Complete metadata, Open Graph, and Twitter Card support
- ♿ **Accessible**: Built with accessibility best practices
- 🎯 **Type-Safe**: Full TypeScript support with Zod schema validation
- 🎪 **Dynamic Content**: Easy content management through structured data files
- 🧩 **Dynamic Opengraph Image**: Automatically generated Open Graph images based on profile data

## 🎬 Sections

- **Profile Header**: Avatar with electric border effect, name, headline, and social links
- **About**: Professional bio and keywords
- **Skills**: Technical skills with icon badges
- **Projects**: Portfolio showcase with status, tech stack, and links
- **Experience**: Work history with highlights and technologies
- **Education**: Academic background
- **Publications**: Research papers and articles
- **Languages**: Language proficiency levels
- **Interests**: Personal interests and hobbies
- **Contact**: Multiple contact methods and social networks

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) - React framework with App Router
- [Zod](https://zod.dev/) - Schema validation
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Shadcn/ui](https://ui.shadcn.com/) - Re-usable component library
- [Magic UI](https://magicui.design/) - Advanced UI components
- [React Bits](https://reactbits.dev/) - Interactive component effects
- [react-icons](https://react-icons.github.io/react-icons/) - Additional icons

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or higher
- npm, yarn, pnpm, or bun

### Installation

1. **Use this template:**

   - Click the "Use this template" button at the top of this repository
   - Or clone the repository:

   ```bash
   git clone <your-repository-url>
   cd profile
   ```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
# Create a .env.local file
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your profile website.

The page auto-updates as you edit files. Start by modifying:

- `schema/profile.ts` - Your profile schema
- `data/profile.ts` - Your profile content
- `app/page.tsx` - Your profile page layout
- `app/opengraph-image.tsx` - Dynamic Open Graph image generation
- `components/profile/*` - Individual sections

### Preview Cloudflare

Run the development server:

```bash
npm run preview
```

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and theme variables
│   ├── layout.tsx         # Root layout with theme provider
│   └── page.tsx           # Main profile page
├── components/
│   ├── profile/           # Profile section components
│   ├── reactbits/         # React Bits custom components
│   ├── shared/            # Shared components (avatar, icons, theme)
│   └── ui/                # Shadcn/ui components (DO NOT add custom components here)
├── data/
│   └── profile.ts         # Your profile data
├── lib/
│   ├── date.ts           # Date utilities
│   └── utils.ts          # Utility functions
├── public/               # Static assets
├── schemas/
│   └── profile.ts        # Zod schema definitions
```

## 🎨 Design Guidelines

- Follow Shadcn UI design system for consistency
- Use Magic UI and React Bits components for advanced effects
- Never put custom components under the `ui/` folder
- Maintain ultra-clean layouts with luxurious effects
- Ensure responsive design works on all device sizes
- Follow accessibility best practices

## 🌐 Deployment

This project is optimized for deployment on Cloudflare Pages with edge rendering capabilities. The `@opennextjs/cloudflare` adapter provides seamless integration.

### Cloudflare Pages Setup

1. Connect your repository to Cloudflare Pages, see [Cloudflare Git Integration](https://developers.cloudflare.com/pages/configuration/git-integration/).
2. Set build command: `npm run build`
3. Set deploy command: `npm run deploy`
4. Add environment variable: `NEXT_PUBLIC_SITE_URL`

## 🎯 Why Use This Template?

- ✅ **Production-Ready**: Battle-tested structure and configurations
- ✅ **Modern Stack**: Latest versions of Next.js, React, and Tailwind CSS
- ✅ **Type-Safe**: Full TypeScript and Zod validation
- ✅ **Edge-Optimized**: Configured for Cloudflare Pages deployment
- ✅ **Design System**: Premium UI components from Shadcn, Magic UI, and React Bits
- ✅ **Easy Customization**: Simply update your data in `data/profile.ts`
- ✅ **Well-Documented**: Comprehensive guides and examples

## 📄 License

MIT License - feel free to use this template for your personal or commercial projects.

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Open issues for bugs or feature requests
- Submit pull requests to improve the template
- Share your profile website built with this template

## ⭐ Show Your Support

If you found this template helpful, please give it a star! It helps others discover it too.

## 🌟 Showcase

Built your profile with this template? We'd love to see it! Open an issue or PR to add your site to the showcase.

## 📧 Support

If you have questions or need help:

- Open an [issue](./issues)
- Check existing [discussions](./discussions)
- Review the documentation above

---

**Built with ❤️ using Next.js and modern web technologies.**

**Ready to build your profile?** Click "Use this template" to get started! 🚀
