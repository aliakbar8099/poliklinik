function TabelTime({ time, weeks }) {
    return (
        <>
            {time?.weekDay.map(i => <p key={i}>{weeks[i]} <span>{i - time?.weekDay[0]}</span></p>)}
        </>
    );
}

export default TabelTime;