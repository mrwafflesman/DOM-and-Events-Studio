// Write your JavaScript code here.
// Remember to pay attention to page loading!

let takeOff = null
let land = null
let abort = null
let status = null
let shuttleBackground = null
let height = null
let shuttleHeight = 0
let up = null
let down = null
let left = null
let right = null
let rocket = null
let upDown = 0
let leftRight = 0

function init() {
    takeOff = document.getElementById("takeoff")
    land = document.getElementById("landing")
    abort = document.getElementById("missionAbort")
    status = document.getElementById("flightStatus")
    shuttleBackground = document.getElementById("shuttleBackground")
    height = document.getElementById("spaceShuttleHeight")
    up = document.getElementById("up")
    down = document.getElementById("down")
    left = document.getElementById("left")
    right = document.getElementById("right")
    rocket = document.getElementById("rocket")

    takeOff.addEventListener('click', function(){
        if (window.confirm("Confirm that the shuttle is ready for takeoff.")){
            //window.console.log('test')
            status.innerHTML = "Shuttle in flight."
            shuttleBackground.style.backgroundColor = "#0000FF"
            shuttleHeight += 10000
            height.innerHTML = shuttleHeight
        }
    })

    land.addEventListener('click', function(){
        window.confirm("The shuttle is landing. Landing gear engaged.")
        status.innerHTML = "The shuttle has landed."
        shuttleBackground.style.backgroundColor = "#FFFFFF"
        height.innerHTML = 0
        shuttleHeight = 0
    })

    abort.addEventListener('click', function(){
        if (window.confirm("Confirm that you want to abort the mission.")){
            status.innerHTML = "Mission aborted."
            shuttleBackground.style.backgroundColor = "#008000"
            height.innerHTML = 0
            shuttleHeight = 0
        }
    })

    up.addEventListener('click', function(){
        shuttleHeight += 10000
        height.innerHTML = shuttleHeight
        upDown -= 10
        rocket.style.top = `${upDown}px`
    })

    down.addEventListener('click', function(){
        shuttleHeight -= 10000
        height.innerHTML = shuttleHeight
        upDown += 10
        rocket.style.top = `${upDown}px`
    })

    left.addEventListener('click', function(){
        leftRight -= 10
        rocket.style.left = `${leftRight}px`
    })

    right.addEventListener('click', function(){
        leftRight += 10
        rocket.style.left += `${leftRight}px`
    })
}



window.onload = init;