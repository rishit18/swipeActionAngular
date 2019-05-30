import {keyframes,style}from '@angular/animations';

export const swing = [
    style({transform: 'rotate3d(0, 0, 1, 15deg)',offset: .2}),
    style({transform: 'rotate3d(0, 0, 1, -10deg)',offset: .4}),
    style({transform: 'rotate3d(0, 0, 1, 5deg)',offset: .6}),
    style({transform: 'rotate3d(0, 0, 1, -5deg)',offset: .8}),
    style({transform: 'none',offset: 1}),
    
]
export const zoomOutLeft = [
    style({opacity: 1,transform: 'scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)',offset: .4}),
    style({opacity: 1,transform: 'scale(0.1) translate3d(-2000px, 0, 0) ',offset: 1}),
   
]