import React from "react";
import styles from "../../styles/Home.module.css";
import Carousel from "react-multi-carousel";

export function TopMenu(props) {
  return (
    <div>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {props.topMenu.map((item) => (
          <div className={styles.sliderItem}>
            <div className={styles.sliderInfo}>
              <h1>Top menu</h1>
              <hr />
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
              <p>{item.price} UAH</p>
            </div>
            <img className={styles.sliderImage} src={item.image} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
