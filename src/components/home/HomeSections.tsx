"use client";

import React from "react";
import { Column, Row, Heading, Text, Tag, Icon } from "@once-ui-system/core";
import { about } from "@/resources";
import styles from "./HomeSections.module.scss";

export const HomeSections = () => {
  return (
    <Column fillWidth gap="xl">
      {/* Experience & Results Cards */}
      {about.work.display && (
        <Column id="experience-results" fillWidth gap="xl" paddingTop="xl">
          <Column gap="12" horizontal="center" align="center">
            <Heading as="h2" variant="display-strong-l" align="center">
              {about.work.title}
            </Heading>
            <Text
              variant="body-default-l"
              onBackground="neutral-weak"
              align="center"
            >
              Real results from campaigns across digital ads, social media, and
              growth strategy.
            </Text>
          </Column>
          <div className={styles.experienceGrid}>
            {about.work.experiences.map((experience, index) => (
              <Column
                key={`${experience.company}-${index}`}
                className={styles.experienceCard}
                background="surface"
                border="neutral-alpha-weak"
                radius="xl"
                padding="xl"
                s={{ padding: "l" }}
                gap="m"
              >
                {/* Top gradient bar */}
                <Column className={styles.cardTopBar} />

                {/* Tags/badges at top */}
                <Row wrap gap="8">
                  <Tag size="m" variant="brand">
                    {experience.company}
                  </Tag>
                  {experience.timeframe && (
                    <Tag size="s" variant="neutral">
                      {experience.timeframe}
                    </Tag>
                  )}
                </Row>

                {/* Icon + Title */}
                <Row gap="16" vertical="center">
                  <Column
                    className={styles.iconBox}
                    background="brand-alpha-weak"
                    radius="l"
                    padding="12"
                    fitWidth
                    fitHeight
                  >
                    <Icon name="rocket" onBackground="brand-strong" size="l" />
                  </Column>
                  <Heading as="h3" variant="heading-strong-l">
                    {experience.role}
                  </Heading>
                </Row>

                {/* Achievements list */}
                <Column
                  as="ul"
                  gap="16"
                  paddingLeft="4"
                  className={styles.achievementsList}
                >
                  {experience.achievements.map(
                    (achievement: React.ReactNode, idx: number) => (
                      <Row
                        gap="12"
                        vertical="start"
                        key={`${experience.company}-achievement-${idx}`}
                      >
                        <Column
                          className={styles.bulletPoint}
                          background="brand-alpha-medium"
                          radius="full"
                          minWidth={6}
                          minHeight={6}
                          marginTop="8"
                        />
                        <Text
                          as="li"
                          variant="body-default-m"
                          style={{ listStyle: "none" }}
                        >
                          {achievement}
                        </Text>
                      </Row>
                    )
                  )}
                </Column>

                {/* Optional images */}
                {experience.images && experience.images.length > 0 && (
                  <Row wrap gap="8" paddingTop="8">
                    {experience.images.map((image, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={image.src}
                        alt={image.alt}
                        style={{
                          maxWidth: "100%",
                          borderRadius: "var(--radius-m)",
                          border: "1px solid var(--neutral-border-medium)",
                        }}
                      />
                    ))}
                  </Row>
                )}
              </Column>
            ))}
          </div>
        </Column>
      )}

      {/* Skills, Tools & Platforms (removed) */}

      {/* Certifications & Education removed */}
    </Column>
  );
};
