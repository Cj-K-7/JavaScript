//https://gildas-lormeau.github.io/zip.js/core-api.html
// full example : https://gildas-lormeau.github.io/zip.js/demos/demo-create-file.html
// npm install @zip.js/zip.js

import * as zip from '@zip.js/jip.js';

zip.configure({
    useWebWorkers : true,
    terminateWorkerTimeout : 5000,
    maxWorkers : navigator.hardwareConcurrency,
    workerScripts : { }
})


//Reader constructor
zip.TextReader(text)
zip.BlobReader(blob)
zip.Uint8ArrayReader(uint8array);
zip.Data64URIReader(dataURI);
zip.HttpReader(URL, options)

//Writer constructor
zip.TextWriter()
zip.BlobWriter([mimeString])
zip.Uint8ArrayWriter()
zip.Data64URIWriter([mimeString])