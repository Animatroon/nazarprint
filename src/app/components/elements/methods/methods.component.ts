import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss'],
  standalone: true,
  imports: [RouterLink, CommonModule]
})
export class MethodsComponent {
  @Input() methods: Array<{
    title: string;
    description: string;
    image: string;
    link?: string;
  }> = [];
}