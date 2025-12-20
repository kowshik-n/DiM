"use client";

import { Column, Heading, Text, RevealFx } from "@once-ui-system/core";
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
    quote:
      "We saw a 972.7% growth in just 3 months. The team's data-driven approach and creative campaigns completely transformed our digital presence.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechStart Inc.",
    result: "972.7% Growth",
  },
  {
    quote:
      "Their Meta Ads strategy generated 620% more engagement and 1.9K organic reach. Best ROI we've ever had from a marketing agency.",
    author: "Michael Chen",
    role: "CEO",
    company: "Fashion Retail Co.",
    result: "620% Engagement",
  },
  {
    quote:
      "From SEO to social media management, they handle everything. Our leads increased by 300% and conversion rates doubled.",
    author: "Emma Rodriguez",
    role: "Business Owner",
    company: "Local Services",
    result: "300% More Leads",
  },
  {
    quote:
      "Professional, responsive, and results-oriented. They helped us scale our ad spend while maintaining strong ROAS.",
    author: "James Wilson",
    role: "Growth Lead",
    company: "SaaS Startup",
    result: "10x Ad Scale",
  },
  {
    quote:
      "The SEO results exceeded our expectations. We went from page 5 to ranking #1 for our main keywords in under 6 months.",
    author: "Lisa Thompson",
    role: "Operations Manager",
    company: "E-commerce Plus",
    result: "#1 Google Ranking",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className={styles.card}>
    {testimonial.result && (
      <div className={styles.resultBadge}>
        <Text variant="label-default-s">
          {testimonial.result}
        </Text>
      </div>
    )}

    <Text
      variant="body-default-l"
      onBackground="neutral-strong"
      className={styles.quote}
    >
      "{testimonial.quote}"
    </Text>

    <div className={styles.authorInfo}>
      <Text variant="body-default-m">
        {testimonial.author}
      </Text>
      <Text variant="body-default-s" onBackground="neutral-weak">
        {testimonial.role} at {testimonial.company}
      </Text>
    </div>
  </div>
);

export const Testimonials = () => {
  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <Column
      id="testimonials"
      fillWidth
      gap="xl"
      paddingY="xl"
      paddingX="l"
      s={{ paddingX: "m" }}
    >
      <Column fillWidth gap="m" horizontal="center" align="center">
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
            style={{ maxWidth: "32rem" }}
          >
            Real results from real businesses we've helped grow
          </Text>
        </RevealFx>
      </Column>

      <RevealFx translateY="16" delay={0.4}>
        <div className={styles.carouselContainer}>
          <div className={styles.carouselTrack}>
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.author}-${index}`}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </RevealFx>
    </Column>
  );
};
