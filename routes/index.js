
/*
 * GET home page.
 */

var menu = [
  { text: 'Home', route: '/', clazz: '', icon: 'home' },
  { text: 'Services', route: '/services', clazz: '', icon: 'wrench' },
  { text: 'Partner Profiles', route: '/profiles', clazz: '', icon: 'user' },
  { text: 'Contact', route: '/contact', clazz: '', icon: 'envelope' },
];

var setActiveMenu = function(num) {
  var i, l;

  for(i = 0, l = menu.length; i < l; ++i) {
    menu[i].clazz = '';
  }

  menu[num].clazz = 'active';
};

exports.index = function(req, res) {
  setActiveMenu(0);
  res.render('index', { title: 'CrispyMind - Home', menu: menu });
};

exports.services = function(req, res) {
  setActiveMenu(1);
  res.render('services', { title: 'CrispyMind - Services', menu: menu });
};

exports.profiles = function(req, res) {
  setActiveMenu(2);
  res.render('profiles', { title: 'CrispyMind - Partner profiles', menu: menu });
};

exports.contact = function(req, res) {
  setActiveMenu(3);
  res.render('contact', { title: 'CrispyMind - Contact', menu: menu });
};
