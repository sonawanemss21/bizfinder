import ByteSoft from "../assets/ByteSoft.jpeg"
import CloudTech from "../assets/CloudeTech.jpeg"
import CodeNexus from "../assets/CodeNexus.jpeg"
import IndyaFashion from "../assets/IndyaFashion.jpeg"
import ReelSpark from "../assets/ReelSpark.jpeg"
import SnapNova from "../assets/SnapNova.jpeg"
import SparkVoltElectricals from "../assets/SparkVoltElectricals.jpeg"
import StyleAura from "../assets/StyleAura.jpeg"
import VisionFrames from "../assets/VisionFrames.jpeg"
import Wattworks from "../assets/Wattworks.jpeg"


const businesses = [
  {
    id: 1,
    name: "ByteSoft Solutions",
    category: "IT",
    rating: 4.7,
    address: "204 Innovation Hub, Tech City",
    phone: "+1-333-222-1188",
    website: "https://bytesoftsolutions.com",
    image: ByteSoft,
    description:
      "Enterprise-grade software development, custom web apps, and cloud consulting for startups and enterprises.",
    isVerified: true,
    reviews: [
      {
        id: 101,
        user: "Tina",
        rating: 5,
        comment:
          "They built our company portal in 2 weeks. Super professional!",
        timestamp: "2024-03-10T10:20:00Z",
      },
      {
        id: 102,
        user: "Ravi",
        rating: 4.5,
        comment: "Great backend support and project communication.",
        timestamp: "2024-03-15T16:42:00Z",
      },
    ],
  },
  {
    id: 2,
    name: "SparkVolt Electricals",
    category: "electrical contractor",
    rating: 4.3,
    address: "67 Electric Lane, Industrial Area",
    phone: "+1-444-555-6677",
    website: "https://sparkvoltelectricals.com",
    image: SparkVoltElectricals,
    description:
      "Licensed electrical contractors handling wiring, panel installation, lighting systems, and commercial maintenance.",
    isVerified: false,
    reviews: [
      {
        id: 201,
        user: "Karan",
        rating: 4,
        comment: "Quick and safe installation for our office lighting.",
        timestamp: "2024-03-08T15:50:00Z",
      },
      {
        id: 202,
        user: "Meera",
        rating: 4.5,
        comment: "Very responsive during the entire home rewiring process.",
        timestamp: "2024-03-12T12:05:00Z",
      },
    ],
  },
  {
    id: 3,
    name: "StyleAura Boutique",
    category: "boutique",
    rating: 4.6,
    address: "17 Fashion Street, City Center",
    phone: "+1-555-222-3344",
    website: "https://styleaura.com",
    image: StyleAura,
    description:
      "Custom ethnic and western fashion outfits for women, bridal collections, kidswear, and seasonal fashion drops.",
    isVerified: true,
    reviews: [
      {
        id: 301,
        user: "Neha",
        rating: 5,
        comment: "Beautiful designs and perfect stitching!",
        timestamp: "2024-02-20T11:10:00Z",
      },
      {
        id: 302,
        user: "Riya",
        rating: 4.5,
        comment: "Great fit and vibrant colors, perfect for weddings!",
        timestamp: "2024-03-05T14:25:00Z",
      },
    ],
  },
  {
    id: 4,
    name: "ReelSpark Studios",
    category: "content creator",
    rating: 4.9,
    address: "Studio 7, Creators Lane",
    phone: "+1-666-333-0099",
    website: "https://reelspark.com",
    image: ReelSpark,
    description:
      "Professional content studio for YouTube, Instagram, and brand marketing reels. Script to shoot to edit – full package.",
    isVerified: true,
    reviews: [
      {
        id: 401,
        user: "Aarav",
        rating: 5,
        comment: "They edited our entire video series and it looks fantastic!",
        timestamp: "2024-01-15T09:00:00Z",
      },
      {
        id: 402,
        user: "Tina",
        rating: 4.8,
        comment:
          "Loved the shooting setup and quality output for my product reels.",
        timestamp: "2024-03-10T18:45:00Z",
      },
    ],
  },
  {
    id: 5,
    name: "CodeNexus Technologies",
    category: "IT",
    rating: 4.6,
    address: "Block A, Cyber Square, Noida",
    phone: "+1-311-009-2211",
    website: "https://codenexus.io",
    image: CodeNexus,
    description:
      "Custom software solutions, API integration, and AI-powered backend development for startups.",
    isVerified: true,
    reviews: [
      {
        id: 501,
        user: "Ankit",
        rating: 5,
        comment: "Brilliant team and timely delivery.",
        timestamp: "2024-03-14T13:10:00Z",
      },
    ],
  },
  {
    id: 6,
    name: "WattWorks Electric Co.",
    category: "electrical contractor",
    rating: 4.2,
    address: "21 Circuit Avenue, Suburban Plaza",
    phone: "+1-787-110-9988",
    website: "https://wattworks.com",
    image: Wattworks,
    description:
      "Affordable and certified electrical repairs, wiring upgrades, and outdoor lighting setup.",
    isVerified: false,
    reviews: [
      {
        id: 601,
        user: "Karan",
        rating: 4.2,
        comment:
          "Installed all fans and switches in my new flat. No complaints!",
        timestamp: "2024-03-11T10:00:00Z",
      },
    ],
  },
  {
    id: 7,
    name: "Indya Fashion",
    category: "boutique",
    rating: 4.4,
    address: "Floor 3, Lotus Mall, South Block",
    phone: "+1-123-456-7899",
    website: "https://www.houseofindya.com/",
    image: IndyaFashion,
    description:
      "Designer boutique offering Indo-western wear, party gowns, and custom tailoring services.",
    isVerified: true,
    reviews: [
      {
        id: 701,
        user: "Meera",
        rating: 4.4,
        comment:
          "Lovely embroidery work and timely delivery for my engagement outfit.",
        timestamp: "2024-02-28T17:55:00Z",
      },
    ],
  },
  {
    id: 8,
    name: "VisionFrame Media",
    category: "content creator",
    rating: 4.9,
    address: "A-15, Creators Tower, Pune",
    phone: "+1-888-999-1212",
    website: "https://visionframemedia.com",
    image: VisionFrames,
    description:
      "Creative agency making video ads, vlogs, animation reels and influencer collaborations.",
    isVerified: true,
    reviews: [
      {
        id: 801,
        user: "Ravi",
        rating: 5,
        comment:
          "They produced a full ad campaign for my store and it went viral!",
        timestamp: "2024-03-02T12:30:00Z",
      },
    ],
  },
  {
    id: 9,
    name: "SnapNova Creatives",
    category: "content creator",
    rating: 4.8,
    address: "Unit 2B, Creator Hub, Bengaluru",
    phone: "+1-909-101-1122",
    website: "https://snapnova.in",
    image: SnapNova,
    description:
      "Creative team specializing in Instagram reels, travel vlogs, and personal brand storytelling.",
    isVerified: true,
    reviews: [
      {
        id: 901,
        user: "Riya",
        rating: 5,
        comment: "Helped me grow my travel page with stunning video edits!",
        timestamp: "2024-03-06T15:45:00Z",
      },
    ],
  },
  {
    id: 10,
    name: "Cloudly Technologies",
    category: "IT",
    rating: 4.5,
    address: "Tower 9, Tech Park Phase 2, Hyderabad",
    phone: "+1-321-654-0987",
    website: "https://cloudlytech.com",
    image: CloudTech,
    description:
      "Experts in cloud migration, DevOps automation, and serverless architecture for enterprise solutions.",
    isVerified: true,
    reviews: [
      {
        id: 1001,
        user: "Aarav",
        rating: 4.5,
        comment: "Our AWS migration was seamless and super fast!",
        timestamp: "2024-03-17T09:30:00Z",
      },
    ],
  },
];

export default businesses;
