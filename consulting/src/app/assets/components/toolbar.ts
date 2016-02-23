import {Component} from 'angular2/core';
import {Button}   from './button';
import {EngagementForm}   from '../../modules/engagements/engagementForm';
import {TwoWayTripForm}   from '../../modules/tripRequests/twoWayTripForm';

@Component({
    selector: 'toolbar',
    template: `
		<section class='toolbar'>
		    <div class="bar bar-standard bar-footer-secondary {{status}}" [ngSwitch]="toolbarPanel">
		    	<template [ngSwitchWhen]="'2 way trip'"><two-way-trip-form>Engagement</two-way-trip-form></template>
		    	<template [ngSwitchWhen]="'Favorites'">Lista de favoritos</template>
		    	<template [ngSwitchWhen]="'Engagement'"><engagement-form>Engagement</engagement-form></template>
		    </div>
		    <nav class="bar bar-tab">
		        <a class="tab-item" (click)='selectTab(0)'>
		        	<span class="icon"><i class='fa {{tabs[0].icon}}'></i></span>
		        	<span class="tab-label">{{tabs[0].label}}</span>
		        </a>
		        <a class="tab-item" (click)='selectTab(1)'>
		            <span class="icon"><i class='fa {{tabs[1].icon}}'></i></span>
		            <span class="tab-label">{{tabs[1].label}}</span>
		        </a>
		        <a class="tab-item" (click)='selectTab(2)'>
		        	<span class="icon"><i class='fa {{tabs[2].icon}}'></i></span>
		        	<span class="tab-label">{{tabs[2].label}}</span>
		        </a>
		    </nav>
		</section>
    `,
    directives: [EngagementForm, TwoWayTripForm]
})

export class Toolbar {
	public tabs : Button[] = [
		{
			icon : 'fa-paper-plane-o',
			label: '2 way trip'
		},
		{
			icon : 'fa-star',
			label: 'Favorites'
		},
		{
			icon : 'fa-suitcase',
			label: 'Engagement'
		}
	];
	public toolbarPanel = undefined;
	public status = 'closed';
	selectedTab = undefined;
	originalIcon = undefined;

	public selectTab = function ( tab ) {
		if( this.selectedTab ) {
			this.selectedTab.icon = this.originalIcon;
			if( this.selectedTab === this.tabs[tab] ) {
				this.selectedTab = undefined;
				this.status = 'closed';
				this.toolbarPanel = undefined;
				return;
			}
		}
		this.selectedTab = this.tabs[tab];
		this.originalIcon = this.tabs[tab].icon;
		this.tabs[tab].icon = 'fa-minus';
		this.status = 'open';
		this.toolbarPanel = this.selectedTab.label;
	}
}