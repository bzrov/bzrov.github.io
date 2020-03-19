let json;

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

const popupWindow =  document.querySelector('.popup-window')
const popupOverlay = document.querySelector('.popup-window__overlay')
const drawDragAndDropConfirmationPopup = document.querySelector('.drag-and-drop-confirmation-popup')
const drawDragAndDropConfirmationBtnConfirm = document.querySelector('.drag-and-drop-confirmation-popup__confirm-btn')
const drawDragAndDropConfirmationBtnDeny = document.querySelector('.drag-and-drop-confirmation-popup__deny-btn')


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

const appointmentsHash = new Map();


const crEl = (tagName, className, text, parent, attributes = {}, ) => {
  const el = document.createElement(tagName);
  attributes&& Object.assign(el, attributes);
  className && (el.className = className);
  if (text) { el.appendChild(document.createTextNode(text)); }

  return el;
};

const getJson = (datePicked,daysAmountValue) =>{
  //Server request//
  //getting new json//
  //тк нет запроса за новый json буду брать исходную json строку//
  let newJson = '{"areas":[{"area_id":"e4t8f013shdyj6yh90","area_name":"Miami, FL","area_timezone":"-4","service_resources":[{"service_resource_id":"e4t8f010shd5gyyh70","service_resource_nickname":"Andre","service_resource_name_surname":"Andrey Dinin","service_resource_function":"Appliance Technician","service_resource_image":"http:\/\/artemiudintsev.com\/getjson\/urlava\/1.jpg"},{"service_resource_id":"e4t8f010sh8fuiyht9","service_resource_nickname":"Mark","service_resource_name_surname":"Marco Rodrigas","service_resource_function":"Appliance Technician","service_resource_image":"http:\/\/artemiudintsev.com\/getjson\/urlava\/2.jpg"}]},{"area_id":"e4t8f013s57yj6yr60","area_name":"Houston, TX","area_timezone":"-5","service_resources":[{"service_resource_id":"e4t8f010shd5ji94r0","service_resource_nickname":"Alan","service_resource_name_surname":"Alan Bilik","service_resource_function":"Appliance Technician","service_resource_image":"http:\/\/artemiudintsev.com\/getjson\/urlava\/3.jpg"},{"service_resource_id":"e4t8f010sh8fu78hy4","service_resource_nickname":"Steve","service_resource_name_surname":"Serge Zondre","service_resource_function":"Appliance Technician","service_resource_image":"http:\/\/artemiudintsev.com\/getjson\/urlava\/4.jpg"}]},{"area_id":"e4t8f013s5yyj6y777","area_name":"Tampa, FL","area_timezone":"-5","service_resources":[{"service_resource_id":"e4t8f010shd5jtt673","service_resource_nickname":"Sam","service_resource_name_surname":"Sam Gartiz","service_resource_function":"Appliance Technician","service_resource_image":"http:\/\/artemiudintsev.com\/getjson\/urlava\/5.jpg"}]}],"appointments":[{"appointment_id":"e4t8f212s5kogyyd86","appointment_type":"SC","appointment_job_number":"2341FKL","appointment_info":"Refrigerator, Oven","appointment_zip":"33067","appointment_notification":true,"appointment_service_resource_id":"e4t8f010shd5gyyh70","appointment_date_start":"March 14, 2020 11:00:00","appointment_date_end":"March 14, 2020 13:00:00"},{"appointment_id":"e4t8f212s5ko454d82","appointment_type":"FU","appointment_job_number":"2351CKL","appointment_info":"Dryer","appointment_zip":"33045","appointment_notification":true,"appointment_service_resource_id":"e4t8f010shd5gyyh70","appointment_date_start":"March 14, 2020 17:00:00","appointment_date_end":"March 14, 2020 20:00:00"},{"appointment_id":"e4t8f212s5ko4545rf","appointment_type":"RC","appointment_job_number":"1151LKL","appointment_info":"Dishwasher, Oven","appointment_zip":"77007","appointment_notification":false,"appointment_service_resource_id":"e4t8f010sh8fu78hy4","appointment_date_start":"March 14, 2020 8:00:00","appointment_date_end":"March 14, 2020 10:00:00"},{"appointment_id":"e4t8f212s5k46745rg","appointment_type":"SC","appointment_job_number":"1451LFL","appointment_info":"Dishwasher","appointment_zip":"77037","appointment_notification":false,"appointment_service_resource_id":"e4t8f010sh8fu78hy4","appointment_date_start":"March 15, 2020 11:00:00","appointment_date_end":"March 15, 2020 13:00:00"},{"appointment_id":"e4t8f212gg77674559","appointment_type":"SC","appointment_job_number":"1331LRR","appointment_info":"Dishwasher, Stove","appointment_zip":"77034","appointment_notification":true,"appointment_service_resource_id":"e4t8f010sh8fu78hy4","appointment_date_start":"March 15, 2020 10:00:00","appointment_date_end":"March 15, 2020 12:00:00"},{"appointment_id":"e4t8f212rf7767454r","appointment_type":"SC","appointment_job_number":"4531FFR","appointment_info":"Freezer","appointment_zip":"34685","appointment_notification":true,"appointment_service_resource_id":"e4t8f010shd5jtt673","appointment_date_start":"March 15, 2020 14:00:00","appointment_date_end":"March 15, 2020 17:00:00"}],"absences":[{"absences_id":"e4t8f221sh8f56yhrt","absences_service_resource_id":"e4t8f010sh8fuiyht9","absences_date_start":"March 12, 2020 18:00:00","absences_date_end":"March 14, 2020 20:00:00"},{"absences_id":"e4t8f221sh8576yhr5","absences_service_resource_id":"e4t8f010shd5ji94r0","absences_date_start":"March 13, 2020 12:00:00","absences_date_end":"March 13, 2020 14:00:00"}]}'
  json = newJson
  return json
}

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
    getJson(datePicked,daysAmountValue)
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
    getJson(datePicked,daysAmountValue)
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
      getJson(datePicked,daysAmountValue)
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
    getJson(datePicked,daysAmountValue)
   renderBoard(daysAmountValue,timelineStep)
})
controlsDateSelectNext.addEventListener('click', function() {
  datePicked.setDate(datePicked.getDate()+1);
  controlsDatePickerText.textContent = `${monthShortList[datePicked.getMonth()]} ${datePicked.getDate()}, ${datePicked.getFullYear()}`;
    getJson(datePicked,daysAmountValue)
   renderBoard(daysAmountValue,timelineStep)
})


getJson(datePicked,daysAmountValue)
const boardData = JSON.parse(json)
drawBoard(boardData)

const boardsTimeline = document.querySelector('.boards__timeline')
const boardsDates = document.querySelector('.boards__dates')
const boardTimegrids = document.querySelectorAll('.board__timegrid') 
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





var appontment_for_drag;
var is_drag = 0;
let appointmentDateStartTemp;
let appointmentDateEndTemp;
let appointmentServiceResourceIdTemp;

function start_dragable_appointments() {
  const appointments_for_drag = document.querySelectorAll('.appointment');
  for (let h = 0; h < appointments_for_drag.length; h++) {
      appointments_for_drag[h].addEventListener("mousedown", function (event) {
          appontment_for_drag = appointments_for_drag[h];
          appointmentDateStartTemp= new Date(+appontment_for_drag.getAttribute('data-appointment-date-start'))
          appointmentDateEndTemp = new Date(+appontment_for_drag.getAttribute('data-appointment-date-end'))
          appointmentServiceResourceIdTemp = appontment_for_drag.getAttribute('data-appointment-service-resource-id')

          is_drag = 1;
      });
      
    } 
}
var glob_mouse_X;
var glob_mouse_Y;
document.addEventListener("mousemove", function (event) {
  glob_mouse_X = event.x;
  glob_mouse_Y = event.y;
  if (is_drag == 1) {
      start_drag_and_drop_appointments(glob_mouse_X, glob_mouse_Y)
  }
});
popupOverlay.addEventListener('click',function(){
  if (popupWindow.classList.contains('open')) {
    popupWindow.classList.remove('open');
    popupWindow.classList.remove('visible');
  } 
  renderAppointment(appontment_for_drag,appointmentDateStartTemp,appointmentDateEndTemp,appointmentServiceResourceIdTemp)
})
drawDragAndDropConfirmationBtnConfirm.addEventListener('click',function(){
  if (popupWindow.classList.contains('open')) {
    popupWindow.classList.remove('open');
    popupWindow.classList.remove('visible');
  }

})
drawDragAndDropConfirmationBtnDeny.addEventListener('click',function(){
  if (popupWindow.classList.contains('open')) {
    popupWindow.classList.remove('open');
    popupWindow.classList.remove('visible');
  }
  renderAppointment(appontment_for_drag,appointmentDateStartTemp,appointmentDateEndTemp,appointmentServiceResourceIdTemp)
})
document.addEventListener("mouseup", function (event) {
  if(is_drag===1){
    if(!popupWindow.classList.contains('open')){
      popupWindow.classList.add('open');
      popupWindow.classList.add('visible');
    }else{
      popupWindow.classList.remove('open');
      popupWindow.classList.remove('visible');
    }
  }
  is_drag = 0;
  
});
function start_drag_and_drop_appointments() {  
  const rows_of_cells = document.querySelectorAll('.timegrid__row');
  var rows_element;
  var cells_element;
  var min_y = 10000;
  if (glob_mouse_X != 0 && glob_mouse_Y != 0) {
      for (let w = 0; w < rows_of_cells.length; w++) {
          if ((Math.abs(rows_of_cells[w].getBoundingClientRect().top - glob_mouse_Y)) < min_y) {
              min_y = Math.abs(rows_of_cells[w].getBoundingClientRect().top - glob_mouse_Y);
              rows_element = rows_of_cells[w];                  }
      }
      if(rows_element!==undefined){
        const cells_of_rows = rows_element.querySelectorAll('.timegrid__cell');
        var min_x = 10000;
        for (let y = 0; y < cells_of_rows.length; y++) {
          if ((Math.abs(cells_of_rows[y].getBoundingClientRect().left - glob_mouse_X)) < min_x) {
              min_x = Math.abs(cells_of_rows[y].getBoundingClientRect().left - glob_mouse_X);
              cells_element = cells_of_rows[y];                  }
        } 
      }        
    }

  if(cells_element!==undefined && rows_element!==undefined && appontment_for_drag!==undefined){
    const cellsElementDate = +cells_element.getAttribute('data-cell-date')
    const appointappointmentForDragDuration = +appontment_for_drag.getAttribute('data-appointment-duration')
    const newAppointmentServiceResourceId = rows_element.getAttribute('data-service-resource')
    const newAppointmentDateStart = new Date(+cellsElementDate)
    const newAppointmentDateEnd = new Date(+cellsElementDate+appointappointmentForDragDuration)
    renderAppointment(appontment_for_drag,newAppointmentDateStart,newAppointmentDateEnd,newAppointmentServiceResourceId)  
  }
}


const renderAppointment = (appointmentsItem,appointmentDateStart,appointmentDateEnd,appointmentServiceResourceId)=>{
  let boardCellWidth = 100/((boardHourEnd-boardHourStart)*daysAmountValue*2)
  let scheduleDay;
  appointmentsItem.setAttribute('data-appointment-date-start',appointmentDateStart.getTime())
  appointmentsItem.setAttribute('data-appointment-date-end',appointmentDateEnd.getTime())
  appointmentsItem.setAttribute('data-appointment-service-resource-id',appointmentServiceResourceId)
  const scheduleItems =  appointmentsHash.get(appointmentServiceResourceId)
    const appointments =document.querySelectorAll('.appointment');
    const scheduleItemsAppointemnts = scheduleItems.querySelectorAll('.appointment')
    
   /* for(let y =0;y<boardTimegrids.length;y++){
      const boardTimegrid = boardTimegrids[y]
      const scheduleItemsAppointemnts = boardTimegrid.querySelectorAll('.appointment');
      const boardTimegridRow = boardTimegrid.querySelector('.timegrid__row');
      for(let x=0; x<scheduleItemsAppointemnts.length;x++){
        

          console.log(scheduleItemsAppointemnts[x])

      }
    }*/

    for(let z =0;z<scheduleItemsAppointemnts.length;z++){
      if(scheduleItemsAppointemnts[z].getAttribute('data-appointment-id') ===appointmentsItem.getAttribute('data-appointment-id')){break}

      const appointemntDuration =  +scheduleItemsAppointemnts[z].getAttribute('data-appointment-duration')
      const appointemntDateStartTemp =  new Date(+scheduleItemsAppointemnts[z].getAttribute('data-appointment-date-start'))
      const appointemntDateEndTemp =  new Date(+scheduleItemsAppointemnts[z].getAttribute('data-appointment-date-start')+appointemntDuration)
      if(Date.parse(appointemntDateStartTemp) <=Date.parse(appointmentDateStart) && Date.parse(appointemntDateEndTemp) >=Date.parse(appointmentDateEnd) ||
        Date.parse(appointemntDateStartTemp) <Date.parse(appointmentDateStart) && Date.parse(appointemntDateEndTemp) >Date.parse(appointmentDateStart) ||
        Date.parse(appointemntDateStartTemp) <Date.parse(appointmentDateEnd) && Date.parse(appointemntDateEndTemp) >Date.parse(appointmentDateEnd) ||
        Date.parse(appointmentDateStart) <=Date.parse(appointemntDateStartTemp) && Date.parse(appointmentDateEnd) >=Date.parse(appointemntDateEndTemp) ||
        Date.parse(appointmentDateStart) <Date.parse(appointemntDateStartTemp) && Date.parse(appointmentDateEnd) >Date.parse(appointemntDateStartTemp) ||
        Date.parse(appointmentDateStart) <Date.parse(appointemntDateEndTemp) && Date.parse(appointmentDateEnd) >Date.parse(appointemntDateEndTemp)
      ){
        scheduleItems.closest('.timegrid').querySelector('.timegrid__row').classList.add('timegrid__row_increased')
       
        scheduleItemsAppointemnts[z].style.bottom='initial'
        scheduleItemsAppointemnts[z].style.top='15%'
        appointmentsItem.style.top= 'initial'
        appointmentsItem.style.bottom= '15%'

      } else{
          scheduleItems.closest('.timegrid').querySelector('.timegrid__row').classList.remove('timegrid__row_increased')
       // scheduleItemsAppointemnts[z].style.bottom='initial'
      //  scheduleItemsAppointemnts[z].style.top='8px'

        appointmentsItem.style.top= '15%'
        appointmentsItem.style.bottom= 'initial'
      }
    }
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
      let appointmentOffset = (appointmentDateStart.getHours()+appointmentDateStart.getMinutes()/60-boardHourStart)*2*boardCellWidth*daysAmountValue;
      appointmentsItem.style.left = `${appointmentOffset+boardCellWidth*0.10}%`
      appointmentsItem.classList.remove("appointment_hide")
      appointmentsItem.style.width = `${appointmentWidth-0.20*boardCellWidth}%`
      scheduleDay = j+1
      j = daysAmountValue;
    }else{
      appointmentsItem.classList.add("appointment_hide")
    }
    
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
      console.log(boardDateStartTemp)
      if(absenceDateStart<boardDateStartTemp){
        absenceOffset =((absenceDateStart-boardDateStartTemp)/1000/60/60) *2*boardCellWidth*daysAmountValue
      } else{
        absenceOffset = (absenceDateStart.getHours()-boardHourStart)*2*boardCellWidth*daysAmountValue;
      }

      absencesItem.style.left = `${absenceOffset+boardCellWidth*0.10}%`
      absencesItem.classList.remove("appointment_hide")
      absencesItem.style.width = `${absenceWidth-0.20*boardCellWidth}%`
      scheduleDay = j+1
      //j=daysAmountValue
     // console.log(scheduleDay)
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
    absencesItem = crEl("div","absence");
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
    const appointmentsItem = crEl("div","appointment"); // create appointment
    appointmentsItem.setAttribute('data-appointment-duration',appointmentDuration)
    appointmentsItem.setAttribute('data-appointment-id',appointmentId)
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

    const appointmentsItemHoverBlock = crEl("div","appointment__hover-block");
    const appointmentsItemHoverJobNumber = crEl("p","appointment__job-number",appointmentJobNumber)
    const appointmentsItemHoverZip = crEl("p","appointment__zip",`zip: ${appointmentZip}`)
    const appointmentsItemHoverInfo = crEl("span","appointment__info",` (${appointmentInfo})`)
    appointmentsItemHoverJobNumber.appendChild(appointmentsItemHoverInfo)

    appointmentsItemHoverBlock.appendChild(appointmentsItemHoverJobNumber)
    appointmentsItemHoverBlock.appendChild(appointmentsItemHoverZip)
    

    appointmentsItem.appendChild(appointmentsItemJobNumber)
    appointmentsItem.appendChild(appointmentsItemZip)
    appointmentsItem.appendChild(appointmentsItemHoverBlock)

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

    //******************Create svg hide icon*******************//
    const iconAbsence = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    iconAbsence.setAttribute("viewBox", "0 0 14 12");
    iconAbsence.style.width = "14px";
    iconAbsence.style.height = "12px";
    let path
    path =  document.createElementNS("http://www.w3.org/2000/svg", 'path'); //Create a path in SVG's namespace
    path.setAttribute("d","M3.53799 8.63904C3.58059 8.65304 3.59299 8.65404 3.63079 8.67864C3.68759 8.71564 3.73039 8.77284 3.74999 8.83764C3.76419 8.88464 3.76399 8.89444 3.76139 8.95124C3.72559 9.83084 3.84239 10.724 4.05459 11.575C4.25659 12.3842 4.56479 13.1646 5.02599 13.863C5.17299 14.0854 5.33139 14.2942 5.51739 14.503C5.53259 14.52 5.54779 14.537 5.56319 14.5538C6.02079 15.053 6.56859 15.4446 7.13159 15.7124C8.03099 16.1402 9.01119 16.2952 9.99859 16.2952L10.049 16.2996C10.0654 16.304 10.082 16.307 10.098 16.3128C10.225 16.359 10.3082 16.502 10.2846 16.636C10.264 16.7528 10.166 16.8508 10.049 16.8714C10.0324 16.8744 10.0154 16.8746 9.99859 16.8758C9.99819 16.876 9.97819 16.8758 9.97779 16.8758C9.36779 16.8748 8.76999 16.8186 8.16559 16.679C7.52739 16.5316 6.91919 16.2948 6.36519 15.9582C6.07019 15.779 5.79259 15.573 5.53519 15.3422C4.89239 14.7656 4.38699 14.0346 4.02759 13.2566C3.99899 13.195 3.97139 13.133 3.94459 13.0708L3.93959 13.0592C3.61659 12.3052 3.40799 11.5048 3.28919 10.6832C3.21039 10.138 3.16619 9.60044 3.17819 9.02404C3.17899 8.98544 3.18019 8.94664 3.18219 8.90804V8.90584C3.18859 8.86164 3.18739 8.84944 3.20519 8.80764C3.23819 8.73044 3.30659 8.66864 3.38779 8.64404C3.43119 8.63084 3.44319 8.63344 3.48799 8.63184C3.50459 8.63424 3.52139 8.63664 3.53799 8.63904Z"); //Set path's data
    iconAbsence.appendChild(path)
    path =  document.createElementNS("http://www.w3.org/2000/svg", 'path'); //Create a path in SVG's namespace
    path.setAttribute("d","M16.5598 8.63364C16.6036 8.64284 16.616 8.64244 16.6564 8.66284C16.7168 8.69344 16.7656 8.74544 16.7922 8.80764C16.8116 8.85344 16.8132 8.86304 16.8158 8.92124C16.8366 9.40864 16.8036 9.89164 16.75 10.3604C16.7162 10.6544 16.6712 10.9452 16.6132 11.2364C16.4676 11.9674 16.2528 12.6636 15.9316 13.3378C15.635 13.9608 15.2562 14.532 14.791 15.0224C14.7604 15.0544 14.7296 15.086 14.6984 15.1176C14.6984 15.1176 14.6696 15.1466 14.6484 15.1674C14.298 15.5116 13.8894 15.8148 13.4876 16.0432C12.8944 16.38 12.2354 16.6052 11.5866 16.731C11.0584 16.8334 10.517 16.875 10.009 16.8758C10.009 16.8758 9.9748 16.8762 9.9482 16.8714C9.815 16.848 9.7084 16.7216 9.7084 16.5856C9.7084 16.4504 9.8142 16.3232 9.9482 16.2996C9.9876 16.2926 10.0276 16.2952 10.0676 16.295C11.0082 16.288 11.9566 16.131 12.8076 15.7394C13.2734 15.5252 13.7024 15.2434 14.0744 14.9098C14.6138 14.4262 15.0596 13.8046 15.3868 13.1308C15.3972 13.1094 15.4074 13.0878 15.4176 13.0664L15.4226 13.0558C15.8274 12.1922 16.0626 11.267 16.174 10.2858C16.2248 9.83844 16.2578 9.38764 16.2354 8.93844L16.2352 8.93764C16.2368 8.89304 16.2342 8.88084 16.2474 8.83764C16.2718 8.75664 16.3332 8.68804 16.4112 8.65484C16.4528 8.63704 16.465 8.63824 16.5092 8.63184C16.5262 8.63244 16.543 8.63304 16.5598 8.63364Z"); //Set path's data
    iconAbsence.appendChild(path)
    path =  document.createElementNS("http://www.w3.org/2000/svg", 'path'); //Create a path in SVG's namespace
    path.setAttribute("d","M10.0412 7.32996C11.3558 7.33236 12.675 7.39976 13.9772 7.59656C14.0348 7.60536 14.0924 7.61436 14.1498 7.62356C14.7418 7.71916 15.3332 7.83536 15.8966 8.05136C16.0932 8.12676 16.2862 8.21416 16.4578 8.33756C16.5004 8.36836 16.5418 8.40136 16.5802 8.43736L16.5828 8.43976C16.5966 8.45296 16.6102 8.46636 16.6232 8.48016C16.6232 8.48016 16.6392 8.49716 16.65 8.50976C16.686 8.55136 16.718 8.59656 16.744 8.64516C16.744 8.64516 16.7564 8.66836 16.766 8.69016L16.7678 8.69436L16.7712 8.70256C16.784 8.73416 16.7948 8.76676 16.802 8.79996C16.802 8.79996 16.8106 8.84096 16.8134 8.87376C16.8184 8.93056 16.8146 8.98816 16.802 9.04336C16.802 9.04336 16.7886 9.09976 16.7694 9.14496C16.7694 9.14496 16.7592 9.16896 16.7484 9.18996C16.7484 9.18996 16.7254 9.23296 16.7018 9.26696C16.6812 9.29676 16.6582 9.32516 16.6338 9.35196C16.6338 9.35196 16.6118 9.37576 16.5894 9.39736C16.5894 9.39736 16.553 9.43176 16.517 9.46076C16.517 9.46076 16.4654 9.50156 16.423 9.53016C16.1662 9.70336 15.8664 9.81236 15.5716 9.90356C15.1686 10.0284 14.7556 10.1158 14.3332 10.1892C12.7668 10.461 11.164 10.531 9.576 10.5108C8.8488 10.5016 8.1224 10.4692 7.3978 10.407C6.5528 10.3342 5.7166 10.23 4.895 10.0316C4.5532 9.94896 4.214 9.85156 3.8964 9.70676C3.7422 9.63656 3.5916 9.55456 3.4626 9.44616C3.4626 9.44616 3.4426 9.42936 3.4286 9.41656C3.3588 9.35336 3.2974 9.28056 3.2532 9.19816L3.24 9.17196C3.231 9.15276 3.22 9.12576 3.22 9.12576C3.1766 9.00916 3.1696 8.88036 3.206 8.75896C3.207 8.75596 3.2078 8.75276 3.2088 8.74976C3.2156 8.72836 3.2244 8.70676 3.2244 8.70676C3.2286 8.69656 3.2342 8.68356 3.2342 8.68356C3.241 8.66896 3.251 8.64956 3.251 8.64956C3.2816 8.59236 3.3198 8.53916 3.3636 8.49156C3.3636 8.49156 3.4066 8.44596 3.4432 8.41376C3.6166 8.26136 3.8304 8.15936 4.0428 8.07416C4.5696 7.86276 5.1308 7.74596 5.6942 7.64916C6.7504 7.46756 7.8214 7.38516 8.8742 7.34916C9.2636 7.33576 9.6524 7.32976 10.0412 7.32996ZM3.7644 8.92096C3.761 8.92776 3.7744 8.93956 3.785 8.95196C3.8876 9.07296 4.0418 9.13696 4.1736 9.19476C4.3114 9.25496 4.4538 9.30456 4.5974 9.34896C4.5974 9.34896 4.6398 9.36196 4.6802 9.37376C5.6272 9.65156 6.6258 9.76216 7.5746 9.83896C9.1142 9.96356 10.6834 9.96696 12.2206 9.85456C13.0816 9.79156 13.9464 9.69476 14.7922 9.50736C14.9792 9.46576 15.1634 9.41956 15.3488 9.36436L15.3592 9.36136C15.6092 9.28576 15.8606 9.20436 16.0844 9.05796C16.1408 9.02096 16.2028 8.98456 16.2332 8.92216C16.2332 8.92216 16.2168 8.89516 16.199 8.87676C16.1092 8.78336 15.9866 8.72296 15.8672 8.66836C15.458 8.48036 15.0118 8.37796 14.5694 8.28916C13.6442 8.10336 12.7042 8.01256 11.768 7.95956C10.4742 7.88636 9.1708 7.89236 7.8884 7.98096C6.9588 8.04516 6.0328 8.14416 5.117 8.35616C4.753 8.44036 4.392 8.53476 4.0558 8.70396C3.9544 8.75496 3.8492 8.80916 3.779 8.89876C3.7734 8.90576 3.7684 8.91316 3.7644 8.92096ZM3.762 8.91676C3.762 8.91676 3.7618 8.91656 3.762 8.91676V8.91676Z") //Set path's data
    iconAbsence.appendChild(path)
    
    path =  document.createElementNS("http://www.w3.org/2000/svg", 'path'); //Create a path in SVG's namespace
    path.setAttribute("d","M8.66461 1C8.68121 1.003 8.69821 1.0046 8.71441 1.009C8.76361 1.0222 8.80881 1.0486 8.84441 1.0844C8.87981 1.1198 8.90421 1.1624 8.93141 1.2032C9.19201 1.5946 9.39241 2.04 9.35981 2.508C9.33241 2.9012 9.11801 3.2626 8.91221 3.5582C8.70781 3.8518 8.47581 4.1524 8.49641 4.5288C8.51441 4.8598 8.69261 5.165 8.87721 5.4308L8.90241 5.4748C8.90801 5.4906 8.91521 5.506 8.91941 5.5224C8.94981 5.637 8.90201 5.7672 8.80441 5.835C8.69341 5.912 8.52861 5.8976 8.43281 5.801C8.37661 5.7444 8.33841 5.6724 8.29481 5.6034C8.19981 5.4528 8.11501 5.2956 8.04941 5.131C8.04941 5.131 8.03241 5.0886 8.01821 5.0484C7.91901 4.7682 7.88401 4.4642 7.94721 4.1712C7.98041 4.017 8.03821 3.8694 8.11221 3.7298C8.11221 3.7298 8.12861 3.6988 8.14321 3.6728C8.28661 3.4178 8.47781 3.194 8.62481 2.9342C8.73881 2.733 8.81041 2.5064 8.77001 2.2538C8.72461 1.9688 8.57461 1.7072 8.40901 1.4672L8.40061 1.4554L8.37541 1.4116C8.36021 1.3694 8.35341 1.3592 8.34961 1.314C8.33941 1.196 8.40881 1.076 8.51661 1.026C8.55761 1.0068 8.56981 1.0076 8.61401 1C8.63081 1 8.64781 1 8.66461 1Z"); //Set path's data
    iconAbsence.appendChild(path)
    path =  document.createElementNS("http://www.w3.org/2000/svg", 'path'); //Create a path in SVG's namespace

    path.setAttribute("d","M10.0244 1C10.041 1.003 10.058 1.0046 10.0742 1.009C10.1234 1.0222 10.1686 1.0486 10.2042 1.0844C10.2396 1.1198 10.2642 1.1624 10.2914 1.2032C10.552 1.5946 10.7522 2.04 10.7196 2.508C10.6922 2.9012 10.4778 3.2626 10.2722 3.5582C10.0678 3.8518 9.8356 4.1524 9.8562 4.5288C9.8744 4.8598 10.0524 5.165 10.237 5.4308L10.2622 5.4748C10.2736 5.5066 10.2852 5.5386 10.288 5.5722C10.2992 5.707 10.2042 5.8424 10.0728 5.8772C9.9746 5.903 9.8642 5.8732 9.7926 5.801C9.7364 5.7444 9.6982 5.6724 9.6548 5.6034C9.5596 5.4528 9.4748 5.2956 9.4092 5.131C9.4092 5.131 9.3922 5.0886 9.378 5.0484C9.2788 4.7682 9.2438 4.4642 9.307 4.1712C9.3402 4.017 9.398 3.8694 9.472 3.7298C9.472 3.7298 9.4884 3.6988 9.5032 3.6728C9.6464 3.4178 9.8376 3.194 9.9846 2.9342C10.0986 2.733 10.1702 2.5064 10.13 2.2538C10.0844 1.9688 9.9346 1.7072 9.7688 1.4672L9.7606 1.4554L9.7352 1.4116C9.72 1.3694 9.7132 1.3592 9.7094 1.314C9.6992 1.196 9.7686 1.076 9.8764 1.026C9.9174 1.0068 9.9298 1.0076 9.9738 1C9.9908 1 10.0076 1 10.0244 1Z"); //Set path's data
    iconAbsence.appendChild(path)

    path.setAttribute("d","M11.3842 1C11.401 1.003 11.4178 1.0046 11.4342 1.009C11.4832 1.0222 11.5284 1.0486 11.5642 1.0844C11.5994 1.1198 11.624 1.1624 11.6512 1.2032C11.9118 1.5946 12.112 2.04 12.0794 2.508C12.052 2.9012 11.8378 3.2626 11.632 3.5582C11.4276 3.8518 11.1954 4.1524 11.216 4.5288C11.2342 4.8598 11.4122 5.165 11.597 5.4308L11.622 5.4748C11.6336 5.5066 11.645 5.5386 11.6478 5.5722C11.659 5.707 11.564 5.8424 11.4326 5.8772C11.3344 5.903 11.224 5.8732 11.1524 5.801C11.0964 5.7444 11.058 5.6724 11.0146 5.6034C10.9194 5.4528 10.8346 5.2956 10.769 5.131C10.769 5.131 10.7522 5.0886 10.7378 5.0484C10.6386 4.7682 10.6036 4.4642 10.6668 4.1712C10.7002 4.017 10.7578 3.8694 10.832 3.7298C10.832 3.7298 10.8484 3.6988 10.863 3.6728C11.0064 3.4178 11.1974 3.194 11.3446 2.9342C11.4586 2.733 11.5302 2.5064 11.4898 2.2538C11.4442 1.9688 11.2944 1.7072 11.1286 1.4672L11.1204 1.4554L11.0952 1.4116C11.08 1.3694 11.073 1.3592 11.0692 1.314C11.0592 1.1972 11.128 1.0762 11.2362 1.026C11.2774 1.0068 11.2896 1.0076 11.3336 1C11.3506 1 11.3674 1 11.3842 1Z"); //Set path's data
    iconAbsence.appendChild(path)

    path.setAttribute("d","M4.42 13.4318L4.762 13.9208C4.6174 13.9798 4.4758 14.0428 4.339 14.1092C3.9932 14.2776 3.6594 14.4744 3.3702 14.7318C3.1748 14.9058 2.9976 15.1084 2.8966 15.3492C2.7956 15.5906 2.7938 15.8688 2.8966 16.1142C3.0366 16.448 3.3162 16.7072 3.59 16.9092C4.0366 17.2386 4.5542 17.4736 5.0662 17.6598C5.9954 17.9978 6.9784 18.1928 7.9648 18.3056C8.4394 18.36 8.9218 18.3942 9.398 18.4098C10.2888 18.439 11.2012 18.4034 12.087 18.2994C12.8186 18.2134 13.5454 18.0792 14.253 17.878C14.5632 17.79 14.8674 17.689 15.1666 17.5704C15.4814 17.4456 15.7874 17.3018 16.0764 17.1286C16.318 16.9838 16.547 16.82 16.7464 16.6188C16.8724 16.4916 16.9834 16.3518 17.065 16.1912C17.1814 15.9618 17.216 15.6948 17.1346 15.4412C17.0068 15.0424 16.6576 14.731 16.3516 14.514C16.0234 14.2812 15.6644 14.0968 15.2942 13.9434L15.5952 13.4416C15.7716 13.5174 15.9452 13.6 16.1154 13.6904C16.558 13.9258 16.9736 14.204 17.3036 14.5936C17.3912 14.6972 17.4702 14.8072 17.5372 14.9246C17.571 14.984 17.6018 15.0452 17.629 15.1078L17.6312 15.113C17.6548 15.168 17.6754 15.224 17.693 15.2812L17.6948 15.2868C17.782 15.577 17.7822 15.8924 17.693 16.1822C17.5512 16.6428 17.2274 16.993 16.9082 17.255C16.753 17.3822 16.5862 17.4978 16.414 17.603C16.0388 17.8322 15.6314 18.0184 15.2142 18.1742C14.9594 18.2694 14.7016 18.3534 14.44 18.4286C13.4916 18.7012 12.5324 18.856 11.539 18.9376C10.7308 19.004 9.9116 19.0164 9.116 18.9798C8.1282 18.9344 7.1398 18.8118 6.1954 18.5932C5.7306 18.4858 5.2734 18.3556 4.817 18.1868C4.3452 18.0126 3.89 17.8048 3.468 17.5304C2.9866 17.2176 2.547 16.8188 2.3434 16.2948C2.1742 15.8592 2.2142 15.3638 2.4514 14.9402C2.644 14.596 2.9354 14.3156 3.2454 14.087C3.6076 13.8198 4.0036 13.6082 4.42 13.4318Z"); //Set path's data
    iconAbsence.appendChild(path)

    path.setAttribute("d","M1.0244 0C1.041 0.003 1.058 0.00460002 1.0742 0.00900002C1.1234 0.0222 1.1686 0.0486 1.2042 0.0844C1.2396 0.1198 1.2642 0.1624 1.2914 0.2032C1.552 0.5946 1.7522 1.04 1.7196 1.508C1.6922 1.9012 1.4778 2.2626 1.2722 2.5582C1.0678 2.8518 0.835599 3.1524 0.856199 3.5288C0.874399 3.8598 1.0524 4.165 1.237 4.4308L1.2622 4.4748C1.2736 4.5066 1.2852 4.5386 1.288 4.5722C1.2992 4.707 1.2042 4.8424 1.0728 4.8772C0.974599 4.903 0.864199 4.8732 0.792599 4.801C0.736399 4.7444 0.698199 4.6724 0.654799 4.6034C0.559599 4.4528 0.474799 4.2956 0.409199 4.131C0.409199 4.131 0.392199 4.0886 0.377999 4.0484C0.278799 3.7682 0.243799 3.4642 0.306999 3.1712C0.340199 3.017 0.397999 2.8694 0.471999 2.7298C0.471999 2.7298 0.488399 2.6988 0.503199 2.6728C0.646399 2.4178 0.837599 2.194 0.984599 1.9342C1.0986 1.733 1.1702 1.5064 1.13 1.2538C1.0844 0.9688 0.934599 0.7072 0.768799 0.4672L0.760599 0.4554L0.735199 0.4116C0.719999 0.3694 0.713199 0.3592 0.709399 0.314C0.699199 0.196 0.768599 0.076 0.876399 0.026C0.917399 0.00680002 0.929799 0.0076 0.973799 0C0.990799 0 1.0076 0 1.0244 0Z"); //Set path's data
    iconAbsence.appendChild(path)


    
    absencesItem.appendChild(iconAbsence)
    //********************************************************//

    renderAbsence(absencesItem,absenceDateStart,absenceDateEnd,absenceServiceResourceId)
  }
  start_dragable_appointments()
  start_drag_and_drop_appointments();
}







//init

renderBoard(daysAmountValue,timelineStep)







