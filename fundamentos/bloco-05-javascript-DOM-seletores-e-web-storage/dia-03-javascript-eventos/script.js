function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo
  
  //exercicio 1
function createDaysOfTheMonth() {
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const monthDaysList = document.getElementById('days');

    for (let index = 0; index < decemberDaysList.length; index += 1) {
      const dia = decemberDaysList[index];
      const diaListElement = document.createElement('li');
      diaListElement.innerHTML = dia;
      if (diaListElement.innerText == 24 || diaListElement.innerText == 25 || diaListElement.innerText == 31) {
        diaListElement.className = 'day holiday';
      }
      else {
        diaListElement.className = 'day'
      }
      monthDaysList.appendChild(diaListElement);
    };
    
    for (index = 5; index < decemberDaysList.length; index += 7) {
      const sextasDeDezembro = document.querySelectorAll('#days li')[index]
      sextasDeDezembro.classList.add('friday')
    };
    
  };

createDaysOfTheMonth();

// exercicio 2
function btnHoliday() {
  const btnHoliday = document.createElement('button');
  const btnsContainer = document.getElementsByClassName('buttons-container')[0];
  btnsContainer.appendChild(btnHoliday);
  // btnHoliday.id('btn-holiday');
  
  btnHoliday.innerHTML = 'Feriados';
}

btnHoliday();