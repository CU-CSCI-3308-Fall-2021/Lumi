  function toggleTable() {
    var lTable = document.getElementById("weather-table");
    lTable.style.display = (lTable.style.display == "table") ? "none" : "table";
  }
  function show_hide_column() {
    var table = document.getElementById("weather-table");
    for (var i = 0, row; row = table.rows[i]; i++) {
      for (var j = 0, col; col = row.cells[j]; j++) {
        if (j==4)
        {
          col.style.display="none";
        }
      }
    }
    element.style.display = "none";
  }
  function isUser()
  {
    var user=false;
    if (user!=true)
    {
      show_hide_column();
    }
  }
