const HeroSection =()=>{
    return( 
    <main className="Hero container">
        <div className="Hero-content">
            <h1>YOUR FEET 
                DESERVE
                THE BEST
            </h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        

         <div className="Hero-button">
            <button>Shop Now</button>
            <button className="second-btn">Category</button>
         </div>

         <div className="shoping">
            <p>Also Available On</p>
         </div>

         <div className="brand-icon">
            <img src="/Images/flipkart.png" alt="flipkart"></img>
            <img src="/Images/amazon.png" alt="amazon"></img>
         </div>

         
        </div>
            <div className="Hero-image">
                <img src="/Images/shoe_image.png" alt="shoe" />
            </div>
    </main>
    );
};
export default HeroSection;