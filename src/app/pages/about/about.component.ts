import { Component, OnInit } from '@angular/core';
import experience from '../../files/experience.json';
import formation from '../../files/formation.json';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public cardTitle: Array<string>;
  public cardContent: any;
  public aboutIndex: number;

  constructor() { }

  ngOnInit() {
    this.cardTitle = ['01.Experience', '02.School and Formations', '03.Skills'];
    this.setCardContent();
    console.log(this.cardContent);
    this.aboutIndex = 0;
  }

  private setCardContent() {
    switch (this.aboutIndex) {
      case 0:
        this.cardContent = experience;
        break;
      case 1:
        this.cardContent = formation;
        break;
      case 2:
        this.cardContent = '2';
        break;
      default:
        this.cardContent = experience;
        break;
    }
  }

  public getTitle() {
    return this.cardTitle[this.aboutIndex];
  }

  public goToCard(index) {
    this.aboutIndex = index;
    this.setCardContent();
  }

}
