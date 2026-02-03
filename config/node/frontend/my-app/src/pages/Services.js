import React from 'react';
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className="services-page">

      <h1 className="main-logo">
        <span className="geo-part">GEO</span>
        <span className="service-part">SERVICE</span>
      </h1>

      <h2 className="services-header">
        Przegląd dostępnych portów morskich
      </h2>

      <div className="buttons-container">

        <Button
          className="service-btn"
          variant="contained"
          size="large"
          component={Link}
          to="/map"
        >
          MAPA INTERAKTYWNA
        </Button>

        <Button
          className="service-btn"
          variant="contained"
          size="large"
          component={Link}
          to="/list"
        >
          LISTA PORTÓW
        </Button>

        <Button
          className="service-btn"
          variant="contained"
          size="large"
          component={Link}
          to="/add-port"
        >
          DODAJ NOWY PORT
        </Button>

      </div>
    </div>
  );
}

export default Services;