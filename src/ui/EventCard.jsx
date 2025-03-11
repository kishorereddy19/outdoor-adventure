import Button from "./Button";

function EventCard({event,shouldContainLink=true}) {
    return (
        <li className="p-4 text-center items-start">
            <img src={event.image} alt="hiking.png" className="mx-auto shadow-lg" />
            <h4 className="font-semibold my-3 text-lg">{event.eventName}</h4>
            <p>{event.eventDescription}</p>
            {shouldContainLink && <Button>Learn More </Button>}
        </li>
    )
}

export default EventCard;
