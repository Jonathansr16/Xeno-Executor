import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipegallery'
})
export class PipegalleryPipe implements PipeTransform {

  transform(object: any[]): any {
    return  Object.values(object);
  }

}
