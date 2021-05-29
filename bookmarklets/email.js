(function(){

    function getSelectionText() {
	var text = "";
	if (window.getSelection) {
            text = window.getSelection().toString();
	} else if (document.selection && document.selection.type != "Control") {
            text = document.selection.createRange().text;
	}
	return text;
    }

    function format_body() {
	var body = "";
	body += "URL: " + document.location + "\n\n";
	body += "TITLE: " + document.title + "\n\n";
	body += "LAST MODIFIED: " + document.lastModified + "\n\n";

	var quote = getSelectionText();
	if (quote !== "") {
	    body += "------------------------------------------\n";
	    body += "SELECTED TEXT:\n\n" + quote + "\n\n";
	    body += "------------------------------------------\n\n";
	}
	
	return escape(body);
    }

    function make_url() {
	var result = "mailto:michael.j.stringer@gmail.com?";
	result += "subject=[email to self]: " + document.title + "&";
	result += "body=" + format_body();
	return result;
    }
    
    console.log(make_url());
    window.open(make_url());
    
})()
