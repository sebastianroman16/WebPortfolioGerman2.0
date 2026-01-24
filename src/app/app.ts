import { Component, signal } from '@angular/core';
import { CardPresentation } from './components/card-presentation/card-presentation';
import { PreloaderComponent } from './components/preloader/preloader.component';


@Component({
  selector: 'app-root',
  imports: [CardPresentation, PreloaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly isLoading = signal(true);

  constructor() {
    const hideLoader = () => this.isLoading.set(false);

    if (document.readyState === 'complete') {
      hideLoader();
    } else {
      window.addEventListener('load', hideLoader, { once: true });
    }
  }
}
