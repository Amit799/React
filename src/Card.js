import React from 'react';

const Card = ({title = " Basketball", buttonText="my Button"})=> {
    return(
        <div className="card" style={{width: "18rem"}}>
                <img
                  src="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-success">{buttonText}</a>
                </div>
                </div>
    )
}

export default Card;