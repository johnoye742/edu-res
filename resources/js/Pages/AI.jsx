import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import ChatInput from '@/Components/ChatInput'
import Message from '@/Components/MessageBox'
import { useRef, useState } from 'react'
import OpenAI from "openai"

function AIPage({ aKey, user }) {
    const [message, setMessage] = useState('Hey')
    const [response, setResponse] = useState('')
    const [history, setHistory] = useState([])
    const [status, setStatus] = useState('finished')
    const bottom = useRef(null)

    const localHistory = JSON.parse( localStorage.getItem('ai_usage'))
    const date = new Date()


    const openai = new OpenAI({
        apiKey: aKey,
        dangerouslyAllowBrowser: 'true'
    });

    async function generate(r) {
        if(localHistory != null)
        if(localHistory.length > 5) {
            console.log('exceeded '+ localHistory)
            return
        }


        setStatus('loading')
        const completion = await openai.chat.completions.create({
          messages: [{ role: 'user', content: message }],
          model: "gpt-3.5-turbo",
        });

        console.log(completion)


        let human = {text: message, role: 'human', date: date.getDay() + ' ' + date.toLocaleString('default', {month: 'short'})}
        let bot = {text: completion.choices[0].message.content, role: 'bot'}
        history.push(human)
        history.push(bot)
        localStorage.setItem('ai_usage', JSON.stringify(history))
        console.log(localHistory)
        setMessage('')
        setStatus('finished')
        bottom.current.scrollIntoView({
            behaviour: 'smooth'
        })


    }

    


    return (
        <Authenticated user={user} header={(
            <>
                <h1 className='text-3xl'>SupportAI</h1>
                <p>A lot of amazing features are still coming for our AI, We intend to </p>
            </>

        )}>
            <Head title="Support AI"></Head>
            <div className='flex flex-col h-[70vh] overflow-y-scroll px-12 pt-5'>
                {history.map((msg, index) => {
                   return (<Message key={crypto.randomUUID()} text={msg.text} role={msg.role}/>)
                })}
                <p ref={bottom} className={status == "finished" && 'hidden'}>Generating...</p>
            </div>

            <ChatInput setMessage={setMessage} message={message} sendMessage={generate}></ChatInput>
        </Authenticated>
    )
}


export default AIPage
