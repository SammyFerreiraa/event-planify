import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  MixerHorizontalIcon,
  RocketIcon,
  UploadIcon,
  PlusCircledIcon,
  ExitIcon,
} from '@radix-ui/react-icons'
import { Session } from 'next-auth'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

type userDropdownProps = {
  user: Session['user']
}

export function UserDropdown({ user }: userDropdownProps) {
  const router = useRouter()
  if (!user) return
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="-px-0 relative flex h-8 w-full items-center justify-between space-x-2"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.image as string} alt={user.name as string} />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="flex flex-1 flex-col space-y-1 text-left">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <RocketIcon className="mr-3 h-4 w-4" />
          Upgrade
        </DropdownMenuItem>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <MixerHorizontalIcon className="mr-3 h-4 w-4" />
            Configurações
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <PlusCircledIcon className="mr-3 h-4 w-4" />
            Create Event
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => router.push('/')}>
          <UploadIcon className="mr-3 h-4 w-4" /> Homepage
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => signOut()}>
          <ExitIcon className="mr-3 h-4 w-4" /> Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
