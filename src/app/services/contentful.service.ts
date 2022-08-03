import { Injectable } from '@angular/core';

//MODULE
import { createClient, Entry } from 'contentful';
import { from } from 'rxjs';
import { marked }  from 'marked';

const CONFIG = {
  space: 'i4zkj728hhx8',
  accessToken:
    'BvDbraV68krAAjdZjJJilaFLqZOjLC1AuGPwLEr7_Ik',

  contentTypeIds: {
    blog: 'blogCritpto',
  },
}



@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() { 
    this.getPosts();
  }

  getPosts(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.blog
    }, query))
    .then(res => res.items);

   
  }

  getInformation() {
    return this.cdaClient.getEntries().then(entries => console.log(entries))
  }

  getPost(id: string): any {
    return from(this.cdaClient.getEntry(id));
  }

  //convert markdown string to 
  markdownToHtml(md: any) {
    return marked(md)
  }
  
}
