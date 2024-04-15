import { useLoaderData, Form } from "react-router-dom";
import logo from "../resources/logo.png";
import { SideBarListItem } from "./SideBarListItem";
import NavBar from "./SComponents/NavBar";

function IconPanel() {
    return (
        <div className="flex items-center gap-4">
            <img className="w-14 h-14" src={logo} alt="logo" />
            <div className="font-sans font-bold leading-8 text-xl">AILYAH</div>
        </div>
    )
}

function SideBarNav({ items, className }) {
    return (
        <nav className={className}>
            <div className="flex flex-col overflow-x-hidden h-full">
                {items && items.map((item) => <SideBarListItem key={item.id} listItem={item} />)}
            </div>
        </nav>
    )
}

function ProfileButton() {
    return <div id="user-button"
        className="w-5/6 h-12 mx-auto min-h-12 flex justify-center items-center rounded-lg border-solid border-2 bg-black hover:bg-slate-700"
    >
        <a href="#" className="flex flex-row gap-2">
            <div>My Profile</div>
        </a>
    </div>
}

function NewProjectButton() {
    return <div id="new-project-button"
        className="w-5/6 h-12 mx-auto min-h-12 flex justify-center items-center rounded-lg border-solid border-2 bg-black hover:bg-slate-700"
    >
        <Form method="POST">
            <button type="submit">
                <div className="flex flex-row gap-2">
                    <div>New Project</div>
                </div>
            </button>
        </Form>
    </div>
}

export function SideBar() {
    const items = useLoaderData();
    return (
        <NavBar className='h-screen w-fit flex bg-black text-white flex-shrink-0'>
            <div className="pl-4 py-5 pr-3 flex flex-col gap-y-4 h-full">
                <div id="sidebar-inner" className="flex flex-col gap-y-4 w-full h-full overflow-auto" >
                    <IconPanel />
                    <SideBarNav items={items} className="w-full" />
                </div>

                <div id="buttons" className="gap-y-4 flex flex-col">
                    <NewProjectButton />
                    <ProfileButton />
                </div>
            </div>
        </NavBar >
    )
}