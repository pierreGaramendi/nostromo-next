export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Nostromo",
  description: "A simple ecommerce build on nextjs with shadcn",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Productos",
      href: "/productos",
    },
    {
      title: "Categorias",
      href: "/productos",
    },
    {
      title: "Vender",
      href: "/productos",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
