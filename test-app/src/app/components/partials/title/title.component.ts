import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
constructor(){}
  @Input()
  title!: string;

  @Input()
  margin? = '1rem 0 irem 0.2rem';

  @Input()
  fontSize? = '1.7rem'
}
