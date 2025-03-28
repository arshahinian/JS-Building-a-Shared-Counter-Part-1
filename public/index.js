async function main(){
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');

    let response = await fetch('http://localhost:9001/counter');
    let json =  await response.json();
       
    console.log(json)

    let countValue = json.value;

    function increment(){
        countValue++;
        countContainer.textContent = countValue;
    }    

    function decrement(){
        countValue--;
        countContainer.textContent = countValue;
    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    countContainer.textContent = countValue;
}

main()