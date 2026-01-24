import { Component, Input } from '@angular/core';

export type ServiceIcon = 'frontend' | 'backend' | 'mobile' | 'design';

@Component({
  selector: 'app-service-card',
  standalone: true,
  templateUrl: './service-card.html',
})
export class ServiceCardComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
  @Input({ required: true }) icon!: ServiceIcon;
}
