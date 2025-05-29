import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Bienvenido a el servicio</h1>
    <h3>Mensajes recibidos:</h3>
    <ul>
      <li *ngFor="let msg of mensajes">{{ msg }}</li>
    </ul>
  `
})
export class AppComponent implements OnInit {
  mensajes: string[] = [];
  ws!: WebSocket;

  ngOnInit(): void {
    this.ws = new WebSocket('ws://localhost:8081');

    this.ws.onmessage = (event) => {
      this.mensajes.push(event.data);
    };
  }
}
