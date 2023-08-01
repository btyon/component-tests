export default function Root() {
    return (
        <>
            <div className="content">
                <h1>Select a table component:</h1>
                <nav className="nav">
                    <a href={`/syncfusion`}>Syncfusion ✅</a>
                    <a href={`/primereact`}>PrimeReact ✅</a>
                    <a href={`/mui`}>Mui ✅</a>
                    <a href={`/ant`}>Ant ✅</a>
                </nav>
            </div>
        </>
    );
}