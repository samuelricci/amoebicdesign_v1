window.onload = function () {document.getElementById('fronttext').onmouseover=function() {
  document.getElementById('front-end').style.display = 'block';
  document.getElementById('backtext').style.display = 'none';
};

document.getElementById('fronttext').onmouseout=function() {
  document.getElementById('front-end').style.display = 'none';
  document.getElementById('backtext').style.display = 'block';
};

document.getElementById('backtext').onmouseover=function() {
  document.getElementById('back-end').style.display = 'block';
  document.getElementById('fronttext').style.display = 'none';
};

document.getElementById('backtext').onmouseout=function() {
  document.getElementById('back-end').style.display = 'none';
  document.getElementById('fronttext').style.display = 'block';
};
};