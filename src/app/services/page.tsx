import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import ServicesContent from "@/components/services/services-content";
import Link from "next/link";
import { ArrowLeft, Target, RotateCcw, Building2, DollarSign, Code2, Gauge, Search, Settings, Award, ShoppingCart, Heart, BookOpen, Wallet, Home, Utensils, Monitor, Users, FileSearch, Palette, TestTube, Headphones } from "lucide-react";

export const metadata: Metadata = {
  title: `Services | ${siteConfig.name}`,
  description: "Professional web development services including custom design, development, copywriting, and SEO optimization. Get transparent pricing and quality results.",
  openGraph: {
    title: `Services | ${siteConfig.name}`,
    description: "Professional web development services including custom design, development, copywriting, and SEO optimization. Get transparent pricing and quality results.",
    type: "website",
    url: `${siteConfig.siteUrl}/services`,
  },
  twitter: {
    card: "summary_large_image",
    title: `Services | ${siteConfig.name}`,
    description: "Professional web development services including custom design, development, copywriting, and SEO optimization. Get transparent pricing and quality results.",
  },
};

export default function ServicesPage() {
  return (
    <main className="relative w-full lg:h-screen p-0 sm:p-5">
      <div className="w-full h-full rounded-2xl sm:border flex flex-wrap justify-between lg:divide-x">
        <div className="relative w-full lg:w-2/5 p-2 md:p-8 lg:h-full lg:overflow-y-scroll">
          <div className="flex justify-between mb-6">
            <Link href="/" className="group/back text-xs">
              <ArrowLeft size={18} />
              <span className="sr-only">jagadeshronanki.com</span>
            </Link>
          </div>
          <div className="space-y-8">
            <div>
              <h1 className="head-text-sm mb-4">Professional Services</h1>
              <p className="text-muted-foreground">
                End-to-end web development services with transparent pricing. 
                Quality work, on-time delivery, and clear communication guaranteed.
              </p>
            </div>
            
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
            
            <div className="space-y-4">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                Why Choose Our Services?
              </h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3 p-3 rounded-lg border border-border/30 hover:border-border/60 group">
                  <DollarSign size={16} className="mt-1 text-muted-foreground" />
                  <div>
                    <div className="font-medium text-foreground">Transparent Pricing</div>
                    <div className="text-muted-foreground">No hidden costs, competitive rates based on current Indian market standards</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg border border-border/30 hover:border-border/60 group">
                  <Code2 size={16} className="mt-1 text-muted-foreground" />
                  <div>
                    <div className="font-medium text-foreground">Modern Tech Stack</div>
                    <div className="text-muted-foreground">Latest frameworks and best practices for future-proof solutions</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg border border-border/30 hover:border-border/60 group">
                  <Gauge size={16} className="mt-1 text-muted-foreground" />
                  <div>
                    <div className="font-medium text-foreground">Performance Focused</div>
                    <div className="text-muted-foreground">90+ PageSpeed scores and optimized user experiences</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg border border-border/30 hover:border-border/60 group">
                  <Search size={16} className="mt-1 text-muted-foreground" />
                  <div>
                    <div className="font-medium text-foreground">SEO Optimized</div>
                    <div className="text-muted-foreground">Built for search engines with proven ranking improvements</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg border border-border/30 hover:border-border/60 group">
                  <Settings size={16} className="mt-1 text-muted-foreground" />
                  <div>
                    <div className="font-medium text-foreground">Post-Launch Support</div>
                    <div className="text-muted-foreground">Ongoing maintenance and updates included</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg border border-border/30 hover:border-border/60 group">
                  <Award size={16} className="mt-1 text-muted-foreground" />
                  <div>
                    <div className="font-medium text-foreground">Quality Guarantee</div>
                    <div className="text-muted-foreground">100% satisfaction or money-back guarantee</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                Our Process
              </h2>
                            <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3 p-3 rounded-lg border border-border/30 hover:border-border/60 group">
                  <FileSearch size={16} className="mt-1 text-muted-foreground" />
                  <div>
                    <div className="font-medium text-foreground">Discovery & Planning</div>
                    <div className="text-muted-foreground">Understanding your requirements and target audience</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg border border-border/30 hover:border-border/60 group">
                  <Palette size={16} className="mt-1 text-muted-foreground" />
                  <div>
                    <div className="font-medium text-foreground">Design & Wireframing</div>
                    <div className="text-muted-foreground">Creating mockups and user interface designs</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg border border-border/30 hover:border-border/60 group">
                  <Code2 size={16} className="mt-1 text-muted-foreground" />
                  <div>
                    <div className="font-medium text-foreground">Development</div>
                    <div className="text-muted-foreground">Building with modern frameworks and best practices</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg border border-border/30 hover:border-border/60 group">
                  <TestTube size={16} className="mt-1 text-muted-foreground" />
                  <div>
                    <div className="font-medium text-foreground">Testing & Launch</div>
                    <div className="text-muted-foreground">Quality assurance and deployment to production</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg border border-border/30 hover:border-border/60 group">
                  <Headphones size={16} className="mt-1 text-muted-foreground" />
                  <div>
                    <div className="font-medium text-foreground">Support & Maintenance</div>
                    <div className="text-muted-foreground">Ongoing updates and technical support</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                Industries We Serve
              </h2>
              <div className="grid grid-cols-2 gap-3 text-xs">
                {[
                  { name: "E-commerce & Retail", icon: ShoppingCart },
                  { name: "Healthcare & Medical", icon: Heart },
                  { name: "Education & Training", icon: BookOpen },
                  { name: "Finance & Fintech", icon: Wallet },
                  { name: "Real Estate", icon: Home },
                  { name: "Restaurants & Food", icon: Utensils },
                  { name: "Technology & SaaS", icon: Monitor },
                  { name: "Non-profit & NGO", icon: Users }
                ].map((industry, index) => {
                  const IconComponent = industry.icon;
                  return (
                    <div key={index} className="flex items-center gap-2 p-3 bg-muted/30 rounded-lg text-center hover:bg-muted/50 duration-200">
                      <IconComponent size={16}  />
                      <span className="text-xs font-medium">{industry.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

            <div className="relative p-6 border border-border/50 rounded-xl bg-gradient-to-br from-muted/20 to-muted/10 overflow-hidden hover:border-border duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 hover:opacity-100 duration-300"></div>
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="font-semibold text-foreground">Free Consultation</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Not sure which service you need? Schedule a free 30-minute consultation 
                  to discuss your project and get expert recommendations.
                </p>
                <div className="mt-4 flex items-center text-xs text-muted-foreground/80">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Available within 24 hours
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full lg:w-3/5 p-2 md:p-8 lg:h-full lg:overflow-y-scroll">
          <ServicesContent />
        </div>
      </div>
    </main>
  );
}
