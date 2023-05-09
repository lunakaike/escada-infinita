document.addEventListener("DOMContentLoaded", function() {

    document.body.style.zoom = "100%";

    const div_ladder = document.querySelector(".ladder")
    const div_comment = document.querySelector(".div_comment")

    const ladder =`╠═══╣
    ║   ║
    `
    let step = 4



    function create_ladder() {
        div_ladder.innerHTML += ladder
    }

    let day = true
    let colorb = 0
    let colorw = 255

    function sistem_day() {
        if(day){
            document.body.style.background = `rgb(${colorw}, ${colorw}, ${colorw})`
            colorw--
            document.body.style.color = div_comment.style.borderColor = `rgb(${colorb}, ${colorb}, ${colorb})`
            colorb++
            console.log("da")

            if(colorb > 255 && colorw < 0){
                day = false
            }}

        if(day == false){
            document.body.style.background = `rgb(${colorw}, ${colorw}, ${colorw})`
            colorw++
            document.body.style.color = div_comment.style.borderColor = `rgb(${colorb}, ${colorb}, ${colorb})`
            colorb--
            console.log("ni")

            if(colorb === 0 && colorw === 255){
                day = true
            }}
    }

    async function create_comment(){
        const comments = await fetch("./comments.json")
        if(comments.status === 200){
            const data = await comments.json()

            let random_comment = data[26]

            div_comment.innerHTML = random_comment
        }



    }

    window.addEventListener("scroll", () => {
        if(window.scrollY + window.innerHeight + 20 > document.body.scrollHeight){

            create_ladder()
            sistem_day()
            step++

            if (Number.isInteger(step/10)){

                create_comment()

                console.log(`você só desceu ${step}?!?!?!?! 
                DESÇA MAIS RAPIDO !!!!!
                `)

            }
        }
    })

})