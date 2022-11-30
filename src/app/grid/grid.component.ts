import {Component} from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
})
export class GridListDynamic {
  tiles: Tile[] = [
    {text: 'Carbohidratos', cols: 3, rows: 1, color: '#2ECC71'},
    {text: 'Proteina', cols: 1, rows: 2, color: '#C0392B'},
    {text: 'Grasas', cols: 1, rows: 1, color: '#D35400'},
    {text: 'Vitaminas y minerales', cols: 2, rows: 1, color: '#85C1E9'},
  ];
}