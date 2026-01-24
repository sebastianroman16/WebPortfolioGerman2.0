import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface DiplomaPdf {
  title: string;
  file: string;
  safeUrl: SafeResourceUrl;
}

@Component({
  selector: 'app-diplomas-section',
  standalone: true,
  templateUrl: './diplomas-section.html',
})
export class DiplomasSectionComponent {
  readonly diplomas: DiplomaPdf[];

  constructor(private sanitizer: DomSanitizer) {
    this.diplomas = [
      this.buildDiploma('High School Diploma - Middle Level Technician', '/PDFs/20260124172355.pdf'),
      this.buildDiploma('High School Diploma - English Translation', '/PDFs/20260124165817.pdf'),
      this.buildDiploma('Industrial Automation and Control Technician', '/PDFs/20260124170757.pdf'),
      this.buildDiploma('Technician Diploma - English Translation', '/PDFs/20260124170018.pdf'),
      this.buildDiploma('Valedictorian Diploma', '/PDFs/20260124172510.pdf'),
      this.buildDiploma('HVAC Technician Diploma', '/PDFs/20260124172758.pdf'),
    ];
  }

  private buildDiploma(title: string, file: string): DiplomaPdf {
    return {
      title,
      file,
      safeUrl: this.sanitizer.bypassSecurityTrustResourceUrl(file),
    };
  }
}
