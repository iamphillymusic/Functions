 (function(){
    function Question(question, answers, correct){
        this.question = question;
        this.answers = answers;
        this.correct = correct; 
    }
    
    Question.prototype.displayQuestion = function(){
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++){
            console.log(`${i} : ${this.answers[i]}`)
        }
    }
    Question.prototype.checkAnswer = function (ans, callback){
        var sc;
        if (ans === this.correct){
            console.log('Very Correct!!');
           sc = callback(true);
        }else {
            console.log('Wrong Answer, Please Try Again');
            sc = callback(false);
        }
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function (score) {
        console.log(`your current score is: ${score}`);
        console.log('----------------------------');
    }
    
    
    var q1 = new Question (`Is JavaScript the collest programming language in the world?`, ['Yes', 'No'], 0)
    
    var q2 = new Question (`What is the name of this courses teacher ?`, ['john', 'Michael', 'Monday', 'Jonas'], 3);
    
    var q3 = new Question (`What does describe coding?`, ['Fun', 'Boring', 'Hard', 'Tedious'], 0);

    var questions = [q1, q2, q3];

    function score(){
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();

    function nextQuestion(){
    
        var random = Math.floor(Math.random() * questions.length);
        
        
        questions[random].displayQuestion();
        
        var answer = prompt(`Please select the correct answer.`) ;

        if(answer !== 'exit'){

        questions[random].checkAnswer(parseInt(answer), keepScore);
        nextQuestion();

        }
    }
    nextQuestion();
 })();

