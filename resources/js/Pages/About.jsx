import { Head } from "@inertiajs/react"
import GuestLayout from "@/Layouts/Guest"

function About() {
    return (
        <GuestLayout>
            <Head title="About"></Head>
            <h1 className="text-3xl">About Us</h1>
        </GuestLayout>
    )
}

export default About
