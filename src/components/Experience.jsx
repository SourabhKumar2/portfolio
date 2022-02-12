import data from "../data/experience"
import { TimelineContent } from "./Timeline/TimelineContent"
import { TimelineImage } from "./Timeline/TimelineImage"
import { TimelinePoint } from "./Timeline/TimelinePoint"

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
                    <TimelinePoint element={<TimelineImage src={experience.company_logo} />} />
                    <TimelineContent
                        onLeft={shouldAlignLeft(index)}
                        header={experience.date}
                        title={experience.designation}
                        subTitle={experience.company}
                        content={experience.description} />
                </div>
            ))}
        </div>
    )
}
