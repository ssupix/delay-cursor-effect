const cursors = document.querySelectorAll(".cursor");
const container = document.querySelector("#container");

container.addEventListener('mousemove', moveCursors, false); 

function moveCursors(e) {
    cursors.forEach(cursor => {
        let cursorX = e.clientX - container.getBoundingClientRect().left - cursor.clientWidth / 2;
        let cursorY = e.clientY - container.getBoundingClientRect().top - cursor.clientHeight / 2;
        cursor.style.transform = 'translate(' + cursorX + 'px,' + cursorY + 'px)';
    });
}