interface NavProp {
    onCerrarBienvenida: () => void;
    
}

export default function Bienvenida({ onCerrarBienvenida }: NavProp) {
    return (
        <>
            <div className="fuera-bienvenida" id="bienvenida">
                <div className="dentro-bienvenida">
                    <h2>MakerReact 3D</h2>
                    <p>
                        Bienvenid@ al sistema de Gestión de MakerReact 3D!
                        Recuerde siempre mantener el espacio de trabajo ordenado
                        para usted y los demás compañeros.
                    </p>

                    <button
                        className="btn-cerrar-bienvenida"
                        id="btn-bienvenida"
                        onClick={onCerrarBienvenida}
                    >
                        Ir al inventario
                    </button>
                </div>
            </div>
        </>
    );
}
