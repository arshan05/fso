const StatisticLine  = (props) => {
    return (
        <tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
        </tr>
    )
}

const Statistics = ({good,neutral,bad}) => {
    let all = good + neutral +bad;
    let average = (good - bad)/all;
    let positive = (good/all) * 100;

    if(all === 0){
        return(
            <p>No feedback given</p>
        )
    }

    return(
        <>
        <table>
            <tbody>
                <StatisticLine  text = 'good' value={good}/>
                <StatisticLine  text = 'neutral' value={neutral}/>
                <StatisticLine  text = 'good' value={bad}/>
                <StatisticLine  text = 'all' value={all}/>
                <StatisticLine  text = 'average' value={average}/>
                <StatisticLine  text = 'positive' value={positive + " %"}/>
            </tbody>
        </table>
        </>
    )
}

export default Statistics;