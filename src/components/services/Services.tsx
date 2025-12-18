"use client";

import {
  Column,
  Row,
  Heading,
  Text,
  RevealFx,
  Button,
  Icon,
} from "@once-ui-system/core";
import styles from "./Services.module.scss";
import { MdVerified } from "react-icons/md";

interface Service {
  title: string;
  description: string;
  icon: string;
  features: { text: string; icon: string }[];
  href: string;
  image: string;
}

const services: Service[] = [
  {
    title: "Meta Advertising",
    description:
      "Full-funnel Facebook & Instagram ad campaigns that drive real results.",
    icon: "rocket",
    href: "/work/meta-advertising-services",
    image: "/images/projects/project-01/cover-01.jpg",
    features: [
      { text: "Campaign setup & funnel creation", icon: "fb-verified" },
      { text: "Audience research & targeting", icon: "search" },
      { text: "A/B testing & optimization", icon: "refresh" },
      { text: "Retargeting & conversion tracking", icon: "fb-verified" },
    ],
  },
  {
    title: "Social Media Management",
    description:
      "Build your brand presence and engage your audience effectively.",
    icon: "info",
    href: "/work/social-media-management",
    image: "/images/projects/project-01/cover-02.jpg",
    features: [
      { text: "Content planning & strategy", icon: "fb-verified" },
      { text: "Community engagement", icon: "fb-verified" },
      { text: "Monthly growth reports", icon: "fb-verified" },
      { text: "Profile optimization", icon: "fb-verified" },
    ],
  },
  {
    title: "Content Creation",
    description:
      "High-quality content that captures attention and drives conversions.",
    icon: "sparkle",
    href: "/work/content-creation-services",
    image: "/images/projects/project-01/cover-03.jpg",
    features: [
      { text: "Social media posts & reels", icon: "fb-verified" },
      { text: "Ad creatives for campaigns", icon: "fb-verified" },
      { text: "Photography & video content", icon: "fb-verified" },
      { text: "Brand-aligned aesthetics", icon: "fb-verified" },
    ],
  },
  {
    title: "SEO Services",
    description:
      "Rank higher on Google and drive organic traffic that converts.",
    icon: "search",
    href: "/work/seo-services",
    image: "/images/projects/project-01/cover-04.jpg",
    features: [
      { text: "Complete website SEO audit", icon: "fb-verified" },
      { text: "Keyword research & strategy", icon: "search" },
      { text: "On-page & technical SEO", icon: "fb-verified" },
      { text: "Local SEO optimization", icon: "fb-verified" },
    ],
  },
];

export const Services = () => {
  return (
    <Column id="services" fillWidth gap="xl" paddingY="xl">
      {/* Section header */}
      <Column fillWidth gap="m" paddingX="l" horizontal="center">
        <RevealFx translateY="16" delay={0.2}>
          <Heading
            as="h2"
            variant="display-strong-l"
            align="center"
            wrap="balance"
          >
            Our Services
          </Heading>
        </RevealFx>
        <RevealFx translateY="16" delay={0.3}>
          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
            align="center"
            wrap="balance"
          >
            End-to-end digital marketing solutions designed to scale your
            business
          </Text>
        </RevealFx>
      </Column>

      {/* Services list */}
      <Column fillWidth gap="l" paddingX="l">
        {services.map((service, index) => (
          <RevealFx
            key={service.title}
            translateY="16"
            delay={0.35 + index * 0.1}
          >
            <div className={styles.serviceCard}>
              {/* Gradient accent */}
              <div className={styles.gradientAccent} />

              <div className={styles.serviceInner}>
                {/* Left: content */}
                <div className={styles.serviceContent}>
                  {/* Icon + Title row */}
                  <div className={styles.serviceHeader}>
                    <div className={styles.serviceIcon}>
                      {service.title === "Meta Advertising" ? (
                        <span className={styles.metaLogoWrap}>
                          <img
                            src="/images/meta-logo.png"
                            alt="Meta logo"
                            className={styles.metaLogo}
                            width={40}
                            height={40}
                            loading="lazy"
                          />
                        </span>
                      ) : service.title === "SEO Services" ? (
                        <span className={styles.metaLogoWrap}>
                          <img
                            src="/images/seo-logo.png"
                            alt="SEO logo"
                            className={styles.seoLogo}
                            width={40}
                            height={40}
                            loading="lazy"
                          />
                        </span>
                      ) : service.title === "Social Media Management" ? (
                        <span className={styles.metaLogoWrap}>
                          <img
                            src="/images/social-logo.png"
                            alt="Social logo"
                            className={styles.socialLogo}
                            width={40}
                            height={40}
                            loading="lazy"
                          />
                        </span>
                      ) : service.title === "Content Creation" ? (
                        <span className={styles.metaLogoWrap}>
                          <img
                            src="/images/camera-logo.png"
                            alt="Content logo"
                            className={styles.cameraLogo}
                            width={40}
                            height={40}
                            loading="lazy"
                          />
                        </span>
                      ) : (
                        <Icon
                          name={service.icon as any}
                          size="l"
                          onBackground="brand-strong"
                        />
                      )}
                    </div>
                    <Heading as="h3" variant="heading-strong-xl">
                      {service.title}
                    </Heading>
                  </div>

                  <Text variant="body-default-l" onBackground="neutral-weak">
                    {service.description}
                  </Text>

                  {/* Features */}
                  <ul className={styles.featureList}>
                    {service.features.map((feature) => (
                      <li key={feature.text} className={styles.featureItem}>
                        <span
                          className={`${styles.featureIconWrap} ${styles.featureIconWrapNoBg}`}
                        >
                          <img
                            src="/images/verified-logo.png"
                            alt="verified"
                            className={styles.featureVerified}
                            width={18}
                            height={18}
                            loading="lazy"
                          />
                        </span>
                        <Text
                          variant="body-default-m"
                          onBackground="neutral-medium"
                        >
                          {feature.text}
                        </Text>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className={styles.serviceCta}>
                    <Button href={service.href} variant="secondary" size="m">
                      Explore Service
                    </Button>
                  </div>
                </div>

                {/* Right: image */}
                <div className={styles.serviceImage}>
                  <img src={service.image} alt={service.title} loading="lazy" />
                </div>
              </div>
            </div>
          </RevealFx>
        ))}
      </Column>
    </Column>
  );
};
