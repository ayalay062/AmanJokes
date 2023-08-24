import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Joke } from 'src/app/models/joke.model';
import { JokesService } from 'src/app/services/jokes.service';
import { ViewJokeModalComponent } from '../view-joke-modal/view-joke-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-jokes-gallery',
  templateUrl: './jokes-gallery.component.html',
  styleUrls: ['./jokes-gallery.component.scss']
})
export class JokesGalleryComponent implements OnInit {
  jokesList: Joke[] = [];

  constructor(private jokeServie: JokesService, private dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.jokesList = this.jokeServie.getAllJokes();
    //this.dataSource = new MatTableDataSource(this.jokesList);

  }
  viewJoke(joke: Joke) {
    const dialogRef = this.dialog.open(ViewJokeModalComponent, {
      data: { joke: joke } , width:'850px',   // Set width to 600px,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
     
    });
  }

}
