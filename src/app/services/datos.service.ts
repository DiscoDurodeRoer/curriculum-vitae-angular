
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DatosService {

    private ruta_datos = './assets/datos.json';

    constructor(private http: HttpClient) { }

    public getData(){
        return this.http.get(this.ruta_datos);
    }

}
