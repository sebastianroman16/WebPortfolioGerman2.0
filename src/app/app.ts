import { Component } from '@angular/core';
import { CardPresentation } from './components/card-presentation/card-presentation';


@Component({
  selector: 'app-root',
  imports: [CardPresentation],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
