;(function () {
  var checkEnableMobileConsole = function() {
    var src = '//cdn.jsdelivr.net/npm/eruda';
    if (!/eruda=true/.test(window.location.hash)) {
      console.log('If you want to enable eruda mobile-console set location.hash #eruda=true');
      return;
    }

    document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');

    document.write('<scr' + 'ipt>eruda.init();</scr' + 'ipt>');
  };

  window.addEventListener("hashchange", checkEnableMobileConsole, false);
  checkEnableMobileConsole();
})();
