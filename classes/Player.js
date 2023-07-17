export class Player
{
  video;
  constructor(Video)
  {
   this.video=Video;
  }
  Play()
  {
    this.video.Load();
  }
  Pause()
  {
 
  }
  Stop()
  {
  
  }
}