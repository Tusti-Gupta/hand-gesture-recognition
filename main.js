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
        document.getElementById("picture").innerHTML = '<img id="captured_picture" style="margin-bottom: 20px;" src="'+data_uri+'"/>';
        check();
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/figjRGLwH/model.json',modelLoaded);

function modelLoaded() {
    console.log("Model is loaded!");
}

function check() {
    img = document.getElementById("captured_picture");
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_object").innerHTML = results[0].label;
        accuracy=results[0].confidence.toFixed(3);
        accuracy=(accuracy*100) + "%";
        document.getElementById("result_accuracy").innerHTML = accuracy;

    }
}