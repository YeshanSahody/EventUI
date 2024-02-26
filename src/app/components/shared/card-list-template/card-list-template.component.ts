import { Component, Input } from '@angular/core';

@Component({
  selector: 'sdw-card-list-template',
  templateUrl: './card-list-template.component.html',
  styleUrl: './card-list-template.component.scss'
})
export class CardListTemplateComponent {
  @Input() entity : string = ' ';
  @Input() list : any[] = [];

  ngOnInit():void {
    console.log("List from another component: ",this.list);
  }
}
