"use client";

import { Column, Row, Heading, Text, RevealFx } from "@once-ui-system/core";
import styles from "./Testimonials.module.scss";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  result?: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "We saw a 972.7% growth in just 3 months. The team's data-driven approach and creative campaigns completely transformed our digital presence.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechStart Inc.",
    result: "972.7% Growth",
  },
  {
    quote: "Their Meta Ads strategy generated 620% more engagement and 1.9K organic reach. Best ROI we've ever had from a marketing agency.",
    author: "Michael Chen",
    role: "CEO",
    company: "Fashion Retail Co.",
    result: "620% Engagement",
  },
  {
    quote: "From SEO to social media management, they handle everything. Our leads increased by 300% and conversion rates doubled.",
    author: "Emma Rodriguez",
    role: "Business Owner",
    company: "Local Services",
    result: "300% More Leads",
  },
];

export const Testimonials = () => {
  return (
    <Column fillWidth gap="xl" paddingY="xl" background="neutral-alpha-weak">
      <Column fillWidth gap="m" paddingX="l" horizontal="center">
        <RevealFx translateY="16" delay={0.2}>
          <Heading
            as="h2"
            variant="display-strong-l"
            align="center"
            wrap="balance"
          >
            What Our Clients Say
          </Heading>
        </RevealFx>
        <RevealFx translateY="16" delay={0.3}>
          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
            align="center"
            maxWidth="32"
          >
            Real results from real businesses
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
        {testimonials.map((testimonial, index) => (
          <RevealFx
            key={testimonial.author}
            translateY="16"
            delay={0.4 + index * 0.1}
          >
            <Column
              className={styles.testimonialCard}
              gap="l"
              padding="xl"
              radius="l"
              border="brand-alpha-weak"
              background="surface"
              style={{
                maxWidth: "400px",
                minHeight: "280px",
              }}
            >
              {testimonial.result && (
                <Row
                  padding="s"
                  paddingX="m"
                  radius="m"
                  background="accent-alpha-weak"
                  style={{ alignSelf: "flex-start" }}
                >
                  <Text
                    variant="label-default-s"
                    onBackground="accent-strong"
                    weight="strong"
                  >
                    {testimonial.result}
                  </Text>
                </Row>
              )}

              <Text
                variant="body-default-l"
                onBackground="neutral-strong"
                style={{ fontStyle: "italic" }}
              >
                "{testimonial.quote}"
              </Text>

              <Column gap="xs">
                <Text variant="body-default-m" weight="strong">
                  {testimonial.author}
                </Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {testimonial.role} at {testimonial.company}
                </Text>
              </Column>
            </Column>
          </RevealFx>
        ))}
      </Row>
    </Column>
  );
};
