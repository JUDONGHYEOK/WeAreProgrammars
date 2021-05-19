const id = document.querySelector(".signin-input__id");
const id_label = document.querySelector(".signin-input__letter--id");
const pw = document.querySelector(".signin-input__pw");
const pw_label = document.querySelector(".signin-input__letter--pw");


function id_letter_Moveup(){
   id_label.style.top = "70px";
   id_label.style.color = "#21094E";
   id_label.style.transition = "1s ease";
}

function id_letter_Movedown(){
   id_label.style.top = "105px";
   id_label.style.color = "var(--font--color)";
   id_label.style.transition = "1s ease";
}
function pw_letter_Moveup(){
   pw_label.style.top = "145px";
   pw_label.style.color="#21094E";
   pw_label.style.transition = "1s ease"
}

function pw_letter_Movedown(){
   pw_label.style.top ="180px";
   pw_label.style.color = "var(--font--color)";
   pw_label.style.transition = "1s ease";
}


function idClick() {
   id_letter_Moveup();
}

function idNone(){
   if(id.value == "")
      id_letter_Movedown();
   }

function pwClick() {
   pw_letter_Moveup();
}


function pwNone(){
  if(pw.value=="")
    pw_letter_Movedown();
   }

// id_label.onfocus = idClick;
// pw_label.onfocus = pwClick;
// id_label.onblur = idNone;
// pw_label.onblur = pwNone;
id.onfocus = idClick;
id.onblur = idNone;
pw.onfocus = pwClick;
pw.onblur = pwNone;
// id_label.onclick = idClick;
// pw_label.onclick=pwClick;
