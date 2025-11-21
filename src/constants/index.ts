// Company Information
export const COMPANY_INFO = {
  name: "Honeymark Investments",
  tagline: "Quality Agriculture and Transport Services for Zimbabwe",
  email: "honeymarkinvestments@gmail.com",
  phones: {
    primary: "0716733095",
    secondary: "0719472870",
    formatted: {
      primary: "+263 71 673 3095",
      secondary: "+263 71 947 2870",
    },
  },
  location: {
    address: "125.5-hectare farm in Troutbeck, Nyanga",
    established: "12th November 2020",
  },
  social: {
    instagram: "https://www.instagram.com/honeymark_investments",
    facebook: "https://www.facebook.com/share/17YgPmoyDR/",
  },
} as const;

// Business Divisions
export const DIVISIONS = {
  giftedStud: {
    name: "Gifted Stud Breeders",
    tagline: "From Pasture to Profit: Unlock Your Farming Potential with Gifted Stud Breeders!",
    established: "12th November 2020",
    focus: [
      "Boer goats",
      "Kalahari Reds",
      "Merino sheep",
      "Meat Mater Sheep",
      "Local crossbreeds",
      "Chickens",
      "Piggery",
    ],
  },
  transport: {
    name: "Honeymark Taxi and Transport Services",
    tagline: "Invest in Comfort – Choose Honeymark for Your Next Ride!",
    established: "3rd February 2024",
    goal: "10 vehicles by end of 2026",
  },
} as const;

// Color Palette (Based on Official Logo)
export const COLORS = {
  primary: {
    green: "#1B5E20", // Forest Green (from logo)
    orange: "#F5A623", // Sunset Orange (from logo)
    yellow: "#FFD54F", // Golden Yellow
  },
  accent: {
    brown: "#5D4037", // Deep Brown
    cream: "#FFF8E1", // Light Cream
    sageGreen: "#7CB342", // Sage Green (hover states)
  },
  legacy: {
    // Keep for backward compatibility during transition
    orange: "#F97316",
    green: "#4CAF50",
    yellow: "#F5B800",
    brown: "#8B4513",
  },
} as const;

// Business Hours
export const BUSINESS_HOURS = {
  weekday: "8:00 AM - 5:00 PM",
  saturday: "9:00 AM - 2:00 PM",
  sunday: "Closed",
} as const;

// Services
export const SERVICES = {
  agriculture: [
    {
      title: "Breed Sales",
      description: "High-quality breeds including Kalahari Bucks, Boer Does, and Boer Goat Studs.",
    },
    {
      title: "Meat Sales",
      description: "Quality meat products from our farm to local markets and abroad.",
    },
    {
      title: "Consultancy",
      description: "Expert advice on livestock farming, breed selection, and farm management.",
    },
    {
      title: "Breeding Training",
      description: "Training programs for proper breeding techniques and sustainable farming.",
    },
  ],
  transport: [
    {
      title: "Taxi and Transport Services",
      description: "Reliable and comfortable transportation services in Zimbabwe.",
    },
    {
      title: "Fleet Management and Consultancy",
      description: "Fleet management services and consultancy for transport businesses.",
    },
  ],
} as const;

// Testimonials (with Shona mixed in)
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Tendai Moyo",
    location: "Harare",
    service: "Gifted Stud Breeders",
    text: "Mhuka dziri pamusoro! The quality of livestock from Honeymark is exceptional. Thomas was very helpful with breeding advice.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rudo Ncube",
    location: "Bulawayo",
    service: "Honeymark Taxi",
    text: "Reliable transport service! Always on time and the vehicles are well-maintained. Much better than other taxi services.",
    rating: 5,
  },
  {
    id: 3,
    name: "Farai Chikwanha",
    location: "Mutare",
    service: "Gifted Stud Breeders",
    text: "Ndakawana rubatsiro rwakakura! The consultancy service helped me improve my farm yields significantly. Professional team with great knowledge.",
    rating: 5,
  },
  {
    id: 4,
    name: "Chipo Sibanda",
    location: "Gweru",
    service: "Honeymark Taxi",
    text: "Safe and affordable transport. Ndinoshandisa service yavo zuva nezuva. I use them for my daily commute. Highly recommend!",
    rating: 5,
  },
  {
    id: 5,
    name: "Tafadzwa Nyathi",
    location: "Nyanga",
    service: "Gifted Stud Breeders",
    text: "Purchased Merino sheep from Honeymark. Zvakanyatsoshanda! Excellent quality and the team provided great support.",
    rating: 5,
  },
  {
    id: 6,
    name: "Vimbai Makoni",
    location: "Masvingo",
    service: "Honeymark Taxi",
    text: "Professional drivers, clean vehicles. Best taxi service in town. Vanogona basa!",
    rating: 5,
  },
] as const;

// Goals
export const GOALS = {
  agriculture: [
    "Provide high-quality breeding stock to farmers",
    "Expand meat production and distribution networks",
    "Offer expert consultancy services to new and existing farmers",
    "Develop comprehensive training programs for breeding excellence",
  ],
  transport: [
    "Achieve a total of 10 vehicles by the end of 2026 through direct ownership and leasing",
    "Become a leading provider of both Taxi and Transport Services within the next 5 years",
    "Expand Taxi and Transport Services into South Africa by end of 2026",
  ],
} as const;

// Image Paths
export const IMAGES = {
  logos: {
    official: "/official-logo.jpg", // Main official logo (livestock silhouette)
    honeymark: "/lovable-uploads/69aeeb1a-6652-4c18-a28c-24889436a45c.png", // Bee logo (legacy)
    giftedStud: "/lovable-uploads/bbf53e52-60a0-4041-98b1-a460aedaab0e.png", // Farm logo (legacy)
  },
  hero: {
    main: "/lovable-uploads/f8c54092-d80d-4c5c-b9ff-0fa11935e81e.png",
    background: "/lovable-uploads/bbf53e52-60a0-4041-98b1-a460aedaab0e.png",
  },
  about: {
    farm: "/lovable-uploads/364118eb-f298-4ef6-af21-4ddb78d09b61.png",
    transport: "/lovable-uploads/f8c54092-d80d-4c5c-b9ff-0fa11935e81e.png",
  },
} as const;

// Navigation Links
export const NAV_LINKS = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/about", label: "About Us" },
  { path: "/contact", label: "Contact" },
] as const;

// SEO Meta Tags
export const SEO = {
  home: {
    title: "Honeymark Investments | Quality Agriculture & Transport Services Zimbabwe",
    description:
      "Leading provider of quality livestock breeding and reliable transport services in Zimbabwe. Gifted Stud Breeders & Honeymark Taxi Services.",
    keywords: "zimbabwe agriculture, livestock breeding, boer goats, taxi services zimbabwe, transport services",
  },
  services: {
    title: "Our Services | Honeymark Investments",
    description: "Explore our agriculture and transport services including livestock breeding, meat sales, and reliable taxi services across Zimbabwe.",
    keywords: "livestock breeding, boer goats zimbabwe, taxi services harare, transport consultancy",
  },
  about: {
    title: "About Us | Honeymark Investments",
    description:
      "Learn about Honeymark Investments, operating Gifted Stud Breeders farm in Nyanga and Honeymark Taxi Services across Zimbabwe since 2020.",
    keywords: "honeymark investments, gifted stud breeders, zimbabwe farm, nyanga livestock",
  },
  contact: {
    title: "Contact Us | Honeymark Investments",
    description: "Get in touch with Honeymark Investments for livestock breeding or transport services. Located in Troutbeck, Nyanga, Zimbabwe.",
    keywords: "contact honeymark, zimbabwe livestock contact, taxi services contact",
  },
} as const;
