import { Component, signal } from '@angular/core';
import { AboutSectionComponent } from '../sections/about-section/about-section.component';
import { DiplomasSectionComponent } from '../sections/diplomas-section/diplomas-section.component';
import { ExperienceSectionComponent } from '../sections/experience-section/experience-section.component';
import { PortfolioNavComponent } from '../sections/portfolio-nav/portfolio-nav.component';
import { ProfileCardComponent } from '../sections/profile-card/profile-card.component';
import { ProjectsComponent } from '../sections/projects/projects.component';
import { SkillsSectionComponent } from '../sections/skills-section/skills-section.component';

@Component({
  selector: 'app-card-presentation',
  standalone: true,
  imports: [
    AboutSectionComponent,
    DiplomasSectionComponent,
    ExperienceSectionComponent,
    PortfolioNavComponent,
    ProfileCardComponent,
    ProjectsComponent,
    SkillsSectionComponent,
  ],
  templateUrl: './card-presentation.html',
  styleUrl: './card-presentation.scss',
})
export class CardPresentation {
  readonly activeSection = signal('About');
}
