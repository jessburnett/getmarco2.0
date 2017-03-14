function toggleIntroVideo (){
    event.preventDefault();
    var introVideoPlaceholder = document.getElementById("intro-video-still");
    var introVideo = document.getElementById("intro-video");
    var videoUrl = "https://player.vimeo.com/video/141448733?autoplay=1";
    
    document.getElementById('vimeo').setAttribute("src", videoUrl);
    
    if (introVideo.style.display === 'block') {
        introVideo.style.display = 'none';
    } else {
        introVideo.style.display = 'block';
    }
    
    if (introVideoPlaceholder.style.display === 'none') {
        introVideoPlaceholder.style.display = 'block';
    } else {
        introVideoPlaceholder.style.display = 'none';
    }
    
}