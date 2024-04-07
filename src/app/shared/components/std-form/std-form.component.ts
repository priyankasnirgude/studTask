import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Istd } from '../../models/student';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {

  stdArr : Array<Istd> = [
    {
      fname : "Shriyansh",
      lname : "Nirgude",
      email : "sn@gmail.com",
      contact : 7020953215
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onStdAdd(fname: HTMLInputElement, lname: HTMLInputElement, email: HTMLInputElement, contact: HTMLInputElement) {
    if(fname.value && lname.value && email.value && contact.value){
      let newstd : Istd = {
        fname: fname.value,
        lname : lname.value,
        email : email.value,
        contact : +contact.value,
      }
      console.log(newstd);
      fname.value = lname.value = email.value = contact.value = '';
      this.stdArr.push(newstd)
    }
  }
  
  

}

