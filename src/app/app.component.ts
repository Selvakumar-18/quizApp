import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'quizApp';
  quizData: any;
  questionS: any;
  showData:any;
  colorCode:any;
  StoreData:any;
  currentQuestionIndex: number = 0
  // showNext:Boolean=true;

  constructor(private appService :AppService) {}
  ngOnInit(){
    this.getQuestions();
  }

  getQuestions(){
    this.appService.getUsers().subscribe((data:any)=>{
      this.quizData = data;
    })
  }
  sendAns(recivedData:any){

    if(recivedData === true){
      this.showData = 'Hey Correct Awesome..'
      this.colorCode = '#2ecc71';
    }
    else{
      this.showData = 'Sorry Try Next time..'
      this.colorCode = '#e74c3c'
    }
  }

  nextQues(){
    this.currentQuestionIndex++;
      if (this.currentQuestionIndex <= this.quizData.length) {
        this.showData='';
      }
      else{
        this.currentQuestionIndex = 0
      }
  }
 
}
