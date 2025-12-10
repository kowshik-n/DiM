"use client";

import React from "react";
import {
  Column,
  Row,
  Heading,
  Text,
  Tag,
  Icon,
  Avatar,
  Button,
  IconButton,
  Badge,
} from "@once-ui-system/core";
import { about, person, social, home } from "@/resources";
import styles from "./HomeSections.module.scss";

export const HomeSections = () => {
  return (
    <Column fillWidth gap="xl">
      {/* Hero/Intro Section */}
      {about.intro.display && (
        <Column
          fillWidth
          gap="l"
          horizontal="center"
          className={styles.heroSection}
          paddingY="32"
          paddingX="l"
        >
          <Row fillWidth className={styles.heroContent}>
            {/* Left: headline and intro copy */}
            <Column gap="m" align="start" className={styles.heroCopy}>
              {home.featured.display && (
                <Row paddingBottom="12">
                  <Badge
                    background="brand-alpha-weak"
                    paddingX="12"
                    paddingY="4"
                    onBackground="neutral-strong"
                    textVariant="label-default-s"
                    arrow={false}
                    href={home.featured.href}
                  >
                    <Row paddingY="2">{home.featured.title}</Row>
                  </Badge>
                </Row>
              )}
              <Heading
                variant="display-strong-m"
                align="left"
                className={styles.heroHeadline}
              >
                {home.headline}
              </Heading>
              <Text
                variant="heading-default-l"
                onBackground="neutral-weak"
                align="left"
              >
                {home.subline}
              </Text>
            </Column>

            {/* Right: avatar, name, role, social, CTA */}
            <Column
              gap="m"
              horizontal="center"
              align="start"
              className={styles.heroProfile}
            >
              {/* Avatar with decorative elements */}
              {about.avatar.display && (
                <Column className={styles.avatarWrapper} gap="0">
                  <div className={styles.avatarGlow}>
                    <Avatar src={person.avatar} size="xl" />
                  </div>
                </Column>
              )}

              {/* Name and Role */}
              <Column gap="8" horizontal="center" align="center">
                <Heading
                  variant="display-strong-l"
                  align="center"
                  className={styles.heroName}
                >
                  {person.name}
                </Heading>
                {/* <Row
                  className={styles.roleTag}
                  background="brand-alpha-weak"
                  border="brand-alpha-medium"
                  radius="full"
                  paddingX="20"
                  paddingY="8"
                  gap="8"
                  vertical="center"
                >
                  <Column
                    background="brand-background-strong"
                    radius="full"
                    minWidth="8"
                    minHeight="8"
                    className={styles.pulsingDot}
                  />
                  <Text
                    variant="heading-default-l"
                    onBackground="brand-strong"
                    weight="medium"
                  >
                    {person.role}
                  </Text>
                </Row> */}
              </Column>

              {/* Location and Languages */}
              {/* <Row gap="8" wrap horizontal="center" paddingTop="4">
                <Row
                  gap="6"
                  vertical="center"
                  background="surface"
                  border="neutral-alpha-weak"
                  radius="full"
                  paddingX="16"
                  paddingY="6"
                >
                  <Icon onBackground="accent-medium" name="globe" size="xs" />
                  <Text variant="body-default-s" weight="medium">
                    {person.location}
                  </Text>
                </Row>
                {person.languages && person.languages.length > 0 && (
                  <>
                    {person.languages.map((language, index) => (
                      <Tag key={index} size="m" variant="neutral">
                        {language}
                      </Tag>
                    ))}
                  </>
                )}
              </Row> */}

              {/* Social Links */}
              {social.length > 0 && (
                <Row
                  gap="8"
                  wrap
                  horizontal="center"
                  paddingTop="12"
                  className={styles.socialLinks}
                >
                  {social
                    .filter((item) => item.essential)
                    .map(
                      (item) =>
                        item.link && (
                          <React.Fragment key={item.name}>
                            <Row s={{ hide: true }}>
                              <Button
                                href={item.link}
                                prefixIcon={item.icon}
                                label={item.name}
                                size="m"
                                variant="secondary"
                                className={styles.socialButton}
                              />
                            </Row>
                            <Row hide s={{ hide: false }}>
                              <IconButton
                                size="l"
                                href={item.link}
                                icon={item.icon}
                                variant="secondary"
                                className={styles.socialButton}
                              />
                            </Row>
                          </React.Fragment>
                        )
                    )}
                </Row>
              )}

              {/* CTA Buttons Row */}
              <Row gap="8" wrap horizontal="center" paddingTop="8">
                {about.calendar.display && (
                  <Button
                    href={about.calendar.link}
                    size="m"
                    variant="primary"
                    prefixIcon="calendar"
                    className={styles.ctaButton}
                  >
                    Schedule a call
                  </Button>
                )}
                <Button
                  href={`mailto:${person.email}`}
                  size="m"
                  variant="secondary"
                  prefixIcon="email"
                >
                  Get in touch
                </Button>
              </Row>
            </Column>
          </Row>

          {/* Intro Description */}
          {/* <Column
            textVariant="body-default-l"
            fillWidth
            gap="m"
            marginTop="l"
            align="center"
            className={styles.heroDescription}
          >
            {about.intro.description}
          </Column> */}
        </Column>
      )}

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
                          minWidth="6"
                          minHeight="6"
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

      {/* Skills, Tools & Platforms */}
      {about.technical.display && (
        <Column id="skills-tools-platforms" fillWidth gap="xl" paddingTop="xl">
          <Column gap="12" horizontal="center" align="center">
            <Heading as="h2" variant="display-strong-l" align="center">
              {about.technical.title}
            </Heading>
            <Text
              variant="body-default-l"
              onBackground="neutral-weak"
              align="center"
            >
              Comprehensive toolkit for full-funnel digital marketing execution.
            </Text>
          </Column>
          <Column fillWidth gap="l" paddingTop="l">
            {about.technical.skills.map((skill, index) => (
              <Column
                key={`${skill.title}-${index}`}
                fillWidth
                className={styles.skillCard}
                background="surface"
                border="neutral-alpha-weak"
                radius="xl"
                padding="xl"
                gap="l"
              >
                <Row gap="12" vertical="center">
                  <Column
                    className={styles.skillIconBox}
                    background="accent-alpha-weak"
                    radius="l"
                    padding="10"
                    fitWidth
                    fitHeight
                  >
                    <Icon name="rocket" onBackground="accent-medium" size="m" />
                  </Column>
                  <Heading as="h3" variant="heading-strong-xl">
                    {skill.title}
                  </Heading>
                </Row>
                <Text variant="body-default-l" onBackground="neutral-weak">
                  {skill.description}
                </Text>
                {skill.tags && skill.tags.length > 0 && (
                  <Row wrap gap="8" paddingTop="8">
                    {skill.tags.map((tag, tagIndex) => (
                      <Tag
                        key={`${skill.title}-tag-${tagIndex}`}
                        size="l"
                        prefixIcon={tag.icon}
                      >
                        {tag.name}
                      </Tag>
                    ))}
                  </Row>
                )}
                {skill.images && skill.images.length > 0 && (
                  <Row wrap gap="12" paddingTop="m">
                    {skill.images.map((image, imgIndex) => (
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
          </Column>
        </Column>
      )}

      {/* Certifications & Education */}
      {about.studies.display && (
        <Column id="certifications-education" fillWidth gap="xl" paddingTop="xl">
          <Column gap="12" horizontal="center" align="center">
            <Heading as="h2" variant="display-strong-l" align="center">
              {about.studies.title}
            </Heading>
            <Text
              variant="body-default-l"
              onBackground="neutral-weak"
              align="center"
            >
              Professional certifications and continuous learning in digital
              marketing and analytics.
            </Text>
          </Column>
          <Row
            fillWidth
            gap="l"
            wrap
            m={{ direction: "column" }}
            paddingTop="l"
          >
            {about.studies.institutions.map((institution, index) => (
              <Column
                key={`${institution.name}-${index}`}
                flex={1}
                minWidth="300"
                className={styles.certCard}
                background="surface"
                border="neutral-alpha-weak"
                radius="xl"
                padding="l"
                gap="12"
              >
                <Row gap="12" vertical="start">
                  <Column
                    className={styles.certIconBox}
                    background="accent-alpha-weak"
                    radius="m"
                    padding="8"
                    fitWidth
                    fitHeight
                  >
                    <Icon
                      name="document"
                      onBackground="accent-strong"
                      size="s"
                    />
                  </Column>
                  <Column gap="4" flex={1}>
                    <Text variant="heading-strong-s" wrap="balance">
                      {institution.name}
                    </Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {institution.description}
                    </Text>
                  </Column>
                </Row>
              </Column>
            ))}
          </Row>
        </Column>
      )}
    </Column>
  );
};
