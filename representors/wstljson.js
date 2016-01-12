/*******************************************************
 * task service implementation
 * internal JSON representor format (server)
 * May 2015
 * Mike Amundsen (@mamund)
 * Soundtrack : Complete Collection : B.B. King (2008)
 *******************************************************/

// internal JSON representor
module.exports = repjson;

function repjson(object) {
  var rtn;
  
  rtn = {};
  rtn.wstl = object;
  
  // emit the full internal representor graph
  return JSON.stringify(rtn, null, 2);
}

// EOF

