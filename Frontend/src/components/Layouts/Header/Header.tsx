const Header = () => {
  return (
    <header>
      <div className="navbar bg-base-100 flex py-4 px-4">
        <div className="flex-1">
          <a className="text-xl">Dashboard</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered border rounded-full px-4 py-2 w-96 md:w-96"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
