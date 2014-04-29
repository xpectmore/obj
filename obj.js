jQuery.extend({
	obj : function(obj,txt){
			cols=[];
			cols['object']='red" size="+3"';
			cols['string']='gray';
			cols['number']='gray';
			cols['boolean']='gray';
			cols['function']='blue';
			var result='<hr style="border:5px solid red;">';
			for (var i in obj){
				ctype=$.type(obj[i]);
				newtxt='<b><i>'+txt + '.</i></b>' + '<font color="#cc4715">'+i+'</font>';
				newtxtlite=txt + "." + i;
				if((ctype==="object")&&(obj[i]!==null))
					ovalue='<span style="background-color:#ffd5d5"><font color="red" size="-1">Click:</font>&nbsp;&nbsp;&nbsp;<a href="Javascript:$.obj(eval(\''+newtxtlite+'\'),\''+newtxtlite+'\');void(0);"><font color="blue" size="+3">'+newtxt+'</font></a></span>';
				else
				if((ctype==="object")&&(obj[i]===null))
					ovalue='<span style="background-color:#dddddd"><font color="gray" size="-4"><i><strike>NULL</strike></i></font></span>';
				else
				if(ctype==="function")
					ovalue='<font color="blue" size="-2">Value:</font>&nbsp;&nbsp;<span style="background-color:#dddddd"><font size="-1"><code>'+obj[i]+'</code></font></span>';
				else
					ovalue='<font color="blue" size="-2">Value:</font>&nbsp;&nbsp;<span style="background-color:#dddddd"><font size="-1">'+obj[i]+'</font></span>';
				result += '(<font style="color:'+cols[ctype]+';">'+ctype+ '</font>)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+ newtxt  + '<br>' + ovalue+"<hr>";
			}
			result+='<hr style="border:5px solid green;"><br><br><br>';
			$("html").append('<span class="objects"></span>');
			$(".objects:first").prepend('<b class="otitle">The function`s call no.</b>'+($(".objects").size()+'')+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font size="+3">&nbsp;$.obj(<font color="red">'+txt+'</font>,\'<font color="blue">'+txt+'</font>\')</font><b></b>'+result+'<br>');
			top.window.scrollTo( 0,$(".objects:first").scrollTop()+300 );
	}
});
