const listener = (target_id , event , callback) =>{
    const target = document.querySelector(`#${target_id}`)
    target.addEventListener(event, callback);
}