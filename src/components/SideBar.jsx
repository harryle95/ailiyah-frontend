import { useLoaderData, Form } from "react-router-dom";
import logo from "../resources/logo.png";
import * as NavBar from "./built/NavBar";
import { NavBarTextBoxItem } from "./NavBarListItem";

function IconPanel() {
    return (
        <div className="flex items-center gap-4">
            <img className="w-14 h-14" src={logo} alt="logo" />
            <div className="font-sans font-bold text-xl">AILYAH</div>
        </div>
    )
}


// function ProfileButton() {
//     return <div id="user-button"
//         className="w-5/6 h-12 mx-auto min-h-12 flex justify-center items-center rounded-lg border-solid border-2 bg-black hover:bg-slate-700"
//     >
//         <a href="#" className="flex flex-row gap-2">
//             <div>My Profile</div>
//         </a>
//     </div>
// }

// function NewProjectButton() {
//     return <div id="new-project-button"
//         className="w-5/6 h-12 mx-auto min-h-12 flex justify-center items-center rounded-lg border-solid border-2 bg-black hover:bg-slate-700"
//     >
//         <Form method="POST">
//             <button type="submit">
//                 <div className="flex flex-row gap-2">
//                     <div>New Project</div>
//                 </div>
//             </button>
//         </Form>
//     </div>
// }

export function SideBar() {
    const items = useLoaderData();
    return (
        <NavBar.Root>
            <NavBar.Trigger />
            <NavBar.Content>
                <NavBar.Header>
                    <IconPanel />
                </NavBar.Header>
                <NavBar.Body twOther="scrollbar-thin">
                    {items? items.map(({id, name}) => <NavBarTextBoxItem key={id} id={id} name={name}/>):<></>}
                </NavBar.Body>
                {/* <NavBar.Footer>
                    <NewProjectButton />
                    <ProfileButton />
                </NavBar.Footer> */}
            </NavBar.Content>
        </NavBar.Root>
    )
}