
const headRunningLineWrapper = document.querySelectorAll('.head__running-line-wrapper')
const paintingsRunningLineWrapper = document.querySelectorAll('.paintings-running-line-wrapper')


createRunnigLine = (runningLineWrappers,timeDelay) => {
    runningLineWrappers.forEach((rlw,ix)=>{
        const runningLine = rlw.querySelector('.running-line')
        const clonnedRunningLine = runningLine.cloneNode(true)
    
        let listWidth = 10;
        
        const runningLineItems = runningLine.querySelectorAll('.running-line__item')
    
        runningLineItems.forEach((runningLineItem)=>{
        listWidth += runningLineItem.offsetWidth;
        })
    
        rlw.style.width = listWidth + "px"
        clonnedRunningLine.style.width = listWidth + "px"
        clonnedRunningLine.classList.add('running-line_cloned')
        rlw.appendChild(clonnedRunningLine)
        
        let mod = 1;
        if(ix === 1) {
        mod = -1;
        } else if(ix === 2) {
        mod = 1.7;
        }
        listWidth = mod > 0 ? listWidth : -listWidth;
    
        //TimelineMax
    var infiniteRunningLine = new TimelineMax({ repeat: -1, paused: true });
    var time = timeDelay / Math.abs(mod);
    
    infiniteRunningLine
        .fromTo(
        runningLine,
        time,
        { rotation: 0.01, x: 0 },
        { force3D: true, x: -listWidth, ease: Linear.easeNone },
        0
        )
        .fromTo(
        clonnedRunningLine,
        time,
        { rotation: 0.01, x: listWidth },
        { force3D: true, x: 0, ease: Linear.easeNone },
        0
        )
        .set(runningLine, { force3D: true, rotation: 0.01, x: listWidth })
        .to(
        clonnedRunningLine,
        time,
        { force3D: true, rotation: 0.01, x: -listWidth, ease: Linear.easeNone },
        time
        )
        .to(
        runningLine,
        time,
        { force3D: true, rotation: 0.01, x: 0, ease: Linear.easeNone },
        time
        )
        .progress(1)
        .progress(0)
        .play();
        
        rlw.querySelectorAll('.running-line__item').forEach(el=>{
            el.addEventListener('mouseenter',()=>{
                infiniteRunningLine.pause();
            })
            el.addEventListener('mouseleave',()=>{
                infiniteRunningLine.play();
            })
        })
       
    })
}

createRunnigLine(headRunningLineWrapper,40)
createRunnigLine(paintingsRunningLineWrapper,25)



const headWrapperAnimation = document.querySelector('.main-page__head')
const headTargetsAnimation = document.querySelectorAll('.head__author-painting')
const paintingsRunningLineWrapperContent = document.querySelector('.paintings-running-line-wrapper__content')

headTargetsAnimation.forEach(headTargetAnimation=>{
    const targetAuthorName = headTargetAnimation.getAttribute('data-author')
    headTargetAnimation.addEventListener('mouseenter',()=>{
        headWrapperAnimation.style.backgroundImage = `url('./../images/head-bg-${targetAuthorName}.jpg')`
    })
})

const paintingsRunningLineItems = document.querySelectorAll('.paintings-running-line__item')
paintingsRunningLineItems.forEach((paintingsRunningLineItem)=>{
    paintingsRunningLineItem.addEventListener('mouseenter',()=>{
        paintingsRunningLineWrapperContent.textContent = paintingsRunningLineItem.getAttribute('data-author')
        paintingsRunningLineWrapperContent.classList.add('paintings-running-line-wrapper__content_active')
    })
    paintingsRunningLineItem.addEventListener('mouseleave',()=>{
        paintingsRunningLineWrapperContent.classList.remove('paintings-running-line-wrapper__content_active')
    })
})