import React from "react";
import styles from "../../styles/Home.module.css";
import makePizza from "../../images/make-pizza.jpg";

export function AboutUs() {
  return (
    <div className={styles.aboutUs}>
      <img className={styles.makePizza} src={makePizza} />
      <div className={styles.info}>
        <h1>where it all started</h1>
        <p>
          is just your typical Boy meets Girl, Boy falls in love with y joins
          forces as master entrepreneur and master to create South Africa's most
          loved eatery Story. Their visi ild a restaurant that would serve the
          most mouthwat n inspired meals made with love and the finest, freshest
          ingredients.
        </p>
        <p>
          artisanal wood-fired pizzas, sumptuous pastas and gourmet it was not
          long before the Col'Cacchio magic spread far and , 28 years later,
          with restaurants all over the count ion of Col'Cacchio sends taste
          buds into a wild frenzy.It a menu. It's a celebration.A journey.A
          story of 28 year ing, of love, passion, adventure and loads of pizza.
        </p>
        <button className={styles.button}>Contact us</button>
      </div>
    </div>
  );
}
