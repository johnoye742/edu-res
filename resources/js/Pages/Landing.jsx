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
                <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate facilis tenetur debitis eveniet totam, sequi cumque alias unde. Debitis mollitia delectus voluptatibus autem cum praesentium reprehenderit velit blanditiis impedit nobis?</p>
                <Link href={route('about')}><PrimaryButton>Learn More</PrimaryButton></Link>
            </div>
            <img className="" src={location.origin + "/images/_91da87da-2cc2-46ed-a7f4-971a0322e51b.jpeg"}></img>
        </div>

    </Guest>
    );
}


