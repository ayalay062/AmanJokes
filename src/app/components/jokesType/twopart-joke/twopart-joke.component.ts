import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-twopart-joke',
  templateUrl: './twopart-joke.component.html',
  styleUrls: ['./twopart-joke.component.scss']
})
export class TwopartJokeComponent {
  @Input() setup: string | undefined;
  @Input() delivery: string | undefined;
}
