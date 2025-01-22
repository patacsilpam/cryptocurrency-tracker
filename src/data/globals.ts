import { Clock, ChartNoAxesCombined, BetweenVerticalEnd } from "lucide-react";
import React from "react";
export const navItems = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    label: "Features",
    href: "features",
  },
  {
    id: 3,
    label: "How it works",
    href: "how-it-works",
  },
  {
    id: 4,
    label: "Contact",
    href: "contact",
  },
  {
    id: 5,
    label: "FAQs",
    href: "FAQs",
  },
];

export const featureItems = [
  {
    id: 1,
    icon: React.createElement(Clock),
    label: "Real-Time Cryptocurrency Price Tracking",
    description: "Get instant updates on cryptocurrency prices as they happen.",
  },
  {
    id: 2,
    icon: React.createElement(ChartNoAxesCombined),
    label: "Explore Market Trends and Insights",
    description:
      "Analyze market movements to identify profitable opportunities.",
  },
  {
    id: 3,
    icon: React.createElement(BetweenVerticalEnd),
    label: "Advanced Analysis Tools for Informed Decisions",
    description: "Utilize our tools to enhance your trading strategies.",
  },
];
