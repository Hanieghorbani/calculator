const cells = document.querySelectorAll(".cell")
const operators = document.querySelectorAll(".cell-cal")
const result = document.querySelector(".result")
let numsArray = []
let selectOper

cells.forEach((cell) => {
  cell.addEventListener("click", (e) => {
    if (result.innerText == "0") {
      result.innerText = ""
    }

    if (selectOper) {
      result.innerText = ""
      result.innerText += e.target.innerText

      selectOper = ""
    } else {
      result.innerText += e.target.innerText
    }
  })
})

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    console.log(result.innerText.length)

    selectOper = e.target.innerText
    numsArray.push(result.innerText)
    numsArray.push(e.target.innerText)

    if (e.target.innerText == "=") {
      if (numsArray[1] == "÷") {
        result.innerText = numsArray[0] / numsArray[2]
        numsArray = []
      } else if (numsArray[1] == "⨉") {
        result.innerText = numsArray[0] * numsArray[2]
        numsArray = []
      } else if (numsArray[1] == "-") {
        result.innerText = numsArray[0] - numsArray[2]
        numsArray = []
      } else if (numsArray[1] == "+") {
        result.innerText = Number(numsArray[0]) + Number(numsArray[2])
        numsArray = []
      }
      if (result.innerText.length > 10) {
        result.style.fontSize = "2.5rem"
      } else {
        result.style.fontSize = "3.5rem"
      }
    }
  })
})

//فعال کردن دکمه های بالا در ماشین حساب 
//نشلن دادن تاریخچه حساب ها