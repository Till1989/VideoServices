export class Channel
{
 name;
 videos=[];
 subscribers=[];
 constructor (name)
  {
   this.name=name;
  }
 AddVideo(Video)
  {
   this.videos.push(Video);
  }
 RemoveVideo(name)
  {
    this.videos.splice(this.videos.findIndex(vid => vid.name === name),1);
  }  

}