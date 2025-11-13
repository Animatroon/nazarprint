import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-instagram-section',
    imports: [CommonModule],
    templateUrl: './instagram-section.component.html',
    styleUrls: ['./instagram-section.component.scss']
})
export class InstagramSectionComponent {
  instagramPosts = [
    { image: '/assets/home-instagram/instagram-1.png', alt: 'Image 1' },
    { image: '/assets/home-instagram/instagram-2.png', alt: 'Image 2' },
    { image: '/assets/home-instagram/instagram-3.png', alt: 'Image 3' },
    { image: '/assets/home-instagram/instagram-4.png', alt: 'Image 4' },
    { image: '/assets/home-instagram/instagram-3.png', alt: 'Image 5' },
    { image: '/assets/home-instagram/instagram-1.png', alt: 'Image 6' },
  ];
  openInstagramPage() {
    window.open('https://www.instagram.com/nazar_print/', '_blank');
  }
}
