const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompts user to select media stream, pass to video element and then play

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
             videoElement.play();
        }
    } catch (error) {
        console.log("Error in selectMediaStream function")
    }
}

button.addEventListener('click', async () => {
    // Disable button
    button.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset button
    button.disabled = false;
});

// On load
selectMediaStream();