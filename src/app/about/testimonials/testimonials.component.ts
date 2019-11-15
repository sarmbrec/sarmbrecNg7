import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";

import { FakeUsersListInterface } from "../../interfaces/fake-users-list";
import { Observable } from "rxjs";
//import demodata from '../assets/demo.json';

@Component({
	selector: "app-testimonials",
	templateUrl: "./testimonials.component.html",
	styleUrls: ["./testimonials.component.scss"]
})
export class TestimonialsComponent implements OnInit {
	//users: any;
	fakeUsersList$: Observable<FakeUsersListInterface[]>;
	fakeUsersListData$: Observable<FakeUsersListInterface["data"]>;
	constructor(private service: DataService) {}

	ngOnInit() {
		// synchronis
		//this.service.getFakeUsersList().subscribe(data => {this.users = data;});
		// async
		// inject the service at the root AboutComponent and pass this data as Inputs()
		this.fakeUsersList$ = this.service.getFakeUsersListAsync();
		this.fakeUsersListData$ = this.fakeUsersList$["data"];

		// log observable
		// this.fakeUsersList$.subscribe(res => {
		//   console.log('res = ', res);
		//   this.fakeUsersList$ = res.data;
		//   console.log('this.fakeUsersList$ = ', this.fakeUsersList$);

		// });
	}
}
