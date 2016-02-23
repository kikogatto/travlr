import {Component} from 'angular2/core';
import {Button}   from '../../assets/components/button';

@Component({
    selector: 'engagement-form',
    template: `
		<form>
		  <div class="form-group">
		    <label for="engagementName">Engagement Name</label>
		    <input  class="form-control" id="engagementName" placeholder="Name"  type='text'>
		  </div>
		  <div class="form-group">
		    <label for="engagementCity">City</label>
		    <input type="text" class="form-control" id="engagementCity" placeholder="City">
		  </div>
		  <div class="form-group">
		    <label for="engagementChargeCode">Charge Code</label>
		    <input type="text" class="form-control" id="engagementChargeCode" placeholder="Charge Code">
		  </div>
		  <div class="checkbox">
		    <label>
		      <input type="checkbox"> Include hotel?
		    </label>
		  </div>
		  <button type="submit" class="btn btn-default">Create</button>
		</form>
    `
})

export class EngagementForm {

}