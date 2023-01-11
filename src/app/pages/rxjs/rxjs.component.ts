import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter} from 'rxjs/operators'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, OnDestroy {

  public intervalSubs: Subscription;

  constructor() {

    this.intervalSubs = this.retornaIntervalo()
      .subscribe(
        console.log
      )
    // this.retornaObservable().pipe(
    //   retry(1)
    // ).subscribe(
    //   data => console.log("Subs", data),
    //   error => console.warn("Error", error),
    //   () => console.info('Obs terminado')
    // );
  }

  ngOnDestroy(): void {
    /*Para destruir una subscripción creo una variable del tipo susbscription.
    y le añado el unsubscribe(). Si me cambio de pestaña en la web, deja de emitir datos.
    */
    this.intervalSubs.unsubscribe();
  }

  ngOnInit(): void {
  }

  retornaIntervalo(): Observable<number> {
    const intervalo$ = interval(100)
      .pipe(       
        map(valor => {
          return valor + 1; //primera emisión transforma el 0 a 1
        }),
        filter( valor => ( valor % 2 == 0 ? true : false )),
        //take(10) //Ejecuta 10 veces.
       
      );
    return intervalo$;
  }

  retornaObservable(): Observable<number> {
    let i = -1;

    const obs$ = new Observable<number>(observer => {

      let intervalo = setInterval(() => {

        i++;
        observer.next(i);

        if (i == 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i == 2) {
          observer.error('i vale 1');
        }

      }, 1000)

    });

    return obs$;

  }

}
