export default function Paginacion(props) {

    /*   */

    const getPaginas = () => {
        const resultado = [];

        for (var i = 0; i < props.total; i++) {
            resultado.push(
                <a onClick={props.onChange}
                    className={props.pagina === (i + 1) ? "active" : ''} href="#">
                    {(i + 1)}
                </a>
            );

        }

        return resultado;
    }

    return (
        <div className="topbar-filter">
            <label>Movies per page:</label>

            <div className="pagination2">
                <span>Pagina {props.pagina} de {props.total}:</span>

                {getPaginas()}
            </div>
        </div>
    )
}