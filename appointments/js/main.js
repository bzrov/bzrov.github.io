const dateView=document.querySelector('.controls__date-view')
const dateViewList = document.querySelector('.controls__date-view-list')
const dateViewItems = document.querySelectorAll('.date-view-list__item')
const dateViewText = document.querySelector('.controls__date-view-text')

const datePeriod=document.querySelector('.controls__date-period')
const datePeriodList = document.querySelector('.controls__date-period-list')
const datePeriodItems = document.querySelectorAll('.date-period-list__item')
const datePeriodText = document.querySelector('.controls__date-period-text')


const rowsNumberText = document.querySelector('.table-navigation__rows-amount')
const rowsNumberList = document.querySelector('#table-navigation__rows-amount-list_top');
const rowsNumberListDown = document.querySelector('#table-navigation__rows-amount-list_bottom');
const rowsNumberItems = document.querySelectorAll('.rows-amount-list__item');
const rowsNumber = document.querySelector('#table-navigation__rows-amount_top');
const rowsArrow = document.querySelector('#table-navigation__rows-amount-btn_top');
const rowsNumberDown = document.querySelector('#table-navigation__rows-amount_bottom');
const rowsArrowDown = document.querySelector('#table-navigation__rows-amount-btn_bottom');

const tableMobileItems = document.querySelectorAll('.table-mobile__cell')
const popupTableItemName = document.querySelector('.table-mobile__popup_name')
const popupTableItemBtn = document.querySelector('.table-mobile__popup_share-btn')

const popupWindow = document.querySelector('.popup-window')
const overlay = document.querySelector('.overlay')

const tableMobileSort = document.querySelector('.table-navigation-mobile__sort')
const tableMobileSortList = document.querySelector('.table-navigation-mobile__sort-list')
const tableMobileSortItems = document.querySelectorAll('.sort-list__item')
const tableMobileSortText = document.querySelector('.table-navigation-mobile__sort-text')
const tableMobileSortArrowDir =document.querySelector('.table-navigation-mobile__sort-dir')
const tableMobileSortCheckboxDescending =  document.querySelector('.sort-list__sort-settings-checkbox_descending')
const tableMobileSortCheckboxAscending =  document.querySelector('.sort-list__sort-settings-checkbox_ascending')

const tableFilterBtns = document.querySelectorAll('.table__filter-btn');
const tableFilterLists = document.querySelectorAll('.table__filter-list');
const tableFilterBtnsApply =  document.querySelectorAll('.table__filter-btn-apply');
const tableFilterCheckboxes = document.querySelectorAll('.filter-item [type=checkbox]')

const tableNavDownFixed = document.querySelector('.table-navigation_bottom')

let tableFilterListIndexOpened



//DATE VIEW HANDLERS 
for (let i = 0; i < tableMobileItems.length; i++) {
  tableMobileItems[i].addEventListener('click', function() {
    if(!popupWindow.classList.contains('popup-window_active')){
      popupWindow.classList.add('popup-window_active')
      popupTableItemName.textContent = tableMobileItems[i].querySelector('.table-mobile__cell_name').textContent
      if(tableMobileItems[i].querySelector('.table__share-btn').classList.contains('table__share-btn_active')){
        popupTableItemBtn.classList.add('table__share-btn_active')
        popupTableItemBtn.classList.remove('table__share-btn_inactive')
      } else {
        popupTableItemBtn.classList.add('table__share-btn_inactive')
        popupTableItemBtn.classList.remove('table__share-btn_active')
      }

    }
  });
}
overlay.addEventListener('click', function() {
  if(popupWindow.classList.contains('popup-window_active')){
    popupWindow.classList.remove('popup-window_active')
  }
});

dateView.addEventListener('click', function() {
  if (!dateView.classList.contains('open')) {
    dateView.classList.add('open');
    dateViewList.classList.add('visible');
      /* Conditions to close other control-item elements */
    tableFilterListIndexOpened!==undefined && tableFilterListIndexOpened!==null && tableFilterLists[tableFilterListIndexOpened].classList.remove('visible')
    
    if (datePeriod.classList.contains('open') && datePeriodList.classList.contains('visible')) {
        datePeriod.classList.remove('open');
        datePeriodList.classList.remove('visible');
    }
    if (rowsArrow.classList.contains('table-navigation__rows-amount-btn_open') && rowsNumberList.classList.contains('visible')) {
      rowsArrow.classList.remove('table-navigation__rows-amount-btn_open');
      rowsNumberList.classList.remove('visible');
    }
    if (rowsArrowDown.classList.contains('table-navigation__rows-amount-btn_open') && rowsNumberListDown.classList.contains('visible')) {
      rowsArrowDown.classList.remove('table-navigation__rows-amount-btn_open');
      rowsNumberListDown.classList.remove('visible');
    }
    if (tableMobileSort.classList.contains('open') && tableMobileSortList.classList.contains('visible')) {
      tableMobileSort.classList.remove('open');
      tableMobileSortList.classList.remove('visible');
    }
    if (calendar.classList.contains('visible')) {;
      calendar.classList.remove('visible');
    }
  } else {
    dateView.classList.remove('open');
    dateViewList.classList.remove('visible');
  }
})
for (let i = 0; i < dateViewItems.length; i++) {
  dateViewItems[i].addEventListener('click', function() {
    if (!dateViewItems[i].classList.contains('selected')) { dateViewItems[i].classList.add('selected'); }
    for (let j = i - 1; j >=0; j--) {
      if (dateViewItems[j].classList.contains('selected')) { dateViewItems[j].classList.remove('selected'); }
    }
    for (let k = i + 1; k < dateViewItems.length; k++) {
      if (dateViewItems[k].classList.contains('selected')) { dateViewItems[k].classList.remove('selected'); }
    }
    let itemText = dateViewItems[i].textContent;
    dateViewText.textContent = itemText;
  });
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
    tableFilterListIndexOpened!==undefined && tableFilterListIndexOpened!==null && tableFilterLists[tableFilterListIndexOpened].classList.remove('visible')
      
    if (dateView.classList.contains('open') && dateViewList.classList.contains('visible')) {
      dateView.classList.remove('open');
      dateViewList.classList.remove('visible');
    }
    if (rowsArrow.classList.contains('table-navigation__rows-amount-btn_open') && rowsNumberList.classList.contains('visible')) {
      rowsArrow.classList.remove('table-navigation__rows-amount-btn_open');
      rowsNumberList.classList.remove('visible');
    }
    if (rowsArrowDown.classList.contains('table-navigation__rows-amount-btn_open') && rowsNumberListDown.classList.contains('visible')) {
      rowsArrowDown.classList.remove('table-navigation__rows-amount-btn_open');
      rowsNumberListDown.classList.remove('visible');
    }
    if (tableMobileSort.classList.contains('open') && tableMobileSortList.classList.contains('visible')) {
      tableMobileSort.classList.remove('open');
      tableMobileSortList.classList.remove('visible');
    }
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
    dateStart = new Date();
    dateEnd = new Date();
    if(datePeriodItems[i].classList.contains('date-period-list__item_custom')){
      renderCalendar(month,year)
      if (!calendar.classList.contains('visible')) {;
        calendar.classList.add('visible');
      }
    } else if(datePeriodItems[i].classList.contains('date-period-list__item_tomorrow')){
      dateStart.setDate(date.getDate()+1)
      dateEnd.setDate(date.getDate()+1)
    }else if(datePeriodItems[i].classList.contains('date-period-list__item_tomorrow-next')){
      dateStart.setDate(date.getDate()+1)
      dateEnd = dateAllEnd
    }else if(datePeriodItems[i].classList.contains('date-period-list__item_today')){
      dateStart.setDate(date.getDate())
      dateEnd.setDate(date.getDate())
    } else if(datePeriodItems[i].classList.contains('date-period-list__item_yesterday')){
      dateStart.setDate(date.getDate()-1)
      dateEnd.setDate(date.getDate()-1)
    } else if(datePeriodItems[i].classList.contains('date-period-list__item_week-sun')){
      dateStart.setDate(date.getDate()- date.getDay())
      dateEnd.setDate(date.getDate())
    } else if(datePeriodItems[i].classList.contains('date-period-list__item_week-mon')){
      dateStart.setDate(date.getDate()- date.getDay()+1)
      dateEnd.setDate(date.getDate())
    }else if(datePeriodItems[i].classList.contains('date-period-list__item_last-7-days')){
      dateStart.setDate(date.getDate()- 7)
      dateEnd.setDate(date.getDate())
    }else if(datePeriodItems[i].classList.contains('date-period-list__item_last-week-sun')){
      dateStart.setDate(date.getDate()- date.getDay()-7)
      dateEnd.setDate(date.getDate()- date.getDay()-1)
    }else if(datePeriodItems[i].classList.contains('date-period-list__item_last-week-mon')){
      dateStart.setDate(date.getDate()- date.getDay()-6)
      dateEnd.setDate(date.getDate()- date.getDay())
    }else if(datePeriodItems[i].classList.contains('date-period-list__item_last-week-mon-fr')){
      dateStart.setDate(date.getDate()- date.getDay()-6)
      dateEnd.setDate(date.getDate()- date.getDay()-2)
    }else if(datePeriodItems[i].classList.contains('date-period-list__item_last-14-days')){
      dateStart.setDate(date.getDate()- 14)
      dateEnd.setDate(date.getDate())
    }else if(datePeriodItems[i].classList.contains('date-period-list__item_last-30-days')){
      dateStart.setDate(date.getDate()- 30)
      dateEnd.setDate(date.getDate())
    }else if(datePeriodItems[i].classList.contains('date-period-list__item_month')){
      dateStart.setDate(1)
      dateEnd.setDate(new Date(dateStart.getFullYear(), dateStart.getMonth()+1,0).getDate())
    }else if(datePeriodItems[i].classList.contains('date-period-list__item_last-month')){
      dateStart.setDate(1-(new Date(dateStart.getFullYear(), dateStart.getMonth(),0).getDate()))
      dateEnd.setDate(0)
    } else if(datePeriodItems[i].classList.contains('date-period-list__item_all')){
      dateStart = dateAllStart
      dateEnd = dateAllEnd
    }
    
    dateStart.setMinutes(0);
    dateStart.setHours(0);
    dateStart.setSeconds(0);
    dateEnd.setMinutes(0);
    dateEnd.setHours(0);
    dateEnd.setSeconds(0);

    for (let j = i - 1; j >=0; j--) {
      if (datePeriodItems[j].classList.contains('selected')) { datePeriodItems[j].classList.remove('selected'); }
    }
    for (let k = i + 1; k < datePeriodItems.length; k++) {
      if (datePeriodItems[k].classList.contains('selected')) { datePeriodItems[k].classList.remove('selected'); }
    }
    let itemText = datePeriodItems[i].textContent;
    datePeriodText.textContent = itemText;

    controlsDatePickerStartText.textContent = `${monthShortList[dateStart.getMonth()]} ${dateStart.getDate()}, ${dateStart.getFullYear()}`;
    controlsDatePickerEndText.textContent = `${monthShortList[dateEnd.getMonth()]} ${dateEnd.getDate()}, ${dateEnd.getFullYear()}`;
  });
}

//ROWS NUMBER HANDLERS
rowsNumber.addEventListener('click', function() {
  
  if (!rowsArrow.classList.contains('table-navigation__rows-amount-btn_open') && !rowsNumberList.classList.contains('visible')) {
    rowsArrow.classList.add('table-navigation__rows-amount-btn_open');
    rowsNumberList.classList.add('visible');
    /* Conditions to close other control-item elements */
    tableFilterListIndexOpened!==undefined && tableFilterListIndexOpened!==null && tableFilterLists[tableFilterListIndexOpened].classList.remove('visible')

    if (datePeriod.classList.contains('open') && datePeriodList.classList.contains('visible')) {
      datePeriod.classList.remove('open');
      datePeriodList.classList.remove('visible');
    }
    
    if (dateView.classList.contains('open') && dateViewList.classList.contains('visible')) {
      dateView.classList.remove('open');
      dateViewList.classList.remove('visible');
    }

    if (rowsArrowDown.classList.contains('table-navigation__rows-amount-btn_open') && rowsNumberListDown.classList.contains('visible')) {
      rowsArrowDown.classList.remove('table-navigation__rows-amount-btn_open');
      rowsNumberListDown.classList.remove('visible');
    }
    if (tableMobileSort.classList.contains('open') && tableMobileSortList.classList.contains('visible')) {
      tableMobileSort.classList.remove('open');
      tableMobileSortList.classList.remove('visible');
    }
    if (calendar.classList.contains('visible')) {;
      calendar.classList.remove('visible');
    }
  } else {
    rowsArrow.classList.remove('table-navigation__rows-amount-btn_open');
    rowsNumberList.classList.remove('visible');
  }
});
  
rowsArrow.addEventListener('click', function() {
  if (!rowsArrow.classList.contains('table-navigation__rows-amount-btn_open') && !rowsNumberList.classList.contains('visible')) {
    rowsArrow.classList.add('table-navigation__rows-amount-btn_open');
    rowsNumberList.classList.add('visible');
    /* Conditions to close other control-item elements */
    tableFilterListIndexOpened!==undefined && tableFilterListIndexOpened!==null && tableFilterLists[tableFilterListIndexOpened].classList.remove('visible')

    if (datePeriod.classList.contains('open') && datePeriodList.classList.contains('visible')) {
      datePeriod.classList.remove('open');
      datePeriodList.classList.remove('visible');
    }
    
    if (dateView.classList.contains('open') && dateViewList.classList.contains('visible')) {
      dateView.classList.remove('open');
      dateViewList.classList.remove('visible');
    }

    if (rowsArrowDown.classList.contains('table-navigation__rows-amount-btn_open') && rowsNumberListDown.classList.contains('visible')) {
      rowsArrowDown.classList.remove('table-navigation__rows-amount-btn_open');
      rowsNumberListDown.classList.remove('visible');
    }
    if (tableMobileSort.classList.contains('open') && tableMobileSortList.classList.contains('visible')) {
      tableMobileSort.classList.remove('open');
      tableMobileSortList.classList.remove('visible');
    }
    if (calendar.classList.contains('visible')) {;
      calendar.classList.remove('visible');
    }
  } else {
    rowsArrow.classList.remove('table-navigation__rows-amount-btn_open');
    rowsNumberList.classList.remove('visible');
  }
});
  
rowsNumberDown.addEventListener('click', function() {
  if (!rowsArrowDown.classList.contains('table-navigation__rows-amount-btn_open') && !rowsNumberListDown.classList.contains('visible')) {
    rowsArrowDown.classList.add('table-navigation__rows-amount-btn_open');
    rowsNumberListDown.classList.add('visible');
    /* Conditions to close other control-item elements */
    tableFilterListIndexOpened!==undefined && tableFilterListIndexOpened!==null && tableFilterLists[tableFilterListIndexOpened].classList.remove('visible')

    if (datePeriod.classList.contains('open') && datePeriodList.classList.contains('visible')) {
      datePeriod.classList.remove('open');
      datePeriodList.classList.remove('visible');
    }
    
    if (dateView.classList.contains('open') && dateViewList.classList.contains('visible')) {
      dateView.classList.remove('open');
      dateViewList.classList.remove('visible');
    }

    if (rowsArrow.classList.contains('table-navigation__rows-amount-btn_open') && rowsNumberList.classList.contains('visible')) {
      rowsArrow.classList.remove('table-navigation__rows-amount-btn_open');
      rowsNumberList.classList.remove('visible');
    }
    if (tableMobileSort.classList.contains('open') && tableMobileSortList.classList.contains('visible')) {
      tableMobileSort.classList.remove('open');
      tableMobileSortList.classList.remove('visible');
    }
    if (calendar.classList.contains('visible')) {;
      calendar.classList.remove('visible');
    }
  } else {
    rowsArrowDown.classList.remove('table-navigation__rows-amount-btn_open');
    rowsNumberListDown.classList.remove('visible');
  }
});

rowsArrowDown.addEventListener('click', function() {
  if (!rowsArrowDown.classList.contains('table-navigation__rows-amount-btn_open') && !rowsNumberListDown.classList.contains('visible')) {
    rowsArrowDown.classList.add('table-navigation__rows-amount-btn_open');
    rowsNumberListDown.classList.add('visible');
    /* Conditions to close other control-item elements */
    tableFilterListIndexOpened!==undefined && tableFilterListIndexOpened!==null && tableFilterLists[tableFilterListIndexOpened].classList.remove('visible')

    if (datePeriod.classList.contains('open') && datePeriodList.classList.contains('visible')) {
      datePeriod.classList.remove('open');
      datePeriodList.classList.remove('visible');
    }
    
    if (dateView.classList.contains('open') && dateViewList.classList.contains('visible')) {
      dateView.classList.remove('open');
      dateViewList.classList.remove('visible');
    }

    if (rowsArrow.classList.contains('table-navigation__rows-amount-btn_open') && rowsNumberList.classList.contains('visible')) {
      rowsArrow.classList.remove('table-navigation__rows-amount-btn_open');
      rowsNumberList.classList.remove('visible');
    }
    if (tableMobileSort.classList.contains('open') && tableMobileSortList.classList.contains('visible')) {
      tableMobileSort.classList.remove('open');
      tableMobileSortList.classList.remove('visible');
    }
    if (calendar.classList.contains('visible')) {;
      calendar.classList.remove('visible');
    }
  } else {
    rowsArrowDown.classList.remove('table-navigation__rows-amount-btn_open');
    rowsNumberListDown.classList.remove('visible');
  }
});
  
for (let i = 0; i < rowsNumberItems.length; i++) {
  console.log(rowsNumberItems[i])
  rowsNumberItems[i].addEventListener('click', function() {

    if (!rowsNumberItems[i].classList.contains('selected')) { rowsNumberItems[i].classList.add('selected'); }
    for (let j = i - 1; j >=0; j--) {
      if (rowsNumberItems[j].classList.contains('selected')) { rowsNumberItems[j].classList.remove('selected'); }
    }
    for (let k = i + 1; k < rowsNumberItems.length; k++) {
      if (rowsNumberItems[k].classList.contains('selected')) { rowsNumberItems[k].classList.remove('selected'); }
    }
    let itemText = rowsNumberItems[i].textContent;
    rowsNumber.textContent = itemText;
    rowsNumberDown.textContent = itemText;
    rowsArrow.classList.remove('table-navigation__rows-amount-btn_open');
    rowsNumberList.classList.remove('visible');
    rowsArrowDown.classList.remove('table-navigation__rows-amount-btn_open');
    rowsNumberListDown.classList.remove('visible');
  });
}
//TABLE NAVIGATION MOBILE SORT
tableMobileSort.addEventListener('click', function(e) {
  if (!tableMobileSort.classList.contains('open')) {
    tableMobileSort.classList.add('open');
    tableMobileSortList.classList.add('visible');
    /* Conditions to close other control-item elements */
    tableFilterListIndexOpened!==undefined && tableFilterListIndexOpened!==null && tableFilterLists[tableFilterListIndexOpened].classList.remove('visible')

    if (datePeriod.classList.contains('open') && datePeriodList.classList.contains('visible')) {
      datePeriod.classList.remove('open');
      datePeriodList.classList.remove('visible');
    }
    
    if (dateView.classList.contains('open') && dateViewList.classList.contains('visible')) {
      dateView.classList.remove('open');
      dateViewList.classList.remove('visible');
    }

    if (rowsArrow.classList.contains('table-navigation__rows-amount-btn_open') && rowsNumberList.classList.contains('visible')) {
      rowsArrow.classList.remove('table-navigation__rows-amount-btn_open');
      rowsNumberList.classList.remove('visible');
    }

    if (rowsArrowDown.classList.contains('table-navigation__rows-amount-btn_open') && rowsNumberListDown.classList.contains('visible')) {
      rowsArrowDown.classList.remove('table-navigation__rows-amount-btn_open');
      rowsNumberListDown.classList.remove('visible');
    }
    if (calendar.classList.contains('visible')) {;
      calendar.classList.remove('visible');
    }
  } 
  if(e.target.classList.contains('sort-list__sort-btn')){
      if(tableMobileSortCheckboxDescending.checked){
        tableMobileSortArrowDir.classList.add('table__sort-dir_descending')
        tableMobileSortArrowDir.classList.remove('table__sort-dir_ascending')
      } else if(tableMobileSortCheckboxAscending.checked){
        tableMobileSortArrowDir.classList.add('table__sort-dir_ascending')
        tableMobileSortArrowDir.classList.remove('table__sort-dir_descending')
      }

      tableMobileSort.classList.remove('open');
      tableMobileSortList.classList.remove('visible');
  }
})
for (let i = 0; i < tableMobileSortItems.length; i++) {
  tableMobileSortItems[i].addEventListener('click', function() {
    if (!tableMobileSortItems[i].classList.contains('selected')) { tableMobileSortItems[i].classList.add('selected'); }
    for (let j = i - 1; j >=0; j--) {
      if (tableMobileSortItems[j].classList.contains('selected')) { tableMobileSortItems[j].classList.remove('selected'); }
    }
    for (let k = i + 1; k < tableMobileSortItems.length; k++) {
      if (tableMobileSortItems[k].classList.contains('selected')) { tableMobileSortItems[k].classList.remove('selected'); }
    }
    let itemText = tableMobileSortItems[i].textContent;
    tableMobileSortText.textContent = itemText;

  });
}
//TABLE FILTER

for (let i = 0; i<tableFilterBtns.length;i++){
  tableFilterBtns[i].addEventListener('click', function(e) {
      /* Conditions to close other control-item elements */
    tableFilterListIndexOpened!==undefined && tableFilterListIndexOpened!==null && tableFilterLists[tableFilterListIndexOpened].classList.remove('visible')

    if (datePeriod.classList.contains('open') && datePeriodList.classList.contains('visible')) {
      datePeriod.classList.remove('open');
      datePeriodList.classList.remove('visible');
    }
    
    if (dateView.classList.contains('open') && dateViewList.classList.contains('visible')) {
      dateView.classList.remove('open');
      dateViewList.classList.remove('visible');
    }

    if (rowsArrow.classList.contains('table-navigation__rows-amount-btn_open') && rowsNumberList.classList.contains('visible')) {
      rowsArrow.classList.remove('table-navigation__rows-amount-btn_open');
      rowsNumberList.classList.remove('visible');
    }

    if (rowsArrowDown.classList.contains('table-navigation__rows-amount-btn_open') && rowsNumberListDown.classList.contains('visible')) {
      rowsArrowDown.classList.remove('table-navigation__rows-amount-btn_open');
      rowsNumberListDown.classList.remove('visible');
    }
    if (tableMobileSort.classList.contains('open') && tableMobileSortList.classList.contains('visible')) {
      tableMobileSort.classList.remove('open');
      tableMobileSortList.classList.remove('visible');
    }
    if (calendar.classList.contains('visible')) {;
      calendar.classList.remove('visible');
    }
    tableFilterListIndexOpened = i;

    tableFilterList =  e.currentTarget.closest('.table__cell').querySelector('.table__filter-list')
    if (!tableFilterList.classList.contains('visible')) {
        tableFilterList.classList.add('visible');
    } else {
      tableFilterList.classList.remove('visible');
    }
  })
}
for(let i =0; i< tableFilterCheckboxes.length; i++){
  tableFilterCheckboxes[i].addEventListener('click',function(e){
    
    let tableFilterListCheckboxes = tableFilterCheckboxes[i].closest('.table__filter-list')

    let tableFilterListCheckbox = tableFilterListCheckboxes.querySelectorAll('.filter-item__checkbox')
    if(e.target.classList.contains('filter-item__checkbox_all')){
      tableFilterListCheckbox.forEach((el)=>{
        !el.classList.contains('filter-item__checkbox_all') && (el.checked=false)
    })}else {
      tableFilterListCheckboxes.querySelector('.filter-item__checkbox_all').checked=false
    }
  })
}
for (let i = 0; i < tableFilterBtnsApply.length; i++) {
  tableFilterBtnsApply[i].addEventListener('click', function(e) {
    let tableFilterListCheckboxes = tableFilterLists[tableFilterListIndexOpened].querySelectorAll('.filter-item__checkbox')

    tableFilterLists[tableFilterListIndexOpened].parentNode.querySelector('.table__filter-btn').classList.remove('table__filter-btn_filtered')
    //Check checkboxes, add active class for filter-btn
    for(let i=0; i<tableFilterListCheckboxes.length;i++){
      if(tableFilterListCheckboxes[i].classList.contains('filter-item__checkbox_all') && tableFilterListCheckboxes[i].checked){
        tableFilterLists[tableFilterListIndexOpened].parentNode.querySelector('.table__filter-btn').classList.remove('table__filter-btn_filtered')
        break
      }
      else if(tableFilterListCheckboxes[i].checked){
        tableFilterLists[tableFilterListIndexOpened].parentNode.querySelector('.table__filter-btn').classList.add('table__filter-btn_filtered')
        break
      }
    }
    tableFilterListIndexOpened!==undefined && tableFilterListIndexOpened!==null && tableFilterLists[tableFilterListIndexOpened].classList.remove('visible')
  });
} 
// Calendar 
let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
let dateStart =  new Date();
let dateEnd = new Date();
let dayStart = dateStart.getDate()-1
let dayEnd = dateEnd.getDate()-1
let firstClick = true;
let daysOffset = 0;
let daysInMonth;
const calendar = document.querySelector('.calendar')
const calendarTableDays = document.querySelectorAll('.calendar-table__cell-day')
const calendarMonthYear = document.querySelector('.calendar__month')
const calendarBtnNext = document.querySelector('.calendar__controll_next')
const calendarBtnPrev = document.querySelector('.calendar__controll_prev')
const controlsDatePickerStart = document.querySelector('.controls__date-picker-item_start')
const controlsDatePickerEnd = document.querySelector('.controls__date-picker-item_end')
const controlsDatePickerStartText = document.querySelector('.controls__date-picker-date_start')
const controlsDatePickerEndText = document.querySelector('.controls__date-picker-date_end')


let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
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
      calendarTableDays[i].classList.remove('calendar-table__cell-day_selected-period-start')
      calendarTableDays[i].classList.remove('calendar-table__cell-day_selected-period-end')
      calendarTableDays[i].classList.remove('calendar-table__cell-day_selected-period')
    }
  }

  //Fill all days
  for(let i=0; i<daysInMonth; i++){
    let dateTemp = new Date(year,month,i+1)

    if(Date.parse(dateTemp)==Date.parse(dateStart) && Date.parse(dateTemp)==Date.parse(dateEnd) ){
      calendarTableDays[i+daysOffset].classList.add('calendar-table__cell-day_selected-one')
    } else if (Date.parse(dateTemp)==Date.parse(dateStart) && Date.parse(dateStart)!=Date.parse(dateEnd)){
      calendarTableDays[i+daysOffset].classList.add('calendar-table__cell-day_selected-period-start')
    } else if (Date.parse(dateTemp)==Date.parse(dateEnd) && Date.parse(dateStart)!=Date.parse(dateEnd)){
      calendarTableDays[i+daysOffset].classList.add('calendar-table__cell-day_selected-period-end')
    } 
    if(Date.parse(dateTemp)>Date.parse(dateStart) && Date.parse(dateTemp) < Date.parse(dateEnd)){
      calendarTableDays[i+daysOffset].classList.add('calendar-table__cell-day_selected-period')
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

controlsDatePickerStart.addEventListener('click', function() {
  let monthStart = dateStart.getMonth()
  let yearStart = dateStart.getFullYear()
  month = monthStart;
  year = yearStart;
  renderCalendar(monthStart,yearStart)
  if (!calendar.classList.contains('visible')) {;
    calendar.classList.add('visible');
  }
  /* Conditions to close other control-item elements */
  tableFilterListIndexOpened!==undefined && tableFilterListIndexOpened!==null && tableFilterLists[tableFilterListIndexOpened].classList.remove('visible')
        
  if (dateView.classList.contains('open') && dateViewList.classList.contains('visible')) {
    dateView.classList.remove('open');
    dateViewList.classList.remove('visible');
  }
        
  if (datePeriod.classList.contains('open') && datePeriodList.classList.contains('visible')) {
      datePeriod.classList.remove('open');
      datePeriodList.classList.remove('visible');
  }
  if (rowsArrow.classList.contains('table-navigation__rows-amount-btn_open') && rowsNumberList.classList.contains('visible')) {
    rowsArrow.classList.remove('table-navigation__rows-amount-btn_open');
    rowsNumberList.classList.remove('visible');
  }
  if (rowsArrowDown.classList.contains('table-navigation__rows-amount-btn_open') && rowsNumberListDown.classList.contains('visible')) {
    rowsArrowDown.classList.remove('table-navigation__rows-amount-btn_open');
    rowsNumberListDown.classList.remove('visible');
  }
  if (tableMobileSort.classList.contains('open') && tableMobileSortList.classList.contains('visible')) {
    tableMobileSort.classList.remove('open');
    tableMobileSortList.classList.remove('visible');
  }
})

controlsDatePickerEnd.addEventListener('click', function() {
  let monthEnd = dateEnd.getMonth()
  let yearEnd = dateEnd.getFullYear()
  month = monthEnd;
  year = yearEnd;
  renderCalendar(monthEnd,yearEnd)
  if (!calendar.classList.contains('visible')) {;
    calendar.classList.add('visible');
  }
  /* Conditions to close other control-item elements */
  tableFilterListIndexOpened!==undefined && tableFilterListIndexOpened!==null && tableFilterLists[tableFilterListIndexOpened].classList.remove('visible')
        
  if (dateView.classList.contains('open') && dateViewList.classList.contains('visible')) {
    dateView.classList.remove('open');
    dateViewList.classList.remove('visible');
  }
        
  if (datePeriod.classList.contains('open') && datePeriodList.classList.contains('visible')) {
      datePeriod.classList.remove('open');
      datePeriodList.classList.remove('visible');
  }
  if (rowsArrow.classList.contains('table-navigation__rows-amount-btn_open') && rowsNumberList.classList.contains('visible')) {
    rowsArrow.classList.remove('table-navigation__rows-amount-btn_open');
    rowsNumberList.classList.remove('visible');
  }
  if (rowsArrowDown.classList.contains('table-navigation__rows-amount-btn_open') && rowsNumberListDown.classList.contains('visible')) {
    rowsArrowDown.classList.remove('table-navigation__rows-amount-btn_open');
    rowsNumberListDown.classList.remove('visible');
  }
  if (tableMobileSort.classList.contains('open') && tableMobileSortList.classList.contains('visible')) {
    tableMobileSort.classList.remove('open');
    tableMobileSortList.classList.remove('visible');
  }
})

calendarTableDays.forEach((calendarTableDay,idx) => {
  calendarTableDay.addEventListener('click', function() {
    if (idx-daysOffset>=0 && idx-daysOffset<daysInMonth) {        
      if(firstClick){
          dayStart= idx-daysOffset;
          dayEnd= dayStart;
          dateStart = new Date(year,month,dayStart+1)
          dateEnd = new Date(year,month,dayEnd+1)
          firstClick=false;
      } else {
          dayEndTemp = idx-daysOffset
          dateEndTemp = new Date(year,month,dayEndTemp+1)
        if (Date.parse(dateEndTemp)<Date.parse(dateStart)){
          dayStart= idx-daysOffset;
          dayEnd= dayStart;
          dateStart = new Date(year,month,dayStart+1)
          dateEnd = new Date(year,month,dayEnd+1)
          firstClick=false;
        } else{
          dayEnd= idx-daysOffset;
          dateEnd = new Date(year,month,dayEnd+1)
          firstClick=true;
        }
      } 
      //Creating text for controls text
    controlsDatePickerStartText.textContent = `${monthShortList[dateStart.getMonth()]} ${dateStart.getDate()}, ${dateStart.getFullYear()}`;
    controlsDatePickerEndText.textContent = `${monthShortList[dateEnd.getMonth()]} ${dateEnd.getDate()}, ${dateEnd.getFullYear()}`;
    renderCalendar(month,year)
    }
  })
});
  
tableNavDownFixed.addEventListener('touchmove', function(e) {
  e.preventDefault();
}, false);

/* Clicking outside of popup to close and deselect */
window.addEventListener('click', function(event) {
  let target = event.target;
  let clickedDateView= target.closest('.controls__date-view');
  let clickedDatePeriod= target.closest('.controls__date-period');
  let clickedRowsArrow = target.closest('#table-navigation__rows-amount-btn_top');
  let clickedRowsNumber = target.closest('#table-navigation__rows-amount_top');
  let clickedRowsNumberDown = target.closest('#table-navigation__rows-amount_bottom');
  let clickedRowsArrowDown = target.closest('#table-navigation__rows-amount-btn_bottom');
  let clickedTableMobileSort = target.closest('.table-navigation-mobile__sort');
  let clickedCalendar = target.closest('.calendar');
  let clickedControlsDatePickerStart = target.closest('.controls__date-picker-item_start');
  let clickedControlsDatePickerEnd = target.closest('.controls__date-picker-item_end');
  let clickedTableFilerBtn = target.closest('.table__filter-btn');
  let clickedTableFilerList = target.closest('.table__filter-list');
console.log(target)
  !clickedTableFilerList && !clickedTableFilerBtn && tableFilterListIndexOpened!==undefined && tableFilterListIndexOpened!==null && tableFilterLists[tableFilterListIndexOpened].classList.remove('visible')
  if (clickedDateView !==dateView && dateView.classList.contains('open') && dateViewList.classList.contains('visible')) {
    dateView.classList.remove('open');
    dateViewList.classList.remove('visible');
  }
  if (!clickedDatePeriod && datePeriod.classList.contains('open') && datePeriodList.classList.contains('visible')) {
      datePeriod.classList.remove('open');
      datePeriodList.classList.remove('visible');
  }

  if (!clickedRowsArrow  && !clickedRowsNumber && rowsArrow.classList.contains('table-navigation__rows-amount-btn_open') && rowsNumberList.classList.contains('visible')) {
    rowsArrow.classList.remove('table-navigation__rows-amount-btn_open');
    rowsNumberList.classList.remove('visible');
  }
  if (!clickedRowsArrowDown && !clickedRowsNumberDown && rowsArrowDown.classList.contains('table-navigation__rows-amount-btn_open') && rowsNumberListDown.classList.contains('visible')) {
    rowsArrowDown.classList.remove('table-navigation__rows-amount-btn_open');
    rowsNumberListDown.classList.remove('visible');
  }
  if (!clickedTableMobileSort && tableMobileSort.classList.contains('open') && tableMobileSortList.classList.contains('visible')) {
    tableMobileSort.classList.remove('open');
    tableMobileSortList.classList.remove('visible');
  }
  if (!clickedDatePeriod  && !clickedControlsDatePickerStart && !clickedControlsDatePickerEnd && !clickedCalendar && calendar.classList.contains('visible')) {;
    calendar.classList.remove('visible');
  }
});

