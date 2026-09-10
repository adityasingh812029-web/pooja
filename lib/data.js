// Mock data for the Aaradhya Seva website
// Structured for easy future migration to a database

export const siteConfig = {
  name: "Aaradhya Seva",
  tagline: "Sacred Rituals, Delivered with Devotion",
  description: "Experience authentic Hindu rituals performed by verified temple priests. Book pujas, receive prasad at home, and deepen your spiritual journey.",
  email: "namaste@aaradhyaseva.in",
  phone: "+91 98765 43210",
  address: "Varanasi, Uttar Pradesh, India",
};

export const navLinks = [
  { label: "Pujas", href: "/pujas" },
  { label: "Daan Seva", href: "/daan-seva" },
  { label: "Panchang", href: "/panchang" },
  { label: "Rashifal", href: "/rashifal" },
  { label: "Devotional Knowledge", href: "/knowledge" },
  { label: "Temples", href: "/temples" },
];

export const trustIndicators = [
  { value: "2,50,000+", label: "Devotees Served" },
  { value: "4.9★", label: "Average Rating" },
  { value: "100%", label: "Authentic Prasad" },
];

export const campaigns = [
  {
    id: 1,
    title: "Navratri Maha Puja",
    description: "Nine nights of divine worship for Goddess Durga. Special offerings and havan performed at Varanasi temples.",
    temple: "Kashi Vishwanath Temple",
    date: "Oct 2–10, 2026",
    cta: "Book Now",
    color: "#800020",
    image: "/images/devpunya/1788786396380_8affafc8a5c7feaf.webp",
  },
  {
    id: 2,
    title: "Pitru Paksha Tarpan",
    description: "Honour your ancestors with sacred tarpan rituals performed by experienced priests at holy tirthas.",
    temple: "Gaya Vishnupad Temple",
    date: "Sep 18–Oct 2, 2026",
    cta: "Learn More",
    color: "#5C4B00",
    image: "/images/devpunya/1788785745944_4b1f47aa76eca38c.webp",
  },
  {
    id: 3,
    title: "Diwali Lakshmi Puja",
    description: "Invoke the blessings of Goddess Lakshmi for prosperity and abundance this Diwali season.",
    temple: "Mahalaxmi Temple, Kolhapur",
    date: "Oct 20, 2026",
    cta: "Reserve Spot",
    color: "#7B3F00",
    image: "/images/devpunya/1786818246121_a085b12a1fd2b9d3.webp",
  },
  {
    id: 4,
    title: "Kartik Purnima Snan",
    description: "Sacred bathing ritual on the auspicious full moon of Kartik month at the holy Ganges.",
    temple: "Dashashwamedh Ghat, Varanasi",
    date: "Nov 5, 2026",
    cta: "Join Now",
    color: "#1B4332",
    image: "/images/devpunya/1786396092353_ca24cc1680fbab73.png",
  },
];

export const pujas = [
  {
    id: "mahamrityunjay-kashi",
    title: "11000 Maha Mrityunjay Mantra Jaap & Panchamrit Abhishek",
    purpose: "For healthy, disease-free life and divine longevity",
    temple: "Mahamrityunjay Mahadev Mandir, Kashi",
    date: "Every Monday (Shravan Maas)",
    devotees: 3450,
    price: 1100,
    image: "/images/devpunya/puja-47-default.webp",
    category: "health",
  },
  {
    id: "baglamukhi-havan",
    title: "Maa Baglamukhi Mirchi Havan & Sarva Karya Siddhi",
    purpose: "Destroy negativity and achieve victory & success in all endeavors",
    temple: "Maa Baglamukhi Dham, Near Ujjain",
    date: "Every Tuesday & Saturday",
    devotees: 2890,
    price: 2100,
    image: "/images/devpunya/puja-49-default.webp",
    category: "prosperity",
  },
  {
    id: "baglamukhi-chadhawa",
    title: "Maa Baglamukhi Chadhawa Seva",
    purpose: "Special sacred yellow offerings for victory & protection from enemies",
    temple: "Maa Baglamukhi Dhaam, Near Ujjain",
    date: "Daily Mangal Seva",
    devotees: 1980,
    price: 501,
    image: "/images/devpunya/chadhawa-1-default.webp",
    category: "devotion",
  },
  {
    id: "varahi-mahayagya",
    title: "Sapt Matrika Maa Varahi Mahayagya",
    purpose: "Divine victory in land, property disputes and legal matters",
    temple: "Varahi Devi Shaktipeeth, Devidhura, Uttarakhand",
    date: "Every Panchami & Ashtami",
    devotees: 1850,
    price: 1500,
    image: "/images/devpunya/puja-67-default.webp",
    category: "devotion",
  },
  {
    id: "pitru-shanti-tarpan",
    title: "Pitra Shanti & Pitra Dosh Nivaran MahaPuja",
    purpose: "Sacred Brahma Kapal tarpan for eternal peace of ancestor's souls",
    temple: "Brahma Kapal, Badrinath",
    date: "Pitru Paksha Special",
    devotees: 4200,
    price: 2500,
    image: "/images/devpunya/puja-99-default.webp",
    category: "astrology",
  },
  {
    id: "rudra-abhishek-kashi",
    title: "Panchamrit RudraAbhishek MahaPuja",
    purpose: "Seek divine blessings for peace, prosperity, and spiritual protection",
    temple: "Mahamrityunjay Mahadev Mandir, Kashi",
    date: "Every Somwar (Monday)",
    devotees: 5600,
    price: 1100,
    image: "/images/devpunya/puja-158-default.webp",
    category: "prosperity",
  },
];

export const howItWorksSteps = [
  {
    step: 1,
    title: "Share Devotee Details",
    description: "Enter your name, gotra, and sankalp details for the puja. Our priests prepare accordingly.",
    icon: "clipboard",
  },
  {
    step: 2,
    title: "Priests Perform the Puja",
    description: "Verified temple priests conduct the ritual with authentic Vedic mantras and offerings.",
    icon: "flame",
  },
  {
    step: 3,
    title: "Receive Photo & Video Proof",
    description: "Get photographs and video recordings of your puja as it happens at the temple.",
    icon: "camera",
  },
  {
    step: 4,
    title: "Prasad Delivered Home",
    description: "Sacred prasad from the temple is carefully packed and delivered to your doorstep.",
    icon: "package",
  },
];

export const categories = [
  {
    id: "panchang",
    title: "Panchang",
    description: "Daily tithi, nakshatra, muhurat, and auspicious timings based on the Hindu calendar.",
    href: "/panchang",
    size: "large",
  },
  {
    id: "puja-daan",
    title: "Puja & Daan Seva",
    description: "Book authentic pujas and make charitable donations to support temple activities.",
    href: "/pujas",
    size: "large",
  },
  {
    id: "knowledge",
    title: "Devotional Knowledge",
    description: "Explore the meaning behind rituals, mantras, festivals, and sacred scriptures.",
    href: "/knowledge",
    size: "medium",
  },
  {
    id: "festivals",
    title: "Festivals",
    description: "Upcoming Hindu festivals with dates, significance, and celebration guides.",
    href: "/knowledge?category=festivals",
    size: "medium",
  },
  {
    id: "temples",
    title: "Temples of India",
    description: "Discover sacred temples, their history, darshan timings, and virtual tours.",
    href: "/temples",
    size: "medium",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    city: "Mumbai",
    avatar: "/images/devpunya/12.webp",
    rating: 5,
    review: "The Rudrabhishek puja was performed beautifully. I received the video and photos within hours, and the prasad arrived in pristine condition. Truly a blessed experience.",
    note: "Sample testimonial for demonstration purposes",
  },
  {
    id: 2,
    name: "Rajesh Patel",
    city: "Ahmedabad",
    avatar: "/images/devpunya/13.webp",
    rating: 5,
    review: "I have been booking pujas through Aaradhya Seva for six months now. The authenticity and devotion of the priests is unmatched. My family feels deeply connected to our roots.",
    note: "Sample testimonial for demonstration purposes",
  },
  {
    id: 3,
    name: "Kavita Menon",
    city: "Bangalore",
    avatar: "/images/devpunya/14.webp",
    rating: 5,
    review: "Excellent service for NRIs who cannot visit temples personally. The detailed puja video made me feel like I was there. Highly recommend for the Satyanarayan Katha.",
    note: "Sample testimonial for demonstration purposes",
  },
  {
    id: 4,
    name: "Amit Tiwari",
    city: "Delhi",
    avatar: "/images/devpunya/15.webp",
    rating: 5,
    review: "The Navgraha Shanti puja brought remarkable changes in my life. The priests were knowledgeable and performed every step with utmost sincerity. Prasad packaging was excellent.",
    note: "Sample testimonial for demonstration purposes",
  },
];

export const articles = [
  {
    id: "significance-of-rudraksha",
    title: "The Spiritual Significance of Rudraksha Beads",
    category: "Spiritual Practice",
    readTime: "5 min read",
    date: "Sep 5, 2026",
    excerpt: "Discover the sacred origins, types, and spiritual benefits of wearing Rudraksha beads in daily life.",
    image: "/images/devpunya/astro-1-cover.webp",
  },
  {
    id: "navratri-nine-forms",
    title: "Navratri: Understanding the Nine Forms of Durga",
    category: "Festivals",
    readTime: "8 min read",
    date: "Sep 1, 2026",
    excerpt: "A comprehensive guide to the nine avatars of Goddess Durga worshipped during the auspicious Navratri.",
    image: "/images/devpunya/astro-2-cover.webp",
  },
  {
    id: "vastu-home-temple",
    title: "Vastu Tips for Your Home Temple",
    category: "Vastu Shastra",
    readTime: "4 min read",
    date: "Aug 28, 2026",
    excerpt: "Learn the ideal direction, placement, and materials for setting up a sacred space in your home.",
    image: "/images/devpunya/astro-3-cover.webp",
  },
];

export const temples = [
  {
    id: "kashi-vishwanath",
    name: "Kashi Vishwanath Temple",
    location: "Varanasi, Uttar Pradesh",
    deity: "Lord Shiva",
    description: "One of the twelve Jyotirlingas, this ancient temple on the banks of the Ganges is one of the holiest sites in Hinduism.",
    pujaCount: 12,
  },
  {
    id: "tirupati-balaji",
    name: "Tirumala Venkateswara Temple",
    location: "Tirupati, Andhra Pradesh",
    deity: "Lord Venkateswara",
    description: "The richest temple in the world, dedicated to Lord Vishnu. Millions of devotees visit annually for darshan.",
    pujaCount: 8,
  },
  {
    id: "somnath",
    name: "Somnath Temple",
    location: "Veraval, Gujarat",
    deity: "Lord Shiva",
    description: "The first among the twelve Jyotirlingas, Somnath has been rebuilt many times and stands as a symbol of resilience.",
    pujaCount: 6,
  },
  {
    id: "jagannath-puri",
    name: "Jagannath Temple",
    location: "Puri, Odisha",
    deity: "Lord Jagannath",
    description: "One of the Char Dham pilgrimage sites, famous for the annual Rath Yatra festival.",
    pujaCount: 10,
  },
  {
    id: "meenakshi-temple",
    name: "Meenakshi Amman Temple",
    location: "Madurai, Tamil Nadu",
    deity: "Goddess Meenakshi",
    description: "A historic temple dedicated to Goddess Parvati, known for its stunning Dravidian architecture.",
    pujaCount: 7,
  },
  {
    id: "kedarnath",
    name: "Kedarnath Temple",
    location: "Rudraprayag, Uttarakhand",
    deity: "Lord Shiva",
    description: "Nestled in the Himalayas at 11,755 feet, this Jyotirlinga is part of the Char Dham yatra.",
    pujaCount: 5,
  },
];

export const footerLinks = {
  product: [
    { label: "All Pujas", href: "/pujas" },
    { label: "Daan Seva", href: "/daan-seva" },
    { label: "Panchang", href: "/panchang" },
    { label: "Rashifal", href: "/rashifal" },
    { label: "Temples", href: "/temples" },
  ],
  helpful: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Devotional Knowledge", href: "/knowledge" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms & Conditions", href: "/legal/terms" },
    { label: "Refund Policy", href: "/legal/refund" },
    { label: "Shipping Policy", href: "/legal/shipping" },
  ],
};
