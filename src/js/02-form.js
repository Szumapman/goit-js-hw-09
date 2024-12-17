"use strict";

const feedbackForm = document.querySelector(".feedback-form");
const emailInput = feedbackForm.elements.email;
const messageTextarea = feedbackForm.elements.message;

const localStorageKey = "feedback-form-state";

feedbackForm.addEventListener("input", () => {
    const formValues = {
        email: emailInput.value.trim(),
        textarea: messageTextarea.value.trim(),
    };
    try {
        localStorage.setItem(localStorageKey, JSON.stringify(formValues));
    } catch (error) {
        console.error("Błąd podczas konwersji do JSON:", error);
    }
});

const loadedValues = localStorage.getItem(localStorageKey);
if (loadedValues) {
    try {
        const formLoadedValues = JSON.parse(loadedValues);
        emailInput.value = formLoadedValues.email;
        messageTextarea.value = formLoadedValues.message;
    } catch {
        console.error("Błąd podczas parsowania JSON pobranego z local storage:", error);
    }
}
 