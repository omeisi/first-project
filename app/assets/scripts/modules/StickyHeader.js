import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';



class StickyHeader {
	constructor() {
		this.lazyImages = $("lazyload");
		this.siteHeader = $(".site-header");
		this.headerTriggerElement = $(".large-hero__title");
		this.createHeaderWaypoint();
		this.pageSection = $('.page-section');
		this.headerLinks = $('.primery-nav a');
		this.createPageSectionWaypoints();
		this.addSmoothScrolling();
		this.refreshWayPoints();
	}

	refreshWayPoints (){
		this.lazyImages.on('load', function(){
			waypoint.refreshAll();
		});
	}

	addSmoothScrolling (){
		this.headerLinks.smoothScroll();
	}

	createHeaderWaypoint(){
		var that = this;
		new Waypoint({
			element: this.headerTriggerElement[0],
			handler: function (diraction){
				if(diraction == "down") {
					that.siteHeader.addClass("site-header__dark");
				}else {
					that.siteHeader.removeClass("site-header__dark");
				}		
			}
		});
	}

	createPageSectionWaypoints (){
		var that = this;

		this.pageSection.each(function(){
			var currentPageSection = this;
			
			new Waypoint({
				element: currentPageSection,
				handler:function(diraction){
					if(diraction == "down") {
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link");
					}

					
				},
				offset: "18%"
			});

			new Waypoint({
				element: currentPageSection,
				handler:function(diraction){
					if(diraction == "up") {
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link");
					}

					
				},
				offset: "-40%"
			});
		});
	}

}

export default StickyHeader;