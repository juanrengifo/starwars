import { Component, OnInit, Inject } from '@angular/core';
import { CharactersService} from 'src/app/services/characters.service';
import { Character } from 'src/app/models/character';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up-personaje',
  templateUrl: './pop-up-personaje.component.html',
  styleUrls: ['./pop-up-personaje.component.css']
})
export class PopUpPersonajeComponent implements OnInit {
  public details: any;
  public personaje: Character;

  constructor(
    @Inject(MAT_DIALOG_DATA) public numPersonaje: number,
    private _service: CharactersService, 

  ) {
    this.personaje = new Character('', '', '' , '', '', '', '', '');
   }
  
  ngOnInit() {
    
    this._service.getCharacters(this.numPersonaje).subscribe(
      response => {
        let res: any;
        res = response;
        this.details = res;
        this.getPersonaje();    
      },    
      error => {
        console.log(error);
      }
    );
  }

  getPersonaje() {
    try {
      this.personaje = new Character(
        this.details.name,
        this.details.height,
        this.details.mass,
        this.details.hair_color,
        this.details.skin_color,
        this.details.eye_color,
        this.details.birth_year,
        this.details.gender);
    } catch (err) {
      console.log(err);
    }
  }
}
