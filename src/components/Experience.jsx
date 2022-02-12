import data from "../data/experience.json"
import { Card } from "./Card"

export const Experience = () => {
    const shouldAlignLeft = (rowId) => {
        return rowId % 2 === 0
    }

    return (
        <div className="relative container mx-auto px-6 flex flex-col space-y-8">
            <div
                className="absolute z-0 w-2 h-full bg-white shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"
            ></div>
            {data.experiences.map((experience, index) => (
                <div className="relative z-10">
                    <img
                        src={experience.image}
                        alt=""
                        className="timeline-img"
                    />
                    <div className={`timeline-container ${shouldAlignLeft(index) ? "timeline-container-left": ""}`}>
                        <div className={`timeline-pointer ${shouldAlignLeft(index) ? "timeline-pointer-left": ""}`} aria-hidden="true"></div>
                        <Card header={experience.date}>
                            <h1 className="text-2xl font-bold pt-1">{experience.heading}</h1>
                            <p className="pt-1">{experience.content}</p>
                        </Card>
                    </div>
                </div>
            ))}
        </div>
    )
}
