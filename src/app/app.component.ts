import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pro-fit';

  nav_item = [
    { menu: 'Product', sub_menu: [ 'Web builder' ] },
    { menu: 'aaa', sub_menu: [ 'Web builder', 'a' ] },
    { menu: 'bbb', sub_menu: [ 'Web builder', 'b' ] },
    { menu: 'ccc', sub_menu: [ 'Web builder', 'c', 'c' ] },
  ]
}
