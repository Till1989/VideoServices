export class Video
{
  name;
  like;
  
  constructor(name)
  {
    this.name=name;
  }
}

export class FullVideo extends Video
{
  type;

}

export class Shorts extends Video
{
  type;

}