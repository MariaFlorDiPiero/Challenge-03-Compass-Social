import '../Home/style.css'
import ImgHome from './Components-Home/ImgHome'
import PFooter from './Components-Home/PFooter';
import Icons from './Components-Home/Icons'
import Friends from './Components-Home/Friends'
import Post2 from './Components-Home/Post2';
import Post3 from './Components-Home/Post3'
import React, { useState, useEffect } from 'react';

function Home() {

    const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/users-post')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

    return (
        <>
                <div className="central">

                    <div className="compass">

                        <ImgHome />

                        <div className="home">

                            <PFooter />

                            <Icons />

                            <Friends />

                            <Post2 />

                            <Post3 />

                        </div>
                    </div >
                </div>
        </>

    )
}

export default Home;