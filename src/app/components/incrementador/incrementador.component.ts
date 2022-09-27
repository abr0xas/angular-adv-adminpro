import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @Input('valor') progreso: number = 20;
  @Input() btnClass: string = 'btn-primary'

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`
  }

  onChange( nuevoValor: number ): void {

    if( nuevoValor >= 100 ) {
      this.progreso = 100
    } else if( nuevoValor <= 0 ) {
      this.progreso = 0
    }
    this.valorSalida.emit(this.progreso)    
  }


  cambiarValor( valor: number ): any {
    console.log('emitiendo');
    

    if( this.progreso >= 100 && valor > 0 ){
      this.valorSalida.emit(100);
      return this.progreso = 100
    }

    if( this.progreso <= 0 && valor < 0 ) {
      this.valorSalida.emit(0)
      return this.progreso = 0}

    this.progreso = this.progreso + valor
    this.valorSalida.emit(this.progreso)
  }

}
