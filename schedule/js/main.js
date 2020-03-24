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
const boardHourSelectBtnApply = document.querySelector('.controls__board-hour-select-btn-apply') 
const boardHourSelectItemsStart = document.querySelector('.controls__board-hour-select-select_start')
const boardHourSelectItemsEnd = document.querySelector('.controls__board-hour-select-select_end')
const boardHourSelectOptionItemsStart = document.querySelectorAll('.controls__board-hour-option_start')
const boardHourSelectOptionItemsEnd = document.querySelectorAll('.controls__board-hour-option_end')
const boardHourSelectTextStart = document.querySelector('.controls__board-hour-select-text_start')
const boardHourSelectTextEnd = document.querySelector('.controls__board-hour-select-text_end')
const boardHourSelectFieldEnd = document.querySelector('.controls__board-hour-select-field_end')

const calendar = document.querySelector('.calendar')
const calendarTableDays = document.querySelectorAll('.calendar-table__cell-day')
const calendarMonthYear = document.querySelector('.calendar__month')
const calendarBtnNext = document.querySelector('.calendar__controll_next')
const calendarBtnPrev = document.querySelector('.calendar__controll_prev')
const controlsDatePicker = document.querySelector('.controls__date-picker-item')

const controlsDatePickerText = document.querySelector('.controls__date-picker-date')
const controlsDateSelectPrev = document.querySelector('.controls__date-select-prev')
const controlsDateSelectNext = document.querySelector('.controls__date-select-next')

const controlsReloadBtn = document.querySelector('.controls__reload-btn')

const popupWindow =  document.querySelector('.popup-window')
const popupOverlay = document.querySelector('.popup-window__overlay')

const dragAndDropConfirmationPopup = document.querySelector('.drag-and-drop-confirmation-popup')
const dragAndDropConfirmationBtnConfirm = document.querySelector('.drag-and-drop-confirmation__confirm-btn')
const dragAndDropConfirmationBtnDeny = document.querySelector('.drag-and-drop-confirmation__deny-btn')
const dragAndDropConfirmationQuestionServiceResourceNotification = document.querySelector('.drag-and-drop-confirmation__questions-item_service-resource-notification')
const dragAndDropConfirmationQuestionClientInformed = document.querySelector('.drag-and-drop-confirmation__questions-item_client-informed [type=checkbox]')
const dragAndDropConfirmationQuestionServiceResourceInformed = document.querySelector('.drag-and-drop-confirmation__questions-item_service-resource-informed [type=checkbox]')
const dragAndDropConfirmationJobNumber = document.querySelector('.drag-and-drop-confirmation__job-number') 
const dragAndDropConfirmationServiceResourceNicknameOld = document.querySelector('.drag-and-drop-confirmation__service-resource-nickname-old')
const dragAndDropConfirmationServiceResourceNicknameNew = document.querySelector('.drag-and-drop-confirmation__service-resource-nickname-new')
const dragAndDropConfirmationDateOld = document.querySelector('.drag-and-drop-confirmation__date-old') 
const dragAndDropConfirmationDateNew = document.querySelector('.drag-and-drop-confirmation__date-new') 
const dragAndDropConfirmationQuestionsItemsCheckbox = document.querySelectorAll('.questions-item__checkbox')

const appointmentSendNotificationConfirmationPopup = document.querySelector('.appointment-send-notification-confirmation-popup')
const appointmentSendNotificationConfirmationDenyBtn = document.querySelector('.appointment-send-notification-confirmation__deny-btn')
const appointmentSendNotificationConfirmationConfirmBtn = document.querySelector('.appointment-send-notification-confirmation__confirm-btn')

const appointmentRescheduleConfirmationPopup = document.querySelector('.appointment-reschedule-confirmation-popup')
const appointmentRescheduleConfirmationBtnConfirm = document.querySelector('.appointment-reschedule-confirmation__confirm-btn')
const appointmentRescheduleConfirmationBtnDeny = document.querySelector('.appointment-reschedule-confirmation__deny-btn')
const appointmentRescheduleConfirmationQuestionServiceResourceNotification = document.querySelector('.appointment-reschedule-confirmation__questions-item_service-resource-notification')
const appointmentRescheduleConfirmationQuestionClientInformed = document.querySelector('.appointment-reschedule-confirmation__questions-item_client-informed [type=checkbox]')
const appointmentRescheduleConfirmationQuestionServiceResourceInformed = document.querySelector('.appointment-reschedule-confirmation__questions-item_service-resource-informed [type=checkbox]')
const appointmentRescheduleConfirmationJobNumber = document.querySelector('.appointment-reschedule-confirmation__job-number') 
const appointmentRescheduleConfirmationServiceResourceNicknameOld = document.querySelector('.appointment-reschedule-confirmation__service-resource-nickname-old')
const appointmentRescheduleConfirmationServiceResourceNicknameNew = document.querySelector('.appointment-reschedule-confirmation__service-resource-nickname-new')
const appointmentRescheduleConfirmationDateOld = document.querySelector('.appointment-reschedule-confirmation__date-old') 
const appointmentRescheduleConfirmationDateNew = document.querySelector('.appointment-reschedule-confirmation__date-new') 
const appointmentRescheduleConfirmationQuestionsItemsCheckbox = document.querySelectorAll('.questions-item__checkbox')
const appointmentRescheduleConfirmationServiceResources = document.querySelector('.appointment-reschedule-confirmation__service-resources')
const appointmentRescheduleConfirmationServiceResourcesBtn = document.querySelector('.appointment-reschedule-confirmation__service-resources-btn')
const appointmentRescheduleConfirmationServiceResourcesText = document.querySelector('.appointment-reschedule-confirmation__service-resources-text')

const appointmentRescheduleConfirmationHourSelectItemsStart = document.querySelector('.appointment-reschedule-confirmation__hour-select-select_start')
const appointmentRescheduleConfirmationHourSelectItemsEnd = document.querySelector('.appointment-reschedule-confirmation__hour-select-select_end')
const appointmentRescheduleConfirmationHourSelectOptionItemsStart = document.querySelectorAll('.appointment-reschedule-confirmation__hour-option_start')
const appointmentRescheduleConfirmationHourSelectOptionItemsEnd = document.querySelectorAll('.appointment-reschedule-confirmation__hour-option_end')
const appointmentRescheduleConfirmationHourSelectTextStart = document.querySelector('.appointment-reschedule-confirmation__hour-select-text_start')
const appointmentRescheduleConfirmationHourSelectTextEnd = document.querySelector('.appointment-reschedule-confirmation__hour-select-text_end')
const appointmentRescheduleConfirmationBoardHourSelectFieldEnd = document.querySelector('.appointment-reschedule-confirmation__board-hour-select-field_end')

const appointmentRescheduleConfirmationCalendar = document.querySelector('.appointment-reschedule-confirmation-calendar')
const appointmentRescheduleConfirmationCalendarTableDays = document.querySelectorAll('.appointment-reschedule-confirmation-calendar-table__cell-day')
const appointmentRescheduleConfirmationCalendarMonthYear = document.querySelector('.appointment-reschedule-confirmation-calendar__month')
const appointmentRescheduleConfirmationCalendarBtnNext = document.querySelector('.appointment-reschedule-confirmation-calendar__controll_next')
const appointmentRescheduleConfirmationCalendarBtnPrev = document.querySelector('.appointment-reschedule-confirmation-calendar__controll_prev')
const appointmentRescheduleConfirmationDatePicker = document.querySelector('.appointment-reschedule-confirmation-controls__date-picker-item')
const appointmentRescheduleConfirmationDatePickerText = document.querySelector('.appointment-reschedule-confirmation-controls__date-picker-date')

const appointmentCancelConfirmationPopup = document.querySelector('.appointment-cancel-confirmation-popup')
const appointmentCancelConfirmationBtnConfirm = document.querySelector('.appointment-cancel-confirmation__confirm-btn')
const appointmentCancelConfirmationBtnDeny = document.querySelector('.appointment-cancel-confirmation__deny-btn')
const appointmentCancelConfirmationQuestionServiceResourceNotification = document.querySelector('.appointment-cancel-confirmation__questions-item_service-resource-notification')
const appointmentCancelConfirmationQuestionClientInformed = document.querySelector('.appointment-cancel-confirmation__questions-item_client-informed [type=checkbox]')
const appointmentCancelConfirmationQuestionServiceResourceInformed = document.querySelector('.appointment-cancel-confirmation__questions-item_service-resource-informed [type=checkbox]')
const appointmentCancelConfirmationJobNumber = document.querySelector('.appointment-cancel-confirmation__job-number') 
const appointmentCancelConfirmationServiceResourceNickname = document.querySelector('.appointment-cancel-confirmation__service-resource-nickname')
const appointmentCancelConfirmationDate = document.querySelector('.appointment-cancel-confirmation__date') 
const appointmentCancelConfirmationQuestionsItemsCheckbox = document.querySelectorAll('.questions-item__checkbox')
const appointmentCancelConfirmationQuestionsItemCancelReasonTextarea = document.querySelector('.appointment-cancel-confirmation__questions-item_cancel-reason-textarea')

const absenceCancelConfirmationPopup = document.querySelector('.absence-cancel-confirmation-popup')
const absenceCancelConfirmationBtnConfirm = document.querySelector('.absence-cancel-confirmation__confirm-btn')
const absenceCancelConfirmationBtnDeny = document.querySelector('.absence-cancel-confirmation__deny-btn')
const absenceCancelConfirmationQuestionServiceResourceInformed = document.querySelector('.absence-cancel-confirmation__questions-item_service-resource-informed [type=checkbox]')
const absenceCancelConfirmationJobNumber = document.querySelector('.absence-cancel-confirmation__job-number') 
const absenceCancelConfirmationServiceResourceNickname = document.querySelector('.absence-cancel-confirmation__service-resource-nickname')
const absenceCancelConfirmationQuestionsItemsCheckbox = document.querySelectorAll('.questions-item__checkbox')
const absenceCancelConfirmationQuestionsItemCancelReasonTextarea = document.querySelector('.absence-cancel-confirmation__questions-item_cancel-reason-textarea')
const absenceCancelConfirmationDateFrom = document.querySelector('.absence-cancel-confirmation__date_from')
const absenceCancelConfirmationDateTo = document.querySelector('.absence-cancel-confirmation__date_to')
const absenceCancelConfirmationCancelFailed = document.querySelector('.absence-cancel-confirmation__cancel-failed')


const absenceChangeConfirmationCalendar = document.querySelector('.absence-change-confirmation-calendar')
const absenceChangeConfirmationCalendarTableDays = document.querySelectorAll('.absence-change-confirmation-calendar-table__cell-day')
const absenceChangeConfirmationCalendarMonthYear = document.querySelector('.absence-change-confirmation-calendar__month')
const absenceChangeConfirmationCalendarBtnNext = document.querySelector('.absence-change-confirmation-calendar__controll_next')
const absenceChangeConfirmationCalendarBtnPrev = document.querySelector('.absence-change-confirmation-calendar__controll_prev')

const absenceChangeConfirmationDatePickerStart = document.querySelector('.absence-change-confirmation-controls__date-picker-item_start')
const absenceChangeConfirmationDatePickerTextStart = document.querySelector('.absence-change-confirmation-controls__date-picker-date_start')

const absenceChangeConfirmationDatePickerEnd = document.querySelector('.absence-change-confirmation-controls__date-picker-item_end')
const absenceChangeConfirmationDatePickerTextEnd = document.querySelector('.absence-change-confirmation-controls__date-picker-date_end')

const absenceChangeConfirmationPopup = document.querySelector('.absence-change-confirmation-popup')
const absenceChangeConfirmationBtnConfirm = document.querySelector('.absence-change-confirmation__confirm-btn')
const absenceChangeConfirmationBtnDeny = document.querySelector('.absence-change-confirmation__deny-btn')
const absenceChangeConfirmationQuestionServiceResourceInformed = document.querySelector('.absence-change-confirmation__questions-item_service-resource-informed [type=checkbox]')
const absenceChangeConfirmationServiceResourceNickname = document.querySelector('.absence-change-confirmation__service-resource-nickname')
const absenceChangeConfirmationDateFrom = document.querySelector('.absence-change-confirmation__date_from') 
const absenceChangeConfirmationDateTo = document.querySelector('.absence-change-confirmation__date_to') 
const absenceChangeConfirmationQuestionsItemsCheckbox = document.querySelectorAll('.questions-item__checkbox')
const absenceChangeConfirmationDateFailed = document.querySelector('.absence-change-confirmation__date-failed')

const absenceChangeConfirmationHourSelectItemsStart = document.querySelector('.absence-change-confirmation__hour-select-select_start')
const absenceChangeConfirmationHourSelectItemsEnd = document.querySelector('.absence-change-confirmation__hour-select-select_end')
const absenceChangeConfirmationHourSelectOptionItemsStart = document.querySelectorAll('.absence-change-confirmation__hour-option_start')
const absenceChangeConfirmationHourSelectOptionItemsEnd = document.querySelectorAll('.absence-change-confirmation__hour-option_end')
const absenceChangeConfirmationHourSelectTextStart = document.querySelector('.absence-change-confirmation__hour-select-text_start')
const absenceChangeConfirmationHourSelectTextEnd = document.querySelector('.absence-change-confirmation__hour-select-text_end')
const absenceChangeConfirmationBoardHourSelectFieldEnd = document.querySelector('.absence-change-confirmation__board-hour-select-field_end')

const appointmentHover = document.querySelector('.appointment-hover')
const appointmentHoverJobNumber = document.querySelector('.appointment-hover__job-number')
const appointmentHoverJobInfo = document.querySelector('.appointment-hover__job-info')
const appointmentHoverZip = document.querySelector('.appointment-hover__zip')

const appointmentDropList = document.querySelector('.appointment-drop-list')
const appointmentDropListItemSendNotification = document.querySelector('.appointment-drop-list__item-send-notification')
const appointmentDropListItemReschedule = document.querySelector('.appointment-drop-list__item-reschedule')
const appointmentDropListItemCancel = document.querySelector('.appointment-drop-list__item-cancel')

const absenceDropList = document.querySelector('.absence-drop-list')
const absenceDropListItemChange = document.querySelector('.absence-drop-list__item-change')
const absenceDropListItemCancel= document.querySelector('.absence-drop-list__item-cancel')

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
let datePicked =  new Date();

let dayPicked = datePicked.getDate()-1
let daysOffset = 0;
let daysInMonth;

let appointmentRescheduleConfirmationDate = new Date();

let appointmentRescheduleConfirmationDay = appointmentRescheduleConfirmationDate.getDate();
let appointmentRescheduleConfirmationMonth = appointmentRescheduleConfirmationDate.getMonth();
let appointmentRescheduleConfirmationYear = appointmentRescheduleConfirmationDate.getFullYear();
let appointmentRescheduleConfirmationDaysOffset = 0;
let appointmentRescheduleConfirmationDaysInMonth;

let absenceChangeConfirmationDate = new Date();

let absenceChangeConfirmationDay = appointmentRescheduleConfirmationDate.getDate();
let absenceChangeConfirmationMonth = appointmentRescheduleConfirmationDate.getMonth();
let absenceChangeConfirmationYear = appointmentRescheduleConfirmationDate.getFullYear();
let absenceChangeConfirmationDaysOffset = 0;
let absenceChangeConfirmationDaysInMonth;


const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const weekShortDays = ['Sun','Mon','Tue',"Wed",'Thu','Fri','Sat']
const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthShortList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];


let daysAmountValue;
let timelineStep;

let appointmentRescheduleConfirmationHourStart;
let appointmentRescheduleConfirmationHourEnd;

let appointmentRescheduleConfirmationHourStartTemp;
let appointmentRescheduleConfirmationHourEndTemp;
let appointmentRescheduleConfirmationMinsStartTemp; 
let appointmentRescheduleConfirmationMinsEndTemp; 

let absenceChangeConfirmationHourStart;
let absenceChangeConfirmationHourEnd;

let absenceChangeConfirmationHourStartTemp;
let absenceChangeConfirmationHourEndTemp;
let absenceChangeConfirmationMinsStartTemp; 
let absenceChangeConfirmationMinsEndTemp; 

let absenceChangeConfirmationDateStartPicked;
let absenceChangeConfirmationDateEndPicked;
let absenceChangeIsDateStart = true;

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

const converTime = (dateToConvert) =>{ // gives the value in 12 hours format
  const date = new Date(dateToConvert)
  let hours = date.getHours() 
  let AmOrPm = hours >= 12 ? 'pm' : 'am';
  hours = (hours % 12) || 12;
  let minutes = date.getMinutes() ;

  let finalTime =  hours +":"+ (minutes>0?minutes:"00") + AmOrPm;
  return finalTime
}

const getJson = (datePicked,daysAmountValue) =>{
  //Server request//
  //getting new json//
  //тк нет запроса за новый json буду брать исходную json строку//
  let newJson = '{"areas":[{"area_id":"e4t8f013shdyj6yh90","area_name":"Miami, FL","area_timezone":"-4","service_resources":[{"service_resource_id":"e4t8f010shd5gyyh70","service_resource_nickname":"Andre","service_resource_name_surname":"Andrey Dinin","service_resource_function":"Appliance Technician","service_resource_image":"http:\/\/artemiudintsev.com\/getjson\/urlava\/1.jpg"},{"service_resource_id":"e4t8f010sh8fuiyht9","service_resource_nickname":"Mark","service_resource_name_surname":"Marco Rodrigas","service_resource_function":"Appliance Technician","service_resource_image":"http:\/\/artemiudintsev.com\/getjson\/urlava\/2.jpg"}]},{"area_id":"e4t8f013s57yj6yr60","area_name":"Houston, TX","area_timezone":"-5","service_resources":[{"service_resource_id":"e4t8f010shd5ji94r0","service_resource_nickname":"Alan","service_resource_name_surname":"Alan Bilik","service_resource_function":"Appliance Technician","service_resource_image":"http:\/\/artemiudintsev.com\/getjson\/urlava\/3.jpg"},{"service_resource_id":"e4t8f010sh8fu78hy4","service_resource_nickname":"Steve","service_resource_name_surname":"Serge Zondre","service_resource_function":"Appliance Technician","service_resource_image":"http:\/\/artemiudintsev.com\/getjson\/urlava\/4.jpg"}]},{"area_id":"e4t8f013s5yyj6y777","area_name":"Tampa, FL","area_timezone":"-5","service_resources":[{"service_resource_id":"e4t8f010shd5jtt673","service_resource_nickname":"Sam","service_resource_name_surname":"Sam Gartiz","service_resource_function":"Appliance Technician","service_resource_image":"http:\/\/artemiudintsev.com\/getjson\/urlava\/5.jpg"},{"service_resource_id":"e4t8f010shd5jtt573","service_resource_nickname":"Serge","service_resource_name_surname":"Alan Gartiz","service_resource_function":"Appliance Technician","service_resource_image":"http:\/\/artemiudintsev.com\/getjson\/urlava\/5.jpg"},{"service_resource_id":"e4t8f010shd5jt4473","service_resource_nickname":"Dilon","service_resource_name_surname":"Dilon Gartiz","service_resource_function":"Appliance Technician","service_resource_image":"http:\/\/artemiudintsev.com\/getjson\/urlava\/5.jpg"},{"service_resource_id":"e4t8f010shd5jtt663","service_resource_nickname":"Alex","service_resource_name_surname":"Alex Gartiz","service_resource_function":"Appliance Technician","service_resource_image":"http:\/\/artemiudintsev.com\/getjson\/urlava\/5.jpg"},{"service_resource_id":"e4t8f010shd5jtttt3","service_resource_nickname":"Bob","service_resource_name_surname":"Bob Gartiz","service_resource_function":"Appliance Technician","service_resource_image":"http:\/\/artemiudintsev.com\/getjson\/urlava\/5.jpg"},{"service_resource_id":"e4t8f010shd5jtrr73","service_resource_nickname":"Stephen","service_resource_name_surname":"Stephen Gartiz","service_resource_function":"Appliance Technician","service_resource_image":"http:\/\/artemiudintsev.com\/getjson\/urlava\/5.jpg"}]}],"time_slots":{"e4t8f010shd5jtt673":[{"time_slot_type":"temporary","time_slot_start":"March 21, 2020 9:00:00","time_slot_end":"March 21, 2020 11:00:00"},{"time_slot_type":"regular","time_slot_start":"March 21, 2020 10:00:00","time_slot_end":"March 21, 2020 20:00:00"}],"e4t8f010sh8fu78hy4":[{"time_slot_type":"temporary","time_slot_start":"March 21, 2020 9:00:00","time_slot_end":"March 21, 2020 13:00:00"},{"time_slot_type":"regular","time_slot_start":"March 21, 2020 11:00:00","time_slot_end":"March 21, 2020 13:00:00"},{"time_slot_type":"regular","time_slot_start":"March 21, 2020 13:00:00","time_slot_end":"March 21, 2020 15:00:00"},{"time_slot_type":"regular","time_slot_start":"March 21, 2020 15:00:00","time_slot_end":"March 21, 2020 17:00:00"}],"e4t8f010sh8fuiyht9":[{"time_slot_type":"regular","time_slot_start":"March 21, 2020 9:00:00","time_slot_end":"March 21, 2020 14:00:00"},{"time_slot_type":"regular","time_slot_start":"March 21, 2020 11:00:00","time_slot_end":"March 21, 2020 13:00:00"},{"time_slot_type":"regular","time_slot_start":"March 21, 2020 13:00:00","time_slot_end":"March 21, 2020 18:00:00"},{"time_slot_type":"regular","time_slot_start":"March 21, 2020 15:00:00","time_slot_end":"March 21, 2020 17:00:00"},{"time_slot_type":"regular","time_slot_start":"March 22, 2020 15:00:00","time_slot_end":"March 22, 2020 17:00:00"}],"e4t8f010shd5jtttt3":[{"time_slot_type":"temporary","time_slot_start":"March 22, 2020 9:00:00","time_slot_end":"March 22, 2020 14:00:00"},{"time_slot_type":"temporary","time_slot_start":"March 22, 2020 11:00:00","time_slot_end":"March 22, 2020 13:00:00"},{"time_slot_type":"regular","time_slot_start":"March 22, 2020 13:00:00","time_slot_end":"March 22, 2020 18:00:00"},{"time_slot_type":"regular","time_slot_start":"March 22, 2020 15:00:00","time_slot_end":"March 22, 2020 19:00:00"},{"time_slot_type":"regular","time_slot_start":"March 22, 2020 15:00:00","time_slot_end":"March 22, 2020 17:00:00"}]},"appointments":[{"appointment_id":"e4t8f212s5kogyyd86","appointment_type":"SC","appointment_job_number":"2341FKL","appointment_info":"Refrigerator, Oven","appointment_zip":"33067","appointment_notification":true,"appointment_service_resource_id":"e4t8f010shd5gyyh70","appointment_date_start":"March 21, 2020 11:00:00","appointment_date_end":"March 21, 2020 13:00:00"},{"appointment_id":"e4t8f212s5ko454d82","appointment_type":"FU","appointment_job_number":"2351CKL","appointment_info":"Dryer","appointment_zip":"33045","appointment_notification":true,"appointment_service_resource_id":"e4t8f010shd5gyyh70","appointment_date_start":"March 21, 2020 17:00:00","appointment_date_end":"March 21, 2020 20:00:00"},{"appointment_id":"e4t8f212s5ko4545rf","appointment_type":"RC","appointment_job_number":"1151LKL","appointment_info":"Dishwasher, Oven","appointment_zip":"77007","appointment_notification":false,"appointment_service_resource_id":"e4t8f010sh8fu78hy4","appointment_date_start":"March 21, 2020 8:00:00","appointment_date_end":"March 21, 2020 10:00:00"},{"appointment_id":"e4t8f212s5k46745rg","appointment_type":"SC","appointment_job_number":"1451LFL","appointment_info":"Dishwasher","appointment_zip":"77037","appointment_notification":false,"appointment_service_resource_id":"e4t8f010sh8fu78hy4","appointment_date_start":"March 20, 2020 11:00:00","appointment_date_end":"March 20, 2020 13:00:00"},{"appointment_id":"e4t8f212gg77674559","appointment_type":"SC","appointment_job_number":"1331LRR","appointment_info":"Dishwasher, Stove","appointment_zip":"77034","appointment_notification":true,"appointment_service_resource_id":"e4t8f010sh8fu78hy4","appointment_date_start":"March 20, 2020 10:00:00","appointment_date_end":"March 20, 2020 12:00:00"},{"appointment_id":"e4t8f212rf7767454r","appointment_type":"SC","appointment_job_number":"4531FFR","appointment_info":"Freezer","appointment_zip":"34685","appointment_notification":true,"appointment_service_resource_id":"e4t8f010shd5jtt673","appointment_date_start":"March 21, 2020 14:00:00","appointment_date_end":"March 21, 2020 17:00:00"}],"absences":[{"absences_id":"e4t8f221sh8f56yhrt","absences_service_resource_id":"e4t8f010sh8fuiyht9","absences_date_start":"March 19, 2020 8:00:00","absences_date_end":"March 22, 2020 20:00:00"},{"absences_id":"e4t8f221sh8576yhr5","absences_service_resource_id":"e4t8f010shd5ji94r0","absences_date_start":"March 21, 2020 12:00:00","absences_date_end":"March 21, 2020 14:00:00"}]}'
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
  let clickedBoardHourSelectBtnApply = target.closest('.controls__board-hour-select-btn-apply')
  let clickedBoardHourSelectBtn  = target.closest('.controls__board-hour-select-btn');
  let clickedAppointmentDropList = target.closest('.appointment-drop-list');
  let clickedAbsenceDropList = target.closest('.absence-drop-list')
  let clickedAppointmentRescheduleConfirmationHourSelectTextStart = target.closest('.appointment-reschedule-confirmation__hour-select-text_start')
  let clickedAppointmentRescheduleConfirmationHourSelectTextEnd = target.closest('.appointment-reschedule-confirmation__hour-select-text_end')
  let clickedAppointmentRescheduleConfirmationCalendar = target.closest('.appointment-reschedule-confirmation-calendar')
  let clickedAppointmentRescheduleConfirmationDatePicker = target.closest('.appointment-reschedule-confirmation-controls__date-picker-item')
  let clickedAppointmentRescheduleConfirmationServiceResourcesBtn = target.closest('.appointment-reschedule-confirmation__service-resources-btn')

  if (!clickedDaysAmount && daysAmount.classList.contains('open') && daysAmountList.classList.contains('visible')) {
    daysAmount.classList.remove('open');
    daysAmountList.classList.remove('visible');
  }
  if(!clickedBoardHourSelectList && !clickedBoardHourSelectBtnApply && !clickedBoardHourSelectBtn && boardHourSelectList.classList.contains('open') && boardHourSelectList.classList.contains('visible')){
    boardHourSelectList.classList.remove('open');
    boardHourSelectList.classList.remove('visible');
  }
  if (!clickedDatePeriod && datePeriod.classList.contains('open') && datePeriodList.classList.contains('visible')) {
      datePeriod.classList.remove('open');
      datePeriodList.classList.remove('visible');
  }
  if (!clickedAppointmentDropList && appointmentDropList.classList.contains('open') && appointmentDropList.classList.contains('visible')) {
    appointmentDropList.classList.remove('open');
    appointmentDropList.classList.remove('visible');
  }
  if (!clickedAbsenceDropList && absenceDropList.classList.contains('open') && absenceDropList.classList.contains('visible')) {
    absenceDropList.classList.remove('open');
    absenceDropList.classList.remove('visible');
  }
  
  if(!clickedAppointmentRescheduleConfirmationServiceResourcesBtn && appointmentRescheduleConfirmationServiceResources.classList.contains('open') && appointmentRescheduleConfirmationServiceResources.classList.contains('visible')){
    appointmentRescheduleConfirmationServiceResources.classList.remove('open');
    appointmentRescheduleConfirmationServiceResources.classList.remove('visible');
  }
  if(!clickedAppointmentRescheduleConfirmationCalendar && !clickedAppointmentRescheduleConfirmationDatePicker && appointmentRescheduleConfirmationCalendar.classList.contains('visible')){
    appointmentRescheduleConfirmationCalendar.classList.remove('visible')
  }
  if (!clickedDatePeriod  && !clickedControlsDatePicker  && !clickedCalendar && calendar.classList.contains('visible')) {;
    calendar.classList.remove('visible');
  }

  if(!clickedAppointmentRescheduleConfirmationHourSelectTextEnd && appointmentRescheduleConfirmationHourSelectItemsEnd.classList.contains('open') && appointmentRescheduleConfirmationHourSelectItemsEnd.classList.contains('visible')){
    appointmentRescheduleConfirmationHourSelectItemsEnd.classList.remove('open')
    appointmentRescheduleConfirmationHourSelectItemsEnd.classList.remove('visible')
  }
  if(!clickedAppointmentRescheduleConfirmationHourSelectTextStart && appointmentRescheduleConfirmationHourSelectItemsStart.classList.contains('open') && appointmentRescheduleConfirmationHourSelectItemsStart.classList.contains('visible')){
    appointmentRescheduleConfirmationHourSelectItemsStart.classList.remove('open')
    appointmentRescheduleConfirmationHourSelectItemsStart.classList.remove('visible')
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
    boardHourSelectFieldEnd.classList.remove('controls__board-hour-select-field_failed')
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
    boardHourSelectFieldEnd.classList.remove('controls__board-hour-select-field_failed')
    boardHourSelectTextEnd.textContent = boardHourSelectOptionItemsEnd[i].textContent
    boardHourEndTemp = +boardHourSelectOptionItemsEnd[i].getAttribute('data-board-hour-value')
  })
}

boardHourSelectBtnApply.addEventListener('click', function(e) {
  if(boardHourSelectList.classList.contains('open')){
    if ((boardHourEndTemp - boardHourStartTemp) < 1){
      boardHourSelectFieldEnd.classList.add('controls__board-hour-select-field_failed')
    } else {
      boardHourSelectList.classList.remove('open');
      boardHourSelectList.classList.remove('visible');
      boardHourStart = boardHourStartTemp
      boardHourEnd = boardHourEndTemp
      renderBoard(daysAmountValue,timelineStep)
    }
    
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

controlsReloadBtn.addEventListener('click', function(){
  let newJson = '{"areas":[{"area_id":"e4t8f013shdyj6yh90","area_name":"Miami, FL","area_timezone":"-4","service_resources":[{"service_resource_id":"e4t8f010shd5gyyh70","service_resource_nickname":"Andre","service_resource_name_surname":"Andrey Dinin","service_resource_function":"Appliance Technician","service_resource_image":"http:\/\/artemiudintsev.com\/getjson\/urlava\/1.jpg"},{"service_resource_id":"e4t8f010sh8fuiyht9","service_resource_nickname":"Mark","service_resource_name_surname":"Marco Rodrigas","service_resource_function":"Appliance Technician","service_resource_image":"http:\/\/artemiudintsev.com\/getjson\/urlava\/2.jpg"}]},{"area_id":"e4t8f013s57yj6yr60","area_name":"Houston, TX","area_timezone":"-5","service_resources":[{"service_resource_id":"e4t8f010shd5ji94r0","service_resource_nickname":"Alan","service_resource_name_surname":"Alan Bilik","service_resource_function":"Appliance Technician","service_resource_image":"http:\/\/artemiudintsev.com\/getjson\/urlava\/3.jpg"},{"service_resource_id":"e4t8f010sh8fu78hy4","service_resource_nickname":"Steve","service_resource_name_surname":"Serge Zondre","service_resource_function":"Appliance Technician","service_resource_image":"http:\/\/artemiudintsev.com\/getjson\/urlava\/4.jpg"}]},{"area_id":"e4t8f013s5yyj6y777","area_name":"Tampa, FL","area_timezone":"-5","service_resources":[{"service_resource_id":"e4t8f010shd5jtt673","service_resource_nickname":"Sam","service_resource_name_surname":"Sam Gartiz","service_resource_function":"Appliance Technician","service_resource_image":"http:\/\/artemiudintsev.com\/getjson\/urlava\/5.jpg"},{"service_resource_id":"e4t8f010shd5jtt573","service_resource_nickname":"Serge","service_resource_name_surname":"Alan Gartiz","service_resource_function":"Appliance Technician","service_resource_image":"http:\/\/artemiudintsev.com\/getjson\/urlava\/5.jpg"},{"service_resource_id":"e4t8f010shd5jt4473","service_resource_nickname":"Dilon","service_resource_name_surname":"Dilon Gartiz","service_resource_function":"Appliance Technician","service_resource_image":"http:\/\/artemiudintsev.com\/getjson\/urlava\/5.jpg"},{"service_resource_id":"e4t8f010shd5jtt663","service_resource_nickname":"Alex","service_resource_name_surname":"Alex Gartiz","service_resource_function":"Appliance Technician","service_resource_image":"http:\/\/artemiudintsev.com\/getjson\/urlava\/5.jpg"},{"service_resource_id":"e4t8f010shd5jtttt3","service_resource_nickname":"Bob","service_resource_name_surname":"Bob Gartiz","service_resource_function":"Appliance Technician","service_resource_image":"http:\/\/artemiudintsev.com\/getjson\/urlava\/5.jpg"},{"service_resource_id":"e4t8f010shd5jtrr73","service_resource_nickname":"Stephen","service_resource_name_surname":"Stephen Gartiz","service_resource_function":"Appliance Technician","service_resource_image":"http:\/\/artemiudintsev.com\/getjson\/urlava\/5.jpg"}]}],"time_slots":{"e4t8f010shd5jtt673":[{"time_slot_type":"temporary","time_slot_start":"March 21, 2020 9:00:00","time_slot_end":"March 21, 2020 11:00:00"},{"time_slot_type":"regular","time_slot_start":"March 21, 2020 10:00:00","time_slot_end":"March 21, 2020 20:00:00"}],"e4t8f010sh8fu78hy4":[{"time_slot_type":"temporary","time_slot_start":"March 21, 2020 9:00:00","time_slot_end":"March 21, 2020 13:00:00"},{"time_slot_type":"regular","time_slot_start":"March 21, 2020 11:00:00","time_slot_end":"March 21, 2020 13:00:00"},{"time_slot_type":"regular","time_slot_start":"March 21, 2020 13:00:00","time_slot_end":"March 21, 2020 15:00:00"},{"time_slot_type":"regular","time_slot_start":"March 21, 2020 15:00:00","time_slot_end":"March 21, 2020 17:00:00"}],"e4t8f010sh8fuiyht9":[{"time_slot_type":"regular","time_slot_start":"March 21, 2020 9:00:00","time_slot_end":"March 21, 2020 14:00:00"},{"time_slot_type":"regular","time_slot_start":"March 21, 2020 11:00:00","time_slot_end":"March 21, 2020 13:00:00"},{"time_slot_type":"regular","time_slot_start":"March 21, 2020 13:00:00","time_slot_end":"March 21, 2020 18:00:00"},{"time_slot_type":"regular","time_slot_start":"March 21, 2020 15:00:00","time_slot_end":"March 21, 2020 17:00:00"},{"time_slot_type":"regular","time_slot_start":"March 22, 2020 15:00:00","time_slot_end":"March 22, 2020 17:00:00"}],"e4t8f010shd5jtttt3":[{"time_slot_type":"temporary","time_slot_start":"March 22, 2020 9:00:00","time_slot_end":"March 22, 2020 14:00:00"},{"time_slot_type":"temporary","time_slot_start":"March 22, 2020 11:00:00","time_slot_end":"March 22, 2020 13:00:00"},{"time_slot_type":"regular","time_slot_start":"March 22, 2020 13:00:00","time_slot_end":"March 22, 2020 18:00:00"},{"time_slot_type":"regular","time_slot_start":"March 22, 2020 15:00:00","time_slot_end":"March 22, 2020 19:00:00"},{"time_slot_type":"regular","time_slot_start":"March 22, 2020 15:00:00","time_slot_end":"March 22, 2020 17:00:00"}]},"appointments":[{"appointment_id":"e4t8f212s5kogyyd86","appointment_type":"SC","appointment_job_number":"2341FKL","appointment_info":"Refrigerator, Oven","appointment_zip":"33067","appointment_notification":true,"appointment_service_resource_id":"e4t8f010shd5gyyh70","appointment_date_start":"March 21, 2020 11:00:00","appointment_date_end":"March 21, 2020 13:00:00"},{"appointment_id":"e4t8f212s5ko454d82","appointment_type":"FU","appointment_job_number":"2351CKL","appointment_info":"Dryer","appointment_zip":"33045","appointment_notification":true,"appointment_service_resource_id":"e4t8f010shd5gyyh70","appointment_date_start":"March 21, 2020 17:00:00","appointment_date_end":"March 21, 2020 20:00:00"},{"appointment_id":"e4t8f212s5ko4545rf","appointment_type":"RC","appointment_job_number":"1151LKL","appointment_info":"Dishwasher, Oven","appointment_zip":"77007","appointment_notification":false,"appointment_service_resource_id":"e4t8f010sh8fu78hy4","appointment_date_start":"March 21, 2020 8:00:00","appointment_date_end":"March 21, 2020 10:00:00"},{"appointment_id":"e4t8f212s5k46745rg","appointment_type":"SC","appointment_job_number":"1451LFL","appointment_info":"Dishwasher","appointment_zip":"77037","appointment_notification":false,"appointment_service_resource_id":"e4t8f010sh8fu78hy4","appointment_date_start":"March 20, 2020 11:00:00","appointment_date_end":"March 20, 2020 13:00:00"},{"appointment_id":"e4t8f212gg77674559","appointment_type":"SC","appointment_job_number":"1331LRR","appointment_info":"Dishwasher, Stove","appointment_zip":"77034","appointment_notification":true,"appointment_service_resource_id":"e4t8f010sh8fu78hy4","appointment_date_start":"March 20, 2020 10:00:00","appointment_date_end":"March 20, 2020 12:00:00"},{"appointment_id":"e4t8f212rf7767454r","appointment_type":"SC","appointment_job_number":"4531FFR","appointment_info":"Freezer","appointment_zip":"34685","appointment_notification":true,"appointment_service_resource_id":"e4t8f010shd5jtt673","appointment_date_start":"March 21, 2020 14:00:00","appointment_date_end":"March 21, 2020 17:00:00"}],"absences":[{"absences_id":"e4t8f221sh8f56yhrt","absences_service_resource_id":"e4t8f010sh8fuiyht9","absences_date_start":"March 19, 2020 8:00:00","absences_date_end":"March 22, 2020 20:00:00"},{"absences_id":"e4t8f221sh8576yhr5","absences_service_resource_id":"e4t8f010shd5ji94r0","absences_date_start":"March 21, 2020 12:00:00","absences_date_end":"March 21, 2020 14:00:00"}]}'
  //newJSon = server request 
  json = newJson
  renderBoard(daysAmountValue,timelineStep)
})

appointmentDropList.addEventListener('click',function(){
  if(appointmentDropList.classList.contains('open')){
      appointmentDropList.classList.remove('open');
      appointmentDropList.classList.remove('visible');

  }
})

appointmentDropListItemSendNotification.addEventListener('click',function(){
  if(!popupWindow.classList.contains('open')){
    popupWindow.classList.add('open');
    popupWindow.classList.add('visible');

  }else{
    popupWindow.classList.remove('open');
    popupWindow.classList.remove('visible');
  }
  if(!appointmentSendNotificationConfirmationPopup.classList.contains('open')){
    appointmentSendNotificationConfirmationPopup.classList.add('open');
    appointmentSendNotificationConfirmationPopup.classList.add('visible');

  }else{
    appointmentSendNotificationConfirmationPopup.classList.remove('open');
    appointmentSendNotificationConfirmationPopup.classList.remove('visible');
  }
})
appointmentSendNotificationConfirmationConfirmBtn.addEventListener('click',function(){
  if(popupWindow.classList.contains('open')){
    popupWindow.classList.remove('open');
    popupWindow.classList.remove('visible');
  }
  if(appointmentSendNotificationConfirmationPopup.classList.contains('open')){
    appointmentSendNotificationConfirmationPopup.classList.remove('open');
    appointmentSendNotificationConfirmationPopup.classList.remove('visible');
  }
})
appointmentSendNotificationConfirmationDenyBtn.addEventListener('click',function(){
  if(popupWindow.classList.contains('open')){
    popupWindow.classList.remove('open');
    popupWindow.classList.remove('visible');
  }
  if(appointmentSendNotificationConfirmationPopup.classList.contains('open')){
    appointmentSendNotificationConfirmationPopup.classList.remove('open');
    appointmentSendNotificationConfirmationPopup.classList.remove('visible');
  }
})

let contextAppointment;
let contextAppointmentServiceResourceTemp;
let contextAppointmentServiceResourceIdTemp;
let contextAppointmentDateStartTemp;
let contextAppointmentDateEndTemp;
let contextAppointmentJobNumber;
let appointmentRescheduleConfirmationDatePicked;
let appointmentRescheduleConfirmationDayPicked;

let contextAbsence;
let contextAbsenceServiceResourceTemp;
let contextAbsenceDateStartTemp;
let contextAbsenceDateEndTemp;
let absenceCancelConfirmationDatePicked;
let absenceCancelConfirmationDayPicked;

appointmentDropListItemReschedule.addEventListener('click',function(){
  if(!popupWindow.classList.contains('open')){
    popupWindow.classList.add('open');
    popupWindow.classList.add('visible');
    appointmentRescheduleConfirmationHourSelectItemsEnd.classList.remove('open')
    appointmentRescheduleConfirmationHourSelectItemsEnd.classList.remove('visible')

  }else{
    popupWindow.classList.remove('open');
    popupWindow.classList.remove('visible');
  }

  if(!appointmentRescheduleConfirmationPopup.classList.contains('open')){
    appointmentRescheduleConfirmationPopup.classList.add('open');
    appointmentRescheduleConfirmationPopup.classList.add('visible');
    appointmentRescheduleConfirmationBtnConfirm.classList.add('btn_disabled')
    appointmentRescheduleConfirmationServiceResources.classList.remove('open');
    appointmentRescheduleConfirmationServiceResources.classList.remove('visible');
    appointmentRescheduleConfirmationBoardHourSelectFieldEnd.classList.remove('appointment-reschedule-confirmation__board-hour-select-field_failed')

    if(contextAppointment.getAttribute('data-appointment-notification') ==='true'){
      appointmentRescheduleConfirmationQuestionServiceResourceNotification.style.display = 'block'
    } else {
      appointmentRescheduleConfirmationQuestionServiceResourceNotification.style.display = 'none'
    }
  }else{
    appointmentRescheduleConfirmationPopup.classList.remove('open');
    appointmentRescheduleConfirmationPopup.classList.remove('visible');
  }
  for(let i=0; i<appointmentRescheduleConfirmationQuestionsItemsCheckbox.length; i++){
    appointmentRescheduleConfirmationQuestionsItemsCheckbox[i].checked=false
  }
  appointmentRescheduleConfirmationHourSelectTextStart.textContent=  converTime(contextAppointmentDateStartTemp) 
  appointmentRescheduleConfirmationHourSelectTextEnd.textContent=  converTime(contextAppointmentDateEndTemp) 
  appointmentRescheduleConfirmationServiceResourcesText.textContent=contextAppointmentServiceResourceTemp
  
  appointmentRescheduleConfirmationDatePicked =  new Date(contextAppointmentDateStartTemp);
  appointmentRescheduleConfirmationDayPicked = appointmentRescheduleConfirmationDatePicked.getDate()-1

  appointmentRescheduleConfirmationHourStartTemp = contextAppointmentDateStartTemp.getHours()
  appointmentRescheduleConfirmationHourEndTemp = contextAppointmentDateEndTemp.getHours()
  appointmentRescheduleConfirmationMinsStartTemp =contextAppointmentDateStartTemp.getMinutes()
  appointmentRescheduleConfirmationMinsEndTemp =contextAppointmentDateEndTemp.getMinutes()
 
  appointmentRescheduleConfirmationDatePickerText.textContent = `${monthShortList[appointmentRescheduleConfirmationDatePicked.getMonth()]} ${appointmentRescheduleConfirmationDatePicked.getDate()}, ${appointmentRescheduleConfirmationDatePicked.getFullYear()}`;

  while (appointmentRescheduleConfirmationServiceResources.firstChild) {
    appointmentRescheduleConfirmationServiceResources.removeChild(appointmentRescheduleConfirmationServiceResources.firstChild);
  }

  let areas = boardData.areas
  for (let i=0; i<areas.length;i++){
    let area = areas[i]
    let areaServiceResources =  area.service_resources
    for(let j=0; j<areaServiceResources.length; j++){
      let areaServiceResource =  areaServiceResources[j]
      
      const appointmentRescheduleConfirmationServiceResourcesItem =  crEl("div","appointment-reschedule-confirmation__service-resources-item",areaServiceResource.service_resource_nickname)
      appointmentRescheduleConfirmationServiceResourcesItem.setAttribute('data-service-resource-id',areaServiceResource.service_resource_id)
      appointmentRescheduleConfirmationServiceResources.appendChild(appointmentRescheduleConfirmationServiceResourcesItem)

      appointmentRescheduleConfirmationServiceResourcesItem.addEventListener('click',function(event){
        contextAppointmentServiceResourceIdTemp = event.currentTarget.getAttribute('data-service-resource-id')
        appointmentRescheduleConfirmationServiceResourcesText.textContent = appointmentRescheduleConfirmationServiceResourcesItem.textContent
      })
    }
  }
  
  appointmentRescheduleConfirmationDateOld.textContent = converTime(contextAppointmentDateStartTemp) + "-" + converTime(contextAppointmentDateEndTemp) + " "+ contextAppointmentDateStartTemp.getDate() + " " + monthShortList[contextAppointmentDateStartTemp.getMonth()] 
  appointmentRescheduleConfirmationJobNumber.textContent=contextAppointmentJobNumber
  appointmentRescheduleConfirmationServiceResourceNicknameOld.textContent = "(" +contextAppointmentServiceResourceTemp + ")"
})
appointmentRescheduleConfirmationServiceResourcesBtn.addEventListener('click',function(){
  if(!appointmentRescheduleConfirmationServiceResources.classList.contains('open')){
    appointmentRescheduleConfirmationServiceResources.classList.add('open');
    appointmentRescheduleConfirmationServiceResources.classList.add('visible');
  }else{
    appointmentRescheduleConfirmationServiceResources.classList.remove('open');
    appointmentRescheduleConfirmationServiceResources.classList.remove('visible');
  }
  
})

appointmentRescheduleConfirmationBtnConfirm.addEventListener('click',function(){
  if (popupWindow.classList.contains('open')) {
    popupWindow.classList.remove('open');
    popupWindow.classList.remove('visible');
  }
  if(appointmentRescheduleConfirmationPopup.classList.contains('open')){
    appointmentRescheduleConfirmationPopup.classList.remove('open');
    appointmentRescheduleConfirmationPopup.classList.remove('visible');

    let appointmentRescheduleConfirmationDateStartTemp = new Date(appointmentRescheduleConfirmationDatePicked)
    appointmentRescheduleConfirmationDateStartTemp.setHours(appointmentRescheduleConfirmationHourStartTemp)
    appointmentRescheduleConfirmationDateStartTemp.setMinutes(appointmentRescheduleConfirmationMinsStartTemp)
    
    let appointmentRescheduleConfirmationDateEndTemp = new Date(appointmentRescheduleConfirmationDatePicked)
    appointmentRescheduleConfirmationDateEndTemp.setHours(appointmentRescheduleConfirmationHourEndTemp)
    appointmentRescheduleConfirmationDateEndTemp.setMinutes(appointmentRescheduleConfirmationMinsEndTemp)

    renderAppointment(contextAppointment,appointmentRescheduleConfirmationDateStartTemp,appointmentRescheduleConfirmationDateEndTemp,contextAppointmentServiceResourceIdTemp)
  } 

})
appointmentRescheduleConfirmationBtnDeny.addEventListener('click',function(){
  if (popupWindow.classList.contains('open')) {
    popupWindow.classList.remove('open');
    popupWindow.classList.remove('visible');
  }
  if(appointmentRescheduleConfirmationPopup.classList.contains('open')){
    appointmentRescheduleConfirmationPopup.classList.remove('open');
    appointmentRescheduleConfirmationPopup.classList.remove('visible');
  } 

})
appointmentRescheduleConfirmationQuestionClientInformed.addEventListener('click',function(){
  if(appointmentRescheduleConfirmationQuestionClientInformed.checked==true &&appointmentRescheduleConfirmationQuestionServiceResourceInformed.checked==true && (((appointmentRescheduleConfirmationHourEndTemp*60+appointmentRescheduleConfirmationMinsEndTemp) - (appointmentRescheduleConfirmationHourStartTemp*60+appointmentRescheduleConfirmationMinsStartTemp)) >=30)){
    appointmentRescheduleConfirmationBtnConfirm.classList.remove('btn_disabled')
  } else{
    appointmentRescheduleConfirmationBtnConfirm.classList.add('btn_disabled')
  }
  
})
appointmentRescheduleConfirmationQuestionServiceResourceInformed.addEventListener('click',function(){
  if(appointmentRescheduleConfirmationQuestionClientInformed.checked==true &&appointmentRescheduleConfirmationQuestionServiceResourceInformed.checked==true && (((appointmentRescheduleConfirmationHourEndTemp*60+appointmentRescheduleConfirmationMinsEndTemp) - (appointmentRescheduleConfirmationHourStartTemp*60+appointmentRescheduleConfirmationMinsStartTemp)) >=30)){
    appointmentRescheduleConfirmationBtnConfirm.classList.remove('btn_disabled')
  } else{
    appointmentRescheduleConfirmationBtnConfirm.classList.add('btn_disabled')
  }
 
})

const renderAppointmentRescheduleConfirmationCalendar = (month,year)=>{
  appointmentRescheduleConfirmationDaysInMonth = new Date(year,month+1,0).getDate()
  appointmentRescheduleConfirmationDaysOffset = new Date(year,month).getDay()

  //Clear all days
  for(let i=0; i<appointmentRescheduleConfirmationCalendarTableDays.length; i++){
    appointmentRescheduleConfirmationCalendarTableDays[i].textContent = ""
    if(appointmentRescheduleConfirmationCalendarTableDays[i].textContent==""){
      appointmentRescheduleConfirmationCalendarTableDays[i].classList.remove('calendar-table__cell-day_selected-one')

    }
  }

  //Fill all days
  for(let i=0; i<appointmentRescheduleConfirmationDaysInMonth; i++){
    let dateTemp = new Date(year,month,i+1)
    if(Date.parse(dateTemp)==Date.parse(appointmentRescheduleConfirmationDatePicked) ){
      appointmentRescheduleConfirmationCalendarTableDays[i+appointmentRescheduleConfirmationDaysOffset].classList.add('calendar-table__cell-day_selected-one')
      if (appointmentRescheduleConfirmationCalendar.classList.contains('visible')) {;
        appointmentRescheduleConfirmationCalendar.classList.remove('visible');
      }
    }
    appointmentRescheduleConfirmationCalendarTableDays[i+appointmentRescheduleConfirmationDaysOffset].textContent = i+1
  }

  //Creating text fot month
  let textMonth = monthList[month]
  let textMonthYear = textMonth + ' ' + year
  appointmentRescheduleConfirmationCalendarMonthYear.textContent = textMonthYear;
}

appointmentRescheduleConfirmationCalendarBtnNext.addEventListener('click', function() {
  appointmentRescheduleConfirmationMonth+=1
  if (appointmentRescheduleConfirmationMonth>11){
    appointmentRescheduleConfirmationYear+=1;
    appointmentRescheduleConfirmationMonth=0;
  }
  renderAppointmentRescheduleConfirmationCalendar(appointmentRescheduleConfirmationMonth,appointmentRescheduleConfirmationYear)
})
appointmentRescheduleConfirmationCalendarBtnPrev.addEventListener('click', function() {
  appointmentRescheduleConfirmationMonth-=1
  if (appointmentRescheduleConfirmationMonth<0){
    appointmentRescheduleConfirmationYear-=1;
    appointmentRescheduleConfirmationMonth=11;
  }
  renderAppointmentRescheduleConfirmationCalendar(appointmentRescheduleConfirmationMonth,appointmentRescheduleConfirmationYear)
})

appointmentRescheduleConfirmationDatePicker.addEventListener('click', function() {
  let monthPicked = appointmentRescheduleConfirmationDatePicked.getMonth()
  let yearPicked = appointmentRescheduleConfirmationDatePicked.getFullYear()
  appointmentRescheduleConfirmationMonth = monthPicked;
  appointmentRescheduleConfirmationYear = yearPicked;
  renderAppointmentRescheduleConfirmationCalendar(monthPicked,yearPicked)
  if (!appointmentRescheduleConfirmationCalendar.classList.contains('visible')) {;
    appointmentRescheduleConfirmationCalendar.classList.add('visible');
  }
  
})

appointmentRescheduleConfirmationCalendarTableDays.forEach((calendarTableDay,idx) => {
  calendarTableDay.addEventListener('click', function() {
    if (idx-appointmentRescheduleConfirmationDaysOffset>=0 && idx-appointmentRescheduleConfirmationDaysOffset<appointmentRescheduleConfirmationDaysInMonth) {        
      
      appointmentRescheduleConfirmationDayPicked= idx-appointmentRescheduleConfirmationDaysOffset;
          appointmentRescheduleConfirmationDatePicked = new Date(appointmentRescheduleConfirmationYear,appointmentRescheduleConfirmationMonth,appointmentRescheduleConfirmationDayPicked+1)

      //Creating text for controls text
      appointmentRescheduleConfirmationDatePickerText.textContent = `${monthShortList[appointmentRescheduleConfirmationDatePicked.getMonth()]} ${appointmentRescheduleConfirmationDatePicked.getDate()}, ${appointmentRescheduleConfirmationDatePicked.getFullYear()}`;

      renderAppointmentRescheduleConfirmationCalendar(appointmentRescheduleConfirmationMonth,appointmentRescheduleConfirmationYear)
    }
  })
});

appointmentRescheduleConfirmationHourSelectTextStart.addEventListener('click', function(e) {
  if(!appointmentRescheduleConfirmationHourSelectItemsStart.classList.contains('open')){
    appointmentRescheduleConfirmationHourSelectItemsStart.classList.add('open');
    appointmentRescheduleConfirmationHourSelectItemsStart.classList.add('visible');
    appointmentRescheduleConfirmationHourSelectItemsEnd.classList.remove('open');
    appointmentRescheduleConfirmationHourSelectItemsEnd.classList.remove('visible');
  /* Conditions to close other control-item elements */
  } else {
    appointmentRescheduleConfirmationHourSelectItemsStart.classList.remove('open');
    appointmentRescheduleConfirmationHourSelectItemsStart.classList.remove('visible');
  }
})
appointmentRescheduleConfirmationHourSelectTextEnd.addEventListener('click', function(e) {
  if(!appointmentRescheduleConfirmationHourSelectItemsEnd.classList.contains('open')){
    appointmentRescheduleConfirmationHourSelectItemsEnd.classList.add('open');
    appointmentRescheduleConfirmationHourSelectItemsEnd.classList.add('visible');
    appointmentRescheduleConfirmationHourSelectItemsStart.classList.remove('open');
    appointmentRescheduleConfirmationHourSelectItemsStart.classList.remove('visible');
  /* Conditions to close other control-item elements */

  } else {
    appointmentRescheduleConfirmationHourSelectItemsEnd.classList.remove('open');
    appointmentRescheduleConfirmationHourSelectItemsEnd.classList.remove('visible');
  }
})
for (let i = 0; i < appointmentRescheduleConfirmationHourSelectOptionItemsStart.length; i++) {
  
  appointmentRescheduleConfirmationHourSelectOptionItemsStart[i].addEventListener('click', function(e) {
    appointmentRescheduleConfirmationHourSelectItemsStart.classList.remove('open');
    appointmentRescheduleConfirmationHourSelectItemsStart.classList.remove('visible');
    for (let j = 0; j < appointmentRescheduleConfirmationHourSelectOptionItemsStart.length; j++) {
      appointmentRescheduleConfirmationHourSelectOptionItemsStart[j].classList.remove('controls__board-hour-option_selected')
    }
    appointmentRescheduleConfirmationHourSelectOptionItemsStart[i].classList.add('controls__board-hour-option_selected')
    appointmentRescheduleConfirmationHourSelectTextStart.textContent = appointmentRescheduleConfirmationHourSelectOptionItemsStart[i].textContent
    appointmentRescheduleConfirmationHourStartTemp = +appointmentRescheduleConfirmationHourSelectOptionItemsStart[i].getAttribute('data-board-hour-value')
    appointmentRescheduleConfirmationMinsStartTemp = +appointmentRescheduleConfirmationHourSelectOptionItemsStart[i].getAttribute('data-board-mins-value')

    if(((appointmentRescheduleConfirmationHourEndTemp*60+appointmentRescheduleConfirmationMinsEndTemp) - (appointmentRescheduleConfirmationHourStartTemp*60+appointmentRescheduleConfirmationMinsStartTemp)) <30){
      appointmentRescheduleConfirmationBoardHourSelectFieldEnd.classList.add('appointment-reschedule-confirmation__board-hour-select-field_failed')
      appointmentRescheduleConfirmationBtnConfirm.classList.add('btn_disabled')
    }else{
      appointmentRescheduleConfirmationBoardHourSelectFieldEnd.classList.remove('appointment-reschedule-confirmation__board-hour-select-field_failed')
      if(appointmentRescheduleConfirmationQuestionClientInformed.checked==true &&appointmentRescheduleConfirmationQuestionServiceResourceInformed.checked==true && (((appointmentRescheduleConfirmationHourEndTemp*60+appointmentRescheduleConfirmationMinsEndTemp) - (appointmentRescheduleConfirmationHourStartTemp*60+appointmentRescheduleConfirmationMinsStartTemp)) >=30)){
        appointmentRescheduleConfirmationBtnConfirm.classList.remove('btn_disabled')
      }
    }
  })
}

for (let i = 0; i < appointmentRescheduleConfirmationHourSelectOptionItemsEnd.length; i++) {
  
  appointmentRescheduleConfirmationHourSelectOptionItemsEnd[i].addEventListener('click', function(e) {
    appointmentRescheduleConfirmationHourSelectItemsEnd.classList.remove('open');
    appointmentRescheduleConfirmationHourSelectItemsEnd.classList.remove('visible');
    for (let j = 0; j < appointmentRescheduleConfirmationHourSelectOptionItemsEnd.length; j++) {
      appointmentRescheduleConfirmationHourSelectOptionItemsEnd[j].classList.remove('controls__board-hour-option_selected')
    }
    appointmentRescheduleConfirmationHourSelectOptionItemsEnd[i].classList.add('controls__board-hour-option_selected')
    appointmentRescheduleConfirmationHourSelectTextEnd.textContent = appointmentRescheduleConfirmationHourSelectOptionItemsEnd[i].textContent
    appointmentRescheduleConfirmationHourEndTemp = +appointmentRescheduleConfirmationHourSelectOptionItemsEnd[i].getAttribute('data-board-hour-value')
    appointmentRescheduleConfirmationMinsEndTemp = +appointmentRescheduleConfirmationHourSelectOptionItemsStart[i].getAttribute('data-board-mins-value')
    if((appointmentRescheduleConfirmationHourEndTemp*60+appointmentRescheduleConfirmationMinsEndTemp) - (appointmentRescheduleConfirmationHourStartTemp*60+appointmentRescheduleConfirmationMinsStartTemp) <30){
      appointmentRescheduleConfirmationBoardHourSelectFieldEnd.classList.add('appointment-reschedule-confirmation__board-hour-select-field_failed')
      appointmentRescheduleConfirmationBtnConfirm.classList.add('btn_disabled')
    }else{
      appointmentRescheduleConfirmationBoardHourSelectFieldEnd.classList.remove('appointment-reschedule-confirmation__board-hour-select-field_failed')
      if(appointmentRescheduleConfirmationQuestionClientInformed.checked==true &&appointmentRescheduleConfirmationQuestionServiceResourceInformed.checked==true && (((appointmentRescheduleConfirmationHourEndTemp*60+appointmentRescheduleConfirmationMinsEndTemp) - (appointmentRescheduleConfirmationHourStartTemp*60+appointmentRescheduleConfirmationMinsStartTemp)) >=30)){
        appointmentRescheduleConfirmationBtnConfirm.classList.remove('btn_disabled')
      }
    }
  })
}





appointmentDropListItemCancel.addEventListener('click',function(){
  if(!popupWindow.classList.contains('open')){
    popupWindow.classList.add('open');
    popupWindow.classList.add('visible');
    appointmentCancelConfirmationBtnConfirm.classList.add('btn_disabled')
    appointmentCancelConfirmationQuestionsItemCancelReasonTextarea.value=""
    for(let i=0; i<appointmentCancelConfirmationQuestionsItemsCheckbox.length; i++){
      appointmentCancelConfirmationQuestionsItemsCheckbox[i].checked=false
    }
  }else{
    popupWindow.classList.remove('open');
    popupWindow.classList.remove('visible');
  }
  if(!appointmentCancelConfirmationPopup.classList.contains('open')){
    appointmentCancelConfirmationPopup.classList.add('open');
    appointmentCancelConfirmationPopup.classList.add('visible');
  } else {
    appointmentCancelConfirmationPopup.classList.remove('open');
    appointmentCancelConfirmationPopup.classList.remove('visible');
  }
  if(contextAppointment.getAttribute('data-appointment-notification') ==='true'){
    appointmentCancelConfirmationQuestionServiceResourceNotification.style.display = 'block'
  } else {
    appointmentCancelConfirmationQuestionServiceResourceNotification.style.display = 'none'
  }

  appointmentCancelConfirmationDate.textContent = converTime(contextAppointmentDateStartTemp) + "-" + converTime(contextAppointmentDateEndTemp) + " "+ contextAppointmentDateStartTemp.getDate() + " " + monthShortList[contextAppointmentDateStartTemp.getMonth()] 

  appointmentCancelConfirmationJobNumber.textContent=contextAppointment.querySelector('.appointment__job-number').textContent

  appointmentCancelConfirmationServiceResourceNickname.textContent = "(" +contextAppointmentServiceResourceTemp + ")"

})

appointmentCancelConfirmationBtnConfirm.addEventListener('click',function(){
  if (popupWindow.classList.contains('open')) {
    popupWindow.classList.remove('open');
    popupWindow.classList.remove('visible');
  }
  if(appointmentCancelConfirmationPopup.classList.contains('open')){
    appointmentCancelConfirmationPopup.classList.remove('open');
    appointmentCancelConfirmationPopup.classList.remove('visible');
  } 

})
appointmentCancelConfirmationBtnDeny.addEventListener('click',function(){
  if (popupWindow.classList.contains('open')) {
    popupWindow.classList.remove('open');
    popupWindow.classList.remove('visible');
  }
  if(appointmentCancelConfirmationPopup.classList.contains('open')){
    appointmentCancelConfirmationPopup.classList.remove('open');
    appointmentCancelConfirmationPopup.classList.remove('visible');
  } 

})
appointmentCancelConfirmationQuestionClientInformed.addEventListener('click',function(){
  if(appointmentCancelConfirmationQuestionClientInformed.checked==true &&appointmentCancelConfirmationQuestionServiceResourceInformed.checked==true && appointmentCancelConfirmationQuestionsItemCancelReasonTextarea.value!==""){
    appointmentCancelConfirmationBtnConfirm.classList.remove('btn_disabled')
  } else{
    appointmentCancelConfirmationBtnConfirm.classList.add('btn_disabled')
  }
})
appointmentCancelConfirmationQuestionServiceResourceInformed.addEventListener('click',function(){
  if(appointmentCancelConfirmationQuestionClientInformed.checked==true &&appointmentCancelConfirmationQuestionServiceResourceInformed.checked==true && appointmentCancelConfirmationQuestionsItemCancelReasonTextarea.value!==""){
    appointmentCancelConfirmationBtnConfirm.classList.remove('btn_disabled')
  } else{
    appointmentCancelConfirmationBtnConfirm.classList.add('btn_disabled')
  }
})
appointmentCancelConfirmationQuestionsItemCancelReasonTextarea.addEventListener('keyup', function(){
  if(appointmentCancelConfirmationQuestionClientInformed.checked==true &&appointmentCancelConfirmationQuestionServiceResourceInformed.checked==true && appointmentCancelConfirmationQuestionsItemCancelReasonTextarea.value!==""){
    appointmentCancelConfirmationBtnConfirm.classList.remove('btn_disabled')
  } else{
    appointmentCancelConfirmationBtnConfirm.classList.add('btn_disabled')
  }
})

absenceDropListItemCancel.addEventListener('click',function(){
  if(!popupWindow.classList.contains('open')){
    popupWindow.classList.add('open');
    popupWindow.classList.add('visible');
    absenceCancelConfirmationBtnConfirm.classList.add('btn_disabled')
    absenceCancelConfirmationQuestionsItemCancelReasonTextarea.value=""
    for(let i=0; i<absenceCancelConfirmationQuestionsItemsCheckbox.length; i++){
      absenceCancelConfirmationQuestionsItemsCheckbox[i].checked=false
    }
  }else{
    popupWindow.classList.remove('open');
    popupWindow.classList.remove('visible');
  }
  if(!absenceCancelConfirmationPopup.classList.contains('open')){
    absenceCancelConfirmationPopup.classList.add('open');
    absenceCancelConfirmationPopup.classList.add('visible');
  } else {
    absenceCancelConfirmationPopup.classList.remove('open');
    absenceCancelConfirmationPopup.classList.remove('visible');
  }
    const currentDate = new Date()
    if(!(Date.parse(currentDate)>=Date.parse(contextAbsenceDateStartTemp) && Date.parse(currentDate)<=Date.parse(contextAbsenceDateEndTemp))){
      absenceCancelConfirmationCancelFailed.classList.add('open')
      absenceCancelConfirmationCancelFailed.classList.add('visible')
    } 
    absenceCancelConfirmationDateFrom.textContent = converTime(contextAbsenceDateStartTemp) + " "+ contextAbsenceDateStartTemp.getDate() + " " + monthShortList[contextAbsenceDateStartTemp.getMonth()] 
    absenceCancelConfirmationDateTo.textContent = converTime(contextAbsenceDateEndTemp) + " "+ contextAbsenceDateEndTemp.getDate() + " " + monthShortList[contextAbsenceDateEndTemp.getMonth()] 
    absenceCancelConfirmationServiceResourceNickname.textContent = "(" +contextAbsenceServiceResourceTemp + ")"
})
absenceDropList.addEventListener('click',function(){
  if(absenceDropList.classList.contains('open')){
      absenceDropList.classList.remove('open');
      absenceDropList.classList.remove('visible');

  }
})
absenceCancelConfirmationBtnConfirm.addEventListener('click',function(){
  if (popupWindow.classList.contains('open')) {
    popupWindow.classList.remove('open');
    popupWindow.classList.remove('visible');
  }
  if(absenceCancelConfirmationPopup.classList.contains('open')){
    absenceCancelConfirmationPopup.classList.remove('open');
    absenceCancelConfirmationPopup.classList.remove('visible');
  } 

})
absenceCancelConfirmationBtnDeny.addEventListener('click',function(){
  if (popupWindow.classList.contains('open')) {
    popupWindow.classList.remove('open');
    popupWindow.classList.remove('visible');
  }
  if(absenceCancelConfirmationPopup.classList.contains('open')){
    absenceCancelConfirmationPopup.classList.remove('open');
    absenceCancelConfirmationPopup.classList.remove('visible');
  } 

})
absenceCancelConfirmationQuestionServiceResourceInformed.addEventListener('click',function(){
  const currentDate = new Date()
  if( absenceCancelConfirmationQuestionServiceResourceInformed.checked==true && absenceCancelConfirmationQuestionsItemCancelReasonTextarea.value!=="" && (Date.parse(currentDate)>=Date.parse(contextAbsenceDateStartTemp) && Date.parse(currentDate)<=Date.parse(contextAbsenceDateEndTemp))){
    absenceCancelConfirmationBtnConfirm.classList.remove('btn_disabled')
  } else{
    absenceCancelConfirmationBtnConfirm.classList.add('btn_disabled')
  }
})
absenceCancelConfirmationQuestionsItemCancelReasonTextarea.addEventListener('keyup', function(){
  const currentDate = new Date()
  if(absenceCancelConfirmationQuestionServiceResourceInformed.checked==true && absenceCancelConfirmationQuestionsItemCancelReasonTextarea.value!=="" && (Date.parse(currentDate)>=Date.parse(contextAbsenceDateStartTemp) && Date.parse(currentDate)<=Date.parse(contextAbsenceDateEndTemp))){
    absenceCancelConfirmationBtnConfirm.classList.remove('btn_disabled')
  } else{
    absenceCancelConfirmationBtnConfirm.classList.add('btn_disabled')
  }
})



















absenceDropListItemChange.addEventListener('click',function(){
  if(!popupWindow.classList.contains('open')){
    popupWindow.classList.add('open');
    popupWindow.classList.add('visible');
    absenceChangeConfirmationHourSelectItemsEnd.classList.remove('open')
    absenceChangeConfirmationHourSelectItemsEnd.classList.remove('visible')
  }else{
    popupWindow.classList.remove('open');
    popupWindow.classList.remove('visible');
  }

  if(!absenceChangeConfirmationPopup.classList.contains('open')){
    absenceChangeConfirmationPopup.classList.add('open');
    absenceChangeConfirmationPopup.classList.add('visible');
    absenceChangeConfirmationBtnConfirm.classList.add('btn_disabled')
    absenceChangeConfirmationBoardHourSelectFieldEnd.classList.remove('appointment-reschedule-confirmation__board-hour-select-field_failed')
    absenceChangeConfirmationDateFailed.classList.remove('open')
    absenceChangeConfirmationDateFailed.classList.remove('visible')
  }else{
    absenceChangeConfirmationPopup.classList.remove('open');
    absenceChangeConfirmationPopup.classList.remove('visible');
  }
  const currentDate = new Date();  
  if(Date.parse(currentDate)>=Date.parse(contextAbsenceDateStartTemp) && Date.parse(currentDate)>=Date.parse(contextAbsenceDateEndTemp)){
    absenceChangeConfirmationDatePickerStart.classList.add('absence-change-confirmation-controls__date-picker_failed')
    absenceChangeConfirmationDatePickerEnd.classList.add('absence-change-confirmation-controls__date-picker_failed')
    absenceChangeConfirmationDateFailed.classList.add('open')
    absenceChangeConfirmationDateFailed.classList.add('visible')
  }else if(Date.parse(currentDate)>=Date.parse(contextAbsenceDateStartTemp) && Date.parse(currentDate)<=Date.parse(contextAbsenceDateEndTemp)){
    absenceChangeConfirmationDatePickerStart.classList.add('absence-change-confirmation-controls__date-picker_failed')
    absenceChangeConfirmationDatePickerEnd.classList.remove('absence-change-confirmation-controls__date-picker_failed')
  } else{
    absenceChangeConfirmationDatePickerStart.classList.remove('absence-change-confirmation-controls__date-picker_failed')
    absenceChangeConfirmationDatePickerEnd.classList.remove('absence-change-confirmation-controls__date-picker_failed')
  }
  for(let i=0; i<absenceChangeConfirmationQuestionsItemsCheckbox.length; i++){
    absenceChangeConfirmationQuestionsItemsCheckbox[i].checked=false
  }
  absenceChangeConfirmationHourSelectTextStart.textContent=  converTime(contextAbsenceDateStartTemp) 
  absenceChangeConfirmationHourSelectTextEnd.textContent=  converTime(contextAbsenceDateEndTemp) 
  
  absenceChangeConfirmationDatePicked =  new Date(contextAbsenceDateStartTemp);
  absenceChangeConfirmationDayPicked = absenceChangeConfirmationDatePicked.getDate()-1

  absenceChangeConfirmationHourStartTemp = contextAbsenceDateStartTemp.getHours()
  absenceChangeConfirmationHourEndTemp = contextAbsenceDateEndTemp.getHours()
  absenceChangeConfirmationMinsStartTemp =contextAbsenceDateStartTemp.getMinutes()
  absenceChangeConfirmationMinsEndTemp =contextAbsenceDateEndTemp.getMinutes()
  
  absenceChangeConfirmationDateStartPicked = new Date(contextAbsenceDateStartTemp)
  absenceChangeConfirmationDateEndPicked = new Date(contextAbsenceDateEndTemp)

  absenceChangeConfirmationDatePickerTextStart.textContent = `${monthShortList[contextAbsenceDateStartTemp.getMonth()]} ${contextAbsenceDateStartTemp.getDate()}, ${contextAbsenceDateStartTemp.getFullYear()}`;
  absenceChangeConfirmationDatePickerTextEnd.textContent = `${monthShortList[contextAbsenceDateEndTemp.getMonth()]} ${contextAbsenceDateEndTemp.getDate()}, ${contextAbsenceDateEndTemp.getFullYear()}`;

  absenceChangeConfirmationDateFrom.textContent = converTime(contextAbsenceDateStartTemp) + " "+ contextAbsenceDateStartTemp.getDate() + " " + monthShortList[contextAbsenceDateStartTemp.getMonth()] 
  absenceChangeConfirmationDateTo.textContent = converTime(contextAbsenceDateEndTemp) + " "+ contextAbsenceDateEndTemp.getDate() + " " + monthShortList[contextAbsenceDateEndTemp.getMonth()] 
  absenceChangeConfirmationServiceResourceNickname.textContent= "(" + contextAbsenceServiceResourceTemp +")"
})


absenceChangeConfirmationBtnConfirm.addEventListener('click',function(){
  if(absenceChangeConfirmationPopup.classList.contains('open')){
    

    let absenceChangeConfirmationDateStartTemp = new Date(absenceChangeConfirmationDateStartPicked)
    absenceChangeConfirmationDateStartTemp.setHours(absenceChangeConfirmationHourStartTemp)
    absenceChangeConfirmationDateStartTemp.setMinutes(absenceChangeConfirmationMinsStartTemp)
    
    let absenceChangeConfirmationDateEndTemp = new Date(absenceChangeConfirmationDateEndPicked)
    absenceChangeConfirmationDateEndTemp.setHours(absenceChangeConfirmationHourEndTemp)
    absenceChangeConfirmationDateEndTemp.setMinutes(absenceChangeConfirmationMinsEndTemp)

    if ((absenceChangeConfirmationDateEndTemp.getTime()-absenceChangeConfirmationDateStartTemp.getTime())/1000/60 < 30){
      absenceChangeConfirmationDateFailed.classList.add('open')
      absenceChangeConfirmationDateFailed.classList.add('visible')
    }else{
      absenceChangeConfirmationDateFailed.classList.remove('open')
      absenceChangeConfirmationDateFailed.classList.remove('visible')
      popupWindow.classList.remove('open');
      popupWindow.classList.remove('visible');
      absenceChangeConfirmationPopup.classList.remove('open');
      absenceChangeConfirmationPopup.classList.remove('visible');
    }
    //renderAppointment(contextAppointment,absenceChangeConfirmationDateStartTemp,absenceChangeConfirmationDateEndTemp,contextAppointmentServiceResourceIdTemp)
  } 

})
absenceChangeConfirmationBtnDeny.addEventListener('click',function(){
  if (popupWindow.classList.contains('open')) {
    popupWindow.classList.remove('open');
    popupWindow.classList.remove('visible');
  }
  if(absenceChangeConfirmationPopup.classList.contains('open')){
    absenceChangeConfirmationPopup.classList.remove('open');
    absenceChangeConfirmationPopup.classList.remove('visible');
  } 

})

absenceChangeConfirmationQuestionServiceResourceInformed.addEventListener('click',function(){
  const currentDate = new Date();
  if(absenceChangeConfirmationQuestionServiceResourceInformed.checked==true && (((absenceChangeConfirmationHourEndTemp*60+absenceChangeConfirmationMinsEndTemp) - (absenceChangeConfirmationHourStartTemp*60+absenceChangeConfirmationMinsStartTemp)) >=30) && (!(Date.parse(currentDate)>=Date.parse(contextAbsenceDateStartTemp) && (Date.parse(currentDate)>=Date.parse(contextAbsenceDateEndTemp))))){
    absenceChangeConfirmationBtnConfirm.classList.remove('btn_disabled')
  } else{
    absenceChangeConfirmationBtnConfirm.classList.add('btn_disabled')
  }
 
})

const renderAbsenceChangeConfirmationCalendar = (month,year)=>{
  absenceChangeConfirmationDaysInMonth = new Date(year,month+1,0).getDate()
  absenceChangeConfirmationDaysOffset = new Date(year,month).getDay()

  //Clear all days
  for(let i=0; i<absenceChangeConfirmationCalendarTableDays.length; i++){
    absenceChangeConfirmationCalendarTableDays[i].textContent = ""
    if(absenceChangeConfirmationCalendarTableDays[i].textContent==""){
      absenceChangeConfirmationCalendarTableDays[i].classList.remove('calendar-table__cell-day_selected-one')

    }
  }

  //Fill all days
  for(let i=0; i<absenceChangeConfirmationDaysInMonth; i++){
    let dateTemp = new Date(year,month,i+1)
    if(Date.parse(dateTemp)==Date.parse(absenceChangeConfirmationDatePicked) ){
      absenceChangeConfirmationCalendarTableDays[i+absenceChangeConfirmationDaysOffset].classList.add('calendar-table__cell-day_selected-one')
      if (absenceChangeConfirmationCalendar.classList.contains('visible')) {;
        absenceChangeConfirmationCalendar.classList.remove('visible');
      }
    }
    absenceChangeConfirmationCalendarTableDays[i+absenceChangeConfirmationDaysOffset].textContent = i+1
  }

  //Creating text fot month
  let textMonth = monthList[month]
  let textMonthYear = textMonth + ' ' + year
  absenceChangeConfirmationCalendarMonthYear.textContent = textMonthYear;
}

absenceChangeConfirmationCalendarBtnNext.addEventListener('click', function() {
  absenceChangeConfirmationMonth+=1
  if (absenceChangeConfirmationMonth>11){
    absenceChangeConfirmationYear+=1;
    absenceChangeConfirmationMonth=0;
  }
  renderAbsenceChangeConfirmationCalendar(absenceChangeConfirmationMonth,absenceChangeConfirmationYear)
})
absenceChangeConfirmationCalendarBtnPrev.addEventListener('click', function() {
  absenceChangeConfirmationMonth-=1
  if (absenceChangeConfirmationMonth<0){
    absenceChangeConfirmationYear-=1;
    absenceChangeConfirmationMonth=11;
  }
  renderAbsenceChangeConfirmationCalendar(absenceChangeConfirmationMonth,absenceChangeConfirmationYear)
})
absenceChangeConfirmationDatePickerStart.addEventListener('click', function() {
  absenceChangeIsDateStart = true
  let monthPicked = absenceChangeConfirmationDateStartPicked.getMonth()
  let yearPicked = absenceChangeConfirmationDateStartPicked.getFullYear()
  absenceChangeConfirmationMonth = monthPicked;
  absenceChangeConfirmationYear = yearPicked;
  renderAbsenceChangeConfirmationCalendar(monthPicked,yearPicked)
  if (!absenceChangeConfirmationCalendar.classList.contains('visible')) {;
    absenceChangeConfirmationCalendar.classList.add('visible');
  }
})
absenceChangeConfirmationDatePickerEnd.addEventListener('click', function() {
  absenceChangeIsDateStart=false
  let monthPicked = absenceChangeConfirmationDateEndPicked.getMonth()
  let yearPicked = absenceChangeConfirmationDateEndPicked.getFullYear()
  absenceChangeConfirmationMonth = monthPicked;
  absenceChangeConfirmationYear = yearPicked;
  renderAbsenceChangeConfirmationCalendar(monthPicked,yearPicked)
  if (!absenceChangeConfirmationCalendar.classList.contains('visible')) {;
    absenceChangeConfirmationCalendar.classList.add('visible');
  }
})



absenceChangeConfirmationCalendarTableDays.forEach((calendarTableDay,idx) => {
  calendarTableDay.addEventListener('click', function() {
    if (idx-absenceChangeConfirmationDaysOffset>=0 && idx-absenceChangeConfirmationDaysOffset<absenceChangeConfirmationDaysInMonth) {        
      
      absenceChangeConfirmationDayPicked= idx-absenceChangeConfirmationDaysOffset;
      absenceChangeConfirmationDatePicked = new Date(absenceChangeConfirmationYear,absenceChangeConfirmationMonth,absenceChangeConfirmationDayPicked+1)

      //Creating text for controls text
      if(absenceChangeIsDateStart){
        absenceChangeConfirmationDateStartPicked = new Date(absenceChangeConfirmationDatePicked)
        absenceChangeConfirmationDatePickerTextStart.textContent = `${monthShortList[absenceChangeConfirmationDateStartPicked.getMonth()]} ${absenceChangeConfirmationDateStartPicked.getDate()}, ${absenceChangeConfirmationDateStartPicked.getFullYear()}`;
      }else{
        absenceChangeConfirmationDateEndPicked = new Date(absenceChangeConfirmationDatePicked)
        absenceChangeConfirmationDatePickerTextEnd.textContent = `${monthShortList[absenceChangeConfirmationDateEndPicked.getMonth()]} ${absenceChangeConfirmationDateEndPicked.getDate()}, ${absenceChangeConfirmationDateEndPicked.getFullYear()}`;
      }
      

      renderAbsenceChangeConfirmationCalendar(absenceChangeConfirmationMonth,absenceChangeConfirmationYear)
    }
  })
});

absenceChangeConfirmationHourSelectTextStart.addEventListener('click', function(e) {
  if(!absenceChangeConfirmationHourSelectItemsStart.classList.contains('open')){
    absenceChangeConfirmationHourSelectItemsStart.classList.add('open');
    absenceChangeConfirmationHourSelectItemsStart.classList.add('visible');
    absenceChangeConfirmationHourSelectItemsEnd.classList.remove('open');
    absenceChangeConfirmationHourSelectItemsEnd.classList.remove('visible');
  /* Conditions to close other control-item elements */
  } else {
    absenceChangeConfirmationHourSelectItemsStart.classList.remove('open');
    absenceChangeConfirmationHourSelectItemsStart.classList.remove('visible');
  }
})
absenceChangeConfirmationHourSelectTextEnd.addEventListener('click', function(e) {
  if(!absenceChangeConfirmationHourSelectItemsEnd.classList.contains('open')){
    absenceChangeConfirmationHourSelectItemsEnd.classList.add('open');
    absenceChangeConfirmationHourSelectItemsEnd.classList.add('visible');
    absenceChangeConfirmationHourSelectItemsStart.classList.remove('open');
    absenceChangeConfirmationHourSelectItemsStart.classList.remove('visible');
  /* Conditions to close other control-item elements */

  } else {
    absenceChangeConfirmationHourSelectItemsEnd.classList.remove('open');
    absenceChangeConfirmationHourSelectItemsEnd.classList.remove('visible');
  }
})
for (let i = 0; i < absenceChangeConfirmationHourSelectOptionItemsStart.length; i++) {
  
  absenceChangeConfirmationHourSelectOptionItemsStart[i].addEventListener('click', function(e) {
    absenceChangeConfirmationHourSelectItemsStart.classList.remove('open');
    absenceChangeConfirmationHourSelectItemsStart.classList.remove('visible');
    absenceChangeConfirmationDateFailed.classList.remove('open')
    absenceChangeConfirmationDateFailed.classList.remove('visible')
    for (let j = 0; j < absenceChangeConfirmationHourSelectOptionItemsStart.length; j++) {
      absenceChangeConfirmationHourSelectOptionItemsStart[j].classList.remove('controls__board-hour-option_selected')
    }
    absenceChangeConfirmationHourSelectOptionItemsStart[i].classList.add('controls__board-hour-option_selected')
    absenceChangeConfirmationHourSelectTextStart.textContent = absenceChangeConfirmationHourSelectOptionItemsStart[i].textContent
    absenceChangeConfirmationHourStartTemp = +absenceChangeConfirmationHourSelectOptionItemsStart[i].getAttribute('data-board-hour-value')
    absenceChangeConfirmationMinsStartTemp = +absenceChangeConfirmationHourSelectOptionItemsStart[i].getAttribute('data-board-mins-value')

    if(((absenceChangeConfirmationHourEndTemp*60+absenceChangeConfirmationMinsEndTemp) - (absenceChangeConfirmationHourStartTemp*60+absenceChangeConfirmationMinsStartTemp)) <30){
      absenceChangeConfirmationBoardHourSelectFieldEnd.classList.add('appointment-reschedule-confirmation__board-hour-select-field_failed')
      absenceChangeConfirmationBtnConfirm.classList.add('btn_disabled')
    }else{
      absenceChangeConfirmationBoardHourSelectFieldEnd.classList.remove('appointment-reschedule-confirmation__board-hour-select-field_failed')
      if(absenceChangeConfirmationQuestionServiceResourceInformed.checked==true && (((absenceChangeConfirmationHourEndTemp*60+absenceChangeConfirmationMinsEndTemp) - (absenceChangeConfirmationHourStartTemp*60+absenceChangeConfirmationMinsStartTemp)) >=30)){
        absenceChangeConfirmationBtnConfirm.classList.remove('btn_disabled')
      }
    }
  })
}

for (let i = 0; i < absenceChangeConfirmationHourSelectOptionItemsEnd.length; i++) {
  
  absenceChangeConfirmationHourSelectOptionItemsEnd[i].addEventListener('click', function(e) {
    absenceChangeConfirmationHourSelectItemsEnd.classList.remove('open');
    absenceChangeConfirmationHourSelectItemsEnd.classList.remove('visible');
    for (let j = 0; j < absenceChangeConfirmationHourSelectOptionItemsEnd.length; j++) {
      absenceChangeConfirmationHourSelectOptionItemsEnd[j].classList.remove('controls__board-hour-option_selected')
    }
    absenceChangeConfirmationHourSelectOptionItemsEnd[i].classList.add('controls__board-hour-option_selected')
    absenceChangeConfirmationHourSelectTextEnd.textContent = absenceChangeConfirmationHourSelectOptionItemsEnd[i].textContent
    absenceChangeConfirmationHourEndTemp = +absenceChangeConfirmationHourSelectOptionItemsEnd[i].getAttribute('data-board-hour-value')
    absenceChangeConfirmationMinsEndTemp = +absenceChangeConfirmationHourSelectOptionItemsStart[i].getAttribute('data-board-mins-value')
    if((absenceChangeConfirmationHourEndTemp*60+absenceChangeConfirmationMinsEndTemp) - (absenceChangeConfirmationHourStartTemp*60+absenceChangeConfirmationMinsStartTemp) <30){
      absenceChangeConfirmationBoardHourSelectFieldEnd.classList.add('appointment-reschedule-confirmation__board-hour-select-field_failed')
      absenceChangeConfirmationBtnConfirm.classList.add('btn_disabled')
    }else{
      absenceChangeConfirmationBoardHourSelectFieldEnd.classList.remove('appointment-reschedule-confirmation__board-hour-select-field_failed')
      if(absenceChangeConfirmationQuestionServiceResourceInformed.checked==true && (((absenceChangeConfirmationHourEndTemp*60+absenceChangeConfirmationMinsEndTemp) - (absenceChangeConfirmationHourStartTemp*60+absenceChangeConfirmationMinsStartTemp)) >=30)){
        absenceChangeConfirmationBtnConfirm.classList.remove('btn_disabled')
      }
    }
  })
}


















































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
let appointmentServiceResourceTemp;

let newAppointmentServiceResourceId;
let newAppointmentDateStart;
let newAppointmentDateEnd;

let rows_element;
let cells_element;

function start_dragable_appointments() {
  const appointments_for_drag = document.querySelectorAll('.appointment');
  for (let h = 0; h < appointments_for_drag.length; h++) {
      appointments_for_drag[h].addEventListener("mousedown", function (event) {
        if(event.which===1){
          appontment_for_drag = appointments_for_drag[h];
          appointmentDateStartTemp= new Date(+appontment_for_drag.getAttribute('data-appointment-date-start'))
          appointmentDateEndTemp = new Date(+appontment_for_drag.getAttribute('data-appointment-date-end'))
          appointmentServiceResourceIdTemp = appontment_for_drag.getAttribute('data-appointment-service-resource-id')
          appointmentServiceResourceTemp = appontment_for_drag.closest('.board__row').querySelector('.board__worker-nickname').textContent
          newAppointmentDateStart = new Date(appointmentDateStartTemp)
          newAppointmentDateEnd = new Date(appointmentDateEndTemp)
          newAppointmentServiceResourceId = appointmentServiceResourceIdTemp;
          is_drag = 1;
          if (appointmentHover.classList.contains('open')) {
            appointmentHover.classList.remove('open');
            appointmentHover.classList.remove('visible');
          }
          if(appointmentDropList.classList.contains('open') && appointmentDropList.classList.contains('visible') ){
            appointmentDropList.classList.remove('open');
            appointmentDropList.classList.remove('visible');
          }
        } 

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
  if(dragAndDropConfirmationPopup.classList.contains('open')){
    dragAndDropConfirmationPopup.classList.remove('open');
    dragAndDropConfirmationPopup.classList.remove('visible');
    renderAppointment(appontment_for_drag,appointmentDateStartTemp,appointmentDateEndTemp,appointmentServiceResourceIdTemp)
  } 
  if(appointmentSendNotificationConfirmationPopup.classList.contains('open')){
    appointmentSendNotificationConfirmationPopup.classList.remove('open');
    appointmentSendNotificationConfirmationPopup.classList.remove('visible');
  }
  if(appointmentRescheduleConfirmationPopup.classList.contains('open')){
    appointmentRescheduleConfirmationPopup.classList.remove('open');
    appointmentRescheduleConfirmationPopup.classList.remove('visible');
  }
  if(appointmentCancelConfirmationPopup.classList.contains('open')){
    appointmentCancelConfirmationPopup.classList.remove('open');
    appointmentCancelConfirmationPopup.classList.remove('visible');
  }
  if(absenceCancelConfirmationPopup.classList.contains('open')){
    absenceCancelConfirmationPopup.classList.remove('open');
    absenceCancelConfirmationPopup.classList.remove('visible');
  } 
  if(absenceChangeConfirmationPopup.classList.contains('open')){
    absenceChangeConfirmationPopup.classList.remove('open');
    absenceChangeConfirmationPopup.classList.remove('visible');
  }
})
dragAndDropConfirmationBtnConfirm.addEventListener('click',function(){
  if (popupWindow.classList.contains('open')) {
    popupWindow.classList.remove('open');
    popupWindow.classList.remove('visible');
  }
  if(dragAndDropConfirmationPopup.classList.contains('open')){
    dragAndDropConfirmationPopup.classList.remove('open');
    dragAndDropConfirmationPopup.classList.remove('visible');
  } 

})
dragAndDropConfirmationBtnDeny.addEventListener('click',function(){
  if (popupWindow.classList.contains('open')) {
    popupWindow.classList.remove('open');
    popupWindow.classList.remove('visible');
  }
  if(dragAndDropConfirmationPopup.classList.contains('open')){
    dragAndDropConfirmationPopup.classList.remove('open');
    dragAndDropConfirmationPopup.classList.remove('visible');
  } 
  renderAppointment(appontment_for_drag,appointmentDateStartTemp,appointmentDateEndTemp,appointmentServiceResourceIdTemp)
})
dragAndDropConfirmationQuestionClientInformed.addEventListener('click',function(){
  if(dragAndDropConfirmationQuestionClientInformed.checked==true &&dragAndDropConfirmationQuestionServiceResourceInformed.checked==true){
    dragAndDropConfirmationBtnConfirm.classList.remove('btn_disabled')
  } else{
    dragAndDropConfirmationBtnConfirm.classList.add('btn_disabled')
  }
})
dragAndDropConfirmationQuestionServiceResourceInformed.addEventListener('click',function(){
  if(dragAndDropConfirmationQuestionClientInformed.checked==true &&dragAndDropConfirmationQuestionServiceResourceInformed.checked==true){
    dragAndDropConfirmationBtnConfirm.classList.remove('btn_disabled')
  } else{
    dragAndDropConfirmationBtnConfirm.classList.add('btn_disabled')
  }
})
 
document.addEventListener("mouseup", function (event) {
  if(
    is_drag===1 && 
    rows_element!==undefined && cells_element!==undefined && newAppointmentDateStart!==undefined && newAppointmentDateEnd!==undefined && newAppointmentServiceResourceId!==undefined&&(
    (Date.parse(newAppointmentDateStart) !== Date.parse(appointmentDateStartTemp) &&Date.parse(newAppointmentDateEnd) !== Date.parse(appointmentDateEndTemp) )|| newAppointmentServiceResourceId !==appointmentServiceResourceIdTemp)
    ){
    if(!popupWindow.classList.contains('open')){
      popupWindow.classList.add('open');
      popupWindow.classList.add('visible');
      dragAndDropConfirmationBtnConfirm.classList.add('btn_disabled')
      for(let i=0; i<dragAndDropConfirmationQuestionsItemsCheckbox.length; i++){
        dragAndDropConfirmationQuestionsItemsCheckbox[i].checked=false
      }
    }else{
      popupWindow.classList.remove('open');
      popupWindow.classList.remove('visible');
    }
    if(!dragAndDropConfirmationPopup.classList.contains('open')){
      dragAndDropConfirmationPopup.classList.add('open');
      dragAndDropConfirmationPopup.classList.add('visible');
    } else {
      dragAndDropConfirmationPopup.classList.remove('open');
      dragAndDropConfirmationPopup.classList.remove('visible');
    }
    
    if(appontment_for_drag.getAttribute('data-appointment-notification') ==='true'){
      dragAndDropConfirmationQuestionServiceResourceNotification.style.display = 'block'
    } else {
      dragAndDropConfirmationQuestionServiceResourceNotification.style.display = 'none'
    }
    
    dragAndDropConfirmationDateOld.textContent = converTime(appointmentDateStartTemp) + "-" + converTime(appointmentDateEndTemp) + " "+ appointmentDateStartTemp.getDate() + " " + monthShortList[appointmentDateStartTemp.getMonth()] 
    dragAndDropConfirmationDateNew.textContent = converTime(newAppointmentDateStart) + "-" + converTime(newAppointmentDateEnd) + " "+ newAppointmentDateStart.getDate() + " " + monthShortList[newAppointmentDateStart.getMonth()] 
    dragAndDropConfirmationJobNumber.textContent=appontment_for_drag.querySelector('.appointment__job-number').textContent
    dragAndDropConfirmationServiceResourceNicknameNew.textContent = "(" +appontment_for_drag.closest('.board__row').querySelector('.board__worker-nickname').textContent + ")"
    dragAndDropConfirmationServiceResourceNicknameOld.textContent = "(" +appointmentServiceResourceTemp + ")"

  }
  is_drag = 0;
  
});
function start_drag_and_drop_appointments() {  

  const rows_of_cells = document.querySelectorAll('.timegrid__row');
  
  var min_y = 10000;
  if (glob_mouse_X != 0 && glob_mouse_Y != 0) {
      for (let w = 0; w < rows_of_cells.length; w++) {
          if ((Math.abs(rows_of_cells[w].getBoundingClientRect().top - glob_mouse_Y)) < min_y) {
              min_y = Math.abs(rows_of_cells[w].getBoundingClientRect().top - glob_mouse_Y);
              rows_element = rows_of_cells[w];}

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
    if (appointmentHover.classList.contains('open')) {
      appointmentHover.classList.remove('open');
      appointmentHover.classList.remove('visible');
    }
    if(appointmentDropList.classList.contains('open') && appointmentDropList.classList.contains('visible') ){
      appointmentDropList.classList.remove('open');
      appointmentDropList.classList.remove('visible');
    }

   if(rows_element!==undefined && cells_element!==undefined && appontment_for_drag!==undefined){
    const cellsElementDate = +cells_element.getAttribute('data-cell-date')
    const appointappointmentForDragDuration = +appontment_for_drag.getAttribute('data-appointment-duration')
    newAppointmentServiceResourceId = rows_element.getAttribute('data-service-resource')
    newAppointmentDateStart = new Date(+cellsElementDate)
    newAppointmentDateEnd = new Date(+cellsElementDate+appointappointmentForDragDuration)
    
    

    renderAppointment(appontment_for_drag,newAppointmentDateStart,newAppointmentDateEnd,newAppointmentServiceResourceId)  
   }

}


const renderAppointment = (appointmentsItem,appointmentDateStart,appointmentDateEnd,appointmentServiceResourceId)=>{
  console.log(appointmentDateEnd)
  let boardCellWidth = 100/((boardHourEnd-boardHourStart)*daysAmountValue*2)
  let scheduleDay;
  appointmentsItem.setAttribute('data-appointment-date-start',appointmentDateStart.getTime())
  appointmentsItem.setAttribute('data-appointment-date-end',appointmentDateEnd.getTime())
  appointmentsItem.setAttribute('data-appointment-duration',(appointmentDateEnd.getTime()-appointmentDateStart.getTime()))
  appointmentsItem.setAttribute('data-appointment-service-resource-id',appointmentServiceResourceId)
  const scheduleItems =  appointmentsHash.get(appointmentServiceResourceId)
    const appointments =document.querySelectorAll('.appointment');
    const scheduleItemsAppointemnts = scheduleItems.querySelectorAll('.appointment')

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
  let iconSetted = false
  for (let j=0; j<daysAmountValue; j++){
    const boardDateStart = new Date(datePicked.getFullYear(),datePicked.getMonth(),datePicked.getDate(),boardHourStart,0,0,0 )

    const boardDateEnd = new Date(datePicked.getFullYear(),datePicked.getMonth(),datePicked.getDate(),boardHourEnd,0,0,0)

    const boardDateStartTemp = new Date(boardDateStart.getTime())
    boardDateStartTemp.setDate(boardDateStart.getDate()+j)

    const boardDateEndTemp = new Date(boardDateEnd.getTime())
    boardDateEndTemp.setDate(boardDateEnd.getDate()+j);

    let absenceWidth;
    let absenceOffset;

    if((Date.parse(absenceDateStart) >=Date.parse(boardDateStartTemp) && Date.parse(absenceDateStart) <=Date.parse(boardDateEndTemp) &&Date.parse(absenceDateEnd) >= Date.parse(boardDateEndTemp))){
      absenceWidth= (boardDateEndTemp-absenceDateStart)/1000/60/60*2*boardCellWidth*daysAmountValue
      absenceOffset =((absenceDateStart-boardDateStartTemp)/1000/60/60) *2*boardCellWidth*daysAmountValue +boardCellWidth*0.10
    } else if((Date.parse(absenceDateEnd) >=Date.parse(boardDateStartTemp) && Date.parse(absenceDateEnd) <=Date.parse(boardDateEndTemp)&&Date.parse(absenceDateStart) <= Date.parse(boardDateStartTemp))){
      absenceWidth= (absenceDateEnd-boardDateStartTemp)/1000/60/60*2*boardCellWidth*daysAmountValue-0.20*boardCellWidth;
      absenceOffset = 0;
    } else if((Date.parse(absenceDateStart) >=Date.parse(boardDateStartTemp) && Date.parse(absenceDateEnd) <=Date.parse(boardDateEndTemp))){
      absenceWidth= (absenceDateEnd-absenceDateStart)/1000/60/60*2*boardCellWidth*daysAmountValue-0.20*boardCellWidth
      absenceOffset =((absenceDateStart-boardDateStartTemp)/1000/60/60) *2*boardCellWidth*daysAmountValue+boardCellWidth*0.10
    } else if((Date.parse(absenceDateStart) <Date.parse(boardDateStartTemp) && Date.parse(absenceDateEnd) > Date.parse(boardDateEndTemp))){
      absenceWidth = 100;
      absenceOffset= 0
    }
    if ((Date.parse(absenceDateStart) >=Date.parse(boardDateStartTemp) && Date.parse(absenceDateEnd) <=Date.parse(boardDateEndTemp)) || 
        (Date.parse(absenceDateStart) >=Date.parse(boardDateStartTemp) && Date.parse(absenceDateStart) <=Date.parse(boardDateEndTemp)) ||
        (Date.parse(absenceDateEnd) >=Date.parse(boardDateStartTemp) && Date.parse(absenceDateEnd) <=Date.parse(boardDateEndTemp)) ||
        (Date.parse(absenceDateStart) <=Date.parse(boardDateStartTemp) && Date.parse(absenceDateEnd) >=Date.parse(boardDateEndTemp)) 
    ){
      if(!iconSetted){
        const iconAbsence = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        iconAbsence.setAttribute("viewBox", "0 0 15.52 20");
        iconAbsence.style.width = "35px";
        iconAbsence.style.height = "35px";
        let path
        path =  document.createElementNS("http://www.w3.org/2000/svg", 'path'); //Create a path in SVG's namespace
        path.setAttribute("d","M3.54,8.64a.18.18,0,0,1,.09,0,.28.28,0,0,1,.12.16.34.34,0,0,1,0,.11,9.62,9.62,0,0,0,.29,2.62,7.38,7.38,0,0,0,1,2.29,4.19,4.19,0,0,0,.49.64l0,.05a5.24,5.24,0,0,0,1.57,1.16A6.6,6.6,0,0,0,10,16.3h.1a.29.29,0,0,1,.18.33.29.29,0,0,1-.23.23H10a8.51,8.51,0,0,1-1.81-.2A6.28,6.28,0,0,1,6.37,16a5.13,5.13,0,0,1-.83-.62A6.32,6.32,0,0,1,4,13.26l-.09-.19h0a9.64,9.64,0,0,1-.65-2.38A10,10,0,0,1,3.18,9V8.91h0a.29.29,0,0,1,0-.1.3.3,0,0,1,.18-.17h.15Z"); //Set path's data
        iconAbsence.appendChild(path)
        path =  document.createElementNS("http://www.w3.org/2000/svg", 'path'); //Create a path in SVG's namespace
        path.setAttribute("d","M16.56,8.63l.1,0a.27.27,0,0,1,.13.15.29.29,0,0,1,0,.11,9.79,9.79,0,0,1-.07,1.44c0,.29-.08.59-.14.88a8.74,8.74,0,0,1-.68,2.1A6.23,6.23,0,0,1,14.79,15l-.09.1,0,.05a6,6,0,0,1-1.16.87,6.13,6.13,0,0,1-1.9.69,8.61,8.61,0,0,1-1.58.15H10a.29.29,0,0,1,0-.57.48.48,0,0,1,.12,0,6.75,6.75,0,0,0,2.74-.56,5.1,5.1,0,0,0,1.26-.83,5.86,5.86,0,0,0,1.32-1.78l0-.06h0a8.68,8.68,0,0,0,.75-2.77,8.73,8.73,0,0,0,.07-1.35h0s0-.06,0-.1a.3.3,0,0,1,.16-.19l.1,0Z"); //Set path's data
        iconAbsence.appendChild(path)
        path =  document.createElementNS("http://www.w3.org/2000/svg", 'path'); //Create a path in SVG's namespace
        path.setAttribute("d","M10,7.33A25.92,25.92,0,0,1,14,7.6l.17,0a9.72,9.72,0,0,1,1.75.43,2.48,2.48,0,0,1,.56.29l.12.1h0s0,0,0,0l0,0a.42.42,0,0,1,.09.14l0,0h0l0,.1a.35.35,0,0,1,0,.07.47.47,0,0,1,0,.17.43.43,0,0,1,0,.1l0,0-.05.08a.27.27,0,0,1-.07.08l0,.05-.07.06-.1.07a3.09,3.09,0,0,1-.85.37,8.3,8.3,0,0,1-1.24.29,26,26,0,0,1-4.75.32c-.73,0-1.46,0-2.18-.1A17.68,17.68,0,0,1,4.89,10a5.45,5.45,0,0,1-1-.32,2.13,2.13,0,0,1-.44-.26l0,0a1.24,1.24,0,0,1-.18-.22v0l0,0a.59.59,0,0,1,0-.37h0a.1.1,0,0,0,0,0v0l0,0a.91.91,0,0,1,.11-.16l.08-.08A2.38,2.38,0,0,1,4,8.07a8.5,8.5,0,0,1,1.65-.42,24.59,24.59,0,0,1,3.18-.3ZM3.76,8.92l0,0a.91.91,0,0,0,.38.24l.43.16.08,0a14.63,14.63,0,0,0,2.89.47,30.08,30.08,0,0,0,4.65,0,18.45,18.45,0,0,0,2.57-.34c.19,0,.37-.09.56-.15h0a2.68,2.68,0,0,0,.72-.3.41.41,0,0,0,.15-.14l0,0a.89.89,0,0,0-.33-.21,5.88,5.88,0,0,0-1.3-.38A19.08,19.08,0,0,0,11.77,8,31.37,31.37,0,0,0,7.89,8a17.25,17.25,0,0,0-2.77.38,4.24,4.24,0,0,0-1.06.34.72.72,0,0,0-.28.2Zm0,0Z") //Set path's data
        iconAbsence.appendChild(path)
        
        path =  document.createElementNS("http://www.w3.org/2000/svg", 'path'); //Create a path in SVG's namespace
        path.setAttribute("d","M8.66,1h.05a.27.27,0,0,1,.13.07.94.94,0,0,1,.09.12,2.17,2.17,0,0,1,.43,1.31,2.2,2.2,0,0,1-.45,1.05,1.6,1.6,0,0,0-.41,1,1.72,1.72,0,0,0,.38.9l0,0,0,0a.29.29,0,0,1-.49.28c0-.06-.09-.13-.14-.2a3.45,3.45,0,0,1-.24-.47.45.45,0,0,1,0-.08A1.56,1.56,0,0,1,8,4.17a1.79,1.79,0,0,1,.16-.44.3.3,0,0,0,0-.06c.15-.25.34-.48.48-.74a1,1,0,0,0,.15-.68,2.13,2.13,0,0,0-.36-.78h0l0-.05a.17.17,0,0,1,0-.1A.29.29,0,0,1,8.52,1l.09,0Z"); //Set path's data
        iconAbsence.appendChild(path)

        path =  document.createElementNS("http://www.w3.org/2000/svg", 'path'); //Create a path in SVG's namespace
        path.setAttribute("d","M10,1h.05a.27.27,0,0,1,.13.07.94.94,0,0,1,.09.12,2.17,2.17,0,0,1,.43,1.31,2.2,2.2,0,0,1-.45,1.05,1.6,1.6,0,0,0-.41,1,1.72,1.72,0,0,0,.38.9l0,0a.54.54,0,0,1,0,.1.31.31,0,0,1-.22.31.32.32,0,0,1-.28-.08c0-.06-.09-.13-.14-.2a2.6,2.6,0,0,1-.24-.47.45.45,0,0,1,0-.08,1.56,1.56,0,0,1-.07-.88,1.79,1.79,0,0,1,.16-.44.3.3,0,0,0,0-.06c.15-.25.34-.48.48-.74a1,1,0,0,0,.15-.68,2.13,2.13,0,0,0-.36-.78h0l0-.05a.17.17,0,0,1,0-.1A.29.29,0,0,1,9.88,1L10,1Z"); //Set path's data
        iconAbsence.appendChild(path)

        path =  document.createElementNS("http://www.w3.org/2000/svg", 'path');
        path.setAttribute("d","M11.3842 1C11.401 1.003 11.4178 1.0046 11.4342 1.009C11.4832 1.0222 11.5284 1.0486 11.5642 1.0844C11.5994 1.1198 11.624 1.1624 11.6512 1.2032C11.9118 1.5946 12.112 2.04 12.0794 2.508C12.052 2.9012 11.8378 3.2626 11.632 3.5582C11.4276 3.8518 11.1954 4.1524 11.216 4.5288C11.2342 4.8598 11.4122 5.165 11.597 5.4308L11.622 5.4748C11.6336 5.5066 11.645 5.5386 11.6478 5.5722C11.659 5.707 11.564 5.8424 11.4326 5.8772C11.3344 5.903 11.224 5.8732 11.1524 5.801C11.0964 5.7444 11.058 5.6724 11.0146 5.6034C10.9194 5.4528 10.8346 5.2956 10.769 5.131C10.769 5.131 10.7522 5.0886 10.7378 5.0484C10.6386 4.7682 10.6036 4.4642 10.6668 4.1712C10.7002 4.017 10.7578 3.8694 10.832 3.7298C10.832 3.7298 10.8484 3.6988 10.863 3.6728C11.0064 3.4178 11.1974 3.194 11.3446 2.9342C11.4586 2.733 11.5302 2.5064 11.4898 2.2538C11.4442 1.9688 11.2944 1.7072 11.1286 1.4672L11.1204 1.4554L11.0952 1.4116C11.08 1.3694 11.073 1.3592 11.0692 1.314C11.0592 1.1972 11.128 1.0762 11.2362 1.026C11.2774 1.0068 11.2896 1.0076 11.3336 1C11.3506 1 11.3674 1 11.3842 1Z"); //Set path's data
        iconAbsence.appendChild(path)

        path =  document.createElementNS("http://www.w3.org/2000/svg", 'path');
        path.setAttribute("d","M11.38,1h0a.27.27,0,0,1,.13.07.94.94,0,0,1,.09.12,2.17,2.17,0,0,1,.43,1.31,2.2,2.2,0,0,1-.45,1.05,1.6,1.6,0,0,0-.41,1,1.72,1.72,0,0,0,.38.9l0,0a.54.54,0,0,1,0,.1.31.31,0,0,1-.22.31.32.32,0,0,1-.28-.08c-.05-.06-.09-.13-.14-.2a2.6,2.6,0,0,1-.24-.47.45.45,0,0,1,0-.08,1.56,1.56,0,0,1-.07-.88,1.79,1.79,0,0,1,.16-.44.3.3,0,0,0,0-.06c.15-.25.34-.48.48-.74a1,1,0,0,0,.15-.68,2.13,2.13,0,0,0-.36-.78h0l0-.05a.17.17,0,0,1,0-.1A.29.29,0,0,1,11.24,1l.09,0Z"); //Set path's data
        iconAbsence.appendChild(path)

        path =  document.createElementNS("http://www.w3.org/2000/svg", 'path');
        path.setAttribute("d","M4.42,13.43l.34.49-.42.19a4.11,4.11,0,0,0-1,.62,1.76,1.76,0,0,0-.47.62,1,1,0,0,0,0,.76,2,2,0,0,0,.69.8,5.89,5.89,0,0,0,1.48.75A13,13,0,0,0,8,18.31c.48.05,1,.08,1.44.1a18.62,18.62,0,0,0,2.69-.11,14.22,14.22,0,0,0,2.16-.42c.31-.09.62-.19.92-.31a6.35,6.35,0,0,0,.91-.44,3.7,3.7,0,0,0,.67-.51,2.29,2.29,0,0,0,.32-.43,1,1,0,0,0,.06-.75,1.93,1.93,0,0,0-.78-.93,6,6,0,0,0-1.06-.57l.31-.5.52.25a4,4,0,0,1,1.18.9,3.43,3.43,0,0,1,.24.33l.09.19h0a1.15,1.15,0,0,1,.06.17h0a1.5,1.5,0,0,1,0,.89,2.27,2.27,0,0,1-.78,1.07,3.45,3.45,0,0,1-.5.35,6.29,6.29,0,0,1-1.2.57c-.25.1-.51.18-.77.26a14.93,14.93,0,0,1-2.9.51,19.61,19.61,0,0,1-2.42,0,16.55,16.55,0,0,1-2.92-.39,9.47,9.47,0,0,1-1.38-.4,7.34,7.34,0,0,1-1.35-.66,2.76,2.76,0,0,1-1.13-1.24,1.57,1.57,0,0,1,.11-1.35,2.82,2.82,0,0,1,.8-.85A5.6,5.6,0,0,1,4.42,13.43Z"); //Set path's data
        iconAbsence.appendChild(path)
        absencesItem.appendChild(iconAbsence)
        iconSetted=true
      }
      absencesItem.style.left = `${absenceOffset}%`
      absencesItem.classList.remove("appointment_hide")
      absencesItem.style.width = `${absenceWidth}%`
      scheduleDay = j+1
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
    absencesItem.setAttribute('data-absence-service-resource-id',absenceServiceResourceId)
    absencesItem.setAttribute('data-absence-date-start',absenceDateStart.getTime())
    absencesItem.setAttribute('data-absence-date-end',absenceDateEnd.getTime())
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
const serviceResourcesTimeSlots = boardData.time_slots
  for(let i=0; i< timegridRows.length; i++){
    while (timegridRows[i].firstChild) {
      timegridRows[i].removeChild(timegridRows[i].firstChild);
    }

    const serviceResourceId = timegridRows[i].getAttribute('data-service-resource')
    let serviceResourceTimeSlots =serviceResourcesTimeSlots[serviceResourceId]

    let datePickedTemp;
    let timeGridCell;
    datePickedTemp = new Date(datePicked.getFullYear(),datePicked.getMonth(),datePicked.getDate(),boardHourStart,0,0,0)
    for(let j=0; j< (boardHourEnd-boardHourStart)*daysAmountValue*2; j++){
      if (j!==0){datePickedTemp.setMinutes(datePickedTemp.getMinutes()+ 30)}
      if (j%((boardHourEnd-boardHourStart)*2)===0 && j!==0){
        datePickedTemp.setDate(datePickedTemp.getDate()+1)
        datePickedTemp.setHours(boardHourStart)
        datePickedTemp.setMinutes(0)
        timeGridCell = crEl('div','timegrid__cell timegrid__cell_end')
        timeGridCell.setAttribute('data-cell-date',datePickedTemp.getTime())
        timeGridCell.style.width=boardCellWidth+"%"

      } else{
        timeGridCell = crEl('div','timegrid__cell')
        timeGridCell.setAttribute('data-cell-date',datePickedTemp.getTime())
        timeGridCell.style.width=boardCellWidth+"%"

      }
      if(serviceResourceTimeSlots!==undefined){
        for(let x=0;x<serviceResourceTimeSlots.length;x++){
          let serviceResourceTimeSlot=serviceResourceTimeSlots[x]
          if(serviceResourceTimeSlot["time_slot_type"]==="regular" && Date.parse(datePickedTemp)>=Date.parse(serviceResourceTimeSlot["time_slot_start"]) && Date.parse(datePickedTemp)<Date.parse(serviceResourceTimeSlot["time_slot_end"])){
            timeGridCell.classList.add('timegrid__cell_regular')
            timeGridCell.classList.remove('timegrid__cell_temporary')
            break;
          }else if(serviceResourceTimeSlot["time_slot_type"]==="temporary" && Date.parse(datePickedTemp)>=Date.parse(serviceResourceTimeSlot["time_slot_start"]) && Date.parse(datePickedTemp)<Date.parse(serviceResourceTimeSlot["time_slot_end"])){
            timeGridCell.classList.add('timegrid__cell_temporary')
          }
        }
      }
      timegridRows[i].appendChild(timeGridCell)
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
    appointmentsItem.setAttribute('data-appointment-notification',appointmentNotification)
    if(appointmentType=="FU"){
      appointmentsItem.classList.add("appointment_follow")
    } else if(appointmentType=="SC"){
      appointmentsItem.classList.add("appointment_service")
    } else if(appointmentType=="RC"){
      appointmentsItem.classList.add("appointment_recall")
    }

    appointmentNotification?appointmentsItem.classList.add("appointment_notification"):appointmentsItem.classList.remove("appointment_notification")
    const appointmentsItemJob = crEl("div","appointment__job")
    const appointmentsItemJobNumber = crEl("p","appointment__job-number",appointmentJobNumber)  //create appointment job number
    const appointmentsItemZip = crEl("p","appointment__zip",`zip: ${appointmentZip}`)  //create appointment zip
    const appointmentsItemJobInfo = crEl("p","appointment__job-info",` (${appointmentInfo})`)
    appointmentsItemJob.appendChild(appointmentsItemJobNumber)
    appointmentsItemJob.appendChild(appointmentsItemJobInfo)

    appointmentsItem.appendChild(appointmentsItemJob)
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
    absencesItem.setAttribute('data-absence-service-resource-id',absenceServiceResourceId)
    absencesItem.setAttribute('data-absence-date-start',absenceDateStart.getTime())
    absencesItem.setAttribute('data-absence-date-end',absenceDateEnd.getTime())
    renderAbsence(absencesItem,absenceDateStart,absenceDateEnd,absenceServiceResourceId)
  }
  const appointmentsForEvents = document.querySelectorAll('.appointment')
  const absencesForEvents=document.querySelectorAll('.absence')

  for(let i=0; i<absencesForEvents.length; i++){
    let absenceY,absenceX;
    let absence = absencesForEvents[i];
    absence.addEventListener('contextmenu', function(event){
      event.preventDefault()
      console.log('test')
      if (!absenceDropList.classList.contains('open')) {
        absenceDropList.classList.add('open');
        absenceDropList.classList.add('visible');
      }

      contextAbsence = event.currentTarget
      contextAbsenceServiceResourceTemp = event.currentTarget.closest('.board__row').querySelector('.board__worker-nickname').textContent
      contextAbsenceDateStartTemp=new Date(+event.currentTarget.getAttribute('data-absence-date-start'))
      contextAbsenceDateEndTemp=new Date(+event.currentTarget.getAttribute('data-absence-date-end'))
      
      absenceX = event.currentTarget.getBoundingClientRect().x
      absenceY = event.currentTarget.getBoundingClientRect().y
      absenceDropList.style.left= absenceX +"px"
      absenceDropList.style.top= (absenceY+event.currentTarget.offsetHeight+5)+"px"
  })
  }

  for(let i=0; i<appointmentsForEvents.length; i++){
    let appointmentX,appointmentY;
    let appointment= appointmentsForEvents[i];
    appointment.addEventListener('mouseover', function(event){
    if (!appointmentHover.classList.contains('open')) {
        appointmentHover.classList.add('open');
        appointmentHover.classList.add('visible');
      }
      appointmentX = event.currentTarget.getBoundingClientRect().x
      appointmentY = event.currentTarget.getBoundingClientRect().y
      appointmentHoverJobNumber.textContent =  event.currentTarget.querySelector('.appointment__job-number').textContent
      appointmentHoverJobInfo.textContent =  event.currentTarget.querySelector('.appointment__job-info').textContent
      appointmentHoverZip.textContent =  event.currentTarget.querySelector('.appointment__zip').textContent
      appointmentHover.style.left= appointmentX +"px"
      appointmentHover.style.top= (appointmentY+event.currentTarget.offsetHeight+5)+"px"
      
    })
    appointment.addEventListener('mouseout', function(event){
      if (appointmentHover.classList.contains('open')) {
        appointmentHover.classList.remove('open');
        appointmentHover.classList.remove('visible');
      }
    })
    appointment.addEventListener('contextmenu', function(event){
        event.preventDefault()
        if (!appointmentDropList.classList.contains('open')) {
          appointmentDropList.classList.add('open');
          appointmentDropList.classList.add('visible');
        }

        contextAppointment = event.currentTarget
        contextAppointmentServiceResourceTemp = event.currentTarget.closest('.board__row').querySelector('.board__worker-nickname').textContent
        contextAppointmentServiceResourceIdTemp = event.currentTarget.getAttribute('data-appointment-service-resource-id')
        contextAppointmentDateStartTemp=new Date(+event.currentTarget.getAttribute('data-appointment-date-start'))
        contextAppointmentDateEndTemp=new Date(+event.currentTarget.getAttribute('data-appointment-date-end'))
        contextAppointmentJobNumber = event.currentTarget.querySelector('.appointment__job-number').textContent
        
        appointmentX = event.currentTarget.getBoundingClientRect().x
        appointmentY = event.currentTarget.getBoundingClientRect().y
        appointmentDropList.style.left= appointmentX +"px"
        appointmentDropList.style.top= (appointmentY+event.currentTarget.offsetHeight+5)+"px"
    })
  }

  start_dragable_appointments()

}
//init

renderBoard(daysAmountValue,timelineStep)







