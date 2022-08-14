
    function createCalendar(elem, year, month) {

      let mon = month - 1;
      let d = new Date(year, mon);

      let table = '<table><tr><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th><th>SU</th></tr><tr>';

      for (let i = 0; i < getDay(d); i++) {
        table += '<td></td>';
      }

      while (d.getMonth() == mon) {
        table += '<td>' + d.getDate() + '</td>';

        if (getDay(d) % 7 == 6) { 
          table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
      }

      if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
          table += '<td></td>';
        }
      }

      table += '</tr></table>';

      elem.innerHTML = table;
    }

    function getDay(date) { 
      let day = date.getDay();
      if (day == 0) day = 7; 
      return day - 1;
    }
    let date=new Date();
    let year=date.getFullYear();
    let month=date.getMonth()+1;
    
    function isValidYear(){
      let askYear=prompt("Enter the year",year);
      if(askYear>1900 && askYear<2100){
        return askYear;
      }
      else{
        alert("You have entered an invalid year");
        return isValidYear()
      }
    }
    function isValidMonth(){
      let askMonth=prompt("Enter the month",month);
      if(askMonth>=1 && askMonth<=12){
        return askMonth;
      }
      else{
        alert("You have entered an invalid month");
        return isValidMonth()
      }
    }
   
    createCalendar(document.getElementById("calendar"), isValidYear(), isValidMonth());
