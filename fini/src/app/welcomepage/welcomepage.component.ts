import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-welcomepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcomepage.component.html',
  styleUrl: './welcomepage.component.css'
})
export class WelcomepageComponent {

  shouldBounce : boolean = false;
  showstuff : boolean = false;
  showfinalpage : boolean = false;
  showfirstpage : boolean = false;
  showsecondpage : boolean = false;
  showthirdpage : boolean = false;
  showdeathpage : boolean = false;
  showfourthpage: boolean = false;
  showfifthpage : boolean = false;
  showsixthpage : boolean = false;
  showseventhpage : boolean = false;
  showeighthpage : boolean = false;
  showninthpage: boolean = false;
  showtenthpage: boolean = false;


  ngOnInit(){
    this.showfirstpage = true;
this.shouldBounce = true;
// this.playAudio();
  }

  // playAudio(){
  //   let audio = new Audio();
  //   audio.src = "/assets/Chris_Mix_Chipi_Chipi_Chapa_Chapa_Dubi_Dubi_Daba_Daba-651057.mp3";
  //   audio.muted = true;
  //   audio.load();
  //   audio.play();
  // }

  showAll(){
    this.showstuff=true;
    this.playAudio();
  }

  showmsg(){
    
    alert("Hmm, I'm sorry, but that's the wrong answer :) Try again 😠");

  }
  playAudio(){
    console.log('playaudio');
    let aud = <HTMLAudioElement> document.getElementById('notification');
    console.log(aud)

    // alert("Can start playing audio");
    // let audioPlayer = <HTMLAudioElement> document.getElementById('notification');
    aud.muted = false;
    aud.play(); 
    aud.loop = true;
  }

  readyselected(){
    this.showfirstpage = false;
    this.showsecondpage = true;
    console.log('here')
    // this.lost();
  }

  showthird(){
   this.playAnswerAudio();
    this.showsecondpage = false;
    this.showthirdpage = true;
    console.log('here')
    // this.lost();
  }

  showfourth(){
    this.playAnswerAudio();
    this.showthirdpage = false;
    this.showfourthpage = true;
    console.log('here')
    // this.lost();
  }

  showfifth(){
    this.playAnswerAudio2();
    this.showfourthpage = false;
    this.showfifthpage = true;
    console.log('here')
    // this.lost();
  }
  showsixth(){
    this.playAnswerAudio();
    this.showfifthpage = false;
    this.showsixthpage = true;
    console.log('here')
    // this.lost();
  }
  showseventh(){
    this.playAnswerAudio2();
    this.showsixthpage = false;
    this.showseventhpage = true;
    console.log('here')
    // this.lost();
  }
  showeighth(){
    this.playAnswerAudio();
    this.showseventhpage = false;
    this.showeighthpage = true;
    console.log('here')
    // this.lost();
  }
  showninth(){
    this.playAnswerAudio2();
    this.showeighthpage = false;
    this.showninthpage = true;
    console.log('here')
    // this.lost();
  }
  showtenth(){
    this.playAnswerAudio();
    this.showninthpage = false;
    this.showtenthpage = true;
    console.log('here')
    // this.lost();
  }

  showfinal(){
    this.showtenthpage = false;
    this.showfinalpage = true;
  }
  lost(){
    this.showfirstpage = false;
    this.showsecondpage = false;
    this.showdeathpage = true;
    this.playYoudiedAudio();
  }

  playYoudiedAudio(){
    console.log('playaudio');
    let aud = <HTMLAudioElement> document.getElementById('diednotification');
    console.log(aud)

    // alert("Can start playing audio");
    // let audioPlayer = <HTMLAudioElement> document.getElementById('notification');
    aud.muted = false;
    aud.play(); 
    aud.loop = true;
  }

  playAnswerAudio(){
    console.log('playaudio');
    let aud = <HTMLAudioElement> document.getElementById('answer');
    console.log(aud)

    // alert("Can start playing audio");
    // let audioPlayer = <HTMLAudioElement> document.getElementById('notification');
    aud.muted = false;
    aud.play(); 
   
  }
  
  playAnswerAudio2(){
    console.log('playaudio');
    let aud = <HTMLAudioElement> document.getElementById('answer2');
    console.log(aud)

    // alert("Can start playing audio");
    // let audioPlayer = <HTMLAudioElement> document.getElementById('notification');
    aud.muted = false;
    aud.play(); 
   
  }
  togglesong(){
    console.log('playaudio');
    let aud = <HTMLAudioElement> document.getElementById('notification');
    console.log(aud)

    // alert("Can start playing audio");
    // let audioPlayer = <HTMLAudioElement> document.getElementById('notification');
    
    if(aud.muted){
      aud.muted = false;
    }
    else{
      aud.muted = true;
    }
    
  }

}
