


var defaultClient = CloudmersiveVirusApiClient.ApiClient.instance;
 
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = "YOUR API KEY"
 
var api = new CloudmersiveVirusApiClient.ScanApi()
 
var inputFile = fs.readFileSync("C:\\temp\\input.docx");
 
 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};

api.scanFile(Buffer.from(inputFile.buffer), callback);