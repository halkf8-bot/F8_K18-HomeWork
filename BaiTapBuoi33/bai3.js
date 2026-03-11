function startCoundown(seconds) {
    const timerId = setInterval(() => {
        if (seconds > 0) {
            console.log(seconds)
            seconds--
        } else {
            console.log("Hết giờ")
            clearInterval(timerId)
        }
    }, 1000)
}

startCoundown(5)