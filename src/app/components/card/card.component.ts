import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Beer } from 'src/app/models/beer/Beer';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() beer!: Beer;
}
