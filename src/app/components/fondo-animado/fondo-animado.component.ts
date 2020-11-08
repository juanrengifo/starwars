import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from './particles-config';

declare let particlesJS: any;

@Component({
  selector: 'app-fondo-animado',
  templateUrl: './fondo-animado.component.html',
  styleUrls: ['./fondo-animado.component.css']
})
export class FondoAnimadoComponent implements OnInit {
  public ngOnInit(): void {
    this.invokeParticles();
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }
}