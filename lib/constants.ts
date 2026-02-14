export const SITE = {
  name: "Steve Camp for City Council",
  title: "Steve Camp for San Clemente City Council | District 1",
  description:
    "Steve Camp is running for San Clemente City Council District One in November 2026. Committed to public safety, fiscal responsibility, and preserving our coastal quality of life.",
  url: "https://campforcitycouncil.com",
  email: "stevec@elementsarch.com",
  phone: "(949) 637-2833",
  formspreeEndpoint: "https://formspree.io/f/stevec@elementsarch.com",
  disclaimer:
    "Paid for by Steve Camp for San Clemente City Council 2026, ID Number 1487361",
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
  cta1: "Donate Now",
  cta2: "Learn More",
} as const;

export const ABOUT = {
  heading: "about steve",
  bio: [
    "Steve Camp has called San Clemente home for over two decades, raising his family in the community he loves and building a career dedicated to shaping great places. As the founder of a successful architecture firm in South Orange County, Steve brings 36 years of professional experience in design, planning, and project management to his civic service.",
    "Steve's deep commitment to San Clemente is reflected in his extensive volunteer service. He has served 4.5 years on the San Clemente Planning Commission and 4.5 years on the Design Review Subcommittee, helping guide thoughtful development that preserves our city's unique coastal character.",
    "Whether he's surfing at T-Street, walking the pier with his wife, or working with fellow commissioners on land-use policy, Steve is driven by a simple belief: San Clemente deserves leaders who listen, lead with integrity, and put residents first.",
  ],
  stats: [
    { number: "4.5 years", label: "Planning Commission" },
    { number: "4.5 years", label: "Design Review" },
    { number: "36 years", label: "Architecture" },
    { number: "20+ years", label: "San Clemente Resident" },
  ],
} as const;

export const ISSUES = {
  heading: "the issues",
  subheading: "Steve is focused on the priorities that San Clemente families care about most.",
  items: [
    {
      title: "Safe Neighborhoods and Beaches for All",
      description:
        "Strengthening public safety resources and supporting our police, fire, and lifeguard teams to keep our neighborhoods and beaches safe for families.",
    },
    {
      title: "Protecting Our Small-Town Coastal Character",
      description:
        "Preserving the charm and identity of San Clemente by ensuring development respects our community's scale, architecture, and coastal village feel.",
    },
    {
      title: "Compassionate, Accountable Homelessness Solutions",
      description:
        "Addressing homelessness with dignity and accountability, connecting people with services while maintaining clean, safe public spaces.",
    },
    {
      title: "Responsible, Transparent Stewardship of Taxpayer Dollars",
      description:
        "Demanding fiscal responsibility at City Hall, prioritizing essential services, and ensuring taxpayer money is spent wisely and transparently.",
    },
    {
      title: "Local Control Over Our Community's Future",
      description:
        "Fighting to keep decision-making power local and pushing back against unfunded state mandates that threaten our community's self-determination.",
    },
    {
      title: "Safeguarding Our Coastline for the Next Generation",
      description:
        "Protecting our beaches, trails, and open spaces through responsible environmental stewardship and sustainable coastal management.",
    },
    {
      title: "Supporting Strong Families and Community Values",
      description:
        "Championing family-friendly policies, supporting local schools and youth programs, and fostering a connected, vibrant community for all ages.",
    },
  ],
} as const;

export const ENDORSEMENTS = {
  heading: "endorsements",
  items: [
    {
      name: "Steve Knoblock",
      title: "Mayor Pro Tem, City of San Clemente",
      quote: "Steve Camp has the experience and integrity San Clemente needs on our City Council.",
    },
    {
      name: "Victor Cabral",
      title: "Former Mayor & Current City Council Member",
      quote: "Steve's years of service on the Planning Commission make him uniquely qualified to lead.",
    },
    {
      name: "Cameron Cosgrove",
      title: "Chairman, San Clemente Planning Commission",
      quote: "I've worked alongside Steve for years. He's thoughtful, principled, and always puts residents first.",
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
