
const datePeriod=document.querySelector('.controls__date-period')
const datePeriodList = document.querySelector('.controls__date-period-list')
const datePeriodItems = document.querySelectorAll('.date-period-list__item')
const datePeriodText = document.querySelector('.controls__date-period-text')

const daysAmount=document.querySelector('.controls__days-amount')
const daysAmountList = document.querySelector('.controls__days-amount-list')
const daysAmountItems = document.querySelectorAll('.days-amount-list__item')
const daysAmountText = document.querySelector('.controls__days-amount-text')







//DATE PERIOD HANDLERS
datePeriod.addEventListener('click', function(e) {
  if(e.target.classList.contains('date-period-list__item_custom')){
    datePeriod.classList.remove('open');
    datePeriodList.classList.remove('visible');
  }
  else if (!datePeriod.classList.contains('open')) {
    datePeriod.classList.add('open');
    datePeriodList.classList.add('visible');
    
    /* Conditions to close other control-item elements */
  
    if (calendar.classList.contains('visible') ) {
      calendar.classList.remove('visible');
    }
  } else {
    datePeriod.classList.remove('open');
    datePeriodList.classList.remove('visible');
  }
})
for (let i = 0; i < datePeriodItems.length; i++) {
  datePeriodItems[i].addEventListener('click', function(e) {
    if (!datePeriodItems[i].classList.contains('selected')) { datePeriodItems[i].classList.add('selected'); }
    datePicked  = new Date();
    if(datePeriodItems[i].classList.contains('date-period-list__item_custom')){
      renderCalendar(month,year)
      if (!calendar.classList.contains('visible')) {;
        calendar.classList.add('visible');
      }
    } else if(datePeriodItems[i].classList.contains('date-period-list__item_today')){
      datePicked.setDate(date.getDate())
    } else if(datePeriodItems[i].classList.contains('date-period-list__item_yesterday')){
      datePicked.setDate(date.getDate()-1)
    } 
    else if(datePeriodItems[i].classList.contains('date-period-list__item_tomorrow')){
      datePicked.setDate(date.getDate()+1)
    } 
    datePicked.setMinutes(0);
    datePicked.setHours(0);
    datePicked.setSeconds(0);

    renderBoard(daysAmountValue,timelineStep)

    for (let j = i - 1; j >=0; j--) {
      if (datePeriodItems[j].classList.contains('selected')) { datePeriodItems[j].classList.remove('selected'); }
    }
    for (let k = i + 1; k < datePeriodItems.length; k++) {
      if (datePeriodItems[k].classList.contains('selected')) { datePeriodItems[k].classList.remove('selected'); }
    }
    let itemText = datePeriodItems[i].textContent;
    datePeriodText.textContent = itemText;

    controlsDatePickerText.textContent = `${monthShortList[datePicked.getMonth()]} ${datePicked.getDate()}, ${datePicked.getFullYear()}`;
  });
}

//ROWS NUMBER HANDLERS

// Calendar 
let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
let datePicked =  new Date();
let dayPicked = datePicked.getDate()-1
let daysOffset = 0;
let daysInMonth;
const calendar = document.querySelector('.calendar')
const calendarTableDays = document.querySelectorAll('.calendar-table__cell-day')
const calendarMonthYear = document.querySelector('.calendar__month')
const calendarBtnNext = document.querySelector('.calendar__controll_next')
const calendarBtnPrev = document.querySelector('.calendar__controll_prev')
const controlsDatePicker = document.querySelector('.controls__date-picker-item')

const controlsDatePickerText = document.querySelector('.controls__date-picker-date')
const controlsDateSelectPrev = document.querySelector('.controls__date-select-prev')
const controlsDateSelectNext = document.querySelector('.controls__date-select-next')


const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const weekShortDays = ['Sun','Mon','Tue',"Wed",'Thu','Fri','Sat']
const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthShortList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];


const renderCalendar = (month,year)=>{
  daysInMonth = new Date(year,month+1,0).getDate()
  daysOffset = new Date(year,month).getDay()

  //Clear all days
  for(let i=0; i<calendarTableDays.length; i++){
    calendarTableDays[i].textContent = ""
    if(calendarTableDays[i].textContent==""){
      calendarTableDays[i].classList.remove('calendar-table__cell-day_selected-one')

    }
  }

  //Fill all days
  for(let i=0; i<daysInMonth; i++){
    let dateTemp = new Date(year,month,i+1)

    if(Date.parse(dateTemp)==Date.parse(datePicked) ){
      calendarTableDays[i+daysOffset].classList.add('calendar-table__cell-day_selected-one')
      renderBoard(daysAmountValue,timelineStep)
    }

    calendarTableDays[i+daysOffset].textContent = i+1
  }

  //Creating text fot month
  let textMonth = monthList[month]
  let textMonthYear = textMonth + ' ' + year
  calendarMonthYear.textContent = textMonthYear;
}

calendarBtnNext.addEventListener('click', function() {
  month+=1
  if (month>11){
    year+=1;
    month=0;
  }
  renderCalendar(month,year)
})

calendarBtnPrev.addEventListener('click', function() {
  month-=1
  if (month<0){
    year-=1;
    month=11;
  }
  renderCalendar(month,year)
})

controlsDatePicker.addEventListener('click', function() {
  let monthPicked = datePicked.getMonth()
  let yearPicked = datePicked.getFullYear()
  month = monthPicked;
  year = yearPicked;
  renderCalendar(monthPicked,yearPicked)
  if (!calendar.classList.contains('visible')) {;
    calendar.classList.add('visible');
  }
  /* Conditions to close other control-item elements */

  if (datePeriod.classList.contains('open') && datePeriodList.classList.contains('visible')) {
      datePeriod.classList.remove('open');
      datePeriodList.classList.remove('visible');
  }
  
})


calendarTableDays.forEach((calendarTableDay,idx) => {
  calendarTableDay.addEventListener('click', function() {
    if (idx-daysOffset>=0 && idx-daysOffset<daysInMonth) {        
      
          dayPicked= idx-daysOffset;
          datePicked = new Date(year,month,dayPicked+1)

      //Creating text for controls text
      controlsDatePickerText.textContent = `${monthShortList[datePicked.getMonth()]} ${datePicked.getDate()}, ${datePicked.getFullYear()}`;

    renderCalendar(month,year)
    }
  })
});

controlsDateSelectPrev.addEventListener('click', function() {
  datePicked.setDate(datePicked.getDate()-1);
  controlsDatePickerText.textContent = `${monthShortList[datePicked.getMonth()]} ${datePicked.getDate()}, ${datePicked.getFullYear()}`;
   renderBoard(daysAmountValue,timelineStep)
})
controlsDateSelectNext.addEventListener('click', function() {
  datePicked.setDate(datePicked.getDate()+1);
  controlsDatePickerText.textContent = `${monthShortList[datePicked.getMonth()]} ${datePicked.getDate()}, ${datePicked.getFullYear()}`;
   renderBoard(daysAmountValue,timelineStep)
})


















/* Clicking outside of popup to close and deselect */
window.addEventListener('click', function(event) {
  let target = event.target;
  let clickedDatePeriod= target.closest('.controls__date-period');
  let clickedCalendar = target.closest('.calendar');
  let clickedControlsDatePicker = target.closest('.controls__date-picker-item');

  if (!clickedDatePeriod && datePeriod.classList.contains('open') && datePeriodList.classList.contains('visible')) {
      datePeriod.classList.remove('open');
      datePeriodList.classList.remove('visible');
  }
 
  if (!clickedDatePeriod  && !clickedControlsDatePicker  && !clickedCalendar && calendar.classList.contains('visible')) {;
    calendar.classList.remove('visible');
  }
});


const boardsTimeline = document.querySelector('.boards__timeline')
const boardsDates = document.querySelector('.boards__dates')
const boardTimegrid = document.querySelector('.board__timegrid') 
const timegridRows = document.querySelectorAll('.timegrid__row')

console.log(boardTimegrid.offsetWidth)
let daysAmountValue = 1;
let timelineStep = 1;
daysAmount.addEventListener('click', function(e) {
  if (!daysAmount.classList.contains('open')) {
    daysAmount.classList.add('open');
    daysAmountList.classList.add('visible');

    /* Conditions to close other control-item elements */
  
    if (calendar.classList.contains('visible') ) {
      calendar.classList.remove('visible');
    }
  } else {
    daysAmount.classList.remove('open');
    daysAmountList.classList.remove('visible');
  }
})
for (let i = 0; i < daysAmountItems.length; i++) {
  daysAmountItems[i].addEventListener('click', function(e) {
    if (!daysAmountItems[i].classList.contains('selected')) { daysAmountItems[i].classList.add('selected'); }

    if(daysAmountItems[i].classList.contains('days-amount-list__item_1')){
      daysAmountValue = 1
      timelineStep = 1

    } else if(daysAmountItems[i].classList.contains('days-amount-list__item_2')){
      daysAmountValue = 2
      timelineStep = 2
    } else if(daysAmountItems[i].classList.contains('days-amount-list__item_3')){
      daysAmountValue = 3
      timelineStep = 2
    }

    renderBoard(daysAmountValue,timelineStep)

    for (let j = i - 1; j >=0; j--) {
      if (daysAmountItems[j].classList.contains('selected')) { daysAmountItems[j].classList.remove('selected'); }
    }
    for (let k = i + 1; k < daysAmountItems.length; k++) {
      if (daysAmountItems[k].classList.contains('selected')) { daysAmountItems[k].classList.remove('selected'); }
    }
    
    let itemText = daysAmountItems[i].textContent;
    daysAmountText.textContent = itemText;


  });
}
const boardHourStart = 10// 6am
const boardHourEnd = 24// 9pm
const renderBoard = (daysAmountValue,timelineStep) =>{
  //init variables
  let timelineTime;
  let halfDayPast = 0;
  let postfix;
  let boardCellWidth = 100/((boardHourEnd-boardHourStart)*daysAmountValue*2)
  //Timline offset 
 // boardsTimeline.style.width = `${85+boardCellWidth}%`;
 // boardsDates.style.width = `${85+boardCellWidth}%`;
  //Board timeline clear
  boardsTimeline.innerHTML = "";
  //Board timeline fill
  for(let i=0; i<24*daysAmountValue; i++){
    
    timelineTime = i - (halfDayPast>1?24:12)*(Math.floor(halfDayPast/2))-(halfDayPast%2==0?0:12)
    
    if(i === 0){
      timelineTime = 12;
      postfix= "pm";
    }else if(i%12===0){
      timelineTime = 12
      halfDayPast+=1;
    }
    postfix = halfDayPast%2==0?"am":"pm"

    i=i+timelineStep-1

   
    if((i - (halfDayPast>1?24:12)*(Math.floor(halfDayPast/2)))>=boardHourStart&&(i - (halfDayPast>1?24:12)*(Math.floor(halfDayPast/2)))<=boardHourEnd){
      boardsTimeline.insertAdjacentHTML('beforeend',`
      <div class="timeline__item" style="width: ${boardCellWidth*(timelineStep*2)}%">
        <p class="timeline__item-time">${timelineTime + postfix}</p>
      </div>`)
    }
    
  }
  


  //Board dates(1day,2days,3days)
  boardsDates.innerHTML="";
  if(daysAmountValue==1){
    let boardsDateText = `${weekShortDays[datePicked.getDay()]}, ${monthShortList[datePicked.getMonth()]} ${datePicked.getDate()} ${datePicked.getFullYear()}`;
    
    boardsDates.insertAdjacentHTML('beforeend',`
    <div class="boards__dates-item" style="width:100%">
      <p class="boards__dates-item-time">${boardsDateText}</p>
    </div>`)
  }
  if(daysAmountValue==2){
    let boardsDateText = `${weekShortDays[datePicked.getDay()]}, ${monthShortList[datePicked.getMonth()]} ${datePicked.getDate()} ${datePicked.getFullYear()}`;
  
    let datePickedTemp = new Date()
    datePickedTemp.setDate(datePicked.getDate()+1);
    let boardsDateNextText = `${weekShortDays[datePickedTemp.getDay()]}, ${monthShortList[datePickedTemp.getMonth()]} ${datePickedTemp.getDate()} ${datePickedTemp.getFullYear()}`;
    
    boardsDates.insertAdjacentHTML('beforeend',`
    <div class="boards__dates-item" style="width:50%">
      <p class="boards__dates-item-time">${boardsDateText}</p>
    </div>
    <div class="boards__dates-item" style="width:50%">
      <p class="boards__dates-item-time">${boardsDateNextText}</p>
    </div>
    `)
  }
  if(daysAmountValue==3){
    let boardsDateText = `${weekShortDays[datePicked.getDay()]}, ${monthShortList[datePicked.getMonth()]} ${datePicked.getDate()} ${datePicked.getFullYear()}`;

    let datePickedTemp = new Date()
    datePickedTemp.setDate(datePicked.getDate()+1);
    let boardsDateNextText = `${weekShortDays[datePickedTemp.getDay()]}, ${monthShortList[datePickedTemp.getMonth()]} ${datePickedTemp.getDate()} ${datePickedTemp.getFullYear()}`;
    
    let dateNextPickedTemp = new Date()
    dateNextPickedTemp.setDate(datePicked.getDate()+2);
    let boardsDateNextNextText = `${weekShortDays[dateNextPickedTemp.getDay()]}, ${monthShortList[dateNextPickedTemp.getMonth()]} ${dateNextPickedTemp.getDate()} ${dateNextPickedTemp.getFullYear()}`;
    
    boardsDates.insertAdjacentHTML('beforeend',`
    <div class="boards__dates-item" style="width:33.3333333333%">
      <p class="boards__dates-item-time">${boardsDateText}</p>
    </div>
    <div class="boards__dates-item" style="width:33.3333333333%">
      <p class="boards__dates-item-time">${boardsDateNextText}</p>
    </div>
    <div class="boards__dates-item" style="width:33.3333333333%">
      <p class="boards__dates-item-time">${boardsDateNextNextText}</p>
    </div>
    `)
  }



  //Board fill cells
  

 
  
  for(let i=0; i< timegridRows.length; i++){
    timegridRows[i].innerHTML = "";
    for(let j=0; j< (boardHourEnd-boardHourStart)*daysAmountValue*2; j++){
      let timeGridCell;

      if (j%((boardHourEnd-boardHourStart)*2)===0 && j!==0){
        timeGridCell = `<div class="timegrid__cell timegrid__cell_end" style="width: ${boardCellWidth}%"> </div>`
      } else{
        timeGridCell = `<div class="timegrid__cell" style="width: ${boardCellWidth}%"> </div>`
      }
      timegridRows[i].innerHTML += timeGridCell
    }
  }
}

