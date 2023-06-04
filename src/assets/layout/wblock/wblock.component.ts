import { Component, OnInit } from '@angular/core';
import grapesjs from 'grapesjs';
import 'grapesjs-preset-webpage';

@Component({
  selector: 'wblock',
  templateUrl: './wblock.component.html',
  styleUrls: ['./wblock.component.scss'],
})
export class WblockComponent implements OnInit {
  public editor:any = null

  constructor() { }

  ngOnInit(): void {
    this.editor = grapesjs.init({
      height: '100%',
      container: '#pf-web-builder',
      fromElement: true,
      storageManager: false,
      showOffsets: true,
      noticeOnUnload: false,
      plugins: ['gjs-preset-webpage'],
      pluginsOpts: {
       'gjs-preset-webpage': {
         blocksBasicOpts: {
           blocks: ['column2', 'column3', 'column3-7', 'text', 'link', 'image', 'video'],
           flexGrid: 1,
         },
       }
      }
    })
  }
}
