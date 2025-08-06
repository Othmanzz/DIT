import React from 'react';
import ServicePage from '../components/ServicePage';

const ITProjectsPage = () => {
  const serviceData = {
    title: "IT Projects Solutions",
    subtitle: "Execute complex technology initiatives with confidence", 
    description: "Execute complex technology initiatives with confidence through expert project management and proven implementation methodologies. Complex IT projects fail 70% of the time due to poor planning, scope creep, and inadequate expertise.",
    heroImage: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800",
    
    services: [
      {
        title: "Project Planning & Governance",
        description: "Establish clear objectives, timelines, and success metrics with structured methodologies.",
        features: [
          "Project charter and scope definition",
          "Work breakdown structure (WBS)",
          "Resource planning and allocation",
          "Risk assessment and mitigation",
          "Stakeholder management",
          "Governance framework setup"
        ]
      },
      {
        title: "Resource Management",
        description: "Assemble and manage the right team with the right skills for successful project delivery.",
        features: [
          "Team composition and staffing",
          "Skills assessment and gap analysis",
          "Resource optimization strategies",
          "Vendor and contractor management",
          "Performance monitoring and reporting",
          "Knowledge transfer planning"
        ]
      },
      {
        title: "Risk Management",
        description: "Identify and mitigate potential issues before they become problems through proactive planning.",
        features: [
          "Risk identification and assessment",
          "Contingency planning and response",
          "Issue tracking and resolution",
          "Quality assurance processes",
          "Budget and timeline monitoring",
          "Stakeholder communication protocols"
        ]
      },
      {
        title: "Change Management",
        description: "Ensure smooth adoption with comprehensive training and support throughout the transformation.",
        features: [
          "Change impact assessment",
          "Communication strategy development",
          "Training program design and delivery",
          "User adoption monitoring",
          "Organizational readiness evaluation",
          "Post-implementation support"
        ]
      }
    ],

    approach: [
      {
        step: 1,
        title: "Plan",
        description: "Define scope, timeline, and success criteria with all stakeholders using proven methodologies like PMI and Agile."
      },
      {
        step: 2,
        title: "Execute",
        description: "Manage implementation with structured methodologies, regular checkpoints, and proactive risk management."
      },
      {
        step: 3,
        title: "Deliver",
        description: "Ensure successful adoption with thorough testing, comprehensive training, and ongoing support services."
      }
    ],

    caseStudy: {
      title: "Digital Transformation Delivers ROI in 6 Months",
      client: "Saudi Logistics Corporation",
      challenge: "A major Saudi logistics company needed to modernize their entire technology stack including ERP, warehouse management, and customer portals. Previous attempts had failed due to scope creep and poor coordination between multiple vendors.",
      solution: "DIT established a comprehensive project management framework, coordinated 5 different vendors, implemented change management processes, and maintained strict governance. We used agile methodologies with regular stakeholder reviews and risk mitigation protocols.",
      results: [
        "Project delivered on time and 5% under budget",
        "100% user adoption achieved within 3 months",
        "ROI realized 6 months ahead of schedule",
        "Zero critical issues post-implementation",
        "Framework replicated for 3 additional projects"
      ],
      image: "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=800"
    },

    specifications: [
      {
        category: "Project Methodologies",
        items: [
          "Project Management Institute (PMI) standards",
          "Agile and Scrum frameworks",
          "Waterfall project management",
          "Hybrid project approaches",
          "PRINCE2 methodology",
          "Lean project management"
        ]
      },
      {
        category: "Project Management Tools",
        items: [
          "Microsoft Project and Project Online",
          "Jira and Confluence",
          "Asana project management",
          "Monday.com collaboration",
          "Smartsheet work management", 
          "Custom project dashboards"
        ]
      },
      {
        category: "Governance & Reporting",
        items: [
          "Executive dashboard reporting",
          "Risk and issue registers",
          "Resource utilization tracking",
          "Budget and timeline monitoring",
          "Quality metrics and KPIs",
          "Stakeholder communication plans"
        ]
      },
      {
        category: "Change Management",
        items: [
          "Prosci ADKAR methodology",
          "Kotter's 8-step change process",
          "Training needs assessment",
          "Communication strategy development",
          "User adoption measurement",
          "Organizational readiness assessment"
        ]
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default ITProjectsPage;