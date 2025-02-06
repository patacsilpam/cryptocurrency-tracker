import { Clock, ChartNoAxesCombined, BetweenVerticalEnd } from "lucide-react";
import test from "node:test";
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

export const testimonialsItem = [
  // Testimonials for Crypto Investor
  {
    category: "Crypto Investor",
    testimonies: [
      {
        id: 1,
        name: " Mark R.",
        role: "Crypto Investor",
        testimony:
          "Crypto Daily keeps me updated with real-time prices and trending news. A must-have for any trader!",
      },
      {
        id: 2,
        name: "Jessica T.",
        role: "Day Trader",
        testimony:
          "I love how easy it is to track my favorite coins. The UI is clean and fast!",
      },
      {
        id: 3,
        name: "Carlos D. ",
        role: "Swing Trader",
        testimony:
          "The Hot Crypto feature helps me spot market trends before they explode. Highly recommended!",
      },
    ],
  },
  //Testimonies for Beginners & Casual Users
  {
    category: "Beginners & Casual Users",
    testimonies: [
      {
        id: 1,
        name: "Emma S.",
        role: "New Crypto Enthusiast",
        testimony:
          "I used to struggle with tracking multiple cryptos, but Crypto Daily makes it effortless!",
      },
      {
        id: 2,
        name: "Daniel W.",
        role: "Beginner Investor",
        testimony:
          "I’m new to crypto, and this app helps me stay informed without feeling overwhelmed.",
      },
      {
        id: 3,
        name: "Liam J.",
        role: "Casual User",
        testimony:
          "The daily news section helps me understand market movements in simple terms. Love it!",
      },
    ],
  },
  // Testimonies for Developers and Analysts
  {
    category: "Developers and Analysts",
    testimonies: [
      {
        id: 1,
        name: "Sophia K",
        role: "Blockchain Dev",
        testimony:
          "As a blockchain developer, I appreciate the real-time data and smooth UI of Crypto Daily.",
      },
      {
        id: 2,
        name: "Ben L.",
        role: " Data Analyst",
        testimony:
          "The crypto monitoring dashboard is packed with valuable insights for traders and analysts alike!",
      },
      {
        id: 3,
        name: "Nathan G.",
        role: "Financial Analyst",
        testimony:
          "I've used many crypto trackers, but Crypto Daily stands out with its ease of use and accuracy.",
      },
    ],
  },
];
