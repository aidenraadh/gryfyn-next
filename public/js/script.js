const vpWidth = window.innerWidth // Viewport width

// Initiate Skroll.js
S = skrollr.init({
	constants: {
        // List of all horaizontal top scroll position triggering 
        // the animations inside landing page        
        im_imagination: (vpWidth > 1100 ? '50p' : '90p'),
        create_future: (vpWidth > 1100 ? '150p' : '150p'),
        im_playground: (vpWidth > 1100 ? '250p' : '270p'),
        play_roles: (vpWidth > 1100 ? '320p' : '380p'),
        im_home: (vpWidth > 1100 ? '400p' : '460p'),
        socialize: (vpWidth > 1100 ? '500p' : '560p'),  
        im_adventure: (vpWidth > 1100 ? '600p' : '670p'),
        explore: (vpWidth > 1100 ? '680p' : '780p'),
        im_wallet: (vpWidth > 1100 ? '760p' : '870p'),       
	}    
})