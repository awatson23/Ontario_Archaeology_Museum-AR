  let resetButton = document.querySelector("#restartCamera")

  function onQRCodeScanned(scannedText)
    {
      var scannedTextMemo = document.querySelector("#scannedTextMemo");
      if(scannedTextMemo)
      {
        scannedTextMemo.innerHTML = `Please Wait`;
        window.location.assign(scannedText);
      }
    }
    
    //function returning a promise with a video stream
  function provideVideoQQ()
    {
        return navigator.mediaDevices.enumerateDevices()
        .then(function(devices) {
            var exCameras = [];
            devices.forEach(function(device) {
            if (device.kind === 'videoinput') {
              exCameras.push(device.deviceId)
            }
         });
            
            return Promise.resolve(exCameras);
        }).then(function(ids){
            if(ids.length === 0)
            {
              document.querySelector("#scannedTextMemo").innerHTML = "Your device does not have a camera";
            } else {
              var constraints= { video: { facingMode: "environment" } };
              return navigator.mediaDevices.getUserMedia(constraints);       
            }      
        });               
    }  
  
    //this function will be called when JsQRScanner is ready to use
    function JsQRScannerReady()
    {
        //create a new scanner passing to it a callback function that will be invoked when
        //the scanner succesfully scan a QR code
        var jbScanner = new JsQRScanner(onQRCodeScanned, provideVideoQQ);
        //reduce the size of analyzed images to increase performance on mobile devices
        jbScanner.setSnapImageMaxSize(300);
        var scannerParentElement = document.getElementById("scanner");
      if(scannerParentElement)
        {
            //append the jbScanner to an existing DOM element
          jbScanner.appendTo(scannerParentElement);
        }        
    }

    function restartCamera()
    {
      location.reload();
    }

    resetButton.addEventListener("click", restartCamera);