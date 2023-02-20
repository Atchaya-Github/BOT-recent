import { Component, ViewChild } from '@angular/core';
import { Model } from './model';
import { PrimengService } from './primeng.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('dt') dt: any;
  first = 0;
  rows = 10;
  value!:any;
  title = 'primefilter';
  filtered_data:any[]=[];
  final_data:any[]=[];
  status:any
  selected_data:Model[]=[];
  displayResponsive: boolean | any =false;
  keys!: any[];
  botdetail!: any[];
  constructor(private prime:PrimengService){}
  ngOnInit(){
    this.get();
  }
  
  get(){
    this.prime.get().subscribe((res) =>{
      this.filtered_data = Object.values(res).filter((i) =>{
        return i.Data || JSON;
      });
      this.final_data=this.filtered_data[3].data;
      console.log(this.final_data)
    })
  }
  showResponsiveDialog(val:any) {
    this.displayResponsive = true;
    this.keys = Object.values(this.final_data);
    this.keys.filter((x) => {
      if (x.bot_configuration_id === val) {
        this.botdetail = x;
        console.log(this.botdetail)
      }
    });
    }

    

  // get(){
  //   this.prime.get()
  //   .pipe(map((res) => {
  //     this.filtered_data = Object.values(res).filter((i) =>{
  //       return i.Data;
  //     });
  //   }))
  // }
  applyFilterGlobal($event: any, stringVal: any) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
}
