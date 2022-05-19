import { React, useState, useEffect } from "react";


/**!!STILL NEEDS BLOG DETAILS TO BE PASSED IN AS PROPS!!**/
const CarouselCard = () => {

    const [blogList, setBlogList] = useState([]);

    const getBlogs = async (event) => {
        event.preventDefault();

        const response = await fetch("http://localhost:3001/blogslist");
        const data = response.json();

        setBlogList(data);
        console.log(blogList)
    }



    return(
        <div className="carouselcard">
            <h1>CAROUSEL CARD IS IMPORTING</h1>
            <h1>Title</h1>
            <p>Category:  </p>
            <p>Genre:  </p>
            <p className="carouselcardpar">Content: Wafer chupa chups bonbon gummies icing lollipop gummies. Donut gummi bears chocolate cake pudding cheesecake cheesecake. Sesame snaps jelly-o fruitcake gingerbread icing pudding tiramisu. Marzipan topping tiramisu chocolate bar chocolate cake. Donut jelly tootsie roll oat cake macaroon. Toffee pie apple pie dragée powder fruitcake soufflé. Powder toffee apple pie bear claw toffee tart. Toffee shortbread lollipop topping gummi bears ice cream macaroon biscuit. Bear claw carrot cake caramels gingerbread chocolate bar. Soufflé donut chupa chups cupcake ice cream.
Shortbread candy topping cupcake jelly beans. Tart gummies donut bonbon sweet roll ice cream cookie. Tiramisu cookie wafer shortbread chocolate donut donut. Oat cake chocolate bar bonbon oat cake chocolate shortbread. Apple pie oat cake powder dessert topping topping. Sweet bonbon cotton candy cotton candy oat cake. Caramels danish donut oat cake chupa chups candy canes chocolate bar chupa chups. Toffee cookie chocolate bar halvah chocolate cake icing jelly-o. Chocolate bear claw chocolate bar tart jujubes gingerbread. Lemon drops gummi bears sweet pie tiramisu croissant cake chocolate.
Gummi bears marzipan dragée ice cream tiramisu shortbread. Bear claw pudding carrot cake gummi bears chocolate. Sugar plum sugar plum chocolate bar chocolate bar cake cupcake. Croissant lollipop carrot cake icing gummies jelly-o donut. Gummi bears gingerbread jelly cake sugar plum sugar plum. Toffee jelly jelly-o brownie jujubes gummies. Chocolate donut sweet bonbon brownie chocolate powder.
Tootsie roll sweet roll powder soufflé cookie oat cake chupa chups soufflé oat cake. Sesame snaps sesame snaps caramels lollipop marzipan halvah. Muffin topping jelly-o dragée lemon drops tiramisu bonbon. Dragée gummi bears pie icing wafer jelly beans. Cotton candy topping dessert lollipop oat cake candy. Gummies brownie fruitcake icing apple pie. Soufflé chocolate candy pie marzipan fruitcake cheesecake dragée.
Ice cream liquorice marzipan icing sugar plum. Ice cream chupa chups lemon drops candy fruitcake sweet roll. Liquorice cotton candy cheesecake tiramisu topping cookie ice cream carrot cake. Bear claw cookie fruitcake pudding gummies cake marzipan. Pudding powder liquorice bonbon liquorice pudding ice cream chocolate bar gummi bears. Brownie carrot cake bear claw muffin cookie muffin tiramisu jujubes. Biscuit cookie halvah marshmallow carrot cake fruitcake marshmallow oat cake. Gingerbread pie jelly beans muffin brownie icing gingerbread. </p>
            <p>Date/Time:</p>
        </div>
    )
}



export default CarouselCard;