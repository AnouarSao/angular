import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-edit-client',
  templateUrl: './page-edit-client.component.html',
  styleUrls: ['./page-edit-client.component.scss']
})
export class PageEditClientComponent implements OnInit {
  item$!: Observable<Client>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private clientsService : ClientsService,
    private router: Router
    ) {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.item$ = this.clientsService.getItemById(id);
  }

  ngOnInit(): void {}

  onEdit(item: Client) {
    this.clientsService.update(item).subscribe(() => {
      this.router.navigate(['clients']);
    });
  }
}
