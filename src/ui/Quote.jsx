import quote from "../assets/images/quote.png";

function Quote() {
    return (
        <div className="flex flex-col items-center text-center">
            <img src={quote} className="h-20 w-30"></img>
            <p className="-mt-2 text-xl ">"Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris."</p>
            <p className="m-5">- Adam Sendler</p>
        </div>
    )
}

export default Quote
