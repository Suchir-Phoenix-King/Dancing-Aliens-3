function startClassification() {
    navigator.mediaDevices.getUserMedia({audio : true, video : true});
    classifier = ml5.soundClassifier('https://storage.googleapis.com/tm-model/UeFvj21EL/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults)
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'We can hear - '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Our Confidence - ' + (results[0].confidence * 100).toFixed(2) + " %";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        
        img = document.getElementById('alien1');
        img1 = document.getElementById('alien2');
        img2 = document.getElementById('alien3');
        img3 = document.getElementById('alien4');

        if (results[0].label == "Clap") {
            img.src = "aliens-01.gif";
            img1.src = "aliens-02.png";
            img2.src = "aliens-03.png";
            img3.src = "aliens-04.png";
        }
        else {
            img.src = "aliens-01.png";
            img1.src = "aliens-02.png";
            img2.src = "aliens-03.png";
            img3.src = "aliens-04.gif";
        }
    }
}