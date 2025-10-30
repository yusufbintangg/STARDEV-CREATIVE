import React from 'react';
import styled from 'styled-components';

const PricingCard = ({ pkg, activeCategory, isMiddle }) => {
  return (
    <StyledWrapper $isMiddle={isMiddle}>
      <div className="plan">
        <div className="inner">
          <span className="pricing">
            <span>
              {pkg.price} <small></small>
            </span>
          </span>
          <p className="title">{pkg.name}</p>
          <p className="info">{pkg.description}</p>
          <ul className="features">
            {pkg.features.map((f, idx) => (
              <li key={idx}>
                <span className="icon">
                  <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                  </svg>
                </span>
                <span><strong></strong>{f}</span>
              </li>
            ))}
          </ul>
          <div className="action">
            <button
              className="button"
              type="button"
              onClick={() => {
                window.open(`https://api.whatsapp.com/send?phone=+6289616869977&text=${encodeURIComponent(`Halo StarDev, Saya mau pesan paket ${pkg.name} dari kategori ${activeCategory}`)}`, '_blank');
              }}
            >
              Pesan Sekarang
            </button>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .plan {
    border-radius: 16px;
    box-shadow: 0 30px 30px -25px rgba(0, 38, 255, 0.205);
    background-color: ${props => props.$isMiddle ? '#FFD700' : '#fff'};
    color: #181d22ff;
    max-width: 3200px;
  }

  .plan strong {
    font-weight: 600;
    color: #425275;
  }

  .plan .inner {
    align-items: center;
    padding: 20px;
    padding-top: 40px;
    background-color: #ffffffff;
    border-radius: 12px;
    position: relative;
  }

  .plan .pricing {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #0004ffff;
    border-radius: 99em 0 0 99em;
    display: flex;
    align-items: center;
    padding: 0.625em 0.75em;
    font-size: 1.25rem;
    font-weight: 600;
    color: rgba(255, 187, 0, 1);
  }

  .plan .pricing small {
    color: #707a91;
    font-size: 0.75em;
    margin-left: 0.25em;
  }

  .plan .title {
    margin-top: 1.5rem;
    font-weight: 600;
    font-size: 1.25rem;
    color: #174cb6ff;
  }

  .plan .title + * {
    margin-top: 0.75rem;
  }

  .plan .info + * {
    margin-top: 1rem;
  }

  .plan .features {
    display: flex;
    flex-direction: column;
  }

  .plan .features li {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1rem;
    font-weight: 700;
    color: #000000ff;
    text-align: left;
    padding-left: 0;
  }

  .plan .features li + * {
    margin-top: 0.75rem;
    
  }

  .plan .features .icon {
    background-color: #003cffff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 50%;
  }

  .plan .features .icon svg {
    height: 1.25rem;
    width: 1.25rem;
  }

  .plan .features + * {
    margin-top: 1.25rem;
  }

  .plan .action {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
  }

  .plan .button {
    background-color: #1966ebff;
    border-radius: 6px;
    color: #fff;
    font-weight: 500;
    font-size: 1.125rem;
    text-align: center;
    border: 0;
    outline: 0;
    width: 100%;
    padding: 0.625em 0.75em;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  .plan .button:hover, .plan .button:focus {
    background-color: #4133B7;
  }
`;


export default PricingCard;
