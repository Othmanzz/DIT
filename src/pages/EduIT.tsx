import React from 'react';
import ServicePage from '../components/ServicePage';

const EduITPage = () => {
  const serviceData = {
    title: "EduIT Solutions",
    subtitle: "Transform education with cutting-edge technology",
    description: "Empower learning institutions with digital transformation, from smart classrooms to comprehensive learning management systems. Education is transforming rapidly, and institutions that fail to adapt risk falling behind.",
    heroImage: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
    
    services: [
      {
        title: "Learning Management Systems",
        description: "Deploy comprehensive platforms that support blended learning and enhance collaboration.",
        features: [
          "Moodle and Canvas implementation",
          "Custom LMS development",
          "Mobile learning applications", 
          "Content authoring tools",
          "Assessment and grading systems",
          "Student progress tracking"
        ]
      },
      {
        title: "Smart Classroom Technology",
        description: "Create engaging learning environments with interactive displays and collaboration tools.",
        features: [
          "Interactive whiteboards and displays",
          "Wireless presentation systems",
          "Classroom management software",
          "Virtual reality (VR) solutions",
          "Audio-visual system integration",
          "IoT-enabled classroom monitoring"
        ]
      },
      {
        title: "Student Information Systems",
        description: "Streamline administration with integrated systems that manage enrollment and communications.",
        features: [
          "Student enrollment management",
          "Grade and transcript management",
          "Parent-teacher communication portals",
          "Attendance tracking systems",
          "Library management integration",
          "Financial aid and billing systems"
        ]
      },
      {
        title: "Educational Analytics",
        description: "Improve outcomes with data-driven insights into student performance and engagement.",
        features: [
          "Learning analytics dashboards",
          "Student performance predictions",
          "Engagement monitoring tools",
          "Institutional effectiveness reports",
          "Custom reporting and visualization",
          "Early warning systems"
        ]
      }
    ],

    approach: [
      {
        step: 1,
        title: "Consult",
        description: "Understand pedagogical goals, assess current infrastructure, and identify technology enhancement opportunities."
      },
      {
        step: 2,
        title: "Implement",
        description: "Deploy solutions with minimal disruption to academic schedules, ensuring seamless integration with existing systems."
      },
      {
        step: 3,
        title: "Support",
        description: "Provide ongoing training and technical support for educators, students, and administrative staff."
      }
    ],

    caseStudy: {
      title: "University Enables Remote Learning for 25,000 Students",
      client: "King Saud University",
      challenge: "During the COVID-19 pandemic, a major Saudi university needed to rapidly transition 25,000 students and 2,000 faculty members to remote learning. Their existing systems couldn't handle the scale, and they needed a comprehensive solution within weeks.",
      solution: "DIT deployed a cloud-based LMS with video conferencing integration, mobile applications for students, virtual laboratory simulations, and comprehensive training programs for faculty. We also implemented analytics to monitor student engagement and learning outcomes.",
      results: [
        "Successfully transitioned 100% of courses online in 3 weeks",
        "Maintained 95% student engagement levels",
        "Zero system downtime during peak usage",
        "Faculty satisfaction increased by 40%",
        "Enabled continuation of education during lockdown"
      ],
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
    },

    specifications: [
      {
        category: "Learning Management",
        items: [
          "Moodle open-source platform",
          "Canvas by Instructure",
          "Microsoft Teams for Education",
          "Google Classroom integration",
          "Custom LMS development",
          "Mobile learning applications"
        ]
      },
      {
        category: "Classroom Technology",
        items: [
          "Interactive displays (SMART, Promethean)",
          "Wireless presentation systems",
          "Document cameras and visualizers",
          "Audio enhancement systems",
          "Video conferencing equipment",
          "Classroom IoT sensors"
        ]
      },
      {
        category: "Student Information Systems",
        items: [
          "PowerSchool SIS",
          "Skyward student management",
          "Custom SIS development",
          "Integration with national systems",
          "Mobile parent/student portals",
          "Gradebook and assessment tools"
        ]
      },
      {
        category: "Educational Analytics",
        items: [
          "Learning analytics platforms",
          "Student performance dashboards",
          "Predictive modeling tools",
          "Custom reporting solutions",
          "Data visualization tools",
          "Research and assessment platforms"
        ]
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default EduITPage;