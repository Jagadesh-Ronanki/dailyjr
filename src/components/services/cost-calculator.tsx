"use client";

import { useState, useEffect } from "react";
import { Service, calculatorConfig } from "@/config/services.config";
import { siteConfig } from "@/config/site.config";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Palette, PenTool, Code, TrendingUp, Check } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";
import { useTheme } from "next-themes";

interface CostCalculatorProps {
  service: Service;
}

export default function CostCalculator({ service }: CostCalculatorProps) {
  const { theme } = useTheme();

  const [hours, setHours] = useState({
    design: calculatorConfig.defaultHours.design,
    copywriting: calculatorConfig.defaultHours.copywriting,
    development: calculatorConfig.defaultHours.development,
    seo: calculatorConfig.defaultHours.seo,
  });

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "service-call" });
      cal("ui", {
        theme: theme === "dark" ? "dark" : "light",
        cssVarsPerTheme: {
          dark: { "--brand-color": "#000000" },
          light: { "--brand-color": "#ffffff" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, [theme]);

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
        <CardHeader className="text-center pb-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <CardTitle className="text-xl">Project Estimate</CardTitle>
            <Badge className="bg-primary">Custom Quote</Badge>
          </div>
          <div className="text-4xl font-bold text-primary">₹{totalCost.toLocaleString('en-IN')}</div>
          <div className="text-sm text-muted-foreground">Total Project Cost</div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Project Stats Grid */}
          <div className="grid grid-cols-2 gap-4 p-4 border rounded-lg bg-secondary dark:bg-primary-foreground">
            <div className="text-center">
              <div className="text-2xl font-semibold text-foreground">{totalHours}</div>
              <div className="text-xs text-muted-foreground">Total Hours</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-foreground">{Math.ceil(totalHours / 8)}</div>
              <div className="text-xs text-muted-foreground">Working Days</div>
            </div>
          </div>

          {/* Service Breakdown */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-center">Cost Breakdown</h4>
            <div className="space-y-2">
              {serviceTypes.map(({ key, label, icon: Icon }) => (
                hours[key] > 0 && (
                  <div key={key} className="flex items-center justify-between p-2 border rounded">
                    <div className="flex items-center gap-2">
                      <Icon size={14} className="text-muted-foreground" />
                      <span className="text-sm">{label}</span>
                      <span className="text-xs text-muted-foreground">({hours[key]}h)</span>
                    </div>
                    <div className="text-sm font-medium">₹{calculateCost(key).toLocaleString('en-IN')}</div>
                  </div>
                )
              ))}
            </div>
          </div>

          {/* Terms */}
          <div className="text-center p-3 border rounded-lg">
            <div className="text-xs text-muted-foreground space-y-1">
              <p>- {Math.ceil(totalHours / 8)} working days -</p>
              <p>- 50% advance • 50% on completion -</p>
              <p>- Final quote may vary based on specific requirements -</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 text-center space-y-3">
        <p className="text-sm text-muted-foreground">
          Ready to get started with your project?
        </p>
        <div className="flex gap-2 justify-center">
          <a
            href={`mailto:${siteConfig.contact.email}?subject=Quote Request for ${service.name}&body=Hi, I'm interested in ${service.name}. Based on the calculator, my project estimate is ₹${totalCost.toLocaleString('en-IN')} for ${totalHours} hours. Please provide a detailed quote.`}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90 transition-colors"
          >
            Request Quote
          </a>
          <button
            data-cal-namespace="service-call"
            data-cal-link={siteConfig.contact.cal}
            data-cal-config='{"layout":"month_view"}'
            className="px-4 py-2 border rounded-md text-sm hover:bg-secondary transition-colors"
          >
            Schedule Call
          </button>
        </div>
      </div>
    </div>
  );
}
