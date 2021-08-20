import React from 'react';
import '../index.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';


const BaseCard = ({ title, image }) => {

    return (
        <div className="container page-wrapper">
            <div className="page-inner">
                <div className="row">
                    <div className="el-wrapper">
                        <div className="box-up">
                            <img className="img" src={image} alt={title} />
                            <div className="img-info">
                                <div className="info-inner">
                                    <span className="p-name">{title }</span>
                                    <span className="p-company">Yeezy</span>
                                </div>
                                <div className="a-size">Available sizes : <span className="size">S , M , L , XL</span></div>
                            </div>
                        </div>

                        <div className="box-down">
                            <div className="h-bg">
                                <div className="h-bg-inner"></div>
                            </div>

                            <a className="cart" href="#">
                                <span className="price">$120</span>
                                <span className="add-to-cart">
                                    <span className="txt">Add in cart</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BaseCard;
