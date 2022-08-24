async function getAudioVideo()
{
  let stream = null;
  try {
    stream = await navigator.mediaDevices.getUserMedia(constraints);
  } catch (err) {
    console.error(err);
  }
  return stream;
}

function sendStream()
{

}
