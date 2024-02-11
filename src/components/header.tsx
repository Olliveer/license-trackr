import { Computer, Home, List } from "lucide-react";
import { NavLink } from "./nav-link";
import { Button } from "./ui/button";

import { UserButton } from "@clerk/clerk-react";

export function Header() {
  return (
    <div className="flex w-full border-b justify-between px-8">
      <div className="flex gap-2 m-4">
        <NavLink to={"/app"}>
          <Button variant={"outline"}>
            <Home className="h-4 w-4 mr-2" /> Home
          </Button>
        </NavLink>

        <NavLink to={"/app/licenses"}>
          <Button variant={"outline"}>
            <List className="h-4 w-4 mr-2" /> Licenses
          </Button>
        </NavLink>

        <NavLink to={"/app/equipments"}>
          <Button variant={"outline"}>
            <Computer className="h-4 w-4 mr-2" /> Equipments
          </Button>
        </NavLink>
      </div>
      <div className="flex m-4">
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage src="https://github.com/olliveer.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem onClick={() => {}}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu> */}
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
