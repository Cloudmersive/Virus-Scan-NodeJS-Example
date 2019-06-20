


var defaultClient = CloudmersiveVirusApiClient.ApiClient.instance;

//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = "./input"; // path.join(__dirname, 'Documents');
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        // Configure API key authorization: Apikey
        var Apikey = defaultClient.authentications['Apikey'];
        Apikey.apiKey = "YOUR API KEY"
        
        var api = new CloudmersiveVirusApiClient.ScanApi()
        
        var inputFile = fs.readFileSync(file);
        
        
        var callback = function(error, data, response) {
        if (error) {
            console.error(error);
        } else {
            console.log('API called successfully. Returned data: ' + data);
        }
        };

        api.scanFile(Buffer.from(inputFile.buffer), callback);
    });
});
 
