const days = ["Minggu","Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu"];


var today = new Date();
var hari = days[today.getDay()];
var date = days[today.getDay()]+', '+today.getDate()+'-'
+(today.getMonth()+1)+'-'+today.getFullYear();

document.getElementById("tanggal").innerHTML = date;