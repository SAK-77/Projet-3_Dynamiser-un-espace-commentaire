  //Important Data
  let commentList = document.getElementById ("comment-list");
  let errorMessage = document.getElementById("errorMessage");
  let myForm = document.getElementById("myForm");
  let firstName = document.getElementById('first-name');
  let lastName = document.getElementById('last-name');
  let message = document.getElementById('message');

  //Fonction to add the comment on the screen
  function addComment(event, commentList) {
    event.preventDefault();
    
    if (firstName.value !== "" && lastName.value !== "" && message.value !== "") {
      
      errorMessage.style.display = "none";

      let flex = document.createElement("div");
      flex.classList.add("flex", "space-x-4", "text-sm", "text-gray-500");
  
      let flex1 = document.createElement("div");
      flex1.classList.add("flex-1", "py-10", "border-t", "border-gray-200");
      flex.appendChild(flex1);
  
      let flex2 = document.createElement("div");
      flex2.classList.add("font-medium", "text-gray-900");
      flex1.appendChild(flex2);
  
      //recuperer le contenu du formulaire nom + prenom et comme contenu du h3
      let fullName = document.createElement("h3");
      fullName.textContent = firstName.value + " " + lastName.value;
      flex2.appenChild(fullName);
  
      let flex3 = document.createElement("div");
      flex3.classList.add("prose", "prose-sm", "mt-4", "max-w-none", "text-gray-500");
      flex2.appendChild(flex3);
  
      let prose = document.createElement("p");
      prose.textContent = message.value;
      flex3.appendChild(prose);

      commentList.appendChild(flex);

      myForm.reset();
  
    } else {
      errorMessage.style.display = "block";
     
    }

  }

  //Validate && Submit the Form
  myForm.addEventListener('submit', (event) => addComment(event, commentList));





