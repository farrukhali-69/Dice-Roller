

function rolldice(){

    const dice_input = document.getElementById("dice_input").value;
    const diceresult = document.getElementById("result");
    const diceimages = document.getElementById("images");
    let results = [];
    let images = [];

    for(let i = 0; i< dice_input; i++){
        const result = Math.floor(Math.random()*6) + 1;
        results.push(result);
        images.push(`<img src="pics/${result}.png" width="150px" alt="Dice ${result}"></img>`);
    }

    diceresult.textContent = `Roll: ${results.join(", ")}`;
    diceimages.innerHTML = images.join("    ");

}