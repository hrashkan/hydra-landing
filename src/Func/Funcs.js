//zoom image func
const zoomMouseMove = (event) => {
    const zoomFactor = 2;
    const offsetX = event.nativeEvent.offsetX / event.target.offsetWidth;
    const offsetY = event.nativeEvent.offsetY / event.target.offsetHeight;
    const transformOrigin = `${offsetX * 100}% ${offsetY * 100}%`;
    event.target.style.transformOrigin = transformOrigin;
    event.target.style.transform = "scale(2)";
    // setZoom(zoomFactor);
};

//un zoom image
const zoomMouseLeave = () => {
    event.target.style.transformOrigin = "center center";
    event.target.style.transform = "scale(1)";
    // setZoom(1);
};

export { zoomMouseMove, zoomMouseLeave }