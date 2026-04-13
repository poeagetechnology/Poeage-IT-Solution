// src/data/pricingData.js

export const pricingTiers = [
  {
    name: "Starter",
    price: "₹5,000/mo",
    highlight: false,
    features: [
      "Basic Support",
      "Email Assistance",
      "Single Service"
    ],
    excluded: [
      "Dedicated Manager",
      "24/7 Support"
    ],
    support: "Email",
    response: "24 hrs",
    contract: "Monthly"
  },
  {
    name: "Professional",
    price: "₹15,000/mo",
    highlight: true,
    features: [
      "Priority Support",
      "Multi-Service",
      "Automation"
    ],
    excluded: [
      "Full Customization"
    ],
    support: "Email + Call",
    response: "6 hrs",
    contract: "3 Months"
  },
  {
    name: "Enterprise",
    price: "Custom",
    highlight: false,
    features: [
      "24/7 Support",
      "Dedicated Manager",
      "Full Automation"
    ],
    excluded: [],
    support: "Dedicated Team",
    response: "1 hr",
    contract: "Annual"
  }
];

export const comparisonData = [
  {
    feature: "Support",
    starter: "Email",
    professional: "Priority",
    enterprise: "24/7"
  },
  {
    feature: "Automation",
    starter: "No",
    professional: "Partial",
    enterprise: "Full"
  },
  {
    feature: "Dedicated Manager",
    starter: "No",
    professional: "No",
    enterprise: "Yes"
  }
];

export const faqData = [
  {
    question: "Do you offer discounts?",
    answer: "Yes, volume and long-term contracts get discounts."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, based on contract terms."
  },
  {
    question: "Is there a trial?",
    answer: "Limited trial available for selected services."
  },
  {
    question: "Financing options?",
    answer: "EMI and phased payment options available."
  }
];