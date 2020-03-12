
const datePeriod=document.querySelector('.controls__date-period')
const datePeriodList = document.querySelector('.controls__date-period-list')
const datePeriodItems = document.querySelectorAll('.date-period-list__item')
const datePeriodText = document.querySelector('.controls__date-period-text')

const daysAmount=document.querySelector('.controls__days-amount')
const daysAmountList = document.querySelector('.controls__days-amount-list')
const daysAmountItems = document.querySelectorAll('.days-amount-list__item')
const daysAmountText = document.querySelector('.controls__days-amount-text')

const boardItems = document.querySelector('.board__items')

let daysAmountValue = 2;
let timelineStep = 2;
let boardHourStart = 2// 6am
let boardHourEnd = 6// 9pm

let json = '{"areas":[{"area_id":"t.est","area_name":"test","area_timezone":"","service_resources":[{"service_resource_id":"test","service_resource_img":"test","service_resource_nickname":"test","service_resource_name_surname":"test","service_resource_post":"test"},{"service_resource_id":"test","service_resource_img":"test","service_resource_nickname":"test","service_resource_name_surname":"test","service_resource_post":"test"}]}],"appointments":[{"appointment_id":"test","appointment_type":"test","appointment_job_number":"test","appointment_zip":"test","appointment_service_resource_id":"test","appointment_date_start":"test","appointment_date_end":"test"}],"absences":[{"absences_id":"test","absences_service_resource_id":"test","absences_date_start":"test","absences_date_end":"test"}]}'

const crEl = (tagName, className, text, parent, attributes = {}, ) => {
  const el = document.createElement(tagName);
  Object.assign(el, attributes);
  el.className = className;
  if (text) { el.appendChild(document.createTextNode(text)); }

  return el;
};


const drawBoard =(json)=>{
  const boardData = JSON.parse(json)
  console.log(boardData)
  //***********************************Draw areas**************************************//
  const areas = boardData.areas;
  for(let i =0;i<areas.length;i++){
    const area = areas[i]
    const area_id = area.area_id;
    const area_name = area.area_name;
    const area_timezone = area.area_timezone;
    const area_service_resources = area.service_resources;
    const area_time = new Date()

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

    const boardsItemAreaTown = crEl("p","boards__item-area-town",area_name) //create area town 
    const boardsItemAreaTime = crEl("p","boards__item-area-time",area_time) //create area time

    const timegridRealtimeLine = crEl("div","timegrid__realtime-line") //create timegrid realtime line

    const boardsBoard = crEl("div","boards__board board") //create board
    const boardTable = crEl("div","board__table") // create board table


    for(let j=0; j<area_service_resources.length; j++){
     const area_service_resource = area_service_resources[j];
     const serviceResourceId  = area_service_resource.service_resource_id;
     const serviceResourceImg  = area_service_resource.service_resource_img;
     const serviceResourceNickname  = area_service_resource.service_resource_nickname;
     const serviceResourceNameSurname  = area_service_resource.service_resource_name_surname;
     const serviceResourcePost  = area_service_resource.service_resource_post;


     const boardRow = crEl("div","board__row"); // create board row
     const boardRowAside = crEl("div","board__aside"); // create board aside
     const boardRowWorker = crEl("div","board__worker"); //create worker
     const boardRowWorkerImg = crEl("div","board__worker-img"); // create worker img wrapper
     const boardRowWorkerImgContent = crEl("img","","",null,{src:serviceResourceImg}); // create worker img
     const boardRowWorkerInfo= crEl("div","board__worker-info"); // create worker info
     const boardRowNickname = crEl("p","board__worker-nickname",serviceResourceNickname); // create worker nickname
     const boardRowNameSurname = crEl("p","board__worker-name-surname",serviceResourceNameSurname); // create worker name and surname
     const boardRowWorkerPost = crEl("p","board__worker-post",serviceResourcePost); // create worker post
     const boardRowMain =crEl("div","board__main"); // create board main
     const boardRowTimegrid =crEl("div","board__timegrid timegrid"); // create timegrid
     const boardRowTimegridRow =crEl("div","timegrid__row"); // create timegrid row
     boardRowTimegridRow.setAttribute('data-service-resource', serviceResourceId);


     boardRowWorkerInfo.appendChild(boardRowNickname)
     boardRowWorkerInfo.appendChild(boardRowNameSurname)
     boardRowWorkerInfo.appendChild(boardRowWorkerPost)
     boardRowWorkerImg.appendChild(boardRowWorkerImgContent)
     boardRowWorker.appendChild(boardRowWorkerImg)
     boardRowWorker.appendChild(boardRowWorkerInfo)
     boardRowAside.appendChild(boardRowWorker)
     boardRowTimegrid.appendChild(boardRowTimegridRow)
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
drawBoard(json)

const boardHourSelectList=document.querySelector('.controls__board-hour-select-list')
const boardHourSelectBtn = document.querySelector('.controls__board-hour-select-btn') 
const boardHourSelectListStart=document.getElementById('controls__board-hour-select-start')
const boardHourSelectListEnd=document.getElementById('controls__board-hour-select-end')
const boardHourSelectBtnApply = document.querySelector('.controls__board-hour-select-btn-apply') 

const boardsTimeline = document.querySelector('.boards__timeline')
const boardsDates = document.querySelector('.boards__dates')
const boardTimegrid = document.querySelector('.board__timegrid') 
const timegridRows = document.querySelectorAll('.timegrid__row')

const timegridRealtimeLines =document.querySelectorAll('.timegrid__realtime-line')
const boardsAreaBtnHide =document.querySelectorAll('.boards__item-area-btn-hide')



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

boardHourSelectBtn.addEventListener('click', function(e) {
  if(!boardHourSelectList.classList.contains('open')){
    boardHourSelectList.classList.add('open');
    boardHourSelectList.classList.add('visible');

  /* Conditions to close other control-item elements */
    if (calendar.classList.contains('visible') ) {
      calendar.classList.remove('visible');
    }
  } else {
    boardHourSelectList.classList.remove('open');
    boardHourSelectList.classList.remove('visible');
  }
})
boardHourSelectBtnApply.addEventListener('click', function(e) {
  if(boardHourSelectList.classList.contains('open')){
    boardHourSelectList.classList.remove('open');
    boardHourSelectList.classList.remove('visible');

    boardHourStart = boardHourSelectListStart.value
    boardHourEnd = boardHourSelectListEnd.value
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








const renderBoard = (daysAmountValue,timelineStep) =>{
  //init variables
  let halfDayPast = 0;
  let postfix;
  let boardCellWidth = 100/((boardHourEnd-boardHourStart)*daysAmountValue*2)
  
  //*******************************Board timeline fill*******************************//  
  boardsTimeline.innerHTML = ""; //Board timeline clear

  for(let i=boardHourStart%2==0?1:0; i<24*daysAmountValue; i++){
    let timelineTime =  i - (halfDayPast>1?24:12)*(Math.floor(halfDayPast/2))
    let timelineTimeConverted = timelineTime-(halfDayPast%2==0?0:12) // 12h format
    if( i==1 && daysAmountValue==1){
      boardsTimeline.innerHTML+=`
      <div class="timeline__item" style="width: ${boardCellWidth*timelineStep}%">
        <p class="timeline__item-time"></p>
      </div>`
      i=i+timelineStep-1
      continue
    }
    if(i%12===0 && i!==0){
      timelineTimeConverted = 12
      halfDayPast+=1;
    } else if((i+1)%12==0 && i!==1){
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
      if (halfDayPast!==0 && timelineTime==+boardHourStart+1){
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

  if(daysAmountValue==1){
    let boardsDateText = `${weekShortDays[datePicked.getDay()]}, ${monthShortList[datePicked.getMonth()]} ${datePicked.getDate()} ${datePicked.getFullYear()}`;
    
    boardsDates.insertAdjacentHTML('beforeend',`
    <div class="boards__dates-item" style="width:100%">
      <p class="boards__dates-item-time">${boardsDateText}</p>
    </div>`)
  }
  if(daysAmountValue==2){
    let boardsDateText = `${weekShortDays[datePicked.getDay()]}, ${monthShortList[datePicked.getMonth()]} ${datePicked.getDate()} ${datePicked.getFullYear()}`;
  
    let datePickedTemp = new Date('GMT+0700')
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
    <div class="boards__dates-item" style="width:33.333333333333336%">
      <p class="boards__dates-item-time">${boardsDateText}</p>
    </div>
    <div class="boards__dates-item" style="width:33.333333333333333%">
      <p class="boards__dates-item-time">${boardsDateNextText}</p>
    </div>
    <div class="boards__dates-item" style="width:33.333333333333336%">
      <p class="boards__dates-item-time">${boardsDateNextNextText}</p>
    </div>
    `)
  }
//**********************************************************************************//


//********************************Board fill cells*********************************//
  for(let i=0; i< timegridRows.length; i++){
    timegridRows[i].innerHTML = "";

    for(let j=0; j< (boardHourEnd-boardHourStart)*daysAmountValue*2; j++){

      if (j%((boardHourEnd-boardHourStart)*2)===0 && j!==0){
        timeGridCell = `<div class="timegrid__cell timegrid__cell_end" style="width: ${boardCellWidth}%"> </div>`
      } else{
        timeGridCell = `<div class="timegrid__cell" style="width: ${boardCellWidth}%"> </div>`
      }
      timegridRows[i].innerHTML += timeGridCell
    }

  }
//**********************************************************************************//


//***************************Board livetime line************************************//
  for(let i=0; i<timegridRealtimeLines.length;i++){
    const boardHourPickedStart = new Date()
    const boardHourPickedEnd = new Date()

    boardHourPickedStart.setDate(datePicked.getDate())
    boardHourPickedStart.setHours(boardHourStart)

    boardHourPickedEnd.setDate(datePicked.getDate())
    boardHourPickedEnd.setHours(boardHourEnd)
    
    let timeNow = new Date();

    if(Date.parse(timeNow)>=Date.parse(boardHourPickedStart) && Date.parse(timeNow)<=Date.parse(boardHourPickedEnd)  ){
      const offset =(100-15) * ((timeNow.getHours()-boardHourStart)*60*60+timeNow.getMinutes()*60+timeNow.getSeconds()) / ((boardHourEnd - boardHourStart)*60*60)*100/100
      console.log(offset,daysAmountValue)
      timegridRealtimeLines[i].style.left=`${offset/daysAmountValue+15}%`
      timegridRealtimeLines[i].classList.add("timegrid__realtime-line_active")
    } else{
      timegridRealtimeLines[i].classList.remove("timegrid__realtime-line_active")
    }
  }
//**********************************************************************************//


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
//**********************************************************************************//
}





//init

renderBoard(daysAmountValue,timelineStep)





















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
