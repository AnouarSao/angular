import { Component, OnInit } from '@angular/core';
import { ChallengeHttpService } from 'src/app/services/challenge-http.service';

@Component({
  selector: 'app-single-data',
  templateUrl: './single-data.component.html',
  styleUrls: ['./single-data.component.scss']
})
export class SingleDataComponent implements OnInit {

  single: any;

  constructor(private challengeHttpService: ChallengeHttpService ) {

    this.challengeHttpService.onDisplaySingleItem().subscribe((data) => {
      this.single = data;
      console.log(this.single);
    });
  }

  ngOnInit(): void {
  }

}
