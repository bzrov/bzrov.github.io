
  const sliderImagesHero = document.querySelectorAll('.slide-item'),
  arrowNextHero = document.querySelector('.hero_btn_next'),
  arrowPrevHero = document.querySelector('.hero_btn_prev'),
  paginationHero = document.querySelectorAll('.pagination_item')

let current = 0

window.CanvasSlideshow = function (options) {



  //  SCOPE
  /// ---------------------------      
  var that = this;



  //  OPTIONS
  /// ---------------------------      
  options = options || {};
  options.stageWidth = options.hasOwnProperty('stageWidth') ? options.stageWidth : 1440;
  options.stageHeight = options.hasOwnProperty('stageHeight') ? options.stageHeight : 1024;
  options.pixiSprites = options.hasOwnProperty('sprites') ? options.sprites : [];
  options.texts = options.hasOwnProperty('texts') ? options.texts : [];
  options.autoPlay = options.hasOwnProperty('autoPlay') ? options.autoPlay : true;
  options.autoPlaySpeed = options.hasOwnProperty('autoPlaySpeed') ? options.autoPlaySpeed : [10, 3];
  options.fullScreen = options.hasOwnProperty('fullScreen') ? options.fullScreen : true;
  options.displaceScale = options.hasOwnProperty('displaceScale') ? options.displaceScale : [200, 70];
  options.displacementImage = options.hasOwnProperty('displacementImage') ? options.displacementImage : '';
  options.navElement = options.hasOwnProperty('navElement') ? options.navElement : document.querySelectorAll('.scene-nav');
  options.displaceAutoFit = options.hasOwnProperty('displaceAutoFit') ? options.displaceAutoFit : false;
  options.wacky = options.hasOwnProperty('wacky') ? options.wacky : false;
  options.interactive = options.hasOwnProperty('interactive') ? options.interactive : false;
  options.displaceScaleTo = (options.autoPlay === false) ? [0, 0] : [20, 20];
  options.textColor = options.hasOwnProperty('textColor') ? options.textColor : '#fff';
  options.displacementCenter = options.hasOwnProperty('displacementCenter') ? options.displacementCenter : false;
  options.dispatchPointerOver = options.hasOwnProperty('dispatchPointerOver') ? options.dispatchPointerOver : false;



  //  PIXI VARIABLES
  /// ---------------------------    
  var renderer = new PIXI.autoDetectRenderer(options.stageWidth, options.stageHeight, {
    transparent: true
  });
  var stage = new PIXI.Container();
  var slidesContainer = new PIXI.Container();
  var displacementSprite = new PIXI.Sprite.fromImage(options.displacementImage);
  var displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);



  //  TEXTS
  /// ---------------------------    
  var style = new PIXI.TextStyle({
    fill: options.textColor,
    wordWrap: true,
    wordWrapWidth: 400,
    letterSpacing: 20,
    fontSize: 14
  });



  //  SLIDES ARRAY INDEX
  /// ---------------------------    
  this.currentIndex = 0;



  /// ---------------------------
  //  INITIALISE PIXI
  /// ---------------------------      
  this.initPixi = function () {

    // Add canvas to the HTML
    document.querySelector('.hero_bg_slider').appendChild(renderer.view);


    // Add child container to the main container 
    stage.addChild(slidesContainer);


    // Enable Interactions
    stage.interactive = true;


    // Fit renderer to the screen
    if (options.fullScreen === true) {
      renderer.view.style.objectFit = 'cover';
      renderer.view.style.width = '100%';
      renderer.view.style.height = '100%';
      renderer.view.style.top = '0';
      renderer.view.style.left = '0';
      renderer.view.style.webkitTransform = ' scale(1.2)';
      renderer.view.style.transform = 'scale(1.2)';
    } else {
      renderer.view.style.maxWidth = '100%';
      renderer.view.style.top = '50%';
      renderer.view.style.left = '50%';
      renderer.view.style.webkitTransform = 'translate( -50%, -50% )';
      renderer.view.style.transform = 'translate( -50%, -50% )';
    }


    displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;

    stage.filters = [displacementFilter];

    if (options.autoPlay === false) {
      displacementFilter.scale.x = 0;
      displacementFilter.scale.y = 0;
    }

    if (options.wacky === true) {

      displacementSprite.anchor.set(0.5);
      displacementSprite.x = renderer.width / 2;
      displacementSprite.y = renderer.height / 2;
    }

    displacementSprite.scale.x = 2;
    displacementSprite.scale.y = 2;

    displacementFilter.autoFit = options.displaceAutoFit;

    stage.addChild(displacementSprite);

  };



  /// ---------------------------
  //  LOAD SLIDES TO CANVAS
  /// ---------------------------          
  this.loadPixiSprites = function (sprites) {


    var rSprites = options.sprites;
    var rTexts = options.texts;

    for (var i = 0; i < rSprites.length; i++) {

      var texture = new PIXI.Texture.fromImage(sprites[i]);
      var image = new PIXI.Sprite(texture);

      if (rTexts) {
        var richText = new PIXI.Text(rTexts[i], style);
        image.addChild(richText);

        richText.anchor.set(0.5);
        richText.x = image.width / 2;
        richText.y = image.height / 2;
      }


      if (options.centerSprites === true) {
        image.anchor.set(0.5);
        image.x = renderer.width / 2;
        image.y = renderer.height / 2;
      }

      if (i !== 0) {
        TweenMax.set(image, {
          alpha: 0
        });
      }

      slidesContainer.addChild(image);

    }

  };



  /// ---------------------------
  //  DEFAULT RENDER/ANIMATION
  /// ---------------------------        
  if (options.autoPlay === true) {

    var ticker = new PIXI.ticker.Ticker();

    ticker.autoStart = options.autoPlay;

    ticker.add(function (delta) {

      displacementSprite.x += options.autoPlaySpeed[0] * delta;
      displacementSprite.y += options.autoPlaySpeed[1];

      displacementSprite.x += 2.14 * delta;
      displacementSprite.y += 22.24 * delta;
      displacementSprite.rotation.x += 20.3;

      renderer.render(stage);

    });

  } else {

    var render = new PIXI.ticker.Ticker();

    render.autoStart = true;

    render.add(function (delta) {
      renderer.render(stage);
    });

  }


  /// ---------------------------
  //  TRANSITION BETWEEN SLIDES
  /// ---------------------------    

  var transitionAnimation = new PIXI.ticker.Ticker();
  transitionAnimation.autoStart = false;

  transitionAnimation.add(function (delta) {
    displacementSprite.x += 2.14 * delta;
    displacementSprite.y += 22.24 * delta;
    displacementSprite.rotation.x += 20.3;
  });


  var isPlaying = false;
  var slideImages = slidesContainer.children;
  this.moveSlider = function (newIndex) {

    isPlaying = true;
    transitionAnimation.start();

    var baseTimeline = new TimelineMax({
      onComplete: function () {
        that.currentIndex = newIndex;
        isPlaying = false;
        transitionAnimation.stop();
        if (options.wacky === true) {
          displacementSprite.scale.set(1);
        }
      },
      onUpdate: function () {

        if (options.wacky === true) {
          displacementSprite.rotation += baseTimeline.progress() * 0.02;
          displacementSprite.scale.set(baseTimeline.progress() * 3);
        }

      }
    });

    baseTimeline.clear();

    if (baseTimeline.isActive()) {
      return;
    }

    baseTimeline
      .to(displacementFilter.scale, 1, {
        y: "+=" + 1280 + "",
        ease: Power3.easeOut
      })
      .to(slideImages[that.currentIndex], 0.5, {
        alpha: 0,
        ease: Power3.easeOut
      }, 0.4)
      .to(slideImages[newIndex], 0.5, {
        alpha: 1,
        ease: Power3.easeInOut
      }, 0.7)
      .to(displacementFilter.scale, 1, {
        y: 20,
        ease: Power3.easeOut
      }, 1);

  };

  /// ---------------------------
  //  CLICK HANDLERS
  /// ---------------------------         
  var nav = options.navElement;

  for (var i = 0; i < nav.length; i++) {

    var navItem = nav[i];

    navItem.onclick = function (event) {

      // Make sure the previous transition has ended
      if (isPlaying) {
        return false;
      }

      if (this.getAttribute('data-nav') === 'next') {

        if (that.currentIndex >= 0 && that.currentIndex < slideImages.length - 1) {
          that.moveSlider(that.currentIndex + 1);
        } else {
          that.moveSlider(0);
        }


      } else {

        if (that.currentIndex > 0 && that.currentIndex < slideImages.length) {
          that.moveSlider(that.currentIndex - 1);
        } else {
          that.moveSlider(spriteImages.length - 1);
        }


      }

      return false;

    }

  }

  /// ---------------------------
  //  INIT FUNCTIONS
  /// ---------------------------     
  this.init = function () {
    that.initPixi();
    that.loadPixiSprites(options.pixiSprites);
  };

  /// ---------------------------
  //  INTERACTIONS
  /// ---------------------------
  function rotateSpite() {
    displacementSprite.rotation += 0.001;
    rafID = requestAnimationFrame(rotateSpite);
  }

  if (options.interactive === true) {

    var rafID, mouseX, mouseY;

    // Enable interactions on our slider
    slidesContainer.interactive = true;
    slidesContainer.buttonMode = true;

    // HOVER
    if (options.interactionEvent === 'hover' || options.interactionEvent === 'both') {

      slidesContainer.pointerover = function (mouseData) {
        mouseX = mouseData.data.global.x;
        mouseY = mouseData.data.global.y;
        TweenMax.to(displacementFilter.scale, 1, {
          x: "+=" + Math.sin(mouseX) * 100 + "",
          y: "+=" + Math.cos(mouseY) * 100 + ""
        });
        rotateSpite();
      };

      slidesContainer.pointerout = function (mouseData) {
        TweenMax.to(displacementFilter.scale, 1, {
          x: 0,
          y: 0
        });
        cancelAnimationFrame(rafID);
      };

    }

    // CLICK
    if (options.interactionEvent === 'click' || options.interactionEvent === 'both') {

      slidesContainer.pointerup = function (mouseData) {
        if (options.dispatchPointerOver === true) {
          TweenMax.to(displacementFilter.scale, 1, {
            x: 0,
            y: 0,
            onComplete: function () {
              TweenMax.to(displacementFilter.scale, 1, {
                x: 20,
                y: 20
              });
            }
          });
        } else {
          TweenMax.to(displacementFilter.scale, 1, {
            x: 0,
            y: 0
          });
          cancelAnimationFrame(rafID);
        }

      };

      slidesContainer.pointerdown = function (mouseData) {
        mouseX = mouseData.data.global.x;
        mouseY = mouseData.data.global.y;
        TweenMax.to(displacementFilter.scale, 1, {
          x: "+=" + Math.sin(mouseX) * 1200 + "",
          y: "+=" + Math.cos(mouseY) * 200 + ""
        });
      };

      slidesContainer.pointerout = function (mouseData) {
        if (options.dispatchPointerOver === true) {
          TweenMax.to(displacementFilter.scale, 1, {
            x: 0,
            y: 0,
            onComplete: function () {
              TweenMax.to(displacementFilter.scale, 1, {
                x: 20,
                y: 20
              });
            }
          });
        } else {
          TweenMax.to(displacementFilter.scale, 1, {
            x: 0,
            y: 0
          });
          cancelAnimationFrame(rafID);
        }

      };

    }

  }
  /// ---------------------------
  //  CENTER DISPLACEMENT
  /// ---------------------------
  if (options.displacementCenter === true) {
    displacementSprite.anchor.set(0.5);
    displacementSprite.x = renderer.view.width / 2;
    displacementSprite.y = renderer.view.height / 2;
  }
  /// ---------------------------
  //  START 
  /// ---------------------------           
  this.init();

  
  /****************************************************************************/ 
  /**********************************PAGINATION & HERO SLIDER**********************************/
  /****************************************************************************/

  // Clear all images
  const reset = () => {
    arrowNextHero.disabled = true
    setTimeout(() => arrowNextHero.disabled = false, 2000)
    arrowPrevHero.disabled = true
    setTimeout(() => arrowPrevHero.disabled = false, 2000)
    paginationHero.forEach((paginationItem) => {
      paginationItem.classList.add('disabled')
      setTimeout(() => paginationItem.classList.remove('disabled'), 2000)
    })

    for (let i = 0; i < sliderImagesHero.length; i++) {
      sliderImagesHero[i].style.display = "none";
    }

  }
  const paginationInit = (current) => {
    for (let i = 0; i < paginationHero.length; i++) {
      paginationHero[i].classList.remove('pagination_item_active')
    }

    paginationHero[current].classList.add('pagination_item_active')
  }

  paginationHero.forEach((paginationItem, idx) => {
    paginationItem.addEventListener('click', () => {
      reset()
      that.moveSlider(idx);
      sliderImagesHero[idx].style.display = "block"
      paginationInit(idx)
      current = idx

    
      that.currentIndex = idx

    })
  })

  // Init slider
  const startSlide = () => {
    reset();
    paginationInit(current)
    sliderImagesHero[0].style.display = "block";
  }

  // Show prev
  const slideLeft = () => {
    reset();
    sliderImagesHero[current - 1].style.display = "block";
    current--;
    paginationInit(current)

  }

  // Show next
  const slideRight = () => {
    reset();
    sliderImagesHero[current + 1].style.display = "block";
    current++;
    paginationInit(current)

  }

  // Left arrow click
  arrowPrevHero.addEventListener("click", function () {

    if (current === 0) {
      current = sliderImagesHero.length;
    }
    slideLeft();
  });

  // Right arrow click
  arrowNextHero.addEventListener("click", function () {

    if (current === sliderImagesHero.length - 1) {
      current = -1;
    }
    slideRight();
  });

  startSlide();
};


  
  
  /****************************************************************************/ 
  /**********************************SECTION 2 SLIDER**********************************/
  /****************************************************************************/
 
  class Slider{
    constructor(slider,widthSlide,slidesToShow,arrowPrev,arrowNext){
      this.slider= slider,
      this.slides= this.slider.children,
      this.arrowPrev = arrowPrev,
      this.arrowNext= arrowNext,
      this.lenSlides = this.slides.length,
      this.slidesToShow= slidesToShow,
      this.delta=0,
      this.slideCounter=0,
      this.offset= 0,
      this.widthSlide=widthSlide,
      this.activeSlide=0;
    }
    
      slideAnimate (arrow){
      this.offset=this.offset+(-this.widthSlide*this.delta); 
      this.slideCounter+=this.delta;
      this.slider.style.transform= `translate3d(${this.offset}%,0px,0px)`
      if(this.slideCounter<=0 || this.slideCounter>=this.lenSlides-this.slidesToShow){
        arrow.classList.add('disabled')
      }  if(this.slideCounter>0) {
        this.arrowPrev.classList.remove('disabled')

      } if(this.slideCounter<this.lenSlides-this.slidesToShow) {

        this.arrowNext.classList.remove('disabled')
      }
    }
    startSlide (){
      this.arrowPrev.addEventListener('click',(e)=>{
        this.delta = -1;
        this.slideAnimate(this.arrowPrev)  
      })
      this.arrowNext.addEventListener('click',(e)=>{
          this.delta = 1;
          this.slideAnimate(this.arrowNext)  
      })
    }
    
  }

  /****************************************************************************/ 
  /******************************SECTION 3 AND 4 SLIDER************************/
  /****************************************************************************/
  
  class SliderDisplay{
    constructor(sliderImages,arrowPrev,arrowNext){
      this.arrowNext=arrowNext,
      this.arrowPrev=arrowPrev,
      this.sliderImages=sliderImages,
      this.current=0
    }
      reset (){
       // this.arrowNext.disabled = true
        //setTimeout(() => this.arrowNext.disabled = false, 2000)
        //this.arrowPrev.disabled = true
       // setTimeout(() => this.arrowPrev.disabled = false, 2000)    
    
        for (let i = 0; i < this.sliderImages.length; i++) {
          this.sliderImages[i].style.display = "none";
          this.sliderImages[i].classList.remove('active_slide');
        }  
      }
     
      // Show prev
      slideLeft () {
        this.reset();
        this.sliderImages[this.current - 1].style.display = "block";
        this.sliderImages[this.current - 1].classList.add('active_slide');
        this.current--;
      }
    
      // Show next
      slideRight (){
        this.reset();
        this.sliderImages[this.current + 1].style.display = "block";
        this.sliderImages[this.current + 1].classList.add('active_slide');
        this.current++;
      }

      setSlide (idxSlide){
        this.reset()
        this.sliderImages[+idxSlide].style.display = "block";
        this.sliderImages[+idxSlide].classList.add('active_slide');
        this.current=+idxSlide;

      }

      startSlide () {
        this.reset();

        this.sliderImages[0].style.display = "block";
        if (this.arrowPrev.length === undefined){
            this.arrowPrev.addEventListener("click", ()=> {
            
            if (this.current === 0) {
              this.current = this.sliderImages.length;
            }
            this.slideLeft();

          });
            this.arrowNext.addEventListener("click", ()=> {

            if (this.current === this.sliderImages.length - 1) {
              this.current = -1;
            }
            this.slideRight();

          });
        } else {
          this.arrowPrev.forEach((arrow)=>{
            arrow.addEventListener("click", ()=> {
            
              if (this.current === 0) {
                this.current = this.sliderImages.length;
              }
              this.slideLeft();

            });
          })
        
          // Right arrow click
          this.arrowNext.forEach((arrow)=>{
            arrow.addEventListener("click", ()=> {

              if (this.current === this.sliderImages.length - 1) {
                this.current = -1;
              }
              this.slideRight();

            });
          })
        }
      }
  }


  /**************************************************************************/ 
  /*****************************INIT SLIDERS*********************************/
  /**************************************************************************/

  /*********************INIT VARS FOR 2 SLIDER***********************/

  const sliderSurf = document.querySelector('.surf_slider'),
  arrowPrevSurf = document.querySelector('.surf_btn_prev'),
  arrowNextSurf = document.querySelector('.surf_btn_next'),

  /*********************INIT VARS FOR 3 SLIDER***********************/

  sliderImagesTravel = document.querySelectorAll('.travel_slide'),
  arrowNextTravel= document.querySelectorAll('.travel_btn_prev'),
  arrowPrevTravel = document.querySelectorAll('.travel_btn_next'),

  /*********************INIT SVARS FOR4 SLIDER***********************/

  sliderImagesStay = document.querySelectorAll('.stay_slide'),
  arrowNextStay= document.querySelectorAll('.stay_btn_prev'),
  arrowPrevStay = document.querySelectorAll('.stay_btn_next')

  /*********************INIT SVARS FOR 5 SLIDER***********************/

  sliderImagesShop = document.querySelectorAll('.shop_slide'),
  arrowNextShop= document.querySelectorAll('.shop_btn_prev'),
  arrowPrevShop= document.querySelectorAll('.shop_btn_next')
  /*********************CUSTOMIZE SECTION 2 SLIDER*******************/

  Array.from(sliderSurf.children).forEach((slideSurf,idx)=>{
    slideSurf.style.transform = `translate3d(-${idx*10}%,0px,0px)`
    slideSurf.addEventListener('click',(e)=>{
      Array.from(sliderSurf.children).forEach((slide)=>{
        slide.classList.remove('active_surf_slide')
      }) 
      e.currentTarget.classList.add('active_surf_slide')
      mapDotsInfo.forEach((mapDotsInfo)=>{
        mapDotsInfo.style.display="none"
      })
      mapDots.forEach(()=>{     
        mapDotsInfo[idx].style.display="block"
      })
    })
    slideSurf.querySelector('.surf_slide_link').setAttribute("data-slide", idx)
    return slideSurf.setAttribute("data-slide", idx);
  })

  /*********************INIT SCTION 2 SLIDER***********************/

  let surfSlider;
  if(screen.width>768){
    surfSlider=new Slider(sliderSurf,25,4,arrowPrevSurf,arrowNextSurf);
    surfSlider.startSlide()
  } else if(screen.width<=768 && screen.width>440){
    surfSlider=new Slider(sliderSurf,50,2,arrowPrevSurf,arrowNextSurf);
    surfSlider.startSlide()
  } else if(screen.width<=440){
    surfSlider=new Slider(sliderSurf,76,1,arrowPrevSurf,arrowNextSurf);
    surfSlider.startSlide()
  }

 
 
  /*********************INIT SCTION 3 SLIDER***********************/

  const travelSlider = new SliderDisplay(sliderImagesTravel,arrowNextTravel,arrowPrevTravel)
  travelSlider.startSlide();

  /*********************INIT SCTION 4 SLIDER***********************/

  const staySlider= new SliderDisplay(sliderImagesStay,arrowNextStay,arrowPrevStay)
  staySlider.startSlide();

   /*********************INIT SCTION 5 SLIDER***********************/

   const shopSlider= new SliderDisplay(sliderImagesShop,arrowNextShop,arrowPrevShop)
   shopSlider.startSlide();

  /***REDIRECT ON CLICK FROM SECTION 2 SLIDER TO SECTION 3 SLIDER***/

  const linkSlideSurf= document.querySelectorAll('.surf_slide_link')
  linkSlideSurf.forEach((link)=>{
    link.addEventListener("click", (e)=> {
      travelSlider.setSlide(e.currentTarget.dataset.slide)
      staySlider.setSlide(e.currentTarget.dataset.slide)
    });
  })

/****************************************************************************/ 
/**********************************MAP DOTS**********************************/
/****************************************************************************/

const mapDots = document.querySelectorAll('.surf_map_dot'),
mapDotsInfo = document.querySelectorAll('.surf_map_dot_info')

  mapDots.forEach((dot,dot_idx)=>{
    dot.addEventListener('click',()=>{
      mapDotsInfo.forEach((mapDotsInfo)=>{
        mapDotsInfo.style.display="none"
      })
      mapDotsInfo[dot_idx].style.display="block"
      Array.from(sliderSurf.children).forEach((slideSurf)=>{
        slideSurf.classList.remove('active_surf_slide')
        })
      Array.from(sliderSurf.children)[dot_idx].classList.add('active_surf_slide')
        surfSlider.setSlide(dot_idx)
    })
    return dot.setAttribute("data-dot", dot_idx)
  })
/**************************************************************************/ 
/**********************ADD AND SUBSTRACT,CALCULATE*************************/
/**************************************************************************/

 const amountOfNights=document.querySelectorAll('.amount_of_nights'),
 addAmountOfNights=document.querySelectorAll('.add_amount_of_nights'),
 subtractAmountOfNights=document.querySelectorAll('.subtract_amount_of_nights'),
 nights=document.querySelectorAll('.nights'),
 amountOfGuests=document.querySelectorAll('.amount_of_guests'),
 addAmountOfGuests=document.querySelectorAll('.add_amount_of_guests'),
 subtractAmountOfGuests=document.querySelectorAll('.subtract_amount_of_guests'),
 guests=document.querySelectorAll('.guests')

const add_subtract =(amount,addBtn,substractBtn,value)=>{

  addBtn.forEach((btn,idx)=>{
    btn.addEventListener("click", ()=> {

      if(value[idx].innerHTML==" night"){

        value[idx].innerHTML=" nights"
      } else if(value[idx].innerHTML==" guest"){
        value[idx].innerHTML=" guests"
      } 

      
      amount[idx].innerHTML=++(amount[idx].innerHTML)

    });
  })
  substractBtn.forEach((btn,idx)=>{
    btn.addEventListener("click", ()=> {
     

        if(+amount[idx].innerHTML!==1){
          amount[idx].innerHTML=--(amount[idx].innerHTML)
          

          if(+amount[idx].innerHTML===1 && value[idx].innerHTML==" nights"){

            value[idx].innerHTML=" night"
          } else if(+amount[idx].innerHTML===1 && value[idx].innerHTML==" guests"){
            value[idx].innerHTML=" guest"
          }
        }  

    });
  })
}
add_subtract(amountOfNights,addAmountOfNights,subtractAmountOfNights,nights)
add_subtract(amountOfGuests,addAmountOfGuests,subtractAmountOfGuests,guests)

const travelLink=document.querySelectorAll('.travel_link'),
stayLink=document.querySelectorAll('.stay_link'),
shopLink=document.querySelectorAll('.shop_link'),
popupText=document.querySelector('.popup_description'),
popupTitle=document.querySelector('.popup_title'),
popupCost=document.querySelector('.popup_cost'),
popup=document.querySelector('.popup'),

createPopup = (text,cost,popupText,popupCost) =>{
  popupText.innerHTML=text;
  popupCost.innerHTML=cost;
  popup.style.display="flex";
  document.body.style.overflowY="hidden";
}

travelLink.forEach(link=>{
  link.addEventListener('click',()=>{
    const cost=link.parentNode.querySelector('.travel_price').innerHTML.replace(/[^0-9]/g, ''),
    titleTravel = link.parentNode.querySelector('.airline_title').innerHTML,
    textTravel = `<p>airline</p>${titleTravel}`,
    costTravel = `<p>cost</p><p>${cost}$</p>`
    createPopup(textTravel,costTravel,popupTitle,popupCost)

  })
})


stayLink.forEach(link=>{
  link.addEventListener('click',()=>{
    const costNight= link.parentNode.querySelector('.stay_price').innerHTML.replace(/[^0-9]/g, ''),
    nights = link.parentNode.querySelector('.amount_of_nights').innerHTML.replace(/[^0-9]/g, ''),
    guests = link.parentNode.querySelector('.amount_of_guests').innerHTML.replace(/[^0-9]/g, ''),
    titleStay = link.parentNode.querySelector('.resort_title').innerHTML
    textStay=`
      <p>resort</p><p>${titleStay}<span>nights:${nights}</span><span>guests:${guests}</span></p>
     
    `,
    cost=costNight*nights
    costStay=`<p>cost</p><p>${cost}$</p>`
    createPopup(textStay,costStay,popupTitle,popupCost)

  })
})
shopLink.forEach(link=>{
  link.addEventListener('click',()=>{
    const cost=link.parentNode.querySelector('.shop_board_price p').innerHTML.replace(/[^0-9]/g, ''),
    titleShop = link.parentNode.querySelector('.shop_board_title p').innerHTML,
    textShop = `<p>board</p><p>${titleShop}</p>`,
    costShop = `<p>cost</p><p>${cost}$</p>`
    createPopup(textShop,costShop,popupTitle,popupCost)

  })
})
popup.addEventListener('click',(e)=>{
  e.target.classList.contains('popup')?(popup.style.display="none",document.body.style.overflowY="scroll"): console.log('fake') ;
})

/****************************************************************************/ 
/**************************BOARD INFO SECTION 5*****************************/
/**************************************************************************/

const boardDetails = document.querySelectorAll('.board_details')

boardDetails.forEach(el=>{
  el.addEventListener('click',(e)=>{
    if(e.currentTarget.classList.contains('board_details_active')){
      return
    } else {
      boardDetails.forEach(el=>{el.classList.remove('board_details_active')})
      e.currentTarget.classList.add('board_details_active')
    }
  })
})

const dateDay = document.querySelector('.date_day'),
dateMonth = document.querySelector('.date_month'),
dateYear = document.querySelector('.date_year');

const date = new Date();

dateDay.innerHTML= ('0' + date.getDate()).slice(-2);
dateMonth.innerHTML= ('0'+(date.getMonth()+1)).slice(-2);
dateYear.innerHTML= date.getFullYear();

const btn_menu_open=document.querySelector('.btn--menu-open'),
btn_menu_close=document.querySelector('.btn--menu-close'),
menu_media = document.querySelector('.menu-media_hide')

btn_menu_open.addEventListener('click',()=>{
  menu_media.classList.toggle('menu-media_hide');
  btn_menu_open.classList.toggle('btn--menu-close')
})

const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
  animationTime = 300,
  framesCount = 20,
  smoothScrollTo = (()=>{
    let timer, start, factor;

    return  (target, duration) => {
      const offset = window.pageYOffset,
          delta  = target - window.pageYOffset; // Y-offset difference
      duration = duration || 1000;              // default 1 sec animation
      start = Date.now();                       // get start time
      factor = 0;

      if( timer ) {
        clearInterval(timer); // stop any running animation
      }

      const  step = () =>{
        factor = (Date.now() - start) / duration; // get interpolation factor
        if( factor >= 1 ) {
          clearInterval(timer); // stop animation
          factor = 1;           // clip to max 1.0
        } 
        const y = factor * delta + offset;
        window.scrollBy(0, y - window.pageYOffset);
      }

      timer = setInterval(step, 10);
      return timer; // return the interval timer, so you can clear it elsewhere
    };
  })();

anchors.forEach((item)=>{
  // каждому якорю присваиваем обработчик события
  
  item.addEventListener('click', function(e) {
    // убираем стандартное поведение
    e.preventDefault();
    anchors.forEach((item)=>item.classList.remove('link_active'))
    item.classList.add('link_active')
    
    let target= document.querySelector(item.getAttribute('href')).offsetTop
    // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
 

   
    
   
   
    smoothScrollTo(target, 500)
  });
});