import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ng-observable',
  templateUrl: './ng-observable.component.html',
  styleUrls: ['./ng-observable.component.scss']
})
export class NgObservableComponent implements OnInit {

  visible = true;
  @Output() open = new EventEmitter<any>();
  @Output() close = new EventEmitter<any>();

  toggle() {
    this.visible = !this.visible;
    if (this.visible) {
      this.open.emit(null);
    } else {
      this.close.emit(null);
    }
  }
  
  constructor() { }

  ngOnInit() {
  }

}
