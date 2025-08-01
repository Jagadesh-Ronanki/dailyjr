"use client";

import { useState } from "react";
import { Service } from "@/config/services.config";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CreditCard, Check, BoxIcon, DonutIcon } from "lucide-react";
import ContactForm from "./contact-form";

interface ServicePackagesProps {
  service: Service;
}

export default function ServicePackages({ service }: ServicePackagesProps) {
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<{
    name: string;
    price: number;
  } | null>(null);

  const packages = [service.packages.basic, service.packages.standard, service.packages.premium];
  const packageTypes = ['basic', 'standard', 'premium'] as const;

  const handleGetStarted = (packageInfo: { name: string; price: number }) => {
    setSelectedPackage(packageInfo);
    setShowContactForm(true);
  };

  if (showContactForm) {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowContactForm(false)}
          >
            ← Back to Packages
          </Button>
        </div>
        <ContactForm 
          service={service}
          packageType={selectedPackage?.name}
          estimatedCost={selectedPackage?.price}
        />
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Fixed Price Packages</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Choose from our pre-defined packages or contact us for a custom solution tailored to your specific needs.
      </p>
      
      <div className="grid gap-4 md:grid-cols-3">
        {packages.map((pkg, index) => (
          <Card 
            key={packageTypes[index]} 
            className={`relative flex flex-col h-full ${index === 1 ? 'border-primary ring-2 ring-primary/20' : ''}`}
          >
            {index === 1 && (
              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary">
                Most Popular
              </Badge>
            )}
            <CardHeader>
              <CardTitle className="text-base">{pkg.name}</CardTitle>
              <div className="space-y-1">
                <div className="text-2xl font-bold">₹{pkg.price.toLocaleString('en-IN')}</div>
                <div className="text-sm text-muted-foreground">{pkg.duration}</div>
                <div className="text-xs text-muted-foreground">
                  ~{pkg.estimatedHours} hours total
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col flex-1 space-y-4">
              <ul className="space-y-2 flex-1">
                {pkg.features.map((feature, i) => (
                                    <li key={index} className="flex items-start gap-2 text-xs">
                    <Check size={12} className="text-green-500 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full mt-auto" 
                variant={index === 1 ? "default" : "outline"}
                onClick={() => handleGetStarted({ name: pkg.name, price: pkg.price })}
              >
                Get Started
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-8 space-y-6">
        {/* Package Benefits */}
        <div className="p-4 bg-muted rounded-lg">
          <h4 className="font-semibold mb-3 text-primary flex items-center gap-2">
            <DonutIcon size={16} />
            Package Benefits
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <Check size={14} className="text-green-500" />
              <span>Fixed scope and timeline for predictable delivery</span>
            </div>
            <div className="flex items-start gap-2">
              <Check size={14} className="text-green-500" />
              <span>All-inclusive pricing with no hidden costs</span>
            </div>
            <div className="flex items-start gap-2">
              <Check size={14} className="text-green-500" />
              <span>Regular progress updates and milestones</span>
            </div>
            <div className="flex items-start gap-2">
              <Check size={14} className="text-green-500" />
              <span>Post-launch support and maintenance included</span>
            </div>
            <div className="flex items-start gap-2">
              <Check size={14} className="text-green-500" />
              <span>Money-back guarantee if not satisfied</span>
            </div>
            <div className="flex items-start gap-2">
              <Check size={14} className="text-green-500" />
              <span>Free domain and hosting setup assistance</span>
            </div>
          </div>
        </div>

        {/* Payment Terms */}
        <div className="p-4 border rounded-lg">
          <h4 className="font-semibold mb-3 text-primary flex items-center gap-2">
            <CreditCard size={16} />
            Payment Terms
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="text-center p-4 border border-border/50 rounded-lg bg-gradient-to-br from-muted/20 to-muted/10 hover:border-border duration-200">
              <div className="font-semibold text-foreground">50% Advance</div>
              <div className="text-muted-foreground text-xs">Project kickoff</div>
            </div>
            <div className="text-center p-4 border border-border/50 rounded-lg bg-gradient-to-br from-muted/20 to-muted/10 hover:border-border duration-200">
              <div className="font-semibold text-foreground">25% Milestone</div>
              <div className="text-muted-foreground text-xs">50% completion</div>
            </div>
            <div className="text-center p-4 border border-border/50 rounded-lg bg-gradient-to-br from-muted/20 to-muted/10 hover:border-border duration-200">
              <div className="font-semibold text-foreground">25% Final</div>
              <div className="text-muted-foreground text-xs">Project delivery</div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            Flexible payment options available • UPI, Bank Transfer, International cards accepted
          </p>
        </div>

        {/* Custom Solution CTA */}
        <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
          <div className="text-center space-y-3">
            <h4 className="font-semibold text-primary">Need a Custom Solution?</h4>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Have unique requirements that don't fit our packages? We create custom solutions tailored to your specific needs and budget.
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSelectedPackage({ name: "Custom Solution", price: 0 });
                setShowContactForm(true);
              }}
            >
              Discuss Custom Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
