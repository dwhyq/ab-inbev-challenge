import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const Checkout = () => {
    return (
        <div>
            <h1>Working on a payment gateway</h1>
            <Link href="/">
          <span className="flex gap-1 items-center">
            <FaArrowLeft className="w-5 h-5" />
            Continue Shopping
          </span>
        </Link>
        </div>
    )
}
export default Checkout;