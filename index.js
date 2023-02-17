let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.itemBox');
for(let i = 0; i<list.length; i++){
   list[i].addEventListener('click',function(){
    for(let j = 0; j<list.length; j++){
        list[j].classList.remove('active');
    }
    this.classList.add('active');
    let dataFilter = this.getAttribute('data-filter');

    for(let k = 0; k<itemBox.length; k++){
        itemBox[k].classList.remove('active');
        itemBox[k].classList.add('hide');

        if(itemBox[k].getAttribute('data-item')==dataFilter || dataFilter =="all"){
            itemBox[k].classList.remove('hide');
            itemBox[k].classList.add('active');
        }
    }
   })
}


// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// form validate
function validateform(){  
    var name=document.myform.name.value;  
    var email=document.myform.email.value;  
    var subject=document.myform.subject.value;  
    var message=document.myform.message.value;  
 console.log(subject);
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");  
      
    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;  
    }else if(atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
        alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
      return false;  
      }  
      else if(subject==null || subject==""){
        alert("Suject can't be blank");
        return false;
      }else if(message==null || message==""){
        alert("Message can't be blank");
        return false;
      }
      else{
        alert('message successfully submitted');
      }
    }  


    // form validation
    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    
    //Show input error messages
    function showError(input, message) {
        const formControl = input.parentElement;
        formControl.className = 'form-control error';
        const small = formControl.querySelector('small');
        small.innerText = message;
    }
    
    //show success colour
    function showSucces(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }
    
    //check email is valid
    function checkEmail(input) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(input.value.trim())) {
            showSucces(input)
        }else {
            showError(input,'Email is not invalid');
        }
    }
    
    
    //checkRequired fields
    function checkRequired(inputArr) {
        inputArr.forEach(function(input){
            if(input.value.trim() === ''){
                showError(input,`${getFieldName(input)} is required`)
            }else {
                showSucces(input);
            }
        });
    }
    
    
    //check input Length
    function checkLength(input, min ,max) {
        if(input.value.length < min) {
            showError(input, `${getFieldName(input)} must be at least ${min} characters`);
        }else if(input.value.length > max) {
            showError(input, `${getFieldName(input)} must be les than ${max} characters`);
        }else {
            showSucces(input);
        }
    }
    
    //get FieldName
    function getFieldName(input) {
        return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    }
    
    
    //Event Listeners
    form.addEventListener('submit',function(e) {
        e.preventDefault();
    
        checkRequired([username, email, subject, message]);
        checkLength(username,3,15);
        // checkLength(password,6,25);
        checkEmail(email);
        // checkPasswordMatch(password, password2);
    });

//check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(input.value.trim())) {
      showSucces(input)
  }else {
      showError(input,'Email is not invalid');
  }
}

//checkRequired fields
// function checkRequired(inputArr) {
//   inputArr.forEach(function(input){
//       if(input.value.trim() === ''){
//           showError(input,`${getFieldName(input)} is required`)
//       }else {
//           showSucces(input);
//       }
//   });
// }

//check input Length
// function checkLength(input, min ,max) {
//     if(input.value.length < min) {
//         showError(input, `${getFieldName(input)} must be at least ${min} characters`);
//     }else if(input.value.length > max) {
//         showError(input, `${getFieldName(input)} must be les than ${max} characters`);
//     }else {
//         showSucces(input);
//     }
// }

//get FieldName
// function getFieldName(input) {
//   return input.id.charAt(0).toUpperCase() + input.id.slice(1);
// }

// check passwords match
// function checkPasswordMatch(input1, input2) {
//   if(input1.value !== input2.value) {
//       showError(input2, 'Passwords do not match');
//   }
// }
//Event Listeners
// form.addEventListener('submit',function(e) {
//   e.preventDefault();

//   checkRequired([username, email, password, password2]);
//   checkLength(username,3,15);
//   checkLength(password,6,25);
//   checkEmail(email);
//   checkPasswordMatch(password, password2);
// });

