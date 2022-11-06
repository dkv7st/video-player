 const $video = document.querySelector('#video')

 const $Play = document.querySelector('#Play')
 const $Pause = document.querySelector('#Pause')

 const $Backward = document.querySelector('#Backward')
 const $Forward = document.querySelector('#Forward')

  $Play.addEventListener ('click', handlePlay)
  $Pause.addEventListener ('click', handlePause)

  function handlePlay() {
    $video.play()
    $Play.hidden = true
    $Pause.hidden = false
    console.log('le diste click al botón de play')
  }

  function handlePause() {
    $video.pause()
    console.log('le diste click al botón de pause')
    $Pause.hidden = true
    $Play.hidden = false

  }

  $Backward.addEventListener ('click', handleBackward)
  $Forward.addEventListener ('click', handleForward)

  function handleBackward () {
    console.log('para atrás 10 segundos', $video.currentTime)
    $video.currentTime -=10 
  }

  function handleForward () {
    $video.currentTime = $video.currentTime + 10 
    console.log('para adelante 10 segundos', $video.currentTime)
  }

  const $progress = document.querySelector ('#progress')
$video.addEventListener ('loadedmetadata', handleLoaded)
$video.addEventListener ('timeupdate', handleTimeUpdate)


function handleLoaded() {
  $progress.max = $video.duration
  console.log ('video cargado', $video.duration)
}
  
function handleTimeUpdate () {
  $progress.value = $video.currentTime
  //console.log ('tiempo actual', $videoCurrentTime)
}

$progress.addEventListener ('input', handleInput) 

function handleInput () {
  $video.currentTime = $progress.value
  console.log($progress.value)
}