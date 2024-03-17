import React, { useState, useEffect } from 'react';

// Mobile dropdown

export const toggleMenu = () => {
    const element = document.getElementById('menu');

    if (element.style.display === 'none') {
        element.style.display = 'block';
        element.style.color = '#ffffff';
        element.style.zIndex = 1;

        const links = element.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                element.style.display = 'none';
            });
        });
    } else {
        element.style.display = 'none';
    }
};






