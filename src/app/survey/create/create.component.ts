import { Component, OnInit } from '@angular/core';
import { Userdetails} from '../../../app/userdetails';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  ngOnInit(): void {
    
  }
  userDetail = new Userdetails('kalpesh','shirodkar','sklapesh@gmail.com','shndfasfb');
  constructor() { 
  
  }
 
}
