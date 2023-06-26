export class User
{
  name;
  
  constructor(name)
  {
    this.name=name;
  }
  WatchVideo(Video)
  {

  }
}

export class LoggedInUser extends User
{
  type;
  Like(Video)
  {


  }
  Subscribe(Channel)
  {


  }
}

export class AnonymousUser extends User
{
  type;

}