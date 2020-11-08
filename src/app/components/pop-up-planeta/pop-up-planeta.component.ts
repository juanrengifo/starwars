import { Component, OnInit, Inject } from '@angular/core';
import { PlanetasService} from 'src/app/services/planetas.service';
import { Planet } from 'src/app/models/planet';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up-planeta',
  templateUrl: './pop-up-planeta.component.html',
  styleUrls: ['./pop-up-planeta.component.css'],
  providers: [PlanetasService]
})
export class PopUpPlanetaComponent implements OnInit {
  public details: any;
  public numId: number;
  public planet: Planet;

  constructor(
    @Inject(MAT_DIALOG_DATA) public numPlaneta: number,
    private _service: PlanetasService, 
  ) {
    this.planet = new Planet('', '', '' , '', '', '', '', '', '');

   }
  
  ngOnInit() {
    
    this._service.getPlanets(this.numPlaneta).subscribe(
      response => {
        let res: any;
        res = response;
        this.details = res;
        this.getPlanet();    
      },    
      error => {
        console.log(error);
      }
    );
  }

  getPlanet() {
    try {
      this.planet = new Planet(
        this.details.name,
        this.details.rotation_period,
        this.details.orbital_period,
        this.details.diameter,
        this.details.climate,
        this.details.gravity,
        this.details.terrain,
        this.details.surface_water,
        this.details.population);
    } catch (err) {
      console.log(err);
    }
  }
}
