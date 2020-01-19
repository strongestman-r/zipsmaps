$(document).ready(function(){
	$("#button").click(function(){
		var lat=$("#lat").val();
		var lng=$("#lng").val();
		var myCenter=new Y.LatLng(lat,lng);
		
		var ymap=new Y.Map("map_canvas");
		ymap.drawMap(myCenter,15,Y.LayerSetId.NORMAL);
		
		var marker=new Y.Marker(myCenter);
		marker._label_="Hello, World!";
		marler.bind("mouseover",function(){$('#output').html(this._label_);});
		ymap.addFeatuer(marker);
	})
})
