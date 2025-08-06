import React from 'react';
import ServicePage from '../components/ServicePage';

const CybersecurityPage = () => {
  const serviceData = {
    title: "Cybersecurity Solutions",
    subtitle: "Protect your digital assets from evolving threats",
    description: "Protect your assets with comprehensive security strategies, from threat detection to incident response, ensuring business continuity. In today's threat landscape, a single breach can destroy years of hard-earned reputation and trust.",
    heroImage: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
    
    services: [
      {
        title: "Threat Assessment & Vulnerability Management",
        description: "Identify and eliminate security gaps before attackers find them through comprehensive testing.",
        features: [
          "Penetration testing and ethical hacking",
          "Vulnerability assessments",
          "Security risk analysis",
          "Compliance gap analysis",
          "Dark web monitoring",
          "Threat intelligence feeds"
        ]
      },
      {
        title: "Security Operations Center (SOC)",
        description: "Round-the-clock threat detection and response with our Saudi-based SOC team.",
        features: [
          "24/7 security monitoring",
          "Real-time threat detection",
          "Incident response services",
          "Security event analysis",
          "Threat hunting capabilities",
          "Custom alerting and reporting"
        ]
      },
      {
        title: "Identity & Access Management",
        description: "Control who accesses what with sophisticated authentication systems and access controls.",
        features: [
          "Multi-factor authentication (MFA)",
          "Single sign-on (SSO) solutions",
          "Privileged access management",
          "Identity governance",
          "Role-based access control",
          "Biometric authentication"
        ]
      },
      {
        title: "Incident Response & Recovery",
        description: "Minimize damage and downtime with rapid response protocols and disaster recovery plans.",
        features: [
          "24/7 incident response team",
          "Forensic investigation services",
          "Business continuity planning",
          "Disaster recovery solutions",
          "Data backup and restoration",
          "Crisis communication support"
        ]
      }
    ],

    approach: [
      {
        step: 1,
        title: "Protect",
        description: "Implement multi-layered defenses tailored to your risk profile, including firewalls, encryption, and access controls."
      },
      {
        step: 2,
        title: "Detect", 
        description: "Monitor continuously for threats and anomalies using advanced AI-powered detection systems and threat intelligence."
      },
      {
        step: 3,
        title: "Respond",
        description: "Act swiftly to contain and eliminate threats while maintaining operations and ensuring rapid recovery."
      }
    ],

    caseStudy: {
      title: "Healthcare System Prevents Data Breach",
      client: "Saudi Medical Group",
      challenge: "A major Saudi healthcare provider with 15 hospitals was facing increasing cyber threats targeting patient data. They needed to comply with Saudi health data regulations while protecting sensitive medical information from ransomware and data theft attempts.",
      solution: "DIT implemented a comprehensive security framework including advanced endpoint detection, network segmentation, employee security training, and 24/7 monitoring. We also established incident response procedures and ensured full compliance with Saudi health data protection laws.",
      results: [
        "Zero successful security incidents in 18 months",
        "100% compliance with Saudi health data regulations", 
        "95% reduction in security false positives",
        "Staff security awareness improved by 80%",
        "Saved an estimated SAR 5M in potential breach costs"
      ],
      image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800"
    },

    specifications: [
      {
        category: "Network Security",
        items: [
          "Next-generation firewalls (Palo Alto, Fortinet)",
          "Intrusion detection and prevention systems",
          "Network access control (NAC)",
          "VPN and secure remote access",
          "Network segmentation and micro-segmentation",
          "DDoS protection services"
        ]
      },
      {
        category: "Endpoint Protection",
        items: [
          "Advanced endpoint detection and response (EDR)",
          "Anti-malware and antivirus solutions",
          "Mobile device management (MDM)",
          "Application whitelisting",
          "Device encryption and protection",
          "Patch management systems"
        ]
      },
      {
        category: "Security Monitoring",
        items: [
          "Security Information and Event Management (SIEM)",
          "User and Entity Behavior Analytics (UEBA)",
          "Threat intelligence platforms",
          "Security orchestration and automated response",
          "Log management and analysis",
          "Custom security dashboards"
        ]
      },
      {
        category: "Data Protection",
        items: [
          "Data loss prevention (DLP) solutions",
          "Database encryption and masking",
          "Backup and disaster recovery",
          "Cloud data security",
          "Email encryption and security",
          "Digital rights management"
        ]
      },
      {
        category: "Compliance Frameworks",
        items: [
          "Saudi Personal Data Protection Law (PDPL)",
          "Saudi Arabian Monetary Authority (SAMA)",
          "ISO 27001/27002 standards",
          "NIST Cybersecurity Framework",
          "Payment Card Industry (PCI DSS)",
          "Healthcare data protection regulations"
        ]
      },
      {
        category: "Incident Response",
        items: [
          "24/7 incident response hotline",
          "Digital forensics and investigation",
          "Malware analysis and reverse engineering",
          "Business continuity and disaster recovery",
          "Crisis communication and PR support",
          "Legal and regulatory reporting"
        ]
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default CybersecurityPage;