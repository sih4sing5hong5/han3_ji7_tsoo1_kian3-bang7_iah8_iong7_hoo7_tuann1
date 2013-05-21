function ReverseDisplay(d) {
	if (document.getElementById(d).style.display == "none") {
		document.getElementById(d).style.display = "block";
	} else {
		document.getElementById(d).style.display = "none";
	}
}
function change(id) {
	//var aa = document.getElementById(id).childNodes;
	// alert(document.getElementById(id).innerHTML);
	tshue7tsoo2ji7(document.getElementById(id));
	// alert(document.getElementById(id).childNodes.length);
	// alert(document.getElementById(id).childNodes[0].nodeValue);
	// alert(document.getElementById(id).childNodes[3].nodeName);// a
	// alert(document.getElementById(id).childNodes[3].innerHTML);
}
function tshue7tsoo2ji7(element) {
	// element.style.fontSize='7px';
	var fontFamily = '宋體', fontSize = '16px', fontWeight = '400';

	if (window.getComputedStyle) {
		fontFamily = window.getComputedStyle(element).fontFamily;
		fontSize = window.getComputedStyle(element).fontSize;
		fontWeight = window.getComputedStyle(element).fontWeight;
	} else if (element.currentStyle) {
		fontFamily = element.currentStyle.fontFamily;
		fontSize = element.currentStyle.fontSize;
		fontWeight = element.currentStyle.fontWeight;
	}
	// alert(fontFamily+" "+fontSize+" "+fontWeight);

	var e7ka1uan5soh4 = element.childNodes;
	var uan5soo3tng5too7 = e7ka1uan5soh4.length;
	var ELEMENT_NODE = 1;
	var TEXT_NODE = 3;
	for ( var i = uan5soo3tng5too7 - 1; i >= 0; i--) {
		/*
		 * alert(i+" "+aa[i].nodeType+" Value='"+aa[i].nodeValue+"' html='"
		 * +aa[i].innerHTML+"' "+(ELEMENT_NODE));//
		 */
		if (e7ka1uan5soh4[i].nodeType === ELEMENT_NODE) {
			tshue7tsoo2ji7(e7ka1uan5soh4[i]);
		}
		if (e7ka1uan5soh4[i].nodeType === TEXT_NODE) {
			var targetNode = e7ka1uan5soh4[i];
			var newArray = ka7ji7uann7tiau7(targetNode, fontFamily, fontSize,
					fontWeight);
			if (newArray.length > 0) {
				for ( var j = 0; j < newArray.length; ++j)
					element.insertBefore(newArray[j], targetNode);
				element.removeChild(targetNode);
			}
		}
	}
}
function ka7ji7uann7tiau7(textNode, fontFamily, fontSize, fontWeight) {
	var ji7the2 = kuah4tin7ji7the2(fontFamily, fontWeight);
	var newArray = new Array();
	var start = 0;
	for ( var i = 0; i < textNode.nodeValue.length; ++i) {
		if (si7tsoo2hap8bo5(textNode.nodeValue[i])) {
			var middle = i;
			var num = -1;
			for (++i; i < textNode.nodeValue.length && num < 1; ++i) {
				if (si7tsoo2hap8bo5(textNode.nodeValue[i])) {
					num--;
				} else {
					num++;
				}
			}
			var end = i;
			newArray[newArray.length] = document
					.createTextNode(textNode.nodeValue.substring(start, middle));
			var tsoo2ji3 = textNode.nodeValue.substring(middle, end);
			var img = document.createElement('img');
			img.setAttribute('class', 'tsoo2ji3');
			img.setAttribute('src', 'http://localhost:8080/' + ji7the2 + '/'
					+ tsoo2ji3 + '.png');
			img.setAttribute('alt', tsoo2ji3);
			img.setAttribute('height', fontSize);
			newArray[newArray.length] = img;// */
			start = i;
			--i;
		}
		// alert(textNode.nodeValue[i]);
	}
	if (start != 0) {
		newArray[newArray.length] = document.createTextNode(textNode.nodeValue
				.substring(start, i));
	}
	return (newArray);
}
function si7tsoo2hap8bo5(ji7) {
	switch (ji7) {
	case '⿰':
	case '⿱':
	case '⿴':
	case '⿳':
	case '⿻':
		return true;
	}
	return false;
}
function kuah4tin7ji7the2(fontFamily, fontWeight) {
	var ji7the2 = '宋體';
	if (fontFamily.indexOf('楷') !== -1)
		ji7the2 = '楷體';
	if (+fontWeight >= +700)
		ji7the2 += '粗體';
	return ji7the2;
}
