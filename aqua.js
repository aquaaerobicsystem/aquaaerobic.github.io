function get(name){
    var url = window.location.search;
    var num = url.search(name);
    var namel = name.length;
    var frontlength = namel+num+1; //length of everything before the value
    var front = url.substring(0, frontlength);
    url = url.replace(front, "");
    num = url.search("&");
    if(num>=0) return url.substr(0,num);
    if(num<0)  return url;
}

//v4.0 Add popup describing app when visitors load webpage the first time
window.onload = function() {
    populateshoppinglistonload();
};
function populateshoppinglistonload()
{
 var geturl = get("id");
 var website = geturl
 document.getElementById("MyList").innerHTML = '';
 document.getElementById("MyList").innerHTML = '<iframe frameborder="0" src=' + website + ' width="100%" height="1200"></iframe>';   
}
 
