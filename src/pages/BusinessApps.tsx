import React from 'react';
import ServicePage from '../components/ServicePage';

const BusinessAppsPage = () => {
  const serviceData = {
    title: "Business Apps Solutions",
    subtitle: "Transform operations with intelligent automation and insights",
    description: "Transform operations with tailored ERP, CRM, and enterprise applications that automate workflows and deliver actionable insights. Disconnect from manual processes and data silos—unite your business.",
    heroImage: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
    
    services: [
      {
        title: "ERP Implementation & Integration",
        description: "Unite your business processes with enterprise resource planning solutions that provide complete visibility.",
        features: [
          "SAP, Oracle, Microsoft Dynamics implementation",
          "Financial management and accounting",
          "Supply chain and inventory management", 
          "Human resources and payroll",
          "Custom module development",
          "Third-party system integration"
        ]
      },
      {
        title: "CRM Solutions", 
        description: "Transform customer relationships with systems that track interactions and automate sales processes.",
        features: [
          "Salesforce and Microsoft CRM implementation",
          "Lead management and tracking",
          "Sales pipeline automation",
          "Customer service management",
          "Marketing automation integration",
          "Mobile CRM applications"
        ]
      },
      {
        title: "Business Intelligence & Analytics",
        description: "Turn data into decisions with powerful analytics platforms and real-time dashboards.",
        features: [
          "Power BI and Tableau implementation",
          "Real-time executive dashboards",
          "Predictive analytics models",
          "KPI tracking and reporting",
          "Data warehouse solutions",
          "Self-service analytics tools"
        ]
      },
      {
        title: "Process Automation",
        description: "Eliminate repetitive tasks and human error through intelligent automation workflows.",
        features: [
          "Robotic Process Automation (RPA)",
          "Workflow automation tools",
          "Document management systems",
          "Approval process automation",
          "Integration platform as a service",
          "AI-powered automation"
        ]
      }
    ],

    approach: [
      {
        step: 1,
        title: "Analyze",
        description: "Map your business processes, identify automation opportunities, and assess current system integration needs."
      },
      {
        step: 2, 
        title: "Implement",
        description: "Deploy and customize solutions that fit your unique workflows, with comprehensive user training and support."
      },
      {
        step: 3,
        title: "Optimize",
        description: "Continuously refine and expand capabilities based on user feedback and changing business requirements."
      }
    ],

    caseStudy: {
      title: "Retail Chain Increases Efficiency by 40%",
      client: "Al-Noor Retail Group",
      challenge: "A major Saudi retail chain was struggling with disconnected systems across 50+ locations. Inventory management was manual, customer data was fragmented, and financial reporting took weeks to compile.",
      solution: "DIT implemented an integrated ERP system with real-time inventory management, unified CRM across all locations, and automated financial reporting. We also deployed mobile applications for store managers and created executive dashboards.",
      results: [
        "40% increase in operational efficiency",
        "Real-time inventory visibility across all stores", 
        "85% reduction in financial reporting time",
        "30% improvement in customer satisfaction scores",
        "SAR 1.8M annual savings in operational costs"
      ],
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
    },

    specifications: [
      {
        category: "ERP Platforms",
        items: [
          "SAP S/4HANA implementation",
          "Microsoft Dynamics 365",
          "Oracle NetSuite",
          "Odoo Enterprise",
          "Custom ERP development",
          "Legacy system migration"
        ]
      },
      {
        category: "CRM Systems", 
        items: [
          "Salesforce Sales Cloud",
          "Microsoft Dynamics CRM",
          "HubSpot Enterprise",
          "Zoho CRM Plus",
          "Custom CRM solutions",
          "Mobile CRM applications"
        ]
      },
      {
        category: "Analytics & BI",
        items: [
          "Microsoft Power BI",
          "Tableau Desktop & Server",
          "QlikSense Enterprise", 
          "IBM Cognos Analytics",
          "Custom dashboard development",
          "Predictive analytics models"
        ]
      },
      {
        category: "Integration Capabilities",
        items: [
          "API-first architecture",
          "Microsoft Azure Integration",
          "MuleSoft Anypoint Platform",
          "Dell Boomi integration",
          "Custom middleware development",
          "Real-time data synchronization"
        ]
      },
      {
        category: "Compliance & Localization",
        items: [
          "Saudi ZATCA e-invoicing compliance",
          "SAMA banking regulations",
          "Arabic language support",
          "Hijri calendar integration",
          "Local tax and VAT compliance",
          "Saudi labor law compliance"
        ]
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default BusinessAppsPage;