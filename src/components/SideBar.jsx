import { useLoaderData, Form } from "react-router-dom";
import logo from "../resources/logo.png";
import { SideBarListItem } from "./SideBarListItem";


export function SideBar() {
    const items = useLoaderData();
    return (
        <div id="sidebar"
            className="bg-black text-white min-w-[300px] h-dvh px-4 py-4 flex flex-col justify-between gap-y-4 overflow-auto">
            <div id="sidebar-inner" className="flex flex-col gap-y-4" >
                {/* Icon bar */}
                <div className="flex items-center gap-2">
                    <img className="w-14 h-14" src={logo} alt="logo" />
                    <div className="font-sans font-bold leading-8 text-xl">AILYAH</div>
                </div>

                {/* Project Navigation */}
                <nav className="w-full max-h-[640px] flex flex-col-reverse overflow-x-hidden overflow-y-auto">
                    {items && items.map((item) => <SideBarListItem key={item.id} listItem={item} />)}
                </nav>
            </div>

            <div id="buttons" className="gap-y-4 flex flex-col">
                {/* New Project Button */}
                <div id="new-project-button"
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

                {/* User Button */}
                <div id="user-button"
                    className="w-5/6 h-12 mx-auto min-h-12 flex justify-center items-center rounded-lg border-solid border-2 bg-black hover:bg-slate-700"
                >
                    <a href="#" className="flex flex-row gap-2">
                        <div>My Profile</div>
                    </a>
                </div>
            </div>

        </div>

    )
}