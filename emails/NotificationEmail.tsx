import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface NotificationEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  zipCode?: string;
  smsOptIn: boolean;
  submittedAt: string;
}

export function NotificationEmail({
  firstName,
  lastName,
  email,
  phone,
  zipCode,
  smsOptIn,
  submittedAt,
}: NotificationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>
        New supporter: {firstName} {lastName} ({email})
      </Preview>
      <Body style={body}>
        <Container style={container}>
          <Section style={header}>
            <Text style={eyebrow}>Campaign Site Signup</Text>
            <Heading as="h1" style={h1}>
              New supporter signup
            </Heading>
          </Section>

          <Section style={card}>
            <Row label="Name" value={`${firstName} ${lastName}`} />
            <Row label="Email" value={email} mono />
            <Row label="Phone" value={phone || "—"} mono />
            <Row label="Zip code" value={zipCode || "—"} mono />
            <Row label="SMS opt-in" value={smsOptIn ? "Yes" : "No"} />
            <Row label="Submitted" value={submittedAt} />
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              Reply directly to this email to respond to {firstName}.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

function Row({
  label,
  value,
  mono,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <table
      role="presentation"
      cellPadding={0}
      cellSpacing={0}
      width="100%"
      style={{ marginBottom: 8 }}
    >
      <tbody>
        <tr>
          <td style={{ width: 110, verticalAlign: "top", paddingRight: 12 }}>
            <Text style={labelStyle}>{label}</Text>
          </td>
          <td style={{ verticalAlign: "top" }}>
            <Text style={mono ? valueMono : valueStyle}>{value}</Text>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default NotificationEmail;

const NAVY = "#1D3557";
const TEXT = "#1F2937";
const MUTED = "#6B7280";

const body: React.CSSProperties = {
  backgroundColor: "#F3F4F6",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  margin: 0,
  padding: "24px 0",
};

const container: React.CSSProperties = {
  backgroundColor: "#FFFFFF",
  borderRadius: 10,
  maxWidth: 520,
  margin: "0 auto",
  overflow: "hidden",
  border: "1px solid #E5E7EB",
};

const header: React.CSSProperties = {
  padding: "24px 28px 16px",
  borderBottom: "1px solid #E5E7EB",
};

const eyebrow: React.CSSProperties = {
  color: MUTED,
  fontSize: 11,
  letterSpacing: 2,
  textTransform: "uppercase" as const,
  margin: "0 0 6px",
  fontWeight: 600,
};

const h1: React.CSSProperties = {
  color: NAVY,
  fontSize: 20,
  fontWeight: 700,
  margin: 0,
};

const card: React.CSSProperties = {
  padding: "20px 28px 8px",
};

const labelStyle: React.CSSProperties = {
  color: MUTED,
  fontSize: 12,
  fontWeight: 600,
  textTransform: "uppercase" as const,
  letterSpacing: 0.5,
  margin: 0,
  lineHeight: 1.6,
};

const valueStyle: React.CSSProperties = {
  color: TEXT,
  fontSize: 14,
  margin: 0,
  lineHeight: 1.55,
};

const valueMono: React.CSSProperties = {
  color: TEXT,
  fontSize: 14,
  margin: 0,
  lineHeight: 1.55,
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
};

const footer: React.CSSProperties = {
  padding: "16px 28px 24px",
  borderTop: "1px solid #E5E7EB",
};

const footerText: React.CSSProperties = {
  color: MUTED,
  fontSize: 12,
  margin: 0,
};
