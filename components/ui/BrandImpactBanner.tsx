import React from 'react';

const BrandImpactBanner = ({ brands }) => {
  return (
    <div className="brand-impact-banner">
      {brands.map((brand) => (
        <div key={brand.id} className="brand-item">
          <img
            src={brand.logo}
            alt={brand.name + ' logo'}
            className="h-16 w-16 object-contain rounded-full shadow-md mb-2 bg-white"
            loading="lazy"
          />
          <p className="brand-name">{brand.name}</p>
        </div>
      ))}
    </div>
  );
};

export default BrandImpactBanner;