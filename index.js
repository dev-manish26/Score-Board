let scoreElHome = document.getElementById('score-home')
let scroeElGuest = document.getElementById('score-guest')
let currentScoreHome = 0
let currentScoreGuest = 0

function plus1() {
    currentScoreHome = currentScoreHome + 1
    scoreElHome.textContent = currentScoreHome
}
function plus2() {
    currentScoreHome = currentScoreHome + 2
    scoreElHome.textContent = currentScoreHome
}
function plus3() {
    currentScoreHome = currentScoreHome + 3
    scoreElHome.textContent = currentScoreHome
}

function plus1guest() {
    currentScoreGuest = currentScoreGuest + 1
    scroeElGuest.textContent = currentScoreGuest
}
function plus2guest() {
    currentScoreGuest = currentScoreGuest + 2
    scroeElGuest.textContent = currentScoreGuest
}
function plus3guest() {
    currentScoreGuest = currentScoreGuest + 3
    scroeElGuest.textContent = currentScoreGuest
}