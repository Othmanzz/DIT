import React from 'react';
import ServicePage from '../components/ServicePage';

const ProcurementPage = () => {
  const serviceData = {
    title: "Procurement Solutions",
    subtitle: "Optimize technology investments with strategic sourcing",
    description: "Optimize your technology investments with strategic sourcing, vendor management, and cost-effective procurement strategies. Technology procurement mistakes are expensive—wrong products, inflated prices, and vendor lock-in can cripple your IT budget.",
    heroImage: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=800",
    
    services: [
      {
        title: "Strategic Sourcing",
        description: "Leverage our vendor relationships and market knowledge to secure optimal pricing and terms.",
        features: [
          "Vendor evaluation and selection",
          "RFP/RFQ management",
          "Contract negotiation",
          "Market price benchmarking",
          "Total cost of ownership analysis",
          "Supplier relationship management"
        ]
      },
      {
        title: "License Management",
        description: "Optimize software licensing to eliminate waste, ensure compliance, and reduce costs by up to 30%.",
        features: [
          "Software asset management",
          "License compliance auditing",
          "Usage optimization analysis", 
          "Renewal planning and negotiation",
          "Cloud licensing strategies",
          "Vendor audit support"
        ]
      },
      {
        title: "Vendor Management",
        description: "Navigate complex vendor relationships with expert negotiation and ongoing management.",
        features: [
          "Vendor performance monitoring",
          "SLA management and reporting",
          "Risk assessment and mitigation",
          "Dispute resolution support",
          "Vendor diversification strategies",
          "Contract lifecycle management"
        ]
      },
      {
        title: "Technology Assessment",
        description: "Make informed decisions with thorough evaluations that match solutions to your specific needs.",
        features: [
          "Proof of concept management",
          "Technical evaluation frameworks",
          "Business case development",
          "ROI analysis and modeling",
          "Technology roadmap alignment",
          "Implementation risk assessment"
        ]
      }
    ],

    approach: [
      {
        step: 1,
        title: "Evaluate",
        description: "Assess needs, analyze current spending, and identify best-fit solutions through comprehensive market research."
      },
      {
        step: 2,
        title: "Negotiate",
        description: "Secure favorable terms leveraging our buying power, industry relationships, and negotiation expertise."
      },
      {
        step: 3,
        title: "Manage",
        description: "Oversee vendor relationships, optimize ongoing costs, and ensure contract compliance and performance."
      }
    ],

    caseStudy: {
      title: "Multinational Corporation Saves SAR 3M Annually",
      client: "Saudi Industrial Conglomerate",
      challenge: "A large Saudi conglomerate with 12 subsidiaries was managing technology procurement independently, leading to duplicate contracts, inconsistent pricing, and missed savings opportunities. They were spending over SAR 15M annually on IT with no centralized oversight.",
      solution: "DIT implemented a centralized procurement strategy with standardized vendor agreements, consolidated licensing deals, and established governance processes. We negotiated enterprise agreements and implemented spend analytics to identify additional savings opportunities.",
      results: [
        "SAR 3M annual cost savings (20% reduction)",
        "Standardized contracts across all subsidiaries",
        "90% reduction in procurement cycle time",
        "100% license compliance achieved",
        "Improved vendor performance by 35%"
      ],
      image: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800"
    },

    specifications: [
      {
        category: "Vendor Categories",
        items: [
          "Hardware vendors (servers, storage, networking)",
          "Software publishers (Microsoft, Oracle, SAP)",
          "Cloud service providers (AWS, Azure, GCP)",
          "Security solution providers",
          "Telecommunications carriers",
          "Professional services firms"
        ]
      },
      {
        category: "Contract Types",
        items: [
          "Enterprise License Agreements (ELA)",
          "Software subscription models",
          "Hardware maintenance contracts",
          "Cloud service agreements",
          "Professional services contracts",
          "Support and maintenance agreements"
        ]
      },
      {
        category: "Procurement Tools",
        items: [
          "E-procurement platforms",
          "Contract lifecycle management",
          "Spend analysis and reporting",
          "Vendor performance scorecards",
          "Risk management dashboards",
          "Budget tracking and forecasting"
        ]
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default ProcurementPage;