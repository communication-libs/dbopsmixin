function createServiceMixin (execlib) {
  'use strict';

  var lib = execlib.lib;

  function CommunicationDBOpsUsageServiceMixin (prophash) {
    execlib.execSuite.RemoteServiceListenerServiceMixin.checkForImplementation(this);
    this.findRemote(prophash.communicationdbopspath, null, 'CommunicationDBOps');
  }
  CommunicationDBOpsUsageServiceMixin.prototype.destroy = function () {
  };

  CommunicationDBOpsUsageServiceMixin.addMethods = function (klass) {
  };

  return CommunicationDBOpsUsageServiceMixin;
}
module.exports = createServiceMixin;
