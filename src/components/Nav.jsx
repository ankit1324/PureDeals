import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useSelector} from "react-redux";


const Nav = () => {
const [products ,setProducts] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const itemList = useSelector((state)=> state.cart);
  // setProducts(itemList)
  console.log(itemList);

  return (
      <div>
        {/* Navigation Header */}
        <header className="bg-slate-900 text-gray-500 body-font fixed top-0 left-0 right-0 z-10">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
              <Link to={"/"} className="mr-8 hover:text-gray-100">
                Home
              </Link>
              <Link to={"/mens"} className="mr-8 hover:text-gray-100">
                Men
              </Link>
              <Link to={"/women"} className="mr-8 hover:text-gray-100">
                Women
              </Link>
              <Link to={"/kids"} className="hover:text-gray-50">
                Kids
              </Link>
            </nav>
            <Link
                to={"/"}
                className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  className="w-10 h-10 text-white hover:text-slate-900 p-2 bg-indigo-500 rounded-full"
                  viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-slate-50 hover:text-slate-500 text-xl">
              PureDeals
            </span>
            </Link>
            <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
              <button
                  onClick={() => setIsCartOpen(true)}
                  className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
              >
                CART
                <svg
                    fill="none"
                    stroke="currentColor"
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Cart Dialog */}
        {isCartOpen && (
            <Dialog open={isCartOpen} onClose={() => setIsCartOpen(false)} className="relative z-10">
              <DialogBackdrop className="fixed inset-0 bg-gray-500/75" />
              <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                    <DialogPanel className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out sm:duration-700">
                      <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                          <div className="flex items-start justify-between">
                            <DialogTitle className="text-lg font-medium text-gray-900">
                              Shopping cart
                            </DialogTitle>
                            <div className="ml-3 flex h-7 items-center">
                              <button
                                  type="button"
                                  onClick={() => setIsCartOpen(false)}
                                  className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                              >
                                <span className="sr-only">Close panel</span>
                                <XMarkIcon aria-hidden="true" className="w-6 h-6" />
                              </button>
                            </div>
                          </div>
                          <div className="mt-8">
                            <div className="flow-root">
                              <ul role="list" className="-my-6 divide-y divide-gray-200">
                                {products.map((product) => (
                                    <li key={product.id} className="flex py-6">
                                      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="h-full w-full object-cover"
                                        />
                                      </div>
                                      <div className="ml-4 flex flex-1 flex-col">
                                        <div>
                                          <div className="flex justify-between text-base font-medium text-gray-900">
                                            <h3>
                                              <a href={product.href}>{product.name}</a>
                                            </h3>
                                            <p className="ml-4">{product.price}</p>
                                          </div>
                                          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                        </div>
                                        <div className="flex flex-1 items-end justify-between text-sm">
                                          <p className="text-gray-500">Qty {product.quantity}</p>
                                          <div className="flex">
                                            <button
                                                type="button"
                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                            >
                                              Remove
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p>$262.00</p>
                          </div>
                          <p className="mt-0.5 text-sm text-gray-500">
                            Shipping and taxes calculated at checkout.
                          </p>
                          <div className="mt-6">
                            <a
                                href="#"
                                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                            >
                              Checkout
                            </a>
                          </div>
                          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                            <p>
                              or{" "}
                              <button
                                  type="button"
                                  onClick={() => setIsCartOpen(false)}
                                  className="font-medium text-indigo-600 hover:text-indigo-500"
                              >
                                Continue Shopping
                                <span aria-hidden="true"> &rarr;</span>
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </DialogPanel>
                  </div>
                </div>
              </div>
            </Dialog>
        )}
      </div>
  );
};

export default Nav;
