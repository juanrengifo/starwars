import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { NamesService } from 'src/app/services/names.service';
import { VehiclesService} from 'src/app/services/vehicles.service';
import { Movie } from 'src/app/models/movies';
import { ArrayMovies } from 'src/app/models/arrayMovies';
import { ActivatedRoute, Params } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PopUpVehiculoComponent } from '../pop-up-vehiculo/pop-up-vehiculo.component';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css'],
  providers: [MoviesService, NamesService, VehiclesService]
})
export class VehiculosComponent implements OnInit {
  public title: string;
  public films: any;
  public movie: Movie;
  public infoArray: ArrayMovies;
  public names: Array<string>;
  public enlaces: Array<string>;
  public numVehiculo: Array<string>;
  public numId: number;

  constructor(
    private _service: MoviesService,
    private _service2: NamesService,
    private ruta: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.names = [];
    this.enlaces = [];
    this.numVehiculo = [];
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
        this.getMovie2(id);
        this.getMovie(id);
        this.enlaces = Array.from(this.films[id].vehicles);
        if(this.enlaces.length == 0) {
          alert("Vehicles not found!");
        }
        
        for(var i=0; i<this.enlaces.length && i<10; i++){
          var cadenas = this.enlaces[i].split('/');
          this.numVehiculo.push(cadenas[5]);
           this._service2.getNames(this.enlaces[i]).subscribe(
             response => {
               let res: any;
               res = response;
               this.names.push(res.name+'');
             },
             error => {
               console.log(error);
             }
           );
         }
      },
      error => {
        console.log(error);
      }
    );
  }
  
  getMovie2(id: number) {
    try {
      this.infoArray = new ArrayMovies(
        this.films[id].characters,
        this.films[id].planets,
        this.films[id].starships,
        this.films[id].vehicles,
        this.films[id].species);
    } catch (err) {
      console.log(err);
    }
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

  abrirDialogo(id: string) {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = "450px";
    dialogConfig.width = "300px";
    dialogConfig.data =  id;
    const modalDialog = this.dialog.open(PopUpVehiculoComponent, dialogConfig);
  }
}
