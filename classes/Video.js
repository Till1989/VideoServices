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
  constructor(name)
  {
    super(name);
    this.className="FullVideo";
  }

}

export class Shorts extends Video
{
  constructor(name)
  {
    super(name);
    this.className="Shorts";
  }

}