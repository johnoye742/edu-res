function Message({ text, role }) {
    return (
        <div className={role != "human" ? "flex w-fit max-w-[70%] items-center px-4 py-2 bg-white border border-gray-300 mb-5 rounded-md font-semibold text-xs text-gray-700 shadow-sm transition ease-in-out duration-150" : "flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white transition ease-in-out duration-150 mb-5 float-right self-end max-w-[70%]"}>
            { text }
        </div>
    )
}

export default Message
