export class Video
{
  name;
  description;
  liked=[];
  disliked=[];
  comments=[];
  watchedCount=0;
  
  constructor(name)
  {
    this.name=name;
  }

}

export class FullVideo extends Video
{
  Load()
  {
    console.log("loading 25%");
    console.log("loading 50%");
    console.log("loading 75%");
    console.log("loading 100%");
  }
}

export class Shorts extends Video
{
  Load()
  {
    console.log("loading 100%");
  }
}