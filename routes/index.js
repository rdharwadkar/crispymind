
/*
 * GET home page.
 */

var menu = [
  { text: 'Home', route: '/', clazz: '' },
  { text: 'About', route: '/about', clazz: '' },
  { text: 'Services', route: '/services', clazz: '' },
  { text: 'Partner Profiles', route: '/profiles', clazz: '' },
  { text: 'Contact', route: '/contact', clazz: '' },
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

exports.about = function(req, res) {
  setActiveMenu(1);
  res.render('about', { title: 'CrispyMind - About us', menu: menu });
};

exports.services = function(req, res) {
  setActiveMenu(2);
  res.render('services', { title: 'CrispyMind - Services', menu: menu });
};

exports.profiles = function(req, res) {
  setActiveMenu(3);
  res.render('profiles', { title: 'CrispyMind - Partner profiles', menu: menu });
};

exports.contact = function(req, res) {
  setActiveMenu(4);
  res.render('contact', { title: 'CrispyMind - Contact', menu: menu });
};
