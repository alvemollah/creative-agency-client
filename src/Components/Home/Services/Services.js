import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import { css } from "@emotion/core";
import { DotLoader, FadeLoader, PropagateLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


const Services = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        await fetch('https://infinite-mesa-16282.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }


    return (
        <div>
            <h3 className="text-center">Provide awesome <span style={{ color: "#7AB259" }}>services</span>
            </h3>
            <div className="row mt-5 d-flex justify-content-around mb-5">
                {
                    products.length === 0 &&
                    <DotLoader
                        css={override}
                        size={80}
                        color={"#0f3057"}
                    />
                }
                {
                    products.map(service => <Service key={Math.random()} service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;