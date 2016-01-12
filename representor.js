/*******************************************************
 * task service implementation
 * representation router (server)
 * May 2015
 * Mike Amundsen (@mamund)
 * Soundtrack : Complete Collection : B.B. King (2008)
 *******************************************************/

// handles internal representation routing (based on conneg)

// load representors
var json = require('./representors/json.js');
var cj = require('./representors/cj.js');
var haljson = require('./representors/haljson.js');
var wstl = require('./representors/wstljson.js');
var siren = require('./representors/siren.js');

// demo formats for NDC Oslo 2015
var jsonurls = require('./representors/jsonurls.js');
var jsonforms = require('./representors/jsonforms.js');

module.exports = processDoc;

function processDoc(object, mimeType, root) {
  var doc;

  // clueless? assume JSON
  if (!mimeType) {
    mimeType = "application/vnd.wstl+json";
  }

  // dispatch to requested representor
  switch (mimeType.toLowerCase()) {
    case "application/json":
      doc = json(object, root);
      break;
    case "application/vnd.collection+json":
      doc = cj(object, root);
      break;
    case "application/vnd.hal+json":
      doc = haljson(object, root);
      break;
    case "application/vnd.siren+json":
      doc = siren(object, root);
      break;
    case "application/vnd.wstl+json":
      doc = wstl(object, root);
      break;
      
    // demo formats
    case "application/json;profile=urls":
      doc = jsonurls(object, root);
      break;
    case "application/json;profile=forms":
      doc = jsonforms(object, root);
      break;
      
    default:
      doc = wstl(object, root);
      break;
  }

  return doc;
}

// EOF

