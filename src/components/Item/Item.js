import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";
import "./Item.css"



const Item = ({ tipJedi, imeJedi,  id}) =>{
    
    const[img, setImg] = useState("")

    useEffect(() =>{
        switch (tipJedi){
            case "Glavna jed":
                setImg("https://img.taste.com.au/WMldfrFD/taste/2016/11/chicken-and-prosciutto-parmigiana-79468-1.jpeg")
                break;
            case "Predjed":
                setImg("https://www.familyfreshmeals.com/wp-content/uploads/2018/11/Easy-Creamy-Prosciutto-Cracker-Appetizer-Easy-appetizer-Family-Fresh-Meals.jpg")
                break;
            case "Sladica":
                setImg("https://www.tasteofhome.com/wp-content/uploads/2018/01/exps21585_THCA153054D10_15_4b-696x696.jpg")
                break;
            case "Prigrizki":
                setImg("https://www.weightwatchers.com/us/sites/default/files/styles/wwvs_default_image/public/article_masthead/healthysnacksforweightloss_c800117_program-10-snacks-opener_1200x628.jpg?itok=dfB5FKtE")
                break;
            case "Juha":
                setImg("https://img.taste.com.au/_YKHzE3u/taste/2016/11/pumpkin-and-chive-soup-75984-1.jpeg")
                break;
            case "Kvašeno pecivo":
                setImg("https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Garlic-Bread_EXPS_GHBZ18_12265_E08_09_5b.jpg")
                break;
            case "Napitki":
                setImg("https://d1e3z2jco40k3v.cloudfront.net/-/media/mccormick-us/recipes/thai-kitchen/c/800/coconut_milk_mixed_berry_smoothie_800x800.jpg?vd=20200628T173106Z&hash=5BD82A6D42ADABB5BDF94F677C05EDF9")
                break;
            default:
                setImg("https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg")

        }
    }, [tipJedi])

    return(
        <div className="card b--solid bw2">
            <div className="card-image ">
                <figure className="image is-4by3">
                    <img src={img} alt="Placeholder"/>
                </figure>
            </div>
            <div className="card-content">
                <p className="title is-4">{imeJedi}</p>
                <p className="subtitle is-6">{tipJedi}</p>
            </div>
            <div className="card-footer">
                <div className="card-footer-item">
                    <Link to={{
                        pathname: `/food/${id}`,
                    }}>
                        <button
                        className="button is-link is-fullwidth is-outlined"> 
                            {"Recept".toUpperCase()}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}


export default Item;