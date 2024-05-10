import React from "react";
import { products } from "./Products";

export function Store( {view, onSwitch} ) {
    if (view === 'rows') {
        return (
            <div className="main-container">
                <span className="material-item noselect" onClick={onSwitch}>view_list</span>
                <div className="products-wrapper">
                    {products.map((item, index) => 
                        <div key={index} className="item">
                            <div style={{
                                maxWidth: 300 + 'px',
                                height: 300 + 'px',
                                backgroundSize: 'cover',
                                backgroundImage: `url(${item.img})`
                            }}>
                            <div className="description">
                                <div className="description-block">
                                    <h3 className="item-name">{item.name}</h3>
                                    <h5 className="item-color">{item.color}</h5>
                                </div>

                                <div className="management">
                                    <h5 className="price">${item.price}</h5>
                                    <button className="add-to-cart_btn">Add to cart</button>
                                </div>
                            </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }

    else {
        return (
            <div className="main-container">
                <span className="material-item noselect" onClick={onSwitch}>view_module</span>
                <div className="list">
                    {products.map((item, index) => 
                        <div key={index} className="item-list">
                            <div className={'item-image'} style={{
                                backgroundImage: `url(${item.img})`,}}/>
                        
                                <h3 className="item-name-list">{item.name}</h3>
                                <h5 className="item-color">{item.color}</h5>
                                <h5 className="price">${item.price}</h5>
                                <button className="add-to-cart_btn">Add to cart</button>
                            </div>
                        

                    )}
                </div>
            </div>
        )
    }
}