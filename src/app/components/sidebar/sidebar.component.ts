import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  private social_networks = [
    {
      name: 'Facebook',
      icon: 'facebook',
      link: 'https://www.facebook.com/pages/Disco-Duro-de-Roer/516155851734486?ref=hl'
    },
    {
        name: 'Linkedin',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/fernando-ure%C3%B1a-gomez-07b04049/'
    },
    {
        name: 'Youtube',
        icon: 'youtube',
        link: 'https://www.youtube.com/user/DiscoDurodeRoer'
    },
    {
        name: 'Twitter',
        icon: 'twitter',
        link: 'https://twitter.com/DiscoDurodeRoer'
    },
    {
        name: 'Website',
        icon: 'globe',
        link: 'https://www.discoduroderoer.es'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
