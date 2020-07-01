var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Mobile Menu


// var mobileMenu = document.getElementsByClassName("mobile-menu-light");

// function showMenu(){
//   if (mobileMenu.style.display == "none") {
//     mobileMenu.style.display == "block";
//   } else {
//     mobileMenu.style.display === "none";
//   }
// }

// document.querySelector(".bar");


const menu = document.getElementById('menu');
const bar = document.querySelector('.bar');
const closeMenu = document.querySelector('.bar-close');

bar.addEventListener('click', function() {
  if(menu.classList.contains('d-none')){
    menu.classList.remove('d-none');
  } 
});

closeMenu.addEventListener('click', function() {
    menu.classList.add('d-none');
});



/*


// Calendar

window.onload = function(){
  var d = new Date();
  var month_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var month = d.getMonth();   //0-11
  var year = d.getFullYear(); //2014
  var first_date = month_name[month] + " " + 1 + " " + year;
  //September 1 2014
  var tmp = new Date(first_date).toDateString();
  //Mon Sep 01 2014 ...
  var first_day = tmp.substring(0, 3);    //Mon
  var day_name = ['Mon','Tue','Wed','Thu','Fri','Sat', 'Sun'];
  var day_no = day_name.indexOf(first_day);   //1
  var days = new Date(year, month+1, 0).getDate();    //30
  //Tue Sep 30 2014 ...
  var calendar = get_calendar(day_no, days);
  document.getElementById("calendar-month-year").innerHTML = month_name[month]+" "+year;
  document.getElementById("calendar-dates").appendChild(calendar);
}

function get_calendar(day_no, days){
  var table = document.createElement('table');
  var tr = document.createElement('tr');
  
  //row for the day letters
  for(var c=0; c<=6; c++){
      var td = document.createElement('td');
      td.innerHTML = "MTWTFSS"[c];
      tr.appendChild(td);
  }
  table.appendChild(tr);
  
  //create 2nd row
  tr = document.createElement('tr');
  var c;
  for(c=0; c<=6; c++){
      if(c == day_no){
          break;
      }
      var td = document.createElement('td');
      td.innerHTML = "";
      tr.appendChild(td);
  }
  
  var count = 1;
  for(; c<=6; c++){
      var td = document.createElement('td');
      td.innerHTML = count;
      count++;
      tr.appendChild(td);
  }
  table.appendChild(tr);
  
  //rest of the date rows
  for(var r=3; r<=7; r++){
      tr = document.createElement('tr');
      for(var c=0; c<=6; c++){
          if(count > days){
              table.appendChild(tr);
              return table;
          }
          var td = document.createElement('td');
          td.innerHTML = count;
          count++;
          tr.appendChild(td);
      }
      table.appendChild(tr);
  }
return table;
}


// Calendar 2

const date = new Date();

const renderCalendar = () => {
  date.setDate(2);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();

function tabLink(evt, id) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(id).style.display = "block";
  evt.currentTarget.className += " active";
}

*/