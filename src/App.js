import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Bookings extends React.Component {
    state = {
        list: [],
        distancia: '',
        tiempo: '',
        velocidad: ''
    };
    cambiarDatos = event => {
        const { target } = event;
        const { name, value } = target;
        this.setState({
            [name]: value
        });
    };
    handleSubmit = event => {
        const { distancia, tiempo, list } = this.state;
        if ( distancia && tiempo) {
            const id = list.length + 1;
            var arreglo = this.state.data;
            const velocidad =  distancia/tiempo;
            this.setState({
                list: [...list, { id, distancia, tiempo, velocidad }],
                distancia: '',
                tiempo: ''
            });
        } else {
            console.log('Complete los campos porfavor');
        }   
        event.preventDefault();
    };
    handleClean =  event => {
        var validador = true;
        var contador = 0;
        if (validador == true) {
            var contador = 0;
            var list = this.state;
        list.slice(contador, 1);
        contador++;
        this.setState({ state: true });
        }
    };
    render() {
    const { distancia, tiempo, list, velocidad } = this.state;
        return (
            <>
                <div class="d-flex flex-row " >
                    <div class="p-2 w-100">
                        <h1 class="py-2 font-black text-center text-dark sm:py-5 sm:text-2xl back">CALCULADORA DE VELOCIDAD</h1>
                    </div>
                </div>
                <div class="container">
                    <div class='row'>
                        <div class="col">
                            <form onSubmit={this.handleSubmit} className="form_tours">
                            <div className="form-group">
                                <label htmlFor="distancia">
                                    <h4 class="relative z-0 w-full max-w-md py-2 font-black text-left text-white sm:py-5 sm:text-2xl ">Ingrese el valor de la distancia:</h4>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="distancia"
                                        name='distancia'
                                        placeholder="Ingrese la distancia"
                                        value={distancia}
                                        onChange={this.cambiarDatos}
                                    />
                                </label>
                            </div>
                            <br>
                            </br>
                            <div className="form-group">
                                <label htmlFor="tiempo">
                                    <h4 class="relative z-0 w-full max-w-md py-2 font-black text-left text-white sm:py-5 sm:text-2x1">Ingrese el valor del tiempo:</h4>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="tiempo"
                                        name='tiempo'
                                        placeholder="Ingrese el tiempo"
                                        value={tiempo}
                                        onChange={this.cambiarDatos}
                                    />
                                </label>
                            </div>
                            <br>
                            </br>
                            <div className="distancia_btn">
                                <button type="submit" class="border border-2 rounded-top">
                                <h5 class="relative z-0 w-full max-w-md py-2 font-black text-left text-white sm:py-5 sm:text-1xl">RESULTADO </h5>
                                </button>
                            </div>  
                            </form>
                        </div>
                        <div class="col">
                            <div className="table_tours">
                                <table className="table" id='tabla-vaciar'>
                                    <thead>
                                        <tr class="relative z-0 w-full max-w-md py-2 font-black text-left text-white sm:py-5 sm:text-1xl"> 
                                            <th scope="col">#ID</th>
                                            <th scope="col">Distancia</th>
                                            <th scope="col">Tiempo</th>
                                            <th scope="col">Velocidad</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {list.map(item => (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.distancia}</td>
                                                <td>{item.tiempo}</td>
                                                <td>{item.velocidad}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <form onSubmit={this.handleClean}>
                            <button class="border border-2 rounded-top" >
                                <h5 class="relative z-0 w-full max-w-md py-2 font-black text-left text-white sm:py-5 sm:text-1xl">LIMPIAR </h5>
                            </button>
                            </form>
                        </div>
                    </div>                    
                </div>
            </>
        );
    }
}

export default Bookings;