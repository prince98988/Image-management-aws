import { Component, Inject } from '@angular/core';
import {ImageApiIntegration} from './API-Integration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ImageApiIntegration]
})
export class AppComponent {
  title = 'image-management-app';
  constructor(@Inject(ImageApiIntegration) public apiIntegration:ImageApiIntegration){
    this.getImages()
  }

  async getImages(){
    await this.apiIntegration.getBucketImages();
  }

  
}
