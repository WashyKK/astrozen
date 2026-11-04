import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Washington Kamadi — Mechatronics & Robotics Engineer",
  author: "Washington Kigani Kamadi",
  description:
    "Mechatronics and Robotics engineer from Kenya, now a PhD researcher in Space Science and Technology at the University of Trento. I work on climate-smart robotics, privacy-preserving AI platforms and IoT systems.",
  lang: "en",
  siteLogo: "/washington-small.jpg",
  navLinks: [
    { text: "Education", href: "#education" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/WashingtonKK" },
    { text: "Github", href: "https://github.com/WashingtonKK" },
    { text: "ORCID", href: "https://orcid.org/0000-0003-2135-0125" },
  ],
  socialImage: "/washington-og.png",
  canonicalURL: "https://washingtonkamadi.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Washington Kamadi",
    specialty: "Mechatronics & Robotics Engineer",
    summary:
      "Mechatronics and Robotics engineer from Kenya, now a PhD researcher in Space Science and Technology at the University of Trento. I work on climate-smart robotics, privacy-preserving AI platforms and IoT systems.",
    contactLabel: "Get in Touch",
    contactHref: "https://www.linkedin.com/in/WashingtonKK",
  },
  experience: [
    {
      company: "University of Trento",
      position: "PhD Student — Space Science and Technology",
      startDate: "Nov 2026",
      endDate: "Present",
      summary: [
        "Doctoral researcher in the Department of Physics, on the Space Science and Technology doctoral programme in Trento, Italy.",
        "Working on climate-smart robotics, privacy-preserving AI platforms and IoT systems.",
      ],
    },
    {
      company:
        "Pan African University Institute for Basic Sciences, Technology and Innovation",
      position: "MSc, Mechatronic Engineering",
      startDate: "Jul 2024",
      endDate: "Aug 2026",
      summary:
        "Department of Mechanical and Mechatronic Engineering, Nairobi, Kenya.",
    },
    {
      company: "Jomo Kenyatta University of Agriculture and Technology",
      position: "Mechatronic Engineering",
      startDate: "Sep 2017",
      endDate: "Dec 2022",
      summary: "Department of Mechatronics, Juja, Kenya.",
    },
  ],
  projects: [
    {
      name: "Magistrala",
      summary:
        "Open-source IoT platform framework for connecting and managing devices over MQTT, CoAP, HTTP and WebSocket. I contribute to the Go codebase at Abstract Machines.",
      linkPreview: "https://www.absmach.eu/products/magistrala/",
      linkSource: "https://github.com/absmach/magistrala",
      image: "/project-magistrala.png",
    },
    {
      name: "Cocos AI",
      summary:
        "Confidential computing system for AI, running workloads inside trusted execution environments so models and data stay private. I contribute to the Go codebase at Ultraviolet.",
      linkPreview: "https://www.ultraviolet.rs/products/cocos-ai/",
      linkSource: "https://github.com/ultravioletrs/cocos",
      image: "/project-cocos.png",
    },
    {
      name: "Cube AI",
      summary:
        "LLM protection with TEEs — serving and interacting with large language models inside hardware-backed enclaves. I contribute to the Go codebase at Ultraviolet.",
      linkPreview: "https://www.ultraviolet.rs/products/cube-ai/",
      linkSource: "https://github.com/ultravioletrs/cube",
      image: "/project-cube.png",
    },
  ],
  about: {
    description: `
      Hi, I'm Washington — an Advanced Mechatronics and Robotics engineer from Kenya, currently a PhD researcher in Space Science and Technology at the University of Trento. I'm passionate about robotics, IoT and confidential computing, and about what they can do for a sustainable future.

      Right now I'm working on climate-smart robotics, privacy-preserving AI platforms and IoT solutions. Alongside that I contribute to open-source infrastructure in the same space — Magistrala, an IoT platform framework, and Cocos AI and Cube AI, which bring confidential computing to AI workloads.

      I work mostly in Go, Python, C/C++, MATLAB, ROS and TypeScript. Ask me about confidential computing, IoT protocols, robotics or climate change.
    `,
    image: "/washington-big.jpg",
  },
};
