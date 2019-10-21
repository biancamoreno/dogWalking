import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() type: String = 'button';
  @Input() style: String = 'primary';
  @Input() label: String = 'enviar';
  @Input() icon: String;

  constructor() { }

  ngOnInit() {
  }

}
