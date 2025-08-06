import React from 'react';
import ServicePage from '../components/ServicePage';

const CloudDevOpsPage = () => {
  const serviceData = {
    title: "Cloud & DevOps Solutions",
    subtitle: "Accelerate innovation with modern infrastructure",
    description: "Accelerate innovation with scalable cloud infrastructure and automated deployment pipelines that reduce time-to-market. Modern businesses need the agility, scalability, and efficiency that only cloud and DevOps can deliver.",
    heroImage: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=800",
    
    services: [
      {
        title: "Cloud Migration & Architecture",
        description: "Move to the cloud confidently with strategic migration plans that minimize risk and maximize benefits.",
        features: [
          "Cloud readiness assessment",
          "Migration strategy and planning",
          "AWS, Azure, Google Cloud expertise",
          "Hybrid and multi-cloud solutions",
          "Cost optimization strategies",
          "Security and compliance planning"
        ]
      },
      {
        title: "Infrastructure as Code",
        description: "Automate infrastructure provisioning and management for consistency, speed, and reduced human error.",
        features: [
          "Terraform and CloudFormation",
          "Automated provisioning",
          "Infrastructure version control",
          "Environment standardization",
          "Configuration management",
          "Infrastructure monitoring"
        ]
      },
      {
        title: "CI/CD Pipeline Development",
        description: "Accelerate software delivery with automated build, test, and deployment pipelines.",
        features: [
          "Jenkins, GitLab CI, Azure DevOps",
          "Automated testing integration",
          "Code quality gates",
          "Deployment automation",
          "Rollback strategies",
          "Performance monitoring"
        ]
      },
      {
        title: "Container Orchestration",
        description: "Leverage Kubernetes and containerization for scalable, portable applications that run anywhere.",
        features: [
          "Docker containerization",
          "Kubernetes orchestration",
          "Service mesh implementation",
          "Auto-scaling configuration",
          "Load balancing and routing",
          "Container security scanning"
        ]
      }
    ],

    approach: [
      {
        step: 1,
        title: "Strategize",
        description: "Assess current workloads, design optimal cloud architecture, and create a comprehensive migration roadmap."
      },
      {
        step: 2,
        title: "Migrate",
        description: "Execute phased migration with minimal disruption, implementing best practices for security and performance."
      },
      {
        step: 3,
        title: "Optimize", 
        description: "Continuously improve performance, cost-efficiency, and automation through monitoring and optimization."
      }
    ],

    caseStudy: {
      title: "E-commerce Platform Scales to Black Friday Traffic",
      client: "Saudi E-commerce Leader",
      challenge: "A major Saudi e-commerce platform was struggling with traffic spikes during peak shopping periods like Black Friday and Ramadan. Their traditional infrastructure couldn't scale quickly enough, leading to site crashes and lost revenue during critical sales periods.",
      solution: "DIT designed and implemented a cloud-native architecture on AWS with auto-scaling containers, implemented CI/CD pipelines for rapid deployments, and created infrastructure as code for consistent environments. We also implemented advanced monitoring and automated incident response.",
      results: [
        "Handled 10x traffic increase without downtime",
        "50% faster deployment cycles", 
        "70% reduction in infrastructure costs",
        "99.99% uptime during peak shopping events",
        "Automated scaling reduced manual intervention by 90%"
      ],
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800"
    },

    specifications: [
      {
        category: "Cloud Platforms",
        items: [
          "Amazon Web Services (AWS)",
          "Microsoft Azure",
          "Google Cloud Platform (GCP)",
          "Oracle Cloud Infrastructure",
          "IBM Cloud solutions",
          "Hybrid cloud architectures"
        ]
      },
      {
        category: "Containerization",
        items: [
          "Docker container technology",
          "Kubernetes orchestration",
          "OpenShift enterprise platform",
          "Docker Swarm clustering",
          "Container registry management",
          "Service mesh (Istio, Linkerd)"
        ]
      },
      {
        category: "CI/CD Tools",
        items: [
          "Jenkins automation server",
          "GitLab CI/CD pipelines",
          "Azure DevOps Services",
          "GitHub Actions workflows",
          "TeamCity build management",
          "Spinnaker deployment platform"
        ]
      },
      {
        category: "Infrastructure as Code",
        items: [
          "Terraform multi-cloud provisioning",
          "AWS CloudFormation templates",
          "Azure Resource Manager (ARM)",
          "Google Cloud Deployment Manager",
          "Ansible configuration management",
          "Pulumi modern infrastructure"
        ]
      },
      {
        category: "Monitoring & Observability", 
        items: [
          "Prometheus and Grafana",
          "AWS CloudWatch monitoring",
          "Azure Monitor and Log Analytics",
          "Google Cloud Operations Suite",
          "ELK Stack (Elasticsearch, Logstash, Kibana)",
          "Datadog application monitoring"
        ]
      },
      {
        category: "Security & Compliance",
        items: [
          "Cloud security posture management",
          "Identity and access management (IAM)",
          "Network security and firewalls",
          "Data encryption in transit and at rest",
          "Compliance automation (SOC 2, ISO 27001)",
          "Vulnerability scanning and assessment"
        ]
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default CloudDevOpsPage;