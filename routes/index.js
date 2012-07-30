
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'CrispyMind - Home' });
};

exports.about = function(req, res) {
  res.render('about', { title: 'CrispyMind - About us' });
};

exports.services = function(req, res) {
  res.render('services', { title: 'CrispyMind - Services' });
};
