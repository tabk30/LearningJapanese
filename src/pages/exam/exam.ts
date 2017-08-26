import { Component, Type } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VocaStartComponent } from '../../components/voca-start/voca-start';
import { QuestionBaseComponent } from '../../components/question-base/question-base';
/**
 * Generated class for the ExamPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-exam',
  templateUrl: 'exam.html',
})
export class ExamPage {
  public component1:Type<any> = VocaStartComponent;
  public component1Data:Object = "test component 1";
  public questionBase:Type<any> = QuestionBaseComponent;
  public component2Data:Object = {
    title: "問題１　＿＿＿のことばの読み方として最もよいものを、１・２・３・４から一つえらびなさい。",
    content: "",
    subQuestions:[
      {
        content: '<span>1</span> どちらのコーヒーがおいしいか、<span class="underline-text">比べて</span>みてください。',
        answer:[
          "ならべて",
          "しらべて",
          "えらべて",
          "くらべて"
        ]
      },
      {
        content: '<span>2</span> 家族と<span class="underline-text">親しい</span>友人を集めて、結婚パーティーを行った。',
        answer:[
          "したしい",
          "くやしい",
          "けわしい",
          "くわしい"
        ]
      },
      {
        content: '<span>3</span> むこうの<span class="underline-text">岸</span>まで泳いでみよう。',
        answer:[
          "きし",
          "たに",
          "りく",
          "とち"
        ]
      },
      {
        content: '<span>4</span> どちらのコーヒーがおいしいか、<span class="underline-text">比べて</span>みてください。',
        answer:[
          "ならべて",
          "しらべて",
          "えらべて",
          "くらべて"
        ]
      },
      {
        content: '<span>5</span> 家族と<span class="underline-text">親しい</span>友人を集めて、結婚パーティーを行った。',
        answer:[
          "したしい",
          "くやしい",
          "けわしい",
          "くわしい"
        ]
      },
      {
        content: '<span>6</span> むこうの<span class="underline-text">岸</span>まで泳いでみよう。',
        answer:[
          "きし",
          "たに",
          "りく",
          "とち"
        ]
      },
      {
        content: '<span>7</span> どちらのコーヒーがおいしいか、<span class="underline-text">比べて</span>みてください。',
        answer:[
          "ならべて",
          "しらべて",
          "えらべて",
          "くらべて"
        ]
      },
      {
        content: '<span>8</span> 家族と<span class="underline-text">親しい</span>友人を集めて、結婚パーティーを行った。',
        answer:[
          "したしい",
          "くやしい",
          "けわしい",
          "くわしい"
        ]
      }
    ]
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}
