color_num = {
    red : 0,
    yellow : 1,
    green : 2,
}

let circles =  document.querySelectorAll( ".dety" );
let colors = [ "#bd0000" , "#f7ff19", "#1ab024"]
function switch_on_color(puhlye_dety) {
    circles[puhlye_dety].style.background = colors[puhlye_dety];
}
function switch_off_color(puhlye_dety) {
    circles[puhlye_dety].style.background = "";
}
function work_of_traffic_lights() {

    switch_off_color(color_num.yellow)
    switch_on_color(color_num.green)
    setTimeout( () => {
        switch_on_color(color_num.yellow)
    } , 3000)
    setTimeout( () => {
        switch_off_color(color_num.green)
        switch_off_color(color_num.yellow)
        switch_on_color( color_num.red)
    }, 5000)
    setTimeout( () => {
        switch_off_color(color_num.red)
        switch_on_color(color_num.yellow)
    }, 10000 )
}

work_of_traffic_lights()

setInterval(work_of_traffic_lights, 12000 )