import React from 'react';
import {Link,Outlet} from 'react-router-dom';

const Home = () => {
    return ( 
        <div>
                <h1>This is the home page</h1>
                <Link to="about">visit our about page</Link>
                <Outlet/>

        </div>
     );
}
 
export default Home;