import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
 selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{
 allowNewServers = false;
serverCreationsStatus="No server was created";
serverName='TestServer';
serverCreated=false;
  constructor(){
    setTimeout(()=>{
      this.allowNewServers= true;
    },2000);
  }

  ngOnInit(){
  }

  onCreateServer() {
    this.serverCreated=true;
    this.serverCreationsStatus =this.serverName+" server was created";
  }

  onUpdateServerName(event: Event){
    this.serverName= (<HTMLInputElement>event.target).value;
    console.log("event ", event);
  }
}
