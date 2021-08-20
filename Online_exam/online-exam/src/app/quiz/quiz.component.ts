import { Component, OnInit } from '@angular/core';
import { GetquizdataService } from '../getquizdata.service';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Question } from '../question.model';
import { Option } from '../option.model';
import { Quiz } from '../quiz.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  arrBirds: string[];
  quizName: string = "JavaScript Quiz";
  filteredQuestions: any[];
  quizes: any[];
  quiz: Quiz = new Quiz(null)
  answers = new Map();
  disableSubmit: Boolean = false;
  showSubmit: Boolean = true;
  correctAnswers = 0;
  reviewMessage: string;
  correctOption: string;


  constructor(public dataServ: GetquizdataService) { }
  answerId: any;
  selectedId: any;
  resultMessage: any = "The answer is not Correct";
  ngOnInit(): void {
    this.dataServ.loadQuizData().subscribe(data => {
      this.filteredQuestions = data as string[];
      console.log(this.filteredQuestions);
    },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      })

    this.quiz.questions = [];
  }


  onSubmit() {
    this.showSubmit = false;
    this.answers.forEach(x => {
      if (x) {
        this.correctAnswers+=1;
      }
    });
  }

  onSelect(question: Question, option: Option) {
    question.resultMessage = "";
    if (option.isAnswer) {
      this.reviewMessage = "Your answer is correct.";
      question.resultMessage = this.reviewMessage;
    } else {
      this.reviewMessage = "Your answer is wrong.";
      question.options.forEach(option => {
        if (option.isAnswer) {
          this.correctOption = " Correct answer is " + option.name;
        }
      });

      question.resultMessage = this.reviewMessage + this.correctOption;
    }
    this.answers.set(question.id, option.isAnswer);
    
  }
}
