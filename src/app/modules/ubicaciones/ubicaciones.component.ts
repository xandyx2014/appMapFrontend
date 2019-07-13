import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { UbicacionService } from 'src/app/core/http/ubicacion.service';
import { Ubicacion } from 'src/app/shared/interfaces/ubicacion.interface';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/core/service/snackbar.service';

@Component({
  selector: 'app-ubicaciones',
  templateUrl: './ubicaciones.component.html',
  styleUrls: ['./ubicaciones.component.css']
})
export class UbicacionesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'descripcion', 'longitud', 'latitud', 'ver', 'borrar'];
  dataSource: MatTableDataSource<Ubicacion> = new MatTableDataSource();

  @ViewChild(MatSort , {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private ubicacionService: UbicacionService,
              private snackbarService: SnackbarService,
              private route: Router) {}
  ngOnInit() {
    this.llenarDatos();
  }
  llenarDatos() {
    this.ubicacionService.show()
    .subscribe( ( resp ) => {
      this.crearTabla(resp);
    });
  }
  crearTabla(ubicaciones: Ubicacion[]) {
    this.dataSource = new MatTableDataSource(ubicaciones);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  borrar(id) {
    this.ubicacionService.delete(id).subscribe( resp => {
      if ( resp ) {
        this.snackbarService.mostrarMensaje('Borrado Exitosamente');
        this.llenarDatos();
      }
    });
  }
  navegar(id: string) {
    this.route.navigate(['/ubicacion', id]);
  }
}
