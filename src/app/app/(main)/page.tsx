import DashboardPage from '@/components/dashboard/page'
import { Button } from '@/components/ui/button'
import { CiCirclePlus } from 'react-icons/ci'

export default function Home() {
  return (
    <DashboardPage>
      <DashboardPage.Header>
        <DashboardPage.Header.Title>My Events</DashboardPage.Header.Title>
        <Button className="h-fit p-0" variant={'link'}>
          <CiCirclePlus className="mr-2 h-5 w-5" />
          Create
        </Button>
      </DashboardPage.Header>
      <DashboardPage.Main>oi</DashboardPage.Main>
    </DashboardPage>
  )
}
