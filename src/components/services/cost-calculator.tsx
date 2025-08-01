"use client";

import { useState } from "react";
import { Service, calculatorConfig } from "@/config/services.config";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Palette, PenTool, Code, TrendingUp, Check } from "lucide-react";

interface CostCalculatorProps {
  service: Service;
}

export default function CostCalculator({ service }: CostCalculatorProps) {
  const [hours, setHours] = useState({
    design: calculatorConfig.defaultHours.design,
    copywriting: calculatorConfig.defaultHours.copywriting,
    development: calculatorConfig.defaultHours.development,
    seo: calculatorConfig.defaultHours.seo,
  });

  const serviceTypes = [
    { key: 'design' as const, label: 'Design', icon: Palette },
    { key: 'copywriting' as const, label: 'Copywriting', icon: PenTool },
    { key: 'development' as const, label: 'Development', icon: Code },
    { key: 'seo' as const, label: 'SEO', icon: TrendingUp },
  ];

  const calculateCost = (type: keyof typeof hours) => {
    return hours[type] * service.pricing[type].hourlyRate;
  };

  const totalCost = Object.keys(hours).reduce((total, type) => {
    return total + calculateCost(type as keyof typeof hours);
  }, 0);

  const totalHours = Object.values(hours).reduce((total, hour) => total + hour, 0);

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Custom Cost Calculator</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Adjust the hours for each service to get a custom quote based on current market rates in India.
      </p>

      <div className="space-y-6">
        {serviceTypes.map(({ key, label, icon: Icon }) => (
          <Card key={key}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base flex items-center gap-2">
                  <Icon size={18} />
                  <span>{label}</span>
                </CardTitle>
                <div className="text-right">
                  <div className="font-semibold">₹{calculateCost(key).toLocaleString('en-IN')}</div>
                  <div className="text-xs text-muted-foreground">
                    ₹{service.pricing[key].hourlyRate}/hr
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Hours: {hours[key]}</span>
                  <span className="text-muted-foreground">
                    Max: {calculatorConfig.maxHours[key]}
                  </span>
                </div>
                <Slider
                  value={[hours[key]]}
                  onValueChange={(value: number[]) => 
                    setHours(prev => ({ ...prev, [key]: value[0] }))
                  }
                  max={calculatorConfig.maxHours[key]}
                  min={calculatorConfig.minHours[key]}
                  step={1}
                  className="w-full"
                />
              </div>
              
              <div>
                <p className="text-sm font-medium mb-2">{service.pricing[key].description}</p>
                <div className="flex flex-wrap gap-1">
                  {service.pricing[key].deliverables.slice(0, 3).map((deliverable, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {deliverable}
                    </Badge>
                  ))}
                  {service.pricing[key].deliverables.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{service.pricing[key].deliverables.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>

              <div>
                <p className="text-xs font-medium mb-2">Our Promises:</p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  {calculatorConfig.promises[key].slice(0, 2).map((promise, i) => (
                    <li key={i} className="flex items-start gap-1">
                      <Check size={12} className="text-green-500 mt-0.5" />
                      <span>{promise}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-6" />

      {/* Total Summary */}
      <Card className="border-primary">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CardTitle>Project Estimate</CardTitle>
              <Badge className="bg-primary">Custom Quote</Badge>
            </div>
            <div className="flex gap-6 text-sm">
              <div className="text-right">
                <div className="text-muted-foreground">Total Hours:</div>
                <div className="font-semibold">{totalHours} hours</div>
              </div>
              <div className="text-right">
                <div className="text-muted-foreground">Estimated Duration:</div>
                <div className="font-semibold">
                  {Math.ceil(totalHours / 8)} working days
                </div>
              </div>
            </div>
          </div>
        </CardHeader>

        <Separator className="w-[95%] mx-auto mb-6"/>

        <CardContent className="space-y-4">
          <div className="text-center">
            <div className="text-2xl font-bold">₹{totalCost.toLocaleString('en-IN')}</div>
            <div className="text-sm text-muted-foreground">Total Project Cost</div>
          </div>

          <div className="text-xs text-muted-foreground text-center space-y-1">
            <p>• Prices based on current market rates in India •</p>
            <p>• Final quote may vary based on specific requirements •</p>
            <p>• 50% advance payment, 50% on completion •</p>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 text-center space-y-3">
        <p className="text-sm text-muted-foreground">
          Ready to get started with your project?
        </p>
        <div className="flex gap-2 justify-center">
          <a
            href={`mailto:contact@example.com?subject=Quote Request for ${service.name}&body=Hi, I'm interested in ${service.name}. Based on the calculator, my project estimate is ₹${totalCost.toLocaleString('en-IN')} for ${totalHours} hours. Please provide a detailed quote.`}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90 transition-colors"
          >
            Request Quote
          </a>
          <a
            href="https://cal.com/your-profile"
            target="_blank"
            className="px-4 py-2 border rounded-md text-sm hover:bg-secondary transition-colors"
          >
            Schedule Call
          </a>
        </div>
      </div>
    </div>
  );
}
