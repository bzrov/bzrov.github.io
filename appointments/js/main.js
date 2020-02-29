// Get days in month function
Date.prototype.daysInMonth = function() {
  return 33 - new Date(this.getFullYear(), this.getMonth(), 33).getDate();
};
const 
    dateView=document.querySelector('.controls__date-view')
    dateViewList = document.querySelector('.controls__date-view-list')
    dateViewItems = document.querySelectorAll('.date-view-list__item')
    dateViewText = document.querySelector('.controls__date-view-text')

    datePeriod=document.querySelector('.controls__date-period')
    datePeriodList = document.querySelector('.controls__date-period-list')
    datePeriodItems = document.querySelectorAll('.date-period-list__item')
    datePeriodText = document.querySelector('.controls__date-period-text')

    rowsNumber=document.querySelector('.table-navigation__rows-amount-select')
    rowsNumberList = document.querySelector('.table-navigation__rows-amount-list')
    rowsNumberItems = document.querySelectorAll('.rows-amount-list__item')
    rowsNumberText = document.querySelector('.table-navigation__rows-amount')

    rowsNumberList = document.querySelector('#table-navigation__rows-amount-list_top');
    rowsNumberListDown = document.querySelector('#table-navigation__rows-amount-list_bottom');
    rowsNumberItems = document.querySelectorAll('.rows-amount-list__item');

    rowsNumber = document.querySelector('#table-navigation__rows-amount_top');
    rowsArrow = document.querySelector('#table-navigation__rows-amount-btn_top');

    rowsNumberDown = document.querySelector('#table-navigation__rows-amount_bottom');
    rowsArrowDown = document.querySelector('#table-navigation__rows-amount-btn_bottom');

    tableMobileSort = document.querySelector('.table-navigation-mobile__sort')
    tableMobileSortList = document.querySelector('.table-navigation-mobile__sort-list')
    tableMobileSortItems = document.querySelectorAll('.sort-list__item')
    tableMobileSortText = document.querySelector('.table-navigation-mobile__sort-text')

    const tableFilterBtns = document.querySelectorAll('.table__filter-btn');
    const tableFilterLists = document.querySelectorAll('.table__filter-list');
    const tableFilterBtnsApply =  document.querySelectorAll('.table__filter-btn-apply');
    let tableFilterListIndexOpened

    //DATE VIEW HANDLERS 
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
    datePeriod.addEventListener('click', function() {
        if (!datePeriod.classList.contains('open')) {
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
        } else {
          datePeriod.classList.remove('open');
          datePeriodList.classList.remove('visible');
        }
    })
    for (let i = 0; i < datePeriodItems.length; i++) {
        datePeriodItems[i].addEventListener('click', function() {
          if (!datePeriodItems[i].classList.contains('selected')) { datePeriodItems[i].classList.add('selected'); }
          for (let j = i - 1; j >=0; j--) {
            if (datePeriodItems[j].classList.contains('selected')) { datePeriodItems[j].classList.remove('selected'); }
          }
          for (let k = i + 1; k < datePeriodItems.length; k++) {
            if (datePeriodItems[k].classList.contains('selected')) { datePeriodItems[k].classList.remove('selected'); }
          }
          let itemText = datePeriodItems[i].textContent;
          datePeriodText.textContent = itemText;
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
        } else {
          rowsArrowDown.classList.remove('table-navigation__rows-amount-btn_open');
          rowsNumberListDown.classList.remove('visible');
        }
      });
      
      for (let i = 0; i < rowsNumberItems.length; i++) {
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
        } 
        if(e.target.classList.contains('sort-list__sort-btn')){
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
          tableFilterListIndexOpened = i;

          tableFilterList =  e.currentTarget.parentNode.parentNode.querySelector('.table__filter-list')
          if (!tableFilterList.classList.contains('visible')) {
              tableFilterList.classList.add('visible');
          } else {
            tableFilterList.classList.remove('visible');
          }
        })
    }
    for (let i = 0; i < tableFilterBtnsApply.length; i++) {
      tableFilterBtnsApply[i].addEventListener('click', function(e) {
          let tableFilterListCheckboxes = tableFilterLists[tableFilterListIndexOpened].querySelectorAll('.filter-item__checkbox')
          tableFilterLists[tableFilterListIndexOpened].parentNode.querySelector('.table__filter-btn').classList.remove('table__filter-btn_filtered')
          //Check checkboxes, add active class for filter-btn
          for(let i=0; i<tableFilterListCheckboxes.length;i++){
            if(tableFilterListCheckboxes[i].checked){
              tableFilterLists[tableFilterListIndexOpened].parentNode.querySelector('.table__filter-btn').classList.add('table__filter-btn_filtered')
              break
            }
          }
          tableFilterListIndexOpened!==undefined && tableFilterListIndexOpened!==null && tableFilterLists[tableFilterListIndexOpened].classList.remove('visible')
        });
    } 
    
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let dateStart =  new Date(2020,02,15);
    let dateEnd = new Date(2020,02,20);
    let dayStart = dateStart.getDate()-1
    let dayEnd = dateEnd.getDate()-1
    let firstClick = true;
    let daysOffset = 0;
    let daysInMonth;
    calendar = document.querySelector('.calendar')
    calendarTableDays = document.querySelectorAll('.calendar-table__cell-day')
    calendarMonthYear = document.querySelector('.calendar__month')
    calendarBtnNext = document.querySelector('.calendar__controll_next')
    calendarBtnPrev = document.querySelector('.calendar__controll_prev')
    controlsDatePickerStart = document.querySelector('.controls__date-picker-item_start')
    controlsDatePickerEnd = document.querySelector('.controls__date-picker-item_end')
    controlsDatePickerStartText = document.querySelector('.controls__date-picker-date_start')
    controlsDatePickerEndText = document.querySelector('.controls__date-picker-date_end')
    

    let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    

    const renderCalendar = (month,year)=>{
      daysInMonth = new Date(year,month+1,0).getDate()
      daysOffset = new Date(year,month).getDay()
      //Clear all days
      for(let i=0; i<calendarTableDays.length; i++){
        calendarTableDays[i].textContent = ""
      }

      //Fill all days
      for(let i=0; i<daysInMonth; i++){
          let dateTemp = new Date(year,month,i+1)
          console.log()
          if(Date.parse(dateTemp)==Date.parse(dateStart) && Date.parse(dateTemp)==Date.parse(dateEnd) ){
            calendarTableDays[i+daysOffset].classList.add('calendar-table__cell-day_selected-one')
          }
           else if (Date.parse(dateTemp)==Date.parse(dateStart) && Date.parse(dateStart)!=Date.parse(dateEnd)){
            calendarTableDays[i+daysOffset].classList.add('calendar-table__cell-day_selected-period-start')
            calendarTableDays[i+daysOffset].classList.remove('calendar-table__cell-day_selected-one')
          } else if (Date.parse(dateTemp)==Date.parse(dateEnd) && Date.parse(dateStart)!=Date.parse(dateEnd)){
            calendarTableDays[i+daysOffset].classList.add('calendar-table__cell-day_selected-period-end')
            calendarTableDays[i+daysOffset].classList.remove('calendar-table__cell-day_selected-one')
          } else {
            calendarTableDays[i+daysOffset].classList.remove('calendar-table__cell-day_selected-one')
            calendarTableDays[i+daysOffset].classList.remove('calendar-table__cell-day_selected-period-start')
            calendarTableDays[i+daysOffset].classList.remove('calendar-table__cell-day_selected-period-end')
          }
          
        if(Date.parse(dateTemp)>Date.parse(dateStart) && Date.parse(dateTemp) < Date.parse(dateEnd)){
          calendarTableDays[i+daysOffset].classList.add('calendar-table__cell-day_selected-period')
        } else {
          calendarTableDays[i+daysOffset].classList.remove('calendar-table__cell-day_selected-period')
        }

        calendarTableDays[i+daysOffset].textContent = i+1
      }
      //Creating text fot month
      let textMonth = monthList[month]
      let textMonthYear = textMonth + ' ' + year
      calendarMonthYear.textContent = textMonthYear;
      //Creating text for controls text
      controlsDatePickerStartText.textContent = textMonthYear;
    }


    calendarBtnNext.addEventListener('click', function(e) {
      month+=1
      //dateStart=
      if (month>11){
        year+=1;
        month=0;
      }
      renderCalendar(month,year)
    })
    
    calendarBtnPrev.addEventListener('click', function(e) {
      month-=1
      if (month<0){
        year-=1;
        month=11;
      }
      renderCalendar(month,year)
    })

    controlsDatePickerStart.addEventListener('click', function(e) {
      let monthStart = dateStart.getMonth()
      let yearStart = dateStart.getFullYear()

      renderCalendar(monthStart,yearStart)
      if (!calendar.classList.contains('visible')) {;
        calendar.classList.add('visible');
      }
    })

    controlsDatePickerEnd.addEventListener('click', function(e) {
      let monthEnd = dateEnd.getMonth()
      let yearEnd = dateEnd.getFullYear()

      renderCalendar(monthEnd,yearEnd)
      if (!calendar.classList.contains('visible')) {;
        calendar.classList.add('visible');
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
              dateStart = new Date(year,month,dayStart+1)
              dateEnd = new Date(year,month,dayEnd+1)
              firstClick=false;
            }else{
              dayEnd= idx-daysOffset;
              dateEnd = new Date(year,month,dayEnd+1)
              firstClick=true;
            }
          } 
        renderCalendar(month,year)
        }
      })
    });
  