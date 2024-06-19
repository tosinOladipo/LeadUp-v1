
interface IProgress {
    marketer : string,
    unit : number
}


const ProgressBar = ({marketer, unit} : IProgress) => {
  return (
    <div className="flex flex-col py-4">
    <h2 className="text-sm text-gray-800">{marketer} {unit}/10</h2>
    <progress className="progress progress-secondary w-56" value={unit} max="10"></progress>
    </div>
  )
}

export default ProgressBar