// import React from 'react';
// import './About.css';

// const info = () => {

//     return (
//         <div className='about-info grid'>

//             <div className="about-box">
//                 <i class='bx bx-award about-icon'></i>

//                 <h3 className="about-title">Experience</h3>
//                 <span className="about-subtitle">8 Years Working</span>
//             </div>

//             <div className="about-box">
//                 <i class='bx bx-briefcase-alt about-icon' ></i>

//                 <h3 className="about-title">Completed</h3>
//                 <span className="about-subtitle">48 + Projects</span>
//             </div>

//             <div className="about-box">
//                 <i class='bx bx-support about-icon' ></i>

//                 <h3 className="about-title">Support</h3>
//                 <span className="about-subtitle">Online 24/7</span>
//             </div>

//         </div>
//     )
// }

// export default info;





















import React from 'react';
import './About.css';

const Info = ({ boxes }) => {
    return (
        <div className='about-info grid'>
            {boxes.map((box, index) => (
                <div className="about-box" key={index}>
                    <i className={box.icon}></i>
                    <h3 className="about-title">{box.title}</h3>
                    <span className="about-subtitle">{box.subtitle}</span>
                </div>
            ))}
        </div>
    )
}

export default Info;




// import React from 'react';
// import Info from './Info';

// const App = () => {
//     const boxes = [
//         { icon: 'bx bx-award about-icon', title: 'Experience', subtitle: '8 Years Working' },
//         { icon: 'bx bx-briefcase-alt about-icon', title: 'Completed', subtitle: '48 + Projects' },
//         { icon: 'bx bx-support about-icon', title: 'Support', subtitle: 'Online 24/7' },
//     ];

//     return (
//         <div>
//             <Info boxes={...boxes[0]} />
//             <Info boxes={...boxes[1]} />
//             <Info boxes={...boxes[2]} />
//         </div>
//     );
// };

// export default App;