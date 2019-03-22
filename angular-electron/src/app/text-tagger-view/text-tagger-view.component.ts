import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-tagger-view',
  templateUrl: './text-tagger-view.component.html',
  styleUrls: ['./text-tagger-view.component.scss']
})
export class TextTaggerViewComponent implements OnInit {

  @Input() text: Object;

  constructor() { }

  ngOnInit() {
  }

}
