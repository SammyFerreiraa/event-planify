import DashboardPage from '@/components/dashboard/page'
import { EventsTable } from './_components/events-table'

export default function Settings() {
  return (
    <DashboardPage>
      <DashboardPage.Header>
        <DashboardPage.Header.Title>Settings</DashboardPage.Header.Title>
      </DashboardPage.Header>
      <DashboardPage.Main>
        <EventsTable />
      </DashboardPage.Main>
    </DashboardPage>
  )
}
