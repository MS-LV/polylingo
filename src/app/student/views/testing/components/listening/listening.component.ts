import { Component, computed, viewChildren, signal, input, inject, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';

import {MatCardModule} from '@angular/material/card';

import {fromEvent, merge, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {GrammarDocument} from '@admin/components/component.interface';
import {TestingComponent} from '@student/views/testing/testing.component';
import {QuestionsFormComponent} from '@student/views/testing/components/questions-form/questions-form.component';

@Component({
  selector: 'comp-listening',
  standalone: true,
  imports: [QuestionsFormComponent, MatCardModule],
  templateUrl: './listening.component.html',
  styleUrl: './listening.component.scss',
})
export class ListeningComponent implements AfterViewInit, OnDestroy {
  readonly testingComponent = inject(TestingComponent);
  audiosRef = viewChildren<ElementRef>('audio');
  formGroup = input.required<FormGroup>();
  document = input.required<GrammarDocument>();
  audios = computed(() => <string[]>this.formGroup().get('audios')!.value);

  destroy$ = signal(new Subject<boolean>());

  constructor() {}

  ngAfterViewInit(): void {
    this.audioHandler();
    
    
  }

  submit() {
    this.testingComponent.nextActivity();
  }

  private audioHandler() {
    const audiosRef = this.audiosRef().map((audio) => fromEvent<Event>(audio.nativeElement, 'ended'));
    merge(...audiosRef)
    .pipe(
      takeUntil(this.destroy$()),
    )
    .subscribe(_ => {
      const audio = <HTMLAudioElement>_.srcElement;
      const repeated = +audio.dataset.repeated!
      audio.removeAttribute('controls');
      if(isNaN(repeated)){
        return
      }
      audio.setAttribute('data-repeated', repeated + 1 + '');
    });
  }

  ngOnDestroy(): void {
    this.destroy$().next(true);
  }
}
