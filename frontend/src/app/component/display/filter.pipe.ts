import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SpawnOptions } from 'child_process';

@Pipe({
    name: 'sanitizeHtml'
})

export class SanitizeHtmlPipe  implements PipeTransform {
  constructor(private _sanitizer:DomSanitizer) {
  }

    transform(text: string, search): SafeHtml {
        if (search && text) {
          let pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
          pattern = pattern.split(' ').filter((t) => {
            return t.length > 0;
          }).join(' ');
          const regex = new RegExp(pattern, 'gi');       
          
          return this._sanitizer.bypassSecurityTrustHtml (text.replace(regex, (match) => 
             `<span style="background-color: yellow;">${match}</span>`
             
          ));
     
        } else {
          return text;
        }
      }
      
      
}