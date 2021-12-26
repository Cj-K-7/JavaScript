const date = document.querySelector('.date')

const putDate = () => {
    const today = new Date().toDateString().slice(0 , 10);
    date.innerText = `${today}` 
}

putDate();