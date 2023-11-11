import PrimaryButton from "./PrimaryButton"
import TextInput from "./TextInput"
import '@flaticon/flaticon-uicons/css/regular/rounded.css'

function ChatInput({ setMessage, sendMessage, message }) {
    return (
        <div className="fixed py-5 px-8 w-full bottom-0 left-0">
            <div className="flex flex-row gap-3">
                <TextInput placeholder="Type a message" onKeyDown={(e) => {
                    if(e.key == "Enter") {
                        setMessage(e.target.value)
                        sendMessage('user').then((res) => {
                            let frm = new FormData()
                            frm.append('data', JSON.parse( localStorage.getItem('ai_usage')))

                            fetch(route('save-usage'), {
                                method: 'POST',
                                body: frm
                            }).then((res) => console.log(res.ok))
                        })
                    }
                 }} onChange={(e) => setMessage(e.target.value)} className="w-full" value={ message }></TextInput>
                <PrimaryButton onClick={sendMessage}><i className="fi fi-rr-paper-plane-top"></i></PrimaryButton>
            </div>

        </div>
    )
}

export default ChatInput
