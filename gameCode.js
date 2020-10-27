var event, ok, numQuest;
var answers = [];
do {//Выводим первый вопрос
    ok = false;
    event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
   
    if (event == -1) {
        break;
    }
    else {
        ok = isAnswer(works.a0, event);
    }
} while (!ok);
    answers.push(event);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        do {
            ok = false;
            event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.b0, event);
            }
        } while (!ok);
            answers.push(event);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);
                    answers.push(event);
                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);
                    answers.push(event);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        do {
            ok = false;
            event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.c0, event);
            }
        } while (!ok);
            answers.push(event);
        switch (event) {
            case 1: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);
                    answers.push(event);
                break;
            case 2: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);
                    answers.push(event);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');
do {//Выводим вопрос
    ok = false;
    numQuest = +prompt(works.e00 + works.e1 + works.e2 + works.e3 + '-1 - Выход');
   
    if (numQuest == -1) {
        break;
    }
    else {
        ok = quest(works.e0, numQuest);
    }
} while (!ok);


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

// Функция вывода вопросов и ответов
function quest(a, numQuest) {
    if ((numQuest==1) && (answers[0]==1)) {
        alert(works.a00 + works.a1);
    }
    else if ((numQuest==1) && (answers[0]==2)) {
        alert(works.a00 + works.a2);
    }
    else if (numQuest==2) {
        if ((answers[0]==1) && (answers[1]==1)) {
            alert(works.b00 + works.b1);
        }
        else if ((answers[0]==1) && (answers[1]==2)) {
            alert(works.b00 + works.b2);
        }
        else if ((answers[0]==2) && (answers[1]==1)) {
            alert(works.c00 + works.c1);
        }
        else if ((answers[0]==2) && (answers[1]==2)) {
            alert(works.c00 + works.c2);
        }
    }	
    else if ((numQuest==3) && (answers[2]==1)) {
            alert(works.d00 + works.d1);
        }
    else if ((numQuest==3) && (answers[2]==2)) {
         alert(works.d00 + works.d2);
    }
  return;  
}
//Функция для оптимизации кода