
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DatosService {

    private _url: string;
    private _responseType;

    public set url(url: string){
        this._url = url;
    }

    public set responseType(responseType: string){
        this._responseType = responseType;
    }

    public static DATOS = './assets/datos.json';
    public static INICIO = './assets/inicio.html';

    public static JSON = 'json';
    public static TEXT = 'text';



    constructor(private http: HttpClient) { }

    public getData(){
        return this.http.get(this._url, {responseType: this._responseType});
    }

}
