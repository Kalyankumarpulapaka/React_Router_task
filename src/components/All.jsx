import React from "react";
import Card from "./Card";




const All=()=>{

    return(
    <> 
   <div className="card-container">
        <Card 
          imageSrc="https://media.geeksforgeeks.org/wp-content/uploads/20240308162931/Difference-Between-Machine-Learning-and-Artificial-Intelligence.webp" 
          altText="Placeholder Image 1" 
          cardText="Machine Learning Must-" 
        />
        <Card 
          imageSrc="https://onlinedegrees.sandiego.edu/wp-content/uploads/2023/05/6-careers-you-can-get-with-python.jpg" 
          altText="Placeholder Image 2" 
          cardText="Python Objects 101-" 
        />
        <Card 
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeGtUj2qyou0GkynbSF3zhrrYm9izrTizXAUMVJnBHKg&s" 
          altText="Placeholder Image 3" 
          cardText="Power Of NLP" 
        />
      </div>
     </>
      
       
    )
}

export default All;