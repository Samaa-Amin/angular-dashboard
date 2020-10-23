import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-log',
  templateUrl: './event-log.component.html',
  styleUrls: ['./event-log.component.scss']
})
export class EventLogComponent implements OnInit {

  constructor() { }
  @Input() title: string;
  @Input() events: string[];

  ngOnInit(): void {
  }

}
