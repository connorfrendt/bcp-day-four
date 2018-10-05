function handleSubmit(event){
    var form = event.target;
    var elements = form.elements;
    
    var guess = elements.guess.value;

    var result = document.getElementById("result");

    result.textContent = 'You made a guess of ' + guess;

    var correct = 7;

    if(guess == correct) {
        result.textContent = "You made a guess of " + guess + ". That's correct!";
    }
    if (guess < correct) {
        result.textContent = "You made a guess of " + guess + ". That's too low."
    } 
    if (guess > correct) {
        result.textContent = "You made a guess of " + guess + ". That's too high"
    }
    console.log(result)
}