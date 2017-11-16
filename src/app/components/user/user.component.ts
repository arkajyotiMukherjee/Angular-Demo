import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../../services/data.service';

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
  posts:Post[];
  isEdit:boolean = false;

  constructor(private dataservice: DataService) { }

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

    this.dataservice.getPosts().subscribe((posts) => {
        this.posts = posts;
    });
  }



  addHobby(hobby){
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    for (var index = 0; index < this.hobbies.length; index++) {
      if (this.hobbies[index]==hobby) {
        this.hobbies.splice(index,1);
      }
    }
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}

interface Address{
  room:number,
  college:string,
  city:string
}

interface Post{
  id:number,
  title:string,
  body:string,
  userId:number
}
