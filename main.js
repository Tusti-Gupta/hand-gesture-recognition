Webcam.set({
    width: 490,
    height: 420,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("picture").innerHTML = '<img id="capture_picture" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/figjRGLwH/model.json',modelLoaded);

function modelLoaded() {
    console.log("Model is loaded!");
}