import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { UbicacionService } from 'src/app/core/http/ubicacion.service';
import { ActivatedRoute } from '@angular/router';
import { Ubicacion } from 'src/app/shared/interfaces/ubicacion.interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  map: L.Map;
  constructor(private ubicacionService: UbicacionService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.
      subscribe( ( {id} ) => {
        console.log( id );
        this.ubicacionService.index(id).subscribe( ( resp ) => {
          console.log( resp.descripcion.length );
          this.iniciarMapa(resp);
        });
      });
  }
  iniciarMapa(location: Ubicacion) {
    const { longitud, latitud} = location;
    const descripcion = location.descripcion.length !== 0 ? location.descripcion : 'Sin Descripcion';
    this.map = L.map('mapid').setView([Number(latitud), Number(longitud)], 8);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
    L.marker([Number(latitud), Number(longitud)]).addTo(this.map)
        .bindPopup(descripcion)
        .openPopup();
  }

}
