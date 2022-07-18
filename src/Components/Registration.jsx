import React from "react";

const Registration = () => {
  return (
    <div className="card-sign-in">
      <div className="card-body">
        <div className="container-title-card">
          <h4 class="card-title">Registrate</h4>
        </div>
        <form>
          <div class="row mb-4">
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="First name"
              />
            </div>

            <div class="col">
              <input type="text" class="form-control" placeholder="Last name" />
            </div>
          </div>
          <div class="form-group mb-4">
            <label for="inputAddress">Correo Electronico</label>
            <input
              type="email"
              class="form-control"
              id="inputEmail"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group mb-4">
            <label for="inputAddress2">
              Tu contraseña debe incluir al menos 5 caracteres, mayuscula y numero.
            </label>
            <input
              type="pasword"
              class="form-control"
              id="inputPassword"
              placeholder="Password"
            />
          </div>

          <div className="sign-in-button-container">
            <button type="submit" class="btn btn-primary btn-sm sign-in-button">
              <strong>Crear cuenta</strong>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Registration;
