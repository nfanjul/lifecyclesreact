import React, { Component } from 'react';

class Slide extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        // Se ejecuta antes de DOM
        // Recibe las props y las activa mediante super(props)
        // Ideal para inicializar
        // Instancias para mappers, validadores...

        // NO Llamada a carga de datos - Solo se llama la primera vez que instancias el componente
    }

    componentDidMount() {
        // El componente ya esta en el DOM
        // Solo se ejecuta una vez

        // Integración de librerias de terceros (geolocalización, notificaciones...)
        // AQUI cargamos los datos. Perfecto para peticiones HTTP --> Asincronia
        // Integración con storage, WebSocket
        
        // IMPORTANTE: Si cambiamos el estado, se vuelve a renderizar el componente
    }

    componentDidUpdate(prevProps, prevstate, snapshot) {
        // El componente ya esta en el DOM
        // Ya podemos interactuar con el DOM

        // this.props, this.state ya están actualizados
        // Tenemos acceso a las props y al estado antes de la actualización

        // Funciona muy parecido a componentDidMount()
    }

    shouldComponentUpdate(nextProps, nextState) {
        // Se ejecuta antes de renderizar
        // Desde aqui podremos forzar o abortar el renderizado del componente. Por defecto return true;
        // this.props, this.state

        // NUNCA cambiar el estado desde aqui, generariamos bucle infinito
        // Método puro

        // PUNTO CLAVE para mejorar el rendimiento
    }

    componentWillUnmount() {
        // Se ejecuta justo ANTES de que se desmonte del DOM
        // Perfecto para hacer reset y llimpiar nuestro componente
        // Desuscribirse de eventos o cancelar peticiones HTTP pendientes

        // Evita errores y sobrecargas de memória innecesaria
    }

    render() {
        // Genera la interfaz grafica.
        // SOLO HTML

        // NUNCA modificar el estado, vuelve a renderizar... (generariamos bucle infinito)
        // Método puro
        return (
            <div></div>
        );
    }
}

export default Slide;