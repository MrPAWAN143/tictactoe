let btns = document.querySelectorAll('.btn')
let Winner = document.querySelector('.winner-box h1')
let newgamebtn = document.querySelector('.startnewgame')
let resetgame = document.querySelector('#restgame')




let playerX = true;


const winpatterns = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [2, 4, 6],
    [6, 7, 8]

]



resetgame.addEventListener('click', () => {

    newgame()

   
    resetgame.style.backgroundColor = 'rgb(162, 44, 44)'
    resetgame.style.color = 'rgb(166, 163, 163)'
    
})

const newgame = () => {
    playerX = true
    enablebtn()
}

const enablebtn = () => {
    for (let btn of btns) {
        btn.disabled = false
        btn.innerText = "";
        Winner.innerText = 'Winner Announcement'
        newgamebtn.style.backgroundColor = 'rgb(49, 103, 49)'
        newgamebtn.style.color = 'rgb(164, 165, 162)'


        for (win of winpatterns) {
            let pos1val = btns[win[0]]
            let pos2val = btns[win[1]]
            let pos3val = btns[win[2]]
            pos1val.style.backgroundColor = 'chocolate'
            pos2val.style.backgroundColor = 'chocolate'
            pos3val.style.backgroundColor = 'chocolate'

        }

    }
}

const disabledbtn = () => {
    for (let btn of btns) {
        btn.disabled = true
    }
}


btns.forEach((btn) => {

    btn.addEventListener('click', function () {
        if (playerX) {
            btn.innerText = 'X'
            playerX = false
        } else {
            btn.innerText = '0'
            playerX = true
        }

        btn.disabled = true


        resetgame.style.backgroundColor = 'red'
        resetgame.style.color = 'white'

        checkwinner()



    })


})

const checkwinner = () => {

    for (win of winpatterns) {

        // console.log(win[0],win[1],win[2])

        let pos1val = btns[win[0]].innerText
        let pos2val = btns[win[1]].innerText
        let pos3val = btns[win[2]].innerText


        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {

            if (pos1val === pos2val && pos2val === pos3val) {
                winner(win, pos1val)


            }
        }


    }
};

const winner = (win, pos1val) => {

    let b1 = btns[win[0]]
    let b2 = btns[win[1]]
    let b3 = btns[win[2]]

    b1.style.backgroundColor = "green"
    b2.style.backgroundColor = "green"
    b3.style.backgroundColor = "green"
    disabledbtn()

    // console.log(b1, b2, b3);
    // console.log(pos1val);

    announcewinner(pos1val)


}

const announcewinner = (pos1val) => {
    Winner.innerText = `Congratulations! ${pos1val}`
    newgamebtn.style.backgroundColor = 'green'
    newgamebtn.style.color = 'white'


}


newgamebtn.addEventListener('click', () => {

    let check = true

    for (let btn of btns) {
        if (btn.innerText == "") {

        } else {
            if (check) {
                for (win of winpatterns) {

                    // console.log(win[0],win[1],win[2])

                    let pos1val = btns[win[0]].innerText
                    let pos2val = btns[win[1]].innerText
                    let pos3val = btns[win[2]].innerText

                    if (pos1val !== "" && pos2val !== "" && pos3val !== "") {

                        if (pos1val === pos2val && pos2val === pos3val) {

                            newgame()
                        }
                    }

                }
            }


            return

        }
    }

})


