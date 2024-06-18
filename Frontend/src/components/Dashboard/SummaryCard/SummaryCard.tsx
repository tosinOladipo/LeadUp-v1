interface ISummaryCardProps {
    cardTitle : string
    cardStat : number
    cardTimeline : string
    icon : React.ReactElement
}


const SummaryCard = ({cardTitle, cardStat, cardTimeline, icon }: ISummaryCardProps) => {
    return (
        <div className="stats shadow w-64 bg-white">
            <div className="stat">
                <div className="stat-figure text-primary">
                    {icon}
                </div>
                <div className="stat-title text-sm mb-2 text-blue-950">{cardTitle}</div>
                <div className="stat-value text-primary mb-2">{cardStat}</div>
                <div className="stat-desc text-blue-950">{cardTimeline}</div>
            </div>
        </div>
    )
}

export default SummaryCard 