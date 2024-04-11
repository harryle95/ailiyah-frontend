import { useLoaderData, Form } from "react-router-dom";
import logo from "../resources/logo.png";
import { SideBarListItem } from "./SideBarListItem";


export function SideBar() {
    const items = useLoaderData();
    return (
        <div id="sidebar"
            className="bg-black text-white max-w-96 min-w-96 h-dvh px-4 py-4 flex flex-col justify-between gap-y-4 overflow-auto">
            <div id="sidebar-inner" className="flex flex-col gap-y-4" >
                {/* Icon bar */}
                <div className="flex items-center gap-2">
                    <img className="w-14 h-14" src={logo} alt="logo" />
                    <div className="font-sans font-bold leading-8 text-4xl">AILYAH</div>
                </div>

                {/* Project Navigation */}
                <nav className="px-10 w-full gap-y-4 max-h-[640px] flex flex-col overflow-x-hidden overflow-y-auto">
                    {items && items.map((item) => <SideBarListItem key={item.id} listItem={item} />)}
                </nav>
            </div>

            <div id="buttons" className="gap-y-4 flex flex-col">
                {/* New Project Button */}
                <div id="new-project-button"
                    className="w-5/6 h-12 mx-auto min-h-12 flex justify-center items-center rounded-lg border-solid border-2 bg-slate-900 hover:bg-slate-600"
                >
                    <Form method="POST">
                        <button type="submit">
                            <div className="flex flex-row gap-2">
                                <div>New Project</div>
                                {/* <img className="w-6" src={plus} alt="add" /> */}
                            </div>
                        </button>
                    </Form>
                </div>

                {/* User Button */}
                <div id="user-button"
                    className="w-5/6 h-12 mx-auto min-h-12 flex justify-center items-center rounded-lg border-solid border-2 bg-slate-900 hover:bg-slate-600"
                >
                    <a href="#" className="flex flex-row gap-2">
                        {/* <img className="w-6" src={usr} alt="usr" /> */}
                        <div>My Profile</div>
                    </a>
                </div>
            </div>

        </div>

    )
}