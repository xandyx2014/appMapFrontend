import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackbar: MatSnackBar) { }

  mostrarMensaje(mensaje: string) {
    this.snackbar.open( mensaje, 'ok' , {
      duration: 3000
    });
  }
}
