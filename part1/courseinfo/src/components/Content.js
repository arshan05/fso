// import Part from "./Part";
const Part = (props) =>{
    return(
        <>
            <p>{props.content.name} {props.content.exercises}</p>
        </>
    )
}

const Content = (props) => {
    return(
        <>
            <Part content = {props.part[0]} />
            <Part content = {props.part[1]} />
            <Part content = {props.part[2]} />
        </>
    )
}

export default Content;