const getLanguage = () => {
    let language = 'en';
    if (window.navigator.languages) {
        language = window.navigator.languages[0];
    } else {
        language = window.navigator?.userLanguage || window.navigator.language;
    }
    return language;
}

export { getLanguage }