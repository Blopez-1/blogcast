import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-card',
  imports: [CommonModule],
  templateUrl: './main-card.component.html',
  styleUrl: './main-card.component.scss'
})
export class MainCardComponent {
  @Input() post: any;
  @Input() variant: 'featured' | 'compact' = 'featured';
}
