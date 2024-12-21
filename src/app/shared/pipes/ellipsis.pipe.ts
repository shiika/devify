import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis',
  standalone: true
})
export class EllipsisPipe implements PipeTransform {
  transform(value: string, maxLength: number = 50): string {
    if (!value) return '';
    
    // If the text is shorter than maxLength, return it as is
    if (value.length <= maxLength) {
      return value;
    }
    
    // Truncate the text and add ellipsis
    return value.slice(0, maxLength).trim() + '...';
  }
}