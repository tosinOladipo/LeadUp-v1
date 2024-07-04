interface ISummaryCardProps {
    funnelTitle : string
    icon : React.ReactElement
    funnelTotal  : number
}

const FunnelCard = ({funnelTitle, funnelTotal, icon }: ISummaryCardProps) => {
  return (
    <div className="stats shadow w-64 bg-white">
    <div className="stat">
        <div className="stat-figure text-primary">
            {icon}
        </div>
        <div className="stat-title text-base font-semibold mb-2 text-blue-950">{funnelTitle}</div>
        <div className="stat-desc text-sm text-blue-950">{funnelTotal}</div>
    </div>
</div>
  )
}

export default FunnelCard