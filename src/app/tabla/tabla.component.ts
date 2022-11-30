import {Component} from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: String;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position:'Proteina', name: 'Muslo de Pollo', weight: 19.06, symbol: 'KCalorias/100gr'},
  {position:'Proteina', name: 'Bistec magro', weight: 92.00, symbol: 'KCalorias/100gr'},
  {position:'Proteina', name: 'Cabrito', weight: 19.02, symbol: 'KCalorias/100gr'},
  {position:'Proteina', name: 'Cerdo magro', weight: 146.00, symbol: 'KCalorias/100gr'},
  {position:'Proteina', name: 'Leche entera', weight: 63.00, symbol: 'KCalorias/100gr'},
  {position:'Proteina', name: 'Queso Mozarrella', weight: 245.00, symbol: 'KCalorias/100gr'},
  {position:'Carbohidratos', name: 'Champiñones crudos', weight: 25.00, symbol: '	1 ½ taza'},
  {position:'Carbohidratos', name: 'Espinaca cocida', weight: 30.03, symbol: '½ taza	'},
  {position:'Carbohidratos', name: 'Zanahoria cocida', weight: 43.00, symbol: '1 taza'},
  {position:'Carbohidratos', name: 'Cebolla cruda', weight: 26.00, symbol: '¾ taza'},
];


const ELEMENT_DATA1: PeriodicElement[] = [
  {position:'Proteina', name: 'Pechuga de Pollo', weight: 75.00, symbol: 'KCalorias/100gr'},
  {position:'Proteina', name: 'Huevo', weight: 155.00, symbol: 'KCalorias/100gr'},
  {position:'Proteina', name: 'Filete de vacuno', weight: 115.00, symbol: 'KCalorias/100gr'},
  {position:'Proteina', name: 'Leche', weight: 47.00, symbol: 'KCalorias/100gr'},
  {position:'Proteina', name: 'Escalope de cerdo', weight: 105.00, symbol: 'KCalorias/100gr'},
  {position:'Proteina', name: 'Cerveza', weight: 223.00, symbol: 'KCalorias/100gr'},
  {position:'Proteina', name: 'Atun', weight: 144.00, symbol: 'KCalorias/100gr'},
  {position:'Proteina', name: 'Hamburguesa', weight: 291.03, symbol: 'KCalorias/100gr'},
  {position:'Proteina', name: 'Salmon', weight: 137.00, symbol: 'KCalorias/100gr'},
  {position:'Proteina', name: 'Patata', weight: 86.00, symbol: 'KCalorias/100gr'},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-tabla',
  styleUrls: ['./tabla.component.css'],
  templateUrl: './tabla.component.html',
})
export class TableBasicExample {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}