function myTime() {
  const time = new Date()
  const hours = time.getHours()
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()

  document.getElementById('clock').innerHTML = `${Math.floor(hours / 10)}${hours % 10}:${Math.floor(minutes / 10)}${minutes % 10}:${Math.floor(seconds / 10)}${seconds % 10}`
}

myTime()
setInterval(myTime, 1000)