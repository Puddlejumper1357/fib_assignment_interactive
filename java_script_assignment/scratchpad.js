document.title='Your mission: to create an interactive webpage';

function myFibfuc(n){
	var value;
var div=document.createElement('div');
div.setAttribute("class", "fib");

n=parseInt(n);
	
if(n<2){
	if(n===1){
		value=1
	}	
	else if(n===0){
		value=0;
	}
	var p=document.createElement('p');
	p.textContent='Fib('+n+')= '+value;
	div.appendChild(p);
}
else{
	var left=myFibfuc(n-1);
	var clas=left.html.getAttribute("class");
	left.html.setAttribute("class", clas+" fib-left")
	
	
	var right=myFibfuc(n-2);
	clas=right.html.getAttribute("class");
	right.html.setAttribute("class", clas+ " fib-right");
	
	value=left.value + right.value;
	var p=document.createElement('p');
	p.textContent= 'Fib('+n+')= '+value;
	div.appendChild(p);
	
	div.appendChild(left.html);
	div.appendChild(right.html);
	
}
return{	'value':value,'html':div };
}



var fib=function (n, node){
	var fibTree=node.querySelector('div.fib');
	if(fibTree)
	{
		node.removeChild(fibTree);
	}
	var tree= myFibfuc(n)
	node.appendChild(tree.html);
	node.setAttribute("id", "fib");
}

var fibButton=function(me){
	var form=me.parentNode;
	var slider=form.querySelector('input');
	var value=slider.value;
	fib(value, form.parentNode);
}

var fibSlider=function(me){
	var form=me.parentNode;
	var button=form.querySelector('button');
	button.textContent='Fib('+me.value+')';
}




function myPellfunc(n){
var value;

var div=document.createElement('div');
div.setAttribute("class", "pell");

n=parseInt(n);

if(n<2){
	if(n===0){
		value=0;
	}
	else if(n===1){
		value=1
	}
	var p=document.createElement('p');
	p.textContent = 'Pell(' + n + ') = ' + value;
	div.appendChild(p);
}
else{
	var left=myPellfunc(n-1);
	var clas=left.html.getAttribute("class");
	left.html.setAttribute("class", clas+" pell-left");
	
	var right=myPellfunc(n-2);
	clas=right.html.getAttribute("class");
	right.html.setAttribute("class", clas+" pell-right");
	
	value=(2*left.value)+right.value;
	var p=document.createElement('p');
	p.textContent = 'Pell(' + n + ') = ' + value;
	div.appendChild(p);
	
	div.appendChild(left.html);
	div.appendChild(right.html);
}
return{'value': value, 'html':div};

}


var pell=function (n, node){
	var pellTree=node.querySelector('div.pell');
	if(pellTree)
	{
		node.removeChild(pellTree);
	}
	var tree= myPellfunc(n)
	node.appendChild(tree.html);
	node.setAttribute("id", "pell");
}

var pellButton=function(me){
	var form=me.parentNode;
	var slider=form.querySelector('input');
	var value=slider.value;
	pell(value, form.parentNode);
}

var pellSlider=function(me){
	var form=me.parentNode;
	var button=form.querySelector('button');
	button.textContent='Pell('+me.value+')';
}



function myTribfunc(n){
    var value;
    var div=document.createElement('div');
    div.setAttribute("class", "trib");
    
    n=parseInt(n);
    
    if(n<3){
        if(n===0 || n===1){
            value=0;
        }
        else if(n===2){
            value=1;
        }
        var p=document.createElement('p');
        p.textContent= 'Trib(' + n + ') = ' + value;
        div.appendChild(p);
    }
    else{
        var left=myTribfunc(n-1);
        var clas=left.html.getAttribute("class");
        left.html.setAttribute("class", clas+ " trib-left");
        
        var center=myTribfunc(n-2);
        clas=center.html.getAttribute("class");
        center.html.setAttribute("class", clas+ " trib-center");
        
        var right=myTribfunc(n-3);
        var clas=right.html.getAttribute("class");
        right.html.setAttribute("class", clas+ " trib-right");
        
        value=left.value+center.value+right.value;
        var p=document.createElement('p');
        p.textContent= 'Trib(' + n + ') = ' + value;
        div.appendChild(p);
        
        div.appendChild(left.html);
        div.appendChild(right.html);
        div.appendChild(center.html);
    }
    return{'value': value, 'html':div}
}
var trib=function (n, node){
	var tribTree=node.querySelector('div.trib');
	if(tribTree)
	{
		node.removeChild(tribTree);
	}
	var tree= myTribfunc(n)
	node.appendChild(tree.html);
	node.setAttribute("id", "trib");
}

var tribButton=function(me){
	var form=me.parentNode;
	var slider=form.querySelector('input');
	var value=slider.value;
	trib(value, form.parentNode);
}

var tribSlider=function(me){
	var form=me.parentNode;
	var button=form.querySelector('button');
	button.textContent='Trib('+me.value+')';
}



