import React, { Component } from 'react';
import Error from '../../components/error/Error';
import './crud.css';

export default class Crud extends Component {
  state = {
    name: '',
    email: '',
    birth: '',
    delegacion: '',
    colonia: '',
    calle: '',
    numero_casa: '',
    name_vaid: null,
    email_vaid: null,
    birth_vaid: null,
    delegacion_vaid: null,
    colonia_vaid: null,
    calle_vaid: null,
    numero_casa_vaid: null
  };
  isActivated = true;

  setData = e => {
    if (e.target.value.length <= 2 || e.target.value.length <= 0) {
      this.setState({
        [e.target.id]: true
      });
    } else {
      this.setState({
        [e.target.id]: false
      });
    }
    this.setState({
      [e.target.name]: e.target.value
    });

    if (
      this.state.name_vaid === null ||
      this.state.email_vaid === null ||
      this.state.birth_vaid === null ||
      this.state.delegacion_vaid === null ||
      this.state.colonia_vaid === null ||
      this.state.calle_vaid === null
    ) {
      this.isActivated = true;
      return;
    } else if (
      this.state.name_vaid ||
      this.state.email_vaid ||
      this.state.birth_vaid ||
      this.state.delegacion_vaid ||
      this.state.colonia_vaid ||
      this.state.calle_vaid
    ) {
      this.isActivated = true;
      return;
    } else if (
      !this.state.name_vaid &&
      !this.state.email_vaid &&
      !this.state.birth_vaid &&
      !this.state.delegacion_vaid &&
      !this.state.colonia_vaid &&
      !this.state.calle_vaid
    ) {
      this.isActivated = false;
      return;
    }
  };

  sendData = e => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      name: '',
      email: '',
      birth: '',
      delegacion: '',
      colonia: '',
      calle: '',
      numero_casa: '',
      name_vaid: null,
      email_vaid: null,
      birth_vaid: null,
      delegacion_vaid: null,
      colonia_vaid: null,
      calle_vaid: null,
      numero_casa_vaid: null
    });
    this.isActivated = true;
  };

  render() {
    return (
      <div className="fade-in-fast">
        <div className="crud-container">
          <header>
            <h1>Registro de Empleados.</h1>
          </header>
          <div>
            <form onSubmit={this.sendData}>
              <div className="forms">
                <div className="user-info">
                  <h2>Informacion basica.</h2>
                  <div>
                    <label htmlFor="name_vaid">Nombre Completo.</label>
                    <input
                      type="text"
                      className="input-name"
                      id="name_vaid"
                      placeholder="John Wick"
                      name="name"
                      value={this.state.name}
                      onChange={this.setData}
                    />
                    <Error
                      element={this.state.name_vaid}
                      texto="Por favor ingresa un Numbre valido."
                    />
                  </div>
                  <div>
                    <label htmlFor="email_vaid">Email.</label>
                    <input
                      type="text"
                      className="input-email"
                      id="email_vaid"
                      placeholder="John_Wick@gmail.com"
                      name="email"
                      value={this.state.email}
                      onChange={this.setData}
                    />
                    <Error
                      element={this.state.email_vaid}
                      texto="Por favor ingresa un Email valido."
                    />
                  </div>
                  <div>
                    <label htmlFor="birth_vaid">Cumpleaños.</label>
                    <input
                      type="date"
                      className="input-birth"
                      id="birth_vaid"
                      placeholder="birth"
                      name="birth"
                      value={this.state.birth}
                      onChange={this.setData}
                    />
                  </div>
                </div>
                <div className="user-adrees">
                  <h2>Direccion Del usuario.</h2>
                  <div>
                    <label htmlFor="delegacion_vaid">Delegacion.</label>
                    <input
                      type="text"
                      className="input-delegacion"
                      id="delegacion_vaid"
                      placeholder="delegacion"
                      name="delegacion"
                      value={this.state.delegacion}
                      onChange={this.setData}
                    />
                    <Error
                      element={this.state.delegacion_vaid}
                      texto="Por favor ingresa una delegacion valida."
                    />
                  </div>
                  <div>
                    <label htmlFor="colonia_vaid">Colonia.</label>
                    <input
                      type="text"
                      className="input-colonia"
                      id="colonia_vaid"
                      placeholder="colonia"
                      name="colonia"
                      value={this.state.colonia}
                      onChange={this.setData}
                    />
                    <Error
                      element={this.state.colonia_vaid}
                      texto="Por favor ingresa una colonia valida."
                    />
                  </div>
                  <div>
                    <label htmlFor="calle_vaid">Calle.</label>
                    <input
                      type="text"
                      className="input-calle"
                      id="calle_vaid"
                      placeholder="calle"
                      name="calle"
                      value={this.state.calle}
                      onChange={this.setData}
                    />
                    <Error
                      element={this.state.calle_vaid}
                      texto="Por favor ingresa una colonia valida."
                    />
                  </div>
                  <div>
                    <label htmlFor="numero_casa_vaid">Numero.</label>
                    <input
                      type="number"
                      className="input-numero_casa"
                      id="numero_casa_vaid"
                      placeholder="numero de casa"
                      name="numero_casa"
                      value={this.state.numero_casa}
                      onChange={this.setData}
                    />
                  </div>
                </div>

                <input
                  type="submit"
                  disabled={this.isActivated}
                  value="Agregar Usuario"
                  className="btn btn-success"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

// installar firebase
// importar a crud
// configurar las funciones
// configuar google geo
// consologear todo
// hacer peticion a google geo
//      si es correcta, guardar a fire base (solo lo importante), regresar algo al crud y reiniciar el form
//    sino, regresar algo al crud

// Implmentar listas
// implmentar google maps
