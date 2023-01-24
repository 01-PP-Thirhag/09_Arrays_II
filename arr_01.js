/*********   Theorie **********/

// push() / pop()
// push --> Daten rein ... (+)


// pop() --> Daten raus ... (-)



/*
Aufgabe:
Erstellen Sie eine JS-Struktur, die Ihnen den folgenden String 
einer HTML-Seite ausgibt:
<html><head></head><body><h1></h1><p></p></body></html>
Verwenden Sie dafür die untenstehenden Arrays
*/

const COBJ      = {open_o:"<",close_o:"</",close:">"}
const CONTROLS  = ["<", "</", ">"];
const TAGS = [  "html",
				"head","head",
				"body",
                "h1","h1",
                "p","p",
                "ul","li","li","li","li","li","li","ul",
                "p","p",
                "ol","li","li","ol",
                "body",
				"html"
            ];

let stack = [];

// Modul: HTML-Synthese | Test
output(getHTML());
<<<<<<< HEAD
function getHTML() { 
    let htmlStr = "";
    for (let i = 0; i < TAGS.length; i++) {
        htmlStr +="</" TAGS[i] + ">";
    }
        return htmlStr;
    }
=======
function getHTML() {
  
    let htmlStr = "";
>>>>>>> 4763fff2a1bec7fc3359dcf0586e6a707bb9e5af

    for (let i = 0; i < TAGS.length; i++) {
        htmlStr += "</" + TAGS[i] + ">";
    }

   return htmlStr;
}



// Modul: Zusammenbau der Elements: <tagStr> --> Tests:
// output(getElement(tags[1],"open"));
// output(getElement(tags[1],"close"));
// output(getElement(tags[1]));






// Modul: Ausgabe | Test
//output("hi");
function output(outputData) {
    console.log(outputData);
}
