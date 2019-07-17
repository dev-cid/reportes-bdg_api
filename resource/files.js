let request = require('request');
const ApiKey='acccc69a-adf1-4720-be601db70302-7429-4759';
const storageZoneName = 'cidstorage'
let cdnBunnyApi = {
  getFiles:function(path,promisedres){
    request({
      method: 'GET',
      url: `https://storage.bunnycdn.com/${storageZoneName}/${path}/`,
      headers: {
        'AccessKey':ApiKey,
        'Accept': 'application/json'
      }}, (error, response, body)=> {
        if (error) return promisedres.status(500).send("There was a problem.")
        promisedres.status(200).send(body)
      })

    },
    upFiles:(path,fileName,content)=>{
      request({
        method: 'PUT',
        headers: {'AccessKey':ApiKey},
        url: `https://storage.bunnycdn.com/${storageZoneName}/${path}/${fileName}`,
        body:content
      }, function (error, response, body) {
        // console.log('Status:', response.statusCode);
        // console.log('Headers:', JSON.stringify(response.headers));
        // console.log('Response:', body);
      });
    }

  }
  let itsame =function(){
    return false;
  }
  module.exports = cdnBunnyApi
