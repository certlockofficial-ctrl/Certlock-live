import { Container, Button, Card } from "@/components/ui";

export default function Home() {
  return (
    <div>
      <header className="border-b bg-white">
        <Container>
          <div className="flex items-center justify-between py-4">
            <div className="font-semibold text-xl">CertLock</div>
            <div className="flex gap-3">
              <a className="text-sm text-slate-700 hover:underline" href="/pricing">Pricing</a>
              <a className="text-sm text-slate-700 hover:underline" href="/login">Sign in</a>
              <Button href="/signup" className="text-sm">Start free trial</Button>
            </div>
          </div>
        </Container>
      </header>

      <main className="py-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl font-semibold leading-tight">
                Never miss an employee license renewal again.
              </h1>
              <p className="mt-4 text-lg text-slate-700">
                Store licenses and certifications securely, track expirations, and send automated email + SMS reminders.
                Audit-ready reports included.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/signup">Start 14-day free trial</Button>
                <a className="rounded-xl border px-4 py-2 hover:bg-white" href="/pricing">View pricing</a>
              </div>
              <p className="mt-3 text-sm text-slate-500">No credit card required for the trial.</p>
            </div>

            <Card>
              <div className="text-sm text-slate-600">What you get</div>
              <ul className="mt-4 space-y-2 text-slate-800">
                <li>✅ Employee directory + unlimited licenses per employee</li>
                <li>✅ Expiration dashboard (valid / expiring / expired)</li>
                <li>✅ Email + SMS reminders (admins)</li>
                <li>✅ Secure document links (ready for S3/Uploads)</li>
                <li>✅ CSV export (coming soon in this MVP)</li>
              </ul>
              <div className="mt-6 text-sm text-slate-600">
                Built for any industry: construction, healthcare, logistics, security, and more.
              </div>
            </Card>
          </div>
        </Container>
      </main>

      <footer className="border-t bg-white py-10">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-600">
            <div>© {new Date().getFullYear()} CertLock</div>
            <div className="flex gap-4">
              <a className="hover:underline" href="/terms">Terms</a>
              <a className="hover:underline" href="/privacy">Privacy</a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
