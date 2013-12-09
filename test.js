function test(){
    if(window.localStorage){
	var local_storage = window.localStorage;
	console.log(window.localStorage);
	var name = "test";
	var facter = "a";
	var obj = {a:facter};
	var str = JSON.stringify(obj);
	localStorage.setItem(name,str);

	var json = JSON.parse(localStorage.getItem(name));
	    alert(json.a);
    }
}
