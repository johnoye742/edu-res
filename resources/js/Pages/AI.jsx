import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import ChatInput from '@/Components/ChatInput'
import Message from '@/Components/MessageBox'
import { useRef, useState } from 'react'
function AIPage() {
    const [message, setMessage] = useState('Hey')
    const [response, setResponse] = useState('')
    const [history, setHistory] = useState([])
    const bottom = useRef(null)

    async function query(data) {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/google/flan-t5-xxl",
            {
                headers: {
                    Authorization: "Bearer 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",
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        const result = await response.json();
        return result;
    }

    const send = () => {
        let data = {}
        /*if(history.length > 0) {
            console.log(history[history.length - 1])
            const lastM = history[history.length - 2].text
            const lastR = history[history.length - 1].text

            data = {"inputs": {
                'past_user_input': [lastM],
                'generated_responses': [lastR],
                'text': message
            }}
        } else {
         */
            data = {"inputs": message}
        //}

        console.log(data)
        query(data).then((response) => {
            setResponse(response)
            let human = {text: message, role: 'human'}
            let bot = {text: response[0].generated_text, role: 'bot'}
            history.push(human)
            history.push(bot)
            console.log(history)
            setMessage('')
            bottom.current.scrollIntoView({
                behaviour: 'smooth'
            })
        })
    }



    return (
        <Authenticated header={(
            <>
                <h1 className='text-3xl'>SupportAI</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit corporis illo similique maiores enim est. Quisquam numquam quis tempora aperiam a corporis illum illo, deserunt quod ducimus porro possimus ut!</p>
            </>

        )}>
            <Head title="Support AI"></Head>
            <div className='flex flex-col h-[70vh] overflow-y-scroll px-12 pt-5'>
                {history.map((msg, index) => {
                   return (<Message key={crypto.randomUUID()} text={msg.text} role={msg.role}/>)
                })}
                <p ref={bottom} className='invisible'>Created</p>
            </div>
            <ChatInput setMessage={setMessage} message={message} sendMessage={send}></ChatInput>
        </Authenticated>
    )
}


export default AIPage
