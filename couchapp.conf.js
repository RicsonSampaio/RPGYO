var couchapp = require('couchapp'),
	path = require('path')
;

var doc = {
	_id : '_design/RPG'
}

module.exports = doc;

couchapp.loadAttachments(doc, path.join(__dirname, 'app'))