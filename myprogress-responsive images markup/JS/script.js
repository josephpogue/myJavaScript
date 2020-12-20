const IMAGES = document.querySelectorAll("img");
const SIZES = {
    showcase: "100vw",  //full width at all window sizes 
    reason: "(max-width: 799px) 100vw, 372px",
    feature: "(max-width: 799px) 100vw, 558px",
    story: "(max-width: 799px) 100vw, 670px",
}
//creates an array of image urls for srcset attribute
function makeSrcset(imgSrc){
    let markup = [];
    let width = 400;
    //Creates the image url for all sizes 
    for (let i = 0; i < 5; i++){
        markup[i] = imgSrc + "-" + width + ".jpg " + width + "w";
        width += 400;
    }
    return markup.join(); //comma separated list
}
for (let i = 0; i<IMAGES.length; i++){
    let imgSrc = IMAGES[i].getAttribute("src");
    imgSrc = imgSrc.slice(0, -8); //strip off last 8 characters
    let srcset = makeSrcset(imgSrc);
    //populate the srcset attribute
    IMAGES[i].setAttribute("srcset", srcset);
    

    let type = IMAGES[i].getAttribute("data-type") //data-type is a custom attribute (data-(anyname))
    let sizes = SIZES[type];
    //populate the size attribute
    IMAGES[i].setAttribute("sizes", sizes);

}
