export const SITE = {
  name: "Steve Camp for City Council",
  title: "Steve Camp for San Clemente City Council | District 1",
  description:
    "Steve Camp is running for San Clemente City Council District One in November 2026. Committed to public safety, fiscal responsibility, and preserving our coastal quality of life.",
  url: "https://campforcitycouncil.com",
  email: "stevec@elementsarch.com",
  phone: "(949) 637-2833",
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
  cta2: "Meet Steve",
} as const;

export const ABOUT = {
  eyebrow: "Meet Steve",
  heading: "About Steve",
  subheading: "A proven neighbor, ready to serve.",
  stats: [
    { number: "4.5 years", label: "Planning Commission" },
    { number: "4.5 years", label: "Design Review" },
    { number: "36 years", label: "Architecture business owner" },
    { number: "30+ years", label: "San Clemente Resident" },
  ],
} as const;

export const ISSUES = {
  eyebrow: "Where Steve Stands",
  heading: "Issues",
  subheading: "Seven commitments, rooted in three decades of service to our coastal community.",
  items: [
    {
      title: "Safe Neighborhoods and Beaches for All",
      description:
        "Every family deserves to feel safe at home and at the beach. I'll back our police, fire, and lifeguard teams with the resources they need to keep our neighborhoods and shoreline safe.",
    },
    {
      title: "Protecting Our Small-Town Coastal Character",
      description:
        "San Clemente isn't just any town — it's a coastal village worth protecting. I'll make sure new development respects our scale, our architecture, and the feel of the place we love.",
    },
    {
      title: "Compassionate, Accountable Homelessness Solutions",
      description:
        "Homelessness calls for both heart and accountability. I'll connect people with real services and support while keeping our parks, streets, and beaches clean and open to everyone.",
    },
    {
      title: "Responsible, Transparent Stewardship of Taxpayer Dollars",
      description:
        "Your tax dollars deserve respect. I'll fund the essentials first, question every expense, and make sure City Hall spends openly and answers for the results.",
    },
    {
      title: "Local Control Over Our Community's Future",
      description:
        "Decisions about San Clemente should be made in San Clemente. I'll push back on unfunded state mandates and fight to keep our future in local hands.",
    },
    {
      title: "Safeguarding Our Coastline for the Next Generation",
      description:
        "Our beaches, trails, and open spaces are a promise to the next generation. I'll protect them with practical, sustainable stewardship so they're here for years to come.",
    },
    {
      title: "Supporting Strong Families and Community Values",
      description:
        "Strong families make a strong community. I'll champion family-friendly policies, support our local schools and youth programs, and help neighbors stay connected.",
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
  eyebrow: "Endorsements",
  heading: "Endorsements",
  subheading:
    "Steve has earned the support of officials who know what it takes to lead our city.",
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
  heading: "Get Involved",
  subheading: "A few simple ways to pitch in.",
  items: [
    {
      title: "Volunteer",
      description: "Knock on doors, make a few calls, or lend a hand at an event.",
      cta: "Sign up",
      href: "#contact",
    },
    {
      title: "Endorse Steve",
      description: "Add your name to a growing list of neighbors who are in.",
      cta: "Add your name",
      href: "#contact",
    },
    {
      title: "Spread the Word",
      description: "Share Steve's message with the people next door and down the street.",
      cta: "Follow along",
      href: "https://www.facebook.com/profile.php?id=61577622498498",
    },
    {
      title: "Donate",
      description: "Every contribution helps Steve reach one more voter.",
      cta: "Contribute now",
      href: "#donate",
    },
  ],
} as const;

export const DONATE = {
  eyebrow: "Support the campaign",
  heading: "Support the Campaign",
  subheading:
    "Whatever you can give carries this message to one more doorstep in District One.",
  zellePhone: "(949) 637-2833",
  zelleNote: "Contributions up to $5,900 per person are accepted under California campaign finance law.",
  cta: "Contribute via Zelle",
  amounts: [25, 50, 100, 250, 500, 1000],
} as const;

export const CONTACT = {
  eyebrow: "Join the campaign",
  heading: "Stay Connected",
  subheading:
    "Add your name for campaign news, ways to help, and a heads-up on what's happening before November 2026.",
} as const;
