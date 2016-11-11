"use strict";

global.PACKAGE_NAME = "Plivo";

const express       = require('express'),
    bodyParser      = require('body-parser'),
    API             = require('rapi-js-package'),
    fs              = require('fs'),
    lib             = require('./lib'),
    _               = lib.callback;

const PORT          = process.env.PORT || 8080;
const app           = express();

let mfile = fs.readFileSync('./metadata.json', 'utf-8'),
    cfile = fs.readFileSync('./control.json',  'utf-8');

let metadata = JSON.parse(mfile),
    control  = JSON.parse(cfile);

app.use(bodyParser.json(({limit: '50mb'})));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.all(`/api/${PACKAGE_NAME}`, (req, res) => { res.send(metadata); });

for(let func in control) {
    let options = {
        parseUri: true
    };
    let {
        method, 
        args,
        url
    } = control[func];

    app.post(`/api/${PACKAGE_NAME}/${func}`, _(function* (req, res) {
        let api      = new API(url);
        let opts     = {};
        let authopts = {};
        let r = {
            callback     : "",
            contextWrites: {}
        };
        let to = req.body.args.to || 'to';
        let response;

        req.body.args = lib.clearArgs(req.body.args);

        try {
            let authopts = {
                type:     'basic',
                username: req.body.args['authId'],
                password: req.body.args['authToken']
            }

            for(let arg in args) 
                opts[args[arg]] = req.body.args[arg];

            opts['$!auth_token'] = req.body.args['authToken'];

            method == 'GET' || method == 'DELETE' ? options.query = opts : options.body = opts;
            options.method    = method;
            options.brackets  = true;
            //options.debug   = true;
            options.hasSkip   = true;

            response            = yield api.auth(authopts).request(options);
            r.callback          = 'success';
            r.contextWrites[to] = response == '' ? 'Successfully deleted!' : response;
        } catch(e) {
            r.callback          = 'error';
            r.contextWrites[to] = e.message ? e.message : e;
        }

        res.status(200).send(r);
    }))
}

app.listen(PORT);
module.exports = app;