"use client";

import { Column, Row, Heading, Text, Icon, RevealFx } from "@once-ui-system/core";
import styles from "./Services.module.scss";

interface Service {
  icon: string;
  title: string;
  description: string;
  image: { src: string; alt: string };
  features?: string[];
}

const services: Service[] = [
  {
    icon: "instagram",
    title: "Meta Advertising",
    description: "Full-funnel Facebook & Instagram ad campaigns that drive real results.",
    image: {
      src: "/images/projects/project-01/cover-01.jpg",
      alt: "Meta advertising campaign dashboard",
    },
    features: [
      "Campaign setup & funnel creation",
      "Audience research & targeting",
      "A/B testing & optimization",
      "Retargeting & conversion tracking",
      "Lead generation & sales campaigns",
    ],
  },
  {
    icon: "users",
    title: "Social Media Management",
    description: "Build your brand presence and engage your audience effectively.",
    image: {
      src: "/images/projects/project-01/cover-02.jpg",
      alt: "Social media content and analytics",
    },
    features: [
      "Content planning & strategy",
      "Caption writing & hashtags",
      "Community engagement",
      "Monthly growth reports",
      "Profile optimization",
    ],
  },
  {
    icon: "document",
    title: "Content Creation",
    description: "High-quality content that captures attention and drives conversions.",
    image: {
      src: "/images/projects/project-01/cover-03.jpg",
      alt: "Content creation and creative production",
    },
    features: [
      "Social media posts (reels, stories)",
      "Ad creatives for campaigns",
      "Photography & video content",
      "Brand-aligned aesthetics",
      "Scriptwriting & templates",
    ],
  },
  {
    icon: "rocket",
    title: "SEO Services",
    description: "Rank higher on Google and drive organic traffic that converts.",
    image: {
      src: "/images/projects/project-01/cover-04.jpg",
      alt: "SEO growth chart and keyword strategy",
    },
    features: [
      "Complete website SEO audit",
      "Keyword research & strategy",
      "On-page & technical SEO",
      "Local SEO optimization",
      "Monthly ranking reports",
    ],
  },
];

export const Services = () => {
  return (
    <Column fillWidth gap="xl" paddingY="xl">
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
            maxWidth="32"
          >
            End-to-end digital marketing solutions designed to scale your business
          </Text>
        </RevealFx>
      </Column>

      <Column fillWidth gap="m" paddingX="l">
        {services.map((service, index) => (
          <RevealFx
            key={service.title}
            translateY="16"
            delay={0.35 + index * 0.08}
          >
            <Row
              className={styles.serviceRow}
              fillWidth
              gap="xl"
              padding="xl"
              radius="xl"
              border="neutral-alpha-weak"
              background="surface"
              vertical="center"
              s={{ direction: "column", gap: "l" }}
            >
              {/* Left: content */}
              <Column className={styles.serviceCopy} gap="m" flex={1}>
                <Row gap="s" vertical="center">
                  <Column
                    className={styles.iconWrapper}
                    padding="m"
                    radius="m"
                    background="brand-alpha-weak"
                    horizontal="center"
                    vertical="center"
                    style={{ width: "56px", height: "56px" }}
                  >
                    <Icon
                      name={service.icon as any}
                      size="l"
                      onBackground="brand-strong"
                    />
                  </Column>
                  <Heading as="h3" variant="heading-strong-xl">
                    {service.title}
                  </Heading>
                </Row>

                <Text variant="body-default-l" onBackground="neutral-weak">
                  {service.description}
                </Text>

                {service.features && (
                  <Column gap="xs" paddingTop="xs">
                    {service.features.map((feature) => (
                      <Row key={feature} gap="s" vertical="center">
                        <Icon
                          name="check"
                          size="xs"
                          onBackground="accent-strong"
                        />
                        <Text variant="body-default-s" onBackground="neutral-medium">
                          {feature}
                        </Text>
                      </Row>
                    ))}
                  </Column>
                )}
              </Column>

              {/* Right: image */}
              <Column className={styles.serviceMedia} flex={1}>
                <div className={styles.imageFrame}>
                  <img
                    className={styles.image}
                    src={service.image.src}
                    alt={service.image.alt}
                    loading="lazy"
                  />
                </div>
              </Column>
            </Row>
          </RevealFx>
        ))}
      </Column>
    </Column>
  );
};
