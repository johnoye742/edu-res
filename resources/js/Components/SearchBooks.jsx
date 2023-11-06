import PrimaryButton from "./PrimaryButton"
import TextInput from "./TextInput"
import '@flaticon/flaticon-uicons/css/regular/all.css'

function Search({ q, setQ, fetch, ...props }) {
    return (
        <form onSubmit={(ev) => {
            ev.preventDefault()
            fetch(q)
        }}>
            <div {...props}>
                <TextInput placeholder="Search" value={q} onChange={(e) => setQ(e.target.value)}></TextInput>
                <PrimaryButton className="w-fit" ><i className="fi fi-rr-search"></i></PrimaryButton>
            </div>
        </form>
    )

}

export default Search
