import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
    standalone: false
})
export class AboutComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('О нас');
  }
}
