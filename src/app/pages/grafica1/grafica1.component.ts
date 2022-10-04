import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1: string[] = [ 'Test Sales', 'Out-Store Sales', 'Mail-Order Sales' ];   
  public title1: string = 'Ventas';
  public datasets1 = {
    datasets: [
      { data: [ 200, 200, 200 ] },
    ]
  };

 
}