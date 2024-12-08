// function updateView(selectedLampIndex, onClickHandler){
//     let app = document.getElementById('app');
//     app.innerHTML = /*HTML*/ `
//         <div id="circles" class="box"></div>
//     `;
    
//     let circles = '';
//     for(let i = 0; i < 25; i++){
//         const lightClass = i === selectedLampIndex ? 'lightOn' : '';
//         const clickHandler = i === selectedLampIndex ? `onclick="${onClickHandler}()"` : '';
    
//         circles += `<div id="circle${i}" class="lamp ${lightClass}" ${clickHandler}></div>`;
//     }
    
//     document.getElementById('circles').innerHTML = circles;
//     }


function updateView(selectedIndex, onClickHandler) {
    let app = document.getElementById('app');
    app.innerHTML = /*HTML*/ `
        <div id="circles" class="box"></div>
    `;
    
    let circles = '';
    for (let i = 0; i < 25; i++) {
        const lightClass = i === selectedIndex ? 'lightOn' : '';
        const clickHandler = i === selectedIndex ? `onclick="${onClickHandler}()"` : '';
        circles += `<div id="circle${i}" class="lamp ${lightClass}" ${clickHandler}></div>`; 
    }
    document.getElementById('circles').innerHTML = circles;
}
