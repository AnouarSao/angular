import { Component, OnInit } from '@angular/core';
import { ChallengeHttpService } from 'src/app/services/challenge-http.service';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.scss']
})
export class ListDataComponent implements OnInit {

  list: any;

  constructor(private challengeHttpService: ChallengeHttpService ) {

    this.challengeHttpService.onDisplayList().subscribe((data) => {
      this.list = data;
      console.log(this.list);
    });
  }

  ngOnInit(): void {
  }

}
