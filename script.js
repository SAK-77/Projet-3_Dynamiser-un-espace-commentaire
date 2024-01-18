  //Important Data
  let commentList = document.getElementById ("comment-list");
  let errorMessage = document.getElementById("errorMessage");

  //let button = document.querySelector("button");

  //Reset Form
  function resetForm(){
    firstName.value = "";
    lastName.value = "";
    comment.value = "";
  }

  //Fonction to add the comment on the screen
  function addComment(event, commentList) {
    event.preventDefault();

    const myForm = document.getElementById("myForm");
    //let firstName = myForm.element['first-name'];
    //let lastName = myForm.element['last-name'];
    //let message = myForm.element['message'];
    let formData = new FormData(myForm);
    
    if (firstName.value !== "" && lastName.value !== "" && message.value !== "") {
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
      fullName.textContent = formData.get('first-name') + " " + formData.get('last-name');
      flex2.appenChild(fullName);
  
      let flex3 = document.createElement("div");
      flex3.classList.add("prose", "prose-sm", "mt-4", "max-w-none", "text-gray-500");
      flex2.appendChild(flex3);
  
      let prose = document.createElement("p");
      prose.textContent = formData.get('message');
      flex3.appendChild(prose);
  
      commentList.appendChild(flex);
  
      formData.reset();
    }
    else {
      errorMessage.style.display = "block";
    }

  }

  //Validate && Submit the Form
  myForm.addEventListener('submit', (event) => addComment(event, commentList));





