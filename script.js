const numberOfTxtInp = document.getElementById('numberOfText')
const selectOptions = document.querySelector('.selectoption')
const GenerateBtn = document.querySelector('#GenerateBtn')
const textGenearatorBody = document.getElementById('textGenearator-Body')
const copyBtn = document.querySelector('#copyBtn')
let toastContainer = document.querySelector('.toast-container')

// numberOfTxtInp.style.borderColor = "red"; // direct css write from javascript📗🔖

let selectedOption = 'paras'; 
let howMuchTxtInp = 7;

// ----------- all event listner ---------------📗🔖 in last all event listner have been written.

// GenerateBtn.addEventListener('click', (e)=>{
//     e.preventDefault();
//      getValues()
// })

const getValues = ()=> {
    if(selectOptions.value === 'words'){
        textGenearatorBody.innerHTML = 'This option Currently not working. Please check after fews days. NOTE: except " word " all others are working fine.'
    }
    else{ // 📗🔖❤️❤️❤️❤️if dont write else then if will work as well else also works. so always use other part in else.

        howMuchTxtInp = numberOfTxtInp.value;
        console.log(howMuchTxtInp);
     
        selectedOption = selectOptions.value; //📗🔖 here .value give those child selected from html that element value attribute 's data gives.
        console.log(selectedOption);
        validateValues(); // when write another function inside it represent when someone click it also run as well.
    }

};

const validateValues = ()=>{ 
    if(howMuchTxtInp > 100){
        invalidInput();
        setTimeout(()=>alert('input can not be greater than 100'),0)//📗 so that invalidInput() can run first then alert() that's why setTimeout used.
        // howMuchTxtInp = 100;
        // numberOfTxtInp.value = "100";//📗🔖🔥 empty the element then .innerHTML = '' not work bcz in input element .value target element content instaed .innerHTML
    }else if (howMuchTxtInp < 1){
        invalidInput();
        setTimeout(()=> alert('input can not be less than 1') ,0)//📗 so that invalidInput() can run first then alert() that's why setTimeout used.
    //    howMuchTxtInp = 7;
    //    numberOfTxtInp.value = "7";//📗🔖🔥 empty the element then .innerHTML = '' not work bcz in input element .value target element content instaed .innerHTML
    }
    else if(isNaN(howMuchTxtInp)){
        invalidInput();
        setTimeout(()=>alert('input must be only number'),0)// so that invalidInput() can run first then alert() that's why setTimeout used.
    }else{
        fetchData(howMuchTxtInp, selectedOption); //📗🔖❤️❤️❤️❤️ only run when inputs are correct.
    }   
} 

const invalidInput = ()=>{ 
    numberOfTxtInp.value = ' '; //📗🔖🔥 empty the element and .innerHTML = '' not work bcz in input element .value target element content instaed .innerHTML
    numberOfTxtInp.style.borderColor = "red"; //👇 behind the scene this happens. meas attribute has been created in html element.📗🔖
    // <input type="text" placeholder="e.g 3" style="border-color: red" id="numberOfText" ></input>
    setTimeout(()=>{
        // numberOfTxtInp.style.borderColor = ''; // here we are just empty the attribute value 
        numberOfTxtInp.removeAttribute("style");  // here we are remove oe delete attribute
    },2000)
}

const fetchData = async (howMuchTxtInp, selectedOption)=>{ //📗🔖 still Global variable. if function takes parametes then on page load it woudnt works bcz global varibale not passing and it requres in argument
   try {
    const URL = `https://baconipsum.com/api/?type=alll-meat&${selectedOption}=${howMuchTxtInp}&start-with-lorem=1`;
    const resp = await fetch(URL)
    const data = await resp.json()
    console.log(data);
    // textGenearatorBody.style.display="block";
    showData(data);
   
   } catch (error) {
    console.log("Mr/Mrs there are errors 👉", error);
    
   }
}

const showData = (data)=>{      //📗🔖 array each element how to seprate see this.
    // let texts = ""
    texts = data.join("<br><br>"); 
    textGenearatorBody.innerHTML = texts;
}

// copyBtn.addEventListener('click', ()=>{ //still exist, all event listner have been written in last
//     textCopy()
// })

const textCopy = ()=>{
    const copiedContent = textGenearatorBody.textContent;
    window.navigator.clipboard.writeText(copiedContent) //📗🔖 navigator is window 's object or browser's object. and writeText() is its method.
    // console.log(copiedContent);
    showToast("Copied to clipboard!"); //📗🔖 for this second thing / work dont need tp write another event listner / event handler just on is enough for two.
}


function showToast(message) {
    const toastEle = document.createElement("div");
    toastEle.className = 'toast'; 
    // 📗🔖📗🔖 or toast.classList.add('toast') 
    toastEle.textContent = message;

    // Add means append so append the toast element div to the document
    toastContainer.appendChild(toastEle);

    setTimeout(() => {
        toastEle.remove();
    }, 1000);
};


// Add some CSS styles for the toast element 📗🔖📗🔖📗🔖📗🔖
const styleEle = document.createElement("style");
styleEle.innerHTML = `
    .toast {
        position: fixed;
        top: 20px;
        // right: 20px;
        padding: 10px 20px;
        color: white;
        border-radius: 5px;
        // opacity: 0.9;
        font-size: 16px;
        background-color: green;
        transition: all 0.15s ease-in-out;
    }
`;

document.head.appendChild(styleEle);


// ----------- all event listner ---------------

GenerateBtn.addEventListener('click', (e)=>{
    e.preventDefault();
     getValues()
})

copyBtn.addEventListener('click', ()=>{
    textCopy()
})





// function showToast(message) {
//     setInterval(() => {
//     // ----------create elemet----------
//         const toastEle = document.createElement("div");
//         toastEle.className = 'toast'; 
//         // 📗🔖📗🔖 or toast.classList.add('toast') 
//         toastEle.textContent = message;
    
//         // Add means append so append the toast element div to the document
//         toastContainer.appendChild(toastEle);

//     // ----------delete elemet----------
//        setTimeout(() => {
//            toastEle.remove();
//        }, 1000);
//     },3000);
// };





