import { Component, ContentChild, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import grapesjs from 'grapesjs';
// import "toastr"

import plugin from './config';

const containerName:string = "web-builder"

@Component({
  selector: 'wbuilder',
  templateUrl: './wbuilder.component.html',
  styleUrls: ['./wbuilder.component.scss']
})
export class WbuilderComponent implements OnInit {

  editor:any = null;

  template:string = '';
  styles:string = '';

  constructor(route: ActivatedRoute) {
    this.template = route.snapshot.data['template']
    this.styles   = route.snapshot.data['styles']
  }

  ngOnInit(): void {

    // Init editor
    this.editor = grapesjs.init({
      showOffsets: 1,
      noticeOnUnload: 0,
      container: '#' + containerName,
      height: '100%',
      fromElement: true,
      storageManager: { autoload: 0 },
      plugins: [ plugin ],
    });

    this.editor.Css.addRules(this.styles)

  }

}