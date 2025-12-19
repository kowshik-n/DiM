import {
  DataStyleConfig,
  DisplayConfig,
  EffectsConfig,
  FontsConfig,
  MailchimpConfig,
  ProtectedRoutesConfig,
  RoutesConfig,
  SameAsConfig,
  SchemaConfig,
  StyleConfig,
} from "@/types";
import { home } from "./index";

// IMPORTANT: Replace with your own domain address - it's used for SEO in meta tags and schema.
//
// For GitHub Pages deployments, we derive the correct URL automatically at build time.
// You can always override it by setting NEXT_PUBLIC_SITE_URL.
const envSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const ghRepo = process.env.GITHUB_REPOSITORY;

let baseURL: string = envSiteUrl ?? "https://your-marketing-site.com";

if (!envSiteUrl && ghRepo) {
  const [owner, repo] = ghRepo.split("/");

  if (owner && repo) {
    // User/Org pages use https://<owner>.github.io
    // Project pages use https://<owner>.github.io/<repo>
    baseURL =
      repo === `${owner}.github.io`
        ? `https://${owner}.github.io`
        : `https://${owner}.github.io/${repo}`;
  }
}

// Enable only the core routes needed for a focused marketing portfolio
const routes: RoutesConfig = {
  "/": true,
  "/about": false,
  "/work": false, // Projects are shown on home page via scroll
};

const display: DisplayConfig = {
  // Hide the time indicator by default to keep the header clean
  location: true,
  time: false,
  themeSwitcher: true,
};

// Enable password protection on selected routes
// Set password in the .env file, refer to .env.example
const protectedRoutes: ProtectedRoutesConfig = {
  "/work/automate-design-handovers-with-a-figma-to-code-pipeline": true,
};

// Import and set font for each variant
import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";

const heading = Geist({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const body = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const label = Geist({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
});

const code = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

const fonts: FontsConfig = {
  heading: heading,
  body: body,
  label: label,
  code: code,
};

// default customization applied to the HTML in the main layout.tsx
const style: StyleConfig = {
  theme: "dark", // dark | light | system - using dark for modern gradient look
  neutral: "slate", // sand | gray | slate | custom - slate for premium feel
  brand: "violet", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan | custom
  accent: "cyan", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan | custom - cyan for blue gradient
  solid: "contrast", // color | contrast
  solidStyle: "plastic", // flat | plastic - plastic for modern gradient feel
  border: "playful", // rounded | playful | conservative - playful for rounded cards
  surface: "translucent", // filled | translucent - translucent for glass effect
  transition: "all", // all | micro | macro
  scaling: "100", // 90 | 95 | 100 | 105 | 110
};

const dataStyle: DataStyleConfig = {
  variant: "gradient", // flat | gradient | outline
  mode: "categorical", // categorical | divergent | sequential
  height: 24, // default chart height
  axis: {
    stroke: "var(--neutral-alpha-weak)",
  },
  tick: {
    fill: "var(--neutral-on-background-weak)",
    fontSize: 11,
    line: false,
  },
};

const effects: EffectsConfig = {
  mask: {
    cursor: true,
    x: 50,
    y: 0,
    radius: 100,
  },
  gradient: {
    display: true,
    opacity: 80,
    x: 50,
    y: 40,
    width: 120,
    height: 60,
    tilt: 0,
    colorStart: "accent-background-strong",
    colorEnd: "brand-background-strong",
  },
  dots: {
    display: true,
    opacity: 30,
    size: "2",
    color: "brand-background-strong",
  },
  grid: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-medium",
    width: "0.25rem",
    height: "0.25rem",
  },
  lines: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-weak",
    size: "16",
    thickness: 1,
    angle: 45,
  },
};

const mailchimp: MailchimpConfig = {
  action: "https://url/subscribe/post?parameters",
  effects: {
    mask: {
      cursor: true,
      x: 50,
      y: 0,
      radius: 100,
    },
    gradient: {
      display: true,
      opacity: 90,
      x: 50,
      y: 0,
      width: 50,
      height: 50,
      tilt: 0,
      colorStart: "accent-background-strong",
      colorEnd: "static-transparent",
    },
    dots: {
      display: true,
      opacity: 20,
      size: "2",
      color: "brand-on-background-weak",
    },
    grid: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-medium",
      width: "0.25rem",
      height: "0.25rem",
    },
    lines: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-medium",
      size: "16",
      thickness: 1,
      angle: 90,
    },
  },
};

// default schema data
const schema: SchemaConfig = {
  logo: "",
  type: "Person",
  name: home.title,
  description: home.description,
  email: "you@example.com",
};

// social links used in SEO schema (update with your own profiles)
const sameAs: SameAsConfig = {
  threads: "https://www.threads.net/your-handle",
  linkedin: "https://www.linkedin.com/in/your-profile/",
  discord: "",
};

export {
  display,
  mailchimp,
  routes,
  protectedRoutes,
  baseURL,
  fonts,
  style,
  schema,
  sameAs,
  effects,
  dataStyle,
};
