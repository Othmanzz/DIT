import React from 'react';
import ServicePage from '../components/ServicePage';

const ITSolutionsPage = () => {
  const serviceData = {
    title: "IT Solutions & Management",
    subtitle: "Transform your IT infrastructure into a strategic advantage",
    description: "Streamline your infrastructure with proactive monitoring, strategic planning, and 24/7 support that keeps your business running at peak performance. Stop fighting fires and start driving innovation.",
    heroImage: "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=800",
    
    services: [
      {
        title: "Strategic IT Planning",
        description: "Align technology investments with business objectives through comprehensive assessments and roadmaps.",
        features: [
          "IT infrastructure audit and assessment",
          "Technology roadmap development",
          "Budget planning and optimization",
          "Risk assessment and mitigation",
          "Compliance and governance strategy"
        ]
      },
      {
        title: "24/7 Infrastructure Monitoring",
        description: "Prevent problems before they impact your business with proactive monitoring and predictive maintenance.",
        features: [
          "Real-time system monitoring",
          "Predictive failure analysis",
          "Automated alerting and response",
          "Performance optimization",
          "Capacity planning and scaling"
        ]
      },
      {
        title: "Help Desk & User Support",
        description: "Empower your team with responsive, multilingual support that resolves issues quickly.",
        features: [
          "Multi-channel support (phone, email, chat)",
          "Arabic and English support",
          "Ticket management system",
          "User training and documentation",
          "Remote troubleshooting"
        ]
      },
      {
        title: "Network & System Optimization",
        description: "Maximize performance and reliability through continuous optimization and maintenance.",
        features: [
          "Network performance tuning",
          "Server optimization",
          "Database performance enhancement",
          "Security patch management",
          "Backup and disaster recovery"
        ]
      }
    ],

    approach: [
      {
        step: 1,
        title: "Assess",
        description: "Comprehensive audit of your current infrastructure, identifying gaps, vulnerabilities, and optimization opportunities."
      },
      {
        step: 2,
        title: "Optimize", 
        description: "Implement tailored solutions that address immediate needs while building a foundation for future growth and scalability."
      },
      {
        step: 3,
        title: "Maintain",
        description: "Provide ongoing support, monitoring, and optimization to ensure peak performance and continuous improvement."
      }
    ],

    caseStudy: {
      title: "Manufacturing Giant Achieves 99.9% Uptime",
      client: "Saudi Industrial Corporation",
      challenge: "A leading Saudi manufacturing company was experiencing frequent system downtime, costing them millions in lost production. Their aging infrastructure was unreliable, and they lacked visibility into system performance.",
      solution: "DIT implemented a comprehensive monitoring solution with predictive analytics, upgraded critical infrastructure, and established 24/7 support protocols. We also created a strategic IT roadmap aligned with their expansion plans.",
      results: [
        "99.9% system uptime achieved (from 87%)",
        "60% reduction in IT-related production delays",
        "SAR 2.4M annual savings in operational costs",
        "50% faster issue resolution times",
        "Improved staff productivity by 25%"
      ],
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"
    },

    specifications: [
      {
        category: "Monitoring & Alerting",
        items: [
          "Real-time infrastructure monitoring",
          "Custom alerting thresholds",
          "Performance metrics dashboard",
          "Historical trending analysis",
          "Mobile app notifications",
          "Integration with existing tools"
        ]
      },
      {
        category: "Support Channels",
        items: [
          "24/7 phone support hotline",
          "Email ticket system",
          "Live chat support",
          "Remote desktop assistance",
          "On-site support (when needed)",
          "Escalation procedures"
        ]
      },
      {
        category: "Compliance & Security",
        items: [
          "Saudi data residency requirements",
          "ISO 27001 certified processes",
          "Regular security assessments",
          "Compliance reporting",
          "Audit trail maintenance",
          "Data encryption standards"
        ]
      },
      {
        category: "Technologies Supported",
        items: [
          "Windows Server environments",
          "Linux/Unix systems",
          "Virtualization platforms",
          "Cloud infrastructure (AWS, Azure)",
          "Network equipment (Cisco, HP)",
          "Database systems (SQL, Oracle)"
        ]
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default ITSolutionsPage;