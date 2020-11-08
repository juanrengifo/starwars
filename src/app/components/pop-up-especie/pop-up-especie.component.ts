import { Component, OnInit, Inject } from '@angular/core';
import { SpeciesService} from 'src/app/services/species.service';
import { Specie } from 'src/app/models/specie';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up-especie',
  templateUrl: './pop-up-especie.component.html',
  styleUrls: ['./pop-up-especie.component.css']
})
export class PopUpEspecieComponent implements OnInit {
  public details: any;
  public especie: Specie;

  constructor(
    @Inject(MAT_DIALOG_DATA) public numEspecie: number,
    private _service: SpeciesService, 

  ) {
    this.especie = new Specie('', '', '' , '', '', '', '', '', '');
   }
  
  ngOnInit() {
    
    this._service.getSpecies(this.numEspecie).subscribe(
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
      this.especie = new Specie(
        this.details.name,
        this.details.classification,
        this.details.designation,
        this.details.average_height,
        this.details.skin_colors,
        this.details.hair_colors,
        this.details.eye_colors,
        this.details.average_lifespan,
        this.details.language);
    } catch (err) {
      console.log(err);
    }
  }
}
