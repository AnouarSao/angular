import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../version.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  myVersion!: number;
  constructor(private versionService : VersionService ) {
    this.versionService.version.subscribe((data) => {
      this.myVersion = data;
      // console.log(this.myVersion, 'header');
    }
    );
  }


  ngOnInit(): void {
  }

}
