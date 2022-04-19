
setTimeout(() => {
    var element = document.getElementsByClassName('game-block');
    for(var i = 0; i < element.length; i++)
{
    element[i].classList.add('is-flipped');
}
}, 1000);

setTimeout(() => {
    var element = document.getElementsByClassName('game-block');
    for(var i = 0; i < element.length; i++)
{
    element[i].classList.remove('is-flipped');
}
}, 5000);

document.querySelector(".control-buttons span").onclick =
    function (){
        
        let yourName = prompt ("Whats your Name");
            if (yourName == null || yourName == ""){
                document.querySelector(".name span").innerHTML = 'Unknown';
            } else {
                document.querySelector(".name span").innerHTML = yourName;

            }
            document.querySelector(".control-buttons").remove();
    }

    // Duration 

    let duration = 1000; 
    let blocksContainer = document.querySelector(".memory-game-blocks");

    // add all the elemnts into an array 
    let blocks = Array.from(blocksContainer.children);

    //extract elemnts
    let orderRange = [...Array(blocks.length).keys()];
    
    shuffle(orderRange)

    blocks.forEach((block,index) => {
        block.style.order = orderRange[index];

        //click event 
        block.addEventListener('click',function(){
            flipBlock(block)
        }
        
        )
    });

function flipBlock(selectedBlock){

        // add is-flip class
        selectedBlock.classList.add('is-flipped');

        // collcet all flipped card
        let allFlippedBlocks = blocks.filter(flippedBlock =>
            flippedBlock.classList.contains('is-flipped'));
    
    if (allFlippedBlocks.length === 2){
    //Stop clicking after 2 
            stopClicking();

            checkMatchedBlocks(allFlippedBlocks[0],allFlippedBlocks[1]);
}
    }

    function stopClicking(){
        blocksContainer.classList.add('no-lcicking');

        setTimeout(() => {
            blocksContainer.classList.remove('no-lcicking');
        }, duration);
    }

    function checkMatchedBlocks(firstBlock, secondBlock) {

        let triesElement = document.querySelector('.tries span');
      
        if (firstBlock.dataset.color === secondBlock.dataset.color) {
      
          firstBlock.classList.remove('is-flipped');
          secondBlock.classList.remove('is-flipped');
      
          firstBlock.classList.add('has-match');
          secondBlock.classList.add('has-match');
            
        } else {
      
          triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;
      
          setTimeout(() => {
      
            firstBlock.classList.remove('is-flipped');
            secondBlock.classList.remove('is-flipped');
      
          }, duration);
            
        }
      
      }


    function shuffle(array) {
        let current = array.length,
        temp,
        random;

        while (current > 0) {
            random = Math.floor(Math.random() * current)

            current--;
// Our current array
            temp = array[current];
// match the number of the current array with the number in the array
            array[current] = array[random];
// match the random number of temp array with the current array
            array[random] = temp;
        }

    return array;

    }


