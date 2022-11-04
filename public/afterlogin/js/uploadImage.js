(function() {

    console.log('connect to firebase');

    // Initialize Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyBhECFBJadJ4yFQF4KxbVfA7a6mrWsM_jo",
        authDomain: "appsale-ba3f9.firebaseapp.com",
        databaseURL: "https://appsale-ba3f9-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "appsale-ba3f9",
        storageBucket: "appsale-ba3f9.appspot.com",
        messagingSenderId: "757083996678",
        appId: "1:757083996678:web:258b05b355945f9d207987",
        measurementId: "G-85H2Z7X2MT"
      };
      
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var database = firebase.database();


    // /**
    //  * Initializes the app.
    //  */
    var initApp = function() {

        const fileButton = document.getElementById('fileButton');

        if (!!fileButton) {

            fileButton.addEventListener('change', function(e) {

                uploadFile(e.target.files[0])

            });
        }


    };

    function uploadFile(file) {

        // var newMetadata = {
        //   cacheControl: 'public,max-age=300',
        //   contentType: 'image/jpeg',
        //   contentLanguage: null,
        //   customMetadata: {
        //     whatever: 'we feel like',
        //   },
        // };

        // Create the file metadata
        var metadata = {
            contentType: 'image/jpeg',
        };
        var uploadTask = firebase.storage().ref('img/' + Date.now()).put(file, metadata);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on(
            firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            function(snapshot) {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                progressBar.value = progress;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                }
            },
            function(error) {
                // Errors list: https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;

                    case 'storage/canceled':
                        // User canceled the upload
                        break;

                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                }
            },
            function() {
                // Upload completed successfully, now we can get the download URL

                uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                    console.log('File available at', downloadURL);
                    var _img = document.getElementById('photo');
                    var newImg = new Image;
                    newImg.onload = function() {
                        _img.src = this.src;
                    }
                    newImg.src = downloadURL;

                });

            }
        );
    }

}())
