import React from "react";
import "./Products.css";
import { Link } from "react-router";
import { DAPI } from "../../global/DAPI";

export const Products = () => {
    const { error, isLoading, data } = DAPI.useProQuery();

    if (error) {
        if ("status" in error) {
            const errMSG = "error" in error ?
                error.error :
                JSON.stringify(error.data);
            return <h1>Error: {errMSG}</h1>;
        } else {
            return <h1>Error: {error.message}</h1>
        }
    };

    return (
    <React.Fragment>
        {isLoading ? (
            <h1>Loading...</h1>
        ) : (
            <main className="prod__container">
                <h1 className="prod__info">Products</h1>
                <section className="prod__grid">
                    {data && data.products.map((prod) => (
                        <aside key={prod.id} className="prod__card">
                            <Link to={`/${prod.id}`} className="prod__link">
                                <h3 className="prod__title">{prod.title}</h3>
                                <img 
                                    className="prod__img"
                                    alt={prod.title} 
                                    src={prod.thumbnail} 
                                />
                            </Link>
                            <section className="prod__cont">
                                <p className="prod__desc">
                                    {prod.description.slice(0, 100)}...
                                </p>
                            </section>
                            <footer className="prod__foot">
                                <span className="prod__price">{prod.price}</span>
                                <button className="prod__btn">
                                    Add to Cart
                                </button>
                            </footer>
                        </aside>
                    ))}
                </section>
            </main>
        )}
    </React.Fragment>
    );
};


