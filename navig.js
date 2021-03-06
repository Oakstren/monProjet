MonthNames = new Array('janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre');
DayNames = new Array('lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche');
TopicNames = new Array('', 'A propos de moi', 'Photos', 'Mes chats', 'Recettes', 'Vidéothèque', 'Cinéma', 'Automobile', 'Restaurant', 'Plus+', 'Où est-ce ?', 'Test conso');
var HelpContext = 0;
logoURL='/images/logo/';


function GotoOrigin()
{
	Jump('http://www.patrias.fr');
}


function DateTime()
{
	Today = new Date();
	D = Today.getUTCDate();
	M = Today.getUTCMonth();
	Mname = MonthNames[M];
	Y = Today.getUTCFullYear();
	M=M+1;
	elapsedDays = parseInt((Date.UTC(Y,M,D) - Date.UTC(Y,1,1)) / 86400000) + 1;
	remainDays = parseInt((Date.UTC(Y,12,31) - Date.UTC(Y,M,D)) / 86400000);

	if (D<10)
    {
		D = '0' + D
	}

	if (M<10)
    {
		M = '0' + M
	}
	
	H = Today.getHours();
	Mn = Today.getMinutes();
	S = Today.getSeconds();
	
	if (H<10)
    {
		H = '0' + H
	}
	if (Mn<10)
    {
		Mn = '0' + Mn
	}
	if (S<10)
    {
		S = '0' + S
	};


	xGet = 	document.getElementById("date");
	xGet.innerHTML= D + ' ' + Mname + ' ' + Y;
	xGet.title = 'Jour ' + elapsedDays + ' de ' + Y + ' - reste ' + remainDays;
	xGet = 	document.getElementById("time");
	xGet.innerHTML= H + ':' + Mn + ':' + S;

}


function TimerDH()
{
	DateTime();
	clearTimeout();
	setTimeout("TimerDH()",500);
}


function EnhanceMenu(object, color)
{
	document.getElementById(object.id).style.background = color;
}


function EnhanceMenuTab(topic)
{
	document.getElementById(topic).style.border= "1px solid #7E7E30";
}


function setHelpContext(chkVar)
{
	HelpContext = chkVar;
}


function Init(topicNumber, chkIndex)
{ 
	var Topic='';
	window.offscreenBuffering = true;
	TimerDH();
	NoFrame();
	setHelpContext(topicNumber);
		
	if (document.getElementById('menu-' + topicNumber))
	{
		EnhanceMenuTab('menu-' + topicNumber)
	}
	
	if (chkIndex)
	{
		Topic = document.title;
	} else
	{
		Topic = TopicNames[topicNumber] + ' ▪ ' + document.title;
	}
	window.status = Topic;
	top.document.title =  'PATRIAS.fr ▪ ' + Topic;
}


function Copy2Clipboard(rSource)
{
  rSource.select()
  if (window.clipboardData)
  {
  	var r=clipboardData.setData('Text',rSource.value);
  }

}


function NoFrame()
{
	if (top != window)
    {
    	top.location.href = window.location.href;
   	}
}


function ResetWindow()
{

    window.moveTo(0,0);
    window.resizeTo(screen.availWidth,screen.availHeight);
}


function InitiFrame(stTxt)
{
 	if (top == window)
    {
    top.location.href = "http://www.patrias.fr/"
    } else
    {
    	window.status = "Téléchargement de la page [" + stTxt + "] en cours. Veuillez patienter..."
    }
}


function InitPopup(topic)
{ 
	window.offscreenBuffering = true;
	if (!window.opener)
	{
		Jump('http://www.patrias.fr');
	} else
	{
		status = topic;
		top.document.title =  '▪ T ▪ O ▪ P ▪ ▪ ▪ ' + topic;
	}
}


function CheckNavigator()
{
	var navname = navigator.appName;
	window.status= 'Vous utilisez le navigateur ' + navname;
	navname = navname.toLowerCase();
	navname = navname.substring(0,9);
	if (navname != 'microsoft')
	{
	alert("ATTENTION ! \n\nVous utilisez le navigateur " + navigator.appName + ".\n\nCertaines fonctionnalités de ce site ne seront peut-être pas disponibles avec ce navigateur.\nDes problèmes d'affichage pourraient également apparaître.\n\nNous vous conseillons vivement d'utiliser la dernière version de Microsoft Internet Explorer.\nVoir le site de Microsoft ou la rubrique Aide de ce site pour plus d'informations.")
	}
}


function NavigatorAlert()
{
	var navname = navigator.appName;
	navname = navname.toLowerCase();
	navname = navname.substring(0,9);
	if (navname != 'microsoft')
	{
	document.write('<fieldset><legend><b><font color="#FF0000" size="2">ALERTE NAVIGATEUR</font></b></legend><p>Vous utilisez le navigateur <b>' + navigator.appName + '</b>.</p><p>Certaines fonctionnalités de ce site ne seront peut-être pas disponibles avec ce navigateur. Des problèmes d' + "'" + 'affichage pourraient également apparaître.</p><p><b>Nous vous conseillons vivement d' + "'" + 'utiliser la dernière version de Microsoft Internet Explorer.</b></p><p>Voir le site de <a target="_blank" href="http://www.microsoft.com/france/internet/produits/ie/">Microsoft</a> pour plus d' + "'" + 'informations.</p></fieldset>')
	}
}


function ReloadPage()
{
	top.location.href = top.location.href;
}


function Quit()
{
	if (window.opener)
	{
		window.opener.moveTo(0,0);
		window.opener.resizeTo(screen.availWidth,screen.availHeight);
		window.opener.focus();
	}
	top.window.close();
}


function SearchAndBuy(MovieName, AlloCineTarget)
{
	var bufStr ='<b>+ d\'infos sur <i>' + MovieName + '</i> :</b><br>';
	if (AlloCineTarget != "!allocine!")
	{
		bufStr = bufStr + '<a target="_blank" href="http://www.allocine.fr/film/fichefilm_gen_cfilm=' + AlloCineTarget + '.html">AlloCiné</a> | '
	}
	bufStr = bufStr + '<a target="_blank" href="http://french.imdb.com/find?s=tt&q=' + MovieName + '">IMDb</a> | ';
	bufStr = bufStr + '<a target="_blank" href="http://www.cinemovies.fr/resultat_recherche.php?cherche=' + MovieName + '">CineMovies</a> | ';
	bufStr = bufStr + '<a target="_blank" href="http://fr.wikipedia.org/wiki/Special:Search?search=' + MovieName + ' (film)">Wikipédia</a>';
	bufStr = bufStr + '<br><b>Acheter le DVD <i>' + MovieName + '</i> :</b><br><a target="_blank" href="http://www.mediadis.com/affiliate.asp?aid=101216&afflang=fra&redirect=http%3A%2F%2Fwww%2Emediadis%2Ecom%2Fvideo%2Fsearch%2Easp%3Ft%3D20%26kw%3D' + MovieName + '%26ptype=1">Mediadis</a>';
	bufStr = bufStr + ' | <a target="_blank" href="http://fr.kelkoo.com/ctl/do/search?siteSearchQuery=' + MovieName + '&partner=allocine&catId=149201">AllocinéShopping</a>';
	return(bufStr);
}


function PreloadImages()
{
	if (document.images) {
		var imgFiles = PreloadImages.arguments;
		var preloadArray = new Array();
		for (var i=0; i<imgFiles.length; i++) {
			preloadArray[i] = new Image();
			preloadArray[i].src = imgFiles[i];
		}
	}
}


function setClass(objet,clName)
{
	objet.className=clName;
}


function Jump(url)
{
   if (url != '')
      {
      top.location.href = url;
      } 
}


function PopupHelp(FullScreenON)
{
	var url = '../../features/help/' + HelpContext + '.htm';
	var xpos = Math.round(2*screen.availWidth/3);
	myWindow = window.open(url,"HelpWindow","toolbar=no, location=no, directories=no, status=no, menubar=no,  scrollbars=auto, fullscreen=no, resizable=no, copyhistory=no, left=" + xpos + ", top=0");
	if (FullScreenON)
	{
		myWindow.resizeTo(screen.availWidth,screen.availHeight)
	} else
	{
		myWindow.resizeTo(Math.round(screen.availWidth/3),screen.availHeight);
		myWindow.opener.resizeTo(2*Math.round(screen.availWidth/3),screen.availHeight);
		myWindow.opener.moveTo(0, 0);
	}
	myWindow.focus();
}


function Text2ASCII(txt)
{
	var bufStr ='';
	var bufCode;
	for (i=0;i<txt.length; i++)
	{
		bufCode = txt.charCodeAt(i); 
		bufStr = bufStr + '&#' + bufCode + ';'
	}
	return bufStr;
}


function hideObj(divObj)
{
	document.getElementById(divObj).style.visibility='hidden'
}


function CheckiFrame()
{
  if (top.document.title == 'iFrame')
    {
    top.location.href = 'http://www.patrias.fr/';
    }
}


function SwapImage(obj_img, url)
{
	if (url != '')
	{
		old_url = obj_img.src;
		obj_img.src = url;
	} else
	{
		obj_img.src = old_url;
	}
}


function MakeVisible(objet,dm)
{		
	if (dm)
	{
	objet.style.display= "inline"
	} else
	{
	objet.style.display= "none"
	}
}


function MakeNoteVisible(objet,dm)
{		
	MakeVisible(objet,dm);
	ReposAll();
}



function MoveDiv2Top(myDiv, divOffset)
{
	var topPos;
	var oldtopPos = myDiv.style.top;
	topPos = document.body.scrollTop + divOffset;
	if (topPos < divOffset) { topPos = divOffset };
	MakeVisible(tdTopPage, (topPos!=divOffset));
	myDiv.style.top = topPos;
}


function ReposAll()
{
	setTimeout("MoveDiv2Top(tableDate, 4)", 500);
}


function Disable(objet,dm)
{		

	objet.disabled = dm;
}


function EraseAllButtons(dm)
{		
	var AllButtons=document.getElementsByTagName("button");	
	for (var i=0; i<AllButtons.length; i++)
	{
		AllButtons.disabled[i] = dm;
	}
}