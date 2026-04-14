import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

export interface SeoConfig {
    title: string;
    description: string;
    image?: string;
    slug?: string;
    keywords?: string;
}

@Injectable({
    providedIn: 'root'
})
export class SeoService {
    private defaultImage = 'https://nazarprint.kz/assets/logo.png'; // Замените на реальный URL логотипа при деплое
    private siteName = 'NazarPrint';
    private baseUrl = 'https://nazarprint.kz'; // Замените на реальный домен

    constructor(
        private titleService: Title,
        private metaService: Meta,
        private router: Router
    ) { }

    updateSeoTags(config: SeoConfig): void {
        // Title
        const fullTitle = `${config.title} | ${this.siteName}`;
        this.titleService.setTitle(fullTitle);

        // Meta Description
        this.metaService.updateTag({ name: 'description', content: config.description });

        // Meta Keywords
        if (config.keywords) {
            this.metaService.updateTag({ name: 'keywords', content: config.keywords });
        }

        // Open Graph (Facebook, LinkedIn, etc)
        this.metaService.updateTag({ property: 'og:title', content: fullTitle });
        this.metaService.updateTag({ property: 'og:description', content: config.description });
        this.metaService.updateTag({ property: 'og:image', content: config.image || this.defaultImage });
        this.metaService.updateTag({ property: 'og:url', content: this.baseUrl + (config.slug || this.router.url) });
        this.metaService.updateTag({ property: 'og:type', content: 'website' });
        this.metaService.updateTag({ property: 'og:site_name', content: this.siteName });

        // Twitter Card
        this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
        this.metaService.updateTag({ name: 'twitter:title', content: fullTitle });
        this.metaService.updateTag({ name: 'twitter:description', content: config.description });
        this.metaService.updateTag({ name: 'twitter:image', content: config.image || this.defaultImage });
    }

    // Метод для установки канонической ссылки (если нужно)
    createCanonicalURL() {
        let link: HTMLLinkElement = document.querySelector('link[rel="canonical"]') || document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
        link.setAttribute('href', this.baseUrl + this.router.url);
    }
}
