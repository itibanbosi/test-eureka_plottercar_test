input.onButtonPressed(Button.A, function () {
    eureka_plotter_car.plottercar_pen(pen_onoff.下げる)
    eureka_plotter_car.cycle(5)
    eureka_plotter_car.cycle(10)
    eureka_plotter_car.cycle(15)
    eureka_plotter_car.cycle(20)
    eureka_plotter_car.cycle(25)
    eureka_plotter_car.cycle(30)
    eureka_plotter_car.plottercar_pen(pen_onoff.上げる)
})
input.onButtonPressed(Button.B, function () {
    eureka_plotter_car.plottercar_pen(pen_onoff.上げる)
})
