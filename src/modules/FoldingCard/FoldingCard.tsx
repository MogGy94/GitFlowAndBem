import * as React from 'react';
const image2 = require('../../../assets/foto2.jpg');
const image1 = require('../../../assets/foto1.jpg');

import './stylesFoldingCard.css';
const ShowFoldingCard = () => {
    //const fragment = document.createDocumentFragment();
    return (
        <div className="foldingCard">
            <div className="foldingCard__imgBox">
                <img className="foldingCard__frontface" src={image1} alt="" />
                <img className="foldingCard__backface" src={image2} alt="" />
            </div>

            <div className="foldingCard__details">
                <div className="foldingCard__content">

                    <h2 className="foldingCard__tittle">
                        Edilberto Cañon <br />
                        <span className="foldingCard__subTittle">
                            Desarrollador Front END
                    </span>
                    </h2>

                    <div className="foldingCard__socialIcons">
                        <a className="foldingCard__icon" href="#">
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a className="foldingCard__icon" href="#">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a className="foldingCard__icon" href="#">
                            <i className="fa fa-whatsapp" aria-hidden="true"></i>
                        </a>
                        <a className="foldingCard__icon" href="#">
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ShowFoldingCard;