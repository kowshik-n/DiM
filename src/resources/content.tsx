import {
  About,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Your",
  lastName: "Agency",
  name: "Name",
  role: "Performance Marketing & Growth",
  avatar: "/images/avatar.jpg",
  email: "hello@digitalagency.com",
  // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'.
  // Use your own time zone (for India, "Asia/Kolkata").
  location: "Asia/Kolkata",
  // optional: Leave the array empty if you don't want to display languages
  languages: ["English"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Get Marketing Insights That Actually Work</>,
  description: (
    <>
      Join 500+ businesses receiving actionable tips on Meta Ads, SEO, and
      growth strategies delivered monthly.
    </>
  ),
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com/once_ui/",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/once_ui/",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} – We Create Brands That Grow Fast`,
  description: `Data-driven digital marketing agency specializing in Meta Ads, SEO, Social Media, and Content Creation for growing businesses`,
  headline: <>We Create Brands That Grow Fast</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Digital Marketing</strong>
        {/* <Line background="brand-alpha-strong" vert height="20" /> */}
        {/* <Text marginRight="4" onBackground="brand-medium">
          Performance‑first campaigns for measurable growth
        </Text> */}
      </Row>
    ),
    // Link to the Meta Advertising service page
    href: "/work/meta-advertising-services",
  },
  subline: (
    <>
      End-to-end Meta advertising, Social Media Management, Content Creation,
      and SEO — driving measurable growth with data and creative execution.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, a ${person.role} helping brands grow online`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        {person.name} is a digital marketing specialist focused on helping small
        and mid‑size businesses grow through measurable results. From
        performance ads and SEO to email and funnel optimisation, the goal is
        always the same: more qualified leads and better ROI.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experience & results",
    experiences: [
      {
        company: "Digital, ads & campaign marketing",
        timeframe: "Selected results",
        role: "Digital marketing strategy & performance management",
        achievements: [
          <>
            Led a project with <strong>972.7% growth</strong>,{" "}
            <strong>620% engagement</strong>, and
            <strong> 1.9K organic reach</strong>.
          </>,
          <>
            Optimised campaigns using <strong>SEO</strong>, <strong>SEM</strong>
            , and influencer marketing for measurable results.
          </>,
          <>
            Executed data‑driven campaigns that maximised audience engagement
            and conversions.
          </>,
          <>
            Applied advanced audience segmentation to boost ad performance and
            ROI across channels.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Performance dashboard for digital campaigns",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Social media & brand strategy",
        timeframe: "Selected results",
        role: "Social media, brand awareness & campaign strategy",
        achievements: [
          <>
            Boosted TikTok engagement by <strong>8%</strong> and grew followers
            by
            <strong> 15K+ </strong>through data‑driven strategies.
          </>,
          <>
            Delivered <strong>1.4M+ organic reach</strong> and{" "}
            <strong>100% impression growth</strong>
            for <strong>10+ brands</strong> with 360° campaigns.
          </>,
          <>
            Managed <strong>5 UGC creators</strong> and sold{" "}
            <strong>350+ SKUs</strong>, strengthening brand loyalty.
          </>,
          <>
            Optimised campaigns with real‑time analytics, supporting 5 ad‑hoc
            projects for maximum ROI.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Social media content performance overview",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Business & growth strategy",
        timeframe: "Selected results",
        role: "Growth marketing, CRM & analytics",
        achievements: [
          <>
            Achieved <strong>80%+ retention</strong> and reduced churn by{" "}
            <strong>0.2%</strong> with targeted email and gamification
            strategies.
          </>,
          <>
            Boosted user acquisition by <strong>5% QoQ</strong> through
            CRM‑driven onboarding and retention journeys.
          </>,
          <>
            Streamlined affiliate and tactical marketing, driving measurable
            growth and engagement.
          </>,
          <>
            Leveraged A/B testing and data analysis to refine campaigns,
            improving revenue and efficiency.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Growth and CRM performance charts",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Personal projects",
        timeframe: "Ongoing",
        role: "Content creation & personal brand growth",
        achievements: [
          <>
            Produced <strong>65+ TikTok videos</strong>, generating{" "}
            <strong>1.5M+ impressions</strong>
            and <strong>21K+ followers</strong>.
          </>,
          <>
            Built a personal brand with <strong>415.9% traffic growth</strong>{" "}
            and
            <strong> 30% engagement increase</strong>.
          </>,
          <>
            Collaborated with <strong>11+ brands</strong> on KOL marketing
            strategies, driving awareness and loyalty.
          </>,
          <>
            Created hard‑selling content that boosted brand visibility and
            conversion rates.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Certifications & education",
    institutions: [
      {
        name: "Rakamin Academy – Scholarship Digital Marketing Bootcamp",
        description: (
          <>
            Intensive bootcamp focused on digital marketing strategy, ads
            management, and analytics.
          </>
        ),
      },
      {
        name: "Rakamin Academy – Advanced Social Media Marketing",
        description: (
          <>
            Deep dive into TikTok, Instagram, and creator‑led campaign strategy
            for growth.
          </>
        ),
      },
      {
        name: "Coursera – Google Project Management Professional Certificate",
        description: (
          <>
            Developed project planning, execution, and stakeholder management
            skills.
          </>
        ),
      },
      {
        name: "Coursera – Google Data Analytics Professional Certificate",
        description: (
          <>
            Learned data analysis, dashboards, and insight‑driven decision
            making.
          </>
        ),
      },
      {
        name: "Dataquest.io – Business Analyst Certification",
        description: (
          <>
            Strengthened SQL, data storytelling, and business analysis
            capabilities.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills, tools & platforms",
    skills: [
      {
        title: "Digital, ads & campaign marketing",
        description: (
          <>
            Planning full‑funnel campaigns, performance management, and
            optimisation across SEO, SEM, influencer marketing, and paid ads.
          </>
        ),
        tags: [
          {
            name: "Digital marketing strategy",
            icon: "rocket",
          },
          {
            name: "Meta & Google Ads",
            icon: "instagram",
          },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Digital ads and campaign visuals",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Social media, content & brand",
        description: (
          <>
            Building content strategies, UGC collaborations, and brand systems
            that grow followers, engagement, and long‑term awareness.
          </>
        ),
        tags: [
          {
            name: "Content & branding",
            icon: "document",
          },
          {
            name: "Social media strategy",
            icon: "instagram",
          },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Social media and brand assets",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Business, CRM & growth",
        description: (
          <>
            Designing growth strategies, CRM journeys, and analytics setups that
            improve retention, lifetime value, and revenue.
          </>
        ),
        tags: [
          {
            name: "Growth marketing",
            icon: "rocket",
          },
          {
            name: "CRM & retention",
            icon: "document",
          },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Growth and CRM strategy visuals",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Tools & analytics stack",
        description: (
          <>
            Comfortable working across analytics, ads, and creative tools:
            Google Analytics, Google Ads, Google Search Console, Google Trends,
            Meta Ads, MoEngage, Power BI, Microsoft 365, Adobe Creative Suite,
            Figma, and CapCut.
          </>
        ),
        tags: [
          {
            name: "Analytics & reporting",
            icon: "rocket",
          },
          {
            name: "Meta & Google Ads",
            icon: "instagram",
          },
          {
            name: "Design & video tools",
            icon: "figma",
          },
        ],
        images: [],
      },
    ],
  },
};

const work: Work = {
  path: "/work",
  label: "Case studies",
  title: `Case studies – ${person.name}`,
  description: `Selected digital marketing campaigns managed by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

export { person, social, newsletter, home, about, work };
