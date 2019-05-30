import { Component, OnInit } from '@angular/core';
import{trigger,keyframes,animate,transition} from '@angular/animations';
import * as kf from './keyframes';
import { Indicator, IndicatorAnimations } from '';
@Component({
  selector: 'app-hammer-card',
  templateUrl: './hammer-card.component.html',
  styleUrls: ['./hammer-card.component.css'],
  animations:[
    trigger('cardAnimator',[
     // transition('* => wobble',animate(1000,keyframes(kf.wobble))),
      transition('* => swing',animate(1000,keyframes(kf.swing))),
      // transition('* => jello',animate(1000,keyframes(kf.jello))),
       transition('* => zoomOutLeft',animate(1000,keyframes(kf.zoomOutLeft))),
      // transition('* => slideOutLeft',animate(1000,keyframes(kf.slideOutLeft))),
      // transition('* => rotateOutUpRight',animate(1000,keyframes(kf.rotateOutUpRight))),
      // transition('* => flipOutY',animate(1000,keyframes(kf.flipOutY))),
    ])
  ]
})
export class HammerCardComponent implements OnInit {
animationState:string;
  constructor() { }
startAnimation(state)
{
  console.log(state)
  if(!this.animationState)
  {
    this.animationState=state;
  }
}

resetAnimation()
{
  this.animationState='';
}
  ngOnInit() {
  }

}
