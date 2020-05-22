import React, { useState, useEffect } from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const RestaurantCard = props => {
  const {
    name,
    picURL,
    rating,
    numReviews,
    priceRange,
    numTimesChosen,
  } = props;

  return (
    <Card
      hoverable
      headStyle={{ backgroundColor: 'white' }}
      bodyStyle={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
      style={{ width: 300, padding: 24 }}
      extra={
        <div style={{ fontSize: 14 }}>
          Chosen {numTimesChosen} Times!
        </div>}
      cover={<img style={{ height: '60%', objectFit: 'contain' }} alt="example" src={picURL} />}
    >
      <Meta
        title={
          <div
            style={{ color: 'red', fontSize: 36 }}
          >
            {name}
          </div>
        }
        description={
          <div>
            <h3 style={{ fontSize: 18 }}>Rating: {rating}</h3>
            <h3 style={{ fontSize: 18 }}>Number of Reviews: {numReviews}</h3>
            <h3 style={{ fontSize: 18 }}>Price Range: {priceRange}</h3>
          </div>
        }
      />
    </Card>
  );
}

const Styles = {};

export default RestaurantCard;
