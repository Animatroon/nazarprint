  import { Component } from '@angular/core';

  @Component({
    selector: 'app-prices',
    templateUrl: './prices.component.html',
    styleUrl: './prices.component.scss'
  })
  export class PricesComponent {

    tabs = [
      { name: 'Цены на шелкографию' },
      { name: 'Цены на (DTF) термотрансферную печать' },
      { name: 'Цены на UV печать' },
      { name: 'Цены на термотиснение' },
      { name: 'Цены на вышивку' },
      { name: 'Цены на лазерную гравировку' },
    ];
    
    selectedTab = 5;

    selectTab(index: number): void {
      this.selectedTab = index;
    }
  }
