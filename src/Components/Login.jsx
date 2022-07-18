import React from "react";
const Login = () => {
  return (
    <div className="card-sign-in">
      <div className="card-body">
        <div className="container-title-card">
          <h1 class="card-title">Accede a tu perfil</h1>
        </div>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Correo Electronico</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted">
              No compartiremos tus datos con nadie!
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Contraseña</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          
          <div className="sign-in-button-container ">
            <button type="submit" class="btn btn-primary btn-sm sign-in-button">
              <strong>Enviar</strong>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
