import React from 'react';
import { Button, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import { ReactComponent as PolandMap } from '../assets/mapa.svg';

function Home() {
  return (
    <div className="home-page">
      <div className="home-content-wrapper">

        <div className="map-section">
          <PolandMap className="poland-map-svg" />
        </div>

        <div className="text-section">

          <Typography component="h1" variant="h2" className="main-logo-home">
            <span className="geo-part">GEO</span>
            <span className="portal-part">PORTAL</span>
          </Typography>

          <Typography variant="h6" className="home-subtitle">
            Geoportal tematyczny poświęcony portom morskim
          </Typography>

          <Button
            className="start-btn-home"
            variant="contained"
            size="large"
            component={Link}
            to="/services"
          >
            START
          </Button>

        </div>
      </div>
    </div>
  );
}

export default Home;