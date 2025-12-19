"use client";

import React from "react";
import {
  Column,
  Row,
  Heading,
  Text,
  Avatar,
  Button,
  IconButton,
  Badge,
} from "@once-ui-system/core";
import { about, person, social, home } from "@/resources";
import { withBasePath } from "@/utils/withBasePath";
import styles from "./HomeSections.module.scss";

// TODO: Update these to your real business number.
const CONTACT_PHONE_DISPLAY = "+91 00000 00000";
// Digits only, including country code (used for https://wa.me/<number>)
const WHATSAPP_NUMBER = "910000000000";

export const HeroSection = () => {
  if (!about.intro.display) return null;

  return (
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

        {/* Right: avatar, name, social, CTA */}
        <Column
          gap="m"
          horizontal="center"
          align="start"
          className={styles.heroProfile}
        >
          {about.avatar.display && (
            <Column className={styles.avatarWrapper} gap="0">
              <div className={styles.avatarGlow}>
                <Avatar src={withBasePath(person.avatar)} size="xl" />
              </div>
              <div className={styles.floatingLogos} aria-hidden>
                <img
                  src={withBasePath("/images/meta-logo.png")}
                  alt=""
                  className={styles.floatingLogo}
                  width={44}
                  height={44}
                />
                <img
                  src={withBasePath("/images/seo-logo.png")}
                  alt=""
                  className={styles.floatingLogo}
                  width={36}
                  height={36}
                />
                <img
                  src={withBasePath("/images/social-logo.png")}
                  alt=""
                  className={styles.floatingLogo}
                  width={32}
                  height={32}
                />
                <img
                  src={withBasePath("/images/camera-logo.png")}
                  alt=""
                  className={styles.floatingLogo}
                  width={28}
                  height={28}
                />
              </div>
            </Column>
          )}

          <Column gap="8" horizontal="center" align="center">
            <Heading
              variant="display-strong-l"
              align="center"
              className={styles.heroName}
            >
              {person.name}
            </Heading>
          </Column>

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

          {/*
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
          */}

          <Row
            gap="8"
            wrap
            horizontal="center"
            paddingTop="12"
            className={styles.heroContactButtons}
          >
            <Button
              href={`mailto:${person.email}`}
              size="m"
              variant="secondary"
              prefixIcon="email"
              label={person.email}
              className={styles.ctaButton}
            />
            <Button
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              size="m"
              variant="primary"
              prefixIcon="whatsapp"
              label={`Call / WhatsApp: ${CONTACT_PHONE_DISPLAY}`}
              className={styles.ctaButton}
            />
          </Row>
        </Column>
      </Row>
    </Column>
  );
};
