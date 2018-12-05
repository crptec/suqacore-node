Dashcore Node
============

A SUQA full node for building applications and services with Node.js. A node is extensible and can be configured to run additional services. At the minimum a node has an interface to [SUQA (SUQAd)]for more advanced address queries. Additional services can be enabled to make a node more useful such as exposing new APIs, running a block explorer and wallet service.

## Usages

### As a standalone server

```bash
git clone https://github.com/crptec/suqacore-node
cd suqacore-node
./bin/suqacore-node start
```

When running the start command, it will seek for a .suqacore folder with a suqacore-node.json conf file.
If it doesn't exist, it will create it, with basic task to connect to suqacored.

Some plugins are available :

- Insight-API : `./bin/suqacore-node addservice @crptec/insight-api
- Insight-UI : `./bin/suqacore-node addservice @crptec/insight-ui`

You also might want to add these index to your SUQA.conf file :
```
-addressindex
-timestampindex
-spentindex
```

### As a library

```bash
npm install @crptec/suqacore-node
```

```javascript
const suqacore = require('@crptec/suqacore-node');
const config = require('./suqacore-node.json');

let node = suqacore.scaffold.start({ path: "", config: config });
node.on('ready', function() {
    //Dash core started
    suqacored.on('tx', function(txData) {
        let tx = new suqacore.lib.Transaction(txData);
    });
});
```

## Prerequisites

- SUQAd
- Node.js v8.11
- ZeroMQ *(libzmq3-dev for Ubuntu/Debian or zeromq on OSX)*
- ~20GB of disk storage
- ~1GB of RAM

## Configuration

suqacore includes a Command Line Interface (CLI) for managing, configuring and interfacing with your suqacore Node.

```bash
suqacore-node create -d <SUQA-data-dir> mynode
cd mynode
suqacore-node install <service>
suqacore-node install https://github.com/yourname/helloworld
suqacore-node start
```

This will create a directory with configuration files for your node and install the necessary dependencies.

Please note that [SUQA Core] needs to be installed first.

For more information about (and developing) services, please see the [Service Documentation](docs/services.md).

## Add-on Services

There are several add-on services available to extend the functionality of Bitcore:

- [Insight API]
- [Insight UI]
- [Bitcore Wallet Service]

## Documentation

## Setting up dev environment (with Insight)

Prerequisite : Having a suqacored node already runing `suqacored --daemon`.



## Contributing

Please send pull requests for bug fixes, code optimization, and ideas for improvement. For more information on how to contribute, please refer to our [CONTRIBUTING](https://github.com/crptec/suqacore/blob/master/CONTRIBUTING.md) file.

## License

Code released under [the MIT license](https://github.com/crptec/suqacore-node/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc.

- bitcoin: Copyright (c) 2009-2015 Bitcoin Core Developers (MIT License)
