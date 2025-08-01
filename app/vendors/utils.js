var getTextSize = function (text, fontSize, fontFamily) {
    var el = document.createElement('span');
    var width = 0;
    var height = 0;

    el.style.visibility = 'hidden';
    el.style.position = 'absolute';
    el.style.height = 'auto';
    el.style.width = 'auto';
    el.style.whiteSpace = 'nowrap';
    el.style.font = `${fontSize} ${fontFamily}`;

    el.textContent = text;
    
    document.body.appendChild(el);

    width = el.clientWidth;
    height = el.clientHeight;
    
    el.remove();

    return {
        width,
        height
    }
};

export {
    getTextSize
};
