import React from 'react';
import styled from 'styled-components';

const PricingCard = ({ pkg, activeCategory }) => {
  return (
    <StyledCard>
      <header>
        <h2 className="title">{pkg.name}</h2>
        <h1 className="price">{pkg.price}</h1>
      </header>
      <p className="desc">{pkg.description}</p>
      <ul className="lists">
        {pkg.features.map((f, idx) => (
          <li key={idx} className="list">
            <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fillRule="evenodd" />
            </svg>
            <p style={{ textAlign: 'left', flex: 1 }}>{f}</p>
          </li>
        ))}
      </ul>
       <button
        className="action"
        type="button"
        onClick={() => {
          window.open(`https://api.whatsapp.com/send?phone=+628988025033&text=${encodeURIComponent(`Saya mau pesan paket ${pkg.name} dari kategori ${activeCategory}`)}`, '_blank');
        }}
      >
        Pesan Sekarang
      </button>
    </StyledCard>
  );
};

const StyledCard = styled.section`
  :root {
    --primary-color: #0ea5e9;
    --secondary-color: #f8fafc;
    --accent-color: #020617;
  }

  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  padding: 1.5rem;
  margin: 0 auto 2rem auto; /* hanya margin bawah + auto biar center */

  @media (max-width: 768px) {
    padding: 1.25rem; /* biar isi gak mepet di mobile */
    margin-bottom: 1.5rem;
  }

  header {
    display: flex;
    flex-direction: column;
  }

  .title {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #000;
  }

  .price {
    font-size: 1.5rem;
    font-weight: 700;
    color: #000;
  }

  .desc {
    margin: 0.75rem 0;
    line-height: 1.625;
    color: #000;
  }

  .lists {
    margin-bottom: 1.5rem;
    color: #000;
  }

  .lists .list {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .lists .list svg {
    height: 1.25rem;
    width: 1.25rem;
    flex-shrink: 0;
    color: #00a2ffff;
  }

  .action {
    border: none;
    border-radius: 0.5rem;
    background-color: #5a52b8;
    padding: 0.75rem 1.25rem;
    font-weight: 600;
    color: #f8fafc;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-align: center;

    &:hover {
      background-color: #0ea5e9;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
                  0 4px 6px -2px rgba(0, 0, 0, 0.05);
      transform: translateY(-5px);
    }
  }
`;


export default PricingCard;
