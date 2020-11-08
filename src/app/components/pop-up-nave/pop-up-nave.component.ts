import { Component, OnInit, Inject } from '@angular/core';
import { StarshipsService} from 'src/app/services/starships.service';
import { Starship } from 'src/app/models/starship';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up-nave',
  templateUrl: './pop-up-nave.component.html',
  styleUrls: ['./pop-up-nave.component.css']
})
export class PopUpNaveComponent implements OnInit {
  public details: any;
  public nave: Starship;

  constructor(
    @Inject(MAT_DIALOG_DATA) public numNave: number,
    private _service: StarshipsService, 

  ) {
    this.nave = new Starship('', '', '', '', '', '', '', '', '', '', '', '', '');
   }
  
  ngOnInit() {
    
    this._service.getStarships(this.numNave).subscribe(
      response => {
        let res: any;
        res = response;
        this.details = res;
        this.getNave();    
      },    
      error => {
        console.log(error);
      }
    );
  }

  getNave() {
    try {
      this.nave = new Starship(
        this.details.name,
        this.details.model,
        this.details.manufacturer,
        this.details.cost_in_credits,
        this.details.length,
        this.details.lengmax_atmosphering_speedth,
        this.details.crew,
        this.details.passengers,
        this.details.cargo_capacity,
        this.details.consumables,
        this.details.hyperdrive_rating,
        this.details.MGLT,
        this.details.starship_class);
    } catch (err) {
      console.log(err);
    }
  }
}
