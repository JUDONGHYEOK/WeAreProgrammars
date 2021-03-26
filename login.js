const id = document.querySelector(".signin-input__id");
const id_label = document.querySelector(".signin-input__letter--id");
const pw = document.querySelector(".signin-input__pw");
const pw_label = document.querySelector(".signin-input__letter--pw");


function id_letter_Moveup(){
   id_label.style.top ="70px";
   id_label.style.color = "#AAAAAA";
   id_label.style.transition = "1s ease";
}

function id_letter_Movedown(){
   id_label.style.top = "105px";
   id_label.style.color = "var(--font--color)";
   id_label.style.transition = "1s ease";
}
function pw_letter_Moveup(){
   pw_label.style.top = "150px";
   pw_label.style.color="#AAAAAA";
   pw_label.style.transition = "1s ease"
}

function pw_letter_Movedown(){
   pw_label.style.top ="185px";
   pw_label.style.color = "var(--font--color)";
   pw_label.style.transition = "1s ease";
}


function idClick() {
   id_letter_Moveup();
}

function idNone(){
   if(id.value != "")
      id_letter_Move();
   else
      id_letter_Movedown();
   }

function pwClick() {
   pw_letter_Moveup();
}


function pwNone(){
  if(pw.value!="")
     pw_letter_Moveup();
  else
   pw_letter_Movedown();
   }


id.onfocus = idClick;
id.onblur = idNone;
pw.onfocus = pwClick;
pw.onblur = pwNone;