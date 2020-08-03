const paintingTitleHeight = document.querySelector('.painting__line-title').offsetHeight
const paintingAuthoreHeight = document.querySelector('.painting__line-author').offsetHeight

gsap.from(".painting__img-wrapper", {scale: 0, duration: 2});
gsap.fromTo(".painting__line-title",{y:  paintingTitleHeight},{y: - paintingTitleHeight,duration: 12,repeat: -1,ease: Linear.easeNone})
gsap.fromTo(".painting__line-author",{y:  paintingAuthoreHeight},{y: - paintingAuthoreHeight,duration: 12,repeat: -1,ease: Linear.easeNone})