import { useRouter } from 'next/router';

export default function Episodes() {
  const router = useRouter();

  return (
    <h1>{router.query.slug}</h1>
  )

}