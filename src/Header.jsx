

export default function Header({state,loader,reset}){
    return (
        <header className={loader||state?"logo logo-search-phase":"logo"} onClick={reset}>
            <img src="src\assets\logo.ico" alt="Logo" className={loader||state?"logo-img logo-img-search-phase":"logo-img "}/>
            <h1 className={loader||state?"hidden":null}>Mostafa</h1>
        </header>
    )
}