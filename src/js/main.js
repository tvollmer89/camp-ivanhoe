const bootstrap = require('bootstrap')
const xml2js = require('xml2js')
const http = require('https')

let valueFunc = (value, name) => {
  // console.log(`value: ${value} name: ${name}`);
  return value.toString()
}
parser = xml2js.Parser({attrkey: "attr", trim: true, normalize: true, valueProcessors: [valueFunc]});


function xmlToJson(url, callback) {
  var req = http.get(url, function(res) {
    var xml = '';
    
    res.on('data', function(chunk) {
      xml += chunk;
    });

    res.on('error', function(e) {
      callback(e, null);
    }); 

    res.on('timeout', function(e) {
      callback(e, null);
    }); 

    res.on('end', function() {
      parser.parseString(xml, function(err, result) {
        callback(null, result);
      });
    });
  });
}

// d = "https://ccrm.rpmsfa.com/CarbolineRpmConnectorWar/xml_globalProducts.action";
// xml2js.parseStringPromise(d).then(function (result) {
//   console.dir(result);
//   console.log('Done');
// })
// .catch(function (err) {
//   console.log('failed: ', err);
// });

var url = "https://ccrm.rpmsfa.com/CarbolineRpmConnectorWar/xml_globalProducts.action";
// xmlToJson(url, function(err, data) {
//   if (err) {
//     // Handle this however you like
//     return console.err(err);
//   }
//   console.log(JSON.stringify(data));
// })

let req = http.get(url, function(res) {
    let data = '';
    res.on('data', function(stream) {
        data += stream;
    });
    res.on('end', function(){
        parser.parseString(data, function(error, result) {
            if(error === null) {
                console.log(result);
                console.log('typ ' + typeof result);
            }
            else {
                console.log(error);
            }
        });
    });
});