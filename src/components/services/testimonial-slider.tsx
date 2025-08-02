"use client";

import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { testimonialsConfig } from "@/config/testimonials.config";

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToProject = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = 320; // w-80 = 320px
      const gap = 24; // gap-6 = 24px
      const scrollPosition = index * (cardWidth + gap);
      scrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const cardWidth = 320;
      const gap = 24;
      const scrollLeft = scrollRef.current.scrollLeft;
      const newIndex = Math.round(scrollLeft / (cardWidth + gap));
      setCurrentIndex(Math.min(newIndex, testimonialsConfig.length - 1));
    }
  };

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Our Recent Work</h3>
        <p className="text-muted-foreground">
          Explore some of the projects we&apos;ve delivered for our clients
        </p>
      </div>
      
      <div className="overflow-x-auto" ref={scrollRef} onScroll={handleScroll}>
        <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
          {testimonialsConfig.map((testimonial, index) => (
            <div key={index} className="flex-shrink-0 space-y-4">
              <Card className="w-80 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
                    <iframe
                      src={testimonial.url}
                      className="w-full h-full rounded-t-lg border-0"
                      loading="lazy"
                      title={testimonial.title}
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-lg mb-2">{testimonial.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      {testimonial.description}
                    </p>
                    
                    <div className="grid grid-cols-1 gap-2 mb-4 text-xs">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Pricing:</span>
                        <span className="font-medium">{testimonial.pricing}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Impact:</span>
                        <span className="font-medium text-green-600">{testimonial.impact}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Timeline:</span>
                        <span className="font-medium">{testimonial.timeline}</span>
                      </div>
                    </div>
                    
                    <a
                      href={testimonial.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      View Project <ExternalLink size={14} />
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="w-80 p-4">
                <CardContent className="p-0 h-full flex flex-col justify-between">
                  <p className="text-sm text-muted-foreground italic mb-3">
                    &ldquo;{testimonial.testimonial}&rdquo;
                  </p>
                  <div>
                    <p className="font-medium text-sm">{testimonial.client}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-6 gap-2">
        {testimonialsConfig.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToProject(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
