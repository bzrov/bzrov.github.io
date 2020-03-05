const rowsNumberText = document.querySelector('.table-navigation__rows-amount')
const rowsNumberList = document.querySelector('#table-navigation__rows-amount-list_top');
const rowsNumberListDown = document.querySelector('#table-navigation__rows-amount-list_bottom');
const rowsNumberItems = document.querySelectorAll('.rows-amount-list__item');
const rowsNumber = document.querySelector('#table-navigation__rows-amount_top');
const rowsArrow = document.querySelector('#table-navigation__rows-amount-btn_top');
const rowsNumberDown = document.querySelector('#table-navigation__rows-amount_bottom');
const rowsArrowDown = document.querySelector('#table-navigation__rows-amount-btn_bottom');

const tableMobileItems = document.querySelectorAll('.table-mobile__cell')

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

//ROWS NUMBER HANDLERS
rowsNumber.addEventListener('click', function() {
  
  if (!rowsArrow.classList.contains('table-navigation__rows-amount-btn_open') && !rowsNumberList.classList.contains('visible')) {
    rowsArrow.classList.add('table-navigation__rows-amount-btn_open');
    rowsNumberList.classList.add('visible');
    /* Conditions to close other control-item elements */
    tableFilterListIndexOpened!==undefined && tableFilterListIndexOpened!==null && tableFilterLists[tableFilterListIndexOpened].classList.remove('visible')
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




tableNavDownFixed.addEventListener('touchmove', function(e) {
  e.preventDefault();
}, false);

/* Clicking outside of popup to close and deselect */
window.addEventListener('click', function(event) {
  let target = event.target;
  let clickedRowsArrow = target.closest('#table-navigation__rows-amount-btn_top');
  let clickedRowsNumber = target.closest('#table-navigation__rows-amount_top');
  let clickedRowsNumberDown = target.closest('#table-navigation__rows-amount_bottom');
  let clickedRowsArrowDown = target.closest('#table-navigation__rows-amount-btn_bottom');
  let clickedTableMobileSort = target.closest('.table-navigation-mobile__sort');
  let clickedTableFilerBtn = target.closest('.table__filter-btn');
  let clickedTableFilerList = target.closest('.table__filter-list');

  !clickedTableFilerList && !clickedTableFilerBtn && tableFilterListIndexOpened!==undefined && tableFilterListIndexOpened!==null && tableFilterLists[tableFilterListIndexOpened].classList.remove('visible')

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

});
