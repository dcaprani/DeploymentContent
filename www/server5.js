var sys = require('sys'),
fs = require('fs'),
http = require('http'),
url = require('url');

http.createServer(function (req, res) {
	var url_parts = url.parse(req.url);
	var html;
	
	//var newJSON = fs.writeFileSync('player.json', formInput);
	
	switch(url_parts.pathname) {
	case '/formInput':
		console.log("form");		
		process_form(url_parts.pathname, req, res);
		break;
	case '/playerName':
		console.log("playerName");
		return_json(url_parts.pathname, req, res);
		break;
	case '/aboutDesc':
		console.log("aboutDesc");
		about_desc(url_parts.pathname, req, res);
		break;
	case '/nothing':
		console.log("nothing");
		_nothing(url_parts.pathname, req, res);
		break;
	case '/banner':
		console.log("banner");
		ban_desc(url_parts.pathname, req, res);
		break;
	case '/appForm':
		console.log("ApplicationForm Called");
		display_appForm(url_parts.pathname, req, res);
		break;
	default:
		display_404(url_parts.pathname, req, res);
	}
	return;
	
	function process_form(url, req, res) {
		if(req.method == 'POST'){
			var body = '';
			req.on('data', function(data){
				body+= data;
				fs.writeFileSync("player.json", body);	
			});
			req.on('end', function(){
				body = JSON.parse(body);
				console.log("Hello " + body.firstname);
				console.log(body)
			});
		}
	}
	
	function return_json(url, req, res){
		console.log("JSON Request Received");
		var jsonData = fs.readFileSync("player.json");
		console.log("Data: " + jsonData);
		var obj = JSON.parse(jsonData);
		var playerDetails = jsonData;
		console.log("" + playerDetails);
		
		//res.writeHead(200, {"Content-Type": "application/json","Access-Control-Allow-Origin": "*"});
		res.writeHead(200, {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Method": "POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": req.headers["access-control-request-headers"]
    });
		res.write("" + playerDetails);
		res.end();
	}
	
	function display_form(url, req, res) {
		html = fs.readFileSync("applicationForm.html", "UTF-8");
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(html);
		res.end();
	}
	function display_menu(url, req, res) {
		html = fs.readFileSync("Halloween_Menu.html", "UTF-8");
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.write(html);
		res.end();
	}
	function about_desc(url, req, res) {
		console.log("aboutDesc function called");
		abtTxt = fs.readFileSync("AboutDescription.txt");
		console.log("" + abtTxt);
		res.writeHead(200, {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Method": "POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": req.headers["access-control-request-headers"]
		});
		res.write("" + abtTxt);
		res.end();
	}
	function ban_desc(url, req, res) {
		console.log("_nothing function called");
		text = fs.readFileSync("BannerDescription.txt");
		console.log("" + text);
		res.writeHead(200, {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Method": "POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": req.headers["access-control-request-headers"]
		});
		res.write("" + text);
		res.end();
	}	
	function _nothing(url, req, res) {
		console.log("_nothing function called");
		text = fs.readFileSync("nothing.txt");
		console.log("" + text);
		res.writeHead(200, {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Method": "POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": req.headers["access-control-request-headers"]
		});
		res.write("" + text);
		res.end();
	}
	
	function display_appForm(url, req, res) {
		html = fs.readFileSync("applicationForm.html", "UTF-8");
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(html);
		res.end();
	}
	
	function display_404(url, req, res) {
		res.writeHead(404, {'Content-Type': 'text/html'});
		res.write("<h1>404 Not Found</h1>");
		res.end("The page you were looking for: "+url+" can not be found");
	}
}).listen(8040);

sys.puts('Server running at http://127.0.0.1:8040/');