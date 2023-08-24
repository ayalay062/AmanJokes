import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Joke } from 'src/app/models/joke.model';
import { JokesService } from 'src/app/services/jokes.service';

@Component({
  selector: 'app-view-joke-modal',
  templateUrl: './view-joke-modal.component.html',
  styleUrls: ['./view-joke-modal.component.scss']
})
export class ViewJokeModalComponent implements OnInit {
  jokes: Joke[] = [];
  suggJokes: Joke[] = [];
  numSugg = 4;
  constructor(
    private jokesService: JokesService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ViewJokeModalComponent>,
  ) { }
  ngOnInit(): void {
    this.jokes = this.jokesService.getAllJokes();
    var sameTypeJokes = this.jokes.filter(x => x.type == this.data.joke.type);
    this.suggJokes = [];
    for (let index = 0; index < this.numSugg; index++) {
      this.suggJokes.push(sameTypeJokes[Math.floor(Math.random() * sameTypeJokes.length)]);
    }
  }

  close() {
    if (this.dialogRef && this.dialogRef.close) {
      this.dialogRef.close({ data: 'Order' });
    }
  }
}
