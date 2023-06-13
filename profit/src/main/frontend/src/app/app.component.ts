import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pro-fit';

  nav_item = [
    {
      menu: {
        name: 'Product',
        link: 'product'
      },
      sub_menu: [
        {
          name: 'Web builder',
          link: 'web-builder',
        }
      ]
    },

    {
      menu: {
        name: 'AaA',
        link: 'aaa'
      },
      sub_menu: [
        {
          name: 'Web builder',
          link: 'web-builder',
        },
        {
          name: 'aaa',
          link: 'bbb',
        }
      ]
    },

    {
      menu: {
        name: 'Bbb',
        link: 'bbb'
      },
      sub_menu: [
        {
          name: 'aaa',
          link: 'aaa',
        },
        {
          name: 'bbb',
          link: 'BBB',
        },
        {
          name: 'ccc',
          link: 'ccc',
        }
      ]
    },

  ]
}
