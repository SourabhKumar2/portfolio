import { Card } from "../Card"

export const TimelineContent = (props) => {
    return (
        <div className={`timeline-container ${props.onLeft ? "timeline-container-left": ""}`}>
            <div className={`timeline-pointer ${props.onLeft ? "timeline-pointer-left": ""}`} aria-hidden="true"></div>
            <Card header={props.title}>
                <h1 className="text-2xl font-bold pt-1">{props.subTitle}</h1>
                <p className="pt-1">{props.content}</p>
            </Card>
        </div>
    )
}
