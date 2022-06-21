import { Pipe, PipeTransform } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
@Pipe({
  name: 'markdown'
})
export class MarkdownPipe implements PipeTransform {

  constructor(private contentful: ContentfulService) {}

  transform(value: any): any {
    
    return this.contentful.markdownToHtml(value);
  
  }

}
