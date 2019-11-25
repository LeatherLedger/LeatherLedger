/**
 Leather Ledger Project

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

const logger = new (require('./logger'))();
const storj = require('./instanceStorage');
const KeyValue = require('./keyvalue');
const levelup = require('levelup');
const memdown = require('memdown');
const leveldown = require('leveldown');

/**
 * Blockchain manager object
 * Provide some useful functional for data synchronization
 */

class Blockchain {
    constructor() {
        this.config = storj.get('config');
        //this.levelup = levelup(leveldown(this.config.workDir + '/blocks'));
        //this.levelup = levelup(memdown());//levelup(this.config.workDir + '/blocks');
        this.db = new KeyValue(this.config.blocksDB);
    }

    getLevelup() {
        return this.db.getLevelup();
    }

    getDb(){
        return this.db;
    }

    get(key, callback) {
        let that = this;
        that.db.get(key, callback);
    }

    put(key, value, callback) {
        let that = this;
        that.db.put(key, value, callback);
    }

    del(key, callback) {
        let that = this;
        that.db.del(key, callback);
    }

    close(callback) {
        let that = this;
        that.db.close(callback);
    }

    save(callback){
        let that = this;
        that.db.save(callback);
    }
}

module.exports = Blockchain;
