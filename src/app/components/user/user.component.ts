import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];

  constructor() { }

  ngOnInit() {
    this.name = 'Bishmay';
    this.age = 80;
    this.email = 'bhismayEatsBurger@bhaghyashree.com'
    this.address = {
      room: 391,
      college: 'KIIT',
      city: 'BhaghyaLand'
    }
    this.hobbies = ['Eats Burger', 'Eats some more burger', 'Becomes burger king'];
  }

  onClick(){
    this.name = 'Ritik Srivastava';
    
  }

  addHobby(hobby){
    this.hobbies.unshift(hobby);
    return false;
  }

}

interface Address{
  room:number,
  college:string,
  city:string
}
