import { useAuth } from "@/features/auth";
import {
  Avatar,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@heroui/react";
import { FiLogOut } from "react-icons/fi";

export default function ProfilePopover() {
  const { logout } = useAuth();
  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <div className="flex cursor-pointer items-center gap-3 p-2">
          <div className="flex flex-col items-end gap-1">
            <div className="text-xs font-semibold">Alex Riviera</div>
            <p className="text-[10px]">Operations Manager</p>
          </div>
          <Avatar className="outline-success/70 outline-2 outline-offset-2">
            {/* <Avatar.Image src="https://i.pravatar.cc/150?img=9" />
            <Avatar.Fallback className="" color="success">
            AR
            </Avatar.Fallback> */}
          </Avatar>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <Button
          color="danger"
          variant="light"
          className="w-40 gap-4 text-sm font-medium"
          onPress={logout}
        >
          <FiLogOut />
          Logout
        </Button>
      </PopoverContent>
    </Popover>
  );
}
