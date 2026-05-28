import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface SupporterConfirmationProps {
  firstName: string;
  siteUrl?: string;
}

const NAVY = "#1B3A5C";
const RED = "#C53030";
const CREAM = "#FFF8F0";
const TEXT = "#1F2937";
const MUTED = "#6B7280";
const BORDER = "#E5E7EB";

export function SupporterConfirmation({
  firstName,
  siteUrl = "https://campforcitycouncil.com",
}: SupporterConfirmationProps) {
  const greetingName = firstName?.trim() || "friend";

  return (
    <Html>
      <Head />
      <Preview>Welcome to the campaign — thanks for joining, {greetingName}.</Preview>
      <Body style={body}>
        <Container style={container}>
          {/* Header band */}
          <Section style={header}>
            <Img
              src={`${siteUrl}/images/logo-campaign.png`}
              width="120"
              alt="Steve Camp for City Council"
              style={{ display: "block", margin: "0 auto" }}
            />
            <Text style={headerEyebrow}>San Clemente · District One · November 2026</Text>
          </Section>

          {/* Hero */}
          <Section style={hero}>
            <Heading as="h1" style={heroHeading}>
              Welcome aboard, {greetingName}.
            </Heading>
            <Text style={heroSubhead}>
              You just made a real difference, and I wanted to write
              you back personally to say so. Thank you.
            </Text>
          </Section>

          {/* Personal opener */}
          <Section style={card}>
            <Text style={paragraph}>
              For more than 30 years, San Clemente has been the place my family
              and I have called home — where I built a business, raised kids,
              served on the Planning Commission, and got to know more neighbors
              than I can count. This town has given my family so much.
            </Text>
            <Text style={paragraph}>
              Running for City Council is my way of giving something back. And
              having you in our corner makes it all feel a little more possible.
            </Text>
          </Section>

          {/* What to expect */}
          <Section style={card}>
            <Heading as="h2" style={h2}>
              What you can expect from us
            </Heading>
            <Text style={paragraph}>
              We promise to keep it short, honest, and worth your time. Here&rsquo;s
              what&rsquo;s coming your way:
            </Text>
            <Text style={bullet}>
              <strong style={bulletNumber}>1.</strong> Updates from the trail —
              where I stand on the issues, what I&rsquo;m hearing on doorsteps, and
              the wins worth celebrating.
            </Text>
            <Text style={bullet}>
              <strong style={bulletNumber}>2.</strong> Ways to pitch in — whether
              that&rsquo;s knocking on a few doors, making calls, or just spreading
              the word over coffee.
            </Text>
            <Text style={bullet}>
              <strong style={bulletNumber}>3.</strong> Invites to meet up — town
              halls, beach cleanups, and front-porch chats across District One.
              We&rsquo;d love to see you there.
            </Text>
          </Section>

          {/* Priorities */}
          <Section style={card}>
            <Heading as="h2" style={h2}>
              What we&rsquo;re fighting for, together
            </Heading>
            <Text style={pillar}>
              <strong style={pillarTitle}>Safe Neighborhoods &amp; Beaches</strong>
              <br />
              Standing behind the people who keep us safe — our police, fire, and
              lifeguards — so families can live, work, and play without worry.
            </Text>
            <Text style={pillar}>
              <strong style={pillarTitle}>Responsible Use of Your Tax Dollars</strong>
              <br />
              Treating every dollar at City Hall like it&rsquo;s your own — because
              it is. Open books, clear priorities, no funny business.
            </Text>
            <Text style={pillar}>
              <strong style={pillarTitle}>The San Clemente We Love</strong>
              <br />
              Protecting our small-town feel, our coastline, and our right to
              shape our own future — for our kids and the next generation.
            </Text>
          </Section>

          {/* CTAs */}
          <Section style={ctaSection}>
            <Heading as="h2" style={h2}>
              Three small things that go a long way
            </Heading>
            <Text style={paragraph}>
              Campaigns like ours don&rsquo;t run on big donors or slick ads — they
              run on neighbors telling neighbors. If you have a minute, here&rsquo;s
              where to start:
            </Text>

            <table
              role="presentation"
              cellPadding={0}
              cellSpacing={0}
              border={0}
              width="100%"
              style={{ marginTop: 16 }}
            >
              <tbody>
                <tr>
                  <td align="center">
                    <Link href={siteUrl} style={primaryButton}>
                      Explore the Campaign Site
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>

            <Text style={smallCenter}>
              <Link href={`${siteUrl}#donate`} style={inlineLink}>
                Chip in via Zelle
              </Link>
              {"  ·  "}
              <Link
                href="https://www.facebook.com/profile.php?id=61577622498498"
                style={inlineLink}
              >
                Follow on Facebook
              </Link>
              {"  ·  "}
              <Link
                href="https://www.instagram.com/campforcitycouncil/"
                style={inlineLink}
              >
                Follow on Instagram
              </Link>
            </Text>
          </Section>

          {/* Signature */}
          <Section style={{ padding: "0 32px" }}>
            <Hr style={divider} />
            <Text style={paragraph}>
              I know your inbox is full and your time is short — so the fact
              that you signed up means the world. Whether we run into each other
              at the pier, on the trail, or on your doorstep, I&rsquo;m looking
              forward to it.
            </Text>
            <Text style={paragraph}>
              See you around town,
            </Text>
            <Text style={signature}>
              — Steve
              <br />
              <span style={signatureRole}>
                Steve Camp · Candidate, San Clemente City Council, District One
              </span>
            </Text>
            <Text style={ps}>
              <strong>P.S.</strong> If anything in here resonated — or if you
              just want to chat about what&rsquo;s on your mind in the neighborhood —
              you can reply right to this email. It comes straight to me.
            </Text>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Have a question? Reply to this email or reach Steve directly at{" "}
              <Link href="mailto:stevec@elementsarch.com" style={footerLink}>
                stevec@elementsarch.com
              </Link>
              .
            </Text>
            <Text style={disclaimer}>
              Paid for by Steve Camp for San Clemente City Council 2026, ID Number 1487361
            </Text>
            <Text style={disclaimerSmall}>
              You&rsquo;re receiving this email because you signed up at{" "}
              <Link href={siteUrl} style={footerLink}>
                campforcitycouncil.com
              </Link>
              .
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export default SupporterConfirmation;

// ─── Styles ───────────────────────────────────────────────────────────────

const body: React.CSSProperties = {
  backgroundColor: CREAM,
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  margin: 0,
  padding: "32px 0",
};

const container: React.CSSProperties = {
  backgroundColor: "#FFFFFF",
  borderRadius: 12,
  maxWidth: 560,
  margin: "0 auto",
  overflow: "hidden",
  boxShadow: "0 4px 16px rgba(27, 58, 92, 0.08)",
};

const header: React.CSSProperties = {
  backgroundColor: NAVY,
  padding: "32px 32px 24px",
  textAlign: "center" as const,
};

const headerEyebrow: React.CSSProperties = {
  color: "#FFF8F0",
  opacity: 0.85,
  fontSize: 11,
  letterSpacing: 2,
  textTransform: "uppercase" as const,
  margin: "12px 0 0",
  fontWeight: 600,
};

const hero: React.CSSProperties = {
  padding: "36px 32px 8px",
  textAlign: "center" as const,
};

const heroHeading: React.CSSProperties = {
  color: NAVY,
  fontSize: 30,
  fontWeight: 800,
  lineHeight: 1.15,
  margin: "0 0 12px",
  letterSpacing: "-0.02em",
};

const heroSubhead: React.CSSProperties = {
  color: TEXT,
  fontSize: 16,
  lineHeight: 1.55,
  margin: 0,
};

const card: React.CSSProperties = {
  padding: "28px 32px 8px",
};

const h2: React.CSSProperties = {
  color: NAVY,
  fontSize: 18,
  fontWeight: 700,
  margin: "0 0 12px",
  letterSpacing: "-0.01em",
};

const paragraph: React.CSSProperties = {
  color: TEXT,
  fontSize: 15,
  lineHeight: 1.6,
  margin: "0 0 12px",
};

const bullet: React.CSSProperties = {
  color: TEXT,
  fontSize: 15,
  lineHeight: 1.55,
  margin: "0 0 10px",
  paddingLeft: 4,
};

const bulletNumber: React.CSSProperties = {
  color: RED,
  fontWeight: 700,
  marginRight: 6,
};

const pillar: React.CSSProperties = {
  color: TEXT,
  fontSize: 14,
  lineHeight: 1.55,
  margin: "0 0 14px",
  paddingLeft: 12,
  borderLeft: `3px solid ${RED}`,
};

const pillarTitle: React.CSSProperties = {
  color: NAVY,
  fontSize: 15,
  fontWeight: 700,
};

const ctaSection: React.CSSProperties = {
  padding: "24px 32px 28px",
};

const primaryButton: React.CSSProperties = {
  backgroundColor: RED,
  color: "#FFFFFF",
  fontSize: 15,
  fontWeight: 700,
  textDecoration: "none",
  padding: "14px 28px",
  borderRadius: 999,
  display: "inline-block",
  letterSpacing: 0.2,
};

const smallCenter: React.CSSProperties = {
  textAlign: "center" as const,
  fontSize: 13,
  color: MUTED,
  margin: "20px 0 0",
};

const inlineLink: React.CSSProperties = {
  color: NAVY,
  textDecoration: "underline",
  fontWeight: 600,
};

const divider: React.CSSProperties = {
  borderColor: BORDER,
  borderStyle: "solid",
  borderWidth: "1px 0 0",
  margin: "8px 0 20px",
};

const signature: React.CSSProperties = {
  color: NAVY,
  fontSize: 15,
  fontWeight: 700,
  lineHeight: 1.4,
  margin: "16px 0 24px",
};

const signatureRole: React.CSSProperties = {
  color: MUTED,
  fontSize: 13,
  fontWeight: 500,
};

const ps: React.CSSProperties = {
  color: TEXT,
  fontSize: 14,
  lineHeight: 1.6,
  margin: "0 0 24px",
  padding: "14px 16px",
  backgroundColor: CREAM,
  borderRadius: 8,
  borderLeft: `3px solid ${NAVY}`,
};

const footer: React.CSSProperties = {
  backgroundColor: "#F9FAFB",
  padding: "24px 32px",
  borderTop: `1px solid ${BORDER}`,
};

const footerText: React.CSSProperties = {
  color: TEXT,
  fontSize: 13,
  lineHeight: 1.55,
  margin: "0 0 12px",
};

const footerLink: React.CSSProperties = {
  color: NAVY,
  textDecoration: "underline",
};

const disclaimer: React.CSSProperties = {
  color: MUTED,
  fontSize: 11,
  lineHeight: 1.5,
  margin: "0 0 8px",
  fontStyle: "italic" as const,
};

const disclaimerSmall: React.CSSProperties = {
  color: MUTED,
  fontSize: 11,
  lineHeight: 1.5,
  margin: 0,
};
