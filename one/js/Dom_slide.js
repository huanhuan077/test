window.onload = function() {
	var oBox = document.getElementById('box');
	var aImgs = oBox.getElementsByTagName('img');
	var exposeWidth = 160;
	var imgWidth = aImgs[0].offsetWidth;
	var boxWidth = imgWidth + exposeWidth * (aImgs.length - 1);
	oBox.style.width = boxWidth + 'px';
	//设置每到门的出事距离
	function resetPose() {
		for (var i = 1, len = aImgs.length; i < len; i++) {
			aImgs[i].style.left = imgWidth + exposeWidth * (i - 1) + 'px';
		}
	}
	resetPose();
	//设置每到门移动的距离
	var translate = imgWidth - exposeWidth;
	for (var i = 0, len = aImgs.length; i < len; i++) {
		aImgs[i].index = i;
		aImgs[i].onmouseover = function() {
			resetPose();
			for (var j = 1; j <= this.index; j++) {
				aImgs[j].style.left = parseInt(aImgs[j].style.left) - translate + 'px';
			}
		};
	}
};