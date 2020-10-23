import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  // Necesito el servicio de traduccion para utilizar el pipe
  constructor(
    private translate: TranslateService
  ){

  }

  transform(value: any, args?: any): any {
    return this.translate.getTranslate(value) ? this.translate.getTranslate(value) : '';
  }

}
