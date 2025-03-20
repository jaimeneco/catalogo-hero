import './Header.css'

export const Header = () => {
    return (
        <>
            <header>
                <picture >
                    <img className="Img" src="../img/logo.png" alt="logo" />
                </picture>
                <nav>
                    <ul className="Nav-ul">
                        <li>Lista de superhéroes</li>
                        <li>Crear nuevo superhéroe </li>
                        <li>Información</li>
                        <li>¡Llévate el tuyo!</li>
                    </ul>
                </nav>
            </header>
        </>
    );
}