export default function SVG(props){
    switch(props.id){
        case 1: return (
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" className={props.classes} {...props.attr}>
                <path fill={props.fill_1 ? props.fill_1 : '#ec622c'} d="M945.58,504.81c-73.59,24.53-139.14,57.55-196.6,98.83,11.44,69.81,34.45,139.52,69.13,208.89l6.09,12.18-12.18-6.09c-69.38-34.69-139.08-57.69-208.89-69.13-41.27,57.45-74.3,123.01-98.83,196.59l-4.31,12.92-4.31-12.92c-24.53-73.58-57.55-139.14-98.82-196.59-69.81,11.44-139.52,34.45-208.9,69.13l-12.18,6.09,6.09-12.18c34.69-69.38,57.69-139.08,69.14-208.89-57.46-41.27-123.01-74.3-196.6-98.83l-12.92-4.31,12.92-4.31c73.58-24.53,139.14-57.55,196.6-98.83-11.44-69.81-34.45-139.52-69.14-208.89l-6.09-12.18,12.18,6.09c69.38,34.69,139.08,57.69,208.89,69.13,41.27-57.46,74.3-123.01,98.83-196.59l4.31-12.92,4.31,12.92c24.53,73.58,57.55,139.14,98.82,196.59,69.81-11.44,139.52-34.44,208.9-69.13l12.18-6.09-6.09,12.18c-34.69,69.38-57.69,139.08-69.14,208.89,57.46,41.27,123.01,74.3,196.6,98.83l12.92,4.31-12.92,4.31Zm-569.49,119.27c69.54,68.43,181.4,67.53,249.83-2.01,68.43-69.55,67.53-181.4-2.01-249.83-69.55-68.43-181.4-67.53-249.83,2.01-68.43,69.55-67.53,181.4,2.01,249.83Z"/>
            </svg>            
        );
        case 2: return (
            <svg className={props.classes} {...props.attr} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 464.27 475.13">
                <path fill={props.fill_1 ? props.fill_1 : '#439948'} d="M235.33,47.97l-1.75-5.25-1.75,5.25c-29.76,89.27-90.11,149.62-179.37,179.37l-5.25,1.75,5.25,1.75c89.27,29.75,149.62,90.11,179.37,179.37l1.75,5.25,1.75-5.25c29.76-89.27,90.11-149.62,179.37-179.37l5.25-1.75-5.25-1.75c-89.27-29.75-149.62-90.11-179.37-179.37Z"/>
            </svg>              
        );
        case 3: return (
            <svg className={props.classes} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513.34 525.36" {...props.attr}>
                <path fill={props.fill_1 ? props.fill_1 : '#E8DFD4'} d="M29.77,262.92s103.13-116.72,230.34-116.72,230.34,116.72,230.34,116.72c0,0-103.13,116.72-230.34,116.72S29.77,262.92,29.77,262.92Z"/>
                <circle fill={props.fill_2 ? props.fill_2 : '#1996CE'} cx="260.11" cy="262.92" r="83.88" transform="translate(-109.73 260.94) rotate(-45)"/>
            </svg>            
        );
        case 4: return (
            <svg className={props.classes} {...props.attr} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 464.27 475.13">
                <path fill={props.fill_1 ? props.fill_1 : '#F36B37'} d="M411.5,231.8l-5.15-1.72c-29.32-9.77-55.44-22.93-78.34-39.38,4.56-27.82,13.73-55.59,27.55-83.24l2.43-4.85-4.85,2.43c-27.65,13.82-55.42,22.99-83.24,27.55-16.45-22.89-29.6-49.02-39.38-78.34l-1.72-5.15-1.72,5.15c-9.77,29.32-22.93,55.44-39.38,78.34-27.82-4.56-55.59-13.73-83.24-27.55l-4.85-2.43,2.43,4.85c13.82,27.64,22.99,55.42,27.55,83.24-22.9,16.45-49.02,29.61-78.34,39.38l-5.15,1.72,5.15,1.72c29.32,9.77,55.44,22.93,78.34,39.38-4.56,27.82-13.73,55.59-27.55,83.24l-2.43,4.85,4.85-2.43c27.65-13.82,55.42-22.99,83.24-27.55,16.45,22.89,29.6,49.02,39.38,78.34l1.72,5.15,1.72-5.15c9.77-29.32,22.93-55.44,39.38-78.34,27.82,4.56,55.59,13.73,83.24,27.55l4.85,2.43-2.43-4.85c-13.82-27.64-22.99-55.42-27.55-83.24,22.89-16.45,49.02-29.61,78.34-39.38l5.15-1.72Z"/>
                <circle fill={props.fill_2 ? props.fill_2 : '#FFCD32'} cx="228.8" cy="230.87" r="70.4" transform="translate(-96.23 229.4) rotate(-45)"/>
            </svg>
        );
    }
}