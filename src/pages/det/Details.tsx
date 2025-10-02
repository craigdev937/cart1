import React from "react";
import "./Details.css";
import { useParams } from "react-router";
import { DAPI } from "../../global/DAPI";

export const Details = () => {
    const { id } = useParams();
    const PID = id !== undefined ? Number(id) : 0;

    const { error, isLoading, 
        data: PRO } = DAPI.useDetailQuery(PID);
    console.log(PRO);

    if (error) {
        if ("status" in error) {
            const errMSG = "error" in error ?
                error.error :
                JSON.stringify(error.data);
            return <h1>Error: {errMSG}</h1>;
        } else {
            return <h1>Error: {error.message}</h1>;
        }
    };

    return (
        <React.Fragment>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <main>
                    <section className="detail">
                        <h1>{PRO?.title}</h1>
                        <p>{PRO?.description}</p>
                        <img 
                            src={PRO?.thumbnail} 
                            alt={PRO?.title} 
                        />
                        <h5>$ {PRO?.price}</h5>
                    </section>
                    <section>
                        <h3>Reviews</h3>
                        {PRO?.reviews.map((review) => (
                            <aside key={review.reviewerEmail}>
                                <h3>{review.rating}</h3>
                                <h3>{review.reviewerName}</h3>
                                <h4>{review.comment}</h4>
                            </aside>
                        ))}
                    </section>
                </main>
            )}
        </React.Fragment>
    );
};


