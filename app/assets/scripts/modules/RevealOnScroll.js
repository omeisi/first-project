import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	constructor(element,offset){

		this.itemsToReveal = element;
		this.offsetPrecent = offset;
		this.hideInitially();
		this.createWaypoints();
	}

	hideInitially () {
		this.itemsToReveal.addClass("reveal-item");
	}

	createWaypoints() {
		var that = this;

		this.itemsToReveal.each(function(){
			var currentItem = this;
			new Waypoint({
				element: currentItem,
				handler: function (){
					$(currentItem).addClass("reveal-item__is-visible");
				},
				offset: that.offsetPrecent
			});
		});
	}

}

export default RevealOnScroll;