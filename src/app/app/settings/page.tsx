import DashboardPage from '@/components/dashboard/page'

export default function Settings() {
  return (
    <DashboardPage>
      <DashboardPage.Header>
        <DashboardPage.Header.Title>Settings</DashboardPage.Header.Title>
      </DashboardPage.Header>
      <DashboardPage.Main>
        <div className="flex flex-col space-y-6"></div>
      </DashboardPage.Main>
    </DashboardPage>
  )
}
