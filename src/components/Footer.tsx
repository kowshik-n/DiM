import {
  Row,
  IconButton,
  SmartLink,
  Text,
  Button,
  Column,
} from "@once-ui-system/core";
import { person, social } from "@/resources";
import styles from "./Footer.module.scss";
import React from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Row
      as="footer"
      fillWidth
      padding="8"
      horizontal="center"
      s={{ direction: "column" }}
    >
      <Row
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="between"
        vertical="center"
        s={{
          direction: "column",
          horizontal: "center",
          align: "center",
        }}
      >
        <Text variant="body-default-s" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© {currentYear} /</Text>
          <Text paddingX="4">{person.name}</Text>
        </Text>

        {/* Social Media Links */}
        {social.length > 0 && (
          <Row gap="8" wrap horizontal="center" className={styles.socialLinks}>
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
                          size="s"
                          variant="secondary"
                        />
                      </Row>
                      <Row hide s={{ hide: false }}>
                        <IconButton
                          size="m"
                          href={item.link}
                          icon={item.icon}
                          variant="secondary"
                          tooltip={item.name}
                        />
                      </Row>
                    </React.Fragment>
                  )
              )}
          </Row>
        )}

        {/* Fallback for non-essential social links */}
        {social.filter((item) => !item.essential && item.link).length > 0 && (
          <Row gap="12" horizontal="center">
            {social.map(
              (item) =>
                !item.essential &&
                item.link && (
                  <IconButton
                    key={item.name}
                    href={item.link}
                    icon={item.icon}
                    tooltip={item.name}
                    size="s"
                    variant="ghost"
                  />
                )
            )}
          </Row>
        )}
      </Row>
      <Row height="80" hide s={{ hide: false }} />
    </Row>
  );
};
