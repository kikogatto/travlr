import {Component} from 'angular2/core';
import {Button}   from './button';
import {BackgroundMenu}   from './backgroundMenu';


@Component({
    selector: 'masthead',
    template: `
		<header class="bar bar-nav">
		  <a class="icon pull-left" ng-if="leftIcon"><i class="fa {{leftButton.icon}}"></i></a>
		  <a class="icon pull-right" ng-if="rightIcon" (click)='toggleMenu()'><i class="fa {{rightButton.icon}}"></i></a>
		  <h1 class="title">{{title}}</h1>
		</header>
    `,
    directives: [BackgroundMenu]
})

export class Masthead {
	public title = 'Travlr';

	public leftButton :Button = {
		icon : '',
		label: undefined
	};

	public rightButton :Button = {
		icon : 'fa-navicon',
		label: undefined
	};

	public toggleMenu = function() {

	}
}