export const Card = (props) => {
    return (
        <div className="bg-white p-6 rounded-md shadow-md">
            <span
                className="font-bold text-indigo-600 text-sm tracking-wide"
                >{props.header}</span>
            {props.children}
        </div>
    )
}
