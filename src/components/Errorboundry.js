import React, {useState} from 'react';


const Errorboundry = (props) => {
    const [error, setError] = useState(false);

    

    if(error) {
        <h1>oops, somehting went wrong</h1>
    } else {
        return props.children
    }
 
}

export default Errorboundry;
