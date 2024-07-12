import { Avatar } from "@nextui-org/react"

const NavbarAll = () => {
    return (
        <div className="flex justify-between items-center  h-40 p-6 font-bold text-lg bg-blue-950  text-white">
            <h1 className="text-3xl"><strong>Enigma Laundri</strong></h1>

            <div className="flex ">
                <p className="pr-5 text-2xl">Admin</p>
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            </div>
        </div>
    )
}

export default NavbarAll