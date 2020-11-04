

        var table = document.createElement("table");
        table.setAttribute("class", "tableClass");
        var tr, td;
        for (var i = 0, a = 9; i < 10, a >= 0; i++, a--) {
            tr = document.createElement("tr");
            tr.setAttribute("class", "trClass");
            table.appendChild(tr);
            for(var j=0;j<10;j++){
                td = document.createElement("td");
                td.setAttribute("class", "tdClass");
                  switch (i) {
                    case 0:
                      td.innerHTML = letters[j];
                      break;
                    case 1:
                      td.innerHTML = blackFigs1[j];
                      break;
                    case 2:
                      td.innerHTML = blackFigs2[j];
                      break;
                    case 7:
                      td.innerHTML = whiteFigs2[j];
                      break;
                    case 8:
                      td.innerHTML = whiteFigs1[j];
                      break;
                    case 9:
                      td.innerHTML = letters[j];
                      break;
                    default:
                        if ( j == 0 || j == 9 ) {
                          td.innerHTML = a;
                      }
                      break;
                  }
                tr.appendChild(td);
            }
        }
        document.querySelector("div").appendChild(table);

