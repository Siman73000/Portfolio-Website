let offsetX, offsetY;
let currentZIndex = 1;

const box = document.getElementById('box');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const notepad = document.getElementById('notepad');
const controlPanel = document.getElementById('controlPanel');
const innerBox = document.getElementById('innerbox');
const innerBox2 = document.getElementById('innerbox2');
const innerBox3 = document.getElementById('innerbox3');
const innerBox4 = document.getElementById('innerbox4');
const innerBox5 = document.getElementById('innerbox5');
const topMargin = document.getElementById('topmargin');
const topMargin2 = document.getElementById('topmargin2');
const topMargin3 = document.getElementById('topmargin3');
const topMargin4 = document.getElementById('topmargin4');
const topMargin5 = document.getElementById('topmargin5');
const caption = topMargin.querySelector('p1');
const caption2 = topMargin2.querySelector('p2');
const caption3 = topMargin3.querySelector('p3');
const caption4 = topMargin4.querySelector('p4');
const icon = topMargin.querySelector('.openFolder');
const icon2 = topMargin2.querySelector('.openFolder2');
const icon3 = topMargin3.querySelector('.openFolder3');
const icon4 = topMargin4.querySelector('.openFolder4');
const icon5 = topMargin5.querySelector('.openFolder5');
const searchBar = document.getElementById('search');
const resultsList = document.getElementById('results');



function githubRedirect1() {
    window.open('https://github.com/Siman73000/Pseudo3D_Game/tree/main', '_blank');
}

function githubRedirect() {
    window.open('https://github.com/Siman73000/Othello', '_blank');
}

document.querySelector('.winstart-button').addEventListener('click', function () {
    const dropdownContent = document.querySelector('.dropdown-content');
    const isVisible = dropdownContent.style.display === 'block';
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    event.stopPropagation();
});

document.addEventListener('click', function (event) {
    const dropdown = document.querySelector('.dropdown');
    if (!dropdown.contains(event.target)) {
        const dropdownContent = dropdown.querySelector(".dropdown-content");
        dropdownContent.style.display = "none";
    }
});

searchBar.addEventListener('input', (event) => {
    const query = event.target.value;
    filterResults(query);
});

const applications = [
    'Control Panel',
    'Calculator',
    'Command Prompt',
    'Notepad',
    'Task Manager',
    'File Explorer',
    'Settings',
    'Registry Editor'
];

function filterResults(query) {
    if (!query) {
        resultsList.style.display = 'none';
        return;
    }
    const filtered = applications.filter(app => 
        app.toLowerCase().includes(query.toLowerCase())
    );

    resultsList.innerHTML = '';

    if (filtered.length > 0) {
        filtered.forEach(app => {
            const li = document.createElement('li');
            li.textContent = app;
            li.addEventListener('click', () => {
                searchBar.value = app;
                resultsList.style.display = 'none';
                console.log(`User selected: ${app}`);
            });

            resultsList.appendChild(li);
        });

        resultsList.style.display = 'block';
    } else {
        resultsList.style.display = 'none';
    }
}


function updateDateTime() {
    const tanddElement = document.getElementById('tandd');
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const formattedTime = `${formattedHours}:${minutes}:${seconds} ${ampm}`;
    const formattedDate = `${month}/${day}/${year}`;
    tanddElement.textContent = `${formattedDate} ${formattedTime}`;
}
setInterval(updateDateTime, 1000);
updateDateTime();

window.addEventListener("resize", () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

});

box.isDragging = false;
box2.isDragging = false;

function drawBox(event) {
    box.style.display = 'block';
    innerBox.style.display = 'block';
    topMargin.style.display = 'block';
    icon.src = imageSrc;
    caption.textContent = captionText;

    const boxWidth = box.offsetWidth;
    const boxHeight = box.offsetHeight;
    const innerBoxWidth = innerBox.offsetWidth;
    const innerBoxHeight = innerBox.offsetHeight;
    const topMarginHeight = topMargin.offsetHeight;
    const topMarginWidth = topMargin.offsetWidth;

    innerBox.style.left = (boxWidth - innerBoxWidth) / 2 + 'px';
    innerBox.style.top = (boxHeight - innerBoxHeight) / 2 + 'px';
    topMargin.style.left = (boxWidth - topMarginWidth) / 2 + 'px';
    topMargin.style.top = (boxHeight - topMarginHeight) / 2 + 'px';
    
    if (icon.src.includes('mypc.png')) {
        icon.src = 'mypc.png';
        caption.textContent = 'My Projects';
    }
    if (icon.src.includes('network.png')) {
        icon.src = 'network.png';
        caption.textContent = 'Network';
    }
}

box.addEventListener('mousedown', function(e) {
    box.isDragging = true;
    offsetX = e.clientX - box.getBoundingClientRect().left;
    offsetY = e.clientY - box.getBoundingClientRect().top;
    box.style.cursor = 'grabbing';

    currentZIndex++;
    box.style.zIndex = currentZIndex;
});

document.addEventListener('mousemove', function(e) {
    if (box.isDragging) {
        box2.isDragging = false;
        box.style.left = e.clientX - offsetX + 'px';
        box.style.top = e.clientY - offsetY + 'px';

        const boxWidth = box.offsetWidth;
        const boxHeight = box.offsetHeight;
        const innerBoxWidth = innerBox.offsetWidth;
        const innerBoxHeight = innerBox.offsetHeight;
        const topMarginHeight = topMargin.offsetHeight;
        const topMarginWidth = topMargin.offsetWidth;
        const innerBox = document.getElementById('innerbox');
        const topMargin = document.getElementById('topmargin');

        innerBox.style.left = (boxWidth - innerBoxWidth) / 2 + 'px';
        innerBox.style.top = (boxHeight - innerBoxHeight) / 2 + 'px';
        topMargin.style.left = (boxWidth - topMarginWidth) / 2 + 'px';
        topMargin.style.top = (boxHeight - topMarginHeight) / 2 + 'px';

        let newLeft = e.clientX - offsetX;
        let newTop = e.clientY - offsetY;

        /*
        if (newLeft < 0) newLeft = 0;
        if (newTop < 0) newTop = 0;
        if (newLeft + boxWidth > viewportWidth) newLeft = viewportWidth - boxWidth;
        if (newTop + boxHeight > viewportHeight) newTop = viewportHeight - boxHeight;

        box.style.left = newLeft + 'px';
        box.style.top = newTop + 'px';
        */
        newLeft = Math.max(0, Math.min(viewportWidth - boxWidth, newLeft));
        newTop = Math.max(0, Math.min(viewportHeight - boxHeight, newTop));
        box.style.left = newLeft + 'px';
        box.style.top = newTop + 'px';
        /*if (innerBox) {
            const innerBoxWidth = innerBox.offsetWidth;
            const innerBoxHeight = innerBox.offsetHeight;
            innerBox.style.left = (boxWidth - innerBoxWidth) / 2 + 'px';
            innerBox.style.top = (boxHeight - innerBoxHeight) / 2 + 'px';
        }
        if (topMargin) {
            const topMarginWidth = topMargin.offsetWidth;
            const topMarginHeight = topMargin.offsetHeight;
            topMargin.style.left = (boxWidth - topMarginWidth) / 2 + 'px';
            topMargin.style.top = (boxHeight - topMarginHeight) / 2 + 'px';
        }*/
       box.style.left = x + 'px';
       box.style.top = y + 'px';
    }
});

document.addEventListener('mouseup', function() {
    box.isDragging = false;
    box.style.cursor = 'grab';
});

function closeBox(event) {
    box.style.display = 'none';
    innerBox.style.display = 'none';
    topMargin.style.display = 'none';
}

function closeBox2(event) {
    box2.style.display = 'none';
    innerBox2.style.display = 'none';
    topMargin2.style.display = 'none';
}


function drawBox2(event) {
    box2.style.display = 'block';
    innerBox2.style.display = 'block';
    topMargin2.style.display = 'block';

    const boxWidth2 = box2.offsetWidth;
    const boxHeight2 = box2.offsetHeight;
    const innerBoxWidth2 = innerBox2.offsetWidth;
    const innerBoxHeight2 = innerBox2.offsetHeight;
    const topMarginHeight2 = topMargin2.offsetHeight;
    const topMarginWidth2 = topMargin2.offsetWidth;

    innerBox2.style.left = (boxWidth2 - innerBoxWidth2) / 2 + 'px';
    innerBox2.style.top = (boxHeight2 - innerBoxHeight2) / 2 + 'px';
    topMargin2.style.left = (boxWidth2 - topMarginWidth2) / 2 + 'px';
    topMargin2.style.top = (boxHeight2 - topMarginHeight2) / 2 + 'px';
}

box2.addEventListener('mousedown', function(e) {
    box2.isDragging = true;
    offsetX = e.clientX - box2.getBoundingClientRect().left;
    offsetY = e.clientY - box2.getBoundingClientRect().top;
    box2.style.cursor = 'grabbing';

    currentZIndex++;
    box2.style.zIndex = currentZIndex;
});

function closeBox2(event) {
    box2.style.display = 'none';
    innerBox2.style.display = 'none';
    topMargin2.style.display = 'none';
}

document.addEventListener('mouseup', function() {
    box2.isDragging = false;
    box2.style.cursor = 'grab';
});

document.addEventListener('mousemove', function(e) {
    if (box2.isDragging) {
        box2.style.left = e.clientX - offsetX + 'px';
        box2.style.top = e.clientY - offsetY + 'px';
        box.isDragging = false;

        const boxWidth2 = box2.offsetWidth;
        const boxHeight2 = box2.offsetHeight;
        const innerBoxWidth2 = innerBox2.offsetWidth;
        const innerBoxHeight2 = innerBox2.offsetHeight;
        const topMarginHeight2 = topMargin2.offsetHeight;
        const topMarginWidth2 = topMargin2.offsetWidth;

        innerBox2.style.left = (boxWidth2 - innerBoxWidth2) / 2 + 'px';
        innerBox2.style.top = (boxHeight2 - innerBoxHeight2) / 2 + 'px';
        topMargin2.style.left = (boxWidth2 - topMarginWidth2) / 2 + 'px';
        topMargin2.style.top = (boxHeight2 - topMarginHeight2) / 2 + 'px';

        let newLeft2 = e.clientX - offsetX;
        let newTop2 = e.clientY - offsetY;

        if (newLeft2 < 0) newLeft2 = 0;
        if (newTop2 < 0) newTop2 = 0;
        if (newLeft2 + boxWidth2 > viewportWidth) newLeft2 = viewportWidth - boxWidth2;
        if (newTop2 + boxHeight2 > viewportHeight) newTop2 = viewportHeight - boxHeight2;

        box2.style.left = newLeft2 + 'px';
        box2.style.top = newTop2 + 'px';
        const innerBox2 = document.getElementById('innerbox2');
        const topMargin2 = document.getElementById('topmargin2');
        if (innerBox2) {
            const innerBoxWidth2 = innerBox2.offsetWidth;
            const innerBoxHeight2 = innerBox2.offsetHeight;
            innerBox2.style.left = (boxWidth2 - innerBoxWidth2) / 2 + 'px';
            innerBox2.style.top = (boxHeight2 - innerBoxHeight2) / 2 + 'px';
        }
        if (topMargin2) {
            const topMarginWidth2 = topMargin2.offsetWidth;
            const topMarginHeight2 = topMargin2.offsetHeight;
            topMargin2.style.left = (boxWidth2 - topMarginWidth2) / 2 + 'px';
            topMargin2.style.top = (boxHeight2 - topMarginHeight2) / 2 + 'px';
        }
    }
});




function closeBox3(event) {
    box3.style.display = 'none';
    innerBox3.style.display = 'none';
    topMargin3.style.display = 'none';
}


function drawBox3(event) {
    box3.style.display = 'block';
    innerBox3.style.display = 'block';
    topMargin3.style.display = 'block';
    openFolder3.imageSrc = "openfolder.png";

    const boxWidth3 = box3.offsetWidth;
    const boxHeight3 = box3.offsetHeight;
    const innerBoxWidth3 = innerBox3.offsetWidth;
    const innerBoxHeight3 = innerBox3.offsetHeight;
    const topMarginHeight3 = topMargin3.offsetHeight;
    const topMarginWidth3 = topMargin3.offsetWidth;

    innerBox3.style.left = (boxWidth3 - innerBoxWidth3) / 2 + 'px';
    innerBox3.style.top = (boxHeight3 - innerBoxHeight3) / 2 + 'px';
    topMargin3.style.left = (boxWidth3 - topMarginWidth3) / 2 + 'px';
    topMargin3.style.top = (boxHeight3 - topMarginHeight3) / 2 + 'px';
}

box3.addEventListener('mousedown', function(e) {
    box3.isDragging = true;
    offsetX = e.clientX - box3.getBoundingClientRect().left;
    offsetY = e.clientY - box3.getBoundingClientRect().top;
    box3.style.cursor = 'grabbing';

    currentZIndex++;
    box3.style.zIndex = currentZIndex;
});

function closeBox3(event) {
    box3.style.display = 'none';
    innerBox3.style.display = 'none';
    topMargin3.style.display = 'none';
}

document.addEventListener('mouseup', function() {
    box3.isDragging = false;
    box3.style.cursor = 'grab';
});

document.addEventListener('mousemove', function(e) {
    if (box3.isDragging) {
        box3.style.left = e.clientX - offsetX + 'px';
        box3.style.top = e.clientY - offsetY + 'px';
        box.isDragging = false;

        const boxWidth3 = box3.offsetWidth;
        const boxHeight3 = box3.offsetHeight;
        const innerBoxWidth3 = innerBox3.offsetWidth;
        const innerBoxHeight3 = innerBox3.offsetHeight;
        const topMarginHeight3 = topMargin3.offsetHeight;
        const topMarginWidth3 = topMargin3.offsetWidth;

        innerBox3.style.left = (boxWidth3 - innerBoxWidth3) / 2 + 'px';
        innerBox3.style.top = (boxHeight3 - innerBoxHeight3) / 2 + 'px';
        topMargin3.style.left = (boxWidth3 - topMarginWidth3) / 2 + 'px';
        topMargin3.style.top = (boxHeight3 - topMarginHeight3) / 2 + 'px';

        let newLeft3 = e.clientX - offsetX;
        let newTop3 = e.clientY - offsetY;

        if (newLeft3 < 0) newLeft3 = 0;
        if (newTop3 < 0) newTop3 = 0;
        if (newLeft3 + boxWidth3 > viewportWidth) newLeft3 = viewportWidth - boxWidth3;
        if (newTop3 + boxHeight3 > viewportHeight) newTop3 = viewportHeight - boxHeight3;

        box3.style.left = newLeft3 + 'px';
        box3.style.top = newTop3 + 'px';
        const innerBox3 = document.getElementById('innerbox2');
        const topMargin3 = document.getElementById('topmargin2');
        if (innerBox3=3) {
            const innerBoxWidth3 = innerBox3.offsetWidth;
            const innerBoxHeight3 = innerBox3.offsetHeight;
            innerBox3.style.left = (boxWidth3 - innerBoxWidth3) / 2 + 'px';
            innerBox3.style.top = (boxHeight3 - innerBoxHeight3) / 2 + 'px';
        }
        if (topMargin3) {
            const topMarginWidth3 = topMargin3.offsetWidth;
            const topMarginHeight3 = topMargin3.offsetHeight;
            topMargin3.style.left = (boxWidth3 - topMarginWidth3) / 2 + 'px';
            topMargin3.style.top = (boxHeight3 - topMarginHeight3) / 2 + 'px';
        }
    }
});


function drawControlPanel(event) {
    controlPanel.style.display = 'block';
    innerBox4.style.display = 'block';
    topMargin4.style.display = 'block';
    openFolder4.imageSrc = "openfolder.png";

    const boxWidth4 = controlPanel.offsetWidth;
    const boxHeight4 = controlPanel.offsetHeight;
    const innerBoxWidth4 = innerBox4.offsetWidth;
    const innerBoxHeight4 = innerBox4.offsetHeight;
    const topMarginHeight4 = topMargin4.offsetHeight;
    const topMarginWidth4 = topMargin4.offsetWidth;

    innerBox4.style.left = (boxWidth4 - innerBoxWidth4) / 2 + 'px';
    innerBox4.style.top = (boxHeight4 - innerBoxHeight4) / 2 + 'px';
    topMargin4.style.left = (boxWidth4 - topMarginWidth4) / 2 + 'px';
    topMargin4.style.top = (boxHeight4 - topMarginHeight4) / 2 + 'px';
}

controlPanel.addEventListener('mousedown', function(e) {
    controlPanel.isDragging = true;
    offsetX = e.clientX - controlPanel.getBoundingClientRect().left;
    offsetY = e.clientY - controlPanel.getBoundingClientRect().top;
    controlPanel.style.cursor = 'grabbing';

    currentZIndex++;
    controlPanel.style.zIndex = currentZIndex;
});

function closeControlPanel(event) {
    controlPanel.style.display = 'none';
    innerBox4.style.display = 'none';
    topMargin4.style.display = 'none';
}

document.addEventListener('mouseup', function() {
    controlPanel.isDragging = false;
    controlPanel.style.cursor = 'grab';
});

document.addEventListener('mousemove', function(e) {
    if (controlPanel.isDragging) {
        controlPanel.style.left = e.clientX - offsetX + 'px';
        controlPanel.style.top = e.clientY - offsetY + 'px';
        box.isDragging = false;

        const boxWidth4 = controlPanel.offsetWidth;
        const boxHeight4 = controlPanel.offsetHeight;
        const innerBoxWidth4 = innerBox4.offsetWidth;
        const innerBoxHeight4 = innerBox4.offsetHeight;
        const topMarginHeight4 = topMargin4.offsetHeight;
        const topMarginWidth4 = topMargin4.offsetWidth;

        innerBox4.style.left = (boxWidth4 - innerBoxWidth4) / 2 + 'px';
        innerBox4.style.top = (boxHeight4 - innerBoxHeight4) / 2 + 'px';
        topMargin4.style.left = (boxWidth4 - topMarginWidth4) / 2 + 'px';
        topMargin4.style.top = (boxHeight4 - topMarginHeight4) / 2 + 'px';

        let newLeft4 = e.clientX - offsetX;
        let newTop4 = e.clientY - offsetY;

        if (newLeft4 < 0) newLeft4 = 0;
        if (newTop4 < 0) newTop4 = 0;
        if (newLeft4 + boxWidtnewTop4 > viewportWidth) newLeft4 = viewportWidth - boxWidth4;
        if (newTop4 + boxHeighnewTop4 > viewportHeight) newTop4 = viewportHeight - boxHeight4;

        controlPanel.style.left = newLeft4 + 'px';
        controlPanel.style.top = newTop4 + 'px';
        const innerBox4 = document.getElementById('innerbox4');
        const topMargin4 = document.getElementById('topmargin4');
        if (innerBox4=3) {
            const innerBoxWidth4 = innerBox4.offsetWidth;
            const innerBoxHeight4 = innerBox4.offsetHeight;
            innerBox4.style.left = (boxWidth4 - innerBoxWidth4) / 2 + 'px';
            innerBox4.style.top = (boxHeight4 - innerBoxHeight4) / 2 + 'px';
        }
        if (topMargin4) {
            const topMarginWidth4 = topMargin4.offsetWidth;
            const topMarginHeight4 = topMargin4.offsetHeight;
            topMargin4.style.left = (boxWidth4 - topMarginWidth4) / 2 + 'px';
            topMargin4.style.top = (boxHeight4 - topMarginHeight4) / 2 + 'px';
        }
    }
});





function drawNotePad(event) {
    notepad.style.display = 'block';
    innerBox5.style.display = 'block';
    topMargin5.style.display = 'block';
    icon5.src = imageSrc;
    caption4.textContent = captionText;

    const boxWidth5 = notepad.offsetWidth;
    const boxHeight5 = notepad.offsetHeight;
    const innerBoxWidth5 = innerBox5.offsetWidth;
    const innerBoxHeight5 = innerBox5.offsetHeight;
    const topMarginHeight5 = topMargin5.offsetHeight;
    const topMarginWidth5 = topMargin5.offsetWidth;

    innerBox5.style.left = (boxWidth5 - innerBoxWidth5) / 2 + 'px';
    innerBox5.style.top = (boxHeight5 - innerBoxHeight5) / 2 + 'px';
    topMargin5.style.left = (boxWidth5 - topMarginWidth5) / 2 + 'px';
    topMargin5.style.top = (boxHeight5 - topMarginHeight5) / 2 + 'px';
    
    if (icon5.src.includes('mypc.png')) {
        icon5.src = 'mypc.png';
        caption4.textContent = 'My Projects';
    }
    if (icon5.src.includes('network.png')) {
        icon5.src = '.png';
        caption4.textContent = 'Network';
    }
}

notepad.addEventListener('mousedown', function(e) {
    notepad.isDragging = true;
    offsetX = e.clientX - notepad.getBoundingClientRect().left;
    offsetY = e.clientY - notepad.getBoundingClientRect().top;
    notepad.style.cursor = 'grabbing';

    currentZIndex++;
    notepad.style.zIndex = currentZIndex;
});

document.addEventListener('mousemove', function(e) {
    if (notepad.isDragging) {
        box2.isDragging = false;
        notepad.style.left = e.clientX - offsetX + 'px';
        notepad.style.top = e.clientY - offsetY + 'px';

        const boxWidth5 = notepad.offsetWidth;
        const boxHeight5 = notepad.offsetHeight;
        const innerBoxWidth5 = innerBox5.offsetWidth;
        const innerBoxHeight5 = innerBox5.offsetHeight;
        const topMarginHeight5 = topMargin5.offsetHeight;
        const topMarginWidth5 = topMargin5.offsetWidth;
        const innerBox5 = document.getElementById('innerbox5');
        const topMargin5 = document.getElementById('topmargin5');

        innerBox5.style.left = (boxWidth5 - innerBoxWidth5) / 2 + 'px';
        innerBox5.style.top = (boxHeight5 - innerBoxHeight5) / 2 + 'px';
        topMargin5.style.left = (boxWidth5 - topMarginWidth5) / 2 + 'px';
        topMargin5.style.top = (boxHeight5 - topMarginHeight5) / 2 + 'px';

        let newLeft5 = e.clientX - offsetX;
        let newTop5 = e.clientY - offsetY;

        
        if (newLeft5 < 0) newLeft5 = 0;
        if (newTop5 < 0) newTop5 = 0;
        if (newLeft5 + boxWidth5 > viewportWidth) newLeft5 = viewportWidth - boxWidth5;
        if (newTop5 + boxHeight5 > viewportHeight) newTop5 = viewportHeight - boxHeight5;

        notepad.style.left = newLeft5 + 'px';
        notepad.style.top = newTop5 + 'px';
        
        newLeft5 = Math.max(0, Math.min(viewportWidth - boxWidth5, newLeft5));
        newTop5 = Math.max(0, Math.min(viewportHeight - boxHeight5, newTop5));
        notepad.style.left = newLeft5 + 'px';
        notepad.style.top = newTop5 + 'px';
        if (innerBox5) {
            const innerBoxWidth5 = innerBox5.offsetWidth;
            const innerBoxHeight5 = innerBox5.offsetHeight;
            innerBox5.style.left = (boxWidth5 - innerBoxWidth5) / 2 + 'px';
            innerBox5.style.top = (boxHeight5 - innerBoxHeight5) / 2 + 'px';
        }
        if (topMargin5) {
            const topMarginWidth5 = topMargin5.offsetWidth;
            const topMarginHeight5 = topMargin5.offsetHeight;
            topMargin5.style.left = (boxWidth5 - topMarginWidth5) / 2 + 'px';
            topMargin5.style.top = (boxHeight5 - topMarginHeight5) / 2 + 'px';
        }
       notepad.style.left = x + 'px';
       notepad.style.top = y + 'px';
    }
});

document.addEventListener('mouseup', function() {
    notepad.isDragging = false;
    notepad.style.cursor = 'grab';
});

function closeNotePad(event) {
    notepad.style.display = 'none';
    innerBox5.style.display = 'none';
    topMargin5.style.display = 'none';
}