import React from 'react';
import ServicePage from '../components/ServicePage';

const SoftwareDevelopmentPage = () => {
  const serviceData = {
    title: "Software Development Solutions",
    subtitle: "Build software that gives you the competitive edge",
    description: "Bring your vision to life with custom applications built using cutting-edge technologies, designed specifically for your business needs. Off-the-shelf software rarely fits perfectly—we build software that works the way you do.",
    heroImage: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
    
    services: [
      {
        title: "Custom Application Development",
        description: "Create bespoke solutions designed specifically for your business processes and requirements.",
        features: [
          "Web application development",
          "Mobile app development (iOS/Android)",
          "Desktop application development",
          "Progressive Web Apps (PWA)",
          "Cross-platform solutions",
          "UI/UX design and prototyping"
        ]
      },
      {
        title: "API Development & Integration", 
        description: "Connect disparate systems seamlessly with robust APIs that enable data flow and functionality sharing.",
        features: [
          "RESTful API development",
          "GraphQL implementation",
          "Microservices architecture",
          "Third-party API integration",
          "API security and authentication",
          "API documentation and testing"
        ]
      },
      {
        title: "Legacy System Modernization",
        description: "Breathe new life into aging applications through strategic refactoring and modern interface design.",
        features: [
          "Legacy system assessment",
          "Database migration and optimization",
          "Modern UI/UX redesign",
          "Cloud migration services",
          "Performance optimization",
          "Security enhancement"
        ]
      },
      {
        title: "Quality Assurance & Testing",
        description: "Ensure flawless performance with comprehensive testing strategies that catch issues before they reach users.",
        features: [
          "Automated testing frameworks",
          "Manual testing and validation", 
          "Performance and load testing",
          "Security testing and audits",
          "User acceptance testing",
          "Continuous integration testing"
        ]
      }
    ],

    approach: [
      {
        step: 1,
        title: "Design",
        description: "Collaborate closely to understand requirements, create detailed specifications, and design user-centric solutions."
      },
      {
        step: 2,
        title: "Develop", 
        description: "Build iteratively with regular demos and feedback cycles, ensuring the solution meets your exact needs."
      },
      {
        step: 3,
        title: "Deploy",
        description: "Launch smoothly with thorough testing, comprehensive training, and ongoing support and maintenance."
      }
    ],

    caseStudy: {
      title: "Digital Banking Platform Serves 100K+ Users",
      client: "Saudi Fintech Solutions",
      challenge: "A growing fintech company needed a secure, scalable digital banking platform that could handle thousands of concurrent users while meeting strict Saudi banking regulations. Their existing system was built on outdated technology and couldn't scale.",
      solution: "DIT built a modern, cloud-native banking platform using React, Node.js, and microservices architecture. We implemented advanced security features, real-time transaction processing, and integrated with Saudi payment systems while ensuring SAMA compliance.",
      results: [
        "Platform supports 100,000+ active users",
        "99.98% uptime achieved",
        "2-second average transaction processing time",
        "Full SAMA regulatory compliance",
        "50% reduction in operational costs"
      ],
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
    },

    specifications: [
      {
        category: "Frontend Technologies",
        items: [
          "React.js / Next.js",
          "Vue.js / Nuxt.js", 
          "Angular / TypeScript",
          "React Native / Flutter",
          "Progressive Web Apps",
          "Responsive design frameworks"
        ]
      },
      {
        category: "Backend Technologies",
        items: [
          "Node.js / Express.js",
          "Python / Django / Flask",
          ".NET Core / C#",
          "Java / Spring Boot",
          "PHP / Laravel",
          "Microservices architecture"
        ]
      },
      {
        category: "Database Systems",
        items: [
          "MySQL / PostgreSQL",
          "MongoDB / NoSQL",
          "Microsoft SQL Server",
          "Oracle Database",
          "Redis caching",
          "Elasticsearch"
        ]
      },
      {
        category: "Cloud & DevOps",
        items: [
          "AWS / Azure / Google Cloud",
          "Docker containerization", 
          "Kubernetes orchestration",
          "CI/CD pipelines",
          "Infrastructure as Code",
          "Monitoring and logging"
        ]
      },
      {
        category: "Security & Compliance",
        items: [
          "OAuth 2.0 / JWT authentication",
          "SSL/TLS encryption",
          "Saudi data residency compliance",
          "GDPR compliance implementation",
          "Penetration testing",
          "Security audit and reporting"
        ]
      },
      {
        category: "Testing & QA",
        items: [
          "Jest / Cypress automated testing",
          "Selenium WebDriver",
          "API testing with Postman",
          "Load testing with JMeter",
          "Security testing tools",
          "Code quality analysis"
        ]
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default SoftwareDevelopmentPage;