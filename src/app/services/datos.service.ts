import {Http} from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DatosService {

    private ruta_datos = './assets/datos.json';

    constructor(private http: Http) { }

    public getData(){
        return this.http.get(this.ruta_datos);
    }

}
