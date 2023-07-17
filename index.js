import {VideoService} from './classes/VideoService.js';
import {Channel} from './classes/Channel.js';
import {FullVideo, Shorts} from './classes/Video.js';
import { User } from './classes/User.js';
import { vidPage, vidServPage, channPage } from './classes/Page.js';
import { Player } from './classes/Player.js';

let vidSrv;








vidSrv = new VideoService("YouTube");
vidSrv.AddChannel(new Channel("ВелоМотоОгород"));
vidSrv.channels[vidSrv.channels.findIndex(ch=>ch.name=="ВелоМотоОгород")].AddVideo(new FullVideo("Посадил и офигел! 100% работает! Не спам!"));
vidSrv.channels[vidSrv.channels.findIndex(ch=>ch.name=="ВелоМотоОгород")].AddVideo(new Shorts("Приехал на работу и, бл#, домой хочу"));
console.log(vidSrv);


let vSPage=new vidServPage(new User("sfffda",false),vidSrv);
console.log(vSPage);

let chPage=new channPage(vSPage.user,vSPage.channels[vidSrv.channels.findIndex(ch=>ch.name=="ВелоМотоОгород")]);
chPage.Subscribe();
console.log(chPage);


let vPage=new vidPage(chPage.user,chPage.videos[chPage.videos.findIndex(vid=>vid.name=="Посадил и офигел! 100% работает! Не спам!")]);
vPage.Like();
vPage.Comment("Вам положена выплата 10000грн. Перейдите по ссылке и получите!");
vPage.Comment("Наебалово, как обычно!");
vPage.Comment("Только что получила, даже больше! Спасибо большое!");
//vPage.Uncomment("Наебалово, как обычно!");
//vPage.Like();

vPage.player.Play();

console.log(vPage);









