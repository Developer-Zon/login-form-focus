function password_length(event) {
    const bar = document.getElementById('password-length');
    var length = event.target.value.length;
    bar.classname = ""
    if (length <3){
        bar.classList.add('bad');
    } 
    else if (length >= 3 && length < 8) {
        bar.classList.add('good');
    }
    else if (length >= 8 ) {
        bar.classList.add('perfect');
    }

}