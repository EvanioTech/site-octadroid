import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
@Input()
foto:string ='../../../assets/images 1.png'
@Input()
texto:string =''
@Input()
titulo:string=''
}
