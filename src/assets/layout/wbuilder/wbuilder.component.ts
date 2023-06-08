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

    this.editor.Css.addRules(`
      .header-banner{
        padding-top: 35px;
        padding-bottom: 100px;
        color: #ffffff;
        font-family: Helvetica, serif;
        font-weight: 100;
        background-image:url("https://grapesjs.com/img/bg-gr-v.png"), url("https://grapesjs.com/img/work-desk.jpg");
        background-attachment:scroll, scroll;
        background-position:left top, center center;
        background-repeat:repeat-y, no-repeat;
        background-size: contain, cover;
      }
      .container-width{
        width: 90%;
        max-width: 1150px;
        margin: 0 auto;
      }
      .logo-container{
        float: left;
        width: 50%;
      }
      .logo{
        background-color: #fff;
        border-radius: 5px;
        width: 130px;
        padding: 10px;
        min-height: 30px;
        text-align: center;
        line-height: 30px;
        color: #4d114f;
        font-size: 23px;
      }
      .menu {
        float: right;
        width: 50%;
      }
      .menu-item{
        float:right;
        font-size: 15px;
        color:#eee;
        width: 130px;
        padding: 10px;
        min-height: 50px;
        text-align: center;
        line-height: 30px;
        font-weight: 400;
      }
      .lead-title{
        margin: 150px 0 30px 0;
        font-size: 40px;
      }
      .sub-lead-title{
        max-width: 650px;
        line-height:30px;
        margin-bottom:30px;
        color: #c6c6c6;
      }
      .lead-btn{
        margin-top: 15px;
        padding:10px;
        width:190px;
        min-height:30px;
        font-size:20px;
        text-align:center;
        letter-spacing:3px;
        line-height:30px;
        background-color:#d983a6;
        border-radius:5px;
        transition: all 0.5s ease;
        cursor: pointer;
      }
      .lead-btn:hover{
        background-color:#ffffff;
        color:#4c114e;
      }
      .lead-btn:active{
        background-color:#4d114f;
        color:#fff;
      }
      .flex-sect{
        background-color: #fafafa;
        padding: 100px 0;
        font-family: Helvetica, serif;
      }
      .flex-title{
        margin-bottom: 15px;
        font-size: 2em;
        text-align: center;
        font-weight: 700;
        color:#555;
        padding: 5px;
      }
      .flex-desc{
        margin-bottom: 55px;
        font-size: 1em;
        color: rgba(0, 0, 0, 0.5);
        text-align: center;
        padding: 5px;
      }
      .cards{
        padding: 20px 0;
        display: flex;
        justify-content: space-around;
        flex-flow: wrap;
      }
      .card{
        background-color: white;
        height: 300px;
        width:300px;
        margin-bottom:30px;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
        border-radius: 2px;
        transition: all 0.5s ease;
        font-weight: 100;
        overflow: hidden;
      }
      .card:hover{
        margin-top: -5px;
        box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.2);
      }
      .card-header{
        height: 155px;
        background-image:url("https://via.placeholder.com/350x250/78c5d6/fff");
        background-size:cover;
        background-position:center center;
      }
      .card-header.ch2{
        background-image:url("https://via.placeholder.com/350x250/459ba8/fff");
      }
      .card-header.ch3{
        background-image:url("https://via.placeholder.com/350x250/79c267/fff");
      }
      .card-header.ch4{
        background-image:url("https://via.placeholder.com/350x250/c5d647/fff");
      }
      .card-header.ch5{
        background-image:url("https://via.placeholder.com/350x250/f28c33/fff");
      }
      .card-header.ch6{
        background-image:url("https://via.placeholder.com/350x250/e868a2/fff");
      }
      .card-body{
        padding: 15px 15px 5px 15px;
        color: #555;
      }
      .card-title{
        font-size: 1.4em;
        margin-bottom: 5px;
      }
      .card-sub-title{
        color: #b3b3b3;
        font-size: 1em;
        margin-bottom: 15px;
      }
      .card-desc{
        font-size: 0.85rem;
        line-height: 17px;
      }
      .am-sect{
        padding-top: 100px;
        padding-bottom: 100px;
        font-family: Helvetica, serif;
      }
      .img-phone{
        float: left;
      }
      .am-container{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
      }
      /*
      .am-container{
        perspective: 1000px;
      }*/
      .am-content{
        float:left;
        padding:7px;
        width: 490px;
        color: #444;
        font-weight: 100;
        margin-top: 50px;
      }
      .am-pre{
        padding:7px;
        color:#b1b1b1;
        font-size:15px;
      }
      .am-title{
        padding:7px;
        font-size:25px;
        font-weight: 400;
      }
      .am-desc{
        padding:7px;
        font-size:17px;
        line-height:25px;
      }
      .am-post{
        padding:7px;
        line-height:25px;
        font-size:13px;
      }
      .blk-sect{
        padding-top: 100px;
        padding-bottom: 100px;
        background-color: #222222;
        font-family: Helvetica, serif;
      }
      .blk-title{
        color:#fff;
        font-size:25px;
        text-align:center;
        margin-bottom: 15px;
      }
      .blk-desc{
        color:#b1b1b1;
        font-size:15px;
        text-align:center;
        max-width:700px;
        margin:0 auto;
        font-weight:100;
      }
      .price-cards{
        margin-top: 70px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
      }
      .price-card-cont{
        width: 300px;
        padding: 7px;
        float:left;
      }
      .price-card{
        margin:0 auto;
        min-height:350px;
        background-color:#d983a6;
        border-radius:5px;
        font-weight: 100;
        color: #fff;
        width: 90%;
      }
      .pc-title{
        font-weight:100;
        letter-spacing:3px;
        text-align:center;
        font-size:25px;
        background-color:rgba(0, 0, 0, 0.1);
        padding:20px;
      }
      .pc-desc{
        padding: 75px 0;
        text-align: center;
      }
      .pc-feature{
        color:rgba(255,255,255,0.5);
        background-color:rgba(0, 0, 0, 0.1);
        letter-spacing:2px;
        font-size:15px;
        padding:10px 20px;
      }
      .pc-feature:nth-of-type(2n){
        background-color:transparent;
      }
      .pc-amount{
        background-color:rgba(0, 0, 0, 0.1);
        font-size: 35px;
        text-align: center;
        padding: 35px 0;
      }
      .pc-regular{
        background-color: #da78a0;
      }
      .pc-enterprise{
        background-color: #d66a96;
      }
      .footer-under{
        background-color: #312833;
        padding-bottom: 100px;
        padding-top: 100px;
        min-height: 500px;
        color:#eee;
        position: relative;
        font-weight: 100;
        font-family: Helvetica,serif;
      }
      .led{
        border-radius: 100%;
        width: 10px;
        height: 10px;
        background-color: rgba(0, 0, 0, 0.15);
        float: left;
        margin: 2px;
        transition: all 5s ease;
      }
      .led:hover{
        background-color: #c29fca;/* #eac229 */
        box-shadow: 0 0 5px #9d7aa5, 0 0 10px #e6c3ee;/* 0 0 10px 0 #efc111 */
        transition: all 0s ease;
      }
      .copyright {
        background-color: rgba(0, 0, 0, 0.15);
        color: rgba(238, 238, 238, 0.5);
        bottom: 0;
        padding: 1em 0;
        position: absolute;
        width: 100%;
        font-size: 0.75em;
      }
      .made-with{
        float: left;
        width: 50%;
        padding: 5px 0;
      }
      .foot-social-btns{
        display: none;
        float: right;
        width: 50%;
        text-align: right;
        padding: 5px 0;
      }
      .footer-container{
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        justify-content: space-around;
      }
      .foot-list {
        float: left;
        width: 200px;
      }
      .foot-list-title {
        font-weight: 400;
        margin-bottom: 10px;
        padding: 0.5em 0;
      }
      .foot-list-item {
        color: rgba(238, 238, 238, 0.8);
        font-size: 0.8em;
        padding: 0.5em 0;
      }
      .foot-list-item:hover {
        color: rgba(238, 238, 238, 1);
      }
      .foot-form-cont{
        width: 300px;
        float: right;
      }
      .foot-form-title{
        color: rgba(255,255,255,0.75);
        font-weight: 400;
        margin-bottom: 10px;
        padding: 0.5em 0;
        text-align: right;
        font-size: 2em;
      }
      .foot-form-desc{
        font-size: 0.8em;
        color: rgba(255,255,255,0.55);
        line-height: 20px;
        text-align: right;
        margin-bottom: 15px;
      }

      .form {
        border-radius: 3px;
        padding: 10px 15px;
        background-color: rgba(0,0,0,0.2);
      }

      .input,
      .textarea,
      .select,
      .sub-input {
        width: 100%;
        margin-bottom: 15px;
        padding: 7px 10px;
        border-radius: 2px;
        color:#fff;
        background-color: #554c57;
        border: none;
      }

      .select {
        height: 30px;
      }

      .label {
        width: 100%;
        display: block;
      }

      .button,
      .sub-btn{
        width: 100%;
        margin: 15px 0;
        background-color: #785580;
        border: none;
        color:#fff;
        border-radius: 2px;
        padding: 7px 10px;
        font-size: 1em;
        cursor: pointer;
      }
      .sub-btn:hover{
        background-color: #91699a;
      }
      .sub-btn:active{
        background-color: #573f5c;
      }
      .blk-row::after{
        content: "";
        clear: both;
        display: block;
      }
      .blk-row{
        padding: 10px;
      }
      .blk1{
        width: 100%;
        padding: 10px;
        min-height: 75px;
      }
      .blk2{
        float: left;
        width: 50%;
        padding: 10px;
        min-height: 75px;
      }
      .blk3{
        float: left;
        width: 33.3333%;
        padding: 10px;
        min-height: 75px;
      }
      .blk37l{
        float: left;
        width: 30%;
        padding: 10px;
        min-height: 75px;
      }
      .blk37r{
        float: left;
        width: 70%;
        padding: 10px;
        min-height: 75px;
      }
      .heading{padding: 10px;}
      .paragraph{padding: 10px;}

      .bdg-sect{
        padding-top:100px;
        padding-bottom:100px;
        font-family: Helvetica, serif;
        background-color: #fafafa;
      }
      .bdg-title{
        text-align: center;
        font-size: 2em;
        margin-bottom: 55px;
        color: #555555;
      }
      .badges{
        padding:20px;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        flex-wrap: wrap;
      }
      .badge{
        width: 290px;
        font-family: Helvetica, serif;
        background-color: white;
        margin-bottom:30px;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
        border-radius: 3px;
        font-weight: 100;
        overflow: hidden;
        text-align: center;
      }
      .badge-header{
        height: 115px;
        background-image:url("https://grapesjs.com/img/bg-gr-v.png"), url("https://grapesjs.com/img/work-desk.jpg");
        background-position:left top, center center;
        background-attachment:scroll, fixed;
        overflow: hidden;
      }
      .blurer{
        filter: blur(5px);
      }
      .badge-name{
        font-size: 1.4em;
        margin-bottom: 5px;
      }
      .badge-role{
        color: #777;
        font-size: 1em;
        margin-bottom: 25px;
      }
      .badge-desc{
        font-size: 0.85rem;
        line-height: 20px;
      }
      .badge-avatar{
        width:100px;
        height:100px;
        border-radius: 100%;
        border: 5px solid #fff;
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);
        margin-top: -75px;
        position: relative;
      }
      .badge-body{
        margin: 35px 10px;
      }
      .badge-foot{
        color:#fff;
        background-color:#a290a5;
        padding-top:13px;
        padding-bottom:13px;
        display: flex;
        justify-content: center;
      }
      .badge-link{
        height: 35px;
        width: 35px;
        line-height: 35px;
        font-weight: 700;
        background-color: #fff;
        color: #a290a5;
        display: block;
        border-radius: 100%;
        margin: 0 10px;
      }
      .quote{
        color:#777;
        font-weight: 300;
        padding: 10px;
        box-shadow: -5px 0 0 0 #ccc;
        font-style: italic;
        margin: 20px 30px;
      }

      @media (max-width: 768px){
        .foot-form-cont{
          width:400px;
        }
        .foot-form-title{
          width:autopx;
        }
      }

      @media (max-width: 480px){
        .foot-lists{
          display:none;
        }
      }
    `)

  }

}