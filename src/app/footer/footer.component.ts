import { Component, OnInit } from "@angular/core";

import { AppComponent } from "../app.component";
// import { HomeComponent } from '../home/home.component';

@Component({
	selector: "app-footer",
	templateUrl: "./footer.component.html",
	styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
	// access other components and share data
	// users: any;
	/*
	 * generally you don't "new" up Components. Generally, shared state like this, would be stored somewhere, probably session state. Maybe in route-level resolver that pushes the title into a store...and then all subsequent routes can get it. A good state manager is akita:
	 *https://github.com/datorama/akita */

	title = new AppComponent().title;
	// usersList = new HomeComponent(this.users);
	constructor() {}

	ngOnInit() {}
}
