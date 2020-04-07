import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appExpandMenu]'
})
export class ExpandMenuDirective {
  @HostBinding('class.active') isOpen = false;

  @HostListener('mouseover')
  public onHover($event): void {
    this.isOpen = true;
  }

  @HostListener('mouseout')
  public onOut($event): void {
    this.isOpen = false;
  }

}
