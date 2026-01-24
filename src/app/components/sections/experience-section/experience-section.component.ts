import { Component, signal } from '@angular/core';

type ExperienceTrack = 'Work' | 'Education';

interface ExperienceEntry {
  title: string;
  period: string;
  details: string[];
}

@Component({
  selector: 'app-experience-section',
  standalone: true,
  templateUrl: './experience-section.html',
})
export class ExperienceSectionComponent {
  readonly activeTrack = signal<ExperienceTrack>('Work');

  readonly workExperience: ExperienceEntry[] = [
    {
      title: 'Student Assistant',
      period: 'September 2025 – Present',
      details: ['Robotics lab project development and assisting teaching in industrial engineering course.'],
    },
    {
      title: 'United AC',
      period: 'March 2019 – June 2022',
      details: ['Performed maintenance and repaired AC equipment.', 'Installed AC equipment.'],
    },
    {
      title: 'Polytechnic Institute of Tampa',
      period: 'August 2019 – July 2021',
      details: ['Taught students the basics of electricity and HVAC.'],
    },
    {
      title: 'Adecco',
      period: 'February 2018 – January 2019',
      details: ['Assembled transformers in ITI Facilities (General Electric).'],
    },
    {
      title: 'JELD-WEN Chile S.A.',
      period: 'January 2014 – February 2015',
      details: [
        'Performed maintenance and repaired industrial machinery.',
        'Designed and installed automated processes.',
      ],
    },
    {
      title: 'Transve S.A.',
      period: 'May 2013 – January 2014',
      details: ['Performed maintenance and repaired elevators.', 'Installed elevators.'],
    },
    {
      title: 'Sorena S.A.',
      period: 'January 2011 – March 2013',
      details: [
        'Performed maintenance and repaired industrial machinery.',
        'Designed and installed automated processes.',
      ],
    },
  ];

  readonly educationExperience: ExperienceEntry[] = [
    {
      title: 'University of South Florida',
      period: 'Expected December 2026',
      details: ['Bachelor of Science in Electrical Engineering'],
    },
    {
      title: 'Saint Petersburg College',
      period: 'December 2023',
      details: ['Associate in Arts'],
    },
    {
      title: 'Polytechnic Institute of Tampa',
      period: 'December 2018',
      details: ['HVAC Certified Technician'],
    },
    {
      title: 'INACAP',
      period: 'December 2013',
      details: ['Upper-Level Technician in Industrial Automation and Control'],
    },
  ];

  setTrack(track: ExperienceTrack) {
    this.activeTrack.set(track);
  }
}
