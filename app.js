
var CloudmersiveVirusApiClient = require('cloudmersive-virus-api-client');

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
        var fullPath = path.join("./input", file);

        // Do whatever you want to do with the file
        // Configure API key authorization: Apikey
        var Apikey = defaultClient.authentications['Apikey'];
        Apikey.apiKey = "402380c4-b4f1-47bc-b5aa-cb76c73c1ed8"
        
        var api = new CloudmersiveVirusApiClient.ScanApi()
        
        var inputFile = fs.readFileSync(fullPath);
        
        
        var callback = function(error, data, response) {
        if (error) {
            console.error(error);
        } else {
            if (data.CleanResult)
            {
                console.log('Clean file');
            }
            else
            {
                console.log('!!!!!! VIRUS FOUND !!!!!!');
            }
        }
        };

        api.scanFile(Buffer.from(inputFile.buffer), callback);
    });
});
 
