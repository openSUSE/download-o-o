function active(s, i, t, p) {
  a = '';
  if ((i + 1) == s.length) {
    a = ' active';
  }
  else {
    t = '<a href="' + p + '">' + t + '</a>';
  }
  return '<li class="breadcrumb-item' + a + '">' + t + '</li>';
}

function setloc() {
  var l = document.location.pathname;
  var s = l.split('/').filter(function (e) {
    return e != '';
  });
  var icon = '<svg height="16" width="16" viewBox="0 0 16 16" fill="currentColor" class="mr-1" xmlns="http://www.w3.org/2000/svg"><path d="M.5 8a.5.5 0 0 1 .5.5V12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8.5a.5.5 0 0 1 1 0V12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8.5A.5.5 0 0 1 .5 8z"></path><path d="M5 7.5a.5.5 0 0 1 .707 0L8 9.793 10.293 7.5a.5.5 0 1 1 .707.707l-2.646 2.647a.5.5 0 0 1-.708 0L5 8.207A.5.5 0 0 1 5 7.5z"></path><path d="M8 1a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0v-8A.5.5 0 0 1 8 1z"></path></svg>';
  var p = '/';
  var b = active(s, -1, icon + ' Download', p);
  for (var i=0; i<s.length;i++) {
    p += s[i] + '/';
    b += active(s, i, s[i], p);
  }
  if ( l != '/' ) {
    document.title = l + ' - openSUSE Download';
  }
  else {
    document.title = 'openSUSE Download';
  }
  document.getElementById('breadcrumbs').innerHTML = '<ol class="breadcrumb">' + b + '</ol>';
}

