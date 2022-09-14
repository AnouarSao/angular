import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {

  @Input() init!: Client;

  @Output() onSubmitted = new EventEmitter<Client>();

  public form!: FormGroup;

  public states = Object.values(StateClient);

  constructor(private fb: FormBuilder) {
    // console.log(this.init, 'depuis constructeur');
   }

   ngOnInit(): void {
    // console.log(this.init, 'depuis ngOnInit');

    this.form = this.fb.group({
      state: [this.init.state, Validators.required],
      tva: [this.init.tva, Validators.required],
      name: [this.init.name, Validators.required],
      totalCaHt: [this.init.totalCaHt, Validators.required],
      comment: [this.init.comment, Validators.required],
      id: [this.init.id]
    })
  }

  onSubmit(){
    //console.log(this.form.value,'ca marche');

    this.onSubmitted.emit(this.form.value);
  }

}
