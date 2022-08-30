// const vpWidth = window.innerWidth // Viewport width

// // Initiate Skroll.js
// S = skrollr.init({
//         constants: {
//                 // List of all horaizontal top scroll position triggering 
//                 // the animations inside landing page        
//                 im_imagination: (vpWidth > 1100 ? '50p' : '90p'),
//                 create_future: (vpWidth > 1100 ? '150p' : '150p'),
//                 im_playground: (vpWidth > 1100 ? '200p' : '270p'),
//                 play_roles: (vpWidth > 1100 ? '310p' : '380p'),
//                 im_home: (vpWidth > 1100 ? '400p' : '460p'),
//                 socialize: (vpWidth > 1100 ? '500p' : '560p'),  
//                 im_adventure: (vpWidth > 1100 ? '600p' : '670p'),
//                 explore: (vpWidth > 1100 ? '680p' : '780p'),
//                 im_wallet: (vpWidth > 1100 ? '760p' : '870p'),       
// 	}    
// })

class FunnyScroll{
    constructor(settings = {}){
        this.wrapper = document.getElementById('wrapper')    
        this.sections = document.querySelectorAll('.section')
        this.totalSections = this.sections.length
        // The wrapper's sliding duration
        this.transDur = settings.transDur ? settings.transDur : '500ms'
        // The maximal viewport width for mobile mode 
        this.mobileVpWidth = settings.mobileVpWidth ? settings.mobileVpWidth : 1100
        // Whether or not the sliding should be done in mobile mode or not
        this.mobileMode = window.innerWidth <= this.mobileVpWidth ? true : false
        // Wheter or not the sliding is reset, if reset the duration of the slide is 1ms.
        // All callbacks will not be played
        this.reset = false
        this.callbacks = settings.callbacks ? settings.callbacks : {}
        // The current section
        this.currSection = 0
        // The previous section
        this.prevSection = 0        
        // The current slide value
        this.currSlideVal = 0
        // Whether or not the wrapper is sliding
        this.isSliding = false
        this.touchStart = 0
    }
    /**
     * Check whether the scroll is valid
     * @param {integer} dir - The direction of slide, can be positive or negative 
     * @param {string} type - the type of slide's trigger, mouse wheel or touch move
     * @returns 
     */
    isScrollValid(dir, type){
        // Make sure the wrapper is not currently sliding
        if(this.isSliding){
            return false
        }
        if(type === 'wheel'){
            if(
                ( dir > 0 && (this.currSection + 1) < this.totalSections ) ||
                ( dir < 0 && (this.currSection - 1) >= 0 )
            ){
                return true
            }
        }
        else{
            if(Math.abs(dir) > 50){
                if(
                    ( dir > 0 && (this.currSection + 1) < this.totalSections ) ||
                    ( dir < 0 && (this.currSection - 1) >= 0 )                    
                ){
                    return true
                }
            }            
        }
        return false      
    }    
    slide(targetSect, reset = false){
        this.isSliding = true
        this.reset = reset
        // Slide to the next section
        if(targetSect > this.currSection){
            this.currSlideVal -= 100 * Math.abs(targetSect - this.currSection)
        }
        // Slide to the prev section
        else{
            this.currSlideVal += 100 * Math.abs(targetSect - this.currSection)
        }
        this.prevSection = this.currSection
        this.currSection = targetSect
        // Play callback when the previous section is leaving
        this.playCallbackStart(this.prevSection, 'leave')
        // Play callback when the current section is entering
        this.playCallbackStart(this.currSection, 'enter')
        // Slide the wrapper to the current section
        this.wrapper.style.transitionDuration = (reset ? '0ms' : this.transDur)        
        this.wrapper.style.transform = 'translate('+(
            this.mobileMode ? `0%, ${this.currSlideVal}%` : `${this.currSlideVal}%, 0%` 
        )+')';
        if(reset){
            this.isSliding = false
            this.reset = false
        }
    }    
    playCallbackStart(sectionId, type){
        const callback = this.callbacks[sectionId.toString()]
        if(this.reset === false && callback){
            if(type === 'enter' && callback.enterStart){
                callback.enterStart(this.sections[sectionId])
            }
            else if(type === 'leave' && callback.leaveStart){
                callback.leaveStart(this.sections[sectionId])  
            }
        }
    }
    playCallbackEnd(sectionId, type){
        const callback = this.callbacks[sectionId.toString()]
        if(this.reset === false && callback){
            if(type === 'enter' && callback.enterEnd){
                callback.enterEnd(this.sections[sectionId])
            }
            else if(type === 'leave' && callback.leaveEnd){
                callback.leaveEnd(this.sections[sectionId])  
            }
        }
    }    
    init(){
        const _instance = this

        _instance.wrapper.ontransitionend = (e) => {
            if(e.target.id === 'wrapper'){
                // Play callback when the previous section is leaving
                this.playCallbackEnd(this.prevSection, 'leave')
                // Play callback when the current section is entering
                this.playCallbackEnd(this.currSection, 'enter')
                _instance.isSliding = false
            }
        }
        window.onwheel = (e) => {
            if(_instance.isScrollValid(e.deltaY, e.type)){
                const targetSect = (e.deltaY > 0 ? _instance.currSection + 1 : _instance.currSection - 1)
                _instance.slide(targetSect)
            }      
        }
        window.onresize = () => {
            // Browser resized to mobile viewport
            if(_instance.mobileMode === false && window.innerWidth <= _instance.mobileVpWidth){
                _instance.mobileMode = true
                _instance.slide(_instance.currSection, true)
            }
            // Browser resized to desktop viewport
            else if(_instance.mobileMode === true && window.innerWidth > _instance.mobileVpWidth){
                _instance.mobileMode = false
                _instance.slide(_instance.currSection, true)
            }
        }
        document.ontouchstart = (e) => {
            _instance.touchStart = e.touches[0].clientY
        }
        document.ontouchend = (e) => {
            const dir = _instance.touchStart - e.changedTouches[0].clientY
            if(_instance.isScrollValid(dir, e.type)){
                const targetSect = (dir > 0 ? _instance.currSection + 1 : _instance.currSection - 1)
                _instance.slide(targetSect)
            }             
        }
    }
}

new FunnyScroll({
    transDur: '1000ms',
    callbacks: {
        '1': {
            'enterStart': (section) => {
                section.classList.add('enter-start')                   
            },            
            'enterEnd': (section) => {
                section.classList.add('enter-end')                   
            },
            'leaveStart': (section) => {
                section.firstChild.style = 'transform: scale(0.9); opacity: 0';                  
            },    
            'leaveEnd': (section) => {
                section.firstChild.style = ''
                section.classList.remove('enter-start')
                section.classList.remove('enter-end')
            },                             
        },
        '2': {
            'enterStart': (section) => {
                section.classList.add('enter-start')                   
            },            
            'enterEnd': (section) => {
                section.classList.add('enter-end')                   
            },  
            'leaveEnd': (section) => {
                section.classList.remove('enter-start')
                section.classList.remove('enter-end')
            },                             
        }        
    }        
}).init()