import { useState } from "react"

export default function LikeButton(){
    let [isLiked, setLiked] = useState(false);
    let toggleLike = () => {

        setLiked(!isLiked);
        // console.log("we are going to toggle");
        // let newVal = !isLiked;
        // console.log(newVal);

    }
    // let clicked = () => {console.log("clicked")}
    return(
        <div>
            <p onClick={toggleLike}>
                {
                isLiked ? (<i className="fa-solid fa-heart"></i>
                ): (
            <i className="fa-regular fa-heart"></i>
                )}
            </p>
        </div>
    );
}