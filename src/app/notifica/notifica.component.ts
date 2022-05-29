import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifica',
  templateUrl: './notifica.component.html',
  styleUrls: ['./notifica.component.css']
})
export class NotificaComponent implements OnInit {
  @Input() mostra: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
