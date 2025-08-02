"use client";

import { useState } from "react";
import { servicesConfig } from "@/config/services.config";
import ServiceDropdown from "./service-dropdown";
import CostCalculator from "./cost-calculator";
import ServicePackages from "./service-packages";
import TestimonialSlider from "./testimonial-slider";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default function ServicesContent() {
  const [selectedService, setSelectedService] = useState(servicesConfig[0]);

  return (
    <div className="space-y-8">
      {/* Service Selection Dropdown */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Choose a Service</h2>
        <ServiceDropdown 
          services={servicesConfig}
          selectedService={selectedService}
          onServiceChange={setSelectedService}
        />
      </div>

      <Separator />

      {/* Service Details */}
      <div>
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              {selectedService.icon} {selectedService.name}
            </h3>
            <p className="text-muted-foreground mb-4">{selectedService.description}</p>
          </div>
          <Badge variant="secondary" className="ml-4">
            {selectedService.features.length} Features
          </Badge>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-6">
          {selectedService.features.map((feature, index) => (
            <div 
              key={index} 
              className="text-xs px-3 py-2 bg-secondary rounded-md text-center font-medium"
            >
              {feature}
            </div>
          ))}
        </div>

        {/* Pricing Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 bg-muted/30 rounded-lg">
          <div className="text-center">
            <div className="text-sm font-medium text-muted-foreground">Design</div>
            <div className="font-semibold">₹{selectedService.pricing.design.hourlyRate}/hr</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-medium text-muted-foreground">Copywriting</div>
            <div className="font-semibold">₹{selectedService.pricing.copywriting.hourlyRate}/hr</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-medium text-muted-foreground">Development</div>
            <div className="font-semibold">₹{selectedService.pricing.development.hourlyRate}/hr</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-medium text-muted-foreground">SEO</div>
            <div className="font-semibold">₹{selectedService.pricing.seo.hourlyRate}/hr</div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Recent Work / Testimonials */}
      <TestimonialSlider />

      <Separator />

      {/* Service Packages */}
      <ServicePackages service={selectedService} />

      <Separator />

      {/* Cost Calculator */}
      <CostCalculator service={selectedService} />
    </div>
  );
}
