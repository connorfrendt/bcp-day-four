function handleSubmit(event){
    var form = event.target;
    var elements = form.elements;
    var name = elements.name.value;
    console.log("name", name)

    var comments = elements.comments.value;
    console.log("comments", comments);

    var toppings = elements.topings.value;
    console.log("toppings", toppings);

    var grade = elements.grade.value;
    console.log("grade", grade);
}