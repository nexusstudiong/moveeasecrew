let a2 = document.getElementById('a2');
let bars = document.getElementById('bars');
let isDown = false;

    bars.addEventListener('touchend', function () {
        if (!isDown) {
            a2.style.animationName = 'down';
            setTimeout(function () {
                isDown = true;
            }, 50);
        }
        if (isDown) {
            a2.style.animationName = 'up';
            setTimeout(function () {
                isDown = false;
            }, 50);
        }
    });
    window.addEventListener('scroll', function () {
        if (isDown) {
            a2.style.animationName = 'up';
            setTimeout(function () {
                isDown = false;
            }, 50);
        }
    });