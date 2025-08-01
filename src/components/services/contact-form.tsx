"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Service } from "@/config/services.config";

interface ContactFormProps {
  service: Service;
  packageType?: string;
  estimatedCost?: number;
}

export default function ContactForm({ service, packageType, estimatedCost }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    phone: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = `${service.name} Inquiry${packageType ? ` - ${packageType} Package` : ''}`;
    const body = `
Hi,

I'm interested in your ${service.name} service${packageType ? ` (${packageType} package)` : ''}.

Here are my details:
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not specified'}
Phone: ${formData.phone || 'Not provided'}

Project Requirements:
${formData.message}

Project Details:
${estimatedCost ? `Estimated Budget: ₹${estimatedCost.toLocaleString('en-IN')}` : ''}
${packageType ? `Package: ${packageType}` : ''}

Please get back to me with more details.

Best regards,
${formData.name}
    `.trim();

    const mailtoLink = `mailto:contact@jagadeshronanki.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <Card className="border-green-200 bg-green-50">
        <CardContent className="p-6 text-center">
          <div className="text-green-600 text-2xl mb-2">✅</div>
          <h3 className="font-semibold text-green-800 mb-2">Thank you for your interest!</h3>
          <p className="text-sm text-green-700">
            Your email client should have opened with a pre-filled message. 
            If not, please email us directly at contact@jagadeshronanki.com
          </p>
          <Button 
            variant="outline" 
            size="sm" 
            className="mt-4"
            onClick={() => setIsSubmitted(false)}
          >
            Send Another Inquiry
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Mail size={20} /> 
          Get Started with {service.name}
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Fill out the form below and we&apos;ll get back to you within 24 hours with a detailed proposal.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Your full name"
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="company">Company/Organization</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Your company name"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="message">Project Details *</Label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              placeholder="Tell us about your project, timeline, specific requirements, and any questions you have..."
              className="w-full min-h-[100px] p-3 border rounded-md resize-none"
            />
          </div>

          {packageType && (
            <div className="p-3 bg-muted rounded-lg text-sm">
              <p><strong>Selected Package:</strong> {packageType}</p>
              {estimatedCost && (
                <p><strong>Estimated Cost:</strong> ₹{estimatedCost.toLocaleString('en-IN')}</p>
              )}
            </div>
          )}

          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Send Inquiry & Get Quote"}
          </Button>

          <div className="text-xs text-muted-foreground text-center space-y-1">
            <p>- We&apos;ll respond within 24 hours -</p>
            <p>- Free consultation and project analysis -</p>
            <p>- No obligation detailed proposal -</p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
