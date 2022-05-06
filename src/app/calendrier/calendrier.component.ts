import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { Day } from 'src/model/day';
import { DayService } from 'src/services/day.service';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css']
})
export class CalendrierComponent implements OnInit {
    
  constructor(public calendarCreator: DayService) {}

  ngOnInit(): void {
  }
}