import PrimaryButton from "@/Components/PrimaryButton";
import Guest from "@/Layouts/Guest";
import { Head, Link } from "@inertiajs/react";

export default function Welcome({ user }) {
    return (
    <Guest user={user}>
        <Head title="Welcome"></Head>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
            <div className="flex flex-col lg:justify-center">
                <h1 className="text-3xl uppercase mb-5">Welcome to EduRes</h1>
                <p className="mb-2">At EduRes we aim to provide students with a vast amount of resources to their disposal to use for study and other purposes. Our product is still being developed but with time it'll become what it's meant to be, a haven for learners of all fields.</p>
                <Link href={route('about')}><PrimaryButton>Learn More</PrimaryButton></Link>
            </div>
            <img className="" src={location.origin + "/images/_91da87da-2cc2-46ed-a7f4-971a0322e51b.jpeg"}></img>
        </div>

    </Guest>
    );
}


