document.getElementById("downloadBtn").addEventListener("click", function() {
    alert("Button clicked!"); // Add this line for debugging
    // ... existing code
});


document.getElementById("downloadBtn").addEventListener("click", function() {
    const audioFileUrl = "audio/Ayy-Ayy-Skipper-Audio.MP3"; // URL to the WAV audio file

    fetch(audioFileUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.blob(); // Convert to Blob
        })
        .then(blob => {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob); // Create a URL for the blob
            link.download = "audio/Ayy-Ayy-Skipper-Audio.MP3"; // Specify the WAV file name for the download
            document.body.appendChild(link);
            link.click(); // Trigger download
            document.body.removeChild(link); // Remove the link from the document
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
});
