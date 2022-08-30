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

    isScrollValid(dir, type){
        if(this.isSliding === true){
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
    slide(targetSect){
        const prevSlideVal = this.currSlideVal
        this.isSliding = true
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
        // Play callback
        console.log(prevSlideVal)
        console.log(this.currSlideVal)
        this.playCallback('start')
        this.wrapper.style.transitionDuration = this.reset ? '1ms' : this.transDur        
        this.wrapper.style.transform = 'translate('+(
            this.mobileMode ? `0%, ${this.currSlideVal}%` : `${this.currSlideVal}%, 0%` 
        )+')';
        if(this.currSlideVal === prevSlideVal){
            this.isSliding = false
            this.reset = false
        }
    }    
    playCallback(type){
        const callback = this.callbacks[this.currSection.toString()]
        if(callback && this.reset === false){
            if(type == 'start' && callback.start){
                callback.start(
                    this.sections[this.prevSection], this.sections[this.currSection]
                )
            }
            else if(type == 'end' && callback.end){
                callback.end(
                    this.sections[this.prevSection], this.sections[this.currSection]
                )
            }
        }
    }
    init(){
        const _instance = this

        _instance.wrapper.ontransitionend = () => {
            _instance.playCallback('end')
            _instance.isSliding = false
            _instance.reset = false
            console.log('now sliding is false')
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
                _instance.reset = true
                _instance.slide(_instance.currSection)
            }
            // Browser resized to desktop viewport
            else if(_instance.mobileMode === true && window.innerWidth > _instance.mobileVpWidth){
                _instance.mobileMode = false
                _instance.reset = true
                _instance.slide(_instance.currSection)
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
    transDur: '800ms'
    // callbacks: {
    //     '0': {
    //         'start': (prev, curr) => {
    //             console.log('start')
    //             console.log(prev)
    //             console.log(curr)
    //         },
    //         'end': (prev, curr) => {
    //             console.log('end')
    //             console.log(prev)
    //             console.log(curr)                    
    //         }
    //     }
    // }        
}).init()