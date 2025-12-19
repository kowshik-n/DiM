import {
  Heading,
  Text,
  RevealFx,
  Column,
  Row,
  Schema,
  Meta,
  Line,
} from "@once-ui-system/core";
import { home, about, person, baseURL } from "@/resources";
import { HeroSection, Mailchimp, Services, Testimonials } from "@/components";
import { Projects } from "@/components/work/Projects";
export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column fillWidth gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        // Static hosting (GitHub Pages) can't run the OG image generation API route.
        image={home.image}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {/* Hero */}
      <RevealFx translateY="16" delay={0.4}>
        <HeroSection />
      </RevealFx>

      {/* Services (immediately after hero) */}
      <Services />

      {/* Testimonials */}
      <Testimonials />

      {/* Featured Projects */}
      <Column
        id="projects"
        fillWidth
        maxWidth="m"
        gap="24"
        marginBottom="l"
        horizontal="center"
      >
        <Row fillWidth paddingLeft="l" paddingTop="24">
          <Heading as="h2" variant="display-strong-xs" wrap="balance">
            Featured Projects
          </Heading>
        </Row>
        <Projects range={[1, 4]} />
      </Column>

      {/* Newsletter */}
      <Mailchimp />
    </Column>
  );
}
