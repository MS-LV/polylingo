import { Component, signal } from '@angular/core';

import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrl: './folder.component.scss',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterLink,
    ReactiveFormsModule,
  ],
})
export class FolderComponent {
  formGroup = signal<FormGroup>(new FormGroup({}));
  cards = signal([
    {
      id: 1,
      avatar: 'quiz',
      title: 'Testing',
      subtitle: 'Testing folder that you added.',
      background: 'assets/testing.png',
      content: `Testing folders. List all testing questions that you add. You can add, update and remove questions.`,
      router: 'testing',
    },
    {
      id: 2,
      avatar: 'library_books',
      title: 'Everyday',
      subtitle: 'Everyday folder that you added.',
      background: 'assets/dictionary.png',
      content: `Everyday folders. List all everyday questions that you add. You can add, update and remove questions.`,
      router: 'everyday',
    },
  ]);

  onSubmit(): void {
    alert('Thanks!');
  }
}
