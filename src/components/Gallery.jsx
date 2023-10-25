import { useState } from "react";

function Gallery(){
    
  return(
        <section className="gallery">
        <div className="heading">
          <h1>Gallery</h1>
        </div>
        <div className="images-grid">
          <img src="src\assets\g2.png" alt="" />
          <img src="src\assets\g3.png" alt="" />
          <img src="src\assets\g4.png" alt="" />
          <img src="src\assets\g6.png" alt="" />
          <img src="src\assets\g7.png" alt="" />
          <img src="src\assets\g8.png" alt="" />
          
        </div>
      </section>
    )
}

export default Gallery;