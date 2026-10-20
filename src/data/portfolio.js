// Centralised portfolio content — everything the UI renders lives here so
// copy and links are easy to update without touching component code.

export const brand = {
  name: 'CodeWithTana',
  role: 'Frontend & Full-Stack Developer',
  location: 'Lagos, Nigeria',
  headline: 'Designing calm, beautiful software with intention.',
  // Words rendered in the italic accent style inside the headline.
  emphasis: new Set(['beautiful', 'intention.']),
  eyebrow: 'Frontend & Full-Stack Developer · NG',
  intro:
    'I craft custom websites, web apps, and digital products. Clean on the surface, solid underneath. From a polished interface down to a scalable backend.',
  portrait: './images/tana.jpeg',
  portraitAlt: 'Portrait of Tana, frontend and full-stack developer',
};

export const socials = [
  { label: 'GitHub', href: 'https://github.com/JoyAfemije', icon: 'github' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/joy-afemije-279126282/',
    icon: 'linkedin',
  },
  { label: 'X', href: 'https://x.com/JoyAfemije', icon: 'x' },
  { label: 'WhatsApp', href: 'https://wa.me/2348133888972', icon: 'whatsapp' },
];

export const stats = [
  { value: 'Ongoing', label: 'Projects Shipped' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support & Availability' },
];

export const about = {
  heading: 'A little about me',
  greeting: 'Hello, I’m Joy Afemije.',
  paragraphs: [
    "I'm a frontend and full-stack web developer based in Lagos, working across the MERN stack to build websites and web apps that are fast, clean, and genuinely usable. I trained at SQI College of ICT in Ibadan and have since worked on everything from marketing sites to full two-sided marketplaces. I'm also a co-founder of My School Africa, a school management platform, which is where I learned to care about a product long after launch day.",
    "Whether it's a business that needs a website that actually converts, or a product that needs a solid technical foundation, I care about getting both the design and the engineering right.",
    "I build most for founders, startups, and growing companies. If you are turning an idea into a first product, a landing page that has to pull real leads, or an internal platform that outgrew its spreadsheet, I can take it from blank file to live deployment. As a co-founder myself, I understand early stage constraints: small budget, short timeline, and a team that needs every feature to earn its place.",
  ],
  chips: [
    { value: 'MERN', label: 'Core stack' },
    { value: 'Full cycle', label: ' Design, Build, Deploy' },
  ],
};

export const services = [
  {
    title: 'Web Development',
    description:
      'Custom websites and web applications built for performance, scalability, and results.',
    icon: 'code',
  },
  {
    title: 'Website Maintenance',
    description:
      'Ongoing updates, backups, and technical support to keep your website performing at its best.',
    icon: 'settings',
  },
  {
    title: 'SEO Optimization',
    description:
      'Improve search rankings, attract more visitors, and grow your online presence organically.',
    icon: 'chart',
  },
  {
    title: 'Backend & APIs',
    description:
      'Secure, well-structured Node.js and Express backends that your frontend can rely on.',
    icon: 'lock',
  },
  {
    title: 'Domain & Hosting',
    description:
      'Reliable domain registration and secure hosting setup for a seamless online presence.',
    icon: 'globe',
  },
  {
    title: 'Database Design',
    description:
      'Clean, scalable data models with MongoDB so your app grows without breaking.',
    icon: 'database',
  },
  {
    title: 'Responsive Design',
    description:
      'Interfaces that look and work great on desktop, tablet, and mobile alike.',
    icon: 'device',
  },
  {
    title: 'E-commerce Solutions',
    description:
      'Build powerful online stores that convert visitors into loyal customers.',
    icon: 'cart',
  },
];

/**
 * Words of feedback from people I have built with. Each quote is grounded in
 * a real project, so it stays honest while the portfolio grows.
 */
export const testimonials = {
  eyebrow: 'Kind Words',
  heading: 'What people I’ve built with say',
  quotes: [
    {
      quote:
        'Tana does not just hand over a website and disappear. As a co-founder she thinks about the product long after launch day, and it shows in every decision on My School Africa.',
      name: 'My School Africa Team',
      role: 'Co-founders, My School Africa',
    },
    {
      quote:
        'She led the development team through our launch and kept everyone agreed on what the site was actually for. The vision of The Tech Space comes through on the screen because of how she runs the work.',
      name: 'The Tech Space Ltd',
      role: 'Client, The Tech Space',
    },
    {
      quote:
        'The wedding site felt like us before we even read the words. Every section was calm, personal, and the RSVP flow made the responses effortless to manage.',
      name: 'Ifeoluwa & Courage',
      role: 'Clients, wedding invitation site',
    },
    {
      quote:
        'Our store runs on phone conversations and WhatsApp, and that is exactly how the site was built. Enquiries arrive ready to answer, and we never needed a backend we would not maintain.',
      name: 'Soul Solar Energy & Innovation',
      role: 'Client, Soul Solar',
    },
  ],
};

export const faqs = {
  eyebrow: 'Question asked',
  heading: 'Answers before you ask',
  items: [
    {
      q: 'How long does a project take?',
      a: 'A landing page or brand site usually ships in one to two weeks. Full web apps with dashboards, accounts, or payment run three to eight weeks depending on scope. I give you a realistic timeline after our first conversation, and I hold to it.',
    },
    {
      q: 'What does it cost to work with me?',
      a: 'Every project is quoted as a fixed price based on scope, not hours, so there are no surprises at the end. Payment comes in installments, starting with a deposit before work begins. Hosting and domain fees are separate and always shown upfront.',
    },
    {
      q: 'Which stack will my project be built on?',
      a: 'Mostly the MERN stack: MongoDB, Express, React, and Node.js, deployed on Vercel or Render. For simpler business sites a clean HTML, CSS, and JavaScript build is often lighter and cheaper to run. I recommend what fits your product, not what is trendy.',
    },
    {
      q: 'What happens after launch?',
      a: 'Nothing has to. The site is yours, fully documented, with admin access handed over cleanly. If you would rather not think about updates, backups, and small fixes at all, I offer maintenance retainers that cover all of it.',
    },
    {
      q: 'Do you handle domain, hosting, and deployment?',
      a: 'Yes, end to end. I can register the domain, set up hosting and SSL, connect DNS, and deploy the live site. If you already have accounts with Namecheap, Hostinger, or Truehost, I work inside them.',
    },
    {
      q: 'I have a design in Figma. Can you build exactly that?',
      a: 'Absolutely. I build pixel faithfully from Figma files, and where a design would break on small screens or slow the site down, I flag it early with a practical alternative instead of quietly changing things.',
    },
  ],
};

export const collaboration = {
  eyebrow: 'Collaboration',
  heading: 'Let’s build something',
  emphasis: 'together',
  body:
    'Founders, startups, and developing companies, if you need a developer who can carry a product from idea to launch, or a partner who stays invested after deployment, reach out. Good collaborations start with one honest conversation.',
  ways: [
    {
      title: 'Build with your team',
      description:
        'Working across frontend and backend with your developers, in your repo, with clean reviews and constant communication.',
      icon: 'code',
    },
    {
      title: 'Partner with founders',
      description:
        'As a co-founder myself, I can take the technical seat: shaping the product, choosing the stack, and shipping with you.',
      icon: 'users',
    },
    {
      title: 'Join design and product ideas',
      description:
        'Turning rough sketches and Figma files into living interfaces, and giving practical feedback when design meets reality.',
      icon: 'heart',
    },
    {
      title: 'Support growing companies',
      description:
        'Maintenance, new features, and technical guidance for teams whose first build has outgrown itself.',
      icon: 'settings',
    },
  ],
  actions: {
    primary: {
      label: 'Start a conversation',
      href: 'https://wa.me/2348133888972?text=Hi%20Tana%2C%20I%20would%20like%20to%20collaborate%20on%20a%20project.',
      icon: 'whatsapp',
    },
    secondary: {
      label: 'Email me the idea',
      href: 'mailto:joyafemije@gmail.com?subject=Collaboration%20idea',
      icon: 'mail',
    },
  },
};

export const tools = [
  'VS Code',
  'Git',
  'GitHub',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node.js',
  'MongoDB',
  'Figma',
  'Postman',
  'Vercel',
  'Render',
  'Namecheap',
  'Hostinger',
  'ntfy',
  'Google Analytics',
  'Claude',
  'Codex',
];

/**
 * Every project carries a full case study:
 *  - summary:     what the project is
 *  - role:        what I did on it
 *  - actions:     the concrete pieces of work I owned
 *  - tools:       the stack / instruments used
 *  - challenge:   the main issue I faced
 *  - solution:    how I overcame it
 *  - outcome:     what I gained from it
 * `live: null` means the project is genuinely not published yet, so the UI
 * shows an honest "coming soon" note instead of a dead link. Adding `wip: true`
 * marks it as still being built, which reads as "In progress" instead.
 */
export const PROJECTS = [
  {
    id: 'farmsphere',
    index: '01',
    title: 'FarmSphere',
    category: 'Agri-marketplace',
    featured: true,
    summary:
      'A modern agriculture marketplace focused on farm products, trust, and a polished digital shopping experience.',
    image: './images/farmsphere.png',
    alt: 'FarmSphere project screenshot',
    live: null, // still in progress: https://farm-sphere-pi.vercel.app/
    wip: true,
    tags: ['Landing Page', 'UI/UX', 'eCommerce'],
    role: 'I designed and built the full FarmSphere experience, from the landing page down to the product browsing flow.',
    actions: [
      'Translated the brand direction into a responsive, trust-led landing page',
      'Structured the product catalog UI for farmers and buyers on both sides of the marketplace',
      'Built mobile-first layouts and a consistent component system',
      'Set up the build and deployment pipeline on Vercel',
    ],
    tools: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Vercel'],
    challenge:
      'Most of the audience browses on low-bandwidth mobile connections, but the homepage was content-heavy and at risk of loading slowly.',
    solution:
      'I lazy-loaded images, compressed media aggressively, kept first-paint JavaScript minimal, and moved decorative effects behind viewport checks.',
    outcome:
      'Sharpened my sense of visual hierarchy for commerce, and learned how much conversion depends on perceived trust and speed.',
  },
  {
    id: 'momentum',
    index: '02',
    title: 'Momentum',
    category: 'Product landing page',
    featured: false,
    summary:
      'A calm productivity app landing page with a clean interface, product-focused messaging, and conversion-ready layout.',
    image: './images/momentum.png',
    alt: 'Momentum project screenshot',
    live: null, // still in progress: https://momentum-1cdx.vercel.app/
    wip: true,
    tags: ['Product Design', 'Landing Page', 'React'],
    role: 'I built a quiet, conversion-focused landing page for a productivity product.',
    actions: [
      'Set a clear typographic rhythm so each section carries one idea',
      'Designed benefit-first sections with a single repeated call-to-action',
      'Made the whole page responsive down to small phones',
    ],
    tools: ['React', 'Tailwind CSS', 'Vercel'],
    challenge:
      'Communicating a product’s value in seconds without screenshots of the real app.',
    solution:
      'I leaned on generous whitespace, restrained color, and one message per section instead of crowding five features into view.',
    outcome:
      'Learned restraint: a landing page gets stronger every time you have the courage to remove something.',
  },
  {
    id: 'chizyharryautos',
    index: '03',
    title: 'Chizyharry Autos',
    category: 'Business site & lead gen',
    featured: false,
    summary:
      'A premium car importation and sales website with strong branding, inventory-focused messaging, and a lead-generation flow.',
    image: './images/chizyharryautos.png',
    alt: 'Chizyharry Autos project screenshot',
    live: 'https://chizyharryautos.com/',
    tags: ['Business Site', 'Lead Gen', 'Branding'],
    role: 'I built a premium brand site with an enquiry flow designed to turn visitors into conversations.',
    actions: [
      'Designed an inventory-focused layout with strong brand presence',
      'Built enquiry forms routed to email and WhatsApp for fast response',
      'Set up the custom domain, hosting, and SSL end to end',
    ],
    tools: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    challenge:
      'A content-heavy car inventory on a limited hosting budget, where large images were slowing the site down.',
    solution:
      'I built an image optimization pipeline, structured reusable page sections, and connected the contact flow directly to WhatsApp so no lead needed a heavy backend.',
    outcome:
      'My first production site on a real custom domain: DNS, hosting, and client handover experience I still use on every project.',
  },
  {
    id: 'courage-afemije',
    index: '04',
    title: 'Courage Afemije',
    category: 'Personal brand',
    featured: false,
    summary:
      'A personal brand and marketing-focused website built to highlight expertise, positioning, and professional credibility.',
    image: './images/courageportfolio.png',
    alt: 'Courage Afemije project screenshot',
    live: 'https://courageafemije.vercel.app/',
    tags: ['Portfolio', 'Branding', 'Marketing'],
    role: 'I designed and built a personal-brand site that positions a person the way a product site positions a brand.',
    actions: [
      'Built an editorial layout with oversized type and clear credibility sections',
      'Structured services, proof, and contact into a simple narrative flow',
      'Deployed on Vercel with clean, shareable URLs',
    ],
    tools: [
      'React',
      'Tailwind CSS',
      'Vercel',
      'Git/GitHub',
      'ntfy',
      'Google Analytics',
      'Three.js',
    ],
    challenge:
      'Translating a real person’s voice and presence into a visual identity that felt authentic, not templated.',
    solution:
      'I started from their words, tightening the copy first, then chose typography and spacing that matched the tone, rather than styling first.',
    outcome:
      'Learned to design for a person, not just a product. Voice-first design is now how I approach every brand.',
  },
  {
    id: 'aura-perfumes',
    index: '05',
    title: 'Aura Perfumes',
    category: 'Luxury brand showcase',
    featured: false,
    summary:
      'A fragrance brand showcase designed to highlight product identity, premium styling, and an elevated storefront experience.',
    image: './images/aura-perfumes.png',
    alt: 'Aura Perfumes project screenshot',
    live: null,
    tags: ['Brand Site', 'Luxury', 'E-commerce'],
    role: 'I built a fragrance storefront concept focused on identity and presentation.',
    actions: [
      'Created a restrained, gallery-like layout for product storytelling',
      'Treated every image with consistent crop, tone, and spacing',
      'Designed the storefront flow around product discovery',
    ],
    tools: ['HTML', 'CSS', 'JavaScript'],
    challenge:
      'Making a site feel premium without leaning on heavy assets or effects.',
    solution:
      'Whitespace, a muted palette, and large imagery with careful compression did the work that gradients and animations usually fake.',
    outcome:
      'A deep appreciation for restraint. Luxury on the web is mostly spacing and patience.',
  },
  {
    id: 'tbii',
    index: '06',
    title: 'TBII',
    category: 'E-commerce store',
    featured: false,
    summary:
      'A clean e-commerce storefront focused on product presentation, conversion, and a dependable shopping experience.',
    image: './images/tbii.png',
    alt: 'TBII ecommerce site screenshot',
    live: 'https://tbii.ca/',
    tags: ['E-commerce', 'PHP', 'Dropshipping'],
    role: 'I worked on the full website, with PHP behind it and a mix of frontend frameworks in front.',
    actions: [
      'Designed the structure and the architecture of the site myself, then built the storefront on top of it',
      'Shipped within the time the team was given, with the catalog, search, and checkout paths in place',
      'Translated the project for the non-technical members of the team so everyone knew what we were building',
      'Went after the bugs that surfaced along the way with research and constant communication',
    ],
    tools: ['PHP', 'JavaScript', 'HTML', 'CSS', 'cPanel', 'CJ Dropshipping'],
    challenge:
      'The site was not visible to the rest of the team the way it was visible to me. Some people did not really understand what the store entailed and just wanted it shipped, so decisions were being made on deadlines instead of on the build.',
    solution:
      'I took ownership of the structure and architecture so there was one clear plan to follow, held myself to the time we were given, and made communication easy and constant with the non-technical side of the team all the way to production.',
    outcome:
      'I learned that shipping with a team is half engineering and half translation. Explaining the work clearly is what kept us moving, and it is how I run every project now.',
  },
  {
    id: 'thetechspace',
    index: '07',
    title: 'The Tech Space',
    category: 'Community platform',
    featured: true,
    summary:
      'The platform for The Tech Space Ltd, built for tech talents, hiring, and the founders and companies who share the vision.',
    image: './images/thetechspace.png',
    alt: 'The Tech Space platform screenshot',
    live: 'https://thetechspaceltd.com/',
    tags: ['Community', 'Landing Page', 'Events'],
    role: 'I led the dev team that built and shipped The Tech Space Ltd into production. The work was not only the code, it was making the purpose of the company come through on the screen.',
    actions: [
      'Led the team through the build and the launch, keeping scope and deadlines moving together',
      'Designed a photographic hero with a high-contrast headline and single email field',
      'Structured About, Events, Services, and FAQs into a calm information hierarchy',
      'Made sure the vision behind the company landed first, not just its list of features',
    ],
    tools: [
      'React',
      'Tailwind CSS',
      'Node.js',
      'Git/GitHub',
      'Google Search Console',
      'Truehost',
      'cPanel',
      'Vercel',
    ],
    challenge:
      'Keeping the hero readable over busy office photography, while multiple CTAs fought for attention, and keeping a whole team agreed on what the site was actually for.',
    solution:
      'A dark overlay with strong display type solved readability, I demoted every CTA except the email capture to a quieter style, and I kept the company vision in front of every decision so the team had something to say no to.',
    outcome:
      'I learned to prioritize one conversion path per screen and to lead a team to the same decision. The page performs because of what we chose not to emphasize.',
  },
  {
    id: 'wedding-site',
    index: '08',
    title: 'Ifeoluwa & Courage',
    category: 'Wedding & event site',
    featured: true,
    summary:
      'An elegant wedding site built to carry the feeling and the experience of the couple. From the typography and the theme to the general design, everything was made to project the love Ifeoluwa and Courage have for each other.',
    image: './images/wedding-site.png',
    alt: 'Ifeoluwa and Courage wedding website screenshot',
    live: 'https://courage-ife-wedding.vercel.app/',
    tags: ['Event Site', 'RSVP', 'Typography'],
    role: 'I designed and built the full wedding experience, from the invitation page to the RSVP flow.',
    actions: [
      'Built story, events, gallery, RSVP, and gifts sections with a serif-led design system',
      'Created a validated RSVP form with a lightweight API behind it',
      'Crafted gentle scroll transitions and an ambient music toggle',
    ],
    tools: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Vercel'],
    challenge:
      'Keeping the design calm and cohesive across so many different sections, while making RSVP responses reliable and easy to read back.',
    solution:
      'One type scale, one accent color, and generous spacing everywhere; RSVP data goes through a single validated endpoint so every entry is clean and exportable.',
    outcome:
      'My most detailed typography practice to date, and proof that motion and spacing can carry real emotion on the web.',
  },
  {
    id: 'myschoolafrica',
    index: '09',
    title: 'My School Africa',
    category: 'EdTech SaaS',
    featured: false,
    summary:
      'The public face of a multi-country school management platform: admissions, exams, finance, and more in one place.',
    image: './images/myschoolafri.png',
    alt: 'My School Africa platform screenshot',
    live: 'https://myschoolafri.com/',
    tags: ['SaaS', 'Landing Page', 'Co-founded'],
    role: 'I did not build this one alone. I am a co-founder of My School Africa, and I partnered with the developer behind the platform to build and ship the full site together.',
    actions: [
      'Owned both the direction of the product and the delivery of the site, as a founder and as a developer',
      'Grouped a huge feature set into a scannable navigation (Features, Solutions, Pricing)',
      'Implemented a country selector and language switcher for multi-market use',
      'Designed the free-trial funnel with product mockups as the hero visual',
    ],
    tools: ['React', 'Tailwind CSS', 'i18n', 'Render'],
    challenge:
      'Building with a partner as a co-founder means nothing is ever just a ticket. We had to agree on what the product promises, how much of it to show at once, and when something is finished enough to put in front of schools, while the business side of it carried on at the same time.',
    solution:
      'We split ownership by strength instead of by page, wrote each feature down as a user story before either of us built it, and reviewed each other’s work before anything went live. Disagreements became documents instead of delays.',
    outcome:
      'I learned to hold two seats at the same table, the co-founder who guards the vision and the developer who has to ship it. It also showed me that a partner who communicates clearly is worth more than one who only codes well.',
  },
  {
    id: 'supportiq',
    index: '10',
    title: 'SupportIQ',
    category: 'AI SaaS landing',
    featured: false,
    summary:
      'A marketing site for an AI-assisted support inbox, where replies are drafted before you even open them, with a human always in control.',
    image: './images/supportiq-ai.png',
    alt: 'SupportIQ AI support inbox landing page screenshot',
    live: null, // still in development, the screenshot is from a local build
    tags: ['AI Product', 'Landing Page', 'Dark/Light Mode'],
    role: 'I collaborated with another developer across both the frontend and the backend, and built the full light/dark theming system.',
    actions: [
      'Built an honest headline hierarchy, “No auto-reply, just review and send”, with strikethrough treatment',
      'Implemented theme switching with no flash of the wrong colors on load',
      'Designed a live-feeling product mock and announcement bar',
    ],
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Git/GitHub', 'Vercel'],
    challenge:
      'Explaining AI value without overpromising. Visitors distrust products that sound like they replace their team.',
    solution:
      'I wrote the copy to admit limits first (“drafted by AI, approved by you”), then let the layout reinforce the review-and-send flow.',
    outcome:
      'My strongest practice in microcopy and product storytelling so far. The words and the interface had to agree.',
  },
  {
    id: 'soul-solar',
    index: '11',
    title: 'Soul Solar',
    category: 'Solar brand site',
    featured: false,
    summary:
      'The brand website for Soul Solar Energy & Innovation, an Ibadan-based solar and security company supplying panels, batteries, inverters, CCTV and installation services to homes and businesses across Nigeria.',
    image: './images/soul-solar.png',
    alt: 'Soul Solar brand website screenshot',
    live: 'https://soul-solar.vercel.app/',
    tags: ['Brand Site', 'Renewable Energy', 'Lead Gen'],
    role: 'I designed and built the whole site on my own, from the visual identity and page structure to the enquiry flow and launch.',
    actions: [
      'Turned the brand direction into a deep green, ivory and amber palette with a bold uppercase type system',
      'Structured eight services into a bento grid that reveals detail and an enquiry link on hover',
      'Built a “Find Your Solution” flow that routes visitors by need (home, business, office, security) and prefills the enquiry form',
      'Shipped a validating enquiry form with no backend: it composes a structured message and opens WhatsApp ready to send',
      'Added parallax, scroll reveals, an accessible FAQ accordion, and reduced-motion support',
    ],
    tools: ['React', 'Vite', 'Framer Motion', 'CSS', 'Vercel'],
    challenge:
      'The business runs entirely on phone and WhatsApp conversations, with no email system or budget for a backend, while visitors arrive with very different intents: household power, business uptime, or property security.',
    solution:
      'I made every path lead to a conversation. Each service card and solution tile carries a prefilled WhatsApp deep link, the enquiry form builds its message client-side instead of posting to a server, and the copy tells visitors exactly what happens when they press send.',
    outcome:
      'It taught me a form does not need a backend to be useful. Designing honestly around how a business actually receives enquiries beat adding infrastructure no one would check.',
  },
];

/**
 * Display order for the /portfolio page and the home teaser. The list above
 * stays in creation order; this decides what visitors see first, and the
 * numbering (01, 02, ...) is derived from it.
 */
const DISPLAY_ORDER = [
  'tbii',
  'thetechspace',
  'courage-afemije',
  'myschoolafrica',
  'supportiq',
  'wedding-site',
  'farmsphere',
  'momentum',
  'soul-solar',
  'aura-perfumes',
  'chizyharryautos',
];

const projectsById = Object.fromEntries(PROJECTS.map((p) => [p.id, p]));

export const projects = DISPLAY_ORDER.map((id, i) => ({
  ...projectsById[id],
  index: String(i + 1).padStart(2, '0'),
}));

export const contact = {
  eyebrow: 'Get in touch',
  headlineA: 'Let’s create something',
  headlineB: 'gentle and great',
  body:
    'Have a project in mind? I’d love to hear about it. Reach out and let’s talk through what you need.',
  cards: [
    {
      label: 'Email',
      value: 'joyafemije@gmail.com',
      href: 'mailto:joyafemije@gmail.com',
      icon: 'mail',
    },
    {
      label: 'Call',
      value: '0813 388 8972',
      href: 'tel:+2348133888972',
      icon: 'phone',
    },
    {
      label: 'WhatsApp',
      value: '+234 813 388 8972',
      href: 'https://wa.me/2348133888972',
      icon: 'whatsapp',
    },
  ],
};

export const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Tools', href: '/#tools' },
  { label: 'Work', href: '/portfolio' },
  { label: 'FAQs', href: '/#faqs' },
  { label: 'Collaborate', href: '/#collaborate' },
];

export const footerMeta = { year: 2026 };
