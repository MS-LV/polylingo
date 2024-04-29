import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { cardList } from './home.data';

@Component({
  selector: 'view-home',
  standalone: true,
  imports: [MatIconModule, MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  cards = signal(cardList);
}
