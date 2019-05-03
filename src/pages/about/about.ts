import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutService } from './about.service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  data : any = {
  id: '',
  content: ''
  }

  constructor(
  public navCtrl: NavController,
  private AboutService: AboutService
  ) {
  this.AboutService.getData("Logan")
    .subscribe(result => {
    this.data = result;
    });
  }

}
