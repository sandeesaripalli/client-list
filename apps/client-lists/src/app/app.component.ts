/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Input, OnInit } from '@angular/core';
import { ClientsService } from './services/clients.service';



@Component({
  selector: 'contextlabs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  clientsData:any ;
  filteredUsers:any;
  title = 'client-lists';
  @Input() data!:any

  onFilterchanged(filterBy:any){
    this.filteredUsers = [...this.clientsData.filter((user:any) => {
      // if(user.name.includes(filterBy) ||user.title.includes(filterBy)){
      //   return user
      // }
      for(const key in user){
        if(user[key] && user[key].toLowerCase().includes(filterBy.toLowerCase())){
          return user;
        }
      }
    })];

  }
  constructor(public clientService:ClientsService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.clientService.getAll().subscribe((data:any)=>{
      this.clientsData = data;
      this.filteredUsers= data;
      //this.data = data;
    });
    
  }

  
  

}
