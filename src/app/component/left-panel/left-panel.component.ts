import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  //setting the background color for the selected Component
  setBgColo(event){
    $($(".active")[0]).removeClass("active");
    $(event.target.parentElement).addClass("active")
  }
}
