function generateSvg(data){
    let shapeFormatting = getFormat(data);
    
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shapeFormatting};
            </svg>`;
};

function getFormat(data){
    let shapeFormatting;
    if( `${data.shape}` == "circle")
    {
      shapeFormatting = `<circle cx="150" cy="100" r="80" fill="${data.shapeColor}" />
                         <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text.slice(0,3).toUpperCase()}</text>`;
      return shapeFormatting;
    }
    else if (`${data.shape}` == "square")
    {
      shapeFormatting = `<rect  width="300" height="200" fill = "${data.shapeColor}" />
                         <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text.slice(0,3).toUpperCase()}</text>`;
                         return shapeFormatting;
    }
    else if(`${data.shape}` == "triangle")
    {
      shapeFormatting = `<polygon points="150,10 300,190 0,190" fill= "${data.shapeColor}" />
                         <text x="150" y="150" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text.slice(0,3).toUpperCase()}</text>`
                         return shapeFormatting;
    }
}

module.exports = {generateSvg};
