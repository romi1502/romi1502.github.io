	function mouseDown()
	{
		imgNumber = getCookie('imgNumber');
		var nold = new Number(-1);
		if (imgNumber!=null && imgNumber!="")
		{
		 	nold = parseInt(imgNumber);
		}
		var n = new Number(Math.ceil(Math.random()*7));
		while (n == nold)
		{
			n = Math.ceil(Math.random()*7);
		}
		document.getElementById("imgMoi").src ="http://www.romain-hennequin.fr/images/me/me"+n.toString()+".jpg";
		setCookie('imgNumber',n.toString());
	}
	function mouseOver()
	{	
		document.getElementById("hdfr").style.color ="blue";
		document.getElementById("hdfr").style.cursor ="pointer";
	}
	function mouseOut()
	{
		document.getElementById("hdfr").style.color ="black";
	}


// cookie management
	function getCookie(c_name)
	{
		if (document.cookie.length>0)
		  {
		  c_start=document.cookie.indexOf(c_name + "=");
		  if (c_start!=-1)
		    { 
		    c_start=c_start + c_name.length+1 ;
		    c_end=document.cookie.indexOf(";",c_start);
		    if (c_end==-1) c_end=document.cookie.length
		    return unescape(document.cookie.substring(c_start,c_end));
		    } 
		  }
		return "";
	}

	function setCookie(c_name,value)
	{
		var exdate=new Date();
		exdate.setDate(exdate.getDate()+1);
		document.cookie=c_name+ "=" +escape(value)+"; expires="+exdate.toUTCString()+'; path=/';
	}

	function checkCookie()
		{
		imgNumber=getCookie('imgNumber');
		if (imgNumber!=null && imgNumber!="")
		  {
		  	document.getElementById("imgMoi").src ="http://www.romain-hennequin.fr/images/me/me"+imgNumber+".jpg";
		  }
		else
		  {
		  	document.getElementById("imgMoi").src ="http://www.romain-hennequin.fr/images/Moi.jpg";
		  }
	}

