/*
* Stacked Cards v1.1
* Created: Dec 2016
* Author: Juned Chhipa
*/


// NEW ADDITIONS THAT CAN BE MADE
// stack -> all cards on top of each other. when click and drag, the top one goes to bottom, like someone dealing cards(ace,king,quuen)
// book -> some on left, some on right. when click, the cards rotate like a page has been turned. can only turn one page at time.
// rack -> cards rotate vertically, like clothes on a rack.

// for book
// TODO:
/*
call:: layout: book
	   transform-origin: center <- or maybe left for some, right for some
reCalculateTransformsOnClick needs to transform the cards vertically.
in click event listener, it dosent matter what was clicked. get only the direction.
*/

(function(){
    const bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }

	// stackedCards is a function. This is the contructor for initialising package
    window.stackedCards = (function()
	{
		// this will set the class member 'defaults'
        stackedCards.prototype.defaults =
		{
            layout: 'slide',                     // slide, fanOut
            onClick: undefined,                 // onclick event provided
            transformOrigin: "center",          // css transformOrigin
        };

        function stackedCards(options)
		{
            if (options == null)
			{
                options = {};
            }
			// draw and config are methods that will be shared by all instances of stackedCards object.
			// draw method is defined below
            this.draw = bind(this.draw, this);
			// extend method is defined below.
			// extend method copies those values of defaults to options that are not present in options
			// so we are add the default but unspecified properties to options
			// this.defaults is defined above.
            this.config = this.extend(options, this.defaults);
        }

		// this funciton gets called after creating the stackedCards object
        stackedCards.prototype.init = function ()
		{
            const ref = document.readyState
			// documentElement refers to the whole HTML tag.
            this.element = window.document.documentElement;
            if (ref === "interactive" || ref === "complete")
			{
				// if the document is loaded, then draw everything
                this.draw();
            } else
			{
				// othwrwise, wait for it to load, then draw it
                document.addEventListener('DOMContentLoaded', this.draw);
            }
        }

		// this finctio os called inside init
        stackedCards.prototype.draw = function ()
		{
            var me = this;

			// selector is the tag name that is to be processed
            var selector = this.config.selector;
			// config.selector is passed as param to constructor.
			// it is the div element with class .stacked-cards. It contains the group of li tags

			// els is the li tags inside card container element. these appear as colored boxes
            this.els = document.querySelectorAll(selector + " li");
            var els = this.els;

			// the parent is the ul/ol tag that the li tags are present in
            this.parent = els[0].parentNode;

            // Sets height of cards adjusted to the height of the content of the tallest card
            var getItemHeight = me.getHeight().max;// return of function is object, with max as property. it is height of largest element
            els.forEach(item => item.style.height = parseInt(getItemHeight) + "px");
			// set height of all li tags to the max height???

			// THESE ARE THE INITIAL CONDITIONS

            // to get the active element's position, we will have to know if elements are in even/odd count
            var lenAdjust = (els.length%2==0 ? -2 : -1)

            // oneHalf if the centerPoint - things go left and right from here
            var oneHalf = (els.length+lenAdjust)/2;
			// when there are odd number of li tags, the middle is at max height.

            var activeTransform = "translate("+ -50 +"%, 0%)  scale(1)"; // css value to place the active elemnt at the center

            this.detectSwipe();


            Array.prototype.forEach.call(els, function(el)
			{
				// transformOrigin determines the center of rotation of elemnt.
				// for "slide" it is at center. for "fanout" it is at bottom
                el.style.transformOrigin = me.config.transformOrigin;

				// tells what to do when an element is clicked
                el.addEventListener("click", function()
				{

                    var clickedEl = el; // stores li tag that was pressed
                    var nextCnt = 0; // stores number of li that come after this
                    var prevCnt = 0;

                    do
					{
                        // While there is a next sibling, loop
                        var next = clickedEl.nextElementSibling;
                        nextCnt = nextCnt + 1;

                    } while(clickedEl = clickedEl.nextElementSibling);

                    // re-initialize the clickedEl to do the same for prev elements
                    clickedEl = el;

                    do
					{
                        // While there is a prev sibling, loop
                        var prev = clickedEl.previousElementSibling;
                        prevCnt = prevCnt + 1;
                    } while(clickedEl = clickedEl.previousElementSibling);

                    me.reCalculateTransformsOnClick(nextCnt - 1, prevCnt - 1)

                    me.loopNodeList(els, function(el) {el.classList.remove("active");})

                    el.classList.add("active"); // make the clicked element active
                    el.classList.add(me.config.layout) // add the layout=slide property

                    el.style.zIndex = els.length*5; // place this element topmost
                    el.style.transform = activeTransform;

                    if (me.config.onClick !== undefined)
					{
                         me.config.onClick(el);
                    }

                });
            });

            els[oneHalf].click();

        }


		//this function returns the heights of all elents
		// in html, the container has been given a height. then, we are scaling all the li tags.
		// this causes all element to have diff heights.
        stackedCards.prototype.getHeight = function() {

			// els is node list of all li tags. this function converts the node list to array of node elements
            var els = this.nodelistToArray(this.els);

			// get heights of all li tags and sort them in increasing order
            var elHeights = els.map(item => item.scrollHeight).sort((a, b)=>b-a);
            var maxHeight = elHeights[0];

			// return the list of all heights and the max height
            return { heights: elHeights, max: maxHeight };
        }

		// this function calculates the position, rotation and size of all li elemnet after click.
		// might need to figure logic for this
        stackedCards.prototype.reCalculateTransformsOnClick = function(nextCnt, prevCnt) {
            var me = this;
            var maxHeight = me.getHeight().max;
            var vertOffsets = me.getHeight().heights.map(item=> Math.round((( 1 - ( item / maxHeight )) * -100) ));

            var z = 10;

            var els = this.nodelistToArray(this.els);

            els[0].parentNode.style.height = parseInt(me.getHeight().max) + "px";

            var scale = 1, translateX = 0, translateY = 0, rotateVal=0, rotate="";
            var rotateNegStart = 0// ((75 / els.length) * (oneHalf))*-1;

            var transformArr = [];
            var zIndexArr = [];
            var relArr = [];

            var layout = this.config.layout;

            var maxCntDivisor = Math.max(prevCnt, nextCnt);
            var prevDivisor = 100 / (maxCntDivisor);
            var nextDivisor = 100 / (maxCntDivisor);

            if(prevCnt>nextCnt) {
                scale = 0 + (100 / (prevCnt+1))/100;
            }
            else {
                scale = 1 - ((prevCnt) *(1/(nextCnt+1)));
            }

            var rotatePrevStart = ((prevCnt*10 / (prevCnt) * prevCnt))*-1;
            var rotateNextStart = ((nextCnt*10 / (nextCnt)));

            for(var i=0; i<prevCnt; i++) {
                switch(layout) {
                    case "slide":
                        if(i>0) {
                            scale = scale + (100 / (maxCntDivisor+1))/100;
                        }

                        translateX = (-50 - ((prevDivisor)*(prevCnt-i)));
                        translateY = vertOffsets[i] / 2;

                        rotate = "rotate(0deg)";
                        break;
                    case "fanOut":
                        rotateVal = rotatePrevStart;

                        if(i>0) {
                            scale = scale + (100 / (maxCntDivisor+1))/100;
                        }
                        translateX = (-50 - ((prevDivisor)*(prevCnt-i)));
                        rotate = "rotate("+rotateVal+"deg)";

                        rotatePrevStart = rotatePrevStart + ((prevCnt*10) / prevCnt);

                        break;
                    default:
                        translateX = (150 - ((prevDivisor*2)*i)) * -1;
                        rotate = "rotate(0deg)";

                }

                var styleStr = "translate("+ translateX +"%, 0%)  scale("+scale+") " + rotate;

                z = z + 1;

                els[i].style.transform = styleStr;
                els[i].style.zIndex = z;

            }

            // we are going for active element, so make it higher
            z = z - 1;

            var j = 0;

            rotateNegStart = 0;
            scale = 1;
            for(var i=prevCnt+1; i<nextCnt+prevCnt+1; i++) {
                j = j + 1;
                switch(layout) {
                    case "slide":
                        scale = scale - (100 / (maxCntDivisor+1))/100;
                        translateX = (50 - ((nextDivisor)*(j))) * -1;
                        translateY = vertOffsets[i] / 2;

                        rotate = "rotate(0deg)";
                        break;
                    case "fanOut":
                        rotateVal = rotateNextStart;

                        scale = scale - (100 / (maxCntDivisor+1))/100;
                        translateX = (50 - ((nextDivisor)*(j))) * -1;
                        rotate = "rotate("+rotateVal+"deg)";

                        rotateNextStart = rotateNextStart + ((nextCnt*10) / nextCnt);
                        break;
                    default:
                        translateX = (50 - ((prevDivisor*2)*i)) * -1;
                        rotate = "rotate(0deg)";

                }

                z = z - 1;

                var styleStr = "translate("+ translateX +"%, 0%)  scale("+scale+") " + rotate;

                els[i].style.transform = styleStr;
                els[i].style.zIndex = z;
            }



        }

		// this functuion is for mobile devices. triggers click event for respective element when detected swipe
        stackedCards.prototype.detectSwipe = function() {
            var me = this;
            var regionEl = document.querySelector(me.config.selector);

            me.detectSwipeDir(regionEl, function(swipedir){
                var activeEl = document.querySelector(me.config.selector + " li.active");
                if (swipedir =='left') {
                    activeEl.nextElementSibling.click();
                }
                else if(swipedir=="right") {
                    activeEl.previousElementSibling.click();
                }
            })

        }

		// this function adds the default object properties to those passed as params and returns it
        stackedCards.prototype.extend = function(custom, defaults) {
            var key, value;
            for (key in defaults) {
                value = defaults[key];
                if (custom[key] == null) {
                  custom[key] = value;
                }
            }
            return custom;
        }

		// converts the list of element node object list to array
        stackedCards.prototype.nodelistToArray = function(nodelist) {
            var results = [];
            var i, element;
            for(i=0; i < nodelist.length; i++) {
                element = nodelist[i];
                results.push(element);
            }
            return results;
        }

        stackedCards.prototype.loopNodeList = function(els, callback, scope) {
            for (var i = 0; i < els.length; i++) {
                callback.call(scope, els[i])
            }
        }


        stackedCards.prototype.scrolledIn = function(el, offset) {
            if(typeof el == 'undefined') return;

            var elemTop = el.getBoundingClientRect().top;
            var elemBottom = el.getBoundingClientRect().bottom;

            var scrolledInEl = (elemTop >= 0) && (elemTop <= window.innerHeight);
            return scrolledInEl;

        }

		// on mobile devices, detects what direction the user swiped in
        stackedCards.prototype.detectSwipeDir = function(el, callback) {

            //credits: http://www.javascriptkit.com/javatutors/touchevents2.shtml

            var touchsurface = el,
            swipedir,
            startX,
            startY,
            distX,
            distY,
            threshold = 75, //required min distance traveled to be considered swipe
            restraint = 100, // maximum distance allowed at the same time in perpendicular direction
            allowedTime = 300, // maximum time allowed to travel that distance
            elapsedTime,
            startTime,
            handleswipe = callback || function(swipedir){}

            touchsurface.addEventListener('touchstart', function(e){
                var touchobj = e.changedTouches[0]
                swipedir = 'none'
                dist = 0
                startX = touchobj.pageX
                startY = touchobj.pageY
                startTime = new Date().getTime() // record time when finger first makes contact with surface
                e.preventDefault()
            }, false)

            touchsurface.addEventListener('touchmove', function(e){
               // e.preventDefault() // prevent scrolling when inside DIV
            }, false)

            touchsurface.addEventListener('touchend', function(e){
                var touchobj = e.changedTouches[0]
                distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
                distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
                elapsedTime = new Date().getTime() - startTime // get time elapsed
                if (elapsedTime <= allowedTime){ // first condition for awipe met
                    if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
                        swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
                    }
                    else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
                        swipedir = (distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
                    }
                }
                handleswipe(swipedir)
                e.preventDefault()
            }, false)

        }

        return stackedCards;

    })();
}).call(this);

export default stackedCards
