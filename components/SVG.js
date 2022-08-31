export default function SVG(props){
    switch(props.name){
        case 'sun_empty': return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" className={props.classes} {...props.attr}>
                <path fill={props.fill_1 ? props.fill_1 : '#ec622c'} d="M945.58,504.81c-73.59,24.53-139.14,57.55-196.6,98.83,11.44,69.81,34.45,139.52,69.13,208.89l6.09,12.18-12.18-6.09c-69.38-34.69-139.08-57.69-208.89-69.13-41.27,57.45-74.3,123.01-98.83,196.59l-4.31,12.92-4.31-12.92c-24.53-73.58-57.55-139.14-98.82-196.59-69.81,11.44-139.52,34.45-208.9,69.13l-12.18,6.09,6.09-12.18c34.69-69.38,57.69-139.08,69.14-208.89-57.46-41.27-123.01-74.3-196.6-98.83l-12.92-4.31,12.92-4.31c73.58-24.53,139.14-57.55,196.6-98.83-11.44-69.81-34.45-139.52-69.14-208.89l-6.09-12.18,12.18,6.09c69.38,34.69,139.08,57.69,208.89,69.13,41.27-57.46,74.3-123.01,98.83-196.59l4.31-12.92,4.31,12.92c24.53,73.58,57.55,139.14,98.82,196.59,69.81-11.44,139.52-34.44,208.9-69.13l12.18-6.09-6.09,12.18c-34.69,69.38-57.69,139.08-69.14,208.89,57.46,41.27,123.01,74.3,196.6,98.83l12.92,4.31-12.92,4.31Zm-569.49,119.27c69.54,68.43,181.4,67.53,249.83-2.01,68.43-69.55,67.53-181.4-2.01-249.83-69.55-68.43-181.4-67.53-249.83,2.01-68.43,69.55-67.53,181.4,2.01,249.83Z"/>
            </svg>            
        );
        case 'star': return (
            <svg className={props.classes} {...props.attr} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 464.27 475.13">
                <path fill={props.fill_1 ? props.fill_1 : '#439948'} d="M235.33,47.97l-1.75-5.25-1.75,5.25c-29.76,89.27-90.11,149.62-179.37,179.37l-5.25,1.75,5.25,1.75c89.27,29.75,149.62,90.11,179.37,179.37l1.75,5.25,1.75-5.25c29.76-89.27,90.11-149.62,179.37-179.37l5.25-1.75-5.25-1.75c-89.27-29.75-149.62-90.11-179.37-179.37Z"/>
            </svg>              
        );
        case 'eye': return (
            <svg className={props.classes} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513.34 525.36" {...props.attr}>
                <path fill={props.fill_1 ? props.fill_1 : '#E8DFD4'} d="M29.77,262.92s103.13-116.72,230.34-116.72,230.34,116.72,230.34,116.72c0,0-103.13,116.72-230.34,116.72S29.77,262.92,29.77,262.92Z"/>
                <circle fill={props.fill_2 ? props.fill_2 : '#1996CE'} cx="260.11" cy="262.92" r="83.88" transform="translate(-109.73 260.94) rotate(-45)"/>
            </svg>            
        );
        case 'sun': return (
            <svg className={props.classes} {...props.attr} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 464.27 475.13">
                <path fill={props.fill_1 ? props.fill_1 : '#F36B37'} d="M411.5,231.8l-5.15-1.72c-29.32-9.77-55.44-22.93-78.34-39.38,4.56-27.82,13.73-55.59,27.55-83.24l2.43-4.85-4.85,2.43c-27.65,13.82-55.42,22.99-83.24,27.55-16.45-22.89-29.6-49.02-39.38-78.34l-1.72-5.15-1.72,5.15c-9.77,29.32-22.93,55.44-39.38,78.34-27.82-4.56-55.59-13.73-83.24-27.55l-4.85-2.43,2.43,4.85c13.82,27.64,22.99,55.42,27.55,83.24-22.9,16.45-49.02,29.61-78.34,39.38l-5.15,1.72,5.15,1.72c29.32,9.77,55.44,22.93,78.34,39.38-4.56,27.82-13.73,55.59-27.55,83.24l-2.43,4.85,4.85-2.43c27.65-13.82,55.42-22.99,83.24-27.55,16.45,22.89,29.6,49.02,39.38,78.34l1.72,5.15,1.72-5.15c9.77-29.32,22.93-55.44,39.38-78.34,27.82,4.56,55.59,13.73,83.24,27.55l4.85,2.43-2.43-4.85c-13.82-27.64-22.99-55.42-27.55-83.24,22.89-16.45,49.02-29.61,78.34-39.38l5.15-1.72Z"/>
                <circle fill={props.fill_2 ? props.fill_2 : '#FFCD32'} cx="228.8" cy="230.87" r="70.4" transform="translate(-96.23 229.4) rotate(-45)"/>
            </svg>
        );
        case 'fire': return (
            <svg className={props.classes} {...props.attr} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 705.31 640.77">
                <path fill={props.fill_1 ? props.fill_1 : '#E5DFD6'} d="M640.16,364.69c-47.96-15.89-82.38-38.3-105.19-68.49-5.16-37.53,3.4-77.71,26.17-122.82l2.9-5.74-5.73,2.91c-44.92,22.85-85,31.56-122.46,26.57-30.07-22.82-52.4-57.18-68.26-105.01l-2.02-6.1-1.97,6.12c-15.52,47.9-37.58,82.39-67.45,105.42-37.36,5.16-77.48-3.31-122.52-25.87l-5.75-2.88,2.93,5.72c22.94,44.8,31.75,84.79,26.94,122.22-22.8,30.04-57.1,52.36-104.84,68.23l-5.19,1.73s125.03,141.51,279.26,141.51,279.26-141.51,279.26-141.51l-6.08-2.02Z"/>
                <circle fill={props.fill_2 ? props.fill_2 : '#f36b37'} cx="366.98" cy="345.27" r="102.25" transform="translate(-136.66 360.62) rotate(-45)"/>
            </svg>
        );        
        case 'instagram': return (
            <svg className={props.classes} {...props.attr} viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                <g>
                    <path fill={props.fill_1 ? props.fill_1 : '#E5DFD6'} d="M127.999746,23.06353 C162.177385,23.06353 166.225393,23.1936027 179.722476,23.8094161 C192.20235,24.3789926 198.979853,26.4642218 203.490736,28.2166477 C209.464938,30.5386501 213.729395,33.3128586 218.208268,37.7917319 C222.687141,42.2706052 225.46135,46.5350617 227.782844,52.5092638 C229.535778,57.0201472 231.621007,63.7976504 232.190584,76.277016 C232.806397,89.7746075 232.93647,93.8226147 232.93647,128.000254 C232.93647,162.177893 232.806397,166.225901 232.190584,179.722984 C231.621007,192.202858 229.535778,198.980361 227.782844,203.491244 C225.46135,209.465446 222.687141,213.729903 218.208268,218.208776 C213.729395,222.687649 209.464938,225.461858 203.490736,227.783352 C198.979853,229.536286 192.20235,231.621516 179.722476,232.191092 C166.227425,232.806905 162.179418,232.936978 127.999746,232.936978 C93.8200742,232.936978 89.772067,232.806905 76.277016,232.191092 C63.7971424,231.621516 57.0196391,229.536286 52.5092638,227.783352 C46.5345536,225.461858 42.2700971,222.687649 37.7912238,218.208776 C33.3123505,213.729903 30.538142,209.465446 28.2166477,203.491244 C26.4637138,198.980361 24.3784845,192.202858 23.808908,179.723492 C23.1930946,166.225901 23.0630219,162.177893 23.0630219,128.000254 C23.0630219,93.8226147 23.1930946,89.7746075 23.808908,76.2775241 C24.3784845,63.7976504 26.4637138,57.0201472 28.2166477,52.5092638 C30.538142,46.5350617 33.3123505,42.2706052 37.7912238,37.7917319 C42.2700971,33.3128586 46.5345536,30.5386501 52.5092638,28.2166477 C57.0196391,26.4642218 63.7971424,24.3789926 76.2765079,23.8094161 C89.7740994,23.1936027 93.8221066,23.06353 127.999746,23.06353 M127.999746,0 C93.2367791,0 88.8783247,0.147348072 75.2257637,0.770274749 C61.601148,1.39218523 52.2968794,3.55566141 44.1546281,6.72008828 C35.7374966,9.99121548 28.5992446,14.3679613 21.4833489,21.483857 C14.3674532,28.5997527 9.99070739,35.7380046 6.71958019,44.1551362 C3.55515331,52.2973875 1.39167714,61.6016561 0.769766653,75.2262718 C0.146839975,88.8783247 0,93.2372872 0,128.000254 C0,162.763221 0.146839975,167.122183 0.769766653,180.774236 C1.39167714,194.398852 3.55515331,203.703121 6.71958019,211.845372 C9.99070739,220.261995 14.3674532,227.400755 21.4833489,234.516651 C28.5992446,241.632547 35.7374966,246.009293 44.1546281,249.28042 C52.2968794,252.444847 61.601148,254.608323 75.2257637,255.230233 C88.8783247,255.85316 93.2367791,256 127.999746,256 C162.762713,256 167.121675,255.85316 180.773728,255.230233 C194.398344,254.608323 203.702613,252.444847 211.844864,249.28042 C220.261995,246.009293 227.400247,241.632547 234.516143,234.516651 C241.632039,227.400755 246.008785,220.262503 249.279912,211.845372 C252.444339,203.703121 254.607815,194.398852 255.229725,180.774236 C255.852652,167.122183 256,162.763221 256,128.000254 C256,93.2372872 255.852652,88.8783247 255.229725,75.2262718 C254.607815,61.6016561 252.444339,52.2973875 249.279912,44.1551362 C246.008785,35.7380046 241.632039,28.5997527 234.516143,21.483857 C227.400247,14.3679613 220.261995,9.99121548 211.844864,6.72008828 C203.702613,3.55566141 194.398344,1.39218523 180.773728,0.770274749 C167.121675,0.147348072 162.762713,0 127.999746,0 Z M127.999746,62.2703115 C91.698262,62.2703115 62.2698034,91.69877 62.2698034,128.000254 C62.2698034,164.301738 91.698262,193.730197 127.999746,193.730197 C164.30123,193.730197 193.729689,164.301738 193.729689,128.000254 C193.729689,91.69877 164.30123,62.2703115 127.999746,62.2703115 Z M127.999746,170.667175 C104.435741,170.667175 85.3328252,151.564259 85.3328252,128.000254 C85.3328252,104.436249 104.435741,85.3333333 127.999746,85.3333333 C151.563751,85.3333333 170.666667,104.436249 170.666667,128.000254 C170.666667,151.564259 151.563751,170.667175 127.999746,170.667175 Z M211.686338,59.6734287 C211.686338,68.1566129 204.809755,75.0337031 196.326571,75.0337031 C187.843387,75.0337031 180.966297,68.1566129 180.966297,59.6734287 C180.966297,51.1902445 187.843387,44.3136624 196.326571,44.3136624 C204.809755,44.3136624 211.686338,51.1902445 211.686338,59.6734287 Z"/>
                </g>
            </svg>       
        );
        case 'linkedin': return (
            <svg className={props.classes} {...props.attr} viewBox="0 0 132 132" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                <g>
                    <path fill={props.fill_1 ? props.fill_1 : '#E5DFD6'} d="M11.75 0.509766C47.78 0.509766 83.8199 0.509766 119.85 0.509766C120.63 0.679766 121.41 0.809765 122.18 1.01977C127.86 2.53977 131.26 6.97977 131.27 13.0898C131.29 48.4398 131.29 83.7898 131.27 119.13C131.27 121.9 130.6 124.52 128.86 126.79C126.2 130.28 122.56 131.56 118.34 131.56C84.1 131.56 49.86 131.56 15.63 131.56C14.06 131.56 12.48 131.46 10.91 131.35C5.80997 131 1.72996 127.09 0.619965 122.11C0.469965 121.46 0.35998 120.8 0.22998 120.15C0.22998 84.1198 0.22998 48.0798 0.22998 12.0498C0.33998 11.6998 0.519957 11.3498 0.549957 10.9898C0.989957 6.11977 5.17996 1.59977 9.92996 0.889765C10.54 0.799765 11.15 0.649766 11.76 0.529766L11.75 0.509766ZM72.3 56.7598C72.3 55.0098 72.3 53.6598 72.3 52.2998C72.28 49.9398 70.93 48.5698 68.57 48.5698C63.79 48.5698 59.01 48.5698 54.23 48.5698C51.73 48.5698 50.35 49.9298 50.35 52.4398C50.35 72.7598 50.35 93.0798 50.35 113.4C50.35 116.01 51.77 117.4 54.41 117.4C59.02 117.4 63.63 117.4 68.24 117.4C70.97 117.4 72.3 116.06 72.3 113.31C72.3 102.94 72.3 92.5598 72.3 82.1898C72.3 78.8598 73.02 75.6898 74.45 72.6798C76.55 68.2698 80.41 66.0598 85.34 66.4498C89.96 66.8098 93.2 69.4998 94.39 74.3298C94.97 76.7098 95.33 79.1998 95.35 81.6398C95.45 92.2298 95.39 102.81 95.39 113.4C95.39 116.12 96.66 117.39 99.37 117.39C104.15 117.39 108.93 117.39 113.71 117.39C116.4 117.39 117.82 116.01 117.82 113.29C117.82 102.32 117.85 91.3498 117.75 80.3798C117.7 75.3098 117.4 70.2498 116.08 65.3098C113.86 57.0198 109.35 50.8198 100.65 48.5098C95.45 47.1298 90.19 47.1798 84.95 48.2798C79.77 49.3698 75.59 52.0498 72.3 56.7498V56.7598ZM19.08 83.0098C19.08 93.0398 19.08 103.07 19.08 113.09C19.08 116.02 20.45 117.4 23.37 117.4C27.64 117.4 31.9 117.4 36.17 117.4C39.73 117.4 41.01 116.11 41.01 112.54C41.01 99.8698 41.01 87.1898 41.01 74.5198C41.01 67.3098 41.01 60.0998 41.01 52.8898C41.01 49.9698 39.6 48.5698 36.71 48.5698C32.23 48.5698 27.75 48.5698 23.27 48.5698C20.4 48.5698 19.08 49.9098 19.08 52.7998C19.08 62.8698 19.08 72.9398 19.08 83.0098ZM44.12 28.9198C44.12 21.1398 37.72 14.7498 29.94 14.7798C22.25 14.8098 15.86 21.2298 15.86 28.9298C15.86 36.6198 22.27 43.0598 29.95 43.0898C37.71 43.1198 44.12 36.7098 44.12 28.9198Z"/>
                </g>
            </svg>       
        );
        case 'twitter': return (
            <svg className={props.classes} {...props.attr} viewBox="0 0 163 135" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                <g>
                    <path fill={props.fill_1 ? props.fill_1 : '#E5DFD6'} d="M145.37 20.9899C150.9 20.2399 155.51 18.8999 159.99 17.0899C160.58 16.8499 161.28 16.1099 161.85 16.8299C162.46 17.5899 161.75 18.3299 161.29 18.9199C157.65 23.7099 153.86 28.4099 148.92 31.9199C146.78 33.4399 146.31 35.2599 146.3 37.6999C146.21 57.6099 140.74 75.9699 129.87 92.6499C120.07 107.69 107.03 119.17 90.7202 126.69C80.7202 131.29 70.0601 133.46 59.0801 134.48C48.3301 135.48 37.8302 134.37 27.4602 131.86C17.8502 129.54 8.82016 125.72 0.410156 119.82C17.6802 120.59 33.4702 116.63 47.5702 106.04C46.1702 105.04 44.6502 105.23 43.3102 104.97C31.3302 102.56 23.3201 95.3999 18.4501 84.3999C17.4301 82.0999 18.2302 81.5399 20.4402 81.8699C23.6602 82.3499 26.8801 82.5099 30.7301 81.3199C28.3801 80.2899 26.5201 79.6199 24.7901 78.6999C13.4901 72.7099 7.06016 63.4299 6.13016 50.5799C5.91016 47.6099 6.35016 47.4099 9.07016 48.5399C12.2402 49.8499 15.3801 51.2299 19.3401 51.1499C16.9301 48.6899 14.5902 46.6399 12.8002 44.0799C5.01016 32.9399 4.23015 21.1799 9.42015 8.78989C10.4802 6.24989 11.5901 6.75989 12.9501 8.39989C18.2101 14.7199 24.2702 20.1299 31.0302 24.8399C40.5902 31.5099 51.0002 36.1999 62.2802 39.0699C66.8701 40.2399 71.5401 40.9299 76.2401 41.4199C78.4301 41.6499 79.4902 41.0899 79.1602 38.4699C77.2802 23.9399 84.1302 10.5999 97.4102 3.66989C108.33 -2.03011 123.71 -1.62011 134.84 8.63989C136.85 10.4899 138.7 10.6799 140.96 9.91989C146 8.22989 151.05 6.53989 155.68 3.84989C156.3 3.48989 156.91 2.52989 157.72 3.24989C158.44 3.88989 157.88 4.75989 157.59 5.44989C155.21 11.0799 151.82 15.9499 146.88 19.6499C146.51 19.9299 146.17 20.2599 145.35 20.9899H145.37Z"/>
                </g>
            </svg>       
        );
    }
}
