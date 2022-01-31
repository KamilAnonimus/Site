
    let position = 0;
    const slidesToShow = 2;
    const slidesToScroll = 1;
    const conatainer = $('.slider-container1');
    const track = $('.slider-track');
    const item = $('.slider-item');
    const movementRight = $('.btn-prev');
    const movementLeft = $('.btn-next');
    const itemWidht = container1.widht() / slidesToShow;
    const movePosition = slidesToScroll * itemWidht;

    item.each(function (index, item) {
        $(item).css({
            minWidht:itemWidht,
        });
    });

function movementRight () {
    position += movePosition;
    
    track.css({
        transform:`translateX(${movePosition}px)`
    });
};

function movementLeft () {
    position -= movePosition;
    
    track.css({
        transform:`translateX(${movePosition}px)`
    });
};
