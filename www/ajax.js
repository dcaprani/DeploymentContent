var XMLHttpRequestObject = false;
if (window.XMLHttpRequest) {
		XMLHttpRequestObject = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		XMLHttpRequestObject =
		new ActiveXObject("Microsoft.XMLHTTP");
	}
	function getData(datasource, divID) {
		if (XMLHttpRequestObject) {
				var obj = document.getElementById(divID);
				XMLHttpRequestObject.open("GET", datasource, true);
			XMLHttpRequestObject.onreadystatechange = function(){
					if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200)
				{
					obj.innerHTML = XMLHttpRequestObject.responseText;
				}

			}
			XMLHttpRequestObject.send();
		}
	}
	
//Form Submit Stuff
/*
$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};
*/


/*$(function() {
    $('#sammy').submit(function() {
		var data = JSON.stringify($('form').serializeObject())
       // $('#result').text("" + data);
		$('#sammy').find("input[type=text], textarea").val("");
		 $('#welcome').removeAttr('disabled');
/********************Sending Form Data*************************		
		if (XMLHttpRequestObject) {
			XMLHttpRequestObject.open("POST", "http://127.0.0.1:8000/formInput", true);
			XMLHttpRequestObject.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			console.log("" + data);
						
			XMLHttpRequestObject.onreadystatechange = function(){
					if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200)
				{
					//var returnedData = XMLHttpRequestObject.responseText;
					//var obj = eval("(" + returnedData + ")");
					//$('#result').innerHTML = ("Welcome to the club " + returnedData.firstName);
				}
			}
			XMLHttpRequestObject.send(data);
		}
        return false;
    });
});***/	
/*
$(function(){
	$('#welcome').onClick(function(){
		if (XMLHttpRequestObject) {
				//var obj = document.getElementById(divID);
				XMLHttpRequestObject.open("GET", "http://127.0.0.1:8000/playerName", true);
				XMLHttpRequestObject.onreadystatechange = function(){
					if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200)
				{
					var returnedData = XMLHttpRequestObject.responseText;
					$("#result").innerHTML = ("Welcome to the club " + returnedData);
				}
			}
			XMLHttpRequestObject.send(null);
		}		
	});
});


$(function(){
	$('#welcome').click(function(){
		if (XMLHttpRequestObject) {
				//var obj = document.getElementById(divID);
				XMLHttpRequestObject.open("GET", "http://127.0.0.1:8000/playerName", true);
				XMLHttpRequestObject.onreadystatechange = function(){
					if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200)
				{
					var welcomeNote = XMLHttpRequestObject.responseText
					var obj = JSON.parse(welcomeNote);
					$('#result').text(" Hi " + obj.firstname + "! Welcome to the club");
					//$('#result').innerHTML = XMLHttpRequestObject.responseText;
					//alert(XMLHttpRequestObject.responseText);
					var returnedData = XMLHttpRequestObject.responseText;
					//var obj = eval("(" + returnedData + ")");
					//var name = obj.firstname;
					//$("#result").innerHTML = ("Welcome to the club " + returnedData);
					
				}
			}
			XMLHttpRequestObject.send(null);
			$('#welcome').attr('disabled','disabled');
		}		
	});
});
*/
// JQuery Ajax request for web page
//JavaScript AJAX code here
/*$(document).ready(function()

		{

		//Attach a handler to the click event

		//of the link on the page:

		$('a').click(function()

		{

		//Target the div with id of result

		//and load the content from the specified url

		//and the specified div element into it:

		$('#result').load('DivHomePage.html #menu');

		});

});
*/

///Bouncy Stuff
		$.fn.bounce = function(options) {

		    var settings = $.extend({
		        speed: 10
		    }, options);

		    return $(this).each(function() {

		        var $this = $(this),
		            $parent = $this.parent(),
		            height = $parent.height(),
		            width = $parent.width(),
		            top = Math.floor(Math.random() * (height / 2)) + height / 4,
		            left = Math.floor(Math.random() * (width / 2)) + width / 4,
		            vectorX = settings.speed * (Math.random() > 0.5 ? 1 : -1),
		            vectorY = settings.speed * (Math.random() > 0.5 ? 1 : -1);

		        // place initialy in a random location
		        $this.css({
		            'top': top,
		            'left': left
		        }).data('vector', {
		            'x': vectorX,
		            'y': vectorY
		        });

		        var move = function($e) {

		            var offset = $e.offset(),
		                width = $e.width(),
		                height = $e.height(),
		                vector = $e.data('vector'),
		                $parent = $e.parent();

		            if (offset.left <= 80 && vector.x < 0) {
		                vector.x = -1 * vector.x;
		            }
		            if ((offset.left + width-60) >= $parent.width()) {
		                vector.x = -1 * vector.x;
		            }
		            if (offset.top <= 20 && vector.y < 0) {
		                vector.y = -1 * vector.y;
		            }
		            if ((offset.top + height) >= $parent.height()) {
		                vector.y = -1 * vector.y;
		            }

		            $e.css({
		                'top': offset.top + vector.y + 'px',
		                'left': offset.left + vector.x + 'px'
		            }).data('vector', {
		                'x': vector.x,
		                'y': vector.y
		            });

		            setTimeout(function() {
		                move($e);
		            }, 50);

		        };

		        move($this);
		    });

		};

		$(function() {
		    $('#wrapper li').bounce({
		        'speed': 7
		    });
});