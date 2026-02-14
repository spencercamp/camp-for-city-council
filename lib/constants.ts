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
  { label: "Get Involved", href: "#get-involved" },
  { label: "Donate", href: "#donate" },
] as const;

export const HERO = {
  headline: "Fighting for San Clemente",
  tagline: "Committed to Public Safety, Fiscal Responsibility, and Quality of Life",
  cta1: "Donate Now",
  cta2: "Get Involved",
} as const;

export const ABOUT = {
  heading: "About Steve",
  bio: [
    "Steve Camp has called San Clemente home for over two decades, raising his family in the community he loves and building a career dedicated to shaping great places. As the founder of a successful architecture firm in South Orange County, Steve brings 36 years of professional experience in design, planning, and project management to his civic service.",
    "Steve's deep commitment to San Clemente is reflected in his extensive volunteer service. He has served 4.5 years on the San Clemente Planning Commission and 4.5 years on the Design Review Subcommittee, helping guide thoughtful development that preserves our city's unique coastal character.",
    "Whether he's surfing at T-Street, walking the pier with his wife, or working with fellow commissioners on land-use policy, Steve is driven by a simple belief: San Clemente deserves leaders who listen, lead with integrity, and put residents first.",
  ],
  qualifications: [
    "4.5 years on San Clemente Planning Commission",
    "4.5 years on San Clemente Design Review Subcommittee",
    "36 years running a successful architecture firm in South Orange County",
    "Proven record of community leadership and civic engagement",
  ],
} as const;

export const ISSUES = {
  heading: "The Issues That Matter",
  subheading: "Steve is focused on the priorities that San Clemente families care about most.",
  items: [
    {
      icon: "Shield" as const,
      title: "Safe Neighborhoods and Beaches for All",
      description:
        "Strengthening public safety resources and supporting our police, fire, and lifeguard teams to keep our neighborhoods and beaches safe for families.",
    },
    {
      icon: "Building" as const,
      title: "Protecting Our Small-Town Coastal Character",
      description:
        "Preserving the charm and identity of San Clemente by ensuring development respects our community's scale, architecture, and coastal village feel.",
    },
    {
      icon: "Heart" as const,
      title: "Compassionate, Accountable Homelessness Solutions",
      description:
        "Addressing homelessness with dignity and accountability, connecting people with services while maintaining clean, safe public spaces.",
    },
    {
      icon: "DollarSign" as const,
      title: "Responsible, Transparent Stewardship of Taxpayer Dollars",
      description:
        "Demanding fiscal responsibility at City Hall, prioritizing essential services, and ensuring taxpayer money is spent wisely and transparently.",
    },
    {
      icon: "Landmark" as const,
      title: "Local Control Over Our Community's Future",
      description:
        "Fighting to keep decision-making power local and pushing back against unfunded state mandates that threaten our community's self-determination.",
    },
    {
      icon: "Waves" as const,
      title: "Safeguarding Our Coastline for the Next Generation",
      description:
        "Protecting our beaches, trails, and open spaces through responsible environmental stewardship and sustainable coastal management.",
    },
    {
      icon: "Users" as const,
      title: "Supporting Strong Families and Community Values",
      description:
        "Championing family-friendly policies, supporting local schools and youth programs, and fostering a connected, vibrant community for all ages.",
    },
  ],
} as const;

export const ENDORSEMENTS = {
  heading: "Endorsed By Leaders Who Know San Clemente",
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
  heading: "Join the Movement",
  subheading: "There are many ways to support Steve's campaign for City Council.",
  items: [
    {
      icon: "HandHeart" as const,
      title: "Volunteer",
      description: "Knock on doors, make phone calls, or help at events. Every hour makes a difference.",
      cta: "Sign Up to Volunteer",
      href: "#contact",
    },
    {
      icon: "MessageSquare" as const,
      title: "Endorse Steve",
      description: "Add your name to the growing list of San Clemente residents supporting Steve.",
      cta: "Add Your Endorsement",
      href: "#contact",
    },
    {
      icon: "Share2" as const,
      title: "Spread the Word",
      description: "Share Steve's message with your neighbors, friends, and family in San Clemente.",
      cta: "Follow on Social Media",
      href: "https://www.facebook.com/profile.php?id=61577622498498",
    },
    {
      icon: "BadgeDollarSign" as const,
      title: "Donate",
      description: "Your financial support helps Steve reach every voter in District One.",
      cta: "Contribute Now",
      href: "#donate",
    },
  ],
} as const;

export const DONATE = {
  heading: "Support the Campaign",
  subheading:
    "Your contribution helps Steve bring his message of responsible leadership to every corner of District One.",
  zellePhone: "(949) 637-2833",
  zelleNote: "Contributions up to $5,900 per person are accepted under California campaign finance law.",
  cta: "Contribute via Zelle",
  amounts: [25, 50, 100, 250, 500, 1000],
} as const;

export const CAMPAIGN_STRIP = {
  heading: "San Clemente Deserves Better.",
  cta: "Join the Movement",
  ctaHref: "#get-involved",
} as const;

export const ACTION_STRIP = {
  heading: "Ready to Make a Difference?",
  cta: "Donate Now",
  ctaHref: "#donate",
} as const;

export const CONTACT = {
  heading: "Stay Connected",
  subheading:
    "Sign up to receive campaign updates, volunteer opportunities, and information about how you can help Steve win in November 2026.",
} as const;
