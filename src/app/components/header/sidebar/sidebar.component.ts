import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() itemModules: [{ title: string, icon: string, route: string }];

  constructor() {
  }

  ngOnInit() {
    console.log(this.itemModules);
  }

}
