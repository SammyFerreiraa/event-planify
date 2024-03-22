import { DashboardPage } from '@/components/dashboard/page'
import { EventsTable } from './_components/events-table'
import { Button } from '@/components/ui/button'
import { CiCirclePlus } from 'react-icons/ci'

export default function Events() {
  return (
    <DashboardPage className="flex max-h-screen flex-col">
      <DashboardPage.Header>
        <DashboardPage.Header.Title>Events</DashboardPage.Header.Title>
        <Button className="h-fit p-0" variant={'link'}>
          <CiCirclePlus className="mr-2 h-5 w-5" />
          Join
        </Button>
      </DashboardPage.Header>
      <DashboardPage.Main className="flex-1 p-0">
        <EventsTable />
      </DashboardPage.Main>
    </DashboardPage>
  )
}
