window.addEventListener('load', () => {
  const form = document.querySelector("#myTODO");
  const input = document.querySelector("#myText");
  const list_el = document.querySelector("#tasked");

  form.addEventListener('submit', (e) => {
    e.preventDefault();
/*
Above prevents the website from refreshing when you input something into thwe task bar.
*/
    const task = input.value;

    if (!task) {
      alert("Enter a task");
      return;
    }
    const tasked_el = document.createElement("div");
    tasked_el.classList.add("task");

    const tasked_info_el = document.createElement("div");
    tasked_info_el.classList.add("information");

    tasked_el.appendChild(tasked_info_el);

    const tasked_input_el = document.createElement("input");
    tasked_input_el.classList.add("texts");
    tasked_input_el.type = "text";
    tasked_input_el.value = task;
    tasked_input_el.setAttribute("readonly", "readonly");

    tasked_info_el.appendChild(tasked_input_el);

    const tasked_buttons_el = document.createElement("div");
    tasked_buttons_el.classList.add("buttin");

    const tasked_edit_el = document.createElement("button");
    tasked_edit_el.classList.add("edit");
    tasked_edit_el.innerHTML = "Edit";

    const tasked_delete_el = document.createElement("button");
    tasked_delete_el.classList.add("delete");
    tasked_delete_el.innerHTML = "Delete";

    tasked_info_el.appendChild(tasked_edit_el);
    tasked_info_el.appendChild(tasked_delete_el);

    tasked_info_el.appendChild(tasked_buttons_el);


    list_el.appendChild(tasked_el);
    input.value = "";
    /*
    input.value allows me not to have any problems in the text bar.
    */

    tasked_edit_el.addEventListener('click', () => {
      if(tasked_edit_el.innerText.toLowerCase() == "edit")
      {
      tasked_input_el.removeAttribute("readonly");
      tasked_input_el.focus();
      tasked_edit_el.innerText = "Save";
      } else{
        tasked_input_el.setAttribute("readonly", "readonly");
        tasked_edit_el.innerText = "Edit";
        /* 
        This allows me to edit the readonly text that i have on my website. I am also 
        able to save and edit any time that i want to.
        */
        }
    });

    tasked_delete_el.addEventListener('click',  () => {
      list_el.removeChild(tasked_el);
    });


  })
})