import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent implements OnInit {

  @Input() init!: Order;

  @Output() onSubmitted = new EventEmitter<Order>();

  public form!: FormGroup;

  public states = Object.values(StateOrder);

  constructor(private fb: FormBuilder) {
    // console.log(this.init, 'depuis constructeur');
   }

   ngOnInit(): void {
    // console.log(this.init, 'depuis ngOnInit');

    this.form = this.fb.group({
      tjmHt: [this.init.tjmHt, Validators.required],
      nbJours: [this.init.nbJours, Validators.required],
      tva: [this.init.tva, Validators.required],
      state: [this.init.state, Validators.required],
      typePresta: [this.init.typePresta, Validators.required],
      client: [this.init.client, Validators.required],
      comment: [this.init.comment, Validators.required],
      id: [this.init.id]
    })
  }

  onSubmit(){
    //console.log(this.form.value,'ca marche');

    this.onSubmitted.emit(this.form.value);
  }

}
