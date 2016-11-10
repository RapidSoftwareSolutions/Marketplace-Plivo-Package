const fs   = require("fs");
const lib  = require("./lib");
const url  = require('url');
const path = require("path");

let main = module.exports = function() {
    let metaFile   = path.join(__dirname, "metadata.json"),
        api        = path.join(__dirname, "control.json"),
        endpoints  = JSON.parse(fs.readFileSync(metaFile, "utf8")).blocks,
        apiObj     = {};

    for (let i = 0; i < endpoints.length; i++) {
        let block = endpoints[i];

        apiObj[block.name] = {
            //xml: flase
            url: '',
            method: /get|search/.test(block.name) ? 'GET': /delete|hangup|stop|un/.test(block.name) ? 'DELETE' : 'POST',
            args: {},
        };

        for (let j = 0; j < block.args.length; j++) {
            let arg = block.args[j],
                apiArg = lib.toUnderscore(arg.name);

            if(/Required/.test(arg.info)) apiArg = '$' + apiArg;

            apiObj[block.name].args[arg.name] = apiArg;
        }
    }

    lib.safeSave(api, JSON.stringify(apiObj, undefined, 4));
}

main();