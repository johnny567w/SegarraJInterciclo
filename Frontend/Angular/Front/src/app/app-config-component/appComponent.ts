import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Bienvenido a la aplicación Angular</h1>
    <p>Mensajes recibidos vía WebSocket:</p>
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

    this.ws.onopen = () => console.log('Conectado a WebSocket');
    this.ws.onmessage = (event) => this.mensajes.push(event.data);
    this.ws.onclose = () => console.log('WebSocket cerrado');
  }
}
