var quiz = {
      questions: [
         {
            text: "수신인은 누구인가요?",
            responses: [
               { text: "해진 선생님", value: 1000 },
               { text: "세훈", value: 2000 },
               { text: "거울", value: 3000 },
               { text: "독자님", value: 4000 },
               { text: "칠인회 선생님", value: 5000 }
            ]
         },
         {
            text: "성탄절에 가장 기대하고 있던 건 무엇인가요?",
            responses: [
               { text: "소중한 사람으로부터의 편지", value: 10 },
               { text: "맛있는 음식", value: 20 },
               { text: "모두와 즐기는 모임", value: 40 },
               { text: "특별한 선물", value: 30 }
            ]
         },
         {
            text: "오늘은 언제 자고 싶으신가요?",
            responses: [
               { text: "평소와 비슷하게", value: 30 },
               { text: "평소보다는 조금 더 늦게", value: 10 },
               { text: "해 뜨는 걸 본 후에", value: 20 },
               { text: "될 수 있는 한 이른 시간에", value: 40 }
            ]
         },
         {
            text: "성탄에 듣고 싶은 음악은 어떤 것인가요?",
            responses: [
               { text: "신나고 경쾌한 음악", value: 40 },
               { text: "잔잔한 음악", value: 10 },
               { text: "분위기 있는 재즈 음악", value: 20 },
               { text: "고급스러운 클래식", value: 30 }
            ]
         },
         {
            text: "홀로 보내는 성탄에 하고 싶은 일은요?",
            responses: [
               { text: "독서", value: 10 },
               { text: "낮잠", value: 20 },
               { text: "요리", value: 30 },
               { text: "가벼운 산책", value: 40 }
            ]
         },
         {
            text:
               "오랜만에 만나는 친구에게 주고 싶은 성탄 선물은,",
            responses: [
               { text: "특이하고 이상하지만 재미있는 물건", value: 40 },
               { text: "친구가 오래전부터 갖고 싶다고 했던 것", value: 30 },
               { text: "내가 좋아하는 시집", value: 10 },
               { text: "직접 만든 수공예품", value: 20 }
            ]
         },
         {
            text: "지금 가장 마음에 와닿는 문장은 어느 것인가요?",
            responses: [
               { text: "나의 봄을 이제야 보낸다", value: 20 },
               { text: "편지의 주인을 나는 사랑하지 않을 수 없다", value: 10 },
               { text: "결국 우리들은 사랑의 모든 형태에 탐닉하였으며, 사랑이 베풀어줄 수 있는 모든 희열을 맛보았노라", value: 40 },
               { text: "그믐칠야의 캄캄한 밤. 그것만이 소용된다", value: 30 }
            ]
         }
      ]
   },
   userResponseSkelaton = Array(quiz.questions.length).fill(null);

var app = new Vue({
   el: "#app",
   data: {
      quiz: quiz,
      questionIndex: 0,
      userResponses: userResponseSkelaton,
      isActive: false,
      totalValue: 0
   },
   filters: {
      charIndex: function(i) {
         return String.fromCharCode(97 + i);
      }
   },
   methods: {
      restart: function(){
			 	this.questionIndex=0;
		 		this.userResponses=Array(this.quiz.questions.length).fill(null);
		 },
      selectOption: function(index) {
         Vue.set(this.userResponses, this.questionIndex, index);
         //console.log(this.userResponses);
      },
      next: function() {
         if (this.questionIndex < this.quiz.questions.length)
            this.questionIndex++;
      },

      created: function() {
          this.caculatedValue();
      },
      // Return "true" count in userResponses
      TotalValue: function() {
         var sum = 0;
         for (var i = 0; i < this.questionIndex; i++)
         {
            sum += quiz.questions[i].responses[this.userResponses[i]].value;
         }
         //this.totalValue = sum;
         return sum;
      }
      //     this.totalValue = quiz.questions.reduce((total, item) => {
      //       const itemSum = item.responses.reduce((sum, response) => {
      //           return sum + response.value;
      //       }, 0);

      //       return total + itemSum;
      //   }, 0);
      }
         //return this.userResponses.filter(function(val) { return val }).length;
          
})
    
   

