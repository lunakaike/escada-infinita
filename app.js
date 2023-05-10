document.addEventListener("DOMContentLoaded", function() {
    const div_ladder = document.querySelector(".ladder");
    const div_comment = document.querySelector(".div_comment");
    const h1_Height_ledder = document.querySelector(".h1_Height_ledder");

    let ladder =`╠═══╣
║   ║
╠═══╣
║   ║
╠═══╣
║   ║
╠═══╣
║   ║
╠═══╣
║   ║
`;
    let step = 4;
    let margin_scroll = 20;
    let end = false;
    let Height_ledder = 1000000;

    function create_ladder() {
        div_ladder.innerHTML += ladder
    };

    let day = true;
    let colorb = 0;
    let colorw = 255;

    function sistem_day() {
        if(day){
            document.body.style.background = h1_Height_ledder.style.background = div_comment.style.background = `rgb(${colorw}, ${colorw}, ${colorw})`;
            colorw--;
            document.body.style.color = div_comment.style.borderColor = `rgb(${colorb}, ${colorb}, ${colorb})`;
            colorb++;

            if(colorb > 255 && colorw < 0){
                day = false;
            }};

        if(day == false){
            document.body.style.background  = h1_Height_ledder.style.background = div_comment.style.background =`rgb(${colorw}, ${colorw}, ${colorw})`;
            colorw++;
            document.body.style.color = div_comment.style.borderColor = `rgb(${colorb}, ${colorb}, ${colorb})`;
            colorb--;

            if(colorb === 0 && colorw === 255){
                day = true;
            }};
    };

    async function create_comment(){
        const comments = await fetch("./comments.json");
        if(comments.status === 200){
            const data = await comments.json();

            let random_comment = data[Math.floor(Math.random()*data.length)];

            div_comment.innerHTML = random_comment;
        };
    };

    let Prev_position_scroll = window.pageYOffset;

    window.addEventListener("scroll", () => {

        let current_position_Scroll = window.pageYOffset;

        if (Prev_position_scroll < current_position_Scroll) {
            Height_ledder--;
            h1_Height_ledder.innerHTML = `Altura: ${Height_ledder}`;
            Prev_position_scroll = current_position_Scroll

            if(Height_ledder <= 20 && end === false){
                ladder =`







`;
            }if(Height_ledder <= 0 && end === false){
                end = true
                div_ladder.innerHTML += "<b style='font-size: 3rem;'><i> <center>FINAL TRISTE </b> </i> <br>CONTINUE<br>DESÇENDO</center>"

                ladder =`╠═══╣
║   ║
╠═══╣
║   ║
╠═══╣
║   ║
╠═══╣
║   ║
╠═══╣
║   ║
`;
        }
    }

        if(window.scrollY + window.innerHeight + margin_scroll > document.body.scrollHeight){

            create_ladder();
            sistem_day();
            step++;
            

            if (Number.isInteger(step/2)){

                create_comment();

                console.log(`você só desceu ${step}?!?!?!?! 
                DESÇA MAIS RAPIDO !!!!!
                `);

            };
        };
    });

});