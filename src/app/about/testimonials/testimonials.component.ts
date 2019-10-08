import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  users: object;
  constructor(private data: DataService) {}
  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users = data;
      // console.log('TestimonialsComponent | data = ', data)
    });
  }
}
