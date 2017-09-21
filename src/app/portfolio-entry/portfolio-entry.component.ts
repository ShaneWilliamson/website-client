import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-entry',
  templateUrl: './portfolio-entry.component.html',
  styleUrls: ['./portfolio-entry.component.css']
})
export class PortfolioEntryComponent implements OnInit {

  private string header;
  private string body;

  constructor() { }

  ngOnInit() {
  }

}
