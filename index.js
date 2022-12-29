const getTime = () => {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    return `${h} : ${m} : ${s}`;
}



setInterval(() => {
    document.querySelector(".clock").innerHTML = getTime();
}, 1000);