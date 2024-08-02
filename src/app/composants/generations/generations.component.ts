import { Component} from '@angular/core';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.scss']
})
export class GenerationsComponent {

  private _generations: String[];  

  constructor() {
    this._generations = new Array("Génération I", "Génération II", "Génération III", "Génération IV", "Génération V", "Génération VI", "Génération VII");
  }

  public get generations(): String[] {
    return this._generations;
  }
  public set generations(value: String[]) {
    this._generations = value;
  }



}
