export const SITE = {
  name: "Steve Camp for City Council",
  title: "Steve Camp for San Clemente City Council | District 1",
  description:
    "Steve Camp is running for San Clemente City Council District One in November 2026. Committed to public safety, fiscal responsibility, and preserving our coastal quality of life.",
  url: "https://campforcitycouncil.com",
  email: "stevec@elementsarch.com",
  phone: "(949) 637-2833",
  formspreeEndpoint: "https://formspree.io/f/xgollgaq",
  disclaimer:
    "Paid for by Camp for San Clemente City Council 2026, ID Number 1487361",
  socialMedia: {
    facebook: "https://www.facebook.com/profile.php?id=61577622498498",
    instagram: "https://www.instagram.com/campforcitycouncil/",
  },
} as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Issues", href: "#issues" },
  { label: "Endorsements", href: "#endorsements" },
  { label: "Donate", href: "#donate" },
] as const;

export const HERO = {
  name1: "STEVE",
  name2: "CAMP",
  badge: "November 2026",
  subtitle: "For San Clemente City Council — District One",
  tagline: "Experience. Integrity. Community.",
  cta1: "Donate",
  cta2: "Learn More",
} as const;

export const ABOUT = {
  heading: "about steve",
  stats: [
    { number: "4.5 years", label: "Planning Commission" },
    { number: "4.5 years", label: "Design Review" },
    { number: "36 years", label: "Architecture business owner" },
    { number: "30+ years", label: "San Clemente Resident" },
  ],
} as const;

export const ISSUES = {
  heading: "the issues",
  subheading: "Steve is focused on the priorities that San Clemente families care about most.",
  items: [
    {
      title: "Safe Neighborhoods and Beaches for All",
      description:
        "I will strengthen public safety resources and stand behind our police, fire, and lifeguard teams so our neighborhoods and beaches remain safe places for families to live, work, and play.",
    },
    {
      title: "Protecting Our Small-Town Coastal Character",
      description:
        "I will work to preserve San Clemente's small-town charm by ensuring that any new development respects our community's scale, architecture, and coastal village feel.",
    },
    {
      title: "Compassionate, Accountable Homelessness Solutions",
      description:
        "I will address homelessness with both compassion and accountability, connecting people with services and support while keeping our public spaces clean, safe, and accessible for everyone.",
    },
    {
      title: "Responsible, Transparent Stewardship of Taxpayer Dollars",
      description:
        "I will insist on fiscal responsibility at City Hall, prioritize essential services, and make sure every taxpayer dollar is spent wisely, openly, and with clear accountability.",
    },
    {
      title: "Local Control Over Our Community's Future",
      description:
        "I will fight to keep decision-making power in San Clemente's hands and push back against unfunded state mandates that undermine our community's ability to shape its own future.",
    },
    {
      title: "Safeguarding Our Coastline for the Next Generation",
      description:
        "I will protect our beaches, trails, and open spaces through responsible environmental stewardship and practical, sustainable coastal management so future generations can enjoy the San Clemente we love.",
    },
    {
      title: "Supporting Strong Families and Community Values",
      description:
        "I will champion family-friendly policies, support our local schools and youth programs, and foster a connected, vibrant community that reflects the values we share in San Clemente.",
    },
  ],
} as const;

export const QUALIFICATIONS = {
  heading: "Qualifications",
  subheading: "Decades of experience serving San Clemente.",
  items: [
    {
      value: 4.5,
      suffix: "years",
      label: "Planning Commission",
      description: "Service on the San Clemente Planning Commission",
      headline: "4.5 years serving on the Planning Commission",
    },
    {
      value: 4.5,
      suffix: "years",
      label: "Design Review",
      description: "Service on the San Clemente Design Review Subcommittee",
      headline: "4.5 years on the Design Review Subcommittee",
    },
    {
      value: 36,
      suffix: "years",
      label: "Architecture",
      description: "Running a successful architecture firm in South Orange County",
      headline: "36 years running a successful architecture firm",
    },
    {
      value: null,
      displayText: "Proven record",
      label: "Community Leadership",
      description: "Of dedicated community service and civic engagement",
      headline: "Proven record of community leadership",
    },
  ],
} as const;

export const ENDORSEMENTS = {
  heading: "Endorsed By",
  subheading:
    "Trusted by San Clemente's proven leaders.",
  items: [
    {
      name: "Steve Knoblock",
      title: "Mayor Pro Tem",
      context: "City of San Clemente",
      image: "/images/endorsers/knoblock.jpg",
    },
    {
      name: "Victor Cabral",
      title: "Former Mayor & Current City Council Member",
      context: "City of San Clemente",
      image: "/images/endorsers/cabral.jpg",
    },
    {
      name: "Cameron Cosgrove",
      title: "Chairman, San Clemente Planning Commission",
      context: "City of San Clemente",
      image: "/images/endorsers/cosgrove.jpg",
    },
  ],
} as const;

export const GET_INVOLVED = {
  heading: "get involved",
  items: [
    {
      title: "Volunteer",
      description: "Knock on doors, make phone calls, or help at events.",
      cta: "Sign up",
      href: "#contact",
    },
    {
      title: "Endorse Steve",
      description: "Add your name to the growing list of supporters.",
      cta: "Add your name",
      href: "#contact",
    },
    {
      title: "Spread the Word",
      description: "Share Steve's message with your neighbors and friends.",
      cta: "Follow on social",
      href: "https://www.facebook.com/profile.php?id=61577622498498",
    },
    {
      title: "Donate",
      description: "Your financial support helps Steve reach every voter.",
      cta: "Contribute now",
      href: "#donate",
    },
  ],
} as const;

export const DONATE = {
  heading: "support the campaign",
  subheading:
    "Your contribution helps Steve bring his message of responsible leadership to every corner of District One.",
  zellePhone: "(949) 637-2833",
  zelleNote: "Contributions up to $5,900 per person are accepted under California campaign finance law.",
  cta: "Contribute via Zelle",
  amounts: [25, 50, 100, 250, 500, 1000],
} as const;

export const CONTACT = {
  heading: "stay connected",
  subheading:
    "Sign up to receive campaign updates, volunteer opportunities, and information about how you can help Steve win in November 2026.",
} as const;
