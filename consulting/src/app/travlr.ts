import {Component} from 'angular2/core';
import {Masthead}  from './assets/components/masthead';
import {Toolbar}   from './assets/components/toolbar';
import {BackgroundMenu}   from './assets/components/backgroundMenu';

@Component({
    selector: 'travlr',
    template: `
		<section class='closed'>
		    <masthead>a</masthead>
		    <toolbar>a</toolbar>
		    <div class='content'>
		      <div style='color:gray; text-align:center;'>
		        <br><Br><BR><BR>
		        <i class='fa fa-paper-plane-o' style='font-size:80px;color:gray;'></i>
		        <div>You don't have any trips</div>
		      </div>
		    </div>
		</section>
		<background-menu class='backgroundMenu'></background-menu>
    `,
    directives: [Masthead, Toolbar, BackgroundMenu]
})

export class Travlr {}