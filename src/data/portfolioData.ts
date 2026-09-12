import { Project, Service, Testimonial, StatItem } from '../types';

export const statsData: StatItem[] = [
  {
    value: 3,
    suffix: '+',
    label: 'Years Experience',
    description: 'Specializing in multi-platform CMS development, themes & custom code',
  },
];

export const platformCapabilities = [
  {
    name: 'WordPress',
    sub: 'ACF Pro, Custom Themes, WooCommerce, REST API & Gutenberg',
    level: 'Advanced Specialist',
    color: '#21759B',
  },
  {
    name: 'Shopify',
    sub: 'Liquid 2.0, Dawn Theme Setup, Custom Sections, App Setup',
    level: 'Theme Developer',
    color: '#95BF47',
  },
  {
    name: 'Wix Studio & Wix',
    sub: 'Velo JS, CMS Collections, Dynamic Pages, Repeater APIs',
    level: 'Certified Builder',
    color: '#0055FF',
  },
  {
    name: 'Webflow',
    sub: 'Client-First Framework, CMS Filtering, Custom Interactions',
    level: 'CMS Specialist',
    color: '#146EF5',
  },
  {
    name: 'Squarespace',
    sub: 'Custom CSS/JS Injection, Fluid Engine, E-Commerce Systems',
    level: 'Layout Customizer',
    color: '#000000',
  },
  {
    name: 'Custom Development',
    sub: 'HTML5, CSS3, Modern JavaScript & Responsive UI',
    level: 'Core Foundation',
    color: '#F7DF1E',
  },
];

export const projectsData: Project[] = [
  // 1. WordPress
  {
    id: 'wp-acf-portal',
    category: 'wordpress',
    platform: 'WordPress',
    title: 'ACF Pro Editorial Hub',
    buildType: 'Concept Build',
    focusArea: 'Custom Gutenberg & Headless Setup',
    description:
      'A modular content portal engineered with Advanced Custom Fields (ACF Pro) flexible layout modules, custom taxonomy filters, and Redis object caching.',
    deliverables: [
      'Tailored Gutenberg block components for seamless editor control',
      'Dynamic taxonomy filtering and AJAX search indexing',
      'Custom post types for in-depth documentation and case studies',
      'Zero bloated page builders — clean PHP and modern CSS',
    ],
    features: ['ACF Pro Flexible Content', 'Gutenberg Blocks', 'Custom REST API', 'Redis Caching'],
    tags: ['WordPress', 'PHP', 'ACF Pro', 'Speed Optimization'],
    accentColor: '#1F2937',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80',
    mockupType: 'desktop',
    demoUrl: 'https://demo.wordpress.org',
  },
  {
    id: 'wp-woo-store',
    category: 'wordpress',
    platform: 'WordPress',
    title: 'Minimalist WooCommerce Store',
    buildType: 'Practice Project',
    focusArea: 'Custom Checkout & Performance Tuning',
    description:
      'High-performance WooCommerce storefront featuring a one-page streamlined checkout flow, dynamic stock indicators, and stripped-down script execution.',
    deliverables: [
      'Bespoke WooCommerce single product templates and size charts',
      'One-page checkout integration with Stripe Elements',
      'Automated database transient cleanup and asset minimization',
      'Responsive slide-out mini-cart with instant order bump',
    ],
    features: ['WooCommerce', 'Custom Single Product', 'Slide Cart', 'Stripe Elements'],
    tags: ['WordPress', 'WooCommerce', 'E-Commerce', 'PHP'],
    accentColor: '#111827',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    mockupType: 'dual',
    demoUrl: 'https://woocommerce.com',
  },

  // 2. Shopify
  {
    id: 'shopify-apparel-dawn',
    category: 'shopify',
    platform: 'Shopify',
    title: 'Liquid 2.0 Apparel Showcase',
    buildType: 'Concept Build',
    focusArea: 'Dawn Theme Customization & Cart Drawer',
    description:
      'E-commerce prototype crafted with Shopify Liquid 2.0 and Dawn theme extensions. Features color swatch modules, dynamic size recommendations, and an AJAX cart drawer.',
    deliverables: [
      'Modular custom sections with schema controls for Shopify theme editor',
      'Ajax-powered slide cart with tiered free shipping progression',
      'Color swatch swatches and inventory status badge logic',
      'Clean asset loading resulting in a 90+ mobile Core Web Vitals score',
    ],
    features: ['Liquid 2.0', 'Dawn Theme Setup', 'Ajax Cart Drawer', 'Custom Swatches'],
    tags: ['Shopify', 'Liquid', 'Dawn Theme', 'CRO'],
    accentColor: '#1A1A1A',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80',
    mockupType: 'desktop',
    demoUrl: 'https://shopify.com',
  },
  {
    id: 'shopify-beauty-store',
    category: 'shopify',
    platform: 'Shopify',
    title: 'Organic Skincare Storefront',
    buildType: 'Practice Project',
    focusArea: 'Subscription Flows & Bundle Builder',
    description:
      'Custom Shopify build experimenting with product bundle selectors, ingredient transparency tabs, and seamless customer account management.',
    deliverables: [
      'Interactive routine builder allowing multi-item bundle checkout',
      'Custom metafields displaying certified ingredient breakdowns',
      'Optimized mobile navigation drawer with predictive search',
      'Accessible focus management and WCAG AA contrast compliance',
    ],
    features: ['Product Bundler', 'Metafields Schema', 'Predictive Search', 'Mobile First'],
    tags: ['Shopify', 'Liquid', 'Metafields', 'Bundle Builder'],
    accentColor: '#2C2B29',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
    mockupType: 'dual',
    demoUrl: 'https://shopify.com',
  },

  // 3. Wix Studio
  {
    id: 'wix-studio-events',
    category: 'wix-studio',
    platform: 'Wix Studio',
    title: 'Event & Festival Directory',
    buildType: 'Concept Build',
    focusArea: 'Velo Backend & Dynamic CMS Pages',
    description:
      'Dynamic event platform designed in Wix Studio leveraging Velo backend queries for automatic date archiving, category filtering, and calendar embeds.',
    deliverables: [
      'Velo JS query for automated past-event archiving and sorting',
      'Dynamic Repeater CMS layouts responsive across 4 fluid breakpoints',
      'Custom booking modal integrating multi-tiered ticket inquiries',
      'Fluid Engine interaction design with zero template bloat',
    ],
    features: ['Velo Backend', 'Dynamic Repeaters', 'Date Filtering', 'Fluid Breakpoints'],
    tags: ['Wix Studio', 'Velo JS', 'CMS Collections', 'Interactions'],
    accentColor: '#0E1726',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1200&q=80',
    mockupType: 'desktop',
    demoUrl: 'https://wix.com/studio',
  },
  {
    id: 'wix-studio-realestate',
    category: 'wix-studio',
    platform: 'Wix Studio',
    title: 'Property Listings Portal',
    buildType: 'Practice Project',
    focusArea: 'Multi-Facet Filtering & Map Clustering',
    description:
      'High-end real estate listing system with multi-facet Velo search filters (bedrooms, price range, location) and responsive property cards.',
    deliverables: [
      'Debounced search input syncing live with Wix Data collection queries',
      'Interactive property detail modal with floor-plan image galleries',
      'Agent lead inquiry forms connected to automated email notifications',
      'Custom grid layout optimized for mobile tablet and desktop viewports',
    ],
    features: ['Velo Search Filter', 'Wix Data API', 'Multi-Facet Search', 'Dynamic Modals'],
    tags: ['Wix Studio', 'Velo JS', 'Real Estate', 'Data Filtering'],
    accentColor: '#1E293B',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    mockupType: 'desktop',
    demoUrl: 'https://wix.com/studio',
  },

  // 4. Wix
  {
    id: 'wix-agency-portfolio',
    category: 'wix',
    platform: 'Wix',
    title: 'Design Agency Showcase',
    buildType: 'Practice Project',
    focusArea: 'Repeater CMS & Scroll Interactions',
    description:
      'Exploration of standard Wix CMS capabilities featuring custom repeater layouts, project tag filtering, and subtle entrance animations.',
    deliverables: [
      'Structured CMS collections for project studies and team bios',
      'Custom CSS-styled hover cards with clean aspect ratio containment',
      'Interactive contact drawer with form validation',
      'Cross-device responsive tuning ensuring consistent visual hierarchy',
    ],
    features: ['Wix CMS Collections', 'Repeater Layouts', 'Scroll Animations', 'Form Validation'],
    tags: ['Wix', 'CMS Collections', 'Agency', 'Portfolio'],
    accentColor: '#171717',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80',
    mockupType: 'dual',
    demoUrl: 'https://wix.com',
  },
  {
    id: 'wix-culinary-bistro',
    category: 'wix',
    platform: 'Wix',
    title: 'Artisan Bistro & Reservation Hub',
    buildType: 'Concept Build',
    focusArea: 'Menu CMS & Table Reservation Flow',
    description:
      'A culinary brand website showcasing dynamic seasonal menu categories, allergy tag indicators, and a clean reservation inquiry workflow.',
    deliverables: [
      'Dynamic menu repeaters categorized by lunch, dinner, and beverage sets',
      'Dietary restriction badge filters driven directly by Wix CMS',
      'Integrated map location card and working hours module',
      'Fast-loading visual imagery optimized for mobile diners',
    ],
    features: ['Menu CMS', 'Dietary Tagging', 'Reservation Form', 'Mobile Layout'],
    tags: ['Wix', 'Hospitality', 'CMS Setup', 'Responsive'],
    accentColor: '#1C1917',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    mockupType: 'desktop',
    demoUrl: 'https://wix.com',
  },

  // 5. Webflow
  {
    id: 'webflow-saas-launch',
    category: 'webflow',
    platform: 'Webflow',
    title: 'B2B Software Landing Experience',
    buildType: 'Concept Build',
    focusArea: 'Client-First CMS & Interactive Tabs',
    description:
      'A B2B SaaS landing layout structured using Finsweet Client-First standards, featuring interactive product feature tabs and dynamic pricing cards.',
    deliverables: [
      'Clean naming convention following Client-First CSS classes',
      'Dynamic CMS collections for customer stories and technical changelogs',
      'Interactive feature tab switcher with smooth CSS transitions',
      'Fully responsive fluid typography and spacing tokens',
    ],
    features: ['Client-First', 'Interactive Tabs', 'Pricing Toggles', 'Finsweet Standards'],
    tags: ['Webflow', 'SaaS', 'Client-First', 'Interactions'],
    accentColor: '#0F172A',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    mockupType: 'desktop',
    demoUrl: 'https://webflow.com',
  },
  {
    id: 'webflow-design-studio',
    category: 'webflow',
    platform: 'Webflow',
    title: 'Modernist Design Studio Index',
    buildType: 'Practice Project',
    focusArea: 'Multi-Filter CMS & Project Modals',
    description:
      'Editorial portfolio for design and interior projects featuring multi-reference CMS filtering, modal overlays, and full-bleed image galleries.',
    deliverables: [
      'Dynamic CMS multi-filter sorting projects by typology and completion status',
      'Full-screen modal viewer with keyboard navigation support',
      'Grid transitions utilizing Webflow native IX2 interactions',
      'SEO metadata open-graph tags generated directly from CMS items',
    ],
    features: ['CMS Multi-Filter', 'IX2 Interactions', 'Dynamic Metadata', 'Full-Bleed Media'],
    tags: ['Webflow', 'Interior Design', 'Editorial CMS', 'IX2'],
    accentColor: '#18181B',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    mockupType: 'dual',
    demoUrl: 'https://webflow.com',
  },

  // 6. Squarespace
  {
    id: 'squarespace-studio-portfolio',
    category: 'squarespace',
    platform: 'Squarespace',
    title: 'Creative Practice Monograph',
    buildType: 'Concept Build',
    focusArea: 'Fluid Engine & Bespoke CSS Injection',
    description:
      'An artistic portfolio built on Squarespace 7.1 Fluid Engine with custom CSS injected for typography refinements, magnetic links, and full-width gallery rows.',
    deliverables: [
      'Custom CSS overrides for tight editorial typography pairings',
      'Fluid Engine grid optimizations removing awkward mobile whitespace',
      'Injected newsletter subscription footer with custom input styling',
      'Subtle image hover pan effects without performance penalty',
    ],
    features: ['Fluid Engine', 'Custom CSS Injection', 'Editorial Type', 'Mobile Cleanup'],
    tags: ['Squarespace', 'Fluid Engine', 'Custom CSS', 'Typography'],
    accentColor: '#1A1A1A',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    mockupType: 'desktop',
    demoUrl: 'https://squarespace.com',
  },
  {
    id: 'squarespace-lifestyle-goods',
    category: 'squarespace',
    platform: 'Squarespace',
    title: 'Handcrafted Goods Store',
    buildType: 'Practice Project',
    focusArea: 'E-Commerce Layouts & Custom Cart Styling',
    description:
      'A boutique commerce concept showcasing Squarespace product collections, stylized variant selectors, and minimalist typography treatment.',
    deliverables: [
      'Custom CSS styling for Squarespace product cards and variant buttons',
      'Organized product categorization for seamless browsing',
      'Clean shipping policy accordion and FAQ section',
      'Streamlined mobile shopping experience with fast tap targets',
    ],
    features: ['Product Collections', 'Custom Cart Styling', 'Accordion FAQ', 'Variant Selectors'],
    tags: ['Squarespace', 'E-Commerce', 'Custom CSS', 'Minimalist'],
    accentColor: '#262626',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80',
    mockupType: 'dual',
    demoUrl: 'https://squarespace.com',
  },
];

export const servicesData: Service[] = [
  {
    id: 1,
    number: '01',
    title: 'WordPress Development',
    description: 'Custom Themes, WooCommerce, ACF Pro, Gutenberg Blocks, Performance',
    details:
      'Clean, secure, and bloat-free WordPress websites built from scratch. No clunky page builder dependencies — empowering editors with flexible ACF Pro Gutenberg blocks and fast page loads.',
    deliverables: [
      'Tailored Gutenberg block library matched to design specifications',
      'Custom WooCommerce store setups and checkout flows',
      'SEO schema integration and structured data hierarchy',
      'Hardened security configuration & Core Web Vitals speed optimization',
    ],
    turnaround: '1–3 Weeks',
    tags: ['WordPress', 'ACF Pro', 'WooCommerce', 'PHP'],
  },
  {
    id: 2,
    number: '02',
    title: 'Shopify Store Development',
    description: 'Custom Theme Development, Liquid 2.0, Cart Drawer, Speed Tuning',
    details:
      'Crafting conversion-optimized Shopify storefronts. Specializing in Dawn theme modifications, custom Liquid 2.0 sections, dynamic product swatches, cart drawers, and script cleanup.',
    deliverables: [
      'Custom Dawn 2.0 sections and modular Liquid code',
      'Slide-out Ajax cart with tiered shipping and upsell triggers',
      'Mobile-first checkout conversion rate optimization (CRO)',
      'PageSpeed audit and asset payload minimization',
    ],
    turnaround: '1–3 Weeks',
    tags: ['Shopify', 'Liquid 2.0', 'Dawn Theme', 'E-Commerce CRO'],
  },
  {
    id: 3,
    number: '03',
    title: 'Wix Studio & Velo JS',
    description: 'CMS Collections, Velo API, Dynamic Repeater Pages, Custom Interactions',
    details:
      'Building ultra-responsive, dynamic Wix Studio websites using Velo JavaScript. From database-driven filter systems and member portals to bespoke micro-interactions and custom APIs.',
    deliverables: [
      'Full Wix Studio site structure & responsive breakpoints',
      'Custom Velo JS backend & database collection queries',
      'Dynamic Repeater pages with real-time search and multi-tag filters',
      'Third-party webhook connections and automation setups',
    ],
    turnaround: '1–2 Weeks',
    tags: ['Wix Studio', 'Velo JS', 'Dynamic CMS', 'Fluid Engine'],
  },
  {
    id: 4,
    number: '04',
    title: 'Webflow Development',
    description: 'Client-First Structure, CMS Filtering, Custom Interactions & Code',
    details:
      'Structured Webflow builds following Finsweet Client-First standards. Clean class management, dynamic CMS collections, complex multi-filters, and smooth micro-animations.',
    deliverables: [
      'Client-First design system implementation and class structure',
      'Dynamic CMS collections for blogs, portfolios, and resources',
      'Interactive animations using Webflow IX2 and lightweight JavaScript',
      'Fast-loading responsive layouts optimized for all viewport sizes',
    ],
    turnaround: '1–2 Weeks',
    tags: ['Webflow', 'Client-First', 'CMS Structure', 'IX2'],
  },
  {
    id: 5,
    number: '05',
    title: 'Squarespace Customization',
    description: 'Custom CSS/JS, Fluid Engine Layouts, E-Commerce, Code Injection',
    details:
      'Pushing Squarespace beyond standard templates. Injecting tailored CSS keyframes, interactive filter galleries, custom forms, and third-party booking or payment integrations.',
    deliverables: [
      'Custom CSS styling overrides & bespoke typography scales',
      'Fluid Engine grid optimization eliminating mobile dead space',
      'Custom-coded navigation menus, sticky elements & galleries',
      'Payment gateway setup (Stripe/PayPal) and digital product flows',
    ],
    turnaround: '4–7 Days',
    tags: ['Squarespace', 'Fluid Engine', 'Custom CSS', 'E-Commerce'],
  },
];

/* Real client testimonials will be reinstated once available */
export const testimonialsData: Testimonial[] = [];
