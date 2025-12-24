import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConsultationComponent } from '../elements/consultation/consultation.component';
import { MapsComponent } from '../elements/maps/maps.component';

interface Service {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, ConsultationComponent, MapsComponent]
})
export class ServicesPageComponent {
  services: Service[] = [
    {
      id: 1,
      name: 'Шелкография',
      description: 'При шелкографии краска наносится на ткань через специальный трафарет. Идеально для больших тиражей.',
      image: '/assets/home-services/Шелкография.png',
      link: '/silcky'
    },
    {
      id: 2,
      name: 'DTF печать',
      description: 'Из специальных термопленок изготавливается изображение, которое наносится на изделие. Подходит для любых тканей.',
      image: '/assets/home-services/DTF.jpg',
      link: '/dtf'
    },
    {
      id: 3,
      name: 'UV печать',
      description: 'Технология для создания ярких и долговечных изображений на разных поверхностях включая пластик, стекло и металл.',
      image: '/assets/home-services/UV.jpeg',
      link: '/uv'
    },
    {
      id: 4,
      name: 'Вышивка',
      description: 'Изображения создаются на ткани при помощи вышивальной машины. Премиальное качество для логотипов.',
      image: '/assets/home-services/Вышивка.webp',
      link: '/fancywork'
    },
    {
      id: 5,
      name: 'Лазерная гравировка',
      description: 'Способ нанесения рисунка, чертежа или текста на изделие с помощью лазерного луча. Долговечность гарантирована.',
      image: '/assets/home-services/Лазерная.webp',
      link: '/laser'
    }
  ];
}
