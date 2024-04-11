let boxes = document.querySelectorAll('.box1'); // selecting all elements with class '.box1'
console.log(boxes);

boxes[0].addEventListener('click', function () {
    let img = boxes[0].querySelector('img').src;
    document.querySelector('.img1 img').src = img;
});

boxes[1].addEventListener('click', function () {
    let img = boxes[1].querySelector('img').src;
    document.querySelector('.img1 img').src = img;
});
boxes[2].addEventListener('click', function () {
    let img = boxes[2].querySelector('img').src;
    document.querySelector('.img1 img').src = img;
});
boxes[3].addEventListener('click', function () {
    let img = boxes[3].querySelector('img').src;
    document.querySelector('.img1 img').src = img;
});
