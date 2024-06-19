import MemberTableRow from "./MemberTableRow"

const MembersTable = () => {
    return (
        <div className="h-96 overflow-x-auto overflow-y-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className="text-sm py-4">
                        <th>
                            <label>
                                {/*  <input type="checkbox" className="checkbox border-gray-300" />*/}
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Role</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="pb-4">
                    <MemberTableRow
                        profileImg="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                        firstName="Banky Dave"
                        lastName="Banky Dave"
                        phoneNumber="0900000000"
                        email="banky@mail.com"
                        role="Marketing"
                    />

                    <MemberTableRow
                        profileImg="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                        firstName="Banky Dave"
                        lastName="Banky Dave"
                        phoneNumber="0900000000"
                        email="banky@mail.com"
                        role="Marketing"
                    />

                </tbody>
            </table>
        </div>
    )
}

export default MembersTable