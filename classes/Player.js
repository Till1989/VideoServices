export class Player
{
  video;
  constructor(Video)
  {
   this.video=Video;
     switch(this.video.className)
     {
     case "FullVideo": console.log("loading 25%");
     console.log("loading 50%");
     console.log("loading 75%");
     console.log("loading 100%"); break;
     case "Shorts": break;
     default: break; 
     }
  }
  Play()
  {
    if(this.video!=null)
    {
    }
  }
  Pause()
  {
    if(this.video!=null)
    {
    }
  }
  Stop()
  {
    if(this.video!=null)
    {
    }   
  }
}