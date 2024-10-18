import React from "react";
import './DescriptionBox.css';

const DescriptionBox = () => {
    return(
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Review (122)</div>
            </div>
            <div className="descriptionbox-descriptin">
                <p>This type of shirt is typically snug, providing a sleek and minimalistic appearance, 
                    ideal for casual or semi-casual wear. It can come in various styles such as long-sleeve, 
                    short-sleeve, or sleeveless, often featuring ribbed cuffs and hem for a fitted look.
                    These garments are often made from materials like wool, cotton, or synthetic fibers, 
                    designed to provide warmth while being breathable. Lightweight sweaters are typically 
                    used in cooler weather as a layer of clothing that isn't too heavy or bulky.</p>
                <p>Depending on the design, they might come with a crew neck, V-neck, 
                    or even a turtleneck style.</p>
            </div>
        </div>
    )
}

export default DescriptionBox