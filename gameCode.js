var event, ok, numQuest;
var answers = [];
optimiz(works.a00, works.a1, works.a2, works.a0); //Выводим первый вопрос, запускаем функцию с циклом do...while
    answers.push(event);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
    optimiz(works.b00, works.b1, works.b2, works.b0);
            answers.push(event);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
            case 2: // Второе действие. Если ввели 2, то также переходим на 4 окно
            optimiz(works.d00, works.d1, works.d2, works.d0);
                    answers.push(event);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие. Если в 1 окне ввели 2 то переходим к 3 окну
    optimiz(works.c00, works.c1, works.c2, works.c0);
            answers.push(event);
        switch (event) {
            case 1: // Второе действие
            case 2: // Второе действие
            optimiz(works.d00, works.d1, works.d2, works.d0);
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
//Функция с циклом do...while для оптимизации кода
/*Где а - вопрос из объекта works (напр - works.a00); 
b - 1-й вариант ответа (напр - works.a1); с - 2-й вариант ответа (напр - works.a2); 
d - количество ответов (напр - works.a0) */
function optimiz(a, b, c, d) { 
    do {//Выводим вопрос
        ok = false;
        event = +prompt(a + b + c + '-1 - Выход из игры');
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(d, event);
        }
    } while (!ok);
}
