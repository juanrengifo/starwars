import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/models/movies';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-episodio',
  templateUrl: './episodio.component.html',
  styleUrls: ['./episodio.component.css'],
  providers: [MoviesService]
})
export class EpisodioComponent implements OnInit {
  public title: string;
  public films: any;
  public movie: Movie;
  public numId: number;

  constructor(
    private _service: MoviesService,
    private ruta: ActivatedRoute
  ) {
    this.movie = new Movie('', '', '' , '', '', '');
   }
  
  ngOnInit() {
    let id = +this.ruta.snapshot.paramMap.get('id');
    this.numId = +this.ruta.snapshot.paramMap.get('id');
    this._service.getMovies().subscribe(
      response => {
        let res: any;
        res = response;
        this.films = res.results;
        this.getMovie(id);
      },
      error => {
        console.log(error);
      }
    );
  }
  
  getMovie(id: number) {
    try {
      this.movie = new Movie(
        this.films[id].title,
        this.films[id].episode_id,
        this.films[id].opening_crawl,
        this.films[id].director,
        this.films[id].producer,
        this.films[id].release_date);
    } catch (err) {
      console.log(err);
    }
  }
}
