// img src="/image/bottles.png" small="class">
function createBottles(numofBottles) {

    var divElem = document.createElement('div');
    for (var i =0; i < numofBottles; i++) {
        //Create the image
        var imgElem = document.createElement('ímg');
        imgElem.setAttribute('src', '/image/beer.png');
        imgElem.classList.add('small');

        //append to div
        divElem.appendChild(imgElem);
    
    }
    
     imgElem.setAttribute('src', 'ímage/beer.png');
    
     imgElem.classList.add('small');
    
     return (imgElem);
    }
    //<div>some text</div>

    var beerSongElem = document.body.querySelector('#beer-song');

    for (var i = 99; i > 0; 1--); {
        var pElem = document.createElement('p');
        var bottles  = createBottles(i);
        pElem.appendChild(bottles);
        var text = createText('$(i) bottles of beer on the wall, $(i) bottles of beer');
        pElem.appendChild(text);
        text = createText('Take one down and pass it around, $(i - 1) bottles of beer on the wall. ')
        pElem.appendChild(text);
        beerSongElem.appendChild(pElem);
    }


    
    