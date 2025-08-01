export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
  pricing: {
    design: {
      hourlyRate: number;
      description: string;
      deliverables: string[];
    };
    copywriting: {
      hourlyRate: number;
      description: string;
      deliverables: string[];
    };
    development: {
      hourlyRate: number;
      description: string;
      deliverables: string[];
    };
    seo: {
      hourlyRate: number;
      description: string;
      deliverables: string[];
    };
  };
  packages: {
    basic: {
      name: string;
      price: number;
      duration: string;
      features: string[];
      estimatedHours: number;
    };
    standard: {
      name: string;
      price: number;
      duration: string;
      features: string[];
      estimatedHours: number;
    };
    premium: {
      name: string;
      price: number;
      duration: string;
      features: string[];
      estimatedHours: number;
    };
  };
}

export const servicesConfig: Service[] = [
  {
    id: "website-development",
    name: "Website Development",
    description: "Complete end-to-end website development from concept to deployment with modern tech stack and responsive design.",
    icon: "🌏︎",
    features: [
      "Custom Design & UI/UX",
      "Responsive Development",
      "SEO Optimization", 
      "Content Strategy",
      "Performance Optimization",
      "Analytics Integration"
    ],
    pricing: {
      design: {
        hourlyRate: 1800, // ₹1,800/hour - Reduced for testimonial building
        description: "Modern UI/UX Design, Mobile-First Approach, User Research",
        deliverables: [
          "User Research & Analysis",
          "Wireframes & Interactive Prototypes", 
          "Comprehensive Design System",
          "Responsive Layouts (Mobile/Tablet/Desktop)",
          "Brand Guidelines & Style Guide",
          "Usability Testing & Iteration"
        ]
      },
      copywriting: {
        hourlyRate: 1000, // ₹1,000/hour - Further reduced for testimonial building
        description: "Conversion-Focused Copy, SEO Content, Brand Voice Development",
        deliverables: [
          "Strategic Website Copy",
          "SEO-optimized Content Strategy",
          "High-Converting Call-to-Actions",
          "Meta Descriptions & Tags",
          "Content Calendar & Blog Strategy",
          "Brand Voice & Tone Guidelines"
        ]
      },
      development: {
        hourlyRate: 2200, // ₹2,200/hour - Reduced for testimonial building
        description: "Full-Stack Development, Modern Frameworks, API Integration",
        deliverables: [
          "Responsive Frontend (Next.js/React)",
          "Backend API Development",
          "Database Design & Optimization",
          "Third-party Integrations",
          "Comprehensive Testing & QA",
          "CI/CD Pipeline & Deployment",
          "Performance Optimization"
        ]
      },
      seo: {
        hourlyRate: 1200, // ₹1,200/hour - Further reduced for testimonial building
        description: "Technical SEO, Content Strategy, Performance Optimization",
        deliverables: [
          "Comprehensive SEO Audit",
          "Technical SEO Implementation",
          "On-page & Off-page Optimization",
          "Core Web Vitals Optimization",
          "Google Analytics & Search Console Setup",
          "Monthly SEO Reports & Monitoring",
          "Local SEO (if applicable)"
        ]
      }
    },
    packages: {
      basic: {
        name: "Starter Website",
        price: 25000, // ₹25,000 - Reduced for testimonial building
        duration: "2-3 weeks",
        features: [
          "5-page responsive website",
          "Modern UI/UX design",
          "Contact form integration",
          "Basic SEO optimization",
          "Mobile-first approach",
          "3 months free support & maintenance"
        ],
        estimatedHours: 16 // Total hours across all services
      },
      standard: {
        name: "Business Website",
        price: 45000, // ₹45,000 - Reduced for testimonial building
        duration: "4-6 weeks", 
        features: [
          "10-page responsive website",
          "Custom design system & branding",
          "CMS integration (easy content updates)",
          "Advanced SEO optimization",
          "Google Analytics & Search Console",
          "Contact forms & newsletter signup",
          "4 months free support & maintenance"
        ],
        estimatedHours: 30 // Total hours across all services
      },
      premium: {
        name: "Enterprise Website",
        price: 75000, // ₹75,000 - Reduced for testimonial building
        duration: "6-10 weeks",
        features: [
          "Unlimited pages & custom functionality",
          "Advanced animations & interactions",
          "E-commerce integration (if needed)",
          "Multi-language support",
          "Advanced SEO & performance optimization",
          "Custom admin dashboard",
          "Priority support & 6 months maintenance",
          "Monthly performance reports"
        ],
        estimatedHours: 55 // Total hours across all services
      }
    }
  },
  // TODO: Uncomment when ready to offer mobile app development services
  // {
  //   id: "mobile-app-development",
  //   name: "Mobile App Development",
  //   description: "Cross-platform mobile app development with React Native for both iOS and Android platforms.",
  //   icon: "📱",
  //   features: [
  //     "Cross-Platform Development",
  //     "Native Performance",
  //     "App Store Deployment",
  //     "Push Notifications",
  //     "Offline Functionality",
  //     "Backend Integration"
  //   ],
  //   pricing: {
  //     design: {
  //       hourlyRate: 3000, // ₹3,000/hour - Mobile UI/UX specialist
  //       description: "Mobile-First UI/UX, App Design Guidelines, User Experience",
  //       deliverables: [
  //         "Mobile App Wireframes",
  //         "UI/UX Design for iOS & Android",
  //         "App Icon & Splash Screens",
  //         "Interactive Prototypes",
  //         "App Store Screenshots",
  //         "Design Guidelines Documentation"
  //       ]
  //     },
  //     copywriting: {
  //       hourlyRate: 1800, // ₹1,800/hour - App store optimization copy
  //       description: "App Store Optimization, In-App Copy, Marketing Materials",
  //       deliverables: [
  //         "App Store Descriptions",
  //         "In-App Content & Copy",
  //         "Push Notification Templates",
  //         "App Marketing Copy",
  //         "User Onboarding Content",
  //         "Help & FAQ Content"
  //       ]
  //     },
  //     development: {
  //       hourlyRate: 4000, // ₹4,000/hour - Mobile app development
  //       description: "React Native Development, API Integration, App Store Deployment",
  //       deliverables: [
  //         "Cross-Platform App Development",
  //         "API Integration & Backend",
  //         "Push Notification Setup",
  //         "App Store Submission",
  //         "Testing on Real Devices",
  //         "Performance Optimization",
  //         "App Analytics Integration"
  //       ]
  //     },
  //     seo: {
  //       hourlyRate: 2200, // ₹2,200/hour - App Store Optimization
  //       description: "App Store Optimization (ASO), Keyword Research, Visibility",
  //       deliverables: [
  //         "App Store Keyword Research",
  //         "ASO Strategy & Implementation",
  //         "App Store Listing Optimization",
  //         "Competitor Analysis",
  //         "App Performance Monitoring",
  //         "Review Management Strategy"
  //       ]
  //     }
  //   },
  //   packages: {
  //     basic: {
  //       name: "Simple Mobile App",
  //       price: 85000, // ₹85,000
  //       duration: "4-6 weeks",
  //       features: [
  //         "5-screen mobile app",
  //         "Basic UI/UX design",
  //         "User authentication",
  //         "Basic API integration",
  //         "App store submission",
  //         "2 months support"
  //       ],
  //       estimatedHours: 25
  //     },
  //     standard: {
  //       name: "Business Mobile App",
  //       price: 150000, // ₹1,50,000
  //       duration: "6-8 weeks",
  //       features: [
  //         "10-screen mobile app",
  //         "Custom design & animations",
  //         "Push notifications",
  //         "Offline functionality",
  //         "Payment integration",
  //         "Analytics & crashlytics",
  //         "3 months support"
  //       ],
  //       estimatedHours: 40
  //     },
  //     premium: {
  //       name: "Enterprise Mobile App",
  //       price: 250000, // ₹2,50,000
  //       duration: "8-12 weeks",
  //       features: [
  //         "Unlimited screens & features",
  //         "Advanced UI/UX & animations",
  //         "Real-time features",
  //         "Advanced security",
  //         "Custom backend integration",
  //         "App store optimization",
  //         "6 months priority support"
  //       ],
  //       estimatedHours: 65
  //     }
  //   }
  // },
  {
    id: "ecommerce-development",
    name: "E-commerce Development",
    description: "Complete e-commerce solution with payment integration, inventory management, and modern shopping experience.",
    icon: "◫",
    features: [
      "Payment Gateway Integration",
      "Inventory Management",
      "Order Management",
      "Customer Dashboard",
      "Admin Panel",
      "SEO Optimized"
    ],
    pricing: {
      design: {
        hourlyRate: 2000, // ₹2,000/hour - Reduced for testimonial building
        description: "E-commerce UI/UX, Conversion Optimization, Shopping Experience",
        deliverables: [
          "E-commerce User Journey",
          "Product Page Designs",
          "Checkout Flow Optimization",
          "Mobile Shopping Experience",
          "Admin Dashboard Design",
          "Conversion-Focused Layouts"
        ]
      },
      copywriting: {
        hourlyRate: 1200, // ₹1,200/hour - Further reduced for testimonial building
        description: "Product Descriptions, Sales Copy, Email Marketing Content",
        deliverables: [
          "Product Descriptions",
          "Category Page Content",
          "Sales & Marketing Copy",
          "Email Templates",
          "Cart Abandonment Copy",
          "SEO Product Content"
        ]
      },
      development: {
        hourlyRate: 2800, // ₹2,800/hour - Reduced for testimonial building
        description: "Full E-commerce Development, Payment Integration, Admin Panel",
        deliverables: [
          "Complete E-commerce Platform",
          "Payment Gateway Integration",
          "Inventory Management System",
          "Order Management",
          "Customer & Admin Dashboards",
          "Security & PCI Compliance",
          "Third-party Integrations"
        ]
      },
      seo: {
        hourlyRate: 1400, // ₹1,400/hour - Further reduced for testimonial building
        description: "E-commerce SEO, Product Optimization, Schema Markup",
        deliverables: [
          "E-commerce SEO Strategy",
          "Product Schema Markup",
          "Category Page Optimization",
          "Technical E-commerce SEO",
          "Shopping Feed Optimization",
          "Performance Monitoring"
        ]
      }
    },
    packages: {
      basic: {
        name: "Starter E-commerce",
        price: 60000, // ₹60,000 - Reduced for testimonial building
        duration: "6-8 weeks",
        features: [
          "Up to 50 products",
          "Basic e-commerce design",
          "Payment gateway integration",
          "Basic inventory management",
          "Customer registration",
          "Order management",
          "4 months support"
        ],
        estimatedHours: 35
      },
      standard: {
        name: "Business E-commerce",
        price: 100000, // ₹1,00,000 - Reduced for testimonial building
        duration: "8-10 weeks",
        features: [
          "Up to 500 products",
          "Custom e-commerce design",
          "Multiple payment options",
          "Advanced inventory management",
          "Customer & admin dashboards",
          "Email automation",
          "SEO optimization",
          "5 months support"
        ],
        estimatedHours: 55
      },
      premium: {
        name: "Enterprise E-commerce",
        price: 175000, // ₹1,75,000 - Reduced for testimonial building
        duration: "10-14 weeks",
        features: [
          "Unlimited products",
          "Custom features & integrations",
          "Multi-vendor support",
          "Advanced analytics",
          "Marketing automation",
          "Multi-language support",
          "Advanced SEO & performance",
          "6 months priority support"
        ],
        estimatedHours: 85
      }
    }
  }
];

// Calculator configuration
export const calculatorConfig = {
  defaultHours: {
    design: 10,
    copywriting: 6,
    development: 15,
    seo: 8
  },
  minHours: {
    design: 5,
    copywriting: 0,
    development: 10,
    seo: 0
  },
  maxHours: {
    design: 50,
    copywriting: 25,
    development: 80,
    seo: 40
  },
  promises: {
    design: [
      "Mobile-first responsive design guaranteed",
      "Modern UI/UX following latest trends",
      "Cross-browser & device compatibility tested",
      "Design system & component library",
      "Figma files & design documentation",
      "Unlimited revisions during design phase"
    ],
    copywriting: [
      "SEO-optimized content with keyword research",
      "Conversion-focused copy with A/B testing insights",
      "Brand voice consistency across all content",
      "Competitor analysis and market research",
      "Content calendar and strategy documentation",
      "Plagiarism-free, original content guaranteed"
    ],
    development: [
      "Clean, maintainable, and documented code",
      "99.9% uptime and performance optimized",
      "Security best practices implemented",
      "Cross-platform compatibility guaranteed",
      "Automated testing and CI/CD pipeline",
      "Code reviews and quality assurance",
      "Post-launch support and maintenance"
    ],
    seo: [
      "Improved search rankings within 3-6 months",
      "Technical SEO compliance (100% audit score)",
      "Page speed optimization (90+ PageSpeed score)",
      "Google Analytics & Search Console setup",
      "Monthly SEO reports and recommendations",
      "Local SEO optimization (if applicable)",
      "Schema markup implementation"
    ]
  }
};
