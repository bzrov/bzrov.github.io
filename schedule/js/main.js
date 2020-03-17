let json = '{"areas":[{"area_id":"e4t8f013shdyj6yh90","area_name":"Miami, FL","area_timezone":"-4","service_resources":[{"service_resource_id":"e4t8f010shd5gyyh70","service_resource_nickname":"Andre","service_resource_name_surname":"Andrey Dinin","service_resource_function":"Appliance Technician","service_resource_image":"http:\/\/artemiudintsev.com\/getjson\/urlava\/1.jpg"},{"service_resource_id":"e4t8f010sh8fuiyht9","service_resource_nickname":"Mark","service_resource_name_surname":"Marco Rodrigas","service_resource_function":"Appliance Technician","service_resource_image":"http:\/\/artemiudintsev.com\/getjson\/urlava\/2.jpg"}]},{"area_id":"e4t8f013s57yj6yr60","area_name":"Houston, TX","area_timezone":"-5","service_resources":[{"service_resource_id":"e4t8f010shd5ji94r0","service_resource_nickname":"Alan","service_resource_name_surname":"Alan Bilik","service_resource_function":"Appliance Technician","service_resource_image":"http:\/\/artemiudintsev.com\/getjson\/urlava\/3.jpg"},{"service_resource_id":"e4t8f010sh8fu78hy4","service_resource_nickname":"Steve","service_resource_name_surname":"Serge Zondre","service_resource_function":"Appliance Technician","service_resource_image":"http:\/\/artemiudintsev.com\/getjson\/urlava\/4.jpg"}]},{"area_id":"e4t8f013s5yyj6y777","area_name":"Tampa, FL","area_timezone":"-5","service_resources":[{"service_resource_id":"e4t8f010shd5jtt673","service_resource_nickname":"Sam","service_resource_name_surname":"Sam Gartiz","service_resource_function":"Appliance Technician","service_resource_image":"http:\/\/artemiudintsev.com\/getjson\/urlava\/5.jpg"}]}],"appointments":[{"appointment_id":"e4t8f212s5kogyyd86","appointment_type":"SC","appointment_job_number":"2341FKL","appointment_info":"Refrigerator, Oven","appointment_zip":"33067","appointment_notification":true,"appointment_service_resource_id":"e4t8f010shd5gyyh70","appointment_date_start":"March 14, 2020 11:00:00","appointment_date_end":"March 14, 2020 13:00:00"},{"appointment_id":"e4t8f212s5ko454d82","appointment_type":"FU","appointment_job_number":"2351CKL","appointment_info":"Dryer","appointment_zip":"33045","appointment_notification":true,"appointment_service_resource_id":"e4t8f010shd5gyyh70","appointment_date_start":"March 14, 2020 17:00:00","appointment_date_end":"March 14, 2020 20:00:00"},{"appointment_id":"e4t8f212s5ko4545rf","appointment_type":"RC","appointment_job_number":"1151LKL","appointment_info":"Dishwasher, Oven","appointment_zip":"77007","appointment_notification":false,"appointment_service_resource_id":"e4t8f010sh8fu78hy4","appointment_date_start":"March 14, 2020 8:00:00","appointment_date_end":"March 14, 2020 10:00:00"},{"appointment_id":"e4t8f212s5k46745rg","appointment_type":"SC","appointment_job_number":"1451LFL","appointment_info":"Dishwasher","appointment_zip":"77037","appointment_notification":false,"appointment_service_resource_id":"e4t8f010sh8fu78hy4","appointment_date_start":"March 15, 2020 11:00:00","appointment_date_end":"March 15, 2020 13:00:00"},{"appointment_id":"e4t8f212gg77674559","appointment_type":"SC","appointment_job_number":"1331LRR","appointment_info":"Dishwasher, Stove","appointment_zip":"77034","appointment_notification":true,"appointment_service_resource_id":"e4t8f010sh8fu78hy4","appointment_date_start":"March 15, 2020 10:00:00","appointment_date_end":"March 15, 2020 12:00:00"},{"appointment_id":"e4t8f212rf7767454r","appointment_type":"SC","appointment_job_number":"4531FFR","appointment_info":"Freezer","appointment_zip":"34685","appointment_notification":true,"appointment_service_resource_id":"e4t8f010shd5jtt673","appointment_date_start":"March 15, 2020 14:00:00","appointment_date_end":"March 15, 2020 17:00:00"}],"absences":[{"absences_id":"e4t8f221sh8f56yhrt","absences_service_resource_id":"e4t8f010sh8fuiyht9","absences_date_start":"March 12, 2020 18:00:00","absences_date_end":"March 14, 2020 20:00:00"},{"absences_id":"e4t8f221sh8576yhr5","absences_service_resource_id":"e4t8f010shd5ji94r0","absences_date_start":"March 13, 2020 12:00:00","absences_date_end":"March 13, 2020 14:00:00"}]}'

const datePeriod=document.querySelector('.controls__date-period')
const datePeriodList = document.querySelector('.controls__date-period-list')
const datePeriodItems = document.querySelectorAll('.date-period-list__item')
const datePeriodText = document.querySelector('.controls__date-period-text')

const daysAmount=document.querySelector('.controls__days-amount')
const daysAmountList = document.querySelector('.controls__days-amount-list')
const daysAmountItems = document.querySelectorAll('.days-amount-list__item')
const daysAmountText = document.querySelector('.controls__days-amount-text')

const boardItems = document.querySelector('.board__items')

const boardHourSelectList=document.querySelector('.controls__board-hour-select-list')
const boardHourSelectBtn = document.querySelector('.controls__board-hour-select-btn') 
const boardHourSelectListStart=document.getElementById('controls__board-hour-select-start')
const boardHourSelectListEnd=document.getElementById('controls__board-hour-select-end')
const boardHourSelectBtnApply = document.querySelector('.controls__board-hour-select-btn-apply') 
const boardHourSelectStart = document.getElementById('controls__board-hour-select-start')
const boardHourSelectEnd = document.getElementById('controls__board-hour-select-end')
const boardHourSelectItemsStart = document.querySelector('.controls__board-hour-select-select_start')
const boardHourSelectItemsEnd = document.querySelector('.controls__board-hour-select-select_end')
const boardHourSelectOptionItemsStart = document.querySelectorAll('.controls__board-hour-option_start')
const boardHourSelectOptionItemsEnd = document.querySelectorAll('.controls__board-hour-option_end')
const boardHourSelectTextStart = document.querySelector('.controls__board-hour-select-text_start')
const boardHourSelectTextEnd = document.querySelector('.controls__board-hour-select-text_end')

const calendar = document.querySelector('.calendar')
const calendarTableDays = document.querySelectorAll('.calendar-table__cell-day')
const calendarMonthYear = document.querySelector('.calendar__month')
const calendarBtnNext = document.querySelector('.calendar__controll_next')
const calendarBtnPrev = document.querySelector('.calendar__controll_prev')
const controlsDatePicker = document.querySelector('.controls__date-picker-item')

const controlsDatePickerText = document.querySelector('.controls__date-picker-date')
const controlsDateSelectPrev = document.querySelector('.controls__date-select-prev')
const controlsDateSelectNext = document.querySelector('.controls__date-select-next')

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
let datePicked =  new Date();

let dayPicked = datePicked.getDate()-1
let daysOffset = 0;
let daysInMonth;

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const weekShortDays = ['Sun','Mon','Tue',"Wed",'Thu','Fri','Sat']
const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthShortList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];


let daysAmountValue;
let timelineStep;

let boardHourStartTemp;
let boardHourEndTemp;

let boardHourStart;
let boardHourEnd;

const boardData = JSON.parse(json)
const appointmentsHash = new Map();


const crEl = (tagName, className, text, parent, attributes = {}, ) => {
  const el = document.createElement(tagName);
  attributes&& Object.assign(el, attributes);
  className && (el.className = className);
  if (text) { el.appendChild(document.createTextNode(text)); }

  return el;
};

const drawBoard =(boardData)=>{
  console.log(boardData)
  //***********************************Draw areas**************************************//
  const areas = boardData.areas;
  for(let i =0;i<areas.length;i++){
    const area = areas[i]
    const areaId = area.area_id;
    const areaName = area.area_name;
    const areaTimezone = area.area_timezone;
    const areaServiceResources = area.service_resources;
    const areaTime = new Date()
    areaTime.setFullYear(areaTime.getUTCFullYear())
    areaTime.setMonth(areaTime.getUTCMonth())
    areaTime.setDate(areaTime.getUTCDate())
    areaTime.setHours(areaTime.getUTCHours()+ +areaTimezone)
    const areaTimeText = `${weekDays[areaTime.getDay()]}, ${monthList[areaTime.getMonth()]} ${('0'+areaTime.getDate()).slice(-2)}, ${areaTime.getFullYear()} ${('0'+areaTime.getHours()).slice(-2)}:${('0'+areaTime.getMinutes()).slice(-2)}`

    const boardsItem = crEl("div","boards__item") // create boards item
    const boardsItemArea = crEl("div","boards__item-area") // create area 
    const boardsItemAreaLeft = crEl("div","boards__item-area_left") // create  area left side
    const boardsItemAreaRight = crEl("div","boards__item-area_right") // create area right side
    const boardsItemAreaBtnHide = crEl("div","boards__item-area-btn-hide") //create area btn hide

    //******************Create svg hide icon*******************//
    const iconHide = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    iconHide.setAttribute("viewBox", "0 0 14 12");
    iconHide.style.width = "14px";
    iconHide.style.height = "12px";
    const iconHidePath =  document.createElementNS("http://www.w3.org/2000/svg", 'path'); //Create a path in SVG's namespace
    iconHidePath.setAttribute("d","M7 12L1.04907e-06 -1.22392e-06L14 0L7 12Z"); //Set path's data
    iconHidePath.style.fill = "#000000";
    //********************************************************//

    const boardsItemAreaTown = crEl("p","boards__item-area-town",areaName) //create area town 
    const boardsItemAreaTime = crEl("p","boards__item-area-time",areaTimeText) //create area time

    const timegridRealtimeLine = crEl("div","timegrid__realtime-line") //create timegrid realtime line
    timegridRealtimeLine.setAttribute('data-realtime-line-timezone', areaTimezone);
    const boardsBoard = crEl("div","boards__board board") //create board
    const boardTable = crEl("div","board__table") // create board table

    for(let j=0; j<areaServiceResources.length; j++){
     const areaServiceResource = areaServiceResources[j];
     const serviceResourceId  = areaServiceResource.service_resource_id;
     const serviceResourceImg  = areaServiceResource.service_resource_image;
     const serviceResourceNickname  = areaServiceResource.service_resource_nickname;
     const serviceResourceNameSurname  = areaServiceResource.service_resource_name_surname;
     const serviceResourceFunction  = areaServiceResource.service_resource_function;

     const boardRow = crEl("div","board__row"); // create board row

     const boardRowAside = crEl("div","board__aside"); // create board aside
     const boardRowWorker = crEl("div","board__worker"); //create worker
     const boardRowWorkerImg = crEl("div","board__worker-img"); // create worker img wrapper
     const boardRowWorkerImgContent = crEl("img",null,null,null,{src:serviceResourceImg}); // create worker img
     const boardRowWorkerInfo= crEl("div","board__worker-info"); // create worker info
     const boardRowNickname = crEl("p","board__worker-nickname",serviceResourceNickname); // create worker nickname
     const boardRowNameSurname = crEl("p","board__worker-name-surname",serviceResourceNameSurname); // create worker name and surname
     const boardRowWorkerPost = crEl("p","board__worker-post",serviceResourceFunction); // create worker post
     const boardRowMain =crEl("div","board__main"); // create board main
     const boardRowTimegrid =crEl("div","board__timegrid timegrid"); // create timegrid
     const boardRowTimegridRow =crEl("div","timegrid__row"); // create timegrid row
     boardRowTimegridRow.setAttribute('data-service-resource', serviceResourceId);

     const scheduleItems = crEl("div","schedule-items");
     scheduleItems.setAttribute('data-service-resource', serviceResourceId);

     appointmentsHash.set(serviceResourceId,scheduleItems)

     boardRowWorkerInfo.appendChild(boardRowNickname)
     boardRowWorkerInfo.appendChild(boardRowNameSurname)
     boardRowWorkerInfo.appendChild(boardRowWorkerPost)
     boardRowWorkerImg.appendChild(boardRowWorkerImgContent)
     boardRowWorker.appendChild(boardRowWorkerImg)
     boardRowWorker.appendChild(boardRowWorkerInfo)
     boardRowAside.appendChild(boardRowWorker)
     boardRowTimegrid.appendChild(boardRowTimegridRow)
     boardRowTimegrid.appendChild(scheduleItems)
     boardRowMain.appendChild(boardRowTimegrid)
     boardRow.appendChild(boardRowAside)
     boardRow.appendChild(boardRowMain)
     boardTable.appendChild(boardRow)
    }
    iconHide.appendChild(iconHidePath);
    boardsItemArea.appendChild(boardsItemAreaLeft)
    boardsItemArea.appendChild(boardsItemAreaRight)
    boardsItemAreaBtnHide.appendChild(iconHide)
    boardsItemAreaLeft.appendChild(boardsItemAreaBtnHide)
    boardsItemAreaLeft.appendChild(boardsItemAreaTown)
    boardsItemAreaRight.appendChild(boardsItemAreaTime)
    boardTable.appendChild(timegridRealtimeLine)
    boardsBoard.appendChild(boardTable)
    boardsItem.appendChild(boardsItemArea)
    boardsItem.appendChild(boardsBoard)
    boardItems.appendChild(boardsItem)
  }
  
  //**********************************************************************************//
}

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
    if (daysAmount.classList.contains('open')&&daysAmountList.classList.contains('visible')) {
      daysAmount.classList.remove('open');
      daysAmountList.classList.remove('visible');
    }
    if(boardHourSelectList.classList.contains('open')&& boardHourSelectList.classList.contains('visible')){
      boardHourSelectList.classList.remove('open');
      boardHourSelectList.classList.remove('visible');
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


boardHourSelectBtn.addEventListener('click', function(e) {
  if(!boardHourSelectList.classList.contains('open')){
    boardHourSelectList.classList.add('open');
    boardHourSelectList.classList.add('visible');

  /* Conditions to close other control-item elements */
    if (calendar.classList.contains('visible') ) {
      calendar.classList.remove('visible');
    }
    if (datePeriod.classList.contains('open') && datePeriodList.classList.contains('visible')) {
      datePeriod.classList.remove('open');
      datePeriodList.classList.remove('visible');
    }
    if (daysAmount.classList.contains('open')&&daysAmountList.classList.contains('visible')) {
      daysAmount.classList.remove('open');
      daysAmountList.classList.remove('visible');
    }
    if(boardHourSelectItemsStart.classList.contains('open') && boardHourSelectItemsStart.classList.contains('visible')){
      boardHourSelectItemsStart.classList.remove('open');
      boardHourSelectItemsStart.classList.remove('visible');
    }
    if(boardHourSelectItemsEnd.classList.contains('open') && boardHourSelectItemsEnd.classList.contains('visible')){
      boardHourSelectItemsEnd.classList.remove('open');
      boardHourSelectItemsEnd.classList.remove('visible');
    }
  } else {
    boardHourSelectList.classList.remove('open');
    boardHourSelectList.classList.remove('visible');
  }
})
boardHourSelectTextStart.addEventListener('click', function(e) {
  if(!boardHourSelectItemsStart.classList.contains('open')){
    boardHourSelectItemsStart.classList.add('open');
    boardHourSelectItemsStart.classList.add('visible');
    boardHourSelectItemsEnd.classList.remove('open');
    boardHourSelectItemsEnd.classList.remove('visible');
  /* Conditions to close other control-item elements */
  } else {
    boardHourSelectItemsStart.classList.remove('open');
    boardHourSelectItemsStart.classList.remove('visible');
  }
})
boardHourSelectTextEnd.addEventListener('click', function(e) {
  if(!boardHourSelectItemsEnd.classList.contains('open')){
    boardHourSelectItemsEnd.classList.add('open');
    boardHourSelectItemsEnd.classList.add('visible');
    boardHourSelectItemsStart.classList.remove('open');
    boardHourSelectItemsStart.classList.remove('visible');
  /* Conditions to close other control-item elements */
  } else {
    boardHourSelectItemsEnd.classList.remove('open');
    boardHourSelectItemsEnd.classList.remove('visible');
  }
})
for (let i = 0; i < boardHourSelectOptionItemsStart.length; i++) {
  if(boardHourSelectOptionItemsStart[i].classList.contains('controls__board-hour-option_selected')){
    boardHourStartTemp = +boardHourSelectOptionItemsStart[i].getAttribute('data-board-hour-value')
    boardHourStart = boardHourStartTemp
    boardHourSelectTextStart.textContent = boardHourSelectOptionItemsStart[i].textContent
  }
  boardHourSelectOptionItemsStart[i].addEventListener('click', function(e) {
    boardHourSelectItemsStart.classList.remove('open');
    boardHourSelectItemsStart.classList.remove('visible');
    for (let j = 0; j < boardHourSelectOptionItemsStart.length; j++) {
      boardHourSelectOptionItemsStart[j].classList.remove('controls__board-hour-option_selected')
    }
    boardHourSelectOptionItemsStart[i].classList.add('controls__board-hour-option_selected')
    boardHourSelectTextStart.textContent = boardHourSelectOptionItemsStart[i].textContent
    boardHourStartTemp = +boardHourSelectOptionItemsStart[i].getAttribute('data-board-hour-value')
  })
}

for (let i = 0; i < boardHourSelectOptionItemsEnd.length; i++) {
  if(boardHourSelectOptionItemsEnd[i].classList.contains('controls__board-hour-option_selected')){
    boardHourEndTemp = +boardHourSelectOptionItemsEnd[i].getAttribute('data-board-hour-value')
    boardHourEnd = boardHourEndTemp
    boardHourSelectTextEnd.textContent = boardHourSelectOptionItemsEnd[i].textContent
  }
  boardHourSelectOptionItemsEnd[i].addEventListener('click', function(e) {
    boardHourSelectItemsEnd.classList.remove('open');
    boardHourSelectItemsEnd.classList.remove('visible');
    for (let j = 0; j < boardHourSelectOptionItemsEnd.length; j++) {
      boardHourSelectOptionItemsEnd[j].classList.remove('controls__board-hour-option_selected')
    }
    boardHourSelectOptionItemsEnd[i].classList.add('controls__board-hour-option_selected')
    boardHourSelectTextEnd.textContent = boardHourSelectOptionItemsEnd[i].textContent
    boardHourEndTemp = +boardHourSelectOptionItemsEnd[i].getAttribute('data-board-hour-value')
  })
}

boardHourSelectBtnApply.addEventListener('click', function(e) {
  if(boardHourSelectList.classList.contains('open')){
    boardHourSelectList.classList.remove('open');
    boardHourSelectList.classList.remove('visible');
    boardHourStart = boardHourStartTemp
    boardHourEnd = boardHourEndTemp
    renderBoard(daysAmountValue,timelineStep)
  }
})

daysAmount.addEventListener('click', function(e) {
  if (!daysAmount.classList.contains('open')) {
    daysAmount.classList.add('open');
    daysAmountList.classList.add('visible');

    /* Conditions to close other control-item elements */
  
    if (calendar.classList.contains('visible') ) {
      calendar.classList.remove('visible');
    }
    if (datePeriod.classList.contains('open') && datePeriodList.classList.contains('visible')) {
      datePeriod.classList.remove('open');
      datePeriodList.classList.remove('visible');
    }
    if(boardHourSelectList.classList.contains('open')&& boardHourSelectList.classList.contains('visible')){
      boardHourSelectList.classList.remove('open');
      boardHourSelectList.classList.remove('visible');
    }
  } else {
    daysAmount.classList.remove('open');
    daysAmountList.classList.remove('visible');
  }
})

for (let i = 0; i < daysAmountItems.length; i++) {
  daysAmountItems[i].classList.remove('selected')
  if(daysAmountItems[i].classList.contains('days-amount-list__item_1') && +daysAmountText.textContent.replace(/\D+/g,"")==1){
    daysAmountValue = 1
    timelineStep = 1
    daysAmountItems[i].classList.add('selected');
  } else if(daysAmountItems[i].classList.contains('days-amount-list__item_2') && +daysAmountText.textContent.replace(/\D+/g,"")==2){
    daysAmountValue = 2
    timelineStep = 2
    daysAmountItems[i].classList.add('selected');
  } else if(daysAmountItems[i].classList.contains('days-amount-list__item_3') && +daysAmountText.textContent.replace(/\D+/g,"")==3){
    daysAmountValue = 3
    timelineStep = 2
    daysAmountItems[i].classList.add('selected');
  }
  
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
//ROWS NUMBER HANDLERS

// Calendar 
controlsDatePickerText.textContent = `${monthShortList[datePicked.getMonth()]} ${datePicked.getDate()}, ${datePicked.getFullYear()}`;
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
      if (calendar.classList.contains('visible')) {;
        calendar.classList.remove('visible');
      }
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
  if (daysAmount.classList.contains('open') && daysAmountList.classList.contains('visible')) {
    daysAmount.classList.remove('open');
    daysAmountList.classList.remove('visible');
  }
  if(boardHourSelectList.classList.contains('open')&& boardHourSelectList.classList.contains('visible')){
    boardHourSelectList.classList.remove('open');
    boardHourSelectList.classList.remove('visible');
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



drawBoard(boardData)

const boardsTimeline = document.querySelector('.boards__timeline')
const boardsDates = document.querySelector('.boards__dates')
const boardTimegrid = document.querySelectorAll('.board__timegrid') 
const timegridRows = document.querySelectorAll('.timegrid__row')
const timegridRealtimeLines =document.querySelectorAll('.timegrid__realtime-line')
const boardsAreaBtnHide =document.querySelectorAll('.boards__item-area-btn-hide')
const scheduleItems = document.querySelectorAll('.schedule-items')

//*************************Board area hide buttons**********************************//
for(let i=0; i< boardsAreaBtnHide.length; i++){
  boardsAreaBtnHide[i].addEventListener('click',function(e){
    const target = e.target;
    const board = target.closest('.boards__item').querySelector('.boards__board')
    if(board.classList.contains('boards__board_hide')){
      board.classList.remove('boards__board_hide')
      boardsAreaBtnHide[i].classList.remove('boards__item-area-btn-hide_active')
    }else {
      board.classList.add('boards__board_hide')
      boardsAreaBtnHide[i].classList.add('boards__item-area-btn-hide_active')
    }
  })
}

function start_drag_and_drop_appointments() {
  const rows_of_cells = document.querySelectorAll('.timegrid__row');
  var rows_element;
  var fixer_y;
  var cells_element;
  var fixer_x;
  var previous_element;
  var previous_background;
  const appointment_for_drag = document.querySelectorAll('.appointment');
  for (let z = 0; z < appointment_for_drag.length; z++) {
      appointment_for_drag[z].addEventListener("drag", function (event) {
          if (previous_element !== undefined) {
              previous_element.style.background = previous_background;
          }
          var min_y = 10000;
          for (let w = 0; w < rows_of_cells.length; w++) {
              if ((Math.abs(rows_of_cells[w].getBoundingClientRect().top - event.y)) < min_y) {
                  min_y = Math.abs(rows_of_cells[w].getBoundingClientRect().top - event.y);
                  rows_element = rows_of_cells[w];
                  fixer_y = rows_element.getBoundingClientRect().top;
              }
          }
          const cells_of_rows = rows_element.querySelectorAll('.timegrid__cell');
          var min_x = 10000;
          for (let y = 0; y < cells_of_rows.length; y++) {
              if ((Math.abs(cells_of_rows[y].getBoundingClientRect().left - event.x)) < min_x) {
                  min_x = Math.abs(cells_of_rows[y].getBoundingClientRect().left - event.x);
                  cells_element = cells_of_rows[y];
                  fixer_x = cells_element.getBoundingClientRect().left;
              }
          }
          previous_element = cells_element;
          previous_background = cells_element.style.background;
          cells_element.style.background = '#ff0000';
          appointment_for_drag[z].style.left = fixer_x + 'px';
          appointment_for_drag[z].style.top = fixer_y + 'px';
          const cellsElementDate = +cells_element.getAttribute('data-cell-date')
          const appointappointmentForDragDuration = +appointment_for_drag[z].getAttribute('data-appointment-duration')
          const newAppointmentServiceResourceId = rows_element.getAttribute('data-service-resource')
          const newAppointmentDateStart = new Date(+cellsElementDate)
          const newAppointmentDateEnd = new Date(+cellsElementDate+appointappointmentForDragDuration)
          console.log(newAppointmentDateStart,newAppointmentDateEnd)
          renderAppointment(appointment_for_drag[z],newAppointmentDateStart,newAppointmentDateEnd,newAppointmentServiceResourceId)
      });
  }
}

const renderAppointment = (appointmentsItem,appointmentDateStart,appointmentDateEnd,appointmentServiceResourceId)=>{
  let boardCellWidth = 100/((boardHourEnd-boardHourStart)*daysAmountValue*2)
  let scheduleDay;
  for (let j=0; j<daysAmountValue; j++){
    const boardDateStart = new Date(datePicked.getFullYear(),datePicked.getMonth(),datePicked.getDate(),boardHourStart,0,0,0 )

    const boardDateEnd = new Date(datePicked.getFullYear(),datePicked.getMonth(),datePicked.getDate(),boardHourEnd,0,0,0)

    const boardDateStartTemp = new Date(boardDateStart.getTime())
    boardDateStartTemp.setDate(boardDateStart.getDate()+j)

    const boardDateEndTemp = new Date(boardDateEnd.getTime())
    boardDateEndTemp.setDate(boardDateEnd.getDate()+j)

    let appointmentWidth = (appointmentDateEnd.getHours()-appointmentDateStart.getHours())*2*boardCellWidth*daysAmountValue;
    if ((Date.parse(appointmentDateStart) >=Date.parse(boardDateStartTemp) && Date.parse(appointmentDateEnd) <=Date.parse(boardDateEndTemp)) || 
        (Date.parse(appointmentDateStart) >=Date.parse(boardDateStartTemp) && Date.parse(appointmentDateStart) <=Date.parse(boardDateEndTemp)) ||
        (Date.parse(appointmentDateEnd) >=Date.parse(boardDateStartTemp) && Date.parse(appointmentDateEnd) <=Date.parse(boardDateEndTemp))
    ){
      let appointmentOffset = (appointmentDateStart.getHours()-boardHourStart)*2*boardCellWidth*daysAmountValue;
      appointmentsItem.style.left = `${appointmentOffset+boardCellWidth*0.10}%`
      appointmentsItem.classList.remove("appointment_hide")
      appointmentsItem.style.width = `${appointmentWidth-0.20*boardCellWidth}%`
      scheduleDay = j+1
      j = daysAmountValue;
    }else{
      appointmentsItem.classList.add("appointment_hide")
    }
    const scheduleItems =  appointmentsHash.get(appointmentServiceResourceId)
    if (scheduleDay == 1){
      const scheduleItemsDay = scheduleItems.querySelector('.schedule-items__day-wrapper_1')
      scheduleItemsDay&& scheduleItemsDay.appendChild(appointmentsItem)
    }else if (scheduleDay == 2){
      const scheduleItemsDay = scheduleItems.querySelector('.schedule-items__day-wrapper_2')
      scheduleItemsDay&& scheduleItemsDay.appendChild(appointmentsItem)
    }else if (scheduleDay == 3){
      const scheduleItemsDay = scheduleItems.querySelector('.schedule-items__day-wrapper_3')
      scheduleItemsDay&& scheduleItemsDay.appendChild(appointmentsItem)
    }
  }
}

const renderAbsence = (absencesItem,absenceDateStart,absenceDateEnd,absenceServiceResourceId)=>{
  let boardCellWidth = 100/((boardHourEnd-boardHourStart)*daysAmountValue*2)
  let scheduleDay;

  for (let j=0; j<daysAmountValue; j++){
    const boardDateStart = new Date(datePicked.getFullYear(),datePicked.getMonth(),datePicked.getDate(),boardHourStart,0,0,0 )

    const boardDateEnd = new Date(datePicked.getFullYear(),datePicked.getMonth(),datePicked.getDate(),boardHourEnd,0,0,0)

    const boardDateStartTemp = new Date(boardDateStart.getTime())
    boardDateStartTemp.setDate(boardDateStart.getDate()+j)

    const boardDateEndTemp = new Date(boardDateEnd.getTime())
    boardDateEndTemp.setDate(boardDateEnd.getDate()+j);

    let absenceWidth = (absenceDateEnd-absenceDateStart)/1000/60/60*2*boardCellWidth*daysAmountValue;
    if ((Date.parse(absenceDateStart) >=Date.parse(boardDateStartTemp) && Date.parse(absenceDateEnd) <=Date.parse(boardDateEndTemp)) || 
        (Date.parse(absenceDateStart) >=Date.parse(boardDateStartTemp) && Date.parse(absenceDateStart) <=Date.parse(boardDateEndTemp)) ||
        (Date.parse(absenceDateEnd) >=Date.parse(boardDateStartTemp) && Date.parse(absenceDateEnd) <=Date.parse(boardDateEndTemp)) ||
        (Date.parse(absenceDateStart) <=Date.parse(boardDateStartTemp) && Date.parse(absenceDateEnd) >=Date.parse(boardDateEndTemp)) 

    ){
      let absenceOffset;
      if(absenceDateStart<boardDateStart){
        absenceOffset =((absenceDateStart-boardDateStart)/1000/60/60) *2*boardCellWidth*daysAmountValue
      } else{
        absenceOffset = (absenceDateStart.getHours()-boardHourStart)*2*boardCellWidth*daysAmountValue;
      }

      absencesItem.style.left = `${absenceOffset+boardCellWidth*0.10}%`
      absencesItem.classList.remove("appointment_hide")
      absencesItem.style.width = `${absenceWidth-0.20*boardCellWidth}%`
      scheduleDay = j+1
      j=daysAmountValue
      console.log(scheduleDay)
    }else{
      absencesItem.classList.add("appointment_hide")
    }
    const scheduleItems =  appointmentsHash.get(absenceServiceResourceId)
    if (scheduleDay == 1){
      const scheduleItemsDay = scheduleItems.querySelector('.schedule-items__day-wrapper_1')
      scheduleItemsDay&& scheduleItemsDay.appendChild(absencesItem)
    }else if (scheduleDay == 2){
      const scheduleItemsDay = scheduleItems.querySelector('.schedule-items__day-wrapper_2')
      scheduleItemsDay&& scheduleItemsDay.appendChild(absencesItem)
    }else if (scheduleDay == 3){
      const scheduleItemsDay = scheduleItems.querySelector('.schedule-items__day-wrapper_3')
      scheduleItemsDay&& scheduleItemsDay.appendChild(absencesItem)
    }
  }
}

const renderBoard = (daysAmountValue,timelineStep) =>{
  //init variables
  let boardCellWidth = 100/((boardHourEnd-boardHourStart)*daysAmountValue*2)
  let halfDayPast = 0;
  let timegridRealtimeLineCreated = false;
  let postfix;


  //*******************************Board timeline fill*******************************//  
  boardsTimeline.innerHTML = ""; //Board timeline clear

  for(let i=boardHourStart%2==0?1:0; i<24*daysAmountValue; i++){
    let timelineTime =  i - (halfDayPast>1?24:12)*(Math.floor(halfDayPast/2))
    let timelineTimeConverted = timelineTime-(halfDayPast%2==0?0:12) // 12h format

    if( i==1  && daysAmountValue==1){
      if(boardHourStart==0){
        boardsTimeline.innerHTML +=`
        <div class="timeline__item" style="width: ${boardCellWidth*timelineStep}%">
          <p class="timeline__item-time"></p>
        </div>
        <div class="timeline__item" style="width: ${ boardCellWidth*(timelineStep*2)}%">
          <p class="timeline__item-time">${timelineTimeConverted}am</p>
        </div>`
      } else {
        boardsTimeline.innerHTML+=`
        <div class="timeline__item" style="width: ${boardCellWidth*timelineStep}%">
          <p class="timeline__item-time"></p>
        </div>`
      }
      i=i+timelineStep-1
      continue
    }
   
    if((i%12===0 && i!==0 ) ){
      timelineTimeConverted = 12
      halfDayPast+=1;
    } else if((i+1)%12==0 && i!==1 && daysAmountValue!=1){
      halfDayPast+=1;
    }
    postfix = halfDayPast%2==0?"am":"pm"
    i=i+timelineStep-1
    
    if(timelineTime>boardHourStart && timelineTime==boardHourEnd ){
      boardsTimeline.innerHTML+=`
      <div class="timeline__item" style="width: ${boardCellWidth*timelineStep}%">
        <p class="timeline__item-time"></p>
      </div>`
    } else if(timelineTime>boardHourStart&&((timelineTime<=boardHourEnd && daysAmountValue>1) || (timelineTime<boardHourEnd && daysAmountValue<=1))){
      
      if (halfDayPast!==0 && halfDayPast!==1 && (timelineTime==+boardHourStart+1)){
        boardsTimeline.innerHTML +=`
        <div class="timeline__item timeline__item_end" style="width: ${ boardCellWidth*(timelineStep*2)}%">
          <p class="timeline__item-time">${timelineTimeConverted + postfix}</p>
        </div>`
      }else {
        boardsTimeline.innerHTML +=`
        <div class="timeline__item" style="width: ${ boardCellWidth*(timelineStep*2)}%">
          <p class="timeline__item-time">${timelineTimeConverted + postfix}</p>
        </div>`
      }
    }
  }
  //**********************************************************************************//


  //**************************Board dates(1day,2days,3days)**************************//
  boardsDates.innerHTML=""; //Clear Board date

  for(let i=0; i<daysAmountValue; i++){
    let datePickedTemp = new Date()

    datePickedTemp.setDate(datePicked.getDate()+i);
    datePickedTemp.setMonth(datePicked.getMonth());
    datePickedTemp.setFullYear(datePicked.getFullYear());
    let boardsDateText = `${weekShortDays[datePickedTemp.getDay()]}, ${monthShortList[datePickedTemp.getMonth()]} ${datePickedTemp.getDate()} ${datePickedTemp.getFullYear()}`;

    const boardsDatesItem = crEl("div","boards__dates-item", null,null,{width: `${100/(daysAmountValue+1)}%`}); 
    const boardsDatesItemTime = crEl("p","boards__dates-item-time",boardsDateText); 

    boardsDatesItem.appendChild(boardsDatesItemTime)
    boardsDates.appendChild(boardsDatesItem)

  //***************************Board livetime line************************************//
  if(!timegridRealtimeLineCreated){
    for(let j=0; j<timegridRealtimeLines.length;j++){
      const boardHourPickedStart = new Date(datePicked.getFullYear(),datePicked.getMonth(),datePicked.getDate()+i,boardHourStart,0,0,0)
      const boardHourPickedEnd = new Date(datePicked.getFullYear(),datePicked.getMonth(),datePicked.getDate()+i,boardHourEnd,0,0,0)
      
      const timezoneOffset = timegridRealtimeLines[j].getAttribute('data-realtime-line-timezone');
      let timeNow = new Date(Date.now())
      timeNow.setFullYear(timeNow.getUTCFullYear())
      timeNow.setMonth(timeNow.getUTCMonth())
      timeNow.setDate(timeNow.getUTCDate())
      timeNow.setHours(timeNow.getUTCHours()+ +timezoneOffset)


      if(Date.parse(timeNow)>=Date.parse(boardHourPickedStart) && Date.parse(timeNow)<=Date.parse(boardHourPickedEnd)  ){
        const offset =85 * (((timeNow.getHours()+(boardHourEnd-boardHourStart)*i-boardHourStart))*60*60+timeNow.getMinutes()*60+timeNow.getSeconds())  / ((boardHourEnd - boardHourStart)*60*60*daysAmountValue*100)* 100 

        timegridRealtimeLines[j].style.left=`${offset+15}%`
        timegridRealtimeLines[j].classList.add("timegrid__realtime-line_active")
  
        timegridRealtimeLineCreated = true;
      } else{
        timegridRealtimeLines[j].classList.remove("timegrid__realtime-line_active")
      }
    }
  }
  //**********************************************************************************//
  }
//**********************************************************************************//


//********************************Board fill cells*********************************//

  for(let i=0; i< timegridRows.length; i++){
    timegridRows[i].innerHTML = "";

    let datePickedTemp;
    datePickedTemp = new Date(datePicked.getFullYear(),datePicked.getMonth(),datePicked.getDate(),boardHourStart,0,0,0)
    for(let j=0; j< (boardHourEnd-boardHourStart)*daysAmountValue*2; j++){
      if (j!==0){datePickedTemp.setMinutes(datePickedTemp.getMinutes()+ 30)}
      if (j%((boardHourEnd-boardHourStart)*2)===0 && j!==0){
        datePickedTemp.setDate(datePickedTemp.getDate()+1)
        datePickedTemp.setHours(boardHourStart)
        datePickedTemp.setMinutes(0)

        timeGridCell = `<div data-cell-date="${datePickedTemp.getTime()}" class="timegrid__cell timegrid__cell_end" style="width: ${boardCellWidth}%"> </div>`
      } else{
        timeGridCell = `<div data-cell-date="${datePickedTemp.getTime()}" class="timegrid__cell" style="width: ${boardCellWidth}%"> </div>`
      }
      console.log(datePickedTemp)
      timegridRows[i].innerHTML += timeGridCell
    }
    scheduleItems[i].innerHTML=""
    for(let k=0; k<daysAmountValue; k++){
      const appointmentsWrapper = `<div class="schedule-items__day-wrapper schedule-items__day-wrapper_${k+1}" style="width: ${100/(daysAmountValue)}%;"></div>`; 
      scheduleItems[i].innerHTML += appointmentsWrapper
    }
  }
//**********************************************************************************//



//**********************************************************************************//

const appointments = boardData.appointments;
  for(let i = 0; i<appointments.length;i++){
    const appointment = appointments[i];
    const appointmentId  = appointment.appointment_id;
    const appointmentType  = appointment.appointment_type;
    const appointmentJobNumber  = appointment.appointment_job_number;
    const appointmentZip  = appointment.appointment_zip;
    const appointmentInfo = appointment.appointment_info
    const appointmentNotification = appointment.appointment_notification
    const appointmentServiceResourceId  = appointment.appointment_service_resource_id;
    const appointmentDateStart  = new Date(appointment.appointment_date_start);
    const appointmentDateEnd  = new Date(appointment.appointment_date_end);
    const appointmentDuration = appointmentDateEnd-appointmentDateStart

    // create appointment wrapper
    const appointmentsItem = crEl("div","appointment",null,null,{draggable:true}); // create appointment
    appointmentsItem.setAttribute('data-appointment-duration',appointmentDuration)
    if(appointmentType=="FU"){
      appointmentsItem.classList.add("appointment_follow")
    } else if(appointmentType=="SC"){
      appointmentsItem.classList.add("appointment_service")
    } else if(appointmentType=="RC"){
      appointmentsItem.classList.add("appointment_recall")
    }

    appointmentNotification?appointmentsItem.classList.add("appointment_notification"):appointmentsItem.classList.remove("appointment_notification")

    const appointmentsItemJobNumber = crEl("p","appointment__job-number",appointmentJobNumber)  //create appointment job number
    const appointmentsItemZip = crEl("p","appointment__zip",`zip: ${appointmentZip}`)  //create appointment zip
    const appointmentsItemInfo = crEl("span","appointment__info",` (${appointmentInfo})`)
    appointmentsItemJobNumber.appendChild(appointmentsItemInfo)
    appointmentsItem.appendChild(appointmentsItemJobNumber)
    appointmentsItem.appendChild(appointmentsItemZip)

    renderAppointment(appointmentsItem,appointmentDateStart,appointmentDateEnd,appointmentServiceResourceId)
  }

  const absences = boardData.absences;
  for(let i = 0; i<absences.length;i++){
    const absence = absences[i];
    const absenceId  = absence.absences_id;
    const absenceServiceResourceId  = absence.absences_service_resource_id;
    const absenceDateStart  = new Date(absence.absences_date_start);
    const absenceDateEnd  = new Date(absence.absences_date_end);

    const absencesItem = crEl("div","absence"); // create absence
    renderAbsence(absencesItem,absenceDateStart,absenceDateEnd,absenceServiceResourceId)
  }
  start_drag_and_drop_appointments();
}







//init

renderBoard(daysAmountValue,timelineStep)






const moveAppointment = ()=>{
  console.log('fuck')
}

//for(let i=0; i<appointments.length;i++){
 // appointments[i].addEventListener('click',moveAppointment)
//}














/* Clicking outside of popup to close and deselect */
window.addEventListener('click', function(event) {
  let target = event.target;
  let clickedDatePeriod= target.closest('.controls__date-period');
  let clickedCalendar = target.closest('.calendar');
  let clickedControlsDatePicker = target.closest('.controls__date-picker-item');
  let clickedDaysAmount= target.closest('.controls__days-amount');
  let clickedBoardHourSelectList = target.closest('.controls__board-hour-select-list');
  let clickedBoardHourSelectBtn  = target.closest('.controls__board-hour-select-btn');
  if (!clickedDaysAmount && daysAmount.classList.contains('open') && daysAmountList.classList.contains('visible')) {
    daysAmount.classList.remove('open');
    daysAmountList.classList.remove('visible');
  }
  if(!clickedBoardHourSelectList && !clickedBoardHourSelectBtn && boardHourSelectList.classList.contains('open') && boardHourSelectList.classList.contains('visible')){
    boardHourSelectList.classList.remove('open');
    boardHourSelectList.classList.remove('visible');
  }
  if (!clickedDatePeriod && datePeriod.classList.contains('open') && datePeriodList.classList.contains('visible')) {
      datePeriod.classList.remove('open');
      datePeriodList.classList.remove('visible');
  }
 
  if (!clickedDatePeriod  && !clickedControlsDatePicker  && !clickedCalendar && calendar.classList.contains('visible')) {;
    calendar.classList.remove('visible');
  }
});
