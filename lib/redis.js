/**
 * Module Dependencies
 */

"use strict";

var SandGrain = require('sand-grain');
var redis = require('redis');


/**
 * Expose `Redis`
 */
class Redis extends SandGrain {
  constructor() {
    super();
    this.name = this.configName = 'redis';
    this.defaultConfig = require('./default');
    this.version = require('../package').version;
  }

  getClient() {
    return redis.createClient(this.config.port, this.config.host, this.config.options);
  }

  get() {
    var client = this.getClient();
    client.get.apply(client, arguments);
  }

  save() {
    var client = this.getClient();
    client.set.apply(client, arguments);
  }

  delete() {
    var client = this.getClient();
    client.del.apply(client, arguments);
  }
}

exports = module.exports = Redis;