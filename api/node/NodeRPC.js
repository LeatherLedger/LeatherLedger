//import { METHODS } from "http";
const Http = require("http");
const Https = require("https");
const URL = require("URL");

const _METHODS = [
    {getInfo: 'GET'},
    {createWallet: 'POST'},
    {changeWallet: 'POST'},
];

class NodeRPC {

    constructor (RPCUrl = 'http://localhost:3001/', pass = '') {
        this._baseUrl = baseUrl;
        this._password = pass;
    }

    /**
     * URL request
     * @param {string} method 
     * @param {string} url 
     * @param {Array} params 
     * @param {string} password 
     * @returns {object}
     */
    static _urlRequest(method = 'GET', url, params = [], password = '') {
        return new Promise((resolve, reject) =>{
            let fullUrl = url; 
            if (params.length > 0) {
                fullUrl += '?' + params.join('&');
            }
            let urlObj = new URL(fullUrl);
            let options = {
                method: method.toUpperCase() === 'POST' ? 'POST' : 'GET',
                timeout: 0,
            }

            if (password) {
                options.auth = "1337:" + password;
            }

            const req = http.request(fullUrl, options, (res)=>{
                res.on('end', () => {
                    return resolve(res);
                })
            })

            req.on('error', (e) => {
                return reject(e);
            });

            req.end();
        })
    }

    /**
     * Make RPC request
     * @param {string} method 
     * @param {array} params 
     * @param {string} paramStr 
     * @returns promise
     */
    async _request(method = "", params = [], paramStr = '') {
        //method = method.toLowerCase();
        if (!_METHODS[method]) {
            console.error('Invalid metod ' + method);
            return;
        }
        let res;
        try {
            res = await NodeRPC._urlRequest(_METHODS[method], this._baseUrl + method + paramStr, params, this._password);
        } catch (e) {
            console.error('Request error: ' + e); 
        };

        if (res.toLowerCase() === 'true') {
            return {status: 'ok'};
        } else if (res.toLowerCase() === 'false') {
            console.error('Can\'t call method ' + $method);
        }

        let response;
        try{
         response = JSON.parse(res);
        } catch {
            console.error('RPC Error: ' + res);   
        }
        return response;
    }

    /**
     * Returns current blockchain status and node info
     * @returns promise
     */
    getInfo() {
        return this._request('getInfo');    
    }

    /**
     * Generate and register new wallet with id, block id, private and public keysPair
     * @returns promise
     */
    createWallet() {
        return this._request('createWallet');
    }

    /**
     * Get current wallet address
     */
    async getWallet() {
        let info = await this.getInfo();    
        return info.wallet.id;
    }

    /**
     * Change current wallet for node. The transactions list was recalculated Which can take a long time
     * @param {string} id 
     * @param {string} private 
     * @param {string} public 
     */
    async changeWalletByData(id, private, public) {
        let walletId = await this.getWallet();
        if (walletId === id) {
            return {status:'ok'};
        }

        return this._request('changeWallet', [
            'id=' + id,
            'public=' + public,
            `private=` + private,
            'balance=0'
        ]);
    }

}