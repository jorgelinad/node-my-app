import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div class="card">
      <div class="card-body">
        <div className="container-title-card">
          <h1 class="card-title">AMAS CUIDAR DE TU PIEL</h1>
        </div>
        <div className="container-data-card-main">
          <div className="container-data-card">
            <h2>ESTO ES PARA TI!!.</h2>
            <h3>Tenemos los mejores precios del mercado</h3>
            <h3>Registrate y nuestros especialistas te daran un diagnostico</h3>
          </div>
        </div>

        <div className="buttons-card">
          <button type="button" class="btn btn-primary btn-sm button-link">
            <Link to="/login" class="card-link text-light">
              Accede a tu perfil
            </Link>
          </button>

          <button type="button" class="btn btn-primary btn-sm button-link">
            <Link to="/registration" class="card-link text-light">
              Registrate
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
