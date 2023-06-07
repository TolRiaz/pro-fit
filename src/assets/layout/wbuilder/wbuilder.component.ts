import { Component, OnInit } from '@angular/core';
import grapesjs from 'grapesjs';
// import "toastr"

@Component({
  selector: 'wbuilder',
  templateUrl: './wbuilder.component.html',
  styleUrls: ['./wbuilder.component.scss']
})
export class WbuilderComponent implements OnInit {

  editor:any = null;

  constructor() { }

  ngOnInit(): void {

    // Init editor
    this.editor = grapesjs.init({
      showOffsets: 1,
      noticeOnUnload: 0,
      container: '#web-builder',
      height: '100%',
      fromElement: true,
      storageManager: { autoload: 0 },
      styleManager : {
        sectors: [{
            name: 'General',
            open: false,
            buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom']
          },{
            name: 'Flex',
            open: false,
            buildProps: ['flex-direction', 'flex-wrap', 'justify-content', 'align-items', 'align-content', 'order', 'flex-basis', 'flex-grow', 'flex-shrink', 'align-self']
          },{
            name: 'Dimension',
            open: false,
            buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
          },{
            name: 'Typography',
            open: false,
            buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-shadow'],
          },{
            name: 'Decorations',
            open: false,
            buildProps: ['border-radius-c', 'background-color', 'border-radius', 'border', 'box-shadow', 'background'],
          },{
            name: 'Extra',
            open: false,
            buildProps: ['transition', 'perspective', 'transform'],
          }
        ],
      },
    });

    this.editor.BlockManager.add('New Block', {
      label: 'Block',
      content: `<div style="padding-top:50px; padding-bottom:50px; text-align:center">New block</div>`
    })

    this.editor.BlockManager.add('New Text', {
      label: 'Text',
      content: `<p>New text</p>`
    })

    this.editor.BlockManager.add('New Button', {
      label: 'Button',
      content: `<button style="padding: 1rem; text-align:center">New button</button>`
    })

    // this.editor.BlockManager.add('New Icon', {
    //   label: 'Icon',
    //   content: `<i class="fa-sharp fa-solid fa-image"></i>`
    // })

    // this.editor.BlockManager.add('New Link', {
    //   label: 'Link',
    //   content: `<button style="padding: 1rem; text-align:center">New button</div>`
    // })

    this.editor.BlockManager.add('New Image', {
      label: 'Image',
      content: `<img src="/assets/media/icon.png">`
    })

    // this.editor.BlockManager.add('New Shape', {
    //   label: 'Shape',
    //   content: `<button style="padding: 1rem; text-align:center">New button</div>`
    // })

    // this.editor.BlockManager.add('New Alert', {
    //   label: 'Alert',
    //   content: `<button style="padding: 1rem; text-align:center">New button</div>`
    // })

    this.editor.BlockManager.add('New Video', {
      label: 'Video',
      content: `<video src="/assets/media/hcc.mp4"></video>`
    })

    // this.editor.BlockManager.add('New HTML', {
    //   label: 'HTML',
    //   content: `<button style="padding: 1rem; text-align:center">New button</div>`
    // })

    // this.editor.BlockManager.add('New Map', {
    //   label: 'Map',
    //   content: `<button style="padding: 1rem; text-align:center">New button</div>`
    // })

  }

}