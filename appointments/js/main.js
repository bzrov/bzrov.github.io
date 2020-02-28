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
          tableFilterList =  e.currentTarget.parentNode.querySelector('.table__filter-list')
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

      