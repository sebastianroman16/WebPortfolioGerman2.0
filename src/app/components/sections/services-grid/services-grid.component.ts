import { Component } from '@angular/core';
import { ServiceCardComponent, ServiceIcon } from '../service-card/service-card.component';

interface ServiceItem {
  title: string;
  description: string;
  icon: ServiceIcon;
}

@Component({
  selector: 'app-services-grid',
  standalone: true,
  imports: [ServiceCardComponent],
  templateUrl: './services-grid.html',
})
export class ServicesGridComponent {
  readonly services: ServiceItem[] = [
    {
      title: 'Frontend Development',
      description: 'Responsive interfaces with Angular, Tailwind, and accessibility best practices.',
      icon: 'frontend',
    },
    {
      title: 'Backend Development',
      description: 'Reliable APIs, integrations, and data layers built with Node.js and modern stacks.',
      icon: 'backend',
    },
    {
      title: 'Mobile Development',
      description: 'Cross-platform mobile apps with smooth UX and scalable architecture.',
      icon: 'mobile',
    },
    {
      title: 'UI/UX Design',
      description: 'Design systems, wireframes, and prototypes that feel crisp and user-friendly.',
      icon: 'design',
    },
  ];
}
