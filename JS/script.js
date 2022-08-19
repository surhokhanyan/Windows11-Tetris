// for Power windows
let container = document.querySelector("#container");
let powerWindows = document.querySelector("#powerWindows");
let powerWindowsI = document.querySelector("#powerWindows i");
let loading = document.querySelector("#loading");
let logIn = document.querySelector("#logIn");
let password = document.querySelector("#password");
powerWindowsI.addEventListener("click", ()=>{
    powerWindows.style.display = "none";
    loading.style.display = "flex";
    setTimeout(()=>{
        loading.style.display = "none";
        logIn.style.display = "flex";
    }, 4500);
});

logIn.addEventListener("click", ()=>{
    password.style.display = "flex";
    logIn.setAttribute("class", "animate__animated animate__fadeOutUp");
    setTimeout(()=>{
        logIn.style.display = "none";
    }, 300)
});

// For password place enter to desktop

let pass = document.querySelector("#passwordMain input");
pass.addEventListener("keydown", ()=>{
    if (event.key === "Enter" && pass.value === "beeoncode"){
        password.style.display = "none";
        container.style.display = "flex";
    }else if (event.key === "Enter" && pass.value !== "beeoncode"){
        pass.style.border = "2px solid red";
        pass.value = null;
        pass.setAttribute("placeholder", "Wrong password");
    }
})

// Desctop clock and calendar and Login clock

window.onload = function (){
    setTimeout(()=>{
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        if (minutes < 10) minutes = "0" + minutes;
        document.querySelector("#loginClock p:nth-child(1)").innerHTML = hours;
        document.querySelector("#loginClock p:nth-child(3)").innerHTML = minutes;
        document.querySelector("#clock p:nth-child(1)").innerHTML = hours;
        document.querySelector("#clock p:nth-child(3)").innerHTML = minutes;
        let days = date.getDate();
        let months = date.getMonth()+1;
        let year = date.getFullYear();
        if (days < 10) days = "0" + days;
        if (months < 10) months = "0" + months;
        let calendar = days + "." + months + "." + year;
        document.querySelector("#calendarPlace p").innerHTML = calendar;
    }, 1000);
};


// Widgets open and close

let widgets = document.querySelector("#widgets");
let widgetsHover = document.querySelector("#widgetsHover");
let isOpen = true;

widgets.addEventListener("click", ()=>{
    if (isOpen){
        widgetsHover.removeAttribute("class");
        widgetsHover.setAttribute("class", "animate__animated animate__slideInLeft");
        widgetsHover.style.display = "flex";
        isOpen = false;
    }else{
        widgetsHover.removeAttribute("class");
        widgetsHover.setAttribute("class", "animate__animated animate__slideOutLeft");
        setTimeout(()=>{
            widgetsHover.style.display = "none";
        }, 300);
        isOpen = true;
    }
});

// Dinamic menu

document.body.addEventListener("contextmenu", (e) =>{
    e.preventDefault();
    let menu = ["View", "Sort by", "Refresh", "Next desctop background", "New", "Display settings", "Personalize", "Open in Terminal", "Show more options"];
    let ul = document.createElement("ul");
    ul.className = "dynamic-menu";
    menu.forEach(item =>{
        let elm = document.createElement("li");
        elm.innerText = item;
        elm.addEventListener("click", function (){
            this.closest("ul.dynamic-menu").remove();
        })
        ul.append(elm);
    });
    document.body.querySelector(".dynamic-menu")?.remove();
    document.body.append(ul);
    let style = document.createElement("style");
    style.id = "menu-style";
    document.head.querySelector("#menu-style")?.remove();
    style.innerText = `
    .dynamic-menu{
        width:310px;
        height:333px;
        display:flex;
        flex-direction:column;
        align-items: center;
        justify-content: space-around;
        background-color:#292929;
        border-radius: 10px;
        position:absolute;
        top: ${e.clientY}px;
        left:${e.clientX}px;
    }
    .dynamic-menu li{
        list-style:none;
        width:295px;
        height:30px;
        border-radius: 5px;
        padding-left:30px;
        line-height:30px;
        color: #fff;
        font-size:14px;
        font-family:'Open Sans', sans-serif;
    }
    .dynamic-menu li:hover{
        background: #5a5a5a;
    }`
    document.head.append(style);
});
document.body.addEventListener("click", ()=>{
    document.body.querySelector(".dynamic-menu")?.remove();
});

// Javascript for Start Menu

// For shut down
let power = document.querySelector("#winStartOpenBottomMainPower");
let powerOpen = document.querySelector("#powerOpen");
power.addEventListener("click", ()=>{
    if (isOpen){
        powerOpen.setAttribute("class", "animate__animated animate__fadeInUp");
        powerOpen.style.display = "flex";
        isOpen = false;
    }else{
        powerOpen.removeAttribute("class");
        powerOpen.setAttribute("class", "animate__animated animate__fadeOutDown");
        setTimeout(()=>{
            powerOpen.style.display = "none";
        }, 400);
        isOpen = true;
    }
});

//For start menu open and close

let startIcon = document.querySelector("#winStart img");
let start = document.querySelector("#winStartOpen");
let startSearch = document.querySelector("#winSearch input");
let isOpenMenu = true;
let searchIcon = document.querySelector("#winSearchIcon img");
let search = document.querySelector("#searchStartOpen");
let isOpenSearch = true;
startIcon.addEventListener("click", ()=>{
    search.setAttribute("class", "item animate__animated animate__bounceOutDown");
    setTimeout(()=>{
        search.style.display = "none";
    }, 1000);
    isOpenSearch = true;
    if (isOpenMenu){
        start.setAttribute("class", "item animate__animated animate__bounceInUp");
        start.style.display = "flex";
        isOpenMenu = false;
    }else{
        start.setAttribute("class", "item animate__animated animate__bounceOutDown");
        setTimeout(()=>{
            start.style.display = "none";
        }, 1000);
        isOpenMenu = true;
    };
    container.addEventListener("click", function (e){
        let startPlace = document.querySelector("#start");
        if (!startPlace.contains(e.target)){
            start.setAttribute("class", "item animate__animated animate__bounceOutDown");
            setTimeout(()=>{
                start.style.display = "none";
            }, 1000);
            isOpenMenu = true;
        };
    });
});

// For search menu open and close

searchIcon.addEventListener("click", ()=>{
    start.setAttribute("class", "item animate__animated animate__bounceOutDown");
    setTimeout(()=>{
        start.style.display = "none";
    }, 1000);
    isOpenMenu = true;
    if (isOpenMenu){
        search.setAttribute("class", "item animate__animated animate__bounceInUp");
        search.style.display = "flex";
        isOpenSearch = false;
    }else{
        search.setAttribute("class", "item animate__animated animate__bounceOutDown");
        setTimeout(()=>{
            search.style.display = "none";
        }, 1000);
        isOpenSearch = true;
    };
    container.addEventListener("click", function (e){
        let searchPlace = document.querySelector("#start");
        if (!searchPlace.contains(e.target)){
            search.setAttribute("class", "item animate__animated animate__bounceOutDown");
            setTimeout(()=>{
                search.style.display = "none";
            }, 1000);
            isOpenSearch = true;
        };
    });
});

        // For search place on Start
startSearch.addEventListener("click", ()=>{
    start.style.display = "none";
    search.setAttribute("class", "item animate__animated animate__bounceInUp");
    search.style.display = "flex";
    isOpenMenu = true;
    container.addEventListener("click", function (e){
        let searchPlace = document.querySelector("#start");
        if (!searchPlace.contains(e.target)){
            search.setAttribute("class", "item animate__animated animate__bounceOutDown");
            setTimeout(()=>{
                search.style.display = "none";
            }, 1000);
            isOpenSearch = true;
        };
    });
})

// For softwares on screen
let screenApp = document.querySelectorAll(".screenApp");
let bgOpen = true;
screenApp.forEach(item =>{
    document.addEventListener("click", function (e){
        if (bgOpen){
            if (e.target.id !== "tetris"){
                item.style.backgroundColor = "rgba(255, 255, 255, 0)";
            }else{
                item.style.backgroundColor = "rgba(255, 255, 255, 0.25)";
            }
            bgOpen === false;
        }else{
            if (e.target.id !== "tetris"){
                item.style.backgroundColor = "rgba(255, 255, 255, 0)";
            }else{
                item.style.backgroundColor = "rgba(255, 255, 255, 0.25)";
            }
            bgOpen === true;
        }
    });
});


// For tetris enter
let tetris = document.querySelector("#tetris");
let containerTetris = document.querySelector("#containerTetris");
tetris.addEventListener("dblclick", ()=>{
    container.style.display = "none"
    containerTetris.style.display = "flex";
});

setTimeout(()=>{
    containerTetris.style.display = "none";
}, 0.0001)
// For tetrise close

let tetrisClose = document.querySelector("#close");
tetrisClose.addEventListener("click", ()=>{
    containerTetris.style.display = "none";
    container.style.display = "flex";
})

// for browser
let edge = document.querySelector("#edge");
let browser = document.querySelector("#browser");
let browserMinus = document.querySelector("#browserTopCloseMinuse i:nth-child(1)");
let browserClose = document.querySelector("#browserTopCloseMinuse i:nth-child(3)")
let edgeSearch = document.querySelector("#browser input");
let browserMain = document.querySelector("#browserMain");
let browserMainImg = document.querySelector("#browserMain img");
let favicon = document.querySelector("#browserTopPageFirstMainLeftPhoto img");
let faviconText = document.querySelector("#browserTopPageFirstMainLeftInfo p");
let edgeStart = document.querySelector("#edgeStart");
let edgeSearchFirst = document.querySelector("#searchEdgeApp");
let edgeSearchSecond = document.querySelector("#searchEdgeRight");

//Browser open
edge.addEventListener("click", ()=>{
    edgeSearch.value = null;
    browser.style.display = "flex";
    edge.style.backgroundColor = "#5e5e5e9d";
});

edgeStart.addEventListener("click", ()=>{
    edgeSearch.value = null;
    browser.style.display = "flex";
    edge.style.backgroundColor = "#5e5e5e9d";
    start.style.display = "none";
    isOpenMenu = true;
});
edgeSearchFirst.addEventListener("click", ()=>{
    edgeSearch.value = null;
    browser.style.display = "flex";
    edge.style.backgroundColor = "#5e5e5e9d";
    search.style.display = "none";
    isOpenSearch = true;
});
edgeSearchSecond.addEventListener("click", ()=>{
    edgeSearch.value = null;
    browser.style.display = "flex";
    edge.style.backgroundColor = "#5e5e5e9d";
    search.style.display = "none";
    isOpenSearch = true;
});
//Browser close
browserClose.addEventListener("click", ()=>{
    browser.style.display = "none";
    browserMain.style.background = "url(IMG/edgebgpage.jpg)";
    edgeSearch.value = null;
    edge.style.background = "none";
});

//Browser minus
browserMinus.addEventListener("click", ()=>{
    if (faviconText.textContent === "BeeOnCode"){
        browser.style.display = "none";
        edge.style.backgroundColor = "#5e5e5e9d";
        edge.addEventListener("click", ()=>{
            browser.style.display = "flex";
            edgeSearch.value = "https://www.beeoncode.com/";
            favicon.setAttribute("src", "CSS/IMG/beeonfavicon.jpg");
            faviconText.innerHTML = "BeeOnCode";
        });
    }else {
        browser.style.display = "none";
        edge.style.backgroundColor = "#5e5e5e9d";
    }
});
// For enter BeeOnCode page
edgeSearch.addEventListener("keydown", ()=>{
    if(event.key === 'Enter' && edgeSearch.value === "beeoncode.com" || edgeSearch.value === "www.beeoncode.com") {
        browserMainImg.setAttribute("src", "CSS/IMG/beeoncode.png");
        edgeSearch.value = "https://www.beeoncode.com/";
        favicon.setAttribute("src", "CSS/IMG/beeonfavicon.jpg");
        faviconText.innerHTML = "BeeOnCode";
    }
});

// For shut down windows
let shut = document.querySelector("#shut");
let shutDown = document.querySelector("#shutDown");
shut.addEventListener("click", ()=>{
    container.style.display = "none";
    shutDown.style.display = "flex";
    setTimeout(()=>{
        shutDown.style.display = "none";
        powerWindows.style.display = "flex";
        logIn.removeAttribute("class");
        start.style.display = "none";
        isOpen = true;
    }, 5000)
});

// For lock windows

let sleep = document.querySelector("#sleep");
sleep.addEventListener("click", ()=>{
    container.style.display = "none";
    shutDown.style.display = "flex";
    setTimeout(()=>{
        shutDown.style.display = "none";
        logIn.style.display = "flex";
        logIn.removeAttribute("class");
    }, 3000);
});

//Tetris

// base helper methods

function get(id)        { return document.getElementById(id);  }
function hide(id)       { get(id).style.visibility = 'hidden'; }
function show(id)       { get(id).style.visibility = null;     }
function html(id, html) { get(id).innerHTML = html;            }

function timestamp()           { return new Date().getTime();                             }
function random(min, max)      { return (min + (Math.random() * (max - min)));            }
function randomChoice(choices) { return choices[Math.round(random(0, choices.length-1))]; }

var KEY     = { ESC: 27, SPACE: 32, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40 },
    DIR     = { UP: 0, RIGHT: 1, DOWN: 2, LEFT: 3, MIN: 0, MAX: 3 },
    stats   = new Stats(),
    canvas  = get('canvas'),
    ctx     = canvas.getContext('2d'),
    ucanvas = get('upcoming'),
    uctx    = ucanvas.getContext('2d'),
    speed   = { start: 0.6, decrement: 0.005, min: 0.1 }, // how long before piece drops by 1 row (seconds)
    nx      = 10, // width of tetris court (in blocks)
    ny      = 20, // height of tetris court (in blocks)
    nu      = 5;  // width/height of upcoming preview (in blocks)

//-------------------------------------------------------------------------
// game variables (initialized during reset)
//-------------------------------------------------------------------------

var dx, dy,        // pixel size of a single tetris block
    blocks,        // 2 dimensional array (nx*ny) representing tetris court - either empty block or occupied by a 'piece'
    actions,       // queue of user actions (inputs)
    playing,       // true|false - game is in progress
    dt,            // time since starting this game
    current,       // the current piece
    next,          // the next piece
    score,         // the current score
    vscore,        // the currently displayed score (it catches up to score in small chunks - like a spinning slot machine)
    rows,          // number of completed rows in the current game
    step;          // how long before current piece drops by 1 row


var i = { size: 4, blocks: [0x0F00, 0x2222, 0x00F0, 0x4444], color: 'cyan'   };
var j = { size: 3, blocks: [0x44C0, 0x8E00, 0x6440, 0x0E20], color: 'blue'   };
var l = { size: 3, blocks: [0x4460, 0x0E80, 0xC440, 0x2E00], color: 'orange' };
var o = { size: 2, blocks: [0xCC00, 0xCC00, 0xCC00, 0xCC00], color: 'yellow' };
var s = { size: 3, blocks: [0x06C0, 0x8C40, 0x6C00, 0x4620], color: 'green'  };
var t = { size: 3, blocks: [0x0E40, 0x4C40, 0x4E00, 0x4640], color: 'purple' };
var z = { size: 3, blocks: [0x0C60, 0x4C80, 0xC600, 0x2640], color: 'red'    };

//------------------------------------------------
// do the bit manipulation and iterate through each
// occupied block (x,y) for a given piece
//------------------------------------------------
function eachblock(type, x, y, dir, fn) {
    var bit, result, row = 0, col = 0, blocks = type.blocks[dir];
    for(bit = 0x8000 ; bit > 0 ; bit = bit >> 1) {
        if (blocks & bit) {
            fn(x + col, y + row);
        }
        if (++col === 4) {
            col = 0;
            ++row;
        }
    }
}

// check if a piece can fit into a position in the flex
function occupied(type, x, y, dir) {
    var result = false
    eachblock(type, x, y, dir, function(x, y) {
        if ((x < 0) || (x >= nx) || (y < 0) || (y >= ny) || getBlock(x,y))
            result = true;
    });
    return result;
}

function unoccupied(type, x, y, dir) {
    return !occupied(type, x, y, dir);
}

// start with 4 instances of each piece and
// pick randomly until the 'bag is empty'

var pieces = [];
function randomPiece() {
    if (pieces.length == 0)
        pieces = [i,i,i,i,j,j,j,j,l,l,l,l,o,o,o,o,s,s,s,s,t,t,t,t,z,z,z,z];
    var type = pieces.splice(random(0, pieces.length-1), 1)[0];
    return { type: type, dir: DIR.UP, x: Math.round(random(0, nx - type.size)), y: 0 };
}

// GAME LOOP

function run() {

    showStats(); // initialize FPS counter
    addEvents(); // attach keydown and resize events

    var last = now = timestamp();
    function frame() {
        now = timestamp();
        update(Math.min(1, (now - last) / 1000.0)); // using requestAnimationFrame have to be able to handle large delta's caused when it 'hibernates' in a background or non-visible tab
        draw();
        stats.update();
        last = now;
        requestAnimationFrame(frame, canvas);
    }

    resize(); // setup all our sizing information
    reset();  // reset the per-game variables
    frame();  // start the first frame

}

function showStats() {
    stats.domElement.id = 'stats';
    get('menu').appendChild(stats.domElement);
}

function addEvents() {
    document.addEventListener('keydown', keydown, false);
    window.addEventListener('resize', resize, false);
}

function resize(event) {
    canvas.width   = canvas.clientWidth;  // set canvas logical size equal to its physical size
    canvas.height  = canvas.clientHeight; // (ditto)
    ucanvas.width  = ucanvas.clientWidth;
    ucanvas.height = ucanvas.clientHeight;
    dx = canvas.width  / nx; // pixel size of a single tetris block
    dy = canvas.height / ny; // (ditto)
    invalidate();
    invalidateNext();
}

function keydown(ev) {
    var handled = false;
    if (playing) {
        switch(ev.keyCode) {
            case KEY.LEFT:   actions.push(DIR.LEFT);  handled = true; break;
            case KEY.RIGHT:  actions.push(DIR.RIGHT); handled = true; break;
            case KEY.UP:     actions.push(DIR.UP);    handled = true; break;
            case KEY.DOWN:   actions.push(DIR.DOWN);  handled = true; break;
            case KEY.ESC:    lose();                  handled = true; break;
        }
    }
    else if (ev.keyCode == KEY.SPACE) {
        play();
        handled = true;
    }
    if (handled)
        ev.preventDefault(); // prevent arrow keys from scrolling the page (supported in IE9+ and all other browsers)
}

// GAME LOGIC

function play() { reset();          playing = true;  }
function lose() { setVisualScore(); playing = false; }

function setVisualScore(n)      { vscore = n || score; invalidateScore(); }
function setScore(n)            { score = n; setVisualScore(n);  }
function addScore(n)            { score = score + n;   }
function clearScore()           { setScore(0); }
function clearRows()            { setRows(0); }
function setRows(n)             { rows = n; step = Math.max(speed.min, speed.start - (speed.decrement*rows)); invalidateRows(); }
function addRows(n)             { setRows(rows + n); }
function getBlock(x,y)          { return (blocks && blocks[x] ? blocks[x][y] : null); }
function setBlock(x,y,type)     { blocks[x] = blocks[x] || []; blocks[x][y] = type; invalidate(); }
function clearBlocks()          { blocks = []; invalidate(); }
function clearActions()         { actions = []; }
function setCurrentPiece(piece) { current = piece || randomPiece(); invalidate();     }
function setNextPiece(piece)    { next    = piece || randomPiece(); invalidateNext(); }

function reset() {
    dt = 0;
    clearActions();
    clearBlocks();
    clearRows();
    clearScore();
    setCurrentPiece(next);
    setNextPiece();
}

function update(idt) {
    if (playing) {
        if (vscore < score)
            setVisualScore(vscore + 1);
        handle(actions.shift());
        dt = dt + idt;
        if (dt > step) {
            dt = dt - step;
            drop();
        }
    }
}

function handle(action) {
    switch(action) {
        case DIR.LEFT:  move(DIR.LEFT);  break;
        case DIR.RIGHT: move(DIR.RIGHT); break;
        case DIR.UP:    rotate();        break;
        case DIR.DOWN:  drop();          break;
    }
}

function move(dir) {
    var x = current.x, y = current.y;
    switch(dir) {
        case DIR.RIGHT: x = x + 1; break;
        case DIR.LEFT:  x = x - 1; break;
        case DIR.DOWN:  y = y + 1; break;
    }
    if (unoccupied(current.type, x, y, current.dir)) {
        current.x = x;
        current.y = y;
        invalidate();
        return true;
    }
    else {
        return false;
    }
}

function rotate() {
    var newdir = (current.dir == DIR.MAX ? DIR.MIN : current.dir + 1);
    if (unoccupied(current.type, current.x, current.y, newdir)) {
        current.dir = newdir;
        invalidate();
    }
}

function drop() {
    if (!move(DIR.DOWN)) {
        addScore(10);
        dropPiece();
        removeLines();
        setCurrentPiece(next);
        setNextPiece(randomPiece());
        clearActions();
        if (occupied(current.type, current.x, current.y, current.dir)) {
            lose();
        }
    }
}

function dropPiece() {
    eachblock(current.type, current.x, current.y, current.dir, function(x, y) {
        setBlock(x, y, current.type);
    });
}

function removeLines() {
    var x, y, complete, n = 0;
    for(y = ny ; y > 0 ; --y) {
        complete = true;
        for(x = 0 ; x < nx ; ++x) {
            if (!getBlock(x, y))
                complete = false;
        }
        if (complete) {
            removeLine(y);
            y = y + 1; // recheck same line
            n++;
        }
    }
    if (n > 0) {
        addRows(n);
        addScore(100*Math.pow(2,n-1)); // 1: 100, 2: 200, 3: 400, 4: 800
    }
}

function removeLine(n) {
    var x, y;
    for(y = n ; y >= 0 ; --y) {
        for(x = 0 ; x < nx ; ++x)
            setBlock(x, y, (y == 0) ? null : getBlock(x, y-1));
    }
}

// RENDERING

var invalid = {};

function invalidate()         { invalid.court  = true; }
function invalidateNext()     { invalid.next   = true; }
function invalidateScore()    { invalid.score  = true; }
function invalidateRows()     { invalid.rows   = true; }

function draw() {
    ctx.save();
    ctx.lineWidth = 1;
    ctx.translate(0.5, 0.5); // for crisp 1px black lines
    drawCourt();
    drawNext();
    drawScore();
    drawRows();
    ctx.restore();
}

function drawCourt() {
    if (invalid.court) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (playing)
            drawPiece(ctx, current.type, current.x, current.y, current.dir);
        var x, y, block;
        for(y = 0 ; y < ny ; y++) {
            for (x = 0 ; x < nx ; x++) {
                if (block = getBlock(x,y))
                    drawBlock(ctx, x, y, block.color);
            }
        }
        ctx.strokeRect(0, 0, nx*dx - 1, ny*dy - 1); // court boundary
        invalid.court = false;
    }
}

function drawNext() {
    if (invalid.next) {
        var padding = (nu - next.type.size) / 2; // half-arsed attempt at centering next piece display
        uctx.save();
        uctx.translate(0.5, 0.5);
        uctx.clearRect(0, 0, nu*dx, nu*dy);
        drawPiece(uctx, next.type, padding, padding, next.dir);
        uctx.strokeStyle = 'black';
        uctx.strokeRect(0, 0, nu*dx - 1, nu*dy - 1);
        uctx.restore();
        invalid.next = false;
    }
}

function drawScore() {
    if (invalid.score) {
        html('score', ("00000" + Math.floor(vscore)).slice(-5));
        invalid.score = false;
    }
}

function drawRows() {
    if (invalid.rows) {
        html('rows', rows);
        invalid.rows = false;
    }
}

function drawPiece(ctx, type, x, y, dir) {
    eachblock(type, x, y, dir, function(x, y) {
        drawBlock(ctx, x, y, type.color);
    });
}

function drawBlock(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x*dx, y*dy, dx, dy);
    ctx.strokeRect(x*dx, y*dy, dx, dy)
}

// FINALLY, lets run the game

run();
//The end





