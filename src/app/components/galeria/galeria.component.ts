import { Component } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {

  constructor (private servicio: EmpleadosService){}

  empleados: any

  ngOnInit(){
    this.servicio.getEmpleados().subscribe( e => {
      this.empleados = e
    })
  }

}
