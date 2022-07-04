import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DdrCacheService {

  private resources: Map<string, any>;

  constructor() { 
    this.resources = new Map<string, any>();
  }

  setElement(key: string, element: any){
    this.resources.set(key, element);
  }
  
  getElement(key: string){
    return this.resources.get(key);
  }

  hasElement(key: string){
    return this.resources.has(key);
  }

}
