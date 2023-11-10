import Link from "next/link"

function StoreNavbar() {
  return (
    <section className="flex justify-evenly bg-gray-600 p-2 " >
        <Link href={'/store/cards'}>
            cards shopping
        </Link>
        <Link href={'/store/clothes'}>
            cards shopping
        </Link>
        <Link href={'/store/figuresa'}>
            cards shopping
        </Link>
    </section>
  )
}

export default StoreNavbar