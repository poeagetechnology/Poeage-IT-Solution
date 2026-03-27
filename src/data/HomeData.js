// data/homeData.js
import {
  FaShieldAlt,
  FaCloud,
  FaRobot,
  FaHeadset,
  FaNetworkWired,
  FaCode,
  FaChartLine,
  FaGlobe,
} from "react-icons/fa";

export const services = [
  {
    title: "Cybersecurity",
    desc: "Protect systems from cyber threats",
    icon: FaShieldAlt,
  },
  {
    title: "Cloud Infrastructure",
    desc: "Scalable cloud environments",
    icon: FaCloud,
  },
  {
    title: "AI & Automation",
    desc: "Automate business workflows",
    icon: FaRobot,
  },
  {
    title: "24/7 IT Support",
    desc: "Round-the-clock technical help",
    icon: FaHeadset,
  },
  {
    title: "Network Solutions",
    desc: "Secure and reliable networks",
    icon: FaNetworkWired,
  },
  {
    title: "Software Development",
    desc: "Custom applications",
    icon: FaCode,
  },
  {
    title: "Data Analytics",
    desc: "Insights for smarter decisions",
    icon: FaChartLine,
  },
  {
    title: "Web & App Development",
    desc: "Modern digital platforms",
    icon: FaGlobe,
  },
];

export const stats = [
  { value: "100+ Projects", label: "Completed" },
  { value: "98% Retention", label: "Client Satisfaction" },
  { value: "5+ Years", label: "Experience" },
  { value: "24/7 Support", label: "Available" },
];

export const testimonials = [
  { name: "School Admin", text: "Downtime reduced by 80%" },
  { name: "Startup Founder", text: "Scaled our systems completely" },
];

export const pricing = [
  { name: "Basic", price: "₹10K+", features: ["Setup", "Support"] },
  { name: "Growth", price: "₹25K+", features: ["Cloud", "Security"] },
  { name: "Enterprise", price: "Custom", features: ["Full IT Stack"] },
];

export const faqs = [
  { q: "Do you offer 24/7 support?", a: "Yes, fully managed support." },
  { q: "Do you work with startups?", a: "Yes, we scale businesses." },
];