import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inserisci',
  templateUrl: './inserisci.component.html',
  styleUrls: ['./inserisci.component.css']
})
export class InserisciComponent implements OnInit {
  @Output() newPrenotazioneEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  newPrenotazione(newName: string){
    this.newPrenotazioneEvent.emit(newName);
  }

}
