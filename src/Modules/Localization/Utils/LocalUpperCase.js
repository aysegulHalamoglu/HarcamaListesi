//custom uppercase to fix i to İ in turkish

import { Locales } from "../LocalizationConstants"

export const customUppercase = (text, locale) => {
    console.log(">>>>>>> TYPE",typeof text);
    let newText = text;
    if (locale === Locales.turkish) {
        newText = newText.replace(/[i]/g, 'İ');
    }

    console.log('>>>>>> TYPE newText', typeof newText)
    newText = newText.toLocaleUpperCase(locale);
    return newText;
}

export const customLowercase = (text, locale) => {
    console.log(">>>>>>> TYPE",typeof text);
    let newText = text;
    if (locale === Locales.turkish) {
        newText = newText.replace(/[İ]/g, 'i');
    }

    console.log('>>>>>> TYPE newText', typeof newText)
    newText = newText.toLocaleLowerCase(locale);
    return newText;
}