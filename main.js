const cursors = document.querySelectorAll(".cursor");
const container = document.querySelector("#container");

container.addEventListener('mousemove', moveCursors, false); 
container.addEventListener('touchmove', moveCursors);


function moveCursors(e) {
    let clientX, clientY;

    if (e.type === 'mousemove') {
        clientX = e.clientX;
        clientY = e.clientY;
    } else if (e.type === 'touchmove') {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
    }

    cursors.forEach(cursor => {
        let cursorX = clientX - container.getBoundingClientRect().left - cursor.clientWidth / 2;
        let cursorY = clientY - container.getBoundingClientRect().top - cursor.clientHeight / 2;
        cursor.style.transform = 'translate(' + cursorX + 'px,' + cursorY + 'px)';
    });
};