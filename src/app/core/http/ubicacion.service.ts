import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVER } from 'src/app/config/enviroment';
import { Ubicacion } from 'src/app/shared/interfaces/ubicacion.interface';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  constructor(private http: HttpClient) { }
  show() {
    return this.http.get<Ubicacion[]>(`${URL_SERVER}/ubicacion`);
  }
  index(id) {
    return this.http.get<Ubicacion>(`${URL_SERVER}/ubicacion/${id}`);
  }
  store(body: Ubicacion) {
    return this.http.post<Ubicacion>(`${URL_SERVER}/ubicacion`, {...body});
  }
  delete(id: string) {
    return this.http.delete<Ubicacion>(`${URL_SERVER}/ubicacion/${id}`);
  }
}
