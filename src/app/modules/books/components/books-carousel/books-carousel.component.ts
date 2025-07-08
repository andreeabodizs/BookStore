import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-books-carousel',
  templateUrl: './books-carousel.component.html',
  styleUrls: ['./books-carousel.component.scss'],
})
export class BooksCarouselComponent {
  @Input() books: { title: string; image: string }[] = [];
  @Input() mode: 'single' | 'multi' = 'single'; // single = imagine mare, multi = 5 cărți
  currentSlide = 0;

  nextSlide() {
    const maxIndex =
      this.mode === 'multi' ? this.books.length - 5 : this.books.length - 1;
    if (this.currentSlide < maxIndex) this.currentSlide++;
  }

  prevSlide() {
    if (this.currentSlide > 0) this.currentSlide--;
  }
}
