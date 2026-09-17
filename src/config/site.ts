export const site = {
  name: "Cryptic",
  tagline: "Building software for the future.",
  description:
    "Cryptic is an independent software studio building AI-powered software, developer tools, and experimental products.",
  /**
   * Official website URL. Currently unused in metadata until the real
   * domain is known — set this when the site is deployed.
   */
  url: "https://cryptic.studio",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
  ],
} as const;