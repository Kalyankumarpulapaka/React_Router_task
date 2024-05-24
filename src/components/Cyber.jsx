import React from "react";
import Card from "./Card";
const Cyber=()=>{


    return(
        <>
        <div className="card-container">
        
        <Card 
          imageSrc="https://media.geeksforgeeks.org/wp-content/uploads/20240308162931/Difference-Between-Machine-Learning-and-Artificial-Intelligence.webp" 
          altText="Placeholder Image 1" 
          cardText="Cyber Security Must-" 
        />
        <Card 
          imageSrc="https://onlinedegrees.sandiego.edu/wp-content/uploads/2023/05/6-careers-you-can-get-with-python.jpg" 
          altText="Placeholder Image 2" 
          cardText="Cyber Security  101-" 
        />
        <Card 
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeGtUj2qyou0GkynbSF3zhrrYm9izrTizXAUMVJnBHKg&s" 
          altText="Placeholder Image 3" 
          cardText="Cyber Security  NLP" 
        />
      </div>
        </>
    )
}

export default Cyber;