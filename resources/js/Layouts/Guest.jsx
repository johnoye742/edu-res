import NavBar from "@/Components/NavBar"

function Guest({ children, user, header }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <NavBar user={user}></NavBar>

            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}
            <div className="lg:px-12 px-5 py-10">
                {children}
            </div>
        </div>
    )
}

export default Guest
