import { Routes, Route } from "react-router-dom";
import { UserList } from "../pages/UserList"
import { User } from "../pages/User"
import { NewUser } from "../pages/NewUser"
import { UserLayout } from "../pages/UserLayout";

export function UserRoutes() {
    return (
        <>
            <UserLayout />
            <Routes>
                <Route index element={<UserList />} />
                <Route path=":id" element={<User />} />
                <Route path="new" element={<NewUser />} />
            </Routes>
        </>
    )
}