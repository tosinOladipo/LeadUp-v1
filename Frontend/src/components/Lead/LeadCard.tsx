interface ILeadFormContainerPros {
    children: React.ReactNode;
    formTitle: string
}


const LeadCard = ({ children, formTitle }: ILeadFormContainerPros) => {

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body flex flex-col gap-4">
                <h2 className="card-title text-xl font-semibold">{formTitle}</h2>
                <div className="form-content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default LeadCard