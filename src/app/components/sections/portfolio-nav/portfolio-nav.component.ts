import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-portfolio-nav',
  standalone: true,
  templateUrl: './portfolio-nav.html',
})
export class PortfolioNavComponent {
  readonly links = ['About', 'Skills', 'Experience', 'Projects', 'Honor Society', 'Diplomas'];
  @Input() active = 'About';
  @Output() activeChange = new EventEmitter<string>();

  setActive(link: string) {
    this.activeChange.emit(link);
  }
}
