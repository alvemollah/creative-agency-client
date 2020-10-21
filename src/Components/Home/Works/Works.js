import React from 'react';
import Carousel from 'react-elastic-carousel';
import work1 from '../../../images/carousel-1.png';
import work2 from '../../../images/carousel-2.png';
import work3 from '../../../images/carousel-3.png';
import work4 from '../../../images/carousel-4.png';
import work5 from '../../../images/carousel-5.png';

const Works = () => {
    const items = [
        { id: 1, title: work1 },
        { id: 2, title: work2 },
        { id: 3, title: work3 },
        { id: 4, title: work4 },
        { id: 5, title: work5 }
    ]
    const breakPoints = [
        { width: 480, itemsToShow: 1 },
        { width: 768, itemsToShow: 2 },
        { width: 991, itemsToShow: 2 },
        { width: 1200, itemsToShow: 2.5 },
    ]
    const imgStyles = {
        height: '334.7px',
        borderRadius: '10px',
        margin: '15px'
    }
    return (
        <div>
            <section className="custom-section mb-5">
                <h3 className="text-center text-light mb-4 pt-4">Here are some of <span style={{ color: "#7AB259" }}>our works</span></h3>

                <Carousel enableAutoPlay autoPlaySpeed={1000} breakPoints={breakPoints}
                    easing="cubic-bezier(1,.15,.55,1.54)"
                    tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
                    transitionMs={700}
                >
                    {
                        items.map(item =>
                            <div key={item.id}>
                                <img style={imgStyles} src={item.title} alt="" />
                            </div>)
                    }
                </Carousel>

            </section>

        </div>
    );
};

export default Works;