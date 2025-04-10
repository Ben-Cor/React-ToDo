function SubmitButton({string: title}) {
    return (
        <button type="submit" id="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            {title}
        </button>
    )
}

export default SubmitButton;