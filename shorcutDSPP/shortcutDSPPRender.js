function shortcutDSPP($)
{
	this.fromVariable;
	var idVar;
	var currentId;
	this.show = function()
	{
		///UserCodeRegionStart:[show] (do not remove this comment.)
		var localThis	= this;
		var idVar		= this.fromVariable;
		var arr 		= idVar.split(",");
		$.each( arr, function( index, value ) {
		  	$("#"+value).focus(function() {
		        localThis.toPrompt	= value;
		        currentId	= value;
		    }); 
		});
		window.onhelp = function() {
		    return false;
		};
		window.onkeydown = evt => {
		    switch (evt.keyCode) {
		        //f3
		        case 114:
		            window.history.back();
		            break;
		        //F4
		        case 115:
		        	if (idVar === undefined || idVar === '') {
		        		alert("Asignar variable para evento F4.")
		        	} else {
		        		if ($("#"+currentId).is(":focus")) {
						  	localThis.onF4();
						}
		        	}
		            break;
		        //Fallback to default browser behaviour
		        default:
		            return true;
		    }
		    //Returning false overrides default browser event
		    return false;
		};

		///UserCodeRegionEnd: (do not remove this comment.)
	}
	///UserCodeRegionStart:[User Functions] (do not remove this comment.)
	///UserCodeRegionEnd: (do not remove this comment.):
}
//(c) JS DISPAPELES 