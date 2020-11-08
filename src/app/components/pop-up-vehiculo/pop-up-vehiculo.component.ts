import { Component, OnInit, Inject } from '@angular/core';
import { VehiclesService} from 'src/app/services/vehicles.service';
import { Vehicle } from 'src/app/models/vehicle';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up-vehiculo',
  templateUrl: './pop-up-vehiculo.component.html',
  styleUrls: ['./pop-up-vehiculo.component.css']
})
export class PopUpVehiculoComponent implements OnInit {
  public details: any;
  public vehiculo: Vehicle;

  constructor(
    @Inject(MAT_DIALOG_DATA) public numVehiculo: number,
    private _service: VehiclesService, 

  ) {
    this.vehiculo = new Vehicle('', '', '', '', '', '', '', '', '', '', '');
   }
  
  ngOnInit() {
    
    this._service.getVehicles(this.numVehiculo).subscribe(
      response => {
        let res: any;
        res = response;
        this.details = res;
        this.getVehiculo();    
      },    
      error => {
        console.log(error);
      }
    );
  }

  getVehiculo() {
    try {
      this.vehiculo = new Vehicle(
        this.details.name,
        this.details.model,
        this.details.manufacturer,
        this.details.cost_in_credits,
        this.details.length,
        this.details.max_atmosphering_speed,
        this.details.crew,
        this.details.passengers,
        this.details.cargo_capacity,
        this.details.consumables,
        this.details.vehicle_class);
    } catch (err) {
      console.log(err);
    }
  }
}
