// 1. Your first task is to use DOM methods to re-create the DOM tree below using only JavaScript.You can pick whichever image you'd like to display and whichever link you want to add, but these elements should work as intended (e.g. the image element should display an actual image and the anchor tag should link to another page). Also, don't forget to add the classes you see above to the image and anchor elements. 

// 2.Now, add a "click" event listener to the button element you created. On click, remove the <main> element node from the page. After clicking this button, the user should only see the button on the page.

/*3. Stretch Goals
Create a 'remove element' button
To the body, add a text-type <input> and another button. The user will type a valid CSS selector into the text box. When the user clicks this new button, a click event listener should take the text value from the input element and remove the first element from the DOM which matches the CSS selector provided by the user. For example: entering the string .image, then clicking this new button, should remove the image element with the class of "image" from the DOM.
Create an 'add element' button
To the body, add another text-type <input> and another new button. When the user clicks this button, it should create a DIV element and append it to the BODY, and should contain the text content provided by the user in the text box.*/



let potato = document.createElement("button")
potato.textContent = "adios"
document.body.append(potato)

let tomato = document.createElement("main")
document.body.append(tomato)

let broccoli = document.createElement("img")
broccoli.src = "lemur-facedown.jpg"
broccoli.className = "image"
tomato.append(broccoli)

let lettuce = document.createElement("a")
lettuce.href = "https://www.reddit.com/r/CrackheadCraigslist"
    lettuce.className = "link"
lettuce.textContent = "egg"
tomato.append(lettuce)

potato.addEventListener('click', function (){
    tomato.remove("tomato")
})







































