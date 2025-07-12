// scripts/generateEvents.js
const fs = require("fs");
const path = require("path");

// Base directory for event images
const publicDir = path.join(__dirname, "../public/events");

// Base event data (without gallery arrays)
const baseEvents = [
  {
    id: 1,
    name: "Techday 2025",
    date: "July 15, 2025",
    status: "upcoming",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Annual robotics competition featuring combat robots",
    hasDetailsPage: true,
  },
  {
    id: 2,
    name: "CSE Feni",
    date: "March 15, 2024",
    status: "completed",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Epic robotics battle competition with 50+ teams",
    hasDetailsPage: false,
    details: {
      location: "CUET Main Auditorium",
      participants: "52 teams from 15 universities",
      winner: "Team Phoenix - BUET",
      prizePool: "৳75,000",
      description:
        "RoboWars 2024 was our most ambitious robotics competition yet, featuring intense combat robot battles that pushed the boundaries of engineering creativity. Teams from across the country brought their most innovative designs to compete in multiple weight categories, showcasing cutting-edge technology and strategic combat techniques.",
      sponsors: [
        { name: "TechCorp Bangladesh", type: "Title Sponsor", logo: "🏢" },
        { name: "Innovation Labs", type: "Gold Sponsor", logo: "🥇" },
        { name: "RoboTech Solutions", type: "Silver Sponsor", logo: "🥈" },
        { name: "Engineering Hub", type: "Bronze Sponsor", logo: "🥉" },
        {
          name: "CUET Alumni Association",
          type: "Supporting Partner",
          logo: "🎓",
        },
      ],
      highlights: [
        "Record-breaking 52 teams participated",
        "First-ever international team from India",
        "Live streaming reached 10,000+ viewers",
        "3 different competition categories",
      ],
      gallery: [],
    },
  },
  {
    id: 3,
    name: "EXP 24",
    date: "November 20, 2023",
    status: "completed",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Showcase of latest technological innovations and startups",
    hasDetailsPage: false,
    details: {
      location: "CUET Conference Hall",
      participants: "200+ students and professionals",
      winner: "Best Innovation: Smart Agriculture System",
      prizePool: "৳30,000",
      description:
        "The Tech Innovation Summit brought together brilliant minds to showcase groundbreaking technological solutions addressing real-world challenges. From AI-powered healthcare systems to sustainable energy solutions, participants demonstrated the future of technology innovation in Bangladesh.",
      sponsors: [
        { name: "Future Tech BD", type: "Title Sponsor", logo: "🚀" },
        { name: "StartupBD", type: "Gold Sponsor", logo: "💼" },
        { name: "Innovation Fund", type: "Silver Sponsor", logo: "💰" },
        { name: "Tech Incubator", type: "Supporting Partner", logo: "🏭" },
      ],
      highlights: [
        "15 innovative projects showcased",
        "Industry experts as judges",
        "Startup pitch competition",
        "Technology exhibition",
      ],
      gallery: [],
    },
  },
  {
    id: 4,
    name: "HANDS ON ARDUINO",
    date: "September 10, 2023",
    status: "completed",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Hands-on workshop on mechatronics systems and applications",
    hasDetailsPage: false,
    details: {
      location: "RMA Lab, CUET",
      participants: "80 students",
      winner: "Best Project: Automated Sorting System",
      prizePool: "৳15,000",
      description:
        "An intensive hands-on workshop designed to bridge the gap between theoretical knowledge and practical application in mechatronics. Participants learned to integrate mechanical, electrical, and software systems to create intelligent automated solutions.",
      sponsors: [
        { name: "AutoTech Industries", type: "Title Sponsor", logo: "⚙️" },
        { name: "Mechatronics BD", type: "Gold Sponsor", logo: "🔧" },
        { name: "Arduino Bangladesh", type: "Technology Partner", logo: "🔌" },
      ],
      highlights: [
        "3-day intensive workshop",
        "Hands-on Arduino and sensor projects",
        "Industry expert instructors",
        "Certificate distribution",
      ],
      gallery: [],
    },
  },
  {
    id: 5,
    name: "PCIU LFR",
    date: "August 5, 2023",
    status: "completed",
    logo: "/placeholder.svg?height=80&width=80",
    description: "High-speed drone racing competition with obstacle courses",
    hasDetailsPage: false,
    details: {
      location: "CUET Sports Complex",
      participants: "35 teams from 12 universities",
      winner: "Team SkyHawks - CUET",
      prizePool: "৳40,000",
      description:
        "The first-ever drone racing championship in the region brought together skilled pilots and custom-built racing drones for an adrenaline-pumping competition. Teams navigated complex obstacle courses at breakneck speeds, showcasing precision flying and engineering excellence.",
      sponsors: [
        { name: "AeroTech BD", type: "Title Sponsor", logo: "🚁" },
        { name: "Drone Hub", type: "Gold Sponsor", logo: "🎯" },
        { name: "Flight Systems", type: "Silver Sponsor", logo: "✈️" },
        { name: "Racing League BD", type: "Event Partner", logo: "🏁" },
      ],
      highlights: [
        "First drone racing event in the region",
        "Custom-built obstacle courses",
        "Live commentary and streaming",
        "Drone building workshop included",
      ],
      gallery: [],
    },
  },
  {
    id: 6,
    name: "TECH DAY 22",
    date: "June 18, 2023",
    status: "completed",
    logo: "/placeholder.svg?height=80&width=80",
    description: "48-hour hackathon focused on Internet of Things solutions",
    hasDetailsPage: false,
    details: {
      location: "CUET Computer Lab",
      participants: "120 participants in 30 teams",
      winner: "Smart City Solutions - Mixed Team",
      prizePool: "৳25,000",
      description:
        "A marathon 48-hour coding and hardware hacking event where teams developed innovative IoT solutions for smart cities, healthcare, agriculture, and environmental monitoring. The hackathon emphasized practical applications that could make a real difference in everyday life.",
      sponsors: [
        { name: "IoT Bangladesh", type: "Title Sponsor", logo: "🌐" },
        { name: "Smart Solutions Ltd", type: "Gold Sponsor", logo: "💡" },
        { name: "Cloud Services BD", type: "Technology Partner", logo: "☁️" },
        { name: "Sensor Tech", type: "Hardware Partner", logo: "📡" },
      ],
      highlights: [
        "48-hour non-stop coding marathon",
        "Industry mentors and guidance",
        "Real-world problem statements",
        "Prototype development and testing",
      ],
      gallery: [],
    },
  },
  {
    id: 7,
    name: "TECH DAY 21",
    date: "June 18, 2023",
    status: "completed",
    logo: "/placeholder.svg?height=80&width=80",
    description: "48-hour hackathon focused on Internet of Things solutions",
    hasDetailsPage: false,
    details: {
      location: "CUET Computer Lab",
      participants: "120 participants in 30 teams",
      winner: "Smart City Solutions - Mixed Team",
      prizePool: "৳25,000",
      description:
        "A marathon 48-hour coding and hardware hacking event where teams developed innovative IoT solutions for smart cities, healthcare, agriculture, and environmental monitoring. The hackathon emphasized practical applications that could make a real difference in everyday life.",
      sponsors: [
        { name: "IoT Bangladesh", type: "Title Sponsor", logo: "🌐" },
        { name: "Smart Solutions Ltd", type: "Gold Sponsor", logo: "💡" },
        { name: "Cloud Services BD", type: "Technology Partner", logo: "☁️" },
        { name: "Sensor Tech", type: "Hardware Partner", logo: "📡" },
      ],
      highlights: [
        "48-hour non-stop coding marathon",
        "Industry mentors and guidance",
        "Real-world problem statements",
        "Prototype development and testing",
      ],
      gallery: [],
    },
  },
  {
    id: 8,
    name: "TECH DAY 24",
    date: "June 18, 2023",
    status: "completed",
    logo: "/placeholder.svg?height=80&width=80",
    description: "48-hour hackathon focused on Internet of Things solutions",
    hasDetailsPage: false,
    details: {
      location: "CUET Computer Lab",
      participants: "120 participants in 30 teams",
      winner: "Smart City Solutions - Mixed Team",
      prizePool: "৳25,000",
      description:
        "A marathon 48-hour coding and hardware hacking event where teams developed innovative IoT solutions for smart cities, healthcare, agriculture, and environmental monitoring. The hackathon emphasized practical applications that could make a real difference in everyday life.",
      sponsors: [
        { name: "IoT Bangladesh", type: "Title Sponsor", logo: "🌐" },
        { name: "Smart Solutions Ltd", type: "Gold Sponsor", logo: "💡" },
        { name: "Cloud Services BD", type: "Technology Partner", logo: "☁️" },
        { name: "Sensor Tech", type: "Hardware Partner", logo: "📡" },
      ],
      highlights: [
        "48-hour non-stop coding marathon",
        "Industry mentors and guidance",
        "Real-world problem statements",
        "Prototype development and testing",
      ],
      gallery: [],
    },
  },
  {
    id: 9,
    name: "WORKSHOP CEUSC",
    date: "June 18, 2023",
    status: "completed",
    logo: "/placeholder.svg?height=80&width=80",
    description: "48-hour hackathon focused on Internet of Things solutions",
    hasDetailsPage: false,
    details: {
      location: "CUET Computer Lab",
      participants: "120 participants in 30 teams",
      winner: "Smart City Solutions - Mixed Team",
      prizePool: "৳25,000",
      description:
        "A marathon 48-hour coding and hardware hacking event where teams developed innovative IoT solutions for smart cities, healthcare, agriculture, and environmental monitoring. The hackathon emphasized practical applications that could make a real difference in everyday life.",
      sponsors: [
        { name: "IoT Bangladesh", type: "Title Sponsor", logo: "🌐" },
        { name: "Smart Solutions Ltd", type: "Gold Sponsor", logo: "💡" },
        { name: "Cloud Services BD", type: "Technology Partner", logo: "☁️" },
        { name: "Sensor Tech", type: "Hardware Partner", logo: "📡" },
      ],
      highlights: [
        "48-hour non-stop coding marathon",
        "Industry mentors and guidance",
        "Real-world problem statements",
        "Prototype development and testing",
      ],
      gallery: [],
    },
  },
];

// Function to get image files from a folder
const getImageFiles = (eventName) => {
  const folderPath = path.join(publicDir, eventName);
  try {
    return fs
      .readdirSync(folderPath)
      .filter((file) => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
      .map((file) => `/events/${eventName}/${file}`);
  } catch (error) {
    console.warn(`No images found for ${eventName}: ${error.message}`);
    return [];
  }
};

// Populate gallery arrays
const allEvents = baseEvents.map((event) => ({
  ...event,
  details: {
    ...event.details,
    gallery: getImageFiles(event.name),
  },
}));

// Write to a file
fs.writeFileSync(
  path.join(__dirname, "../data/events.json"),
  JSON.stringify(allEvents, null, 2)
);

console.log("Events data generated successfully!");
