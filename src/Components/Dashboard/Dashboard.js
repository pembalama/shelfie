import React from 'react';
import Product from '../Product/Product';

export default class Dashboard extends React.Component {
    render() {
        return(
            <div>
                {this.props.inventoryList.map((product, index) => (
                    <div>
                        
                        <div>
                            
                            <Product />
                        </div>

                    </div>
                ))}
                
            </div>
        )
    }
}