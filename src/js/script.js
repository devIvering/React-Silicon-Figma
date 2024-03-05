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




export async function handleSubscribe(e) {
    e.preventDefault();

    const formData = {
        email: e.target.elements.email.value
    };

    try {
        const response = await fetch('https://kyhnet23-assignment.azurewebsites.net/api/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            const data = await response.json();
            console.log('API response:', data);
        } else {
            console.log('API request failed:', response.status);
        }
    } catch (error) {
        console.error('Error during API request:', error);
    }
}
