import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { cardList } from './history.data';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss',
  standalone: true,
  imports: [MatIconModule, MatCardModule, MatButtonModule, RouterLink],
})
export class HistoryComponent {
  cards = signal(cardList);
}
