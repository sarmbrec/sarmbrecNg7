import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "../app.component";

import { DataService } from "../services/data.service";
import { ContactInterface } from "../interfaces/contact";
import { Observable, Subscription } from "rxjs";

@Component({
	selector: "app-contact",
	templateUrl: "./contact.component.html",
	styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnDestroy {
	// pass this as an input
	// see my note in the footer in regards to this
	appTitle = new AppComponent().title;
	submitted = false;
	contactForm: FormGroup;
	contactform$: Observable<ContactInterface>;
	private observables: Subscription[] = [];
	//contactform$: Observable<ContactInterface>;

	//powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
	//model = new ContactInterface('Dr IQ', 'test@sarmbrec.com', this.powers[0], 'Chuck Overstreet says hello');

	onSubmit() {
		this.submitted = true;

		console.log("form submitted: ", this.contactForm);

		// uses https://formspree.io/ for email api
		this.contactform$ = this.service.sendEmailContactForm(this.contactForm.value);

		// log observable
		// usually, you would put an Output here, to let the parent component know to take some sort of action. I know this was probably put here for debugging. But, if you do a subscribe, assign it to a variable, the cleanup on destroy of the component....i'll implement to show you.
		this.observables.push(
			this.contactform$.subscribe(res => {
				console.log("res = ", res);
				// this.contactform$ = {
				//   "email" = 'string',
				//   message: 'string',
				//   name: 'string',
				//   _replyto: 'string'
				// };
				console.log("this.contactform$ = ", this.contactform$);
			})
		);
	}

	// TODO: Remove this when we're done
	//get diagnostic() { return JSON.stringify(this.contactForm); }
	get diagnostic() {
		return this.contactForm;
	}
	// contactForm: FormGroup;
	// submitted = false;
	// success = false;
	// data: any;
	// appTitle = new AppComponent().title;

	// contactform$: Observable<ContactInterface>;

	constructor(private service: DataService, private formBuilder: FormBuilder) {
		this.contactForm = this.formBuilder.group({
			name: ["", Validators.required],
			email: ["", Validators.required],
			message: ["", Validators.required],
			_replyto: ["", Validators.required]
		});
	}

	ngOnDestroy(): void {
		this.observables.forEach(o => o.unsubscribe());
	}

	// -----------------------------------------------------------------------------------
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

	// // uses https://formspree.io/ for email api
	// this.contactform$ = this.service.sendEmailContactForm(this.contactForm.value);

	// }

	// ngOnInit() {
	// }
}
