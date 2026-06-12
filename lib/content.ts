/**
 * NUICC content inventory — the single source of truth for WHAT exists on the
 * site, extracted 1:1 from the original nuicc.org homepage (see index.html at
 * the repo root). HARD RULE: remove nothing. Every photo, video, PDF, and
 * section of the original site is represented here.
 *
 * Items the chamber must resolve (preserved as-is, flagged in README):
 *  - prakhardemos.com demo links (Pride of India, Business Survey)
 *  - the "Hussars Ride" press link (unrelated placeholder post)
 *  - empty "#" links (Mission/Vision document)
 */

export const site = {
  name: "National U.S.-India Chamber of Commerce",
  shortName: "NUICC",
  url: "https://nuicc.org",
  phone: "+1 (720) 323-3728",
  phoneHref: "tel:+17203233728",
  email: "info@nuicc.org",
  address: "1099 17th St, Suite 2150, Denver, CO 80202 United States",
  trustLine:
    "NUICC is a 501(c)(6) organization whose mission is to promote bilateral trade between the United States and India, cultivating business relationships that will result in business deals.",
  membershipUrl: "/membership",
  liveMembershipUrl: "https://nuicc.org/membership",
} as const;

export const socials = [
  { label: "Facebook", href: "https://www.facebook.com/www.nuicc.info/" },
  { label: "Instagram", href: "https://www.instagram.com/reel/DPE_Z7SE5pR/" },
  { label: "X", href: "https://x.com/NUICC" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/purnimavoria/" },
] as const;

export const footerLinkedIn = "https://www.linkedin.com/company/nuicc/";

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Membership", href: "/membership" },
  { label: "Services", href: "#services" },
  { label: "Feature Launches", href: "#features" },
  { label: "Contact", href: "#contact" },
] as const;

/* ------------------------------------------------------------------ Hero */

export const hero = {
  ribbonTop: { src: "/assets/img/home/the-right.png", alt: "The Right Passage to India" },
  ribbon: { src: "/assets/img/home/ribbon.png", alt: "Celebrating 20 years of NUICC" },
  background: "/assets/img/home/banner-hero.jpg",
  titleWhite: "Your Gateway to Strategic Partnership",
  titleAccent: "for Business Deals",
  description:
    "Connecting businesses, fostering trade relationships, and building bridges between the United States and India through strategic partnerships and comprehensive business deals.",
} as const;

export type Stat = {
  prefix?: string;
  value: number;
  suffix: string;
  label: string;
  sub?: string;
  icon?: string;
};

/** Hero stats band — count up from 0 on enter (fixes the broken "0" counters). */
export const heroStats: Stat[] = [
  { value: 50, suffix: "+", label: "Countries", icon: "/assets/img/home/countries.png" },
  { value: 1, suffix: "B+", label: "Trade Volume", icon: "/assets/img/home/trade-volume.png" },
  { value: 10000, suffix: "+", label: "Jobs Created", icon: "/assets/img/home/job-created.png" },
  {
    value: 500,
    suffix: "+",
    label: "Business Partnerships",
    icon: "/assets/img/home/business-partnership.png",
  },
];

/* ------------------------------------------------------- About / intro */

export const aboutIntro = {
  background: "/assets/img/home/bg-national-us.png",
  sealLogo: { src: "/assets/img/home/nicuu-page.png", alt: "NUICC — celebrating 20 years" },
  joinTitle: "Join the largest Business community in US and India",
  orgTitleLines: ["NATIONAL U.S.- INDIA", "CHAMBER OF COMMERCE."],
  lead: "The National U.S.-India Chamber of Commerce has facilitated over $1 billion in bilateral trade, creating thousands of jobs across multiple industries.",
  body: "U.S.-India trade now exceeds $200 billion annually and has grown at 5-9% in recent years. Both governments aim to reach $500 billion by 2030. NUICC, recognized as one of the top international business organizations, operates at the center of this expansion, converting policy discussions into executed deals. It is positioned as a bridge between governments and private sector players, with a mission explicitly focused on promoting bilateral trade and turning relationships into concrete business deals. We specialize in the U.S and India Market.",
  photo: {
    src: "/assets/img/home/nuicc_image.jpg",
    alt: "NUICC Founder and CEO, Ms. Purnima Voria, with H. E. Prime Minister of India, Narendra Modi",
    caption:
      "NUICC Founder and CEO, Ms. Purnima Voria, with H. E. Prime Minister of India, Narendra Modi.",
  },
  founderRecord:
    "For over twenty years, our Founder and CEO, Dr. Purnima Voria, has shaped the infrastructure of bilateral commerce. Appointed by U.S. Secretary of Commerce Gary Locke as National Advisor to the Minority Business Development Agency, Dr. Voria influenced policy affecting over 8 million minority businesses that generated more than $1 trillion in U.S. economic output.",
  delivers:
    "NUICC delivers what companies need to succeed in both markets: qualified local partners, regulatory roadmaps, tax and legal guidance, and market-entry strategies that account for ground realities. We serve startups and Fortune 500 companies alike. Our 9,200 members span every major industry.",
  closing:
    "If you're ready to do business between the world's oldest and largest democracies, this is where it happens.",
  vision:
    "The chamber's vision is to promote a business and cultural climate between the United States and India, and potentially other countries which motivates and empowers individuals to create value in the pursuit of prosperity and fulfillment.",
  mission:
    "The chamber's mission is to promote bilateral trade between the United States and India, cultivating business relationships that will result in business deals.",
  quotes: [
    {
      text: "“India has the fastest growing economy in the world... Together, our countries can help chart an optimistic path into the future, one that unleashes the power of new technology, new infrastructure, and the enthusiasm and excitement of very hardworking and very dynamic people.”",
      attribution: "~ Donald Trump",
    },
    {
      text: "“We have … set ourselves the target of more than doubling our bilateral trade to attain US$500 billion by 2030.”",
      attribution: "- Narendra Modi, 2025",
    },
  ],
} as const;

/* ---------------------------------------------- Global Leaders VIP wall */

export type Leader = { src: string; alt: string };

/** All 12 dignitary photos from the "Global Leaders of Business & Influence" wall. */
export const leaders: Leader[] = [
  { src: "/assets/img/vip/DrV_Birla.jpg", alt: "Dr. Purnima Voria with Hon. Om Birla, Speaker of the Lok Sabha" },
  { src: "/assets/img/vip/DrV_Chandrashekar.jpg", alt: "Dr. Purnima Voria with Hon. Rajeev Chandrasekhar" },
  { src: "/assets/img/vip/DrV_HonRSingh.jpg", alt: "Dr. Purnima Voria with Hon. R. Singh" },
  { src: "/assets/img/vip/rajasthan_cm.jpg", alt: "Dr. Purnima Voria with Hon. Bhajan Lal Sharma, Chief Minister of Rajasthan" },
  { src: "/assets/img/vip/vip1.jpeg", alt: "Dr. Purnima Voria with a visiting dignitary" },
  { src: "/assets/img/vip/vip2.png", alt: "Dr. Purnima Voria with a visiting dignitary" },
  { src: "/assets/img/vip/DrV_Africa.jpeg", alt: "Dr. Purnima Voria at an international delegation" },
  { src: "/assets/img/vip/DrV_Amb_Kwatra.jpeg", alt: "Dr. Purnima Voria with Ambassador Vinay Kwatra" },
  { src: "/assets/img/vip/DrV_Amb_Supriya.png", alt: "Dr. Purnima Voria with Ambassador Supriya" },
  { src: "/assets/img/vip/DrV_ArvindKrishna.jpg", alt: "Dr. Purnima Voria with Arvind Krishna, Chairman and CEO of IBM" },
  { src: "/assets/img/vip/DrV_Biden.jpeg", alt: "Dr. Purnima Voria with President Joe Biden" },
  { src: "/assets/img/vip/DrV_Dixit.jpeg", alt: "Dr. Purnima Voria with Hon. Dixit" },
];

/* -------------------------------------------------------- What We Do */

export const whatWeDo = {
  background: "/assets/img/home/empowering-global.png",
  label: "What We Do",
  title: "Partner with NUICC to Ensure Global Business Success",
  subtext:
    "At the National U.S.- India Chamber of Commerce (NUICC), we promote bilateral -trade between the U.S. and India.",
} as const;

export type Service = { icon: string; title: string; text: string };

export const services: Service[] = [
  {
    icon: "/assets/img/home/buisness_matchmaking.png",
    title: "Business Matchmaking",
    text: "Curated B2B and B2C connections for your business to succeed in U.S and India Market.",
  },
  {
    icon: "/assets/img/home/trade_missions.png",
    title: "Trade Missions",
    text: "Access state delegations and corporate leader missions to India & US.",
  },
  {
    icon: "/assets/img/home/policy_advocasy.png",
    title: "Policy Advocacy",
    text: "Sector-specific lobbying and strategic positioning with leaders.",
  },
  {
    icon: "/assets/img/home/market-intellenge.png",
    title: "Market Intelligence",
    text: "Assistance with trade regulations, market studies and connecting with Industry expertise.",
  },
  {
    icon: "/assets/img/home/value-networking.png",
    title: "High Value Business Networking",
    text: "Connect members with thought leaders, executives & Officials.",
  },
  {
    icon: "/assets/img/home/stratergy.png",
    title: "Strategic Advisory",
    text: "Expert Consultation on doing business between India and U.S.",
  },
];

/* --------------------------------------------------- About NUICC (expanded) */

export const aboutExpanded = {
  quote:
    "“India is the up and coming economic power in the world. Its affinity to democracy and free enterprise makes it a natural economic and political ally of the United States. Colorado should be proud that the US India Chamber of Commerce's National Headquarter is located in Denver.”",
  quoteAttribution: "~ Ambassador Sam Zakhem (Chairman NUICC Board of Advisors)",
  /** FLAG: prakhardemos.com demo links — need production URLs from the chamber. */
  demoLinks: [
    { label: "Pride of India", href: "https://nuicc.prakhardemos.com/pride-of-india" },
    { label: "NUICC Business Survey", href: "https://nuicc.prakhardemos.com/business-survey" },
  ],
  paragraphs: [
    "The National U.S.-India Chamber of Commerce exists to connect American and Indian businesses to the opportunities, partners, and policymakers that matter.",
    "20 years ago, NUICC was formed at the request of the political and business leaders of the United States and the high-level government and business leaders of India to engage public and private sectors of the respective countries to accelerate trade and investment. We operate at the intersection of commerce and policy. We give businesses access to the regulatory expertise, government relationships, and intelligence needed to navigate two complex markets.",
    "Founded and led by Dr. Purnima Voria, NUICC has delivered results for startups and multinationals alike: market-entry strategies that work, partnerships that last, and advocacy that moves policy. We've consummated successful deals for over 500 U.S.-India businesses because we understand what both markets demand.",
    "NUICC currently maintains a strong footprint across 9 states in the Northwest region and 8 states in the Mountain region, with planned expansion into 2 additional regions over the next 2 years to encompass all 50 U.S. states. We recently launched NUICC regional branch in Bangalore India, to expand efforts on bilateral trade. We promote cross-border business by providing essential services for U.S. and India market entry, expansion, and collaboration.",
  ],
} as const;

export type DocumentLink = { label: string; href: string; placeholder?: boolean };

/** Official letters of support and profiles — the credibility documents. */
export const documents: DocumentLink[] = [
  {
    label: "NUICC's President and CEO Dr. Purnima Voria's Profile",
    href: "/assets/img/home/Purnima_Profile__2006__1_.docpdf.pdf",
  },
  {
    label: "NUICC's President and CEO Dr. Purnima Voria meets Colorado governor Mr. Bill Owens",
    href: "/assets/img/home/Colorado_Gov_1_._Bill_Owens___Purnima_Voria.pdf",
  },
  {
    label: "Letter of support from Prime Minister of INDIA",
    href: "/assets/img/home/NUICC___Prime_Minister_of_India_Letter_of_Support.pdf",
  },
  {
    label: "Letter of support from Commerce Minister of INDIA",
    href: "/assets/img/home/NUICC___Commerce_Minister_of_India_Letter_of_Support.pdf",
  },
  {
    label: "Letter of support from USA Congressman Mr. Mark Udall",
    href: "/assets/img/home/NUICC_Co_Chair_Congressman_Mark_Udall.pdf",
  },
  {
    label: "Letter of recommendation to USA President Mr. George W. Bush",
    href: "/assets/img/home/NUICC_Co_Chair_Letter_of_Recommendation_to_President_George_W_1_._Bush.pdf",
  },
  {
    label: "USA Congressman Mr. Bob Beauprez supports NUICC in Indo US Nuclear deal",
    href: "/assets/img/home/Congressman_Bob_Beauprez_Supports_NUICC_in_Indo_US_Nuclear_Deal.pdf",
  },
  /** FLAG: empty "#" link in the original — needs a real target from the chamber. */
  { label: "NUICC's Mission, Vision, Services and Membership", href: "#", placeholder: true },
];

/** Second stats band (inside About) — 0 → value count-ups. */
export const aboutStats: Stat[] = [
  { value: 9200, suffix: "+", label: "Direct Members", sub: "Across the globe" },
  { value: 50, suffix: "+", label: "Countries", sub: "Worldwide presence" },
  { prefix: "$", value: 1, suffix: "B+", label: "Trade Volume", sub: "Facilitated annually" },
  { value: 500, suffix: "+", label: "Fortune 500", sub: "Company partnerships" },
];

export type VideoRef = { id: string; title: string; poster?: string };

/**
 * All six About-section YouTube videos (rendered as lightweight facades).
 * NCNOAIUm5q4 is no longer available on YouTube (no thumbnails, oEmbed 404),
 * so its slot renders real NUICC photography as the poster — flagged in the
 * README for the chamber to confirm or replace the video.
 */
export const aboutVideos: VideoRef[] = [
  { id: "2muBlU_s7XA", title: "NUICC video feature" },
  {
    id: "NCNOAIUm5q4",
    title: "NUICC video feature",
    poster: "/assets/img/gallery/DrV_withgroup.png",
  },
  { id: "IhH8cjXcBN0", title: "NUICC Northwest launch coverage" },
  { id: "03fbVJEHt44", title: "NUICC video feature" },
  { id: "Ho5F3nvmsQs", title: "NUICC video feature" },
  { id: "nxhHLhYySpU", title: "NUICC video feature" },
];

/* --------------------------------------------------- Core services (markets) */

export const markets = [
  {
    country: "India",
    flag: "/assets/img/flags/Flag_of_India.svg",
    items: [
      "Finding partners, distributors, dealers and representative for your products and services",
      "Trade missions to India, including state delegations accompanied by corporate leaders",
      "Consultation on doing business in the Indian market",
      "Connections between Indian executives and US corporate/government leaders",
      "Programs featuring US-India speakers",
      "Developing sound business plans and strategies for India",
      "Cultural awareness & training: marketing, negotiation, HR, trade laws",
    ],
  },
  {
    country: "USA",
    flag: "/assets/img/flags/Flag_of_the_United_States.svg",
    items: [
      "Finding partners, distributors, dealers and representatives for your products and services",
      "Trade missions to the US with corporate leaders",
      "Consultation on doing business in the US market",
      "Connections between Indian executives and US corporate leaders",
      "Developing business plans and strategies for the US marketplace",
      "Training on US business practices, marketing, negotiation, HR, trade laws",
    ],
  },
] as const;

/* ------------------------------------------------------------- Why join */

export const whyJoin = {
  intro:
    "You join NUICC because bilateral trade is too important and too complicated to navigate alone. We help businesses compete and succeed in India and the United States.",
  pillars: [
    {
      title: "Access",
      text: "With over 9,200 members and deep connections across business, government, and policy circles, NUICC offers access that many firms can’t secure on their own. We don't sell access; we've earned it.",
    },
    {
      title: "Expertise",
      text: "We give expert advice for your company to succeed in the India market. Regulatory guidance, tax strategy, and market intelligence that saves you time and costly mistakes. We have successfully consummated several deals between the U.S and India for over 500 companies. We have done this for companies at every stage.",
    },
    {
      title: "Influence",
      text: "Through membership of NUICC, companies & entrepreneurs shape rules and policies that stimulate US-India trade and investment. These companies in turn count on the prestige and expertise of NUICC to get business views across to governments and intergovernmental organizations, whose decisions affect bilateral trade. NUCIC is the resource to help grow your business in foreign markets. With high visibility, we help with business expansion efforts for bilateral trade.",
    },
  ],
  outro:
    "Whether you're a startup testing the market or an enterprise scaling operations, NUICC gives you what you need: the right business introductions, policy advocacy, trade mission facilitation, executive roundtables, market insights, and high-level networking opportunities.",
  closing: "Membership isn't about belonging. It's about winning in two of the world's most dynamic economies.",
} as const;

/* ------------------------------------------------------ Founder message */

export const founderMessage = {
  photo: { src: "/assets/img/gallery/sulekha_nk_q25.jpg", alt: "Dr. Purnima Voria, Founder & CEO of NUICC" },
  salutation: "Dear Members, Partners, and Friends,",
  paragraphs: [
    "It is with great pride and a deep sense of responsibility that I welcome you to the National US India Chamber of Commerce (NUICC). Our organization was founded on the belief that stronger economic and cultural ties between the United States and India are not just beneficial, they are essential for global progress in the 21st century.",
    "The US and India share a unique bond, rooted in democratic values, innovation, and a shared vision for prosperity. Our chamber serves as the vital bridge connecting ambitious businesses with opportunities in two of the world's most dynamic economies. At NUICC, we are committed to fostering this partnership, growth and innovation across borders.",
  ],
  signature: "Ms. Purnima Voria",
  signatureTitle: "Founder & CEO, NUICC",
} as const;

/* ------------------------------------------------------- Partner logos */

export type PartnerLogo = { src: string; alt: string };

/** Partner / affiliation logo wall (logo6.jpg was commented out in the original; asset kept in repo). */
export const partnerLogos: PartnerLogo[] = [
  { src: "/assets/img/logo/logo1.png", alt: "NUICC partner organization" },
  { src: "/assets/img/logo/logo2.png", alt: "NUICC partner organization" },
  { src: "/assets/img/logo/logo3.png", alt: "NUICC partner organization" },
  { src: "/assets/img/logo/logo4.png", alt: "NUICC partner organization" },
  { src: "/assets/img/logo/logo5.png", alt: "NUICC partner organization" },
  { src: "/assets/img/logo/iidt.jpeg", alt: "IIDT" },
  { src: "/assets/img/logo/phdcci.jpeg", alt: "PHD Chamber of Commerce and Industry" },
  { src: "/assets/img/logo/assocham.png", alt: "ASSOCHAM" },
  { src: "/assets/img/logo/IBM.jpg", alt: "IBM" },
  { src: "/assets/img/logo/tata.png", alt: "Tata" },
];

/* ---------------------------------------------------------- Industries */

export const industriesBackground = "/assets/img/gallery/11back.png";

export const industries = [
  { title: "Technology", sub: "Software" },
  { title: "Healthcare", sub: "Pharmaceuticals" },
  { title: "Finance", sub: "Banking" },
  { title: "Aerospace", sub: "Defense" },
  { title: "Energy", sub: "Renewables" },
  { title: "Educational", sub: "Research" },
  { title: "Legal", sub: "Professional Services" },
  { title: "Consumer Goods", sub: "Retail" },
] as const;

/* -------------------------------------------------- Executive committee */

export const committeeBackground = "/assets/img/gallery/back_004.png";

export const executiveCommittee = [
  {
    role: "President",
    name: "Purnima Voria",
    bio: { label: "Download Bio", href: "/assets/img/home/voria-bio.pdf" },
  },
  { role: "Vice President, Global Corporate Business Development", name: "Terry Evanston" },
  { role: "Vice President of Operations", name: "Anne Bennett" },
  { role: "Treasurer", name: "Anu Singh" },
  { role: "Secretary of Technology & Executive Administrator", name: "Spencer Cloud" },
] as const;

/* ----------------------------------------------------- Featured launches */

export const featuredLaunchesIntro = {
  paragraphs: [
    "Recognized by The Wall Street Journal as Business Woman of the Year and recipient of the Congressional Medal of Distinction for her outstanding contributions to global business and diplomacy, Dr. Purnima Voria has dedicated her career to building bridges between nations, fostering international trade relationships, and empowering minority businesses across the globe. As the Founder & CEO of the National U.S India Chamber of Commerce, she launched two more branches in Pacific Northwest and in Bangalore, India, further Strengthening Indo-U.S. Ties Through Global Leadership. Dr. Voria with her efforts has driven growth and policy making for 8 million minority businesses in US which attributes to a trillion-dollar economy of U.S.",
    "Both new regional branches, in Northwest and Bangalore, are key pillars of NUICC's mission to strengthen bilateral trade, foster innovation, and build trusted global networks between the United States and India.",
    "These branches will work together to build cross-border startup ecosystems, facilitate delegations and trade missions.",
  ],
  images: [
    { src: "/assets/img/event/Feature_launches_1.png", alt: "Dr. Purnima Voria at the Oath Ceremony in the White House" },
    { src: "/assets/img/event/fetures_launches_2.png", alt: "Dr. Purnima Voria at the Oath Ceremony in the White House" },
  ],
  caption:
    "Dr. Purnima Voria, Founder and CEO of National U.S India Chamber of Commerce at the Oath Ceremony in the White House.",
} as const;

export type EventCard = { src: string; alt: string; title: string; text: string };
export type PressLink = { source: string; title: string; href: string; flagged?: string };

export const northwestLaunch = {
  heading: "NORTHWEST U.S.- INDIA CHAMBER OF COMMERCE",
  tagline: "“Building a Pipeline for U.S. India Connections”",
  subline: "A Branch of the National U.S.–India Chamber of Commerce",
  subheading: "Celebrating a New Era of Cross-Border Collaboration in the Pacific Northwest",
  body: "The National U.S.- India Chamber of Commerce proudly launched its Northwest U.S.-India Chamber of Commerce (NUICC) regional chapter on 19th March 2025 (soft-launched November 2024), established in partnership with the Bellevue Chamber of Commerce, marking a historic milestone for businesses and innovators across Alaska, Idaho, Montana, Nebraska, North Dakota, South Dakota, Washington, Wyoming and Oregon. It represents a major expansion of U.S.-India diplomatic and economic efforts in the Northwest, strengthening the overall US-India relationship",
  more: "With the Northwest emerging as a leading hub for cloud computing, AI, aerospace, clean energy, and biotech, this new branch aims to foster stronger business ties, innovation, and collaboration, acting as a primary point of contact for executives, founders, investors, and policymakers and Indian government institutions in the region.",
  closing: "NUICC is thrilled to begin this new chapter in the Northwest!",
  videos: [
    { id: "IhH8cjXcBN0", title: "Northwest U.S.-India Chamber launch — media coverage" },
    { id: "uoan_Nlw2qo", title: "Northwest U.S.-India Chamber launch — media coverage" },
  ] as VideoRef[],
  press: [
    {
      source: "425Business.com",
      title: "Bellevue Chamber & National U.S.–India Chamber Partnership",
      href: "https://www.425business.com/news/bellevue-chamber-national-us-india-chambers-partnership/article_bec26e38-ef06-11ef-b822-e379a1660d61.html",
    },
  ] as PressLink[],
  eventCards: [
    {
      src: "/assets/img/event/modi.png",
      alt: "Virtual launch event connecting US and India participants",
      title: "Virtual Launch Event",
      text: "Global virtual launch event connecting US and India participants.",
    },
    {
      src: "/assets/img/event/image_event.png",
      alt: "Strengthening business partnerships across U.S.-India businesses",
      title: "Strengthening Business Partnerships",
      text: "Services that boost trade, collaboration and market growth across U.S.–India businesses.",
    },
    {
      src: "/assets/img/event/event_1lastimage.png",
      alt: "Soft launch with the Bellevue Chamber of Commerce, November 2024",
      title: "Soft launch in November 2024",
      text: "Strategic partnership between the Bellevue Chamber of Commerce and the National U.S. India Chamber of Commerce (NUICC).",
    },
    {
      src: "/assets/img/event/first_image_first_launch.png",
      alt: "Audience of business leaders and government officials",
      title: "Audience Engagement",
      text: "Engagement audience of business leaders and goverment officials",
    },
    {
      src: "/assets/img/event/first_image_2.jpeg",
      alt: "Official NUICC launch event with dignitaries and stakeholders",
      title: "Launch Ceremony",
      text: "Official NUICC launch event with dignitaries & stakeholders.",
    },
    {
      src: "/assets/img/event/first_image_3.png",
      alt: "International media coverage of the NUICC launch",
      title: "Media coverage",
      text: "International media coverage of NUICC launch and initiatives",
    },
    {
      src: "/assets/img/event/first_image_4.jpeg",
      alt: "Dr. Voria presenting the NUICC vision and mission",
      title: "Keynote presentation",
      text: "Dr. Voria presenting NUICC vision and mission to attendees",
    },
    {
      src: "/assets/img/event/first_image_5.jpeg",
      alt: "Ceremonial presentation with US and India flags",
      title: "Flag Ceremony",
      text: "Ceremonial presentation with US and India flags symbolizing partnership.",
    },
    {
      src: "/assets/img/event/image_india.png",
      alt: "NUICC soft launch — a message of unity and cultural pride",
      title: "NUICC soft launch",
      text: "A message of unity, cultural pride and strong U.S. – India business partnerships.",
    },
  ] as EventCard[],
} as const;

export const bangaloreLaunch = {
  heading: "National U.S.- India Chamber of Commerce - Bangalore Branch",
  subline: "A Branch of the National U.S.- India Chamber of Commerce",
  subheading: "Strengthening Global Innovation Bridges Between India and the United States",
  body: "The National U.S.-India Chamber of Commerce (NUICC) recently established its South India Regional Chamber in Bengaluru, India, as a hub to boost U.S.-India trade, connect American companies to South India's tech/innovation ecosystems (like the Silicon Valley of Bharat), and support sectors such as manufacturing and clean energy, led by Dr. Purnima Voria, strengthening bilateral economic ties. They offer business consulting, market entry roadmaps, and networking, serving as a key link between the two nations' business communities.",
  more: "Known as the Silicon Valley of India, Bangalore is home to world-leading IT, AI, digital commerce, biotech, deep-tech startups, research institutions, and global innovation talent. This branch aims to serve as India’s gateway to U.S. opportunities enabling startups, enterprises, universities, and government bodies to access American markets, investment, and partnerships. As NUICC celebrates its 20th Anniversary, the launch of the Bangalore Branch brings NUICC’s U.S.- India economic mission directly to India’s most dynamic innovation hub and globally connected regions.",
  hubIntro: "The new South India Regional Chamber will serve as a strategic hub to:",
  hubPoints: [
    "Strengthen U.S.- India trade and investment",
    "Connect American companies with South India’s thriving industries",
    "Support innovation, technology, manufacturing, aerospace, clean energy, and startup ecosystems",
    "Build bridges between businesses, governments, and global partners",
  ],
  closing: "NUICC is thrilled to begin this new chapter in South India!",
  // gzAzi46z0v4 is no longer available on YouTube — poster falls back to the
  // launch ceremony photography (flagged in README).
  videos: [
    {
      id: "gzAzi46z0v4",
      title: "NUICC Bangalore Branch launch — media coverage",
      poster: "/assets/img/event/event_2section.png",
    },
    { id: "uoan_Nlw2qo", title: "NUICC launch — media coverage" },
  ] as VideoRef[],
  press: [
    {
      source: "South Asia Herald",
      title: "NUICC Launches South India Regional Chamber in Bengaluru to Boost U.S.–India",
      href: "https://southasianherald.com/nuicc-launches-south-india-regional-chamber-in-bengaluru-to-boost-u-s-india-trade-and-innovation/",
    },
  ] as PressLink[],
  galleryTitle: "Launch Ceremony Pictures",
  gallery: [
    { src: "/assets/img/event/event_2section.png", alt: "Bangalore Branch launch ceremony" },
    { src: "/assets/img/event/image_3section_2.png", alt: "Bangalore Branch launch ceremony" },
    { src: "/assets/img/event/image_3section_1.png", alt: "Bangalore Branch launch ceremony" },
    { src: "/assets/img/event/image_1_card_2.png", alt: "Bangalore Branch launch ceremony" },
    { src: "/assets/img/event/image_2_card_2.png", alt: "Bangalore Branch launch ceremony" },
    { src: "/assets/img/event/image_3_card_2.png", alt: "Bangalore Branch launch ceremony" },
  ],
} as const;

export const rajasthanLaunch = {
  heading: "Rajasthan Foundation- New York (USA) Chapter",
  subline: "Strengthening U.S.-Rajasthan Collaboration Through Global Leadership",
  paragraphs: [
    "The National U.S.- India Chamber of Commerce (NUICC) is proud to celebrate the launch of the Rajasthan Foundation New York Chapter, led by our Founder & CEO, Dr. Purnima Voria, who has been appointed as its President by the Honorable Chief Minister of Rajasthan.",
    "This launch marks a major milestone in deepening economic, cultural, and strategic ties between Rajasthan and the United States, bringing new opportunities for partnership, investment, and diaspora engagement.",
    "Dr. Purnima Voria, an internationally recognized business diplomat and one of the most influential voices in U.S.–India economic relations brings decades of global leadership experience to the role. Her appointment reflects Rajasthan’s commitment to building a world-class platform for collaboration with U.S. businesses, investors, universities, and diaspora leaders.",
    "The noble objective of the Rajasthan Foundation platform is to strengthen the bonds between Non-Resident Rajasthanis and our home state of Rajasthan, and to mobilize meaningful socio-economic development in Rajasthan through sustained diaspora engagement.",
    "The Rajasthan Foundation New York (USA) Chapter team works in coordination with the National US-India Chamber of Commerce, and other esteemed stakeholders to:",
  ],
  points: [
    "Foster robust liaison with Pravasi Rajasthanis, Rajasthani organizations, and eminent personalities in New York and the USA.",
    "Promote and coordinate socio-economic development initiatives aligned with the goals of Rajasthan Foundation.",
    "Ensure effective governance and coordination with the Executive Committee, including the Secretary, Vice-President, Joint Secretary, Treasurer, and other members as proposed and approved.",
    "Facilitate regular communication, events, and programs that strengthen the ties between Rajasthan and its diaspora.",
  ],
  outro: [
    "This launch is a step forward in building a global Rajasthan, connected internationally and thriving with opportunities.",
    "We are excited to invite all Rajasthanis living across the United States to join our growing community of professionals, entrepreneurs, and families proudly representing Rajasthan on the global stage",
  ],
  videos: [
    {
      id: "gzAzi46z0v4",
      title: "Rajasthan Foundation NY Chapter — media coverage",
      poster: "/assets/img/event/rajsthan_image.png",
    },
    { id: "tt4LbPL67Dk", title: "Rajasthan Foundation NY Chapter — media coverage" },
  ] as VideoRef[],
  facebookVideo: {
    poster: "/assets/img/event/news_paper_rajsthan.png",
    href: "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/1stIndiaNews/videos/%E0%A4%85%E0%A4%AA%E0%A4%A8%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%87-%E0%A4%95%E0%A4%A6%E0%A4%AE%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%B5%E0%A4%BE%E0%A4%B8%E0%A5%80-%E0%A4%B8%E0%A4%AA%E0%A5%82%E0%A4%A4%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A4%BE-%E0%A4%AE%E0%A4%B9%E0%A4%BE%E0%A4%B8%E0%A4%82%E0%A4%97%E0%A4%AE-pravasi-rajasthani-divas-2025-cm-bhajanlal/1191246206285907/&show_text=false&width=500",
    title: "1st India News — Pravasi Rajasthani Divas 2025 with CM Bhajanlal",
  },
  /** Posters are real Rajasthan-chapter photography so every slot renders. */
  instagramReels: [
    {
      href: "https://www.instagram.com/reel/DPE_Z7SE5pR/",
      poster: "/assets/img/event/pravashi_family.png",
    },
    {
      href: "https://www.instagram.com/reel/DPcfN7xiErP/",
      poster: "/assets/img/event/again_handhskae_rajsthan.png",
    },
    {
      href: "https://www.instagram.com/p/DQtt-cGk6f5/",
      poster: "/assets/img/event/rajsthan_handshake.png",
    },
  ],
  press: [
    {
      source: "South Asia Herald",
      title: "Purnima Voria Appointed President of Rajasthan Foundation’s New York",
      href: "https://southasianherald.com/purnima-voria-appointed-president-of-rajasthan-foundations-new-york-chapter-to-strengthen-us-rajasthan-ties/#google_vignette",
    },
    {
      source: "Rajasthan Patrika",
      title:
        "प्रवासी राजस्थानी दिवस पर शामिल होंगी बुश-ओबामा के साथ काम कर चुकीं डॉ. पूर्णिमा वोरिया, पढ़िए सीधे अमेरिका",
      href: "https://www.patrika.com/national-news/purnima-voria-interview-global-investment-pravasi-rajasthani-diwas-summit-20154984",
    },
  ] as PressLink[],
  photos: [
    {
      src: "/assets/img/event/pravashi_family.png",
      alt: "Pravasi Rajasthani Divas gathering",
    },
    {
      src: "/assets/img/event/rajsthan_image.png",
      alt: "Dr. Purnima Voria with Honorable Additional Chief Secretary to the Chief Minister, Shikhar Agarwal, in Jaipur, Rajasthan",
      title: "Rajasthan Foundation NY Chapter Launch",
      caption:
        "Dr. Purnima Voria with Honorable Additional Chief Secretary to the Chief Minister, Shikhar Agarwal, in Jaipur, Rajasthan",
    },
  ],
  eventCards: [
    {
      src: "/assets/img/event/again_handhskae_rajsthan.png",
      alt: "Dr. Purnima Voria with Additional Chief Secretary Shikhar Agarwal in Jaipur",
      title: "Launch Ceremony",
      text: "Dr. Purnima Voria with Honorable Additional Chief Secretary to the Chief Minister, Shikhar Agarwal, in Jaipur, Rajasthan",
    },
    {
      src: "/assets/img/event/rajsthan_handshake.png",
      alt: "Dr. Purnima Voria with Chief Minister Bhajan Lal Sharma in Jaipur",
      title: "Audience Engagement",
      text: "President of the Rajasthan Foundation, Dr. Purnima Voria with His Excellency, Chief Minister Bhajan Lal Sharma in Jaipur, Rajasthan",
    },
    {
      src: "/assets/img/event/news_paper_rajsthan.png",
      alt: "Rajasthan Patrika newspaper coverage of Dr. Purnima Voria",
      title: "Media coverage",
      text: "Dr. Purniam Voria celebrated in Rajasthan Patrika",
    },
  ] as EventCard[],
} as const;

/* -------------------------------------------------------------- Gallery */

export type GalleryImage = { src: string; alt: string };

/** All 23 gallery photos, in original order. */
export const gallery: GalleryImage[] = [
  { src: "/assets/img/gallery/AUS_Cham.png", alt: "NUICC with the Australian Chamber" },
  { src: "/assets/img/gallery/DrV_Amb_Kwatra.png", alt: "Dr. Purnima Voria with Ambassador Vinay Kwatra" },
  { src: "/assets/img/gallery/DrV_Biden.png", alt: "Dr. Purnima Voria with President Joe Biden" },
  { src: "/assets/img/gallery/us-india.png", alt: "US-India partnership event" },
  { src: "/assets/img/gallery/DrV_Chandrashekar.png", alt: "Dr. Purnima Voria with Hon. Rajeev Chandrasekhar" },
  { src: "/assets/img/gallery/DrV_Dixit.png", alt: "Dr. Purnima Voria with Hon. Dixit" },
  { src: "/assets/img/gallery/DrV_HonRSingh.png", alt: "Dr. Purnima Voria with Hon. R. Singh" },
  { src: "/assets/img/gallery/DrV_Kamal.png", alt: "Dr. Purnima Voria with Hon. Kamal" },
  { src: "/assets/img/home/rakhi-project/DrV_Rakhi_1.png", alt: "Dr. Purnima Voria — Rakhi project" },
  { src: "/assets/img/home/rakhi-project/DrV_Rakhi_2.png", alt: "Dr. Purnima Voria — Rakhi project" },
  { src: "/assets/img/home/rakhi-project/DrV_Rakhi_3.png", alt: "Dr. Purnima Voria — Rakhi project" },
  { src: "/assets/img/gallery/DrV_withgroup.png", alt: "Dr. Purnima Voria with delegation group" },
  { src: "/assets/img/gallery/DrV_Modi.png", alt: "Dr. Purnima Voria with Prime Minister Narendra Modi" },
  { src: "/assets/img/gallery/DrVoria_NUICC_Soft_Launch.png", alt: "Dr. Purnima Voria at the NUICC soft launch" },
  { src: "/assets/img/gallery/NUICC_Launch4.png", alt: "NUICC launch event" },
  { src: "/assets/img/gallery/gal1.png", alt: "NUICC event" },
  { src: "/assets/img/gallery/gal2.png", alt: "NUICC event" },
  { src: "/assets/img/gallery/gal3.png", alt: "NUICC event" },
  { src: "/assets/img/gallery/gal4.png", alt: "NUICC event" },
  { src: "/assets/img/gallery/gal6.png", alt: "NUICC event" },
  { src: "/assets/img/gallery/gal7.png", alt: "NUICC event" },
  { src: "/assets/img/gallery/gal8.jpg", alt: "NUICC event" },
  { src: "/assets/img/gallery/gal9.png", alt: "NUICC event" },
];

/* ---------------------------------------------------------------- Press */

export const press: PressLink[] = [
  {
    source: "South Asian Herald",
    title: "U.S.–Rajasthan Collaboration",
    href: "https://southasianherald.com/purnima-voria-meets-chief-minister-of-rajasthan-to-strengthen-u-s-rajasthan-collaboration/",
  },
  {
    source: "South Asian Herald",
    title: "NUICC Launch – Bengaluru",
    href: "https://southasianherald.com/nuicc-launches-south-india-regional-chamber-in-bengaluru-to-boost-u-s-india-trade-and-innovation/",
  },
  {
    source: "NUICC Website",
    title: "Gallery – Hussars Ride",
    href: "https://nuicc.website/2025/03/28/gallery-post-down-the-hill-i-saw-a-bevy-of-hussars-ride-under-the-railway-bridge/",
    /** FLAG: unrelated placeholder post — chamber to replace or remove. */
    flagged: "Unrelated placeholder post — replace or remove (flagged for the chamber).",
  },
  {
    source: "Denver Post",
    title: "Where East Meets West",
    href: "https://www.denverpost.com/2007/04/13/where-east-meets-west/",
  },
];

/* ------------------------------------------------------------------ FAQ */

export type Faq = { question: string; answer: string; list?: string[] };

export const faqs: Faq[] = [
  {
    question: "What is the National U.S. India Chamber of Commerce (NUICC)?",
    answer:
      "NUICC is a premier international chamber dedicated to strengthening economic, trade, and investment relationships between the United States and India. We serve as a trusted platform for business leaders, policymakers, and entrepreneurs to connect, collaborate, and create cross-border growth opportunities.",
  },
  {
    question: "What is a Chamber of Commerce?",
    answer:
      "A Chamber of Commerce is a membership-based organization that brings together businesses, entrepreneurs, and community leaders to promote economic growth, build strong business networks, and advocate for policies that support commerce. Chambers create opportunities for members to connect, learn, collaborate, and access resources that help their businesses succeed. NUICC operates as a modern, global chamber—focused on innovation, cross-border collaboration, and empowering members through community, networking, and strategic partnerships.",
  },
  {
    question: "What does NUICC do?",
    answer:
      "We provide strategic business matchmaking, policy advocacy, trade mission facilitation, executive roundtables, market insights, and high-level networking opportunities that help organizations expand across U.S. and Indian markets.",
  },
  {
    question: "Who can become a member of NUICC?",
    answer:
      "Membership is open to U.S. and India based companies, professionals, nonprofits, startups, investors, and public institutions seeking to grow their presence, partnerships, or influence across both markets.",
  },
  {
    question: "How does the chamber help my business?",
    answer:
      "NUICC supports members by opening doors introducing you to decision-makers, buyers, partners, and policymakers. We reduce the complexity of cross-border business through curated connections, regulatory guidance, market intelligence, and strategic exposure at influential events.",
  },
  {
    question: "What types of programs and services does NUICC offer?",
    answer: "Our core services include:",
    list: [
      "Trade missions & delegations",
      "Business matchmaking & introductions",
      "Networking events & executive summits",
      "Policy briefings with U.S. & Indian government officials",
      "Market entry support & business advisory",
      "Member spotlight opportunities",
      "Educational sessions and thought leadership programs",
    ],
  },
  {
    question: "How do I know which membership level is right for me?",
    answer:
      "Each membership tier is designed around organization size and strategic goals. Small businesses and professionals' benefit from foundational access and networking, while corporate and Chairman's Circle members receive priority matchmaking, delegation access, and leadership visibility. Our team can guide you based on your expansion and partnership needs.",
  },
  {
    question: "Are membership fees tax-deductible?",
    answer:
      "In many cases, membership fees may be considered a business expense. Tax deductibility depends on your organization's location and regulations. Please consult with a tax professional for guidance. NUICC can provide documentation upon request.",
  },
  {
    question: "Does NUICC assist with market entry into the U.S. or India?",
    answer:
      "Yes. We support companies entering or expanding in either market through business introductions, investor connections, sector insights, and referrals to trusted legal, compliance, and local partners.",
  },
  {
    question: "How do I get started or join as a member?",
    answer:
      "Joining is simple. Select your membership tier, complete the online application, and submit payment. Once enrolled, you will receive a welcome package, onboarding support, and immediate access to upcoming events, introductions, and member only programs.",
  },
  {
    question: "Does NUICC offer speaking or sponsorship opportunities?",
    answer:
      "Yes. Members may apply to speak at industry forums, policy roundtables, and annual summits. Sponsorship opportunities are available for events, delegations, and thought-leadership programs, providing strong visibility across U.S. and India business communities.",
  },
  {
    question: "How does NUICC select companies for trade missions or delegations?",
    answer:
      "Delegation participation is curated based on sector relevance, readiness for cross-border engagement, and alignment with the mission's strategic objectives. Corporate and Chairman's Circle members receive priority.",
  },
  {
    question: "Does NUICC support startups and early-stage founders?",
    answer:
      "Absolutely. Startups benefit from cross-border mentorship, investor and ecosystem introductions, regulatory insights, and the opportunity to participate in innovation-focused roundtables and pitch events.",
  },
  {
    question: "Can NUICC help connect me with government officials or policy leaders?",
    answer:
      "Yes. NUICC works closely with U.S. and Indian policymakers. Members receive access to policy briefings, diplomatic engagements, and introductions (as appropriate and mission-aligned).",
  },
  {
    question: "Are there volunteer or leadership opportunities within NUICC?",
    answer:
      "Members may participate in committees, industry councils, regional chapters, and community initiatives. Leadership roles and advisory participation are available based on expertise, contribution, and membership tier.",
  },
];

/* -------------------------------------------------------------- Contact */

export const contact = {
  background: "/assets/img/home/contact-background.jpg",
  map: { src: "/assets/img/home/World-Map.jpg", alt: "World map showing NUICC's global presence" },
} as const;

export const cta = {
  title: "Ready to take your Business Global?",
  text: "Connect with 9,200+ members across industries",
} as const;

export const footerLogo = { src: "/assets/img/home/nuicc-img.png", alt: "NUICC seal" };
export const headerLogo = {
  src: "/assets/img/home/NUICC_Logo.png",
  alt: "National U.S.-India Chamber of Commerce",
};

export const footerNav = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Membership", href: "/membership" },
    { label: "Services", href: "#services" },
    { label: "Events", href: "#features" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    { label: "Business Matchmaking", href: "#services" },
    { label: "Trade Missions", href: "#services" },
    { label: "Policy Advocacy", href: "#services" },
    { label: "Business Opportunities", href: "#services" },
  ],
} as const;
