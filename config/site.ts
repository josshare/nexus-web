import Login from "@/app/login/page";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Rewards",
      href: "/rewards",
    },
    {
      label: "Check-in",
      href: "/check-in",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Rewards",
      href: "/rewards",
    },
    {
      label: "Check-in",
      href: "/check-in",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Login",
      href: "/login",
    },
  ],
  links: {
    github: "https://github.com/josshare/nexus-web",
    login: "/login",
  },
};
