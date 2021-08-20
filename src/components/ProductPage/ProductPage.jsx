import { useState, useEffect } from "react";
import { commerce } from "../../lib/commerce";


export default function ProductPage() {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        console.log("aa gya", data);
        setProducts(data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const [cartCount, setCartCount] = useState(0);
    return (<>
        {
            (products.length === 0 || !products[0].id)
                ? (<div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>Loading...</div>)
                :
                (
                    <div className="mainContainer" style={{marginTop:"125px"}}>
                        {/* <div className="header">BAZAAR | AT DEV</div> */}
                        <div className="productContainer">
                            
                            <div className="pData pVariants">
                                {products[0].assets.map((asset, i) => (
                                    <div className="productVar" style={{ backgroundImage: `url(${asset.url})`, cursor: "pointer" }} onClick={e => {
                                        document.querySelector(".productImg").style.backgroundImage = e.target.style.backgroundImage;
                                    }}>

                                    </div>
                                )

                                )}
                            </div>
                            <div className="pData pDetails">
                                <h2 className="ProductTitle">{products[0].name}</h2>
                                <hr/>
                                <div className="productDesciption" dangerouslySetInnerHTML={{ __html: products[0].description }} >{ }</div>
                                <div className="pDataMain">
                                    <div className="pDataC price">
                                        Price : <br /> {products[0].price.formatted_with_code}
                                    </div>
                                    <div className="pDataC color">
                                        Color : <br />
                                        <div className="colorChoose red"></div>
                                        <div className="colorChoose blue"></div>
                                        <div className="colorChoose green"></div>
                                    </div>
                                    <div className="pDataC size">
                                        Size :
                                        <br />
                                        <span class="">S</span> <span class="pAcive">M</span> L XL
                                    </div>
                                </div>

                                <div className="pDataMain cart-options">
                                    <div className="counter-cart">
                                        <div className="counter pDataC-btn" onClick={() => { if (cartCount <= 1) return; setCartCount(cartCount - 1) }}>-</div>
                                        <div className="counter counter-val">{cartCount}</div>
                                        <div className="counter pDataC-btn" onClick={() => { setCartCount(cartCount + 1) }}>+</div>
                                    </div>
                                    <button className="pDataC-btn">Add To Cart</button>
                                </div>
                                <br />
                                <hr />
                                <br />
                                <h4>REVIEWS</h4>
                                <br />
                                <div pReviews pStars>
                                    🌟🌟🌟⭐⭐
                                </div>
                                <br/>
                                <b>Random Aadmi</b>
                                <p>&nbsp;&nbsp; Mast hai vro lele isko ... 👉👈</p>
                            
                                <br />
                                <b>Random Aadmi 2</b>
                                <p>&nbsp;&nbsp; Mat le vro Chutiya bana rhaa hai...</p>
                            
                            </div>
                            <div className="pData pPhoto">
                                <div className="productImg" style={{ backgroundImage: `url(${products[0].assets[0].url})`, }}></div>
                            </div>
                        </div>

                        <div class="pShare" title="Share">⊕</div>

                    </div>)
        }
 </>)

}
