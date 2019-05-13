import React,{Component} from 'react';
import './RadiostationItem.css';

class RadiostationItem extends Component{
    render(){
        return (
            <div className='radio-list-item'>
                <span className='radio-item'>123456</span>
                <span className='radio-item'>
                    <img src='https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png' className='img-radio' alt='123' />
                </span>
                <span  className='radio-item'>Radio Roks</span>
                <span  className='radio-item text'>dance music, the new from 80's and 90's, like bubblegum and more.</span>
                <span className='action-block'>
                <button className='list-btn'><i className="far fa-star"></i></button>
                <button className='list-btn'><i className="fas fa-times"></i></button>
                </span>
        </div>
        )
    }
}

export default RadiostationItem;
