function laatikkoFunktio(boxNumber){
    alert("Nyt vaihdetaan laatikko"+ boxNumber + ":n sisältöä!");

    if (boxNumber == 1){
        document.getElementById("laatikko1").innerHTML = "<h1 class='uusiOtsikko1'>Tähän tulee uusi otsikko!</h1>" + 
         "<p>Ja tähän tietysti jotain sisältöä...</p>";
        document.getElementById("laatikko1").style.lineHeight = "50px";
    }
    else if (boxNumber == 2){
        document.getElementById("laatikko2").innerHTML = "<table>\
        <tr>\
           <td>Solu 1</td>\
           <td>Solu 2</td>\
        </tr>\
     </table>";
    }
    else if (boxNumber == 3){
        document.getElementById("laatikko3").innerHTML = "<img src='smiley2.png'>"
    }
    else{

    }

}
function yhteystietoFunktio() {
    var x = document.getElementById("yhteystietolomake");
    var y = ["Nimi: " , "Email: " , "Puh: "];
    var text = "";
    var i;
    for (i = x.length-1; i >= 0; i--) {
      text += x.elements[i].value + "<br>";
    }
    document.getElementById("yhteystiedotTuloste").innerHTML = text;
  }
    function palautusFunktio(boxNumber){
        alert("Palautetaan nettisivu alkuperäiseen tilaan napilla" + boxNumber);
        document.location.reload();
  }
    function Dia() {
	var chart = new CanvasJS.Chart("chartContainer", {
		title:{
			text: "XD"              
		},
		data: [              
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "doughnut",
			dataPoints: [
				{ label: "Apina",  y: 267  },
				{ label: "Kirahvi", y: 124  },
				{ label: "Leijona", y: 45  },
				{ label: "Tiikeri",  y: 12  },
				{ label: "Virtahepo",  y: 17  }
			]
		}
        ]
    });
	chart.render();
}
function Dia1() {
    var chart = document.getElementById("chartContainer");
    if (chart.style.display === "block") {
    chart.style.display = "none";
    } else {
    chart.style.display = "block";
    }
}