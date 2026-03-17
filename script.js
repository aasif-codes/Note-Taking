function dlt(event)
{  event.target.parentElement.remove() }


let overlay=document.getElementsByClassName("overlay")[0]
let popup=document.getElementsByClassName("popup")[0]
let noteTitle=document.getElementById("note-title")
let userNotes=document.getElementById("userNotes")
let noteBox=document.getElementById("noteBox")

function show()
{   overlay.style.display="block"
    popup.style.display="block"  }


function hide()
{   overlay.style.display="none"
    popup.style.display="none" }

function addingNote()
{ 
    let div=document.createElement("div")
    div.setAttribute("class","note")
    div.innerHTML=` <h2>${noteTitle.value}</h2>
                    <p>${userNotes.value}</p>
                     <button id="dlt" onclick="dlt(event)">Delete</button>`
    noteBox.append(div)

}