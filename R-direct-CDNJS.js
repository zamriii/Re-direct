function get_url(){
var urlParams = new URLSearchParams(window.location.search);
return urlParams.get('url');
}