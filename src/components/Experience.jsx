export const Experience = () => {
    const experiences = [
        {
            image: "https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100",
            date: "Jan 2022",
            heading: "An Amazing website",
            content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ullam ipsam. At cupiditate accusantium optio repudiandae pariatur fugiat necessitatibus, aut doloremque saepe ex iste rem distinctio veniam doloribus aliquid dolor."
        },
        {
            image: "https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100",
            date: "Jan 2021",
            heading: "An Amazing website",
            content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ullam ipsam. At cupiditate accusantium optio repudiandae pariatur fugiat necessitatibus, aut doloremque saepe ex iste rem distinctio veniam doloribus aliquid dolor."
        },
        {
            image: "https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100",
            date: "Jan 2020",
            heading: "An Amazing website",
            content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ullam ipsam. At cupiditate accusantium optio repudiandae pariatur fugiat necessitatibus, aut doloremque saepe ex iste rem distinctio veniam doloribus aliquid dolor."
        },
        {
            image: "https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100",
            date: "Jan 2019",
            heading: "An Amazing website",
            content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ullam ipsam. At cupiditate accusantium optio repudiandae pariatur fugiat necessitatibus, aut doloremque saepe ex iste rem distinctio veniam doloribus aliquid dolor."
        },
    ]

    const shouldAlignLeft = (rowId) => {
        return rowId % 2 === 0
    }

    return (
        <div className="relative container mx-auto px-6 flex flex-col space-y-8">
            <div
                className="absolute z-0 w-2 h-full bg-white shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"
            ></div>
            {experiences.map((experience, index) => (
                <div className="relative z-10">
                    <img
                        src={experience.image}
                        alt=""
                        className="timeline-img"
                    />
                    <div className={`timeline-container ${shouldAlignLeft(index) ? "timeline-container-left": ""}`}>
                        <div className={`timeline-pointer ${shouldAlignLeft(index) ? "timeline-pointer-left": ""}`} aria-hidden="true"></div>
                        <div className="bg-white p-6 rounded-md shadow-md">
                            <span
                                className="font-bold text-indigo-600 text-sm tracking-wide"
                                >{experience.date}</span>
                            <h1 className="text-2xl font-bold pt-1">{experience.heading}</h1>
                            <p className="pt-1">{experience.content}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
