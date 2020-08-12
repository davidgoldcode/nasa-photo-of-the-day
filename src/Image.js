import React, { useState, useEffect } from 'react';
import "./Image.css";

// something gabe exampled - will auto change name if it's changed on backend. 
// moved fetch user to outside so it would be immediate cahnge 
// obviously check api 
// gabe ends up cutting this by assigning the meat of it all to 'useFetchUser' 
// can find in the 3rd video at 8 min mark

// function User({ id }) {
//   const [user, setUser] = useState('');
//   useEffect(() => {
//     const fetchUser = (id) => 
//     fetch('http://localhost:4000/friends/${id}')
//       .then(repsonse => response.json())
//       .then(user => {
//         console.log(user);
//         setUser(user.name);
//       });
//       fetchUser(id);
//   }, [id])
// }

function fetchUrl(url) {
    const [img, setImg] = useState('');
    useEffect(() => {
        setImg(url);
        // const fetchImg = () => {
        //     fetch('https://api.nasa.gov/planetary/apod?api_key=dOlHWzaVegtmplOlZ9dQBjiZP9zOTuOuGl8j0Ryw')
        //     .then(response => response.json())
        //     .then(info => {
        //       console.log(info);
        //       setImg(info.url);
        //     })
        //  }
    }, [url])
    return img;
}

function Image({url}) {
      fetchImg(url)
      console.log(img);
      

    return (
      <div>
        <img src={img} alt="nasa"/>
      </div>
    );
}

