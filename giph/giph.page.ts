import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';

import { ModalComponent } from 'src/app/_modal/modal.component';
import { ModalService } from 'src/app/_modal';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-giph',
  templateUrl: './giph.page.html',
  styleUrls: ['./giph.page.scss'],
})
export class GiphPage implements OnInit {
  public searchTerm: string;
  public items: any;
  bodyText: any
    title = 'Welcome to GiphySearch';
    public link = "https://api.giphy.com/v1/gifs/search?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc&q=";
  
    giphies = [];
    constructor(public http: HttpClient, public loadingCtrl: LoadingController, public modalService: ModalService, public router: Router){
    }

    ngOnInit() {

    }
  
    
    runTimer(){
      this.presentLoadingWithOptions()
        return this.http.get('http://api.giphy.com/v1/gifs/search?api_key=5927585945364280883a90015b9027cd&q=' + this.searchTerm + '&limit=20&lang=fr').subscribe(res=>{
          console.log(res)
          this.loadingCtrl.dismiss();
          this.dischargeLoading()
            if(res){
              this.items = res;
              console.log(this.items)
             
            }
        })
    }

    openModal(id: string, stars: any) {
      this.bodyText = stars;
      console.log(this.bodyText)
      this.modalService.open(id);
    }
  
    closeModal(id: string) {
      this.modalService.close(id);
    }


    async presentLoadingWithOptions() {
      const loading = await this.loadingCtrl.create({
        spinner: "bubbles",
        //duration: 2000,
        message: 'Please wait, fetching gifs...',
        translucent: true
        //cssClass: 'custom-class custom-loading'
      });
      return await loading.present();
    }
  
  async dischargeLoading() {
    const loading = await this.loadingCtrl.dismiss();
    //const { role, data } = await loading.onDidDismiss();
  }
    
}
