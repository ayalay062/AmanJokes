import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-joke',
  templateUrl: './single-joke.component.html',
  styleUrls: ['./single-joke.component.scss']
})
export class SingleJokeComponent {
  @Input() joke: string | undefined;
}
