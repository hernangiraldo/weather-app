import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() transparent: boolean;
  @Input() backBtn: boolean;
  @Output() closeEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    this.backBtn = true;
  }

  ngOnInit() {}

}
