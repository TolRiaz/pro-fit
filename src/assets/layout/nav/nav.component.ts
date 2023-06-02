import { Component, Input } from '@angular/core';

interface Menu {
  menu     : string;
  sub_menu : string[];
}

@Component({
  selector: 'pf-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @Input() menu: Menu[] = []

  isHover: boolean = false;
}
