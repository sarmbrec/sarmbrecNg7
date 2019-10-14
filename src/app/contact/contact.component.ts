import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from '../app.component';

import { DataService } from '../services/data.service';
import { ContactInterface } from '../interfaces/contact';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {



  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new ContactInterface('Dr IQ', 'test@sarmbrec.com', this.powers[0], 'Chuck Overstreet says hello');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  // contactForm: FormGroup;
  // submitted = false;
  // success = false;
  // data: any;
  // appTitle = new AppComponent().title;

  // contactform$: Observable<ContactInterface>;

  // constructor(
  //   private service: DataService,
  //   private formBuilder: FormBuilder) {
  //   this.contactForm = this.formBuilder.group({
  //     name: ['', Validators.required],
  //     email: ['', Validators.required],
  //     message: ['', Validators.required],
  //     _replyto: ['', Validators.required]
  //   });
  // }

  // onSubmit() {

  //   // TODO: Use EventEmitter with form value
  //   console.info(this.contactForm);
  //   console.log('this.contactForm.value = ', this.contactForm.value);
  //   console.log('this.contactForm.errors = ', this.contactForm.errors);
  //   console.log('this.contactForm.invalid = ', this.contactForm.invalid);

  //   this.submitted = true;
  //   if (this.contactForm.invalid) {
  //     //this.contactForm.reset();   
  //     return;
  //   }
  //   this.success = true;
    
  //   // uses https://formspree.io/ for email api
  //   this.contactform$ = this.service.sendEmailContactForm(this.contactForm.value);




  // }

  // ngOnInit() {
  // }

}
