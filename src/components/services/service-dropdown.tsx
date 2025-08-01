"use client";

import { Service } from "@/config/services.config";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ServiceDropdownProps {
  services: Service[];
  selectedService: Service;
  onServiceChange: (service: Service) => void;
}

export default function ServiceDropdown({ 
  services, 
  selectedService, 
  onServiceChange 
}: ServiceDropdownProps) {
  return (
    <Select
      value={selectedService.id}
      onValueChange={(value) => {
        const service = services.find(s => s.id === value);
        if (service) onServiceChange(service);
      }}
    >
      <SelectTrigger className="w-full">
        <SelectValue>
          <div className="flex items-center gap-2">
            <span>{selectedService.icon}</span>
            <span>{selectedService.name}</span>
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {services.map((service) => (
          <SelectItem key={service.id} value={service.id}>
            <div className="flex items-center gap-2">
              <span>{service.icon}</span>
              <span>{service.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
