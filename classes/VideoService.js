export class VideoService
{
  name;
  channels=[];
  users=[];
 constructor (name)
  {
   this.name=name;
  }
  AddChannel(Channel)
  {
   this.channels.push(Channel);
  }
  RemoveChannel(name)
  {
    this.channels.splice(this.channels.findIndex(chan => chan.name === name),1);
  }
  AddUser(User)
  {
    this.users.push(User);
  }
  RemoveUser(name)
  {
   this.users.splice(this.users.findIndex(us=>us.name===name),1);
  }

}