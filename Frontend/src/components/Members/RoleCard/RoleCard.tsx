interface ISummaryCardProps {
    roleTitle : string
    icon : React.ReactElement
    roleTotal  : number
}


const RoleCard = ({roleTitle, roleTotal, icon }: ISummaryCardProps) => {
    return (
        <div className="stats shadow w-64 bg-white">
            <div className="stat">
                <div className="stat-figure text-primary">
                    {icon}
                </div>
                <div className="stat-title text-base font-semibold mb-2 text-blue-950">{roleTitle}</div>
                <div className="stat-desc text-sm text-blue-950">{roleTotal}</div>
            </div>
        </div>
    )
}

export default RoleCard 