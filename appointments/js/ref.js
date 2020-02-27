'use strict'

const mode = document.querySelector('.callList__controls-mode');
const setting = document.querySelector('.callList__controls-setting');
const settingList = document.querySelector('.callList__controls-setting_list');
const settingList_1 = document.querySelector('.callList__controls-setting_list-1');
const settingList_2 = document.querySelector('.callList__controls-setting_list-2');
const settingItems_1 = document.querySelectorAll('.callList__controls-setting_list-1 .callList__controls-setting_item');
const settingItems_2 = document.querySelectorAll('.callList__controls-setting_list-2 .callList__controls-setting_item');
const settingItems = document.querySelectorAll('.callList__controls-setting_item');
const modeList = document.querySelector('.callList__controls-mode_list');
const modeItems = document.querySelectorAll('.callList__controls-mode_item');
const modeText = document.querySelector('.callList__controls-mode_text');
const period = document.querySelector('.callList__controls-period');
const periodList = document.querySelector('.callList__controls-period_list');
const periodItems = document.querySelectorAll('.callList__controls-period_item');
const periodText = document.querySelector('.callList__controls-period_text > span');
const search_call = document.querySelector('.callList__controls-search');
const searchInput_call = document.querySelector('.callList__controls-search_input');
const controlsItems = document.querySelectorAll('.callList__controls-item');
const controls = document.querySelector('.callList__controls');
const controlsLeftBlock = document.querySelector('.callList__controls-leftBlock');
const popups = document.querySelectorAll('.callList__controls-popup');
const tags = document.querySelectorAll('.callList__tags-block_tag');
const tagsBlock = document.querySelector('.callList__tags');
const rowsNumberRest = document.querySelector('.callList__table-navigate_rest > span:first-child');
const tagsMobile = document.querySelector('.callList__tags-mobile');
const tagsMobileBlock = document.querySelector('.callList__tags-block_mobile');
const rowsNumberList = document.querySelector('#navigate-numberList-up');
const rowsNumberListDown = document.querySelector('#navigate-numberList-down');
const rowsNumberItems = document.querySelectorAll('.callList__table-navigate_number-item');
const rowsNumber = document.querySelector('#navigate-number-up');
const rowsArrow = document.querySelector('#navigate-arrow-up');
const rowsNumberDown = document.querySelector('#navigate-number-down');
const rowsArrowDown = document.querySelector('#navigate-arrow-down');
const monthRowLeft = document.querySelector('.callList__controls-dating_calendar-month:before');
const callList = document.querySelector('.callList');
const tableBlock = document.querySelector('.callList__table-block');

const datingControls = document.querySelector('.callList__controls-dating');
const datingCalendar = document.querySelector('.callList__controls-dating_calendar');
const monthDays = document.querySelectorAll('.callList__controls-dating_calendar-rowDays td');


/* Mode clicking select */
mode.addEventListener('click', function() {
  if (!mode.classList.contains('open')) {
    mode.classList.add('open');
    modeList.classList.add('visible');

    /* Conditions to close other control-item elements */
    if (setting.classList.contains('open') && settingList.classList.contains('visible')) {
      setting.classList.remove('open');
      settingList.classList.remove('visible');
    }
    if (search_call.classList.contains('open') && searchInput_call.classList.contains('active')) {
      search_call.classList.remove('open');
      searchInput_call.classList.remove('active')
    }
    if (controls.classList.contains('tablet')) { controls.classList.remove('tablet'); }
    if (controlsLeftBlock.classList.contains('mobile')) { controlsLeftBlock.classList.remove('mobile'); }
    if (tagsMobile.classList.contains('open') && tagsMobileBlock.classList.contains('visible')) {
      tagsMobile.classList.remove('open');
      tagsMobileBlock.classList.remove('visible');
    }
    if (period.classList.contains('open') && periodList.classList.contains('visible')) {
      period.classList.remove('open');
      periodList.classList.remove('visible');
    }
    if (datingCalendar.classList.contains('visible')) { datingCalendar.classList.remove('visible'); }
    /* ----- */

  } else {
    mode.classList.remove('open');
    modeList.classList.remove('visible');
  }
});

for (let i = 0; i < modeItems.length; i++) {
  modeItems[i].addEventListener('click', function() {
    if (!modeItems[i].classList.contains('selected')) { modeItems[i].classList.add('selected'); }
    for (let j = i - 1; j >=0; j--) {
      if (modeItems[j].classList.contains('selected')) { modeItems[j].classList.remove('selected'); }
    }
    for (let k = i + 1; k < modeItems.length; k++) {
      if (modeItems[k].classList.contains('selected')) { modeItems[k].classList.remove('selected'); }
    }
    let itemText = modeItems[i].textContent;
    modeText.textContent = itemText;
  });
}
/* -------------------------------------------------------- */

/* Setting Clicking List Items */
setting.addEventListener('click', function() {
  if (!setting.classList.contains('open')) {
    setting.classList.add('open');
    settingList.classList.add('visible');

    /* Conditions to close other control-item elements */
    if (mode.classList.contains('open') && settingList.classList.contains('visible')) {
      mode.classList.remove('open');
      modeList.classList.remove('visible');
    }
    if (search_call.classList.contains('open') && searchInput_call.classList.contains('active')) {
      search_call.classList.remove('open');
      searchInput_call.classList.remove('active')
    }
    if (controls.classList.contains('tablet')) { controls.classList.remove('tablet'); }
    if (controlsLeftBlock.classList.contains('mobile')) { controlsLeftBlock.classList.remove('mobile'); }
    if (tagsMobile.classList.contains('open') && tagsMobileBlock.classList.contains('visible')) {
      tagsMobile.classList.remove('open');
      tagsMobileBlock.classList.remove('visible');
    }
    if (period.classList.contains('open') && periodList.classList.contains('visible')) {
      period.classList.remove('open');
      periodList.classList.remove('visible');
    }
    if (datingCalendar.classList.contains('visible')) { datingCalendar.classList.remove('visible'); }
    /* ----- */

  } 
  else {
    setting.classList.remove('open');
    settingList.classList.remove('visible');
  }
});

for (let settingItem of settingItems) {
  settingItem.addEventListener('click', function() {
    if (setting.classList.contains('open') && settingList.classList.contains('visible')) {
      !setting.classList.remove('open');
      !settingList.classList.remove('visible');  
    }
  });
}

for (let i = 0; i < settingItems_1.length; i++) {
  settingItems_1[i].addEventListener('click', function() {
    if (!settingItems_1[i].classList.contains('selected')) { settingItems_1[i].classList.add('selected'); }
    for (let j = i - 1; j >=0; j--) {
      if (settingItems_1[j].classList.contains('selected')) { settingItems_1[j].classList.remove('selected'); }
    }
    for (let k = i + 1; k < settingItems_1.length; k++) {
      if (settingItems_1[k].classList.contains('selected')) { settingItems_1[k].classList.remove('selected'); }
    }
  });
}

for (let i = 0; i < settingItems_2.length; i++) {
  settingItems_2[i].addEventListener('click', function() {
    if (!settingItems_2[i].classList.contains('selected')) { settingItems_2[i].classList.add('selected'); }
    for (let j = i - 1; j >=0; j--) {
      if (settingItems_2[j].classList.contains('selected')) { settingItems_2[j].classList.remove('selected'); }
    }
    for (let k = i + 1; k < settingItems_2.length; k++) {
      if (settingItems_2[k].classList.contains('selected')) { settingItems_2[k].classList.remove('selected'); }
    }
  });
}
/* -------------------------------------------------------- */

/* Search Button Click Input */
search_call.addEventListener('click', function() {
  if (!search_call.classList.contains('open')) {
    search_call.classList.add('open');
    searchInput_call.classList.add('active');
    // searchInput_call.classList.add('mobile');
    controls.classList.add('tablet');
    controlsLeftBlock.classList.add('mobile');

    /* Conditions to close other control-item elements */
    if (mode.classList.contains('open') && settingList.classList.contains('visible')) {
      mode.classList.remove('open');
      modeList.classList.remove('visible');
    }
    if (setting.classList.contains('open') && settingList.classList.contains('visible')) {
      setting.classList.remove('open');
      settingList.classList.remove('visible');
    }
    // if (search_call.classList.contains('open') && searchInput_call.classList.contains('active')) {
    //   search_call.classList.remove('open');
    //   searchInput_call.classList.remove('active')
    // }
    // if (controls.classList.contains('tablet')) { controls.classList.remove('tablet'); }
    // if (controlsLeftBlock.classList.contains('mobile')) { controlsLeftBlock.classList.remove('mobile'); }
    if (tagsMobile.classList.contains('open') && tagsMobileBlock.classList.contains('visible')) {
      tagsMobile.classList.remove('open');
      tagsMobileBlock.classList.remove('visible');
    }
    if (period.classList.contains('open') && periodList.classList.contains('visible')) {
      period.classList.remove('open');
      periodList.classList.remove('visible');
    }
    if (datingCalendar.classList.contains('visible')) { datingCalendar.classList.remove('visible'); }
    /* ----- */


  } else {
    search_call.classList.remove('open');
    searchInput_call.classList.remove('active');
    searchInput_call.classList.remove('mobile');
    controls.classList.remove('tablet');
    controlsLeftBlock.classList.remove('mobile');
  }

});
/* -------------------------------------------------------- */



/* Tags Click Selected */
tags.forEach(tag => {
  if(tag) {
    tag.addEventListener('click', function() {
      if (!tag.classList.contains('selected')) {
        tag.classList.add('selected');
      }
      else { tag.classList.remove('selected'); }
    });
  }
});
/* ----------------------------------------------------- */

/* Tags-mobile Click Open */
tagsMobile.addEventListener('click', function() {
  if (!tagsMobile.classList.contains('open') && !tagsMobileBlock.classList.contains('visible')) {
    tagsMobile.classList.add('open');
    tagsMobileBlock.classList.add('visible');

    /* Conditions to close other control-item elements */
    if (mode.classList.contains('open') && settingList.classList.contains('visible')) {
      mode.classList.remove('open');
      modeList.classList.remove('visible');
    }
    if (setting.classList.contains('open') && settingList.classList.contains('visible')) {
      setting.classList.remove('open');
      settingList.classList.remove('visible');
    }
    if (search_call.classList.contains('open') && searchInput_call.classList.contains('active')) {
      search_call.classList.remove('open');
      searchInput_call.classList.remove('active')
    }
    if (controls.classList.contains('tablet')) { controls.classList.remove('tablet'); }
    if (controlsLeftBlock.classList.contains('mobile')) { controlsLeftBlock.classList.remove('mobile'); }
    // if (tagsMobile.classList.contains('open') && tagsMobileBlock.classList.contains('visible')) {
    //   tagsMobile.classList.remove('open');
    //   tagsMobileBlock.classList.remove('visible');
    // }
    if (period.classList.contains('open') && periodList.classList.contains('visible')) {
      period.classList.remove('open');
      periodList.classList.remove('visible');
    }
    if (datingCalendar.classList.contains('visible')) { datingCalendar.classList.remove('visible'); }
    /* ----- */

  } else {
    tagsMobile.classList.remove('open');
    tagsMobileBlock.classList.remove('visible');
  }

});
/* -------------------------------------------------------- */

/* Prevent close tags-mobile block by clicking a tag */
for (let tag of tags) {
  tag.addEventListener('click', function() {
    if (tagsMobile.classList.contains('open') && tagsMobileBlock.classList.contains('visible')) {
      !tagsMobile.classList.remove('open');
      !tagsMobileBlock.classList.remove('visible');
    }
  });
}
/* -------------------------------------------------------- */

/* Period clicking Item select */
period.addEventListener('click', function() {
  if (!period.classList.contains('open')) {
    period.classList.add('open');
    periodList.classList.add('visible');

    /* Conditions to close other control-item elements */
    if (mode.classList.contains('open') && settingList.classList.contains('visible')) {
      mode.classList.remove('open');
      modeList.classList.remove('visible');
    }
    if (setting.classList.contains('open') && settingList.classList.contains('visible')) {
      setting.classList.remove('open');
      settingList.classList.remove('visible');
    }
    if (search_call.classList.contains('open') && searchInput_call.classList.contains('active')) {
      search_call.classList.remove('open');
      searchInput_call.classList.remove('active')
    }
    if (controls.classList.contains('tablet')) { controls.classList.remove('tablet'); }
    if (controlsLeftBlock.classList.contains('mobile')) { controlsLeftBlock.classList.remove('mobile'); }
    if (tagsMobile.classList.contains('open') && tagsMobileBlock.classList.contains('visible')) {
      tagsMobile.classList.remove('open');
      tagsMobileBlock.classList.remove('visible');
    }
    // if (period.classList.contains('open') && periodList.classList.contains('visible')) {
    //   period.classList.remove('open');
    //   periodList.classList.remove('visible');
    // }
    if (datingCalendar.classList.contains('visible')) { datingCalendar.classList.remove('visible'); }
    /* ----- */

  } else {
    period.classList.remove('open');
    periodList.classList.remove('visible');
  }
});

for (let i = 0; i < periodItems.length; i++) {
  periodItems[i].addEventListener('click', function() {
    if (!periodItems[i].classList.contains('selected')) { periodItems[i].classList.add('selected'); }
    for (let j = i - 1; j >=0; j--) {
      if (periodItems[j].classList.contains('selected')) { periodItems[j].classList.remove('selected'); }
    }
    for (let k = i + 1; k < periodItems.length; k++) {
      if (periodItems[k].classList.contains('selected')) { periodItems[k].classList.remove('selected'); }
    }
    let itemText = periodItems[i].textContent;
    periodText.textContent = itemText;
  });
}
/* -------------------------------------------------------- */


/* Clicking Table Navigate Arrow to show Number Arrows */
rowsNumber.addEventListener('click', function() {
  if (!rowsArrow.classList.contains('open') && !rowsNumberList.classList.contains('show')) {
    rowsArrow.classList.add('open');
    rowsNumberList.classList.add('show');
    rowsArrowDown.classList.remove('open');
    rowsNumberListDown.classList.remove('show');
  } else {
    rowsArrow.classList.remove('open');
    rowsNumberList.classList.remove('show');
  }
});

rowsArrow.addEventListener('click', function() {
  if (!rowsArrow.classList.contains('open') && !rowsNumberList.classList.contains('show')) {
    rowsArrow.classList.add('open');
    rowsNumberList.classList.add('show');
    rowsArrowDown.classList.remove('open');
    rowsNumberListDown.classList.remove('show');
  } else {
    rowsArrow.classList.remove('open');
    rowsNumberList.classList.remove('show');
  }
});

rowsNumberDown.addEventListener('click', function() {
  if (!rowsArrowDown.classList.contains('open') && !rowsNumberListDown.classList.contains('show')) {
    rowsArrowDown.classList.add('open');
    rowsNumberListDown.classList.add('show');
    rowsArrow.classList.remove('open');
    rowsNumberList.classList.remove('show');
  } else {
    rowsArrowDown.classList.remove('open');
    rowsNumberListDown.classList.remove('show');
  }
});
rowsArrowDown.addEventListener('click', function() {
  if (!rowsArrowDown.classList.contains('open') && !rowsNumberListDown.classList.contains('show')) {
    rowsArrowDown.classList.add('open');
    rowsNumberListDown.classList.add('show');
    rowsArrow.classList.remove('open');
    rowsNumberList.classList.remove('show');
  } else {
    rowsArrowDown.classList.remove('open');
    rowsNumberListDown.classList.remove('show');
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
    rowsArrow.classList.remove('open');
    rowsNumberList.classList.remove('show');
    rowsArrowDown.classList.remove('open');
    rowsNumberListDown.classList.remove('show');
  });
}
/* -------------------------------------------------------- */

/* Calendar visible clicking */
datingControls.addEventListener('click', function() {
  if (!datingCalendar.classList.contains('visible')) {
    datingCalendar.classList.add('visible');

    /* Conditions to close other control-item elements */
    if (mode.classList.contains('open') && settingList.classList.contains('visible')) {
      mode.classList.remove('open');
      modeList.classList.remove('visible');
    }
    if (setting.classList.contains('open') && settingList.classList.contains('visible')) {
      setting.classList.remove('open');
      settingList.classList.remove('visible');
    }
    if (search_call.classList.contains('open') && searchInput_call.classList.contains('active')) {
      search_call.classList.remove('open');
      searchInput_call.classList.remove('active')
    }
    if (controls.classList.contains('tablet')) { controls.classList.remove('tablet'); }
    if (controlsLeftBlock.classList.contains('mobile')) { controlsLeftBlock.classList.remove('mobile'); }
    if (tagsMobile.classList.contains('open') && tagsMobileBlock.classList.contains('visible')) {
      tagsMobile.classList.remove('open');
      tagsMobileBlock.classList.remove('visible');
    }
    if (period.classList.contains('open') && periodList.classList.contains('visible')) {
      period.classList.remove('open');
      periodList.classList.remove('visible');
    }
    // if (datingCalendar.classList.contains('visible')) { datingCalendar.classList.remove('visible'); }
    /* ----- */
  }
});
/* --------------------------------------------------------- */

/* Days clicking select */
for (let i = 0; i < monthDays.length; i++) {
  monthDays[i].addEventListener('click', function() {
    if (monthDays[i].textContent === '') { return; }
    if (!monthDays[i].classList.contains('selected')) { monthDays[i].classList.add('selected'); }
    else { monthDays[i].classList.remove('selected'); }
  });
}
/* -------------------------------------------------------- */

/* Clicking outside of popup to close and deselect */
window.addEventListener('click', function(event) {
  let target = event.target;
  let controlItem = target.closest('.callList__controls-item');
  let tableNumberBlock = target.closest('.callList__table-navigate_leftBlock');
  let datingControls = target.closest('.callList__controls-dating');
  let searchControl = target.closest('.callList__controls-search');
  let searchInput = target.closest('.callList__controls-search_input');
  // let tagsMobileBlock = target.closest('.callList__tags-block_mobile');
  
  if (datingControls) { return; }


  /* For Controls Button */
  if (controlItem) { return; }
  else {
    for (let controlsItem of controlsItems) {
      if (controlsItem.classList.contains('open')) { controlsItem.classList.remove('open'); }
    }
    for (let popup of popups) {
      if (popup.classList.contains('visible')) { popup.classList.remove('visible'); }
    }
    if (searchInput) { return; }
    else {
      if (controls.classList.contains('tablet')) { controls.classList.remove('tablet'); }
      if (controlsLeftBlock.classList.contains('mobile')) { controlsLeftBlock.classList.remove('mobile'); }
    }
  }

  /* For search-input */
  if (target === searchInput_call) { return; }
  else {
    if (searchInput_call.classList.contains('active')) { searchInput_call.classList.remove('active'); }
  }

  /* For popup rows number of the table */
  if (tableNumberBlock) { return; }
  else {
    if (rowsArrow.classList.contains('open') && rowsNumberList.classList.contains('show')) {
      rowsArrow.classList.remove('open');
      rowsNumberList.classList.remove('show');
    }
    if (rowsArrowDown.classList.contains('open') && rowsNumberListDown.classList.contains('show')) {
      rowsArrowDown.classList.remove('open');
      rowsNumberListDown.classList.remove('show');
    }
  }

});
/* -------------------------------------------------------- */
