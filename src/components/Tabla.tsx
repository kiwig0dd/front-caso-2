interface TablaProp {
    totalData: any;
    valorFiltro: "Todo" | "Impresora" | "Filamento";
}

export default function Tabla({ totalData, valorFiltro }: TablaProp) {
    return (
        <div className="todo-tabla">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Categoria</th>
                        <th>Nombre</th>
                        <th>Año</th>
                        <th>Precio</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {totalData
                        ? totalData.map((data: any) => (
                              <tr>
                                  <td>{data.id}</td>
                                  <td>{data.category}</td>
                                  <td>{data.parametro}</td>
                                  <td>{data.year}</td>
                                  <td>{data.value}</td>
                                  <td>
                                      <button>editar</button>
                                  </td>
                                  <td>
                                      <button>eliminar</button>
                                  </td>
                              </tr>
                          ))
                        : 'No data'}
                </tbody>
            </table>
        </div>
    );
}
