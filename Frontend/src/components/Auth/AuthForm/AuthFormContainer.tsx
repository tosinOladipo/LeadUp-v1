interface IAuthFormContainerPros {
  children: React.ReactNode;
  formTitle: string
}

const AuthFormContainer = ({ children, formTitle }: IAuthFormContainerPros) => {
  return (
    <div className="card w-96 bg-white shadow-xl mx-auto py-6 px-6 rounded-lg">
      <div className="card-body flex flex-col gap-3">
        <h2 className="card-title text-xl font-semibold">{formTitle}</h2>
        <div className="form-content">
            {children}
        </div>
      </div>
    </div>
  );
};

export default AuthFormContainer;
