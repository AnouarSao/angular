import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective {

  @Input() etat!:string;

  @HostBinding('class') tdClassName!: string;

  constructor() {
    // console.log('depuis directve appState');
  }

  // ngOnInit() est déclenché une seule fois
  ngOnInit() {
    // console.log(this.etat, 'etat depuis ngOnInit');
  }

  // ngOnChanges est déclenché à chaque modification
  ngOnChanges() {
    //console.log(this.etat, 'etat depuis ngOnChanges');

    //this.tdClassName = `state-${this.etat.toLocaleLowerCase()}`;

    this.tdClassName = 'state-'+this.etat.toLocaleLowerCase();

    // console.log(this.tdClassName, 'etat depuis ngOnChanges');
  }
}
