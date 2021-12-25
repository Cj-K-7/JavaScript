const form = document.getElementById('login_form');
const user_name = document.getElementById('user_name');
const user_email = document.getElementById('user_email');
const formContainer = document.querySelector('.form_container')
const board = document.querySelector('.MainBoard');
const hello = document.querySelector('.hello');

const Name = "Name"
const Hide = "hidden"

const handleSubmit = (event) => {
    event.preventDefault()
    const userName = user_name.value;
    const userEmail = user_email.value;

    localStorage.setItem("Email", userEmail);
    localStorage.setItem(Name, userName);
    formContainer.classList.add(Hide);
    board.classList.remove(Hide);
    hi();
}

const hi = () =>{
    const hour = new Date().getHours();
    let hi;
    if (hour >= 12 && hour < 18) {
      hi = "Good Afternoon";
    } else if (hour >= 18 && hour < 24) {
      hi = "Good Evening";
    } else if (hour >= 00 && hour < 12) {
      hi = "Good morning";
    }
    hello.innerText = `${hi} ${localStorage.getItem(Name)}`;
}

const isLogedin = localStorage.getItem(Name);

if (isLogedin === null) {
  formContainer.classList.remove(Hide);
  board.classList.add(Hide);
  form.addEventListener("submit", handleSubmit);
} else {
  formContainer.classList.add(Hide);
  board.classList.remove(Hide);
  hi();
}