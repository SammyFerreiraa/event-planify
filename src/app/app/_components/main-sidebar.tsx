'use client'

import { DashboardSidebar } from '@/components/dashboard/sidebar'
import { usePathname } from 'next/navigation'
import { UserDropdown } from './user-dropdown'
import { Session } from 'next-auth'
import Logo from '@/components/Logo'
import { LuHome, LuSettings2 } from 'react-icons/lu'
import { MdOutlineEventNote } from 'react-icons/md'

type mainSidebarProps = {
  user: Session['user']
}

export default function MainSidebar({ user }: mainSidebarProps) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  if (!user) return

  return (
    <DashboardSidebar>
      <DashboardSidebar.Header>
        <div className="flex items-center justify-center space-x-2 font-semibold hover:underline">
          <Logo />
          <span>EventPlanify</span>
        </div>
      </DashboardSidebar.Header>
      <DashboardSidebar.Main className="flex flex-grow flex-col">
        <DashboardSidebar.Nav>
          <DashboardSidebar.Nav.Main>
            <DashboardSidebar.Nav.NavLink href="/app" active={isActive('/app')}>
              <LuHome className="mr-3 h-4 w-4" />
              My Events
            </DashboardSidebar.Nav.NavLink>
            <DashboardSidebar.Nav.NavLink
              href="/app/events"
              active={isActive('/app/events')}
            >
              <MdOutlineEventNote className="mr-3 h-4 w-4" />
              Events
            </DashboardSidebar.Nav.NavLink>
            <DashboardSidebar.Nav.NavLink
              href="/app/settings"
              active={isActive('/app/settings')}
            >
              <LuSettings2 className="mr-3 h-4 w-4" />
              Settings
            </DashboardSidebar.Nav.NavLink>
          </DashboardSidebar.Nav.Main>
        </DashboardSidebar.Nav>
        <DashboardSidebar.Nav className="mt-auto">
          <DashboardSidebar.Nav.Header>
            <DashboardSidebar.Nav.Header.Title>
              Links extras
            </DashboardSidebar.Nav.Header.Title>
          </DashboardSidebar.Nav.Header>
          <DashboardSidebar.Nav.Main>
            <DashboardSidebar.Nav.NavLink href="/">
              Precisa de Ajuda?
            </DashboardSidebar.Nav.NavLink>
            <DashboardSidebar.Nav.NavLink href="/">
              Site
            </DashboardSidebar.Nav.NavLink>
          </DashboardSidebar.Nav.Main>
        </DashboardSidebar.Nav>
      </DashboardSidebar.Main>
      <DashboardSidebar.Footer>
        <UserDropdown user={user} />
      </DashboardSidebar.Footer>
    </DashboardSidebar>
  )
}
