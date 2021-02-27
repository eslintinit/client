import Link from 'next/link'

export const CTA = () => {
  return (
    <div className="flex justify-center mt-12 mb-32">
      <Link href={`/advisors`}>
        <button className="border-2 border-black font-medium p-4 px-16 rounded-full">
          See 105+ advisors
        </button>
      </Link>
    </div>
  )
}
