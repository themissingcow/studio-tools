
function renderRotaryKnob( element, knobData ) {

	var dial;
	var scale;


	var createMark = function( cssPrefix ) {

		var mark = document.createElement( 'div' );
		mark.classList.add( cssPrefix );

		var markFill = document.createElement( 'div' );
		markFill.classList.add( cssPrefix + '-fill' );
		mark.appendChild( markFill );

		return mark;
	}

	var renderDial = function( parent ) {

		dial = document.createElement( 'div' );
		dial.classList.add( 'knob-dial' );
		parent.appendChild( dial );

		dial.appendChild( createMark('knob-dial-mark') );

		var valueRange = knobData.valueEnd - knobData.valueStart;
		var angleRange = valueRange * 360;

		var normalizedValue = ((knobData.value - knobData.minValue) / (knobData.maxValue - knobData.minValue));
		var knobAngle = ( angleRange * normalizedValue ) + ( 360 * knobData.valueStart );
		dial.style.transform = 'rotateZ( ' + knobAngle + 'deg)';
	}

	var renderScale = function( parent ) {

		scale = document.createElement( 'div' );
		scale.classList.add( 'knob-scale' );
		parent.appendChild( scale );

		var minTick = createMark( 'knob-scale-tick' );
		minTick.classList.add( 'tick-min' );

		var maxTick = createMark( 'knob-scale-tick' );
		maxTick.classList.add( 'tick-max' );

		var minRotate = 360 * knobData.valueStart;
		minTick.style.transform = 'rotateZ( '+minRotate+'deg )';

		var maxRotate = 360 * knobData.valueEnd;
		maxTick.style.transform = 'rotateZ( '+maxRotate+'deg )';

		scale.appendChild( minTick );
		scale.appendChild( maxTick );
	}


	// BUILD

	var container = document.createElement( 'div' );
	container.classList.add( 'knob-container' );
	element.appendChild( container );

	renderScale( container );
	renderDial( container );

	var readout = document.createElement( 'div' );
	readout.classList.add( 'knob-value-display' );
	readout.innerHTML = knobData.value;

	container.appendChild( readout );
}






