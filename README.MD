![Logo](https://github.com/LeatherLedger/LeatherLedger/raw/master/logo.png)

![ES6](https://img.shields.io/badge/es-6-brightgreen.svg)
![GitHub contributors](https://img.shields.io/github/contributors/LeatherLedger/LeatherLedger.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/LeatherLedger/LeatherLedger.svg)
![Github search hit counter](https://img.shields.io/github/search/LeatherLedger/LeatherLedger/goto.svg)
![GitHub top language](https://img.shields.io/github/languages/top/LeatherLedger/LeatherLedger.svg)
# Leather Ledger Project

LeatherLedger - Modular blockchain framework. This platform provides super-flexible configuration of each functional link of the network. The network supports the following functions:

+ Flexible network configuration
+ External crypto plugins support for custom cryptography integration
+ 1-dimensional chain configuration
+ Free format blocks. You can store any data up to 15 MB
+ Turing-complete JavaScript smart contracts
+ Support of browsers integration without additional plugins and integration layers. Works by [WebApi framework](https://github.com/LeatherLedger/WebApi)
+ 50000 tx/sec tested speed. See [benchmark](benchmark) section
+ Internal consensus mechanism without miners: LCPoA
+ Support for other consensus plugins
+ DApp operating system
+ Special P2P hi-speed messaging protocol - StarWave and StarWaveCrypto for encrypted messaging

## Docs

Programming guide and references you can found in our [WIKI pages https://github.com/LeatherLedger/LeatherLedger/wiki](https://github.com/LeatherLedger/LeatherLedger/wiki)


## Installing

[![npm version](https://badge.fury.io/js/leatherledger.svg)](https://www.npmjs.com/package/leatherledger)

Simplest way:

``npm i -g ledger``

Now you can use it as ``ledger --config config.json``

## Building Node


#### Dependencies

**iZ³ platform** depends on Node.js version >= 8.2.0

NPM version >= 5.3.0

For now we recommend build iZ³ Node for Node.js >= 10

**Building depends on:**

Python >= 2.7

GCC / MinGW / VC++


#### Building

Preparing for work is done by running the command 
```
npm install
```

Now you can start node by command

```
node main.js
```

**If the building ends with an error, delete the node_modules directory before retrying**

## Troubleshooting
**If the building ends with an error, delete the node_modules directory before retrying**

#### Windows.

If the package installation fails, use

```
npm install --global --production windows-build-tools
```
This command will install Visual Studio 2017 build tools.

Then:

Control Panel -> Programs and Components -> Microsoft Visual Studio Installer(run change).

In Visual Studio Installer window, find installed "Visual Studio Build Tools 2017" and click "Change".

In "Visual C++ Build Tools" section.

Check needed options in right panel:

Make sure the "...VC++ 2015.3 v14.00(v140)" option is enabled.


## Communication


Welcome for any descussions and questions!

## Contributing

Hi and welcome!
Please! Read [CONTRIBUTING.md](CONTRIBUTING.md) first.

After reading use the following steps:

1. Fork it ( [https://github.com/LeatherLedger/LeatherLedger/fork](https://github.com/LeatherLedger/LeatherLedger/fork) )
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create a new Pull Request

## Maintainers

- [lailune](https://github.com/lailune) Andrey Nedobylsky - maintainer

## Hall of fame

In this section we publish the best contributors.

* Dmitry Elsukov [demndik](https://github.com/demndik)
* Kirill Revenkov [Arucard89](https://github.com/Arucard89)


***

[![https://nodei.co/npm/leatherledger.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/leatherledger.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/leatherledger)
