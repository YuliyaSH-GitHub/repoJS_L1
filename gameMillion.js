var event, ok, amount;

millionaire(questions.qa, questions.a1, questions.a2, questions.a3, questions.a4, questions.a0); //Выводим первый вопрос, запускаем функцию с циклом do...while
    if (event==questions.correctA) {
        alert("Это правильный ответ! Вы заработали " + questions.summA + " руб.");
        millionaire(questions.qb, questions.b1, questions.b2, questions.b3, questions.b4, questions.b0); //Выводим второй вопрос
        if (event==questions.correctB) {
            amount=questions.summA+questions.summB;
            alert("Это правильный ответ! Ваш выигрыш составляет " + amount + " руб.");
            millionaire(questions.qc, questions.c1, questions.c2, questions.c3, questions.c4, questions.c0); //Выводим третий вопрос
            if (event==questions.correctC) {
                amount=questions.summA+questions.summB+questions.summC;
                alert("Это правильный ответ! Ваш выигрыш составил " + amount + " руб.");
            }
            else {
                alert("Это неправильный ответ! Вы проиграли(((");
            }
        }
        else {
            alert("Это неправильный ответ! Вы проиграли(((");
        }
    }
    else {
        alert("Это неправильный ответ! Вы проиграли(((");
    }
alert('Спасибо за игру');

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
    }

//Функция с циклом do...while
/*Где а - вопрос из объекта questions (напр - questions.qa); 
b - 1-й вариант ответа (напр - questions.a1); с - 2-й вариант ответа (напр - questions.a2); 
d  - 3-й вариант ответа (напр - questions.a3); e  - 4-й вариант ответа (напр - questions.a4); f - кол-во ответов (questions.a0) */
function millionaire(a, b, c, d, e, f) { 
    do {//Выводим вопрос
        ok = false;
        event = +prompt(a + b + c + d + e + '-1 - Выход из игры');
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(f, event);
        }
    } while (!ok);
    return; 
}
