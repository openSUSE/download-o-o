// From https://stackoverflow.com/a/3855394
var qs = (function(a) {
  if (a == "") return {};
  var b = {};
  for (var i = 0; i < a.length; ++i)
  {
    var p=a[i].split('=', 2);
    if (p.length == 1)
      b[p[0]] = "";
    else
      b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
  }
  return b;
})(window.location.search.substr(1).split(new RegExp('[&;]', 'g')));

function active(s, i, t, p) {
  a = '';
  if ((i + 1) == s.length)
    a = ' active';
  else
    t = '<a href="' + p + '">' + t + '</a>';
  return '<li class="breadcrumb-item' + a + '">' + t + '</li>';
}

function setloc() {
  var l = document.location.pathname;
  var s = l.split('/').filter(function (e) {
    return e != '';
  });
  var icon = '<svg height="16" width="16" viewBox="0 0 16 16" fill="currentColor" class="mr-1" xmlns="http://www.w3.org/2000/svg"><path d="M.5 8a.5.5 0 0 1 .5.5V12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8.5a.5.5 0 0 1 1 0V12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8.5A.5.5 0 0 1 .5 8z"/><path d="M5 7.5a.5.5 0 0 1 .707 0L8 9.793 10.293 7.5a.5.5 0 1 1 .707.707l-2.646 2.647a.5.5 0 0 1-.708 0L5 8.207A.5.5 0 0 1 5 7.5z"/><path d="M8 1a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0v-8A.5.5 0 0 1 8 1z"/></svg>';
  var p = '/';
  if (s.length == 0 ) {
    document.body.setAttribute('class', 'root');
    document.title = 'openSUSE Download';
  }
  else {
    [...document.getElementsByClassName("alert")].map(n => n && n.remove());
    document.title = l + ' - openSUSE Download';
  }

  var b = active(s, -1, icon + ' Download', p);
  for (var i=0; i<s.length;i++) {
    p += s[i] + '/';
    b += active(s, i, s[i], p);
  }

  document.getElementById('breadcrumbs').innerHTML = '<ol class="breadcrumb">' + b + '</ol>';
}

function settable() {
  if (qs["C"] == "M")
    document.getElementsByTagName("table")[0].setAttribute('class', 'by-modified');
  else if (qs["C"] == "S")
    document.getElementsByTagName("table")[0].setAttribute('class', 'by-size');
  else
    document.getElementsByTagName("table")[0].setAttribute('class', 'by-name');
}

