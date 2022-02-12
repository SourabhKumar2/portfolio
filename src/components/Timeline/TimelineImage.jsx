export const TimelineImage = (props) => {
    return (
        <img
            src={props.src}
            alt={props.alt}
            className="timeline-img"
        />
    )
}


TimelineImage.defaultProps = {
    alt: ""
}
