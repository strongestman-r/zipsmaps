<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
	String paramq = request.getParameter("q");
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<style type="text/css">
html,body{height:100%;}
td{font-size:smaller;}
</style>
<script src="https://map.yahooapis.jp/js/V1/jsapi?appid=dj00aiZpPUI5b2JlM21DOEk5TyZzPWNvbnN1bWVyc2VjcmV0Jng9NzY-"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.3/jquery.min.js"></script>
<script src="yaddressmaps.js"></script>
<script>
	$(document).ready(function(){
		var address = $(".address:first").text();
		if(address.indexOf("掲載がない場合")!=-1) address=$(".address:eq(1)").text();
		drawMap(address);
	});
</script>
<title>郵便番号検索フォームとAPIのマッシュアップ</title>
</head>
<body>
	<form action="" method="get">
	<p>
		<input type="text" name="q" value='<%=paramq%>'/>
		<input type="submit" value="search" />
	</p>
	</form>
	<div id="map_canvas" style="float:right; width:50%; height:90%;"></div>
	<jsp:include page="zips.jsp" />
</body>
</html>