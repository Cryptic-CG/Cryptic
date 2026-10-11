const contactEmail = "support@cryptic.technology";

export const site = {
  name: "Cryptic",
  tagline: "Building software for the future.",
  description:
    "Cryptic is an independent software studio building AI-powered software, developer tools, and experimental products.",
  url: "https://cryptic.technology",
  contactEmail,
  /**
   * Single source of truth for every "get in touch" destination on the site.
   * Swap `email` / `path` here and every CTA follows.
   */
  contact: {
    email: contactEmail,
    path: "/contact",
    /** Prefilled subject when a CTA opens the visitor's mail client. */
    subject: "Website enquiry",
  },
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Demos", href: "/demos" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;