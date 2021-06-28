import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline"><img src="https://res.cloudinary.com/zype/image/upload/e_vectorize:detail:1.0:corners:40:colors:2/v1624897334/logoShort.png_e6ot4x.svg" alt="Zype"/></a>
      </Link>
    </h2>
  )
}
