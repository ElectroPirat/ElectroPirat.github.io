const co = document.getElementsByTagName("canvas")[0]
const ctx = co.getContext("2d");
const bound = co.getBoundingClientRect();
var w = 200
var h = 150

ctx.strokeRect(0,0,200,150);

var data = new Array(w)
for (var i = 0; i < data.length; i++) {
    data[i] = new Array(h);
}
console.log(data)
var dataBuffer = new Array(w)
for (var i = 0; i < dataBuffer.length; i++) {
    dataBuffer[i] = new Array(h);
}

var ground = new Array(w)
for (var i = 0; i < dataBuffer.length; i++) {
    ground[i] = new Array(h);
}
for (i = 0; i < w; i++) {
    for (i_ = 0; i_ < h; i_++) {
        ground[i][i_] = Math.floor(Math.random() * (100 - 1) + 1)
    }
}

function getCursorPosition(event) {
    const x = event.clientX - bound.left
    const y = event.clientY - bound.top
    console.log("x: " + x + " y: " + y)
    ctx.fillRect(x,y,1,1)
    data[x][y] = 100
}

co.addEventListener('mousedown', function(e) {
    getCursorPosition(e)
})

function next() {
    for (i = 0; i < w; i++) {
        for (i_ = 0; i_ < h; i_++) {
            if (data[i][i_] >= 50) {
                // ctx.fillRect(i+1,i_,1,1)
                ctx.fillRect(i-1,i_,3,1)
                ctx.fillRect(i,i_-1,1,3)
                // ctx.fillRect(i,i_-1,1,1)
                try {
                    dataBuffer[i][i_] = ground[i][i_] * 1
                } catch {}
                try {
                    dataBuffer[i+1][i_] = ground[i][i_] * 1
                } catch {}
                try {
                    dataBuffer[i-1][i_] = ground[i][i_] * 1
                } catch {}
                try {
                    dataBuffer[i][i_+1] = ground[i][i_] * 1
                } catch {}
                try {
                    dataBuffer[i][i_-1] = ground[i][i_] * 1
                } catch {}
            }
        }
    }
    for (i = 0; i < w; i++) {
        for (i_ = 0; i_ < h; i_++) {
            data[i][i_] = dataBuffer[i][i_]
        }
    }

}

function show() {
    for (i = 0; i < w; i++) {
        for (i_ = 0; i_ < h; i_++) {
            if (ground[i][i_] >= 50) {
                ctx.fillStyle = `rgba(255, 165, 0)`;
                ctx.fillRect(i,i_,1,1)
            }
        }
    }
    ctx.fillStyle = 'black'
}