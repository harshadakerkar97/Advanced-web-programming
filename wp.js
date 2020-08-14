function addmsg(a) {
    if (a.keyCode == 13) {
        let txt = document.getElementById('inp1').value;
        let temp = document.createElement('div');
        temp.style.height = "30px";
        temp.style.textAlign = "right";
        temp.style.width = "100%";
        temp.style.backgroundColor = "#CCEAAC";
        temp.textContent = txt;
        let txtbox = document.getElementById('mymsg');
        txtbox.appendChild(temp);
        // txtbox.style.display = "flex";
        // txtbox.style.justifyContent = "flex-end";
        // txtbox.style.alignItems = "flex-end";
        document.getElementById('inp1').value = "";



        if (txt == 'how are you') {
            let temp1 = document.createElement('div');
            temp1.style.height = "30px";
            temp1.style.marginTop = "5px";
            temp1.style.background = "#F8F6F7";
            temp1.style.float = "left";
            temp1.style.width = "15vw";
            temp1.textContent = "Fine. what about you";
            let txtbox1 = document.getElementById('mymsg');
            txtbox1.appendChild(temp1);
            // txtbox1.style.display = "flex";
        }


        if (txt == 'hello') {
            let temp1 = document.createElement('div');
            temp1.style.height = "30px";
            temp1.style.width = "15vw";
            temp1.style.float = "left";
            temp1.style.marginTop = "5px";
            temp1.style.backgroundColor = "#F8F6F7";
            temp1.textContent = "hello";
            let txtbox1 = document.getElementById('mymsg');
            txtbox1.appendChild(temp1);
            // txtbox1.style.display = "flex";
            // txtbox1.style.justifyContent = "flex-start";
            // txtbox1.style.alignItems = "flex-start";
            // txtbox1.style.alignItems = "flex-end";
        }



        if (txt == 'fine') {
            let temp1 = document.createElement('div');
            temp1.style.height = "30px";
            temp1.style.width = "15vw";
            temp1.style.float = "left";
            temp1.style.marginTop = "5px";
            temp1.style.backgroundColor = "#F8F6F7";
            temp1.textContent = "ok";
            let txtbox1 = document.getElementById('mymsg');
            txtbox1.appendChild(temp1);
            // txtbox1.style.display = "flex";
            // txtbox1.style.justifyContent = "flex-start";
            // txtbox1.style.alignItems = "flex-start";
            // txtbox.style.alignItems = "flex-end";
        }

    }
}


function letschat(ab) {
    console.log('lets chat');
    let temp = document.getElementById('rpart');
    temp.style.visibility = "visible";
    let name = ab.children[1].children[0].children[0].children[0].innerHTML;
    console.log(name);
    temp.children[0].children[1].children[0].innerHTML = name;

}