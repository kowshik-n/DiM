"use client";

import { Column, Row, Heading, Text, Icon, RevealFx } from "@once-ui-system/core";
import styles from "./Services.module.scss";

interface Service {
  icon: string;
  title: string;
  description: string;
  features?: string[];
}

const services: Service[] = [
  {
    icon: "instagram",
    title: "Meta Advertising",
    description: "Full-funnel Facebook & Instagram ad campaigns that drive real results.",
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

      <Row
        fillWidth
        gap="m"
        paddingX="l"
        wrap
        horizontal="center"
      >
        {services.map((service, index) => (
          <RevealFx
            key={service.title}
            translateY="16"
            delay={0.4 + index * 0.1}
          >
            <Column
              className={styles.serviceCard}
              gap="m"
              padding="xl"
              radius="l"
              border="neutral-alpha-weak"
              background="surface"
              fillWidth
              style={{
                maxWidth: "480px",
                minHeight: "380px",
              }}
            >
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
              </Row>

              <Column gap="s">
                <Heading as="h3" variant="heading-strong-l">
                  {service.title}
                </Heading>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {service.description}
                </Text>
              </Column>

              {service.features && (
                <Column gap="xs" paddingTop="s">
                  {service.features.map((feature, idx) => (
                    <Row key={idx} gap="s" vertical="center">
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
          </RevealFx>
        ))}
      </Row>
    </Column>
  );
};
