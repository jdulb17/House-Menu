// 
//
// function Workday() {
//   day = '';
//   lunch = '';
//   dinner = '';
// }
//
// var menu = {
//   init: function(){
//     menu.getDay();
//     this.setupEventListeners();
//   },
//
//   setupEventListeners: function(){
//
//   },
//
//   getDay: function(){
//     var date = new Date();
//     var day = date.getDay() -1;
//     if(day == -1){
//       day = 6;
//     }
//     var arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//
//     while(day <= 6) {
//       menu.buildDay(arr[day]);
//       day++
//     }
//   },
//
//   buildDay: function(currday){
//     var day = new Workday();
//     day.day = currday;
//     console.log(day);
//   }
// }
// menu.init();
