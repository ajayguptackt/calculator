let i = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";

let arr = Array.from(buttons);

arr.forEach(button => {
        button.addEventListener('click', (e) =>{
            
        if(e.target.innerHTML == '=')
            {
                string = eval(string);
                i.value = string;
            }
            else if(e.target.innerHTML == 'AC'){
                    string=""; 
                    i.value=string;
            }
            else if(e.target.innerHTML == 'DEL'){
                    string=string.substring(0, string.length-1);
                    i.value=string;
            }
            else{
                string +=e.target.innerHTML;
                i.value=string;
            }
    })
})

