import { useState, useEffect } from 'react';

import Bienvenida from './components/Bienvenida';
import Tabla from './components/Tabla';

function App() {
    const [bienvenida, setBienvenida] = useState<boolean>(false);
    useEffect(() => {
        setBienvenida(true);
    }, []);

    const dataBase = [
        {
            id: 1,
            category: 'Impresora',
            parametro: 'BambuLab',
            year: 2014,
            value: 1000,
        },
        {
            id: 2,
            category: 'Filamento',
            parametro: 'Rojo',
            year: 2016,
            value: 160,
        },
        {
            id: 3,
            category: 'Impresora',
            parametro: 'Industrial MarcaInventada',
            year: 2025,
            value: 15000,
        },
        {
            id: 4,
            category: 'Filamento',
            parametro: 'Morado',
            year: 2020,
            value: 140,
        },
        {
            id: 5,
            category: 'Filamento',
            parametro: 'Verde',
            year: 2021,
            value: 170,
        },
    ];
    useEffect(() => {}, [dataBase]);

    return (
        <>
            <nav className="nav-container" id="nav">
                <h1>MakerReact 3D</h1>
            </nav>

            <select name="filtro" id="filtro-data">
              <option value="Todo">Todo</option>
              <option value="Impresora">Impresoras</option>
              <option value="Filamento">Todo</option>
            </select>

            {bienvenida && (
                <Bienvenida
                    onCerrarBienvenida={() => {
                        setBienvenida(false);
                    }}
                />
            )}
            <Tabla totalData={dataBase} valorFiltro={'Todo'} />
        </>
    );
}

export default App;
