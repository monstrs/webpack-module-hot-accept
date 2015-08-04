'use strict';

module.exports = function (source, map) {
  if (this.cacheable) {
    this.cacheable();
  }

  var code = ''
    +'module.hot.accept(function (err) {'+"\n"
      +'if (err) {'+"\n"
        +'console.error(err);'+"\n"
      +'}'+"\n"
    +'});'+"\n";

  if (this.sourceMap === false) {
    return this.callback(null, ''
      +source+"\n"
      +"\n"
      +code
    );
  }

  if (!map) {
    map = makeIdentitySourceMap(source, this.resourcePath);
  }

  var node = new SourceNode(null, null, null, ''
    +SourceNode.fromStringWithSourceMap(source, new SourceMapConsumer(map))
    +(new SourceNode(null, null, this.resourcePath, code))
  );

  var result = node.toStringWithSourceMap();

  this.callback(null, result.code, result.map.toString());
};
