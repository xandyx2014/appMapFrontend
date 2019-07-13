import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UbicacionService } from 'src/app/core/http/ubicacion.service';
import { SnackbarService } from 'src/app/core/service/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder,
              private ubicacionService: UbicacionService,
              private snackbarService: SnackbarService,
              private router: Router) { }

  ngOnInit() {
    this.crearFormulario();
  }

  crearFormulario() {
    this.myForm = this.fb.group({
        descripcion: ['' , Validators.required],
        latitud: ['' , Validators.required],
        longitud: ['' , Validators.required],
    });
  }
  enviar() {
    this.ubicacionService.store({...this.myForm.value}).subscribe( resp => {
      if (resp) {
        this.snackbarService.mostrarMensaje('Creado Correctamente');
        this.router.navigate(['/']);
      }
    });
  }
}
