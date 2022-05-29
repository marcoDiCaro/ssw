import { Component } from '@angular/core';
import { TeatroService } from '../services/teatro.service';

@Component({
  selector: 'app-teatro',
  templateUrl: './teatro.component.html',
  styleUrls: ['./teatro.component.css']
})
export class TeatroComponent {
  platea: any[] = [];
  palco: any[] = [];
  inserisci: string = "";
  mostra: string = "";
  teatri: string[] = [];
  teatroKey: string = "";

  constructor(private service: TeatroService){}

  addTeatro(newTeatro: string){
    this.teatri.push(newTeatro);
  }

  refreshTeatro(key: string){
    this.service.getPrenotazione(key).subscribe(
      {
        next: (x: any) => { 
          const prenotazione = JSON.parse(x); 
          this.platea = prenotazione.slice(0, 7); 
          this.palco = prenotazione.slice(7); 
          this.teatroKey = key; 
        },
        error: err => console.error(`Observer got an error: ${JSON.stringify(err)}`)
      }
    )
  }

  verificaColore(nome: string): string { 
    return nome !== "x" ? "red" : "green"; 
  }

  mostraPrenotazione(nome: string, fila: number, posto:number, teatro: any[]): void {

    let posizione: string;

    if(teatro.length === 7){
      posizione = "platea";
    }
    else{
      posizione = "palco";
    }

    if(this.inserisci !== "" && nome === "x"){
      teatro[fila][posto] = this.inserisci;
      const prenotazione = this.platea.concat(this.palco);
      this.service.setPrenotazione(this.teatroKey, prenotazione).subscribe(
        {
          next: (x: any) => { 
            this.mostra = `Il posto ${posizione} P-${fila+1}-${posto+1} è stato prenotato da ${this.inserisci} con successo`;
            this.inserisci = "";
          },
          error: err => console.error(`Observer got an error: ${JSON.stringify(err)}`)
        }
      )
    }

    else if(this.inserisci !== "" && nome !== "x"){
      this.mostra = `Impossibile prenotare il posto ${posizione} P-${fila+1}-${posto+1} perchè è già occupato`;
    }

    else{
      this.mostra = `Il posto ${posizione} P-${fila+1}-${posto+1} è occupato da ${nome}`;
    }
  }
  
}