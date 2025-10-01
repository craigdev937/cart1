import React from "react";
import "./Cart.css";
import { Link } from "react-router";
import { ACT } from "../../global/CartSlice";
import { useAS, useAD } from "../../global/Hooks";

export const Cart = () => {
    const dispatch = useAD;
    const cartItems = useAS((state) => state.cart.cartItems);

    const total = cartItems.reduce(
        (sum, item) => sum + item.product.price * item.quantity, 0
    );

    return (
        <React.Fragment>
            <main>
                <h1>Cart</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam officia commodi quas, doloribus magnam placeat possimus repudiandae fuga repellendus impedit doloremque laboriosam neque tenetur dicta, fugit facilis. Sunt recusandae amet minima a debitis repellat maxime accusamus voluptatum cum, quasi ullam. Iure, officiis commodi earum temporibus culpa a corporis omnis necessitatibus, ratione tenetur similique. Id voluptatibus sunt ad maxime nemo nihil natus laudantium blanditiis odio.
                </p>
            </main>
        </React.Fragment>
    );
};


