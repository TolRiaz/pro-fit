import { Component, OnInit } from '@angular/core';
import grapesjs from 'grapesjs';
// import 'grapesjs-preset-webpage';

@Component({
  selector: 'wblock',
  templateUrl: './wblock.component.html',
  styleUrls: ['./wblock.component.scss']
})
export class WblockComponent implements OnInit {
  public editor:any = null

  constructor() { }

  ngOnInit(): void {
    this.editor = grapesjs.init({
      // Indicate where to init the editor. You can also pass an HTMLElement
      container: '#gjs',
      // Get the content for the canvas directly from the element
      // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
      fromElement: true,
      // Size of the editor
      height: 'auto',
      width: 'auto',
      // Disable the storage manager for the moment
      storageManager: false,
      // Avoid any default panel
      panels: { defaults: [] },
      plugins: ['gjs-preset-webpage'],
      pluginsOpts: {
        'gjs-preset-webpage': {
          blocksBasicOpts: {
           blocks: ['column2', 'column3', 'column3-7', 'text', 'link', 'image', 'video'],
           flexGrid: 1,
          }
        }
      },
    })
  }
}
