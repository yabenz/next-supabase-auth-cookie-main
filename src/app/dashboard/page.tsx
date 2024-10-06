import { cookies } from 'next/headers';

export default function DashboardPage() {
  const profileCookie = cookies().get('profile')?.value;

  if (!profileCookie) {
    return <div>Please log in to view your profile.</div>;
  }

  const profile = JSON.parse(profileCookie);

  return (
    <div>
      <h1>Welcome, {profile.name}!</h1>
      <p>Email: {profile.email}</p>
    </div>
  );
}
