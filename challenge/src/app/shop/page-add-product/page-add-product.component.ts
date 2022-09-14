import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-add-product',
  templateUrl: './page-add-product.component.html',
  styleUrls: ['./page-add-product.component.scss']
})
export class PageAddProductComponent implements OnInit {

  // ici on précise le type de panier
  panier: number = 0;

  disableButton: boolean = false;

  errorMessage!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(){
    // vérification
    console.log('test add');

    // ici on incrémente panier
    this.panier ++;

    // désactiver le bouton et afficher le message
    if(this.panier === 5){
      this.disableButton = true;
      this.errorMessage = 'Veuillez retirez un élément de votre panier 😉';
    }

    // vérification
    console.log(this.panier, 'après incrémentation');
  }

  onRemove(){
    // vérification
    console.log('test remove');

    this.panier --;
    this.disableButton=false,
    this.errorMessage='';


    // vérification
    console.log(this.panier, 'après incrémentation');
  }
}
