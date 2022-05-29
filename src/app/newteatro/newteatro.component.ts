import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TeatroService } from '../services/teatro.service';

@Component({
  selector: 'app-newteatro',
  templateUrl: './newteatro.component.html',
  styleUrls: ['./newteatro.component.css']
})
export class NewteatroComponent implements OnInit {
  @Output() newTeatroEvent = new EventEmitter<string>();

  constructor(private service: TeatroService) { }

  ngOnInit(): void {
  }

  creaTeatro(){
    this.service.newPrenotazione().subscribe(
      {
        next: (x: any) => {
          const key = x;
          const platea = new Array(7).fill("").map(() => new Array(10).fill("x"));
          const palco = new Array(4).fill("").map(() => new Array(6).fill("x"));
          const prenotazione = platea.concat(palco);
          this.service.setPrenotazione(key, prenotazione).subscribe(
            {
              next: (x: any) => {
                this.newTeatroEvent.emit(key);
              },
              error: err => console.error(`Observer got an error: ${JSON.stringify(err)}`)
            }
          )
        },
        error: err => console.error(`Observer got an error: ${JSON.stringify(err)}`)
      }
    )
  }

}
