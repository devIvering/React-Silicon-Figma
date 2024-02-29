import React, { useState, useEffect } from 'react';

// Mobile dropdown

export const toggleMenu = () => {
    const element = document.getElementById('menu')
    if (element.style.display === "none") {
        element.style.display = "block";
        element.style.color = "#ffffff";
    }
    else {
        element.style.display = "none";
    }
}



// Toggle switch event

// document.getElementById('theme-toggle-switch').addEventListener('change', function(event){
//     if(event.target.checked) {
//         document.body.classList.add('dark-mode');
//         document.body.classList.remove('light-mode');
//     } else {
//         document.body.classList.add('light-mode');
//         document.body.classList.remove('dark-mode');
//     }
// });

// const accordion = document.getElementsByClassName('accordion-group')
// const buttons = accordion[0].querySelectorAll('button')

// for (let button of buttons) {
//     if (button.dataset.toggle === 'collapse') {  
//         button.addEventListener('click', () => {
//             button.parentNode.children[1].classList.toggle('fa-chevron-down')
//             button.parentNode.children[1].classList.toggle('fa-chevron-up')     
//             button.parentNode.children[1].classList.toggle('active')        

//             let target = button.dataset.toggleTarget        
//             document.getElementById(target).classList.toggle('d-none')
//         })
//     }
// }

// Validation functions

export function handleSubmit(e) {
    e.preventDefault()

    for (let element of e.target) {
        if (element.required) {
            switch (element.type) {
                case "text":
                    validateName(element);
                    break;
                case "password":
                    validatePassword(element);
                    break;
                case "email":
                    validateEmail(element);
                    break;
            }
        }
    }
}

export function validateName(element) {
    let errorMessages = element.closest('.input-group').querySelectorAll('.name-error-message');

    if (element.value.length === 0) {
        for (let i = 0; i < errorMessages.length; i++) {
            errorMessages[i].innerHTML = 'You must enter a name.';
        }
    } else if (element.value.length < 2) {
        for (let i = 0; i < errorMessages.length; i++) {
            errorMessages[i].innerHTML = 'You must enter a valid name.';
        }
    } else {
        for (let i = 0; i < errorMessages.length; i++) {
            errorMessages[i].innerHTML = '';
        }
    }
}



export function validateEmail(element) {
    let errorMessages = document.getElementsByClassName('email-error-message');
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regEx.test(element.value)) {
        for (let i = 0; i < errorMessages.length; i++) {
            errorMessages[i].innerHTML = 'You must enter a valid email address.';
        }
    } else {
        for (let i = 0; i < errorMessages.length; i++) {
            errorMessages[i].innerHTML = '';
        }
    }
}

export function validatePassword(element) {
    let errorMessage = document.getElementById('password-error-message');
    if (element.value.length === 0) {
        errorMessage.innerHTML = 'You must enter a password.';
    } else if (element.value.length < 8) {
        errorMessage.innerHTML = 'You must enter a valid password.';
    } else {
        errorMessage.innerHTML = '';
    }
}



