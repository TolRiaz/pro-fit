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
    { menu: 'Product', sub_menu: [ 'Web builder' ] },
  ]
}
