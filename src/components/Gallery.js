import React from 'react';
import GoodsCard from './GoodsCard';

const Gallery = () => {
  const goodsList = [
    { id: 1, photo: 'https://img.imageboss.me/fourwinds/width/425/dpr:2/shop/files/burgundy-plum-fruit-tree-1.jpg?v=1697048986', name: 'Plum', price: 140 },
    { id: 2, photo: 'https://edaplus.info/food_pictures/cherry.jpg', name: 'Cherry', price: 250 },
    { id: 3, photo: 'https://m.dom-eda.com/uploads/topics/preview/00/00/03/20/06fa2fc486_500.jpg', name: 'Lemon', price: 125 },
    { id: 4, photo: 'https://img.fozzyshop.com.ua/210746-thickbox_default/kivi.jpg', name: 'Kiwi', price: 180 },
    { id: 5, photo: 'https://resources.markon.com/sites/default/files/styles/large/public/pi_photos/Citrus_Limes_Hero.jpg', name: 'Lime', price: 220 },
    { id: 6, photo: 'https://5.imimg.com/data5/VU/MR/MY-24751011/purple-grapes-500x500.jpg', name: 'Grape', price: 250 },
  ];

  return (
    <div className="gallery">
      {goodsList.map((goods) => (
        <GoodsCard
          key={goods.id}
          photo={goods.photo}
          name={goods.name}
          price={goods.price}
        />
      ))}
    </div>
  );
};

export default Gallery;