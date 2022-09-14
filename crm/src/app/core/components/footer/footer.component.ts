import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../version.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  myVersion!: number;
  constructor(private versionService : VersionService ) {
    this.versionService.version.subscribe((data) => {
      this.myVersion = data;
      // console.log(this.myVersion, 'footer');
    }
    );
  }


  ngOnInit(): void {
  }

}
