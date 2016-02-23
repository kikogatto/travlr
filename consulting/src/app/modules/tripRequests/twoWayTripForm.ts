import {Component} from 'angular2/core';
import {Button}   from '../../assets/components/button';

@Component({
    selector: 'two-way-trip-form',
    template: `
		<form>
		  <div style='height:60px;'>
		      <div airport-search label='From:'></div>
		      <div airport-search label='To:'></div>
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
		  <button type="submit" class="btn btn-default">Request</button>
		</form>
    `
})

export class TwoWayTripForm {

}