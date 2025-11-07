export function initCalendar() {
   const monthCalendarElement = document.querySelector("[data-month-calendar]");
   const weekCalendarElement = document.querySelector("[data-week-calendar]");
   
    document.addEventListener("view-change", 
        (event) => {
       const selectedView = event.detail.view;
      
       if(selectedView === "month"){
    monthCalendarElement.style.display = "block"; 
    weekCalendarElement.style.display = "none";
       }else if(selectedView === "week"){
      monthCalendarElement.style.display = "none"; 
      weekCalendarElement.style.display = "block";
       }else{
    monthCalendarElement.style.display = "none";
    weekCalendarElement.style.display = "none";
       }
});
}

