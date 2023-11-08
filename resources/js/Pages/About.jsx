import { Head } from "@inertiajs/react"
import GuestLayout from "@/Layouts/Guest"

function About() {
    return (
        <GuestLayout>
            <Head title="About"></Head>
            <div>
                <h1 className="text-3xl text-center">About The Developer</h1>
                <div className="flex flex-row gap-5 justify-center items-center">
                    <img src={location.origin + '/images/me.jpeg'} className="rounded-full h-28 w-28 object-cover"></img>
                    <div>
                        <h1 className="text-2xl text-bold uppercase">I am John Oye</h1>
                        <p>I am a 15-year-old passionate independent software developer, who's being learning and developing applications for a couple of years now. I mostly do backend, but I'm a fullstack developer. Sounds unbelievable right 😅, but then there are a lot of young developers out there, but I'm built different 💪, I intend to create applications that'll solve real world problems, so if you like that consider contacting me with your ideas. I'm also open to gigs and roles 😊</p>
                    </div>
                </div>

                <h1 className="text-3xl text-center mt-10">Contact Me</h1>
                <p className="text-center mb-5">Reach me through the following platforms</p>
                <div className="grid grid-cols-4 gap-5">
                    <div className="rounded-lg relative p-5 border border-gray-200">
                        <h1 className="uppercase text-xl">Email Me</h1>
                        <p className="mb-4">Send me a message through my email.</p>
                        <a href="mailto:olugbengajohnoye@gmail.com" className=" decoration-dashed decoration-1 decoration-black text-blue-500">olugbengajohnoye@gmail.com</a>
                    </div>

                    <div className="rounded-lg relative p-5 border border-gray-200">
                        <h1 className="uppercase text-xl">WhatsApp</h1>
                        <p className="mb-4">Send me a message via WhatsApp.</p>
                        <a href="https://wa.me/+2347085760881" className=" decoration-dashed decoration-1 decoration-black text-blue-500">+2347085760881</a>
                    </div>

                    <div className="rounded-lg relative p-5 border border-gray-200">
                        <h1 className="uppercase text-xl">Facebook</h1>
                        <p className="mb-4">Send me a message via Facebook.</p>
                        <a href="https://fb.me/johnoye742" className=" decoration-dashed decoration-1 decoration-black text-blue-500">@johnoye742</a>
                    </div>

                    <div className="rounded-lg relative p-5 border border-gray-200">
                        <h1 className="uppercase text-xl">twitter</h1>
                        <p className="mb-4">Send me a message via Twitter (X).</p>
                        <a href="https://twitter.com/johnoye999" target="_blank" className=" decoration-dashed decoration-1 decoration-black text-blue-500">@johnoye999</a>
                    </div>
                </div>
            </div>

        </GuestLayout>
    )
}

export default About
