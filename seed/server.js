var koa = require('koa')
, serve = require('koa-static')
, route = require('koa-route')
, cors = require('koa-cors')
, app = module.exports = new koa()
, monk = require('monk')
, wrap = require('co-monk')
, db = monk('localhost/company')
, contacts = wrap(db.get('contacts'));

app.use(cors());

// Load Frontend
app.use(serve('.'));
app.use(serve(__dirname + '/view'));
app.use(serve(__dirname + '/public'));

// Routes
app.use(route.get('/contact/all', list));
app.use(route.post('/contact/edit/:first', show));
app.use(route.post('/contact/save', save));

// Handlers
function *list() {
    var res = yield contacts.find({});
    this.body = res;
}

function *show(title) {
    title = decodeURI(title);
    var res = yield contacts.find({title: title});
    this.body = res;
}

function *save(res) {
	console.log(res);
}


app.listen(3000);