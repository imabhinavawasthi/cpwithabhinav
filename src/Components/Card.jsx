import React from 'react';
import { NavLink } from "react-router-dom";
import con from '../Media/construct.gif';

const Card = (props) => {
    return (
        <>
            <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Course Name</h6>
                        </div>
                        <div class="card-body">
                            <p>Here we have to provide the course description. For example the topic, concepts, problems, mentor, etc.</p>
                            <NavLink to='/courses/coursepage' className='btn btn-primary'>Check Course</NavLink>
                        </div>
                    </div>
        </>
    );
}

export default Card;